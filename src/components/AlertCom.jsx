import React from "react";

// MUI Imports
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";

const AlertCom = (props) => {
  return (
    <div className="alert__box">
      <Stack sx={{ width: "100%" }} spacing={2}>
        <Alert severity="error">{props.message}</Alert>
      </Stack>
    </div>
  );
};

export default AlertCom;
