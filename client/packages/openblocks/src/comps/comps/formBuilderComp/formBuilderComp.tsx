import {
  TabContainerStyle,
  hiddenPropertyView,
  stringExposingStateControl,
} from "@openblocks-ee/index.sdk";
import { styleControl } from "comps/controls/styleControl";
import { trans } from "i18n";
import { Section, sectionNames } from "openblocks-design";

import { UICompBuilder } from "../../generators";
import {
  NameConfig,
  NameConfigHidden,
  withExposingConfigs,
} from "../../generators/withExposing";
import PlaygroundContainer from "./PlaygroundContainer";

/**
 * JsonLottie Comp
 */

let FormBuilderTmpComp = (function () {
  const childrenMap = {
    dataSchema: stringExposingStateControl(
      "dataSchema",
      JSON.stringify({
        type: "object",
        properties: {
          name: {
            title: "Name",
            type: "string",
          },
          phone: {
            title: "Phone",
            type: "number",
          },
        },
        dependencies: {},
        required: [],
      })
    ),
    uiSchema: stringExposingStateControl(
      "uiSchema",
      JSON.stringify({
        "ui:order": ["name", "phone"],
      })
    ),
    //width: withDefault(NumberControl, 100),
    //height: withDefault(NumberControl, 100),
    style: styleControl(TabContainerStyle),
  };

  return new UICompBuilder(childrenMap, (props) => {
    return (
      <div style={{ overflow: "auto" }}>
        <PlaygroundContainer
          dataSchema={props.dataSchema.value}
          uiSchema={props.uiSchema.value}
          style={props.style}
          onDataChange={(e: any) => {
            props.dataSchema.onChange(e);
            //props.dataSchema.value = JSON.parse(e).value;
          }}
          onuiChange={(e: any) => {
            props.uiSchema.onChange(e);
            //props.dataSchema.value = JSON.parse(e).value;
          }}
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
            {children.style.getPropertyView()}
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
  new NameConfig("dataSchema", trans("formBuilder.dataSchema")),
  new NameConfig("uiSchema", trans("formBuilder.uiSchema")),
  NameConfigHidden,
]);
