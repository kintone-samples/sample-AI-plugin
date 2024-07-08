import React from "react";

import {
  EventProvider,
  IsAskingProvider,
  PluginConfigProvider,
} from "@desktop/context";

import { PluginIdProvider } from "@config/context";

import type { SavedConfig } from "../../common/types";

type Props = {
  children: React.ReactNode;
  event: any;
  config: SavedConfig;
  pluginId: string;
};

// provider for global state
export const ProviderWrapper: React.FC<Props> = ({
  children,
  event,
  config,
  pluginId,
}) => {
  const [isAsking, setIsAsking] = React.useState<boolean>(false);

  return (
    <EventProvider value={event}>
      <PluginConfigProvider value={config}>
        <PluginIdProvider value={pluginId}>
          <IsAskingProvider value={{ isAsking, setIsAsking }}>
            {children}
          </IsAskingProvider>
        </PluginIdProvider>
      </PluginConfigProvider>
    </EventProvider>
  );
};
