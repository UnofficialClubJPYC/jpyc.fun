import { useEffect } from "react";
import PropTypes from "prop-types";

// @mui material components
// import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import MuiAvatarGroup from "@mui/material/AvatarGroup";

// Material Kit 2 PRO React components
import MKBox from "components/MKBox";
import MKAvatar from "components/MKAvatar";
import MKTypography from "components/MKTypography";

import Pair from "../../lib/Pair";

// Images
import logoJPYC from "../../assets/images/logos/small-logos/logo-jpyc.svg";
import logoUSDC from "../../assets/images/logos/small-logos/logo-usdc.svg";

function ExchangeRate({ color, exchangeRate, setExchangeRate }) {
  const USDC_ADDRESS = "0x2791bca1f2de4661ed88a30c99a7a9449aa84174";
  const JPYC_ADDRESS = "0x6ae7dfc73e0dde2aa99ac063dcf7e8a63265108c";
  const RPC_NODE = "https://polygon-rpc.com/";

  const pair = new Pair(USDC_ADDRESS, JPYC_ADDRESS, RPC_NODE);

  /* Round down exchange rate at the second decimal places.
   * @param {number} _exchangeRate - Exchange rate to be rounded down.
   */
  function formatExchangeRate(_exchangeRate) {
    // Input: 122.818747
    return Math.ceil(_exchangeRate * 100) / 100;
  }

  useEffect(() => {
    pair.getExchangeRate().then((rate) => {
      const roundedRate = formatExchangeRate(rate);
      setExchangeRate(roundedRate);
    });
  });

  /* Return the component that displays the exchange rate: USDC/JPYC.
   * @param {number} rate - Exchange rate to be rounded down.
   */
  function USDCJPYCRate({ rate }) {
    return (
      <MKBox component="div">
        {/* <Container> */}
        <Grid container alignItems="center">
          <MuiAvatarGroup spacing={8}>
            <MKAvatar src={logoUSDC} alt="logoJPYC" size="xxs" />
            <MKAvatar src={logoJPYC} alt="logoUSDC" size="xxs" />
          </MuiAvatarGroup>
          <MKTypography variant="button" fontWeight="regular" color={color}>
            {rate}
          </MKTypography>
        </Grid>
        {/* </Container> */}
      </MKBox>
    );
  }
  USDCJPYCRate.defaultProps = { rate: exchangeRate };
  USDCJPYCRate.propTypes = { rate: PropTypes.number };

  const renderExchangeRate = () => {
    const isFetched = exchangeRate !== 0;
    return isFetched ? <USDCJPYCRate rate={exchangeRate} /> : "";
  };

  return renderExchangeRate();
}

ExchangeRate.defaultProps = { color: "dark" };
ExchangeRate.propTypes = {
  color: PropTypes.oneOf(["white", "dark", "text"]),
  exchangeRate: PropTypes.number.isRequired,
  setExchangeRate: PropTypes.func.isRequired,
};

export default ExchangeRate;
