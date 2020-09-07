import React from "react";
import Row from "./Row/Row";
import genres from "../../utils/genres";

export default function Rows() {
  return (
    <>
      {genres.map(({ id, title, url }) => (
        <Row key={id} title={title} url={url} />
      ))}
    </>
  );
}
