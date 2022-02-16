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
import Icon from "@mui/material/Icon";

// Material Kit 2 PRO React components
import MKBox from "components/MKBox";
import MKPagination from "components/MKPagination";

// Material Kit 2 PRO React components
import LinkCard from "examples/Cards/BlogCards/LinkCard";

function Places() {
  return (
    <MKBox component="section" py={3}>
      <Container>
        <Grid container spacing={3} sx={{ mt: 3 }}>
          <Grid item xs={12} md={6} lg={6}>
            <MKBox mt={3}>
              <LinkCard
                image="https://upload.wikimedia.org/wikipedia/commons/5/5f/Matsuya_Ginza_2012.jpg"
                title="松屋銀座"
                description="一部フロアでJPYC払い（JPYC代理購入）ができるようになりました"
                action={{
                  type: "external",
                  route: "https://www.matsuya.com/ginza/news/2021/1210/jpyc/",
                }}
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} md={6} lg={6}>
            <MKBox mt={3}>
              <LinkCard
                image="https://irifune-seikotsuin.com/img/hero1_1200x600.jpg"
                title="芝浦田町スポーツ整骨院・はり治療院"
                description="JPYC ・symbol ・xWIN決済が導入されているスポーツ整骨院・はり治療院"
                action={{
                  type: "external",
                  route: "https://shibaura-seikotsuin.com/",
                }}
              />
            </MKBox>
          </Grid>
        </Grid>
        <MKBox mt={5}>
          <MKPagination>
            <MKPagination item>
              <Icon>keyboard_arrow_left</Icon>
            </MKPagination>
            <MKPagination item active>
              1
            </MKPagination>
            <MKPagination item>
              <Icon>keyboard_arrow_right</Icon>
            </MKPagination>
          </MKPagination>
        </MKBox>
      </Container>
    </MKBox>
  );
}

export default Places;
