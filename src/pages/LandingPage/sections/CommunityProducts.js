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

function CommunityProducts() {
  const products = [
    {
      title: "JPYC HUB [unofficial]",
      image: "/img/externalLink/discord.jpg",
      twitter: "AITGSamurai",
      description: "Discord上のファンコミュニティです。様々な情報がやり取りされています。",
      author: {
        image: "https://pbs.twimg.com/profile_images/1490677469904793601/tC-4Xj2k_400x400.jpg",
        name: "Anti Internet Tough Guy侍👾㌠",
        id: "@AITGSamurai",
      },
      action: {
        type: "external",
        route: "https://discord.gg/hhK4fpBXtr",
        color: "dark",
        label: "find more",
      },
    },
    {
      title: "JPYC Bot",
      image: "/img/externalLink/jpycbot_twitter.jpg",
      twitter: "jpycbot",
      description: "DeFiでUSDC-JPYCのレートがお得になったときに呟くTwitter bot",
      author: {
        image: "https://pbs.twimg.com/profile_images/1476142347297894405/q4lFDNBa_400x400.png",
        name: "Nuko.eth",
        id: "@nuko973663",
      },
      action: {
        type: "external",
        route: "https://twitter.com/jpycbot",
        color: "dark",
        label: "find more",
      },
    },
    {
      title: "分散型 CMS HiÐΞ",
      image: "/img/externalLink/hide.ac.png",
      twitter: "HiDE_official__",
      description: "サービス運営に依存しない情報発信とコミュニティ構築ツール。JPYCで投げ銭できます",
      action: {
        type: "external",
        route: "https://hide.ac/",
        color: "dark",
        label: "find more",
      },
    },
    {
      title: "JPYC Info",
      image: "/img/externalLink/jpyc.info.png",
      description: "JPYCの流通量等の統計情報を確認できます",
      twitter: "foxytanuki",
      action: {
        type: "external",
        route: "https://jpyc.foxytanuki.dev/",
        color: "dark",
        label: "find more",
      },
    },
    {
      title: "JPYC特売所(円→JPYC) / 非公式",
      image: "/img/externalLink/coinshop.jp.sale.png",
      twitter: "JPYC_unofficial",
      description: "本家よりお得に、JPYCを購入出来ます",
      action: {
        type: "external",
        route: "https://www.coinshop.jp/bargain-sale/",
        color: "dark",
        label: "find more",
      },
    },
    {
      title: "JPYC買取所",
      image: "/img/externalLink/coinshop.jp.png",
      twitter: "JPYC_exchange",
      description: "非公式JPYC買取所",
      action: {
        type: "external",
        route: "https://www.coinshop.jp/",
        color: "dark",
        label: "find more",
      },
    },
    {
      title: "JPYC Analytics",
      image: "/img/externalLink/jpyc-analytics.com.png",
      twitter: "visvirial",
      description:
        "日本円ステーブルコインの $JPYC のブロックチェーンを解析して統計情報を閲覧できるサイト",
      action: {
        type: "external",
        route: "https://jpyc-analytics.com/",
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
          author={item.author}
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
            JPYC社以外のJPYC関連サービスのリンクです。二次流通等はご自身の調査・判断により行ってください。
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
