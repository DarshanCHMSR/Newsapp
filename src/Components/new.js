import React, {useEffect,useState}from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

// import PropTypes from 'prop-types'
const News =(props)=> {
 const [articles, setarticles] = useState([])
 const [loading, setLoading] = useState(true)
 const [page, setPage] = useState(1)
 const [totalResults, setTotalResults] = useState(0)
 const capitilizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  // constructor(props) {
  //   super(props);
  //   this.state = {              ---- class based
  //     articles: this.articles,
  //     loading: false,
  //     page: 1,
  //     totalResults: 0,
  //   };
    // document.title =
    //   "DAILYNEWS-" + capitilizeFirstLetter(props.category);
  

 const updateNews= async() =>{
    props.setProgress(0);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=419440d3e346449188b1f8b2d8977afe&page=${page}&pageSize=${props.pageSize}`;
    // this.setState({ loading: true });
    setLoading(true);
    let data = await fetch(url);
    props.setProgress(50);
    let parsedData = await data.json();
    props.setProgress(70);
    setarticles(parsedData.articles)
    setTotalResults(parsedData.totalResults)
    setLoading(false)
    // this.setState({
    //   articles: parsedData.articles,
    //   totalResults: parsedData.totalResults,
    //   loading: false,
    // });
    props.setProgress(100);
  }
  // useEffect(() => {
  //  updateNews();
  // },)
  useEffect(() => {
    // document.title = `${this.capitalizeFirstLetter(props.category)} - NewsMonkey`;
    updateNews(); 
    // eslint-disable-next-line
}, [])  

  // async componentDidMount() {
  //    let url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=419440d3e346449188b1f8b2d8977afe&page-1&pageSize=${props.pageSize}`;
  //    this.setState({loading:true});
  //    let data = await fetch(url);
  //    let parsedData = await data.json()
  //    this.setState({articles:parsedData.articles,
  //     totalResults:parsedData.totalResults,
  //     loading:false
  //   })
  //   this.updateNews();
  // }

  // const handlePrevsClick = async () => {
  //   // this.setState({page:this.state.page-1});
  //   setPage(page-1)
  //   updateNews();
  // }
  // handlePrevsClick = async () => {
  //     let url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=419440d3e346449188b1f8b2d8977afe&page=${this.state.page-1}&pageSize=${props.pageSize}`;
  //     this.setState({loading:true});
  //     let data = await fetch(url);
  //     let parsedData = await data.json()

  //     this.setState({
  //     page:this.state.page-1,
  //     articles:parsedData.articles,
  //     loading:false
  //   })
  //   this.setState({
  //     page: this.state.page - 1,
  //   });
  //   this.updateNews();
  // };
  // const handleNextClick = async () => {
  //   // this.setState({page:this.state.page+1});
  //   setPage(page+1)
  //   updateNews();
  // }

  // handleNextClick = async () => {
  //       if(!(this.state.page+1>Math.ceil(this.state.totalResults/props.pageSize))){
  //         this.setState({loading:true});
  //        { let url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=419440d3e346449188b1f8b2d8977afe&page=${this.state.page+1}&pageSize=${props.pageSize}`;
  //         let data = await fetch(url);
  //         let parsedData = await data.json()
  //         this.setState({
  //         page:this.state.page+1,
  //         articles:parsedData.articles,
  //         loading:false
  //       })}
  //   }
  //   this.setState({
  //     page: this.state.page + 1,
  //   });
  //   this.updateNews();
  // };

  const fetchMoreData = async () => {
    // this.setState({ page: this.state.page + 1 });
    
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=419440d3e346449188b1f8b2d8977afe&page=${page+1}&pageSize=${props.pageSize}`;
    setPage(page+1)
    let data = await fetch(url);
    let parsedData = await data.json();
    setarticles(articles.concat(parsedData.articles))
    setTotalResults( parsedData.totalResults)
  //   this.setState({
  //     articles: articles.concat(parsedData.articles),
  //     totalResults: parsedData.totalResults
  //   });
  };

 
    return (
      <>
      <div className="container my-3">
        <h1 className="text-center" style={{ margin: "35px" ,marginTop:"90px"}}>
          DailyNews-Top {capitilizeFirstLetter(props.category)}{" "}
          HeadLines
        </h1>
        {loading && <Spinner />}
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={<Spinner />}
        >
          <div className="container">
          <div className="row">
            {!loading &&
              articles.map((element) => {
                return (
                  <div className="col-md-4" key={element.url}>
                    <NewsItem
                      title={element.title}
                      description={element.description}
                      imageUrl={element.urlToImage}
                      newsUrl={element.url}
                      author={element.author}
                      date={element.publishedAt}
                      source={element.source.name}
                    />
                  </div>
                );
              })}
          </div>
          </div>
        {/* <div className="container d-flex justify-content-between">
          <button
            type="button"
            disabled={this.state.page <= 0}
            className="btn btn-dark"
            onClick={this.handlePrevsClick}
          >
            &larr; Previous
          </button>
          <button
            type="button"
            disabled={
              this.state.page + 1 >
              Math.ceil(this.state.totalResults / props.pageSize)
            }
            className="btn btn-dark"
            onClick={this.handleNextClick}
          >
            Next &rarr;
          </button>
        </div> */}
      
      </InfiniteScroll>
      </div>
      </>
    );
  }
  
    News.defaultProps = {
      country: "in",
      pageSize: 8,
      category: "general",
    };
    News.propTypes = {
      country: PropTypes.string,
      pageSize: PropTypes.number,
      category: PropTypes.string,
  }

export default News;
