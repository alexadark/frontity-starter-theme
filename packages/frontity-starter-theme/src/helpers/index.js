export const buildUrl = (libraries, path, page, query) =>
  libraries.source.stringify({
    path,
    page,
    query
  });

export function isUrl(str) {
  var regexp = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!-/]))?/;
  return regexp.test(str);
}

export const getUrlData = state => state.source.get(state.router.link);

function getSrcSet(media) {
  const srcset =
    Object.values(media.media_details.sizes)
      // Get the url and width of each size.
      .map(item => [item.source_url, item.width])
      // Recude them to a string with the format required by `srcset`.
      .reduce(
        (final, current, index, array) =>
          final.concat(
            `${current.join(" ")}w${index !== array.length - 1 ? ", " : ""}`
          ),
        ""
      ) || null;
  return srcset;
}

export function getMediaAttributes(state, id) {
  const media = state.source.attachment[id];
  if (!media) return {};

  const srcSet = getSrcSet(media);

  return {
    id,
    alt: media.title.rendered,
    src: media.source_url,
    srcSet
  };
}

export function getTaxonomies(state, post, taxonomy, taxonomies) {
  const allTaxonomies = state.source[taxonomy];
  const taxs =
    post[taxonomies] && post[taxonomies].map(itemId => allTaxonomies[itemId]);
  return taxs ? taxs.filter(Boolean) : [];
}

export function getPostAuthor(state, post) {
  return state.source.author[post.author];
}

export function getPostData(state) {
  const data = state.source.get(state.router.link);
  const post = state.source[data.type][data.id];
  return { ...post, isReady: data.isReady, isPage: data.isPage };
}

export function formatPostData(state, post) {
  return {
    id: post.id,
    author: getPostAuthor(state, post),
    publishDate: post.date,
    title: post.title && post.title.rendered,
    categories: getTaxonomies(state, post, "category", "categories"),
    tags: getTaxonomies(state, post, "tag", "tags"),
    link: post.link,
    featured_media: getMediaAttributes(state, post.featured_media),
    content: post.content && post.content.rendered,
    excerpt: post.excerpt && post.excerpt.rendered
  };
}
