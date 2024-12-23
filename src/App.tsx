import React, { useState } from 'react';
import AddPostForm from './components/AddPostForm';
import PostList from './components/PostList';
import EditPostForm from './components/EditPostForm';
import { Post } from './types';

const App: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [editingPost, setEditingPost] = useState<Post | null>(null);

  const addPost = (post: Post) => setPosts([...posts, post]);

  const updatePost = (updatedPost: Post) => {
    setPosts(posts.map(post => (post.id === updatedPost.id ? updatedPost : post)));
    setEditingPost(null);
  };

  const deletePost = (id: number) => setPosts(posts.filter(post => post.id !== id));

  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{
        minHeight: '100vh', // Ensures full vertical height of the viewport
        backgroundColor: '#f8f9fa', // Optional: Adds a subtle background color
      }}
    >
      <div
        className="card p-4 shadow-lg"
        style={{
          width: '85%',
          maxWidth: '1200px',
          backgroundColor: '#fff', // Ensure the card stands out
        }}
      >
        <h1 className="text-center mb-4">Blog Post App</h1>
        {editingPost ? (
          <EditPostForm post={editingPost} updatePost={updatePost} cancelEdit={() => setEditingPost(null)} />
        ) : (
          <AddPostForm addPost={addPost} />
        )}
        <PostList posts={posts} deletePost={deletePost} setEditingPost={setEditingPost} />
      </div>
    </div>
  );
};

export default App;
