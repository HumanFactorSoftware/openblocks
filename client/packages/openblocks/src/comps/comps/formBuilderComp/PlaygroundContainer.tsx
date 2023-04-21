// @flow

import React from "react";

import JsonSchemaFormSuite from "./JsonSchemaFormSuite";

// Can be used to set initial schemas and mods (useful for development)
const initialJsonSchema = {};
const initialUiSchema = {};
const mods = {};

export default function PlaygroundContainer({
  dataSchema,
  uiSchema,
}: {
  dataSchema: any;
  uiSchema: any;
}) {
  const [schema, setSchema] = React.useState(dataSchema);
  const [uischema, setUischema] = React.useState(uiSchema);

  return (
    <div className="playground">
      <JsonSchemaFormSuite
        lang={"json"}
        schema={schema}
        uischema={uischema}
        mods={mods}
        schemaTitle="Data Schema"
        uischemaTitle="UI Schema"
        onChange={(newSchema: string, newUiSchema: string) => {
          setSchema(newSchema);
          setUischema(newUiSchema);
        }}
      />
    </div>
  );
}
