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
      action: {
        type: "external",
        route: "https://discord.gg/hhK4fpBXtr",
      },
    },
    {
      title: "JPYC Bot",
      image: "/img/externalLink/jpycbot_twitter.jpg",
      twitter: "jpycbot",
      description: "DeFiでUSDC-JPYCのレートがお得になったときに呟くTwitter bot",
      action: {
        type: "external",
        route: "https://twitter.com/jpycbot",
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
      },
    },
    {
      title: "JPYCぷち販売所",
      image: "/img/externalLink/jpyc-puchi.studio.site.jpg",
      twitter: "web5_",
      description: "JPYCを少額からご購入いただけます",
      action: {
        type: "external",
        route: "https://jpyc-puchi.studio.site/",
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
      },
    },
    {
      title: "JPYC Stabilizer",
      image: "/img/externalLink/stabilizer.png",
      twitter: "nuko973663",
      description: "DeFiでUSDC-JPYCペアの自動取引を行い、JPYCの価格を安定させるDapp。",
      action: {
        type: "external",
        route: "https://nuko973663.github.io/JPYCstabilizer/",
      },
    },
    {
      title: "JPYC-USDC pair on Avalanche",
      image: "/img/externalLink/traderjoe.jpg",
      twitter: "traderjoe_xyz",
      description:
        "Swapする場合はTradeメニューでJPYCのコントラクトアドレスを入力してください。\n0x431D5dfF03120AFA4bDf332c61A6e1766eF37BDB",
      action: {
        type: "external",
        route:
          "https://traderjoexyz.com/pool/0xB97EF9Ef8734C71904D8002F8b6Bc66Dd9c48a6E/0x431D5dfF03120AFA4bDf332c61A6e1766eF37BDB#/",
      },
    },
    {
      title: "ArtiStake",
      image: "/img/externalLink/artistake.tokyo.jpg",
      twitter: "ArtiStake_",
      description: "JPYCでアーティストに投げ銭ができるサイト",
      action: {
        type: "external",
        route: "https://nuko973663.github.io/JPYCstabilizer/",
      },
    },
    {
      title: "JPYCが使えるお店",
      image: "https://irifune-seikotsuin.com/img/hero1_1200x600.jpg",
      description: "JPYCで決済ができる実店舗を紹介しています。",
      action: {
        type: "internal",
        route: "pages/shops",
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
          twitter={item.twitter}
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
            こちらへの掲載希望はGitHub（Issue or Pull
            Request）かTwitter、Discordなどでご連絡ください。
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
