import { Button } from "@mui/material";
const ButtonMain = ({ text, variantButton, icon, size, func }) => {
  return (
    <Button
      sx={{ width: size, p: "15px", my: "6px" }}
      variant={variantButton}
      endIcon={icon}
      onClick={func}
    >
      {text}
    </Button>
  );
};

export default ButtonMain;
