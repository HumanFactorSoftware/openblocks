// @flow
import React from "react";
import { withTheme } from "@rjsf/core";
import { Theme } from "@rjsf/antd";
import { Alert, Tabs } from "antd";
import { TabContainerStyleType } from "comps/controls/styleControlConstants";
import { ContainerStyleType } from "comps/controls/styleControlConstants";

import styled, { css } from "styled-components";
import {
  FormBuilder,
  PredefinedGallery,
} from "@ginkgo-bioworks/react-json-schema-form-builder";
import JSONInput from "react-json-editor-ajrm";
import locale from "react-json-editor-ajrm/locale/en";
import ErrorBoundary from "./ErrorBoundary";

const Form = withTheme(Theme);

type Props = {
  lang: string;
  schema: string;
  uischema: string;
  style?: any;
  onChange?: (schema: string, uischema: string) => void;
  schemaTitle?: string;
  uischemaTitle?: string;
  width?: string;
  height?: string;
  mods: any;
};

type State = {
  formData: any;
  formToggle: boolean;
  outputToggle: boolean;
  schemaFormErrorFlag: string;
  validFormInput: boolean;
  submissionData: any;
  editorWidth: number;
};

type TabItem = {
  key: string;
  label: string;
  children: any;
};

// return error message for parsing or blank if no error
function checkError(text: string, language: string) {
  let data;
  try {
    data = JSON.parse(text);
  } catch (e: any) {
    return e.toString();
  }
  if (typeof data === "string") {
    return "Received a string instead of object.";
  }
  return "";
}

const getWrapperStyle = (style: ContainerStyleType) => {
  return css`
    background-color: ${style.background};
    border-color: ${style.border};
    border-radius: ${style.radius};
    border-width: ${style.borderWidth};
    border-style: solid;
    margin: ${style.margin};
    padding: ${style.padding};

    .form-builder {
      [class^="formHead"] {
        background-color: ${style.background};
        border-color: ${style.border};
        border-radius: ${style.radius};
        border-width: ${style.borderWidth};
        border-style: solid;
        margin: ${style.margin};
        padding: ${style.padding};
        display: flex;
      }
      [class^="formHead"] div {
        padding: ${style.padding};
        width: 100%;
        &:first-child {
          margin-right: 0.6rem;
        }
      }
    }

    [class^="formBuilder"] .card-container {
      background-color: ${style.background};
      border-color: ${style.border};
      border-radius: ${style.radius};
      border-width: ${style.borderWidth};
      border-style: solid;
      margin: ${style.margin};
      padding: ${style.padding};

      &:hover {
        border-color: ${style.border};
      }
    }
    [class^="cardEntries"] .card-select {
      border: inherit;
      border-radius: inherit;
    }

    [class^="cardEntries"] input {
      border: 1px solid #d7d9e0;
      border-radius: ${style.radius};
    }
  `;
};

const getStyle = (style: TabContainerStyleType) => {
  return css`
    &.ant-tabs {
      border: ${style.borderWidth} solid ${style.border};
      border-radius: ${style.radius};
      overflow: hidden;
      margin: ${style.margin};
      padding: ${style.padding};

      > .ant-tabs-content-holder {
        overflow: auto;

        > .ant-tabs-content > div > .react-grid-layout {
          background-color: ${style.background};
          border-radius: 0;
        }
      }

      > .ant-tabs-nav {
        background-color: ${style.headerBackground};

        .ant-tabs-tab {
          div {
            color: ${style.tabText};
          }

          &.ant-tabs-tab-active div {
            color: ${style.accent};
          }
        }

        .ant-tabs-ink-bar {
          background-color: ${style.accent};
        }

        ::before {
          border-color: ${style.border};
        }
      }
    }
  `;
};

const StyledTabs = styled(Tabs)<{
  $style: TabContainerStyleType;
  $isMobile?: boolean;
}>`
  &.ant-tabs {
    height: 100%;
  }

  .ant-tabs-content-animated {
    transition-duration: 0ms;
  }

  .ant-tabs-content {
    height: 100%;
    // margin-top: -16px;
  }

  .ant-tabs-nav {
    padding: 0 ${(props) => (props.$isMobile ? 16 : 24)}px;
    background: white;
    margin: 0px;
  }

  .ant-tabs-tab + .ant-tabs-tab {
    margin: 0 0 0 20px;
  }

  .ant-tabs-nav-operations {
    margin-right: -24px;
  }

  ${(props) => props.$style && getStyle(props.$style)}
`;

const Wrapper = styled.div<{ $style: ContainerStyleType }>`
  display: flex;
  flex-flow: column;
  ${(props) => props.$style && getWrapperStyle(props.$style)}
`;

class JsonSchemaFormEditor extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    // assign initial values
    this.state = {
      formData: {},
      formToggle: true,
      outputToggle: false,
      schemaFormErrorFlag: "",
      validFormInput: false,
      editorWidth: 700,
      submissionData: {},
    };
  }

  componentDidMount() {
    const myElements = document.querySelectorAll(".form-control");
    myElements.forEach((element) => {
      element.classList.replace("form-control", "ant-input");
    });
  }
  // update state schema and indicate parsing errors
  updateSchema(text: string) {
    // update parent
    if (this.props.onChange) this.props.onChange(text, this.props.uischema);
  }

  // update state ui schema and indicate parsing errors
  updateUISchema(text: string) {
    // update parent
    if (this.props.onChange) this.props.onChange(this.props.schema, text);
  }

  // update the internal form data state
  updateFormData(text: string) {
    try {
      const data = JSON.parse(text);
      this.setState({
        formData: data,
        schemaFormErrorFlag: "",
      });
    } catch (err: any) {
      this.setState({
        schemaFormErrorFlag: err.toString(),
      });
    }
  }

  render() {
    const schemaError = checkError(this.props.schema, this.props.lang);
    const schemaUiError = checkError(this.props.uischema, this.props.lang);
    const items: TabItem[] = [
      {
        label: "Visual Form Builder",
        key: "form-builder",
        children: (
          <Wrapper
            className="tab-pane"
            $style={this.props.style}
            style={{ height: this.props.height ? this.props.height : "900px" }}
          >
            <ErrorBoundary onErr={() => {}}>
              <FormBuilder
                schema={this.props.schema}
                uischema={this.props.uischema}
                mods={this.props.mods}
                className="form-builder"
                onChange={(newSchema: string, newUiSchema: string) => {
                  if (this.props.onChange)
                    this.props.onChange(newSchema, newUiSchema);
                }}
              />
            </ErrorBoundary>
          </Wrapper>
        ),
      },
      {
        label: "Preview Form",
        key: "preview-form",
        children: (
          <div
            className="tab-pane"
            style={{
              height: this.props.height ? this.props.height : "900px",
            }}
          >
            <ErrorBoundary
              onErr={(err: string) => {
                this.setState({
                  schemaFormErrorFlag: err,
                });
              }}
              errMessage="Error parsing JSON Schema"
            >
              <Form
                schema={schemaError === "" ? JSON.parse(this.props.schema) : {}}
                uiSchema={
                  schemaUiError === "" ? JSON.parse(this.props.uischema) : {}
                }
                onChange={(formData) =>
                  this.updateFormData(JSON.stringify(formData.formData))
                }
                formData={this.state.formData}
                //submitButtonMessage={"Submit"}
                onSubmit={(submissionData) => {
                  // below only runs if validation succeeded
                  this.setState({
                    validFormInput: true,
                    outputToggle: true,
                    submissionData,
                  });
                }}
              />
            </ErrorBoundary>
            {/* <Modal isOpen={this.state.outputToggle}>
              <ModalHeader>Form output preview</ModalHeader>
              <ModalBody>
                <div className='editor-container'>
                  <ErrorBoundary
                    onErr={() => {}}
                    errMessage={'Error parsing JSON Schema Form output'}
                  >
                    <h4>Output Data</h4>
                    <pre className={this.props.classes.codeViewer}>
                      {JSON.stringify(this.state.submissionData, null, 2)}
                    </pre>
                  </ErrorBoundary>
                  <br />
                </div>
              </ModalBody>
              <ModalFooter>
                <Button
                  onClick={() => {
                    this.setState({
                      outputToggle: false,
                    });
                  }}
                  color='secondary'
                >
                  Close
                </Button>
              </ModalFooter>
            </Modal> */}
          </div>
        ),
      },
      {
        label: "Edit Schema",
        key: "editors",
        children: (
          <div
            className="tab-pane"
            style={{
              height: this.props.height ? this.props.height : "900px",
              display: "flex",
              flexDirection: "row",
            }}
          >
            <div
              style={{ margin: "1em", width: "50em" }}
              className="editor-container"
            >
              <ErrorBoundary
                onErr={(err: string) => {
                  // if rendering initial value causes a crash
                  // eslint-disable-next-line no-console
                  console.error(err);
                  this.updateSchema("{}");
                }}
                errMessage={"Error parsing JSON Schema input"}
              >
                <h4>Data Schema</h4>
                <JSONInput
                  id="data_schema"
                  placeholder={
                    this.props.schema
                      ? (() => {
                          try {
                            return JSON.parse(this.props.schema);
                          } catch (e) {
                            console.error(e);
                            return {};
                          }
                        })()
                      : {}
                  }
                  locale={locale}
                  height="550px"
                  onChange={(data: any) => this.updateSchema(data.json)}
                />
              </ErrorBoundary>
              <br />
            </div>
            <div
              style={{ margin: "1em", width: "50em" }}
              className="editor-container"
            >
              <ErrorBoundary
                onErr={(err: string) => {
                  // if rendering initial value causes a crash
                  // eslint-disable-next-line no-console
                  console.error(err);
                  this.updateUISchema("{}");
                }}
                errMessage={"Error parsing JSON UI Schema input"}
              >
                <h4>UI Schema</h4>
                <JSONInput
                  id="ui_schema"
                  placeholder={
                    this.props.uischema ? JSON.parse(this.props.uischema) : {}
                  }
                  locale={locale}
                  height="550px"
                  onChange={(data: any) => this.updateUISchema(data.json)}
                />
              </ErrorBoundary>
            </div>
          </div>
        ),
      },
      {
        label: "Pre-Configured Components",
        key: "pre-configured",
        children: (
          <div
            className="tab-pane"
            style={{
              height: this.props.height ? this.props.height : "900px",
            }}
          >
            <ErrorBoundary onErr={() => {}}>
              <PredefinedGallery
                schema={this.props.schema}
                uischema={this.props.uischema}
                mods={this.props.mods}
                onChange={(newSchema: string, newUiSchema: string) => {
                  if (this.props.onChange)
                    this.props.onChange(newSchema, newUiSchema);
                }}
              />
            </ErrorBoundary>
          </div>
        ),
      },
    ];
    //const editorState = EditorContext;
    //const maxWidth = editorState.getAppSettings().maxWidth;
    //const isMobile = checkIsMobile(maxWidth);

    return (
      <div
        style={{
          width: this.props.width ? this.props.width : "100%",
          height: this.props.height ? this.props.height : "900px",
        }}
        className="playground-main"
      >
        <Alert
          style={{
            display: schemaError === "" ? "none" : "block",
          }}
          type="error"
          closable
        >
          <h5>Schema:</h5> {schemaError}
        </Alert>
        <Alert
          style={{
            display: schemaUiError === "" ? "none" : "block",
          }}
          type="error"
          closable
        >
          <h5>UI Schema:</h5> {schemaUiError}
        </Alert>
        <Alert
          style={{
            display: this.state.schemaFormErrorFlag === "" ? "none" : "block",
          }}
          type="error"
          closable
        >
          <h5>Form:</h5> {this.state.schemaFormErrorFlag}
        </Alert>
        <StyledTabs
          defaultActiveKey="form-builder"
          $isMobile={false}
          $style={this.props.style}
        >
          {items.map((item: TabItem) => (
            <Tabs.TabPane tab={item.label} key={item.key}>
              {item.children}
            </Tabs.TabPane>
          ))}
        </StyledTabs>
      </div>
    );
  }
}

export default JsonSchemaFormEditor;
