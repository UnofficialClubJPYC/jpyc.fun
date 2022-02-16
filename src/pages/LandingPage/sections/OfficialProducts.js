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
import LinkCard from "examples/Cards/BlogCards/LinkCard";

function OfficialProducts() {
  const products = [
    {
      title: "JPYC HP",
      image: "/img/externalLink/jpyc.jp.png",
      description:
        "オフィシャルHP。ページフッターにコントラクトアドレスやMetamaskにcoinを追加できるリンクが載っています。",
      action: {
        type: "external",
        route: "https://jpyc.jp/",
        color: "dark",
        label: "find more",
      },
    },
    {
      title: "JPYC Marketplace",
      image: "/img/externalLink/app.jpyc.jp.jpg",
      description:
        "公式JPYC販売所。銀行振込や暗号資産でJPYCの購入ができる他、JPYCでVプリカギフトの購入が可能",
      action: {
        type: "external",
        route: "https://app.jpyc.jp/",
        color: "dark",
        label: "find more",
      },
    },
    {
      title: "JPYC Grant",
      image: "/img/externalLink/jpycgrant.png",
      description:
        "JPYC Grantは、JPYCエコシステムに対してビジネス・開発・コミュニティ育成などあらゆる形で貢献していただいた方に対してJPYCを付与する報酬プログラムです。",
      action: {
        type: "external",
        route: "https://jpycgrant.studio.site/",
        color: "dark",
        label: "find more",
      },
    },
    {
      title: "Nudge | JPYC",
      image: "/img/externalLink/nudge.jpyc.png",
      description: "JPYCとコラボしているクレジットカード。累計決済額に応じてプレゼントが貰えます。",
      action: {
        type: "external",
        route: "https://nudge.cards/jpyc",
        color: "dark",
        label: "find more",
      },
    },
    {
      title: "Links JPYC Bot",
      image: "/img/externalLink/links.jpyc.bot.png",
      description: "次世代SNS「Links」で使えるJPYC Bot。Botの利用にはlinksのアプリが必要です。",
      action: {
        type: "external",
        route: "https://links.jpyc.jp/",
        color: "dark",
        label: "find more",
      },
    },
  ];

  const contents = products.map((item) => (
    <Grid item xs={12} md={6} lg={4}>
      <MKBox mt={3}>
        <LinkCard
          image={`${process.env.PUBLIC_URL}${item.image}`}
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
            color="info"
            badgeContent="Official"
            container
            circular
            sx={{ mb: 1 }}
          />
          <MKTypography variant="h2" mb={1}>
            Official Contents{" "}
          </MKTypography>
          <MKTypography variant="body2" color="text">
            JPYC社オフィシャルコンテンツへのリンクです。
          </MKTypography>
        </Grid>
        <Grid container spacing={3} sx={{ mt: 3 }}>
          {contents}
        </Grid>
      </Container>
    </MKBox>
  );
}

export default OfficialProducts;
