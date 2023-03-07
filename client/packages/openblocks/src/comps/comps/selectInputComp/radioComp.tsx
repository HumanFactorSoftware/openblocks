import { Radio as AntdRadio } from "antd";
import { RadioStyleType } from "comps/controls/styleControlConstants";
import styled, { css } from "styled-components";
import { UICompBuilder } from "../../generators";
import { CommonNameConfig, NameConfig, withExposingConfigs } from "../../generators/withExposing";
import { RadioChildrenMap, RadioLayoutOptions, RadioPropertyView } from "./radioCompConstants";
import { SelectInputInvalidConfig, useSelectInputValidate } from "./selectInputConstants";
import { ValueFromOption } from "openblocks-design";
import { EllipsisTextCss } from "openblocks-design";
import { trans } from "i18n";

const getStyle = (style: RadioStyleType) => {
  return css`
    .ant-radio-wrapper:not(.ant-radio-wrapper-disabled) {
      color: ${style.staticText};
      height: 22px;
      max-width: calc(100% - 8px);

      span:not(.ant-radio) {
        ${EllipsisTextCss};
      }

      .ant-radio-checked {
        .ant-radio-inner {
          background-color: ${style.checkedBackground};
          border-color: ${style.checkedBackground};
        }

        &::after {
          border-color: ${style.checkedBackground};
        }
      }

      .ant-radio-inner {
        background-color: ${style.uncheckedBackground};
        border-color: ${style.uncheckedBorder};

        &::after {
          background-color: ${style.checked};
        }
      }

      &:hover .ant-radio-inner,
      .ant-radio:hover .ant-radio-inner,
      .ant-radio-input:focus + .ant-radio-inner {
        border-color: ${style.checkedBackground};
      }
    }
  `;
};

const Radio = styled(AntdRadio.Group) <{
  $style: RadioStyleType;
  $layout: ValueFromOption<typeof RadioLayoutOptions>;
}>`
  width: 100%;
  min-height: 32px;

  ${(props) => props.$style && getStyle(props.$style)}
  ${(props) => {
    if (props.$layout === "horizontal") {
      return css`
        display: flex;
        align-items: center;
        flex-wrap: wrap;
      `;
    } else if (props.$layout === "vertical") {
      return css`
        display: flex;
        flex-direction: column;
      `;
    } else if (props.$layout === "auto_columns") {
      return css`
        break-inside: avoid;
        columns: 160px;
      `;
    }
  }}
`;

export const RadioBasicComp = (function() {
  return new UICompBuilder(RadioChildrenMap, (props) => {
    const [validateState, handleValidate] = useSelectInputValidate(props);
    return props.label({
      required: props.required,
      style: props.style,
      children: (
        <Radio
          disabled={props.disabled}
          value={props.value.value}
          $style={props.style}
          $layout={props.layout}
          onChange={(e) => {
            handleValidate(e.target.value);
            props.value.onChange(e.target.value);
            props.onEvent("change");
          }}
          style={{
            marginTop: props.margin.top ? props.margin.top : 0,
            marginRight: props.margin.right ? props.margin.right : 0,
            marginBottom: props.margin.bottom ? props.margin.bottom : 0,
            marginLeft: props.margin.left ? props.margin.left : 0,
            paddingTop: props.padding.top ? props.padding.top : 0,
            paddingRight: props.padding.right ? props.padding.right : 0,
            paddingBottom: props.padding.bottom ? props.padding.bottom : 0,
            paddingLeft: props.padding.left ? props.padding.left : 0,
          }}

          options={props.options
            .filter((option) => option.value !== undefined && !option.hidden)
            .map((option) => ({
              label: option.label,
              value: option.value,
              disabled: option.disabled,
            }))}
        />
      ),
      ...validateState,
    });
  })
    .setPropertyViewFn((children) => <><RadioPropertyView {...children} />
    </>
    )
    .build();
})();

export const RadioComp = withExposingConfigs(RadioBasicComp, [
  new NameConfig("value", trans("selectInput.valueDesc")),
  SelectInputInvalidConfig,
  ...CommonNameConfig,
]);
