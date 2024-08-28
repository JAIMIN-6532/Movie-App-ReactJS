import { Component } from "react";

export default class Moviecard extends Component{
    render(){
        return (<>
          
            <div className="main">
              <div className="movie-card">
                <div className="left">
                  <img
                    src="https://c7.alamy.com/comp/FXEAGB/avengers-assemble-2012-directed-by-joss-whedon-and-starring-robert-FXEAGB.jpg"
                    alt="poster"
                  />
                </div>
                <div className="right">
                  <div className="title">The Avangers</div>
                  <div className="plot">The Avangers is marvel movie</div>
                  <div className="price">RS. 199</div>
                  <div className="footer">
                    <div className="rating">8.9</div>
                    <div className="stars">stars</div>
                    <button className="favourite-btn">Favourite</button>
                    <button className="cart-btn">Add to cart</button>
                  </div>
                </div>
              </div>
            </div>
          </>)
    }
}