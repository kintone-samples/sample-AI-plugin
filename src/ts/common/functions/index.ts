import { createContext, useContext } from "react";

/**
 * デフォルト値のundefined許可しないcontextを作る関数
 * @returns context関数
 */
export const createCtx = <T>() => {
  const ctx = createContext<T | null>(null);
  const useCtx = () => {
    const c = useContext(ctx);
    if (!c) throw new Error("Called outside provider!!");
    return c;
  };
  return [useCtx, ctx.Provider] as const;
};

/**
 * 引数からAzureOpenAPIのURLを生成する関数
 * https://learn.microsoft.com/ja-jp/azure/ai-services/openai/reference
 * @param resourceName azure open apiのresource name
 * @param deploymentId azure open apiのdeployment ID
 * @param apiVersion azure open apiのapi-version
 * @returns AzureOpenAPIのURL
 */
export const createAzureOpenApiRequestURL = (
  resourceName: string,
  deploymentId: string,
  apiVersion: string,
) => {
  return `https://${resourceName}.openai.azure.com/openai/deployments/${deploymentId}/chat/completions?api-version=${apiVersion}`;
};
