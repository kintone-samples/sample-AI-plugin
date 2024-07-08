import { useCallback } from "react";

export const useOnSetTextToField = () => {
  const onSetTextToKintoneField = useCallback(
    (value: string, fieldCode: string) => {
      const record = kintone.app.record.get();
      kintone.app.record.set({
        record: {
          ...record.record,
          [fieldCode]: {
            type: record.record[fieldCode].type,
            value,
          },
        },
      });
    },
    [],
  );

  return { onSetTextToKintoneField };
};
