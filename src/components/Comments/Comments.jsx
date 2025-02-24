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
      <form onSubmit={handleFormSubmit} className='form'>
        <label className='name-label'>
          Name 
          <input 
            className={`name-input ${errors.name ? 'input--invalid' : ''}`} 
            type="text" 
            name="name" 
            value={newComment.name} 
            onChange={handleCommentChange}
          />
          {errors.name && <p className="error-message">Name is required</p>}
        </label>

        <label className='name-label'>
          Comment 
          <input
            className={`comment-input ${errors.comment ? 'input--invalid' : ''}`}
            name='comment'
            value={newComment.comment}
            onChange={handleCommentChange}
          />
          {errors.comment && <p className="error-message">Comment is required</p>}
        </label>

        <button className='submit-btn' type="submit">Submit</button>
      </form>

      <h4 className='comments__title'>{comments.length} Comments</h4>
      {comments.length > 0 ? (
        comments.map((comment, index) => (
          <div key={index} className="comment">
            <div className="comment-upper">
              <p>{comment.name}</p>
              <p>{comment.timestamp ? new Date(comment.timestamp).toLocaleDateString() : "No date data"}</p>
            </div>
            <p className='former-comment'>{comment.comment}</p>
          </div>
        ))
      ) : (
        <p>No comments yet.</p>
      )}
    </div>
  );
}

export default Comments;
