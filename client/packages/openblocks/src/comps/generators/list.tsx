import { arrayMove, ToType } from "comps/utils";
import { genRandomKey } from "comps/utils/idGenerator";
import _ from "lodash";
import {
  CompAction,
  CompActionTypes,
  CompConstructor,
  CompParams,
  ConstructorToComp,
  ConstructorToDataType,
  CustomAction,
  customAction,
  fromRecord,
  FunctionNode,
  MultiBaseComp,
  withFunction,
  wrapDispatch,
} from "openblocks-core";
import { ReactNode } from "react";
import { JSONValue } from "util/jsonTypes";
import { lastValueIfEqual, setFieldsNoTypeCheck } from "util/objectUtils";

export type ListDataType<T> = Array<ConstructorToDataType<T>>;
export type CustomListAction<CompCtor extends CompConstructor = CompConstructor> = CustomAction<
  ListAction<CompCtor>
>;

type ListAction<CompCtor extends CompConstructor = CompConstructor> =
  | {
      type: "push";
      value: ConstructorToDataType<CompCtor>;
    }
  | {
      type: "pushComp";
      value: ConstructorToComp<CompCtor>;
    }
  | {
      type: "insert";
      index: number;
      value: ConstructorToDataType<CompCtor>;
    }
  | {
      type: "arrayMove";
      fromIndex: number;
      toIndex: number;
    }
  | {
      type: "delete";
      index: number;
    }
  | {
      type: "clear";
    }
  | {
      type: "multi";
      actions: Array<ToType<CustomListAction<CompCtor>>>;
    };

/**
 * The interface is list, but the internal implementation is still multi, using the index of the list as the key of the map.
 * There is one more member variable of childrenOrder than multi, which is not persistent.
 *
 * The reason why index is not used as key is: dispatch is routed through key, so the key of routing cannot be changed.
 */
export function list<ChildCompCtor extends CompConstructor<any, any>>(
  childConstructor: ChildCompCtor
) {
  function newChild(
    dispatch: (action: CompAction) => void,
    childName: string,
    childValue: ConstructorToDataType<ChildCompCtor>
  ) {
    return new childConstructor({
      dispatch: wrapDispatch(dispatch, childName),
      value: childValue,
    }) as ConstructorToComp<ChildCompCtor>;
  }
  class LIST_CLASS extends MultiBaseComp<
    Record<string, ConstructorToComp<ChildCompCtor>>,
    ListDataType<ChildCompCtor>
  > {
    /**
     * Used to store the order of children, not persistent
     */
    private childrenOrder: Array<string>;
    constructor(params: CompParams<ListDataType<ChildCompCtor>>) {
      super(params);
      this.childrenOrder = _.range(params.value ? params.value.length : 0).map((x) => x + "");
    }
    override parseChildrenFromValue(params: CompParams<ListDataType<ChildCompCtor>>) {
      const value = params.value;
      if (!value) {
        return {};
      }
      return value.reduce((res, item, index) => {
        const childName = index + "";
        return {
          ...res,
          [childName]: newChild(this.dispatch, childName, item),
        };
      }, {});
    }
    /**
     * The reason for not using getView directly is that getView may be overridden by subclasses
     */
    private getChildrenArray() {
      return this.childrenOrder.map((key) => this.children[key]);
    }
    override getView() {
      return this.getChildrenArray();
    }
    override getPropertyView(): ReactNode {
      return <>{this.getChildrenArray().map((child) => child.getPropertyView())}</>;
    }
    readonly IGNORABLE_DEFAULT_VALUE = [];
    override toJsonValue(): ListDataType<ChildCompCtor> {
      return this.getChildrenArray().map((comp) =>
        comp.toJsonValue()
      ) as ListDataType<ChildCompCtor>;
    }

    override reduce(action: CompAction): this {
      const comp = this.reduceOrUndefined(action);
      if (comp) {
        return comp;
      }
      if (action.type === CompActionTypes.CUSTOM) {
        return this.reduceCustom(action.value as ListAction<ChildCompCtor>);
      }
      return this;
    }

    private reduceCustom(action: ListAction<ChildCompCtor>): this {
      switch (action.type) {
        case "push":
          const key = genRandomKey();
          const newChildren = {
            ...this.children,
            [key]: newChild(this.dispatch, key, action.value),
          };
          return setFieldsNoTypeCheck(this, {
            children: newChildren,
            childrenOrder: [...this.childrenOrder, key],
          });
        case "pushComp": {
          const key = genRandomKey();
          const newChildren = {
            ...this.children,
            [key]: action.value.changeDispatch(wrapDispatch(this.dispatch, key)),
          };
          return setFieldsNoTypeCheck(this, {
            children: newChildren,
            childrenOrder: [...this.childrenOrder, key],
          });
        }
        case "insert":
          const insertKey = genRandomKey();
          const newChildrenAfterInsert = {
            ...this.children,
            [insertKey]: newChild(this.dispatch, insertKey, action.value),
          };

          const childrenOrderToInsert = [...this.childrenOrder];
          childrenOrderToInsert.splice(action.index, 0, insertKey);

          return setFieldsNoTypeCheck(this, {
            children: newChildrenAfterInsert,
            childrenOrder: childrenOrderToInsert,
          });
        case "delete":
          const keyToDelete = this.childrenOrder[action.index];
          const newChildrenOrder = this.childrenOrder.filter((_, i) => i !== action.index);
          return setFieldsNoTypeCheck(this, {
            children: _.omit(this.children, keyToDelete),
            childrenOrder: newChildrenOrder,
          });
        case "arrayMove":
          return setFieldsNoTypeCheck(this, {
            childrenOrder: arrayMove(this.childrenOrder, action.fromIndex, action.toIndex),
          });
        case "clear":
          return setFieldsNoTypeCheck(this, {
            children: {},
            childrenOrder: [],
          });
        case "multi":
          let comp = this;
          action.actions.forEach((actionInner) => {
            comp = comp.reduce(actionInner);
          });
          return comp;
      }
    }
    pushAction(value: ConstructorToDataType<ChildCompCtor>) {
      return customAction<ListAction<ChildCompCtor>>({
        type: "push",
        value: value,
      });
    }

    pushCompAction(comp: ConstructorToComp<ChildCompCtor>) {
      return customAction<ListAction<ChildCompCtor>>({
        type: "pushComp",
        value: comp,
      });
    }

    deleteAction(index: number) {
      return customAction<ListAction<ChildCompCtor>>({
        type: "delete",
        index: index,
      });
    }

    insertAction(index: number, value: ConstructorToDataType<ChildCompCtor>) {
      return customAction<ListAction<ChildCompCtor>>({
        type: "insert",
        index: index,
        value,
      });
    }

    arrayMoveAction(fromIndex: number, toIndex: number) {
      return customAction<ListAction<ChildCompCtor>>({
        type: "arrayMove",
        fromIndex: fromIndex,
        toIndex: toIndex,
      });
    }

    clearAction() {
      return customAction<ListAction<ChildCompCtor>>({
        type: "clear",
      });
    }

    exposingNode(): FunctionNode<any, ConstructorToDataType<ChildCompCtor>[]> {
      const childrenExposingNodes = this.getChildrenArray().map((i) => (i as any).exposingNode());
      const childrenExposingNode = fromRecord(Object.fromEntries(childrenExposingNodes.entries()));
      const result = withFunction(childrenExposingNode, (i) => Object.values(i));
      return lastValueIfEqual(
        this,
        "_expose_",
        [this.node(), result],
        (a, b) => a[0] === b[0]
      )[1] as FunctionNode<any, ConstructorToDataType<ChildCompCtor>[]>;
    }

    /**
     * Multiple actions are executed by order
     */
    multiAction(actions: Array<CustomListAction<ChildCompCtor>>) {
      return customAction<ListAction<ChildCompCtor>>({
        type: "multi",
        actions: actions,
      });
    }
  }
  return LIST_CLASS;
}

export function pushAction(value: JSONValue) {
  return customAction<ListAction>({
    type: "push",
    value: value,
  });
}
