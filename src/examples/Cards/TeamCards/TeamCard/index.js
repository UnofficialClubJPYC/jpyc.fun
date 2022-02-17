/**
=========================================================
* Material Kit 2 PRO React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-pro-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/
import React, { Component } from "react";

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import MuiLink from "@mui/material/Link";

// Material Kit 2 PRO React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// eslint-disable-next-line react/prefer-stateless-function
class HorizontalTeamCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
    };

    global.Nuko.twitterUserInfo(props.id).then((data) => {
      this.setState({ user: data });
    });
  }

  render() {
    // eslint-disable-next-line react/destructuring-assignment
    const { user } = this.state;
    // const { description } = this.props;
    return (
      <Card sx={{ mt: 3 }}>
        <Grid container>
          <Grid item xs={12} md={6} lg={4} sx={{ mt: -4 }}>
            <MKBox width="6rem" pt={2} pb={1} px={2}>
              <MKBox
                component="img"
                src={user.profile_image_url_https}
                alt={user.screen_name}
                width="100%"
                borderRadius="md"
                shadow="lg"
              />
            </MKBox>
          </Grid>

          <Grid item xs={12} md={6} lg={8} sx={{ my: "auto" }}>
            <MuiLink
              href={`https://twitter.com/${user.screen_name}`}
              target="_blank"
              rel="noreferrer"
            >
              <MKBox pt={{ xs: 1, lg: 2.5 }} pb={2.5} pr={4} pl={{ xs: 4, lg: 1 }} lineHeight={1}>
                <MKTypography variant="h5">{user.name}</MKTypography>
                <MKTypography
                  variant="body2"
                  color="text"
                  fontSize="xxs"
                  href={`https://twitter.com/${user.screen_name}`}
                >
                  <small>@{user.screen_name}</small>
                </MKTypography>
                <MKTypography
                  variant="body2"
                  color="text"
                  className="{display: none;}"
                  fontSize={2}
                >
                  {user.description}
                </MKTypography>
              </MKBox>
            </MuiLink>
          </Grid>
        </Grid>
      </Card>
    );
  }
}

// Typechecking props for the HorizontalTeamCard
HorizontalTeamCard.propTypes = {
  id: PropTypes.string.isRequired,
  // description: PropTypes.string.isRequired,
};

export default HorizontalTeamCard;
