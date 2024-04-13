import { createContext, useContext, useMemo, useState } from "react";
import { faker } from "@faker-js/faker";

function createRandomPost() {
  return {
    title: `${faker.hacker.adjective()} ${faker.hacker.noun()}`,
    body: faker.hacker.phrase(),
  };
}

// 1) CREATE A NEW CONTEXT
const PostContext = createContext();

function PostProvider({ children }) {
  const [posts, setPosts] = useState(() =>
    Array.from({ length: 30 }, () => createRandomPost())
  );
  const [searchQuery, setSearchQuery] = useState("");

  // Derived state. These are the posts that will actually be displayed
  const searchedPosts =
    searchQuery.length > 0
      ? posts.filter((post) =>
          `${post.title} ${post.body}`
            .toLowerCase()
            .includes(searchQuery.toLowerCase())
        )
      : posts;

  function handleAddPost(post) {
    setPosts((posts) => [post, ...posts]);
  }

  function handleClearPosts() {
    setPosts([]);
  }

  const value = useMemo(() => {
    return {
      posts: searchedPosts,
      onAddPost: handleAddPost,
      onClearPosts: handleClearPosts,
      searchQuery,
      setSearchQuery,
    };
  }, [searchedPosts, searchQuery]);
  // This now will memoize the object unless it changes to avoid wasted re-rendering of components

  return (
    // 2) PROVIDE VALUE TO CHILD COMPONENTS
    <PostContext.Provider value={value}>
      {children}
      {/* Children will not re-render automatically, hence it is already optimized */}
    </PostContext.Provider>
  );
}

// This hook is made to save passing PostContext everytime
function usePosts() {
  const context = useContext(PostContext);
  // We are throwing this error to let the context user know if he is using the context outside provider
  // which makes the debugging a lot easier
  if (context === undefined)
    throw new Error("PostContext was used outside of PostProvider");
  return context;
}

export { PostProvider, usePosts };
