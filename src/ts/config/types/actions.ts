import type { ConfigState } from ".";

type ActionList = {
  updateConfig: {
    type: "UPDATE_CONFIG";
    payload: {
      config: ConfigState["config"];
    };
  };
  azureOpenApiResourceName: {
    type: "UPDATE_AZURE_OPEN_API_RESOURCE_NAME";
    payload: {
      azureOpenApiResourceName: ConfigState["config"]["azureOpenApiResourceName"];
    };
  };
  deploymentId: {
    type: "UPDATE_AZURE_DEPLOYMENT_ID";
    payload: {
      azureDeploymentId: ConfigState["config"]["azureDeploymentId"];
    };
  };
  azureOpenApiVersion: {
    type: "UPDATE_AZURE_OPEN_API_VERSION";
    payload: {
      azureOpenApiVersion: ConfigState["config"]["azureOpenApiVersion"];
    };
  };
  inputFieldCode: {
    type: "UPDATE_INPUT_FIELD_CODE";
    payload: {
      inputFieldCode: ConfigState["config"]["inputFieldCode"];
    };
  };
  outputFieldCode: {
    type: "UPDATE_OUTPUT_FIELD_CODE";
    payload: {
      outputFieldCode: ConfigState["config"]["outputFieldCode"];
    };
  };
  buttonSpaceCode: {
    type: "UPDATE_BUTTON_SPACE_CODE";
    payload: {
      buttonSpaceCode: ConfigState["config"]["buttonSpaceCode"];
    };
  };
  azureOpenApiKey: {
    type: "UPDATE_AZURE_OPEN_API_KEY";
    payload: {
      azureOpenApiKey: ConfigState["config"]["azureOpenApiKey"];
    };
  };
  resetPluginConfig: {
    type: "RESET_PLUGIN_CONFIG";
  };
};

export type ActionType = ActionList[keyof ActionList];
