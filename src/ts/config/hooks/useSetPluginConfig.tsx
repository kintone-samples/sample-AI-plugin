import { useCallback } from "react";

import { useConfigStateCtx } from "@config/context";
import { createAzureOpenApiRequestURL } from "src/ts/common/functions";

import type { SavedConfig } from "src/ts/common/types";

export const useSetPluginConfig = () => {
  const {
    azureDeploymentId,
    azureOpenApiResourceName,
    azureOpenApiVersion,
    azureOpenApiKey,
    inputFieldCode,
    outputFieldCode,
    buttonSpaceCode,
  } = useConfigStateCtx().config;

  const onSetPluginConfig = useCallback(() => {
    if (
      azureOpenApiResourceName === "" ||
      azureDeploymentId === "" ||
      azureOpenApiVersion === "" ||
      inputFieldCode === "" ||
      outputFieldCode === "" ||
      buttonSpaceCode === "" ||
      azureOpenApiKey === ""
    ) {
      alert("Please fill in all required fields.");
      return;
    }

    const savingConfig: SavedConfig = {
      azureOpenApiResourceName,
      azureDeploymentId,
      azureOpenApiVersion,
      inputFieldCode,
      outputFieldCode,
      buttonSpaceCode,
    };

    const requestUrl = createAzureOpenApiRequestURL(
      azureOpenApiResourceName,
      azureDeploymentId,
      azureOpenApiVersion,
    );

    kintone.plugin.app.setProxyConfig(
      requestUrl,
      "POST",
      {
        "Content-Type": "application/json",
        "api-key": azureOpenApiKey,
      },
      {},
      () => {
        console.log("saved proxy config");
        kintone.plugin.app.setConfig(savingConfig);
      },
    );
  }, [
    azureOpenApiResourceName,
    azureDeploymentId,
    azureOpenApiVersion,
    inputFieldCode,
    outputFieldCode,
    buttonSpaceCode,
    azureOpenApiKey,
  ]);

  return { onSetPluginConfig };
};
