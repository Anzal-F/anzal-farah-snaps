import React, { useState } from 'react';
import "./Comments.scss";

function Comments({ comments, newComment, handleCommentChange, handleSubmitComment }) {
  const [errors, setErrors] = useState({ name: false, comment: false });

  const handleFormSubmit = (event) => {
    event.preventDefault();

    const newErrors = {
      name: !newComment.name.trim(),
      comment: !newComment.comment.trim(),
    };

    setErrors(newErrors);

    if (newErrors.name || newErrors.comment) {
      return;
    }

    handleSubmitComment(event);
  };

  return (
    <div className="comments-section">
      
    </div>
  );
}

export default Comments;
