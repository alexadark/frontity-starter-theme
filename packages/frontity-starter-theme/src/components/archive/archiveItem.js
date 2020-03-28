/** @jsx jsx */
import { jsx, Container } from "theme-ui";
import Link from "../link";
import { connect } from "frontity";
import PostEntryInfo from "../post/postEntryInfo";
import Taxonomies from "../post/taxonomies";
import { formatPostData } from "../../helpers";
import PostEntryMedia from "../post/postEntryMedia";
import featuredStyles from "../../styles/featuredStyles";

const ArchiveItem = ({ item, state, type }) => {
  const { postInfo, postMeta, featured } = state.theme;

  const {
    id,
    author,
    publishDate,
    title,
    link,
    categories,
    tags,
    featured_media,
    excerpt,
    acf
  } = formatPostData(state, item);
  const date = new Date(publishDate);

  return (
    <Container sx={{ maxWidth: "l", mb: "xl" }}>
      <article className="entry" sx={{ variant: "card.default" }}>
        <Link link={link}>
          {featured.showOnArchive && (
            <PostEntryMedia
              className="entryMedia"
              id={featured_media.id}
              ratio={20 / 9}
              sx={{ ...featuredStyles }}
            />
          )}
          <h2
            dangerouslySetInnerHTML={{ __html: title }}
            sx={{ textTransform: "uppercase" }}
          />
        </Link>
        {postInfo.showOnArchive && type !== "projects" && (
          <PostEntryInfo author={author} date={date} />
        )}
        {item.excerpt && (
          <div
            className="entry-content"
            dangerouslySetInnerHTML={{ __html: excerpt }}
          />
        )}
        {type === "projects" && (
          <h4>
            <a href={acf.project_url} target="_blank">
              View project
            </a>
          </h4>
        )}

        {postMeta.showOnArchive && type !== "projects" && (
          <div className="postEntryMeta">
            <Taxonomies tax={categories} name="Categories" />
            <Taxonomies tax={tags} name="Tags" />
          </div>
        )}
      </article>
    </Container>
  );
};

export default connect(ArchiveItem);
