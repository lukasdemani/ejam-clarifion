/* eslint-disable jsx-a11y/img-redundant-alt */
import { Box, Button, Link, Typography } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useLocation } from "react-router-dom";

const Main = () => {
  const { search } = useLocation();
  const isWithImage = Boolean(new URLSearchParams(search).get("withImage"));
  const isMobile = useMediaQuery("(max-width:700px)");

  return isMobile ? (
    <Box p="20px">
      <Typography fontSize="32px" textAlign="center">
        <span style={{ color: "#2C7EF8" }}>ONE TIME ONLY</span> special price
        for 6 extra Clarifion for only{" "}
        <span style={{ color: "#2C7EF8" }}>$14 each </span>
        ($84.00 total!)
      </Typography>
      {isWithImage && (
        <img
          alt="product-image"
          src="product-image.png"
          style={{ width: "100%", marginTop: "24px" }}
        />
      )}

      <Box display="flex" gap="24px" marginTop="24px">
        <Box
          bgcolor="#2C7EF8"
          width="80px"
          minWidth="80px"
          height="80px"
          borderRadius="10px"
        >
          <img
            alt="preview"
            src="preview-clarifion.png"
            style={{ width: "100%" }}
          />
        </Box>
        <Box width="100%" display="flex" flexDirection="column">
          <Box display="flex" justifyContent="space-between" width="100%">
            <Typography fontSize="14px">Clarifion Air Ionizer</Typography>
            <Box display="flex">
              <Typography
                fontSize="10px"
                color="#969696"
                sx={{
                  textDecoration: "line-through",
                }}
              >
                $180
              </Typography>
              <Typography fontSize="14px" style={{ color: "#2C7EF8" }}>
                $84
              </Typography>
            </Box>
          </Box>
          <img alt="stars" src="stars.png" style={{ width: "68px" }} />
          <Box display="flex" alignItems="center">
            <img
              alt="point"
              src="point.png"
              style={{
                width: "12px",
                minWidth: "12px",
                height: "12px",
              }}
            />
            <Typography fontSize="12px">12 left in Stock</Typography>
          </Box>
        </Box>
      </Box>
      <Typography fontSize="12px" textAlign="center" marginTop="16px">
        Simply plug a Clarifion into any standard outlet and replace bulky,
        expensive air purifiers with a simple.
      </Typography>
      <Box display="flex" flexDirection="column" gap="16px" marginTop="37px">
        <Box display="flex" gap="12px">
          <img
            alt="tick"
            src="tick.png"
            style={{ width: "16px", height: "16px" }}
          />
          <Typography fontSize="12px">
            Negative Ion Technology may <strong>help with allergens</strong>
          </Typography>
        </Box>
        <Box display="flex" gap="12px">
          <img
            alt="tick"
            src="tick.png"
            style={{ width: "16px", height: "16px" }}
          />
          <Typography fontSize="12px">
            Designed for <strong>air rejuvenation</strong>
          </Typography>
        </Box>
        <Box display="flex" gap="12px">
          <img
            alt="tick"
            src="tick.png"
            style={{ width: "16px", height: "16px" }}
          />
          <Typography fontSize="12px">
            <strong>Perfect for every room </strong>in all types of places.
          </Typography>
        </Box>
      </Box>
      <Box
        display="flex"
        borderRadius="10px"
        bgcolor="#EDF3FD"
        alignItems="center"
        gap="16px"
        height="56px"
        p="16px"
        marginTop="32px"
      >
        <img alt="percentage" src="percentage.png" />
        <Typography fontSize="14px">
          Save <span style={{ color: "#2C7EF8" }}>53%</span> and get{" "}
          <span style={{ color: "#2C7EF8" }}>6 extra Clarifision </span>for only{" "}
          <span style={{ color: "#2C7EF8" }}>$14 Each</span>.
        </Typography>
      </Box>
      <Button
        sx={{
          backgroundColor: "#59AE43",
          color: "#FFFFFF",
          marginTop: "32px",
          borderRadius: "50px",
          height: "51px",
          width: "100%",
        }}
      >
        Yes - Claim my discount{" "}
        {isMobile && (
          <img
            alt="next"
            src="next.png"
            style={{ width: "12px", height: "14px", marginLeft: "16px" }}
          />
        )}
      </Button>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="space-around"
        alignItems="center"
        marginTop="12px"
        sx={{
          border: 1,
          borderColor: "#CFCFCF",
          borderRadius: "4px",
          height: "71px",
        }}
      >
        <Box
          display="flex"
          justifyContent="space-around"
          width="100%"
          alignItems="center"
        >
          <Typography fontSize="12px" color="#4D5254" borderRight="1px">
            Free shipping
          </Typography>
          <Box
            width="1px"
            height="14px"
            sx={{ backgroundColor: "#CFCFCF" }}
          ></Box>
          <Box display="flex" gap="8px" alignItems="center">
            <img alt="lock" src="lock.png" style={{ height: "12px" }} />
            <Typography fontSize="12px" color="#4D5254" borderRight="1px">
              Secure 256-bit SSL encryption.
            </Typography>
          </Box>
        </Box>
        <Box width="90%" height="1px" sx={{ backgroundColor: "#CFCFCF" }}></Box>
        <img
          alt="payments"
          src="payments.png"
          style={{ height: "14px", width: "180px" }}
        />
      </Box>

      <Box display="flex" justifyContent="center">
        <Link
          href="#"
          sx={{
            color: "#F82C2C",
            textDecorationColor: "#F82C2C",
            marginTop: "12px",
          }}
        >
          No thanks, I don’t want this.
        </Link>
      </Box>

      <Box display="flex" alignItems="center" gap="16px" marginTop="32px">
        <img
          src="satisfaction.png"
          alt="satisfaction"
          style={{ width: "48px", height: "48px" }}
        />
        <Typography fontSize="12px" fontColor="#4D5254">
          If you are not completely thrilled with your Clarifion - We have a{" "}
          <strong>30 day satisfaction guarantee</strong>. Please refer to our
          return policy at the bottom of the page for more details. Happy
          Shopping!
        </Typography>
      </Box>
    </Box>
  ) : (
    <Box
      marginTop="40px"
      maxWidth="1245px"
      p="40px"
      borderRadius="10px"
      justifyContent="center"
      display="flex"
      margin="40px auto"
      sx={{
        backgroundColor: "#FAFAFA",
      }}
    >
      <Box
        display="flex"
        flexDirection={isMobile ? "column" : "row"}
        gap="40px"
      >
        <Box maxWidth="575px">
          <img
            alt="product-image"
            src="product-image.png"
            style={{ width: "100%" }}
          />
          <Box
            sx={{ backgroundColor: "#FFFFFF" }}
            p="24px"
            borderRadius="10px"
            marginTop="24px"
          >
            <img alt="review" src="review.png" />

            <Typography fontSize="16px" marginTop="18px">
              “As soon as the Clarifions arrived I put one in my bedroom. This
              was late in the afternoon. When I went to the bedroom in the
              evening it smelled clean. When I went to bed I felt I could
              breathe better. Wonderful.”
            </Typography>
          </Box>
        </Box>
        <Box>
          <Typography fontSize="32px">
            <span style={{ color: "#2C7EF8" }}>ONE TIME ONLY</span> special
            price for 6 extra Clarifion for only{" "}
            <span style={{ color: "#2C7EF8" }}>$14 each </span>
            ($84.00 total!)
          </Typography>
          <Box display="flex" flexDirection="column">
            <Box display="flex" gap="24px">
              <Box
                bgcolor="#2C7EF8"
                width="134px"
                minWidth="134px"
                height="134px"
                borderRadius="10px"
              >
                <img
                  alt="preview"
                  src="preview-clarifion.png"
                  style={{ width: "100%" }}
                />
              </Box>
              <Box width="100%" display="flex" flexDirection="column">
                <Box display="flex" justifyContent="space-between" width="100%">
                  <Typography fontSize="20px">Clarifion Air Ionizer</Typography>
                  <Box display="flex">
                    <Typography
                      fontSize="16px"
                      color="#969696"
                      sx={{
                        textDecoration: "line-through",
                      }}
                    >
                      $180
                    </Typography>
                    <Typography fontSize="22px" style={{ color: "#2C7EF8" }}>
                      $84
                    </Typography>
                  </Box>
                </Box>
                <img alt="stars" src="stars.png" style={{ width: "98px" }} />
                <Box display="flex" alignItems="center">
                  <img
                    alt="point"
                    src="point.png"
                    style={{
                      width: "16px",
                      minWidth: "16px",
                      height: "16px",
                    }}
                  />
                  <Typography fontSize="16px">12 left in Stock</Typography>
                </Box>
                <Typography>
                  Simply plug a Clarifion into any standard outlet and replace
                  bulky, expensive air purifiers with a simple.
                </Typography>
              </Box>
            </Box>

            <Box
              display="flex"
              flexDirection="column"
              gap="21px"
              marginTop="37px"
            >
              <Box display="flex" gap="12px">
                <img alt="tick" src="tick.png" />
                <Typography fontSize="16px">
                  Negative Ion Technology may{" "}
                  <strong>help with allergens</strong>
                </Typography>
              </Box>
              <Box display="flex" gap="12px">
                <img alt="tick" src="tick.png" />
                <Typography fontSize="16px">
                  Designed for <strong>air rejuvenation</strong>
                </Typography>
              </Box>
              <Box display="flex" gap="12px">
                <img alt="tick" src="tick.png" />
                <Typography fontSize="16px">
                  <strong>Perfect for every room </strong>in all types of
                  places.
                </Typography>
              </Box>
            </Box>
            <Box
              display="flex"
              borderRadius="10px"
              bgcolor="#EDF3FD"
              alignItems="center"
              gap="16px"
              height="56px"
              p="16px"
              marginTop="32px"
            >
              <img alt="percentage" src="percentage.png" />
              <Typography fontSize="16px">
                Save <span style={{ color: "#2C7EF8" }}>53%</span> and get{" "}
                <span style={{ color: "#2C7EF8" }}>6 extra Clarifision </span>
                for only <span style={{ color: "#2C7EF8" }}>$14 Each</span>.
              </Typography>
            </Box>
            <Button
              sx={{
                backgroundColor: "#59AE43",
                color: "#FFFFFF",
                marginTop: "32px",
                borderRadius: "50px",
                height: "59px",
              }}
            >
              Yes - Claim my discount
            </Button>
            <Box
              display="flex"
              justifyContent="space-around"
              alignItems="center"
              marginTop="12px"
              sx={{
                border: 1,
                borderColor: "#CFCFCF",
                borderRadius: "4px",
                height: "17px",
              }}
            >
              <Typography fontSize="12px" color="#4D5254" borderRight="1px">
                Free shipping
              </Typography>
              <Box
                width="1px"
                height="10px"
                sx={{ backgroundColor: "#CFCFCF" }}
              ></Box>
              <Box display="flex" gap="10px" alignItems="center">
                <img alt="lock" src="lock.png" style={{ height: "12px" }} />
                <Typography fontSize="12px" color="#4D5254" borderRight="1px">
                  Secure 256-bit SSL encryption.
                </Typography>
              </Box>
              <Box
                width="1px"
                height="10px"
                sx={{ backgroundColor: "#CFCFCF" }}
              ></Box>
              <img
                alt="payments"
                src="payments.png"
                style={{ height: "14px" }}
              />
            </Box>
            <Link
              href="#"
              sx={{
                color: "#F82C2C",
                textDecorationColor: "#F82C2C",
                textAlign: "center",
                marginTop: "20px",
              }}
            >
              No thanks, I don’t want this.
            </Link>
            <Box display="flex" alignItems="center" gap="16px" marginTop="32px">
              <img src="satisfaction.png" alt="satisfaction" />
              <Typography fontSize="16px" fontColor="#4D5254">
                If you are not completely thrilled with your Clarifion - We have
                a <strong>30 day satisfaction guarantee</strong>. Please refer
                to our return policy at the bottom of the page for more details.
                Happy Shopping!
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Main;
