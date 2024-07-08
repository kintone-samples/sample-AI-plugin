import React from "react";

import { Button, Stack } from "@mui/material";

import { useSetPluginConfig } from "@config/hooks/useSetPluginConfig";

export const ButtonArea = () => {
  const appId = kintone.app.getId();
  const { onSetPluginConfig } = useSetPluginConfig();

  return (
    <div>
      <Stack spacing={2} direction="row">
        <Button
          variant="contained"
          onClick={() => {
            onSetPluginConfig();
          }}
        >
          SUBMIT
        </Button>
        <Button
          variant="outlined"
          onClick={() =>
            (window.location.href = `/k/admin/app/${appId}/plugin/#/`)
          }
        >
          CANCEL
        </Button>
      </Stack>
    </div>
  );
};
