import { useCallback } from "react";

import { useIsAskingCtx, usePluginConfigCtx } from "@desktop/context";

import { useAzureOpenAI } from "./useAzureOpenAi";
import { useOnSetTextToField } from "./useOnSetTextToField";

export const useOnClickButton = () => {
  const { inputFieldCode, outputFieldCode } = usePluginConfigCtx();
  const { sendRequestToAzureOpenAPI } = useAzureOpenAI();
  const { setIsAsking } = useIsAskingCtx();
  const { onSetTextToKintoneField } = useOnSetTextToField();

  const onClickButton = useCallback(async () => {
    const record = kintone.app.record.get();
    if (!record.record[inputFieldCode].value) {
      alert("入力されている文章がありません。");
      return;
    }

    // ローディングバーを表示
    setIsAsking(true);
    // 問い合わせ中とフィールドに表示
    onSetTextToKintoneField(
      "Azure Open AIに問い合わせ中です。",
      outputFieldCode,
    );

    const inputTextValue = record.record[inputFieldCode].value;

    const { status, response } =
      await sendRequestToAzureOpenAPI(inputTextValue);

    // エラーの場合
    if (status === "error") {
      alert("エラーが起きました。 Azure OpenAIにアクセスできませんでした。");
      setIsAsking(false);
      onSetTextToKintoneField(
        "エラーにより出力できませんでした。",
        outputFieldCode,
      );
      return;
    }

    // フィールドに回答を表示ため、レコードにセット
    onSetTextToKintoneField(response, outputFieldCode);

    // ローディングバーを非表示
    setIsAsking(false);
  }, [
    inputFieldCode,
    setIsAsking,
    sendRequestToAzureOpenAPI,
    onSetTextToKintoneField,
    outputFieldCode,
  ]);

  return { onClickButton };
};
