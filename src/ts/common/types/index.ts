export type SavedConfig = {
  azureOpenApiResourceName: string;
  azureDeploymentId: string;
  azureOpenApiVersion: string;
  inputFieldCode: string;
  outputFieldCode: string;
  buttonSpaceCode: string;
};

export type ProxyConfig = {
  azureOpenApiKey: string;
};

export type Config = SavedConfig & ProxyConfig;

export type LabelAndFieldCode = {
  label: string;
  fieldCode: string;
};
