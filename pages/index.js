import { useEffect } from "react";
import { useRouter } from "next/router";
import GoogleIcon from "@mui/icons-material/Google";
import Box from "@mui/material/Box";
import LayautPagePre from "./layaut/LayautPagePre";
import ButtonMain from "../components/ButtonMain";
import { TextField, Alert, Stack } from "@mui/material";
import useRegister from "../hooks/useRegister";
const wi = "90%";

export default function Home() {
  const router = useRouter();
  const [handleRegister, handleLoginEmail, user, register] = useRegister();
  /*   useEffect(() => {
    if (register === true) {
      router.replace("/home");
    } else {
      null;
    }
  }, [register]); */
  return (
    <LayautPagePre title={"Login"}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h1>Register</h1>
        <TextField
          sx={{ width: wi, my: "10px" }}
          id="email"
          label="Email"
          variant="outlined"
        />
        <TextField
          sx={{ width: wi, my: "10px" }}
          id="password"
          label="Password"
          type="password"
          autoComplete="current-password"
          variant="outlined"
        />
        <ButtonMain
          func={handleLoginEmail}
          size={wi}
          text={"Register"}
          variantButton={"contained"}
        />
        <ButtonMain
          func={handleRegister}
          size={wi}
          icon={<GoogleIcon />}
          text={"Login with Google"}
          variantButton={"outlined"}
        />
      </Box>
      {register ? (
        <Stack sx={{ width: "100%" }} spacing={2}>
          <Alert severity="success">User Register</Alert>
        </Stack>
      ) : null}
    </LayautPagePre>
  );
}
