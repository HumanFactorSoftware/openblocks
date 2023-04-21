// @flow
import React from "react";
// import {
//   Alert,
//   Modal,
//   ModalHeader,
//   Button,
//   ModalBody,
//   ModalFooter,
// } from "reactstrap";
import { withTheme } from "@rjsf/core";
import { Theme } from "@rjsf/antd";
import { Alert, Tabs } from "antd";
import type { TabsProps } from "antd";
import {
  FormBuilder,
  PredefinedGallery,
} from "@ginkgo-bioworks/react-json-schema-form-builder";
import withStyles from "react-jss";
import JSONInput from "react-json-editor-ajrm";
import locale from "react-json-editor-ajrm/locale/en";
import ErrorBoundary from "./ErrorBoundary";

const Form = withTheme(Theme);

type Props = {
  lang: string;
  schema: string;
  uischema: string;
  onChange?: (schema: string, uischema: string) => void;
  schemaTitle?: string;
  uischemaTitle?: string;
  width?: string;
  height?: string;
  classes: any;
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

const styles = {
  codeViewer: {
    backgroundColor: "lightgray",
    maxHeight: "550px",
    overflowY: "auto",
  },
};

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
          <div
            className="tab-pane"
            style={{
              height: this.props.height ? this.props.height : "500px",
            }}
          >
            <ErrorBoundary onErr={() => {}}>
              <FormBuilder
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
      {
        label: "Preview Form",
        key: "preview-form",
        children: (
          <div
            className="tab-pane"
            style={{
              height: this.props.height ? this.props.height : "500px",
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
              height: this.props.height ? this.props.height : "500px",
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
              height: this.props.height ? this.props.height : "500px",
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
    return (
      <div
        style={{
          width: this.props.width ? this.props.width : "100%",
          height: this.props.height ? this.props.height : "500px",
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
        <Tabs defaultActiveKey="form-builder">
          {items.map((item: TabItem) => (
            <Tabs.TabPane tab={item.label} key={item.key}>
              {item.children}
            </Tabs.TabPane>
          ))}
        </Tabs>
      </div>
    );
  }
}

export default withStyles(styles)(JsonSchemaFormEditor);
