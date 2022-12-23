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
    let { title, description, imageUrl, newsUrl, author, date, source } = this.props;
    return (
      <div className='my-3'>
        {/* this is newsitem component */}
        <div className="card" style={{ color: 'black' }}>
        <span class="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left:'87%', zIndex:"1"}}  >
              {source}
              <span class="visually-hidden">unread messages</span>
            </span>
          <img src={imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}... </p>
            <p className="card-text"><small class="text-muted">By {author ? author : "Unknown"} on {new Date(date).toGMTString()}</small></p>
            <a href={newsUrl} rel="noreferrer" target="_blank" className="btn btn-dark">Go somewhere</a>
          </div>
        </div>
      </div>
    )
  }
}
