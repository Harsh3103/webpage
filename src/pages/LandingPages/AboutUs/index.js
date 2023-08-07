import React, { useRef, useEffect } from "react";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./dot.css"
// Material Kit 2 React components
import MKBox from "components/MKBox";
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import DefaultFooter from "examples/Footers/DefaultFooter";

// About Us page sections
import Information from "pages/LandingPages/AboutUs/sections/Information";
import Team from "pages/LandingPages/AboutUs/sections/Team";
// import Featuring from "pages/LandingPages/AboutUs/sections/Featuring";
// import Newsletter from "pages/LandingPages/AboutUs/sections/Newsletter";

// Routes
import routes from "routes";
import footerRoutes from "footer.routes";

// Images
import bgImage from "assets/images/bg-about-us.jpg";
import bgImage1 from "assets/images/background.jpg";
import SimpleModal from "./sections/Modal";
import Author from "../Author";
// import Dialog from "assets/theme/components/dialog";

function AboutUs() {
  const sliderRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      sliderRef.current.slickNext();
    }, 5000); // Change slide every 5 seconds

    return () => {
      clearInterval(interval);
    };
  }, []);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    appendDots: (dots) => (
      <div
      className="blurry-slide"
        style={{
          position: "absolute",
          bottom: "20px", // Adjust the bottom position as needed
          left: 0,
          right: 0,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <ul className="custom-dots" style={{ margin: "0" }}>
          {dots}
        </ul>
      </div>
    ),
    dotsClass: "slick-dots custom-dots", // Add custom class to dots
  };

  return (
    <>
      <DefaultNavbar
        routes={routes}
        action={{
          type: "external",
          route: "https://www.creative-tim.com/product/material-kit-react",
          label: "free download",
          color: "default",
        }}
        transparent
        light
      />

      <Slider ref={sliderRef} {...sliderSettings}>
        <div>
          <div
            style={{
              minHeight: "75vh",
              width: "100%",
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${bgImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              display: "grid",
              placeItems: "center",
              textAlign: "center",
            }}
          >
            <Container>
              {/* Content for the first slide */}
              <h1>harsh</h1>
              <h1>harsh</h1>
              {/* <Dialog/> */}
              <SimpleModal/>
            </Container>
          </div>
        </div>
        {/* Add more slides here if needed */}
        <div>
          <div
            style={{
              minHeight: "75vh",
              width: "100%",
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${bgImage1})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              display: "grid",
              placeItems: "center",
              textAlign: "center",
            }}
          >
            <Container>
              {/* Content for the second slide */}
            </Container>
          </div>
        </div>
        <div>
          <div
            style={{
              minHeight: "75vh",
              width: "100%",
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${bgImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              display: "grid",
              placeItems: "center",
              textAlign: "center",
            }}
          >
            <Container>
              {/* Content for the first slide */}
            </Container>
          </div>
        </div>
      </Slider>

      <Card
        sx={{
          p: 2,
          mx: { xs: 2, lg: 3 },
          mt: 2, // Adjust the margin as needed
          mb: 4,
          boxShadow: ({ boxShadows: { xxl } }) => xxl,
        }}
      > <Author/>
        <Information />
       
        <Team />
      
        {/* <Featuring /> */}
        {/* <Newsletter /> */}
      </Card>

      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
}

export default AboutUs;
