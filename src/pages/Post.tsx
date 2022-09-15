import React, { useMemo } from "react";
import { useApi } from "../context/ApiContext";
import { useParams } from "react-router-dom";
import PostContent from "../features/PostContent";
import Loading from "../components/Loading";

type Props = {

}

const Post: React.FC<Props> = () => {
  const { posts, users, comments } = useApi();

  const { id } = useParams();
  const loaded = posts && users && comments;

  const post = useMemo(() => {
    if (!posts || !id) return undefined;
    return posts.find(p => p.id === parseInt(id))
  }, [posts, id]);

  return !!loaded && !!post ?
    <PostContent
      post={post}
      user={users[post.userId]}
      comments={comments[post.id]}
      autoShowComments
      hideLink
    />
    : <Loading />
}

export default Post;

