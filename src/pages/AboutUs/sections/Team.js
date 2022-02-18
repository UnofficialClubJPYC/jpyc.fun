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
// import Tooltip from "@mui/material/Tooltip";

// Material Kit 2 PRO React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Material Kit 2 PRO React examples
// import HorizontalTeamCard from "examples/Cards/TeamCards/HorizontalTeamCard";
import TeamCard from "examples/Cards/TeamCards/TeamCard";

function Team() {
  const contributors = [
    { id: "nuko973663", description: "WebSite" },
    { id: "akanexinfo", description: "Cats" },
    { id: "grifonbk", description: "JPYC 1st anniversary gift" },
    { id: "AITGSamurai", description: "Discord" },
    { id: "foxytanuki", description: "commiter" },
  ];

  // randomize contributers order
  const newArray = [];
  while (contributors.length > 0) {
    const n = contributors.length;
    const k = Math.floor(Math.random() * n);

    newArray.push(contributors[k]);
    contributors.splice(k, 1);
  }

  const contents = newArray.map((item) => (
    <Grid item xs={12} md={6} lg={4}>
      <TeamCard id={item.id} description={item.description} />
    </Grid>
  ));

  return (
    <MKBox
      component="section"
      variant="gradient"
      bgColor="dark"
      position="relative"
      py={6}
      px={{ xs: 2, lg: 0 }}
      mx={-2}
    >
      <Container>
        <Grid container>
          <Grid item xs={12} md={8} sx={{ mb: 6 }}>
            <MKTypography variant="h3" color="white">
              Contributors
            </MKTypography>
            <MKTypography variant="body2" color="white" opacity={0.8}>
              コントリビューター募集しています！ ↓ランダムオーダーです↓
            </MKTypography>
          </Grid>
        </Grid>

        <Grid container spacing={3} mt={6}>
          {contents}
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Team;
