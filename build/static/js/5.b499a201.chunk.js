(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[5],{50:function(t,e,s){t.exports={item:"QuoteItem_item__wQ55c"}},51:function(t,e,s){t.exports={list:"QuoteList_list__2NsOp",sorting:"QuoteList_sorting__3OYw9"}},52:function(t,e,s){t.exports={noquotes:"NoQuotesFound_noquotes__mwtk_"}},57:function(t,e,s){"use strict";s.r(e);var n=s(0),c=s(50),i=s.n(c),o=s(8),u=s(1),r=function(t){return Object(u.jsxs)("li",{className:i.a.item,children:[Object(u.jsxs)("figure",{children:[Object(u.jsx)("blockquote",{children:Object(u.jsx)("p",{children:t.text})}),Object(u.jsx)("figcaption",{children:t.author})]}),Object(u.jsx)(o.b,{to:"/quotes/"+t.id,className:"btn",children:"View Fullscreen"})]})},j=s(51),l=s.n(j),a=function(t){return Object(u.jsx)(n.Fragment,{children:Object(u.jsx)("ul",{className:l.a.list,children:t.quotes.map((function(t){return Object(u.jsx)(r,{id:t.id,author:t.author,text:t.text},t.id)}))})})},d=s(52),b=s.n(d),x=function(){return Object(u.jsxs)("div",{className:b.a.noquotes,children:[Object(u.jsx)("p",{children:"No quotes found!"}),Object(u.jsx)(o.b,{to:"/newQuote",className:"btn",children:"Add a Quote"})]})};e.default=function(t){return Object(u.jsx)(u.Fragment,{children:t.QuotesList.length>0?Object(u.jsx)(a,{quotes:t.QuotesList}):Object(u.jsx)(x,{})})}}}]);
//# sourceMappingURL=5.b499a201.chunk.js.map