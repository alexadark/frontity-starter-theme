/** @jsx jsx */
import { jsx, Flex, Box } from "theme-ui";
import React from "react";
import { connect } from "frontity";
import {
  IoLogoTwitter,
  IoLogoPinterest,
  IoLogoFacebook,
  IoLogoInstagram
} from "react-icons/io";

const icons = {
  twitter: IoLogoTwitter,
  pinterest: IoLogoPinterest,
  facebook: IoLogoFacebook,
  instagram: IoLogoInstagram
};

const SocialShare = ({ state, ...props }) => {
  const { socialLinks } = state.theme;
  return (
    <Flex sx={{ justifyContent: "center" }} {...props}>
      {socialLinks &&
        socialLinks.map(([name, link], i) => {
          const socialIcon = icons[name];
          return (
            <Box key={i} sx={{ mx: 5 }}>
              <a href={link} target="_blank" rel="noopener noreferrer">
                <Box as={socialIcon} />
              </a>
            </Box>
          );
        })}
    </Flex>
  );
};

export default connect(SocialShare);
