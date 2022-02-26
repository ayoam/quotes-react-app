import React from 'react'
import QuoteList from "../components/quotes/QuoteList";
import NoQuotesFound from "../components/quotes/NoQuotesFound";


const AllQuotes = (props) => {
  return (
    <>
      {props.QuotesList.length>0?<QuoteList quotes={props.QuotesList}/>:<NoQuotesFound/>}
    </>
  )
}

export default AllQuotes