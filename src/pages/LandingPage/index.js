/*
=========================================================
* Material Kit 2 PRO React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-pro-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Stack from "@mui/material/Stack";

// Material Kit 2 PRO React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MKButton from "components/MKButton";

// Material Kit 2 PRO React examples
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import DefaultFooter from "examples/Footers/CenteredFooter";

// Sections
import CommunityProducts from "pages/LandingPage/sections/CommunityProducts";
import OfficialProducts from "pages/LandingPage/sections/OfficialProducts";

// Routes
import routes from "routes";
import footerRoutes from "footer.routes";

// Images
import bgImage from "assets/images/bg-landing.jpg";

function Landing() {
  return (
    <>
      <DefaultNavbar
        routes={routes}
        action={{
          type: "internal",
          route: "/",
          label: "Join Us",
          color: "info",
        }}
        sticky
      />
      <MKBox
        minHeight="75vh"
        width="100%"
        sx={{
          backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
            `${linearGradient(
              rgba(gradients.dark.main, 0.5),
              rgba(gradients.dark.state, 0.5)
            )}, url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "grid",
          placeItems: "center",
        }}
      >
        <Container>
          <Grid
            container
            item
            xs={12}
            md={7}
            justifyContent={{ xs: "center", md: "start" }}
            sx={{ textAlign: { xs: "center", md: "left" } }}
          >
            <MKTypography
              variant="h1"
              color="white"
              sx={({ breakpoints, typography: { size } }) => ({
                [breakpoints.down("md")]: {
                  fontSize: size["3xl"],
                },
              })}
            >
              Get Started Your Crypto Life with JPYC
            </MKTypography>
            <MKTypography
              variant="body1"
              color="white"
              mt={1}
              pr={{ md: 12, lg: 24, xl: 32 }}
              opacity={0.8}
            >
              All members of unofficial Club JPYC welcome you to explore new worlds.
            </MKTypography>
            <Stack direction="row" spacing={1} mt={6} mb={3}>
              <MKButton variant="gradient" color="info">
                get started
              </MKButton>
              <MKButton variant="text" color="white">
                read more
              </MKButton>
            </Stack>
          </Grid>
        </Container>
      </MKBox>
      <Card
        sx={{
          p: 2,
          mx: { xs: 2, lg: 3 },
          mt: -8,
          mb: 4,
          backgroundColor: ({ palette: { white }, functions: { rgba } }) => rgba(white.main, 0.8),
          backdropFilter: "saturate(200%) blur(30px)",
          boxShadow: ({ boxShadows: { xxl } }) => xxl,
        }}
      >
        <CommunityProducts />
        <OfficialProducts />
      </Card>
      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
}

export default Landing;
