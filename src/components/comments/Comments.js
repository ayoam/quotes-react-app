import { useState } from 'react';
import LoadingSpinner from '../UI/LoadingSpinner';

import classes from './Comments.module.css';
import NewCommentForm from './NewCommentForm';

const Comments = (props) => {
  const [isAddingComment, setIsAddingComment] = useState(false);
  const [isLoading,SetIsLoading] = useState(false);

  const startAddCommentHandler = () => {
    setIsAddingComment(true);
  };

  const changeIsAddingComment = ()=>{
    setIsAddingComment(false);
  }
  
  return (
    <section className={classes.comments}>
      <h2>User Comments</h2>
      {isLoading && <LoadingSpinner/>}
      {(!isAddingComment && !isLoading) && (
        <button className='btn' onClick={startAddCommentHandler}>
          Add a Comment
        </button>
      )}
      {(isAddingComment && !isLoading) && <NewCommentForm onSetIsLoading={(val)=>SetIsLoading(val)} onChangeIsAddingComment={changeIsAddingComment} quoteId={props.quoteId}/>}
        
    </section>
  );
};

export default Comments;
