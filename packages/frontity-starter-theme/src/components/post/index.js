/** @jsx jsx */
import { jsx, Container, Box } from "theme-ui";
import { useEffect } from "react";
import { connect } from "frontity";

import { getUrlData } from "../../helpers";

import PostEntryInfo from "./postEntryInfo";
import Taxonomies from "./taxonomies";
import { formatPostData } from "../../helpers";
import PostEntryMedia from "./postEntryMedia";
import featuredStyles from "../../styles/featuredStyles";
import Archive from "../archive";

const Post = ({ state, libraries, actions }) => {
  const data = getUrlData(state);
  const post = state.source[data.type][data.id];

  const { postMeta, postInfo, featured } = state.theme;
  const Html2React = libraries.html2react.Component;

  const {
    author,
    publishDate,
    title,
    categories,
    tags,
    featured_media,
    content
  } = formatPostData(state, post);
  const date = new Date(publishDate);
  /**
   * Once the post has loaded in the DOM, prefetch both the
   * home posts and the list component so if the user visits
   * the home page, everything is ready and it loads instantly.
   */

  useEffect(() => {
    actions.source.fetch("/");
    Archive.preload();
  }, []);

  return data.isReady ? (
    <Container className="container" sx={{ maxWidth: "l" }}>
      <article
        sx={{ variant: "card.default", "div figure": { maxWidth: 804, mx: 0 } }}
      >
        {featured.showOnPost && (
          <PostEntryMedia
            id={featured_media.id}
            ratio={16 / 9}
            sx={{
              ...featuredStyles
            }}
          />
        )}
        <Box>
          <h1
            dangerouslySetInnerHTML={{ __html: title }}
            sx={{
              textTransform: "uppercase",
              fontSize: "xl"
            }}
          />
          {data.isPost && postInfo.showOnPost && (
            <PostEntryInfo author={author} date={date} />
          )}

          <Html2React html={content} />
        </Box>

        {data.isPost && postMeta.showOnPost && (
          <div className="postEntryMeta">
            <Taxonomies tax={categories} name="Categories" />
            <Taxonomies tax={tags} name="Tags" />
          </div>
        )}
      </article>
    </Container>
  ) : null;
};

export default connect(Post);
