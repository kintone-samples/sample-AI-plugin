import React from "react";
import { createRoot } from "react-dom/client";

import { DesktopContainer } from "./component/DesktopContainer";
import { ProviderWrapper } from "./provider";

import type { SavedConfig } from "../common/types";

((PLUGIN_ID) => {
  const config = kintone.plugin.app.getConfig(PLUGIN_ID) as SavedConfig;

  kintone.events.on(
    ["app.record.create.show", "app.record.edit.show"],
    (event) => {
      if (
        !config.azureOpenApiResourceName ||
        !config.azureDeploymentId ||
        !config.inputFieldCode ||
        !config.outputFieldCode ||
        !config.buttonSpaceCode
      ) {
        console.error("no plugin config");
        return event;
      }

      const spaceElement = kintone.app.record.getSpaceElement(
        config.buttonSpaceCode,
      );

      if (!spaceElement) {
        alert("プラグインに使用するスペースフィールドが見つかりませんでした。");
        console.error(
          "プラグインに使用するスペースフィールドが見つかりませんでした。",
        );
        return event;
      }

      const divElement = document.createElement("div");
      divElement.id = "cy-ai-plugin";
      const root = createRoot(divElement);
      spaceElement.appendChild(divElement);

      root.render(
        <React.StrictMode>
          <ProviderWrapper config={config} event={event} pluginId={PLUGIN_ID}>
            <DesktopContainer />
          </ProviderWrapper>
        </React.StrictMode>,
      );

      return event;
    },
  );
})(kintone.$PLUGIN_ID);
