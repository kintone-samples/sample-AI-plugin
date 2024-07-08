import { createCtx } from "src/ts/common/functions";

import type { ConfigState } from "../types";
import type { ActionType } from "../types/actions";
import type { LabelAndFieldCode } from "src/ts/common/types";

export const [usePluginIdCtx, PluginIdProvider] = createCtx<string>();

export const [useConfigStateCtx, StateProvider] = createCtx<ConfigState>();

export const [useDispatchCtx, DispatchProvider] =
  createCtx<React.Dispatch<ActionType>>();

export const [useLabelAndFieldCodeListCtx, LabelAndFieldCodeListProvider] =
  createCtx<LabelAndFieldCode[]>();
