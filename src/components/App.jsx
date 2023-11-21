import { useState, useEffect } from "react";
import { api } from "api";
import { SearchBar } from "./SearchBar/SearchBar";
import { ImageGallery } from "./ImageGallery/ImageGallery";
import { ButtonLoadMore } from "./ButtonLoadMore/ButtonLoadMore";
import { Loader } from "./Loader/Loader";

import css from "./styles.module.css";

export const App = () => { 

  const [images, setImages] = useState([]);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [totalHits, setTotalHits] = useState(null);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  

  useEffect(() => {

    if (!query) return;
    
    async function dataRequest() {
      try {
        setIsLoading(true);
        setError(false);
        const data = await api(query, page);
        
        //       setImages(prevImages => {  
    
        //     const uniqueIds = new Set(prevImages.map(item => item.id));
        // const newImages = data.hits.filter(item => !uniqueIds.has(item.id));
        // return [...prevImages, ...newImages];
        //         });
        
        setImages(prevImages => [...prevImages, ...data.hits]);
        setTotalHits(data.totalHits);
        
      
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }
    
    dataRequest();
  

    
    
  }, [query, page]);


const querySubmit = handlequery => {
  if (handlequery === query && page === 1) return;
  setQuery(handlequery);
  setImages([]);
  setPage(1);
    
  };

  const loadMore = () => setPage(prevPage => prevPage + 1);

  const totalPage = Math.ceil(totalHits / 12);
  
  
  
  return (
      <div className={css.app }>
        <SearchBar onSubmit={querySubmit} />
        
        {totalHits === 0 ? <div className={css.message}> Sorry! There are no images {query}</div> : <ImageGallery imageList={images} />}
        
        {totalPage > page && <ButtonLoadMore onClick={loadMore} />}
        
        {isLoading && <Loader />}

        {error && <div className={ css.error}> OOPS! TRY AGAIN. SOMETHING GONE WRONG</div>}


      </div>
    )


}

