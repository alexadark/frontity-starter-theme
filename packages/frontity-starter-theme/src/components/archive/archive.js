/** @jsx jsx */
import { jsx, Avatar, Flex, Container } from "theme-ui";
import React from "react";
import { connect } from "frontity";

import ArchiveItem from "./archiveItem";
import Pagination from "./pagination";
import { getUrlData } from "../../helpers";

const Archive = ({ state }) => {
  const data = getUrlData(state);
  const author = state.source.author[data.id];

  return (
    <>
      {data.isTaxonomy && (
        <h3
          className="archiveTitle"
          sx={{
            textAlign: "center",
            textTransform: "uppercase",
            letterSpacing: 1.2,
            mb: 30
          }}
        >
          {data.taxonomy}: {state.source[data.taxonomy][data.id].name}
        </h3>
      )}
      {data.isAuthor && (
        <Flex sx={{ justifyContent: "center", mb: 30 }}>
          <Avatar
            src={author.avatar_urls[48]}
            sx={{ width: 50, height: 50, mr: 25 }}
          />
          <h3
            className="archiveTitle"
            sx={{ textTransform: "uppercase", letterSpacing: 1.2 }}
          >
            {" "}
            {author.name}
          </h3>
        </Flex>
      )}
      {data.items.map(({ id, type }) => {
        const item = state.source[type][id];
        console.log("item", item);
        return <ArchiveItem key={item.id} item={item} type={data.type} />;
      })}
      <Pagination />
    </>
  );
};

export default connect(Archive);
