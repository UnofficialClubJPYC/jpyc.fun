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
import Stack from "@mui/material/Stack";

// Material Kit 2 PRO React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Coworking page component
import AboutUsOption from "pages/LandingPages/Coworking/components/AboutUsOption";

function FeaturesOne() {
  return (
    <MKBox component="section" py={{ xs: 3, md: 12 }}>
      <Container>
        <Grid container alignItems="center">
          <Grid item xs={12} lg={5}>
            <MKTypography variant="h3" my={1}>
              JPYC Fun Club as DAO
            </MKTypography>
            <MKTypography variant="body2" color="text" mb={2}>
              それっぽいことを書きました。知らんけど。
              <br />
              とりあえずJoin US
            </MKTypography>
          </Grid>
          <Grid item xs={12} lg={6} sx={{ ml: { xs: -2, lg: "auto" }, mt: { xs: 6, lg: 0 } }}>
            <Stack>
              <AboutUsOption
                icon="mediation"
                content={<>JPYCの利用シーンをコミュニティ自ら開拓します</>}
              />
              <AboutUsOption
                icon="settings_overscan"
                content={<>JPYCが日常の決済手段となることを目指します</>}
              />
              <AboutUsOption icon="token" content={<>あとで書く</>} />
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default FeaturesOne;
