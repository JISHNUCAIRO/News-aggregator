import React, { useEffect, useState ,Component} from "react";
import axios from 'axios';
import "./other.css";
import Footer from "../pagebars/footer";

function Poli()
{
  const [articles,setArticles] = useState([]);
      
  useEffect(() => {
      axios.get('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=58f87828eb9a4aa581360633875d3d05')
      .then(response => setArticles(response.data.articles.slice(0,12)))
      .catch(error => console.log(error));
  },[]);
  
    return(
       <div className="politics">

      <div className="api-fetch-main">
                        {articles.map(article => (
                          <div className="api-fetch-mai" key={article.title}>
                              <h2 className="api-fetch-title">{article.title}</h2>
                                <img className="api-fetch-img" src={article.urlToImage} alt="img" />
                                <p className="api-fetch-desc">{article.description}</p>
                                <button className="api-fetch-button"><span className="api-fetch-button-two"><a id="bua" href={article.url}>Click</a></span><span>Read more</span></button>
                            </div>
                        ))}
                    </div>
                    <Footer/>
         </div>
    )
}
export default Poli;

