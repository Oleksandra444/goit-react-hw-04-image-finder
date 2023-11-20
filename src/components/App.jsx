import { Component } from "react";
import { api } from "api";
import { SearchBar } from "./SearchBar/SearchBar";
import { ImageGallery } from "./ImageGallery/ImageGallery";
import { ButtonLoadMore } from "./ButtonLoadMore/ButtonLoadMore";
import { Loader } from "./Loader/Loader";

import css from "./styles.module.css";

export class App extends Component {
  state = {
    images: [],
    query: '',
    page: 1,
    totalHits: null,
    error: false,
    isLoading: false,
     };
  
  async dataRequest() {
    const { page, query } = this.state;
    try {
      this.setState({ isLoading: true, error: false });
      const data = await api(query, page);
      
      this.setState(prevState => ({
        images: [...prevState.images,...data.hits],
        totalHits: data.totalHits,
      }));
    } catch (error) {
      this.setState({ error: true });
    } finally {
      this.setState({ isLoading: false });
    }
  }

   componentDidUpdate(prevProps, prevState) {
     const { query, page } = this.state;
      if (prevState.query !== query || prevState.page !== page) {
       this.dataRequest();
    }
   
  }

  querySubmit = query => {
    if (this.state.query === query && this.state.page === 1) return;
    this.setState({query, images: [], page: 1})
  };
  
  loadMore = () => { 
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };
  
  render() {
    const { isLoading, error, totalHits, page, query, images } = this.state;
    const totalPage = Math.ceil(totalHits / 12);

    return (
      <div className={css.app }>
        <SearchBar onSubmit={this.querySubmit} />
        
        {totalHits === 0 ? <div className={css.message}> Sorry! There are no images {query}</div> : <ImageGallery imageList={images} />}
        
        {totalPage > page && <ButtonLoadMore onClick={this.loadMore} />}
        
        {isLoading && <Loader />}

        {error && <div className={ css.error}> OOPS! TRY AGAIN. SOMETHING GONE WRONG</div>}


      </div>
    )
}
  }


