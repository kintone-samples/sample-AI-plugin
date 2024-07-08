import React, { useReducer } from "react";

import {
  DispatchProvider,
  LabelAndFieldCodeListProvider,
  PluginIdProvider,
  StateProvider,
} from "../context";
import { reducer } from "../reducers";

import type { Config, LabelAndFieldCode } from "src/ts/common/types";

type Props = {
  children: React.ReactNode;
  pluginId: string;
  labelAndFieldCodeList: LabelAndFieldCode[];
  savedPluginConfig: Config;
};

export const ProviderWrapper: React.FC<Props> = ({
  children,
  pluginId,
  labelAndFieldCodeList,
  savedPluginConfig,
}) => {
  const [configState, dispatch] = useReducer(reducer, {
    config: savedPluginConfig,
  });

  return (
    <PluginIdProvider value={pluginId}>
      <StateProvider value={configState}>
        <DispatchProvider value={dispatch}>
          <LabelAndFieldCodeListProvider value={labelAndFieldCodeList}>
            {children}
          </LabelAndFieldCodeListProvider>
        </DispatchProvider>
      </StateProvider>
    </PluginIdProvider>
  );
};
