import React from "react";

import { InputLabel, MenuItem, Select } from "@mui/material";

import {
  useConfigStateCtx,
  useDispatchCtx,
  useLabelAndFieldCodeListCtx,
} from "@config/context";

export const FieldCodeDropdownArea = () => {
  const labelAndFieldCodeList = useLabelAndFieldCodeListCtx();
  const state = useConfigStateCtx();
  const dispatch = useDispatchCtx();

  return (
    <>
      <InputLabel id="input-label">
        Azure Open AIに要約して欲しい文字列複数行のフィールドコード
      </InputLabel>
      <Select
        labelId="input-label"
        value={state.config.inputFieldCode ? state.config.inputFieldCode : ""}
        label="Azure Open AIに要約して欲しい文字列複数行のフィールドコード"
        required
        fullWidth
        sx={{ mb: "10px" }}
        onChange={(event) => {
          dispatch({
            type: "UPDATE_INPUT_FIELD_CODE",
            payload: { inputFieldCode: event.target.value as string },
          });
        }}
      >
        {labelAndFieldCodeList.map((info) => {
          return (
            <MenuItem key={info.fieldCode} value={info.fieldCode}>
              LABEL: {info.label}, FIELD CODE: {info.fieldCode}
            </MenuItem>
          );
        })}
      </Select>
      <InputLabel id="answer-label">
        Azure Open AIの回答を表示するための文字列複数行フィールドコード
      </InputLabel>
      <Select
        labelId="answer-label"
        value={state.config.outputFieldCode ? state.config.outputFieldCode : ""}
        label="Azure Open AIの回答を表示するための文字列複数行フィールドコード"
        fullWidth
        required
        sx={{ mb: "10px" }}
        onChange={(event) => {
          dispatch({
            type: "UPDATE_OUTPUT_FIELD_CODE",
            payload: { outputFieldCode: event.target.value as string },
          });
        }}
      >
        {labelAndFieldCodeList.map((info) => {
          return (
            <MenuItem key={info.fieldCode} value={info.fieldCode}>
              LABEL: {info.label}, FIELD CODE: {info.fieldCode}
            </MenuItem>
          );
        })}
      </Select>
    </>
  );
};
