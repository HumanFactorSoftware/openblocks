// @flow

import React from "react";

import JsonSchemaFormSuite from "./JsonSchemaFormSuite";

const mods = {};

export default function PlaygroundContainer({
  dataSchema,
  uiSchema,
  onDataChange,
  onuiChange,
  style,
}: {
  dataSchema: any;
  uiSchema: any;
  onDataChange: any;
  onuiChange: any;
  style: any;
}) {
  const [schema, setSchema] = React.useState(dataSchema);
  const [uischema, setUischema] = React.useState(uiSchema);

  return (
    <div className="playground">
      <JsonSchemaFormSuite
        style={style}
        lang={"json"}
        schema={schema}
        uischema={uischema}
        mods={mods}
        schemaTitle="Data Schema"
        uischemaTitle="UI Schema"
        onChange={(newSchema: string, newUiSchema: string) => {
          onDataChange(newSchema);
          onuiChange(newUiSchema);
          setSchema(newSchema);
          setUischema(newUiSchema);
        }}
      />
    </div>
  );
}
