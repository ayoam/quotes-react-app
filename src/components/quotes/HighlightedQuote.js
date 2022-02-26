import { useContext } from 'react';
import classes from './HighlightedQuote.module.css';
import QuotesContext from '../../store/quotes-context';

const HighlightedQuote = (props) => {
  const {QuotesList} = useContext(QuotesContext);
  const quote = QuotesList.find(elt=>{
    return elt.id === props.quoteId
  })

  return (
    <figure className={classes.quote}>
      <p>{quote.text}</p>
      <figcaption>{quote.author}</figcaption>
    </figure>
  );
};

export default HighlightedQuote;
