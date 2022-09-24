import React from "react";
import Article from "./Article";

function ArticleList({ posts }) {
  return (
    <main>
      {posts.map((post) => (
        <Article key={post.id} date={post.date} title={post.date} preview={post.preview} />
      ))}
    </main>
  );
}

export default ArticleList;