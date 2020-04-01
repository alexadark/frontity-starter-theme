/** @jsx jsx */
import { jsx, Flex, Box } from "theme-ui";
import { connect } from "frontity";
import { Icon } from "react-icons-kit";
import { socialTwitter } from "react-icons-kit/ionicons/socialTwitter";
import { socialPinterest } from "react-icons-kit/ionicons/socialPinterest";
import { socialFacebook } from "react-icons-kit/ionicons/socialFacebook";
import { socialInstagram } from "react-icons-kit/ionicons/socialInstagram";

const icons = {
  twitter: socialTwitter,
  pinterest: socialPinterest,
  facebook: socialFacebook,
  instagram: socialInstagram
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
                <Icon size={24} icon={socialIcon} />
              </a>
            </Box>
          );
        })}
    </Flex>
  );
};

export default connect(SocialShare);
