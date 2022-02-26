import { useContext, useRef, useState } from 'react';
import { Redirect } from "react-router-dom"

import Card from '../UI/Card';
import LoadingSpinner from '../UI/LoadingSpinner';
import classes from './QuoteForm.module.css';
import QuotesContext from '../../store/quotes-context';
import { v4 as generateKey } from 'uuid';

const QuoteForm = (props) => {
  const authorInputRef = useRef();
  const textInputRef = useRef();

  const [isLoading,setIsLoading] = useState(false);
  const [redirect,SetRedirect] = useState(false);
  const {SetQuotesList} = useContext(QuotesContext);

  function submitFormHandler(event) {
    event.preventDefault();

    const enteredAuthor = authorInputRef.current.value;
    const enteredText = textInputRef.current.value;

    SetQuotesList(prevState=>[
      ...prevState,
      {id:generateKey(),author:enteredAuthor,text:enteredText}
    ])

    setIsLoading(true);
    setTimeout(()=>{SetRedirect(true)},500);
  }

  return (
    <Card>
      <form className={classes.form} onSubmit={submitFormHandler}>
        {redirect && <Redirect to="/quotes"/>}
        {isLoading && (
          <div className={classes.loading}>
            <LoadingSpinner />
          </div>
        )}

        <div className={classes.control}>
          <label htmlFor='author'>Author</label>
          <input type='text' id='author' ref={authorInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='text'>Text</label>
          <textarea id='text' rows='5' ref={textInputRef}></textarea>
        </div>
        <div className={classes.actions}>
          <button className='btn'>Add Quote</button>
        </div>
      </form>
    </Card>
  );
};

export default QuoteForm;
