import { createContext, useState, useEffect } from 'react';
import _ from 'lodash';

interface Props {
  children?: React.ReactChild;
}

interface Post {
  post: {
    category: string[];
  };
}

export interface PostContextReturn {
  posts: {};
  addingPosts: (object: []) => void;
  retrieveCategory?: any;
  selectCategory: (arg0: string) => void;
  selectedCategory: string;
}

export const PostContext = createContext<PostContextReturn>(
  {} as PostContextReturn
);

export const PostContextProvider: React.FC<Props> = ({ children }: Props) => {
  const [posts, setPosts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('');

  const addingPosts = (postsObject: []) => {
    return setPosts(postsObject);
  };

  const retrieveCategory = () => {
    if (!posts) return null;
    return posts.reduce((a, { category }) => [...a, ...category], []);
  };
  const selectCategory = (category: string) => {
    return setSelectedCategory(category);
  };

  return (
    <PostContext.Provider
      value={{
        posts: _.map(posts, (post: Post['post']) => {
          const checkIfInArray = post.category.some(
            e => e.toLowerCase() === selectedCategory.toLowerCase()
          );
          if (!selectedCategory) return post;
          
          return checkIfInArray ? post : null;
        }),
        addingPosts,
        retrieveCategory,
        selectCategory,
        selectedCategory,
      }}
    >
      {children}
    </PostContext.Provider>
  );
};
