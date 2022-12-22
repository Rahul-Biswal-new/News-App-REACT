import React, { Component } from 'react'

export default class Newsitem extends Component {
 
  // constructor() {
  //   super();
  //   this.state = {
  //     articles: this.articles,
  //     loading: false
  //   }
  // }

  render() {
    let {title, description, imageUrl, newsUrl  } = this.props;
    return (
      <div className='my-3'>
        {/* this is newsitem component */}
        <div className="card" style={{width: "18rem"}}>
  <img src={imageUrl} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{description}... </p>
    <a href={newsUrl} rel="noreferrer" target="_blank" className="btn btn-dark">Go somewhere</a>
  </div>
</div>
      </div>
    )
  }
}
