import React, { useContext } from 'react'
import { Route, useParams,Link } from "react-router-dom"
import HighlightedQuote from "../components/quotes/HighlightedQuote";
import classes from "./quote-details.module.css";
import CommentsList from "../components/comments/CommentsList";
import Comments from "../components/comments/Comments";
import CommentsContext from '../store/comments-context';

const Quotedetails = () => {
  const params = useParams();
  const {commentsList} = useContext(CommentsContext);

  const currentQuoteComments = commentsList.filter(elt=>elt.quoteId===params.quoteId);

  return (
    <>
      <HighlightedQuote quoteId={params.quoteId}/>
      <Route path={`/quotes/${params.quoteId}`} exact>
        <div className={classes["btn-container"]}>
          <Link to={`/quotes/${params.quoteId}/comments`} className="btn">Load commnets</Link>
        </div>
      </Route> 
      <Route path={`/quotes/${params.quoteId}/comments`} exact>
        <div>
          <Comments quoteId={params.quoteId}/>
          {currentQuoteComments.length>0 ? <CommentsList comments={currentQuoteComments}/> : <p style={{textAlign:'center'}}>No Comments were added!</p>}
        </div>
      </Route>
      </>
  )
}

export default Quotedetails