import React, { useState } from 'react';
import { Post } from '../types';

interface AddPostFormProps {
  addPost: (post: Post) => void;
}

const AddPostForm: React.FC<AddPostFormProps> = ({ addPost }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !content) return;
    const newPost: Post = { id: Date.now(), title, content };
    addPost(newPost);
    setTitle('');
    setContent('');
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
  <h2>Add New Post</h2>
  <div className="mb-3">
    <input
      type="text"
      placeholder="Title"
      value={title}
      onChange={(e) => setTitle(e.target.value)}
      className="form-control"
    />
  </div>
  <div className="mb-3">
    <textarea
      placeholder="Content"
      value={content}
      onChange={(e) => setContent(e.target.value)}
      className="form-control"
      rows={4}
    />
  </div>
  <button type="submit" className="btn btn-primary">
    Add Post
  </button>
</form>
  );
};

export default AddPostForm;
