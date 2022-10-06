import React from "react";

// MUI Imports
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";

const AlertCom = (props) => {
  return (
    <>
      <Stack sx={{ width: "100%" }} spacing={2}>
        <Alert severity={props.alert.clr} color={props.alert.clr}>
          {props.alert.msg}
        </Alert>
      </Stack>
    </>
  );
};

export default AlertCom;
