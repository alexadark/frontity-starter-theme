/** @jsx jsx */
import { jsx, Container, Box, AspectRatio } from "theme-ui";
import { connect } from "frontity";
import { getMediaAttributes } from "../../helpers";
import Image from "@frontity/components/image";

function PostEntryMedia({ state, actions, libraries, id, ratio, ...props }) {
  const imgProps = getMediaAttributes(state, id);
  // is empty if the id doesn't exist in state.source anymore
  const noImgProps = Object.keys(imgProps).length === 0;

  if (noImgProps) return null;
  return (
    <figure {...props}>
      <AspectRatio ratio={ratio}>
        <Image {...imgProps} />
      </AspectRatio>
    </figure>
  );
}

export default connect(PostEntryMedia);
