import React from "react";
import Loading from "../components/Loading";
import { useApi } from "../context/ApiContext";
import PostContent from "../features/PostContent";

type Props = {

}

const Posts: React.FC<Props> = () => {
  const { posts, users, comments } = useApi();
  const loaded = posts && users && comments;

  return <div className="post-list">
    {!!loaded ? posts.map(post =>
      <PostContent
        key={post.id}
        post={post}
        user={users[post.userId]}
        comments={comments[post.id]}
      />
    ) : <Loading />}
  </div>
}

export default Posts;
