import React from "react";

import { Box, Button, LinearProgress, Stack } from "@mui/material";

import { useOnClickButton } from "@desktop/hooks/useOnClickButton";

import { useIsAskingCtx } from "../context/index";

export const DesktopContainer = () => {
  const { isAsking } = useIsAskingCtx();
  const { onClickButton } = useOnClickButton();

  return (
    <div>
      {isAsking && (
        <Box sx={{ width: "100%", margin: "10px 0px" }}>
          <LinearProgress />
        </Box>
      )}
      <Stack spacing={2} direction="row">
        <Button variant="contained" onClick={() => onClickButton()}>
          AIに問い合わせて要約する
        </Button>
      </Stack>
    </div>
  );
};
