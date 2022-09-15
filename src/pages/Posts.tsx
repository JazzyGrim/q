import React, { useMemo, useState } from "react";
import Loading from "../components/Loading";
import { useApi } from "../context/ApiContext";
import PostContent from "../features/PostContent";
import { List, ListRowProps } from "react-virtualized";

type Props = {

}

const Posts: React.FC<Props> = () => {
  const { posts, users, comments } = useApi();
  const [input, setInput] = useState<string>("");

  const handleChange = (e: React.FormEvent<HTMLInputElement>): void => setInput(e.currentTarget.value);

  const filteredPosts = useMemo(() => {
    if (!posts) return undefined;
    return posts.filter(post => post.title.includes(input));
  }, [posts, input]);

  const loaded = filteredPosts && users && comments;

  return <div className="post-list">
    <input type="text" value={input} onChange={handleChange} placeholder="Start typing..." />
    {!!loaded && filteredPosts.map(post => <PostContent
      key={post.id}
      post={post}
      user={users[post.userId]}
      comments={comments[post.id]}
    />)}
  </div>
}

export default Posts;
