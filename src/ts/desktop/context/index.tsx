import { createCtx } from "src/ts/common/functions";

import type { SavedConfig } from "../../common/types/";

export const [usePluginConfigCtx, PluginConfigProvider] =
  createCtx<SavedConfig>();

export const [usePluginIdCtx, PluginIdProvider] = createCtx<string>();

export const [useEventCtx, EventProvider] = createCtx<any>();
export const [useIsAskingCtx, IsAskingProvider] = createCtx<{
  isAsking: boolean;
  setIsAsking: React.Dispatch<boolean>;
}>();
