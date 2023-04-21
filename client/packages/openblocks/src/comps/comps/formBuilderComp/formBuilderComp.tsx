import { hiddenPropertyView } from "@openblocks-ee/index.sdk";
import {
  ArrayOrJSONObjectControl,
  NumberControl,
} from "comps/controls/codeControl";
import { styleControl } from "comps/controls/styleControl";
import { LottieStyle } from "comps/controls/styleControlConstants";
import { trans } from "i18n";
import { Section, sectionNames } from "openblocks-design";

import { UICompBuilder, withDefault } from "../../generators";
import {
  NameConfigHidden,
  withExposingConfigs,
} from "../../generators/withExposing";
import PlaygroundContainer from "./PlaygroundContainer";

/**
 * JsonLottie Comp
 */

let FormBuilderTmpComp = (function () {
  const childrenMap = {
    dataSchema: withDefault(ArrayOrJSONObjectControl, JSON.stringify({})),
    uiSchema: withDefault(ArrayOrJSONObjectControl, JSON.stringify({})),
    width: withDefault(NumberControl, 100),
    height: withDefault(NumberControl, 100),
    backgroundColor: styleControl(LottieStyle),
  };

  return new UICompBuilder(childrenMap, (props) => {
    return (
      <div
        style={{
          height: "100%",
          overflowY: "scroll",
          backgroundColor: `${props.backgroundColor.background}`,
        }}
      >
        <PlaygroundContainer
          dataSchema={JSON.stringify(props.dataSchema)}
          uiSchema={JSON.stringify(props.uiSchema)}
        />
      </div>
    );
  })
    .setPropertyViewFn((children) => {
      return (
        <>
          <Section name={sectionNames.basic}>
            {children.dataSchema.propertyView({
              label: trans("formBuilder.dataSchema"),
            })}
            {children.uiSchema.propertyView({
              label: trans("formBuilder.uiSchema"),
            })}
          </Section>
          <Section name={sectionNames.style}>
            {children.backgroundColor.getPropertyView()}
          </Section>
          <Section name={sectionNames.layout}>
            {hiddenPropertyView(children)}
          </Section>
        </>
      );
    })
    .build();
})();
FormBuilderTmpComp = class extends FormBuilderTmpComp {
  override autoHeight(): boolean {
    return false;
  }
};
export const FormBuilderComp = withExposingConfigs(FormBuilderTmpComp, [
  NameConfigHidden,
]);
