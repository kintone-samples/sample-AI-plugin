import { KintoneRestAPIClient } from "@kintone/rest-api-client";

import type { Properties } from "@kintone/rest-api-client/lib/src/client/types";
import type { OneOf } from "@kintone/rest-api-client/lib/src/KintoneFields/exportTypes/property";

/**
 * フィールドコード設定を取得し、必要なフィールドコードとラベルを返却する関数
 * @returns 取得成功可否のステータス及び、フィールドコードとラベルのオブジェクトの配列
 */
export const getAppFieldCodeAndLabels = async () => {
  const appId = kintone.app.getId();
  try {
    const client = new KintoneRestAPIClient();
    if (!appId) throw new Error("app IDが取得できませんでした");
    const res = await client.app.getFormFields({ app: appId });
    const textFieldInfoList = getOnlyTextFieldInfo(res.properties);
    const getOnlyLabelAndCodeList = getOnlyLabelAndCode(textFieldInfoList);
    return {
      status: "success",
      list: getOnlyLabelAndCodeList,
    };
  } catch (error) {
    console.error(error);
    return {
      status: "error",
      list: [],
    };
  }
};

const getOnlyTextFieldInfo = (properties: Properties) => {
  return Object.values(properties).filter((info) => {
    return info.type === "MULTI_LINE_TEXT";
  });
};

const getOnlyLabelAndCode = (fields: OneOf[]) => {
  return fields.map((field) => {
    return {
      label: field.label,
      fieldCode: field.code,
    };
  });
};
