import React from 'react';
import { Post } from '../types';

interface PostListProps {
  posts: Post[];
  deletePost: (id: number) => void;
  setEditingPost: (post: Post) => void;
}

const PostList: React.FC<PostListProps> = ({ posts, deletePost, setEditingPost }) => {
  return (
    <div>
  <h2>All Posts</h2>
  {posts.length === 0 ? (
    <p className="text-muted">No posts available</p>
  ) : (
    posts.map((post) => (
      <div key={post.id} className="card mb-3">
        <div className="card-body">
          <h3 className="card-title">{post.title}</h3>
          <p className="card-text">{post.content}</p>
          <button
            onClick={() => setEditingPost(post)}
            className="btn btn-warning me-2"
          >
            Edit
          </button>
          <button
            onClick={() => deletePost(post.id)}
            className="btn btn-danger"
          >
            Delete
          </button>
        </div>
      </div>
    ))
  )}
</div>
  );
};

export default PostList;
