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

// Material Kit 2 PRO React components
import MKBox from "components/MKBox";
import MKBadge from "components/MKBadge";
import MKTypography from "components/MKTypography";

// Material Kit 2 PRO React components
import SimpleBlogCard from "examples/Cards/BlogCards/SimpleBlogCard";

function CommunityProducts() {
  const products = [
    {
      title: "JPYC HUB [unofficial]",
      image: "/img/discord.jpg",
      description: "Discord上のファンコミュニティです。様々な情報がやり取りされています。",
      action: {
        type: "external",
        route: "https://discord.gg/hhK4fpBXtr",
        color: "dark",
        label: "find more",
      },
    },
    {
      title: "JPYC Bot",
      image: "/img/jpycbot_twitter.jpg",
      description: "DeFiでUSDC-JPYCのレートがお得になったときに呟くTwitter botです。",
      action: {
        type: "external",
        route: "https://twitter.com/jpycbot",
        color: "dark",
        label: "find more",
      },
    },
    {
      title: "分散型 CMS HiÐΞ",
      image: "/img/hide.ac.png",
      description: "サービス運営に依存しない情報発信とコミュニティ構築ツール。",
      action: {
        type: "external",
        route: "https://hide.ac/",
        color: "dark",
        label: "find more",
      },
    },
  ];

  const contents = products.map((item) => (
    <Grid item xs={12} md={6} lg={4}>
      <MKBox mt={3}>
        <SimpleBlogCard
          image={`${process.env.PUBLIC_URL}/${item.image}`}
          title={item.title}
          description={item.description}
          action={item.action}
        />
      </MKBox>
    </Grid>
  ));

  return (
    <MKBox component="section" py={3}>
      <Container>
        <Grid
          container
          item
          flexDirection="column"
          alignItems="center"
          xs={12}
          lg={6}
          sx={{ textAlign: "center", mx: "auto" }}
        >
          <MKBadge
            variant="contained"
            color="primary"
            badgeContent="Community"
            container
            circular
            sx={{ mb: 1 }}
          />
          <MKTypography variant="h2" mb={1}>
            Explore community products{" "}
          </MKTypography>
          <MKTypography variant="body2" color="text">
            JPYC社以外のJPYC関連サービスのリンクです
          </MKTypography>
        </Grid>
        <Grid container spacing={3} sx={{ mt: 3 }}>
          {contents}
        </Grid>
      </Container>
    </MKBox>
  );
}

export default CommunityProducts;
