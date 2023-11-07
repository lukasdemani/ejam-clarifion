import { Box, Button, Typography } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useState } from "react";

const Header = () => {
  const isMobile = useMediaQuery("(max-width:700px)");
  const [infoIndex, setInfoIndex] = useState(1);

  const headerItems = [
    {
      index: 1,
      alt: "checkmark",
      src: "checkmark.png",
      text: "30-DAY SATISFACTION GUARANTEE",
    },
    {
      index: 2,
      alt: "truck",
      src: "truck.png",
      text: "Free delivery on orders over $40.00",
    },
    {
      index: 3,
      alt: "heart",
      src: "heart.png",
      text: "50.000+ HAPPY CUSTOMERS",
    },
    {
      index: 4,
      alt: "arrow",
      src: "arrow.png",
      text: "100% Money Back Guarantee",
    },
  ];

  return (
    <Box width="100%">
      <Box
        display="flex"
        height={isMobile ? "42px" : "50px"}
        bgcolor="#252F3D"
        justifyContent="space-around"
      >
        {isMobile ? (
          <>
            <Button
              variant="text"
              onClick={() =>
                infoIndex === 1 ? setInfoIndex(4) : setInfoIndex(infoIndex - 1)
              }
              style={{ width: "20px" }}
            >
              <img alt="menor" src="menor.png" />
            </Button>
            <Box display="flex" alignItems="center" gap="8px">
              <img
                alt={headerItems.find((item) => item.index === infoIndex).alt}
                src={headerItems.find((item) => item.index === infoIndex).src}
                style={{ width: "22px", height: "22px" }}
              />
              <Typography fontSize="12px" fontWeight="500" color="#FFFFFF">
                {headerItems.find((item) => item.index === infoIndex).text}
              </Typography>
            </Box>
            <Button
              onClick={() =>
                infoIndex === 4 ? setInfoIndex(1) : setInfoIndex(infoIndex + 1)
              }
            >
              <img alt="maiorr" src="maior.png" />
            </Button>
          </>
        ) : (
          headerItems.map((item) => (
            <Box display="flex" alignItems="center" gap="8px">
              <img
                alt={item.alt}
                src={item.src}
                style={{ width: "22px", height: "22px" }}
              />
              <Typography fontSize="12px" fontWeight="500" color="#FFFFFF">
                {item.text}
              </Typography>
            </Box>
          ))
        )}
      </Box>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        height="96px"
        p={isMobile ? "0 20px 0 20px" : "0 127px 0 127px"}
      >
        <img
          alt="clarifion-logo"
          src="clarifion-logo.png"
          style={{
            width: isMobile ? "106.67px" : "192px",
            height: isMobile ? "20px" : "36px",
          }}
        />
        <Box height={isMobile ? "16px" : "32px"}>
          <img alt="mcafee-logo" src="mcafee.png" style={{ height: "100%" }} />
          <img alt="norton-logo" src="norton.png" style={{ height: "100%" }} />
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
