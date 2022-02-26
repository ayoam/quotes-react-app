import { useState } from "react";
import { Route,Switch,Redirect } from "react-router-dom"
import AddQuote from "./pages/add-quote";
import AllQuotes from "./pages/all-quotes";
import Quotedetails from "./pages/quote-details";
import QuotesContext from "./store/quotes-context";
import CommentsContext from './store/comments-context';
import Layout from "./components/layout/Layout";
import PageNotFound from "./pages/page-not-found";

function App() {

  const [commentsList,SetCommentsList] = useState([]);

  const [QuotesList,SetQuotesList] = useState([
    // {id:"Q1",author:"Ayoub",text:"Shut the fuck up!"},
    // {id:"Q2",author:"Mehdi",text:"Go fucking work!"}
  ]);

  return (
    <QuotesContext.Provider value={{QuotesList,SetQuotesList}}>
      <CommentsContext.Provider value={{commentsList,SetCommentsList}}>
        <Layout>
          <Switch>
            <Route path="/" exact>
              <Redirect to="/quotes"/>
            </Route>
            <Route path="/quotes" exact>
              <AllQuotes QuotesList={QuotesList}/>
            </Route>
            <Route path="/quotes/:quoteId">
              <Quotedetails/>
            </Route>
            <Route path="/newQuote">
              <AddQuote/>
            </Route>
            <Route path="/pageNotFound">
              <PageNotFound/>
            </Route>
            <Route path="*">
              <Redirect to="/pageNotFound"/>
            </Route>
          </Switch>
        </Layout>
      </CommentsContext.Provider>
    </QuotesContext.Provider>
  );
}

export default App;
