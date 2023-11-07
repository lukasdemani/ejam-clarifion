import { Box, Typography } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";

const Steper = () => {
  const isMobile = useMediaQuery("(max-width:700px)");

  return (
    <Box maxWidth="1245px" margin="auto" p={isMobile && "20px"}>
      <Typography fontSize={isMobile ? "32px" : "48px"} textAlign="center">
        Wait ! your order in progress.
      </Typography>
      <Typography
        fontSize={isMobile ? "16px" : "24px"}
        color="#4D5254"
        textAlign="center"
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing
      </Typography>
      <Box display="flex" justifyContent="space-between" marginTop="60px">
        <Box
          display="flex"
          flexDirection={isMobile ? "column" : "row"}
          alignItems="center"
          gap={isMobile ? "8px" : "20px"}
        >
          <img
            alt="green-check"
            src="green-check.png"
            style={{
              width: isMobile ? "20px" : "40px",
              height: isMobile ? "20px" : "40px",
            }}
          />
          <Typography fontSize={isMobile ? "12px" : "20px"}>
            {isMobile ? "Cart Review" : "Step 1 : Cart Review"}
          </Typography>
        </Box>
        <Box
          display="flex"
          flexDirection={isMobile ? "column" : "row"}
          alignItems="center"
          gap={isMobile ? "8px" : "20px"}
        >
          <img
            alt="green-check"
            src="green-check.png"
            style={{
              width: isMobile ? "20px" : "40px",
              height: isMobile ? "20px" : "40px",
            }}
          />
          <Typography fontSize={isMobile ? "12px" : "20px"}>
            {isMobile ? "Checkout" : "Step 2 : Checkout"}
          </Typography>
        </Box>
        <Box
          display="flex"
          flexDirection={isMobile ? "column" : "row"}
          alignItems="center"
          gap={isMobile ? "8px" : "20px"}
        >
          <img
            alt="step-three"
            src="step-three.png"
            style={{
              width: isMobile ? "20px" : "40px",
              height: isMobile ? "20px" : "40px",
            }}
          />
          <Typography fontSize={isMobile ? "12px" : "20px"} fontWeight="700">
            {isMobile ? "Special Offer" : "Step 3 : Special Offer"}
          </Typography>
        </Box>
        <Box
          display="flex"
          flexDirection={isMobile ? "column" : "row"}
          alignItems="center"
          gap={isMobile ? "8px" : "20px"}
        >
          <img
            alt="step-four"
            src="step-four.png"
            style={{
              width: isMobile ? "20px" : "40px",
              height: isMobile ? "20px" : "40px",
            }}
          />
          <Typography fontSize={isMobile ? "12px" : "20px"}>
            {isMobile ? "Confirmation" : "Step 4 : Confirmation"}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Steper;
