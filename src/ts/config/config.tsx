import React from "react";
import { createRoot } from "react-dom/client";

import { ConfigContainer } from "./component/ConfigContainer";
import { getAppFieldCodeAndLabels } from "./functions/getAppFieldCodeAndLabels";
import { getInitialPluginConfig } from "./functions/getInitialPluginConfig";
import { ProviderWrapper } from "./provider";

(async (PLUGIN_ID) => {
  "use strict";
  const container = document.getElementById("cybozu-sample-ai-plugin-config");
  if (!container) {
    alert("htmlにid:cybozu-sample-ai-plugin-configの要素がありません。");
    return;
  }

  const { status, list } = await getAppFieldCodeAndLabels();
  if (status === "error") {
    alert("プラグインに必要なフィールドが存在しません。");
    return;
  }

  const savedConfig = getInitialPluginConfig(PLUGIN_ID);

  const root = createRoot(container);
  root.render(
    <React.StrictMode>
      <ProviderWrapper
        pluginId={PLUGIN_ID}
        labelAndFieldCodeList={list}
        savedPluginConfig={savedConfig}
      >
        <ConfigContainer />
      </ProviderWrapper>
    </React.StrictMode>,
  );
})(kintone.$PLUGIN_ID);
