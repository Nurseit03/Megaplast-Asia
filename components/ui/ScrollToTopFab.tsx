'use client'

import { useCallback } from "react";
import { KeyboardArrowUp } from "@mui/icons-material";
import { Box, Fab, Zoom, useScrollTrigger, Tooltip } from "@mui/material";

export default function ScrollToTopFab() {
  const trigger = useScrollTrigger({
    threshold: 100,
  });
  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <Zoom in={trigger}>
      <Box
        role="presentation"
        sx={{
          position: "fixed",
          bottom: 32,
          right: 32,
          zIndex: 999,
        }}
      >
        <Tooltip title="Прокрутить вверх" arrow>
          <Fab onClick={scrollToTop} color="primary" size="small" aria-label="Scroll back to top">
            <KeyboardArrowUp fontSize="medium" />
          </Fab>
        </Tooltip>
      </Box>
    </Zoom>
  );
}
