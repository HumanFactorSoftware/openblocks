import { trans } from "i18n";
import { Section, sectionNames } from "openblocks-design";
import { numberExposingStateControl } from "../../controls/codeStateControl";
import { UICompBuilder } from "../../generators";
import {
  CommonNameConfig,
  NameConfig,
  withExposingConfigs,
} from "../../generators/withExposing";
import {
  SliderChildren,
  SliderPropertyView,
  SliderStyled,
  SliderWrapper,
} from "./sliderCompConstants";
import { hasIcon } from "comps/utils";
import { MarginControl } from "../../controls/marginControl";
import { PaddingControl } from "../../controls/paddingControl";

const RangeSliderBasicComp = (function () {
  const childrenMap = {
    ...SliderChildren,
    start: numberExposingStateControl("start", 10),
    end: numberExposingStateControl("end", 60),
    margin: MarginControl,
    padding: PaddingControl,
  };
  return new UICompBuilder(childrenMap, (props) => {
    return props.label({
      style: props.style,
      children: (
        <SliderWrapper
          onMouseDown={(e: any) => {
            e.stopPropagation();
            return false;
          }}
        >
          {hasIcon(props.prefixIcon) && props.prefixIcon}
          <SliderStyled
            {...props}
            range={true}
            value={[props.start.value, props.end.value]}
            $style={props.style}
            onChange={([start, end]) => {
              props.start.onChange(start);
              props.end.onChange(end);
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
          />
          {hasIcon(props.suffixIcon) && props.suffixIcon}
        </SliderWrapper>
      ),
    });
  })
    .setPropertyViewFn((children) => {
      return (
        <>
          <Section name={sectionNames.basic}>
            {children.start.propertyView({ label: trans("rangeSlider.start") })}
            {children.end.propertyView({ label: trans("rangeSlider.end") })}
            {children.max.propertyView({ label: trans("prop.maximum") })}
            {children.min.propertyView({ label: trans("prop.minimum") })}
            {children.step.propertyView({
              label: trans("rangeSlider.step"),
              tooltip: trans("rangeSlider.stepTooltip"),
            })}
          </Section>

          <SliderPropertyView {...children} />
          <Section name={trans("style.margin")}>
            {children.margin.getPropertyView()}
          </Section>
          <Section name={trans("style.padding")}>
            {children.padding.getPropertyView()}
          </Section>
        </>
      );
    })
    .build();
})();

export const RangeSliderComp = withExposingConfigs(RangeSliderBasicComp, [
  new NameConfig("start", trans("export.sliderStartDesc")),
  new NameConfig("end", trans("export.sliderEndDesc")),
  new NameConfig("max", trans("export.sliderMaxValueDesc")),
  new NameConfig("min", trans("export.sliderMinValueDesc")),
  ...CommonNameConfig,
]);
