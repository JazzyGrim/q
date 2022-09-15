import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';
import { IContext, IPost, IComment, IUserList, ICommentList } from '../models/types';

const defaultContext: IContext = {
  posts: undefined,
  users: undefined,
  comments: undefined,
};

interface Props {
  children?: ReactNode;
}

const ApiContext = createContext<IContext>(defaultContext);

const API_URL = process.env.REACT_APP_API_URL;

export const ApiProvider: React.FC<Props> = ({ children }) => {
  const [posts, setPosts] = useState<IPost[]>();
  const [users, setUsers] = useState<IUserList>();
  const [comments, setComments] = useState<ICommentList>();

  useEffect(() => {
    (async () => {
      const result = await fetch(API_URL + "/posts/");
      const postsResult = await result.json() as IPost[];

      setPosts(postsResult);

      // Grab all users
      const newUsers: IUserList = {};
      const usersResponse = await fetch(API_URL + '/users/');
      const usersResult = await usersResponse.json();

      for (let i = 0; i < usersResult.length; i++) {
        const user = usersResult[i];
        newUsers[user.id] = user;
      }

      setUsers(newUsers);

      const commentsResponse = await fetch(API_URL + "/comments/");
      const commentsResult = await commentsResponse.json() as IComment[];

      const newComments: ICommentList = {};
      for (let i = 0; i < commentsResult.length; i++) {
        const comment = commentsResult[i];
        if (!newComments[comment.postId]) newComments[comment.postId] = [];

        newComments[comment.postId].push(comment);
      }

      setComments(newComments)
    })();
  }, []);

  return (
    <ApiContext.Provider
      value={{ posts, users, comments }}
    >
      {children}
    </ApiContext.Provider>
  );
};

export const useApi = () => {
  const { posts, users, comments } = useContext(ApiContext);

  return { posts, users, comments };
};
