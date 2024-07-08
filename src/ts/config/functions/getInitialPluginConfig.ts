import { initialState } from "@config/reducers/initialState";
import { createAzureOpenApiRequestURL } from "src/ts/common/functions";

import type { Config } from "src/ts/common/types";

/**
 * 保存されているプラグインの設定を取得する。
 * @param pluginId プラグインのID
 * @returns 保存されているプラグインの設定。未設定の場合は値が空のオブジェクトが返却される。
 */
export const getInitialPluginConfig = (pluginId: string) => {
  const savedConfig = kintone.plugin.app.getConfig(pluginId);

  if (checkIsEmptyObject(savedConfig)) {
    return initialState.config;
  }

  // 型をキャスト
  savedConfig as Config;

  const { azureDeploymentId, azureOpenApiResourceName, azureOpenApiVersion } =
    savedConfig;

  const requestUrl = createAzureOpenApiRequestURL(
    azureOpenApiResourceName,
    azureDeploymentId,
    azureOpenApiVersion,
  );

  const azureOpenApiKey = !azureOpenApiResourceName
    ? ""
    : kintone.plugin.app.getProxyConfig(requestUrl, "POST").headers["api-key"];
  const config: Config = { ...savedConfig, azureOpenApiKey };

  return config;
};

const checkIsEmptyObject = (object: object) => {
  return Object.keys(object).length === 0;
};
