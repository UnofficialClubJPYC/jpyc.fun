/**
 * LinkCard
 * @nuko973663
 */
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

// react-router components
import { Link } from "react-router-dom";

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Card from "@mui/material/Card";
import MuiLink from "@mui/material/Link";

// Material Kit 2 PRO React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MKAvatar from "components/MKAvatar";

class LinkCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
      avator: false,
    };

    if (props.twitter !== "") {
      global.Nuko.twitterUserInfo(props.twitter).then((data) => {
        this.setState({ user: data, avator: true });
      });
    }
  }

  render() {
    const { user, avator } = this.state;
    const { image, title, description, action } = this.props;
    const imageTemplate = (
      <>
        <MKBox
          component="img"
          src={image}
          alt={title}
          borderRadius="lg"
          shadow="md"
          width="100%"
          position="relative"
          zIndex={1}
        />
        <MKBox
          borderRadius="lg"
          shadow="md"
          width="100%"
          height="100%"
          position="absolute"
          left={0}
          top={0}
          sx={{
            backgroundImage: `url(${image})`,
            transform: "scale(0.94)",
            filter: "blur(12px)",
            backgroundSize: "cover",
          }}
        />
      </>
    );

    return (
      <Card>
        <MKBox position="relative" borderRadius="lg" mx={2} mt={-3}>
          {action.type === "internal" ? (
            <Link to={action.route}>{imageTemplate}</Link>
          ) : (
            <MuiLink href={action.route} target="_blank" rel="noreferrer">
              {imageTemplate}
            </MuiLink>
          )}
        </MKBox>
        <MKBox p={3} mt={-2}>
          <MKTypography
            display="inline"
            variant="h5"
            textTransform="capitalize"
            fontWeight="regular"
          >
            {action.type === "internal" ? (
              <Link to={action.route}>{title}</Link>
            ) : (
              <MuiLink href={action.route} target="_blank" rel="noreferrer">
                {title}
              </MuiLink>
            )}
          </MKTypography>
          <MKBox mt={1} mb={3}>
            <MKTypography variant="body2" component="p" color="text">
              {description}
            </MKTypography>
          </MKBox>
          {avator && (
            <MuiLink
              href={`https://twitter.com/${user.screen_name}`}
              target="_blank"
              rel="noreferrer"
            >
              <MKBox display="flex" alignItems="center" mt={3}>
                <MKAvatar
                  src={user.profile_image_url_https}
                  alt={user.name}
                  shadow="md"
                  variant="circular"
                />
                <MKBox pl={2} lineHeight={0}>
                  <MKTypography component="h6" variant="button" fontWeight="medium" gutterBottom>
                    {user.name}
                  </MKTypography>
                  <MKTypography variant="caption" color="text">
                    {user.screen_name}
                  </MKTypography>
                </MKBox>
              </MKBox>
            </MuiLink>
          )}
        </MKBox>
      </Card>
    );
  }
}

LinkCard.defaultProps = {
  twitter: "",
};

// Typechecking props for the SimpleBlogCard
LinkCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  twitter: PropTypes.string,
  action: PropTypes.shape({
    type: PropTypes.oneOf(["external", "internal"]).isRequired,
    route: PropTypes.string.isRequired,
  }).isRequired,
};

export default LinkCard;
