import type { Reducer } from "react";

import { initialState } from "./initialState";

import type { ConfigState } from "../types";
import type { ActionType } from "../types/actions";

export const reducer: Reducer<ConfigState, ActionType> = (state, action) => {
  switch (action.type) {
    case "UPDATE_CONFIG": {
      return {
        ...state,
        config: action.payload.config,
      };
    }
    case "UPDATE_AZURE_OPEN_API_RESOURCE_NAME": {
      const newConfig = {
        ...state.config,
        azureOpenApiResourceName: action.payload.azureOpenApiResourceName,
      };
      return { ...state, config: newConfig };
    }
    case "UPDATE_AZURE_DEPLOYMENT_ID": {
      const newConfig = {
        ...state.config,
        azureDeploymentId: action.payload.azureDeploymentId,
      };
      return { ...state, config: newConfig };
    }
    case "UPDATE_AZURE_OPEN_API_KEY": {
      const newConfig = {
        ...state.config,
        azureOpenApiKey: action.payload.azureOpenApiKey,
      };
      return { ...state, config: newConfig };
    }
    case "UPDATE_AZURE_OPEN_API_VERSION": {
      const newConfig = {
        ...state.config,
        azureOpenApiVersion: action.payload.azureOpenApiVersion,
      };
      return { ...state, config: newConfig };
    }
    case "UPDATE_INPUT_FIELD_CODE": {
      const newConfig = {
        ...state.config,
        inputFieldCode: action.payload.inputFieldCode,
      };
      return { ...state, config: newConfig };
    }
    case "UPDATE_OUTPUT_FIELD_CODE": {
      const newConfig = {
        ...state.config,
        outputFieldCode: action.payload.outputFieldCode,
      };
      return { ...state, config: newConfig };
    }
    case "UPDATE_BUTTON_SPACE_CODE": {
      const newConfig = {
        ...state.config,
        buttonSpaceCode: action.payload.buttonSpaceCode,
      };
      return { ...state, config: newConfig };
    }
    case "RESET_PLUGIN_CONFIG": {
      return {
        ...state,
        ...initialState,
      };
    }
    default: {
      return state;
    }
  }
};
