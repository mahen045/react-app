import React, { useState } from 'react';
import { Post } from '../types';

interface EditPostFormProps {
  post: Post;
  updatePost: (post: Post) => void;
  cancelEdit: () => void;
}

const EditPostForm: React.FC<EditPostFormProps> = ({ post, updatePost, cancelEdit }) => {
  const [title, setTitle] = useState(post.title);
  const [content, setContent] = useState(post.content);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !content) return;
    updatePost({ ...post, title, content });
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
  <h2>Edit Post</h2>
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
  <button type="submit" className="btn btn-success me-2">
    Save Changes
  </button>
  <button type="button" onClick={cancelEdit} className="btn btn-secondary">
    Cancel
  </button>
</form>
  );
};

export default EditPostForm;
