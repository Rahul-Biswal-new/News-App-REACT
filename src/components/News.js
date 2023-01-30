import React, { Component } from "react";
import Newsitem from "./Newsitem";
import Spinner from "./Spinner";
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {
  static defaultProps = {
    country: 'us',
    pageSize: 8,
    category: 'general',
  }

  capitalizeFirstLetter = (string)=>{
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  constructor(props) {
    super(props);
    // constructor only runs whenm there is a super() object
    console.log("this prints first constructor()");
    this.state = {
      // this.state is settting state
      // articles: this.articles,
      // set state using setState
      articles: [],
      loading: false,
      page: 1,
      totalResults: 0,
    };
    document.title = `${this.capitalizeFirstLetter(this.props.category)}- News React`;
  }

  async updateNews(){
    const url =
      `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=a816dd9be27b436f99b645d3be07b1a3&pageSize=${this.props.pageSize}`;
      this.setState({loading:true});
    let data = await fetch(url);
    // fetch return promise
    console.log(data);
    let parseData = await data.json();
    console.log(parseData);
    // after componentdidmount() we add data to empty arr of article and set totalResults 
    this.setState({ articles: parseData.articles, 
        totalResults: parseData.totalResults,
        loading: false,
        
    });
  }


  async componentDidMount() {
    this.updateNews();
  }

  handlePrevClick = async () => {
    console.log("previous");
    this.setState({page: this.state.page -1});
    this.updateNews();
  };

  handleNextClick = async () => {
    this.setState({
      page: this.state.page + 1
    })
  };

  fetchMoreData = async () => {
   this.setState({page: this.state.page +1 })
  //  this.updateNews();
  const url =
      `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=a816dd9be27b436f99b645d3be07b1a3&pageSize=${this.props.pageSize}`;
      this.setState({loading:true});
    let data = await fetch(url);
    // fetch return promise
    console.log(data);
    let parseData = await data.json();
    console.log(parseData);
    // after componentdidmount() we add data to empty arr of article and set totalResults 
    this.setState({ articles: this.state.articles.concat(parseData.articles), 
        totalResults: parseData.totalResults,
        loading: false,
        
    });
  };

  render() {
    console.log("this prints second render()");

    return (
      <>
        <h1 className="text-center">News React - top headline from {this.capitalizeFirstLetter(this.props.category)}</h1>
        {this.state.loading && <Spinner />}
        <div className="container d-flex justify-content-between">
          {/*  */}
        </div>
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length  !==this.state.totalResults}
          loader={<Spinner/>}
        >
        <div className="row">
          { this.state.articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                {/* <Newsitem  title={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url}/> */}
                <Newsitem
                  title={element.title ? element.title.slice(0, 45) : ""}
                  description={
                    element.description ? element.description.slice(0, 88) : ""
                  }
                  imageUrl={
                    element.urlToImage
                      ? element.urlToImage
                      : "https://images.unsplash.com/photo-1669173732969-66f67d37f3ca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDJ8Qm4tRGpyY0Jyd298fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
                  }
                  newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}
                />
              </div>
            );
          })}
        </div>
        </InfiniteScroll>
        <div className="container d-flex justify-content-between">
          
        </div>
      </>
    );
  }
}

export default News;
