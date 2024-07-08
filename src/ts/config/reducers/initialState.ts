import type { ConfigState } from "../types";

export const initialState: ConfigState = {
  config: {
    azureOpenApiResourceName: "",
    azureDeploymentId: "",
    azureOpenApiKey: "",
    azureOpenApiVersion: "",
    inputFieldCode: "",
    outputFieldCode: "",
    buttonSpaceCode: "",
  },
};
