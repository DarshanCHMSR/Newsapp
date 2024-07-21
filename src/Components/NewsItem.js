import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let {title,description,imageUrl,newsUrl,author,date,source}=this.props;
    return (
      <div className="my-3" >
        <div className="card" >
  <img src={!imageUrl?"https://images.moneycontrol.com/static-mcnews/2024/07/20240719061051_Screenshot-2024-07-19-at-11.17.49%E2%80%AFAM.jpg":imageUrl} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title} <span class="badge text-bg-info">{source}</span></h5>
    <p className="card-text">{description}</p>
    <p className='card-text'> <small className='text-muted' >By {!author?"unknown":author} on {new Date(date).toGMTString()}</small></p>
    <a href={newsUrl} target="_blank" without rel="noreferrer" className="btn btn-sm btn-primary">Read More</a>
  </div>
</div>
      </div>
    )
  }
}

export default NewsItem