import  React,{useState,Suspense } from "react";
import { Route,Switch,Redirect } from "react-router-dom"
// import AddQuote from "./pages/add-quote";
// import AllQuotes from "./pages/all-quotes";
// import Quotedetails from "./pages/quote-details";
// import PageNotFound from "./pages/page-not-found";
import QuotesContext from "./store/quotes-context";
import CommentsContext from './store/comments-context';
import Layout from "./components/layout/Layout";
import LoadingSpinner from "./components/UI/LoadingSpinner";

const AddQuote = React.lazy(()=>import("./pages/add-quote"));
const Quotedetails = React.lazy(()=>import("./pages/quote-details"));
const AllQuotes = React.lazy(()=>import("./pages/all-quotes"));
const PageNotFound = React.lazy(()=>import("./pages/page-not-found"));

function App() {
  const [commentsList,SetCommentsList] = useState([]);
  const [QuotesList,SetQuotesList] = useState([]);

  return (
    <QuotesContext.Provider value={{QuotesList,SetQuotesList}}>
      <CommentsContext.Provider value={{commentsList,SetCommentsList}}>
        <Suspense fallback={<div className="centered"><LoadingSpinner/></div>}>
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
        </Suspense>
      </CommentsContext.Provider>
    </QuotesContext.Provider>
  );
}

export default App;
