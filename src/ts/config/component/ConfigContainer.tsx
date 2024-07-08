import React from "react";

import { ButtonArea } from "./ButtonArea";
import { FieldCodeDropdownArea } from "./FieldCodeDropdownArea";
import { InputFieldArea } from "./InputFieldArea";

export const ConfigContainer = () => {
  return (
    <div style={{ maxWidth: "700px" }}>
      <fieldset style={{ border: "0px" }}>
        <InputFieldArea />
        <FieldCodeDropdownArea />
        <ButtonArea />
      </fieldset>
    </div>
  );
};
