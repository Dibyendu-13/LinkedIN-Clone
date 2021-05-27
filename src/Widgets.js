import React from "react";
import InfoIcon from '@material-ui/icons/Info';

import "./Widgets.css";

function Widgets()
{
  const newsArticle =(heading,subtitle)=>(
  <div  className="widgets__article">

  <div className="widgets__articleRight">
    <h4>⚫&nbsp;{heading}</h4>
    <p>{subtitle}</p>
  </div>
</div>

)
  
      
  ;
  return (<div className="widgets"> 
  <div className="widgets__header">
    <h2>LinkedIN News</h2>
  < InfoIcon/>
  </div>
  {newsArticle("Dibyendu Bar is back on track !","Top News -999 readers!")}
  {newsArticle(" WhatsApp challenges Centre’s new rules in court !!","Requiring messaging apps to 'trace' chats is the equivalent of asking us to keep a fingerprint of every single message sent on WhatsApp!")}
  {newsArticle("How Europe wants to tackle online misinformation!!","The European Commission, the executive branch of the European Union, on Wednesday introduced plans to strengthen its three-year-old Code of Practice on Disinformation that aims to tackle online falsehood.")}
  {newsArticle("The name is Bond. And I’m an Amazon product !!","Amazon has reached a deal to acquire MGM Studios, the Hollywood studio best known for its James Bond franchise, for $8.45 billion.!")}
  {newsArticle("Cryptocurrency Prices Turn Choppy as Bounce Momentum Ebbs","Bitcoin dropped 4 percent in Asia and the next biggest crypto token, Ether, was down 7.5 percent.")}

  </div>)

}
export default Widgets;