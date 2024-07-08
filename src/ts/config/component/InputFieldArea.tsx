import React from "react";

import { TextField } from "@mui/material";

import { useConfigStateCtx, useDispatchCtx } from "@config/context";

export const InputFieldArea = () => {
  const state = useConfigStateCtx();
  const dispatch = useDispatchCtx();
  return (
    <>
      <TextField
        label="Azure Open Api Resource Name"
        variant="outlined"
        required
        fullWidth
        style={{ display: "block", marginBottom: "20px" }}
        value={
          state.config.azureOpenApiResourceName
            ? state.config.azureOpenApiResourceName
            : ""
        }
        onChange={(event) => {
          dispatch({
            type: "UPDATE_AZURE_OPEN_API_RESOURCE_NAME",
            payload: { azureOpenApiResourceName: event.currentTarget.value },
          });
        }}
      />
      <TextField
        label="Azure Open Api Deployment ID"
        variant="outlined"
        required
        fullWidth
        style={{ display: "block", marginBottom: "20px" }}
        value={
          state.config.azureDeploymentId ? state.config.azureDeploymentId : ""
        }
        onChange={(event) => {
          dispatch({
            type: "UPDATE_AZURE_DEPLOYMENT_ID",
            payload: { azureDeploymentId: event.currentTarget.value },
          });
        }}
      />
      <TextField
        label="Azure Open Api Version"
        variant="outlined"
        fullWidth
        required
        value={
          state.config.azureOpenApiVersion
            ? state.config.azureOpenApiVersion
            : ""
        }
        style={{ display: "block", marginBottom: "20px" }}
        onChange={(event) => {
          dispatch({
            type: "UPDATE_AZURE_OPEN_API_VERSION",
            payload: { azureOpenApiVersion: event.currentTarget.value },
          });
        }}
      />
      <TextField
        label="Azure Open Api Key"
        variant="outlined"
        fullWidth
        required
        value={state.config.azureOpenApiKey ? state.config.azureOpenApiKey : ""}
        style={{ display: "block", marginBottom: "20px" }}
        onChange={(event) => {
          dispatch({
            type: "UPDATE_AZURE_OPEN_API_KEY",
            payload: { azureOpenApiKey: event.currentTarget.value },
          });
        }}
      />
      <TextField
        label="ボタン表示するためのスペースのID"
        variant="outlined"
        fullWidth
        required
        value={state.config.buttonSpaceCode ? state.config.buttonSpaceCode : ""}
        style={{ display: "block", marginBottom: "20px" }}
        onChange={(event) => {
          dispatch({
            type: "UPDATE_BUTTON_SPACE_CODE",
            payload: { buttonSpaceCode: event.currentTarget.value },
          });
        }}
      />
    </>
  );
};
