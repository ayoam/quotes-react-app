import { useRef,useContext } from 'react';

import classes from './NewCommentForm.module.css';
import CommentsContext from '../../store/comments-context';
import { v4 as generateKey } from 'uuid';

const NewCommentForm = (props) => {
  const commentTextRef = useRef();
  const {SetCommentsList} = useContext(CommentsContext);

  const submitFormHandler = (event) => {
    event.preventDefault();

    // optional: Could validate here

    // send comment to server
    props.onSetIsLoading(true);
    setTimeout(()=>{
      props.onChangeIsAddingComment();
      props.onSetIsLoading(false);
    },100);
    SetCommentsList(prevState=>[...prevState,{id:generateKey(),quoteId:props.quoteId,text:commentTextRef.current.value}])
  };

  return (
    <form className={classes.form} onSubmit={submitFormHandler}>
      <div className={classes.control} onSubmit={submitFormHandler}>
        <label htmlFor='comment'>Your Comment</label>
        <textarea id='comment' rows='5' ref={commentTextRef}></textarea>
      </div>
      <div className={classes.actions}>
        <button className='btn'>Add Comment</button>
      </div>
    </form>
  );
};

export default NewCommentForm;
