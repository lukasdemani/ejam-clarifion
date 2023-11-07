import { Box, Typography } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";

const Footer = () => {
  const isMobile = useMediaQuery("(max-width:700px)");

  return (
    <Box bgcolor="#252F3D" height={isMobile ? "102px" : "88px"}>
      <Box
        display="flex"
        flexDirection={isMobile ? "column" : "row"}
        justifyContent={isMobile ? "space-around" : "space-between"}
        maxWidth="1245px"
        height="100%"
        margin="auto"
        alignItems="center"
      >
        <Box
          display="flex"
          alignItems="center"
          gap={isMobile ? "12px" : "16px"}
        >
          <Typography fontSize={isMobile ? "12px" : "16px"} color="#FFFFFF">
            Copyright (c) 2023
          </Typography>
          <Box
            width="1px"
            height="10px"
            sx={{ backgroundColor: "#CFCFCF" }}
          ></Box>
          <Typography fontSize={isMobile ? "12px" : "16px"} color="#FFFFFF">
            clarifionsupport@clarifion.com
          </Typography>
        </Box>
        <Box display="flex" alignItems="center" gap="16px">
          <img
            alt="lock-white"
            src="lock-white.png"
            style={{ color: '"#FFFFFF"' }}
          />
          <Typography fontSize={isMobile ? "12px" : "16px"} color="#FFFFFF">
            Secure 256-bit SSL encryption.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
