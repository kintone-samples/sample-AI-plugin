import { createContext, useContext } from "react";

export const createCtx = <T,>() => {
  const ctx = createContext<T | null>(null);
  const useCtx = () => {
    const c = useContext(ctx);
    if (!c) throw new Error("Called outside provider!!");
    return c;
  };
  return [useCtx, ctx.Provider] as const;
};
