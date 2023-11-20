import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem";
import css from "../styles.module.css";


export const ImageGallery = ({ imageList }) => {
    
    return (
        <ul className={css.imageGallery}>
            {imageList.map(imageItem =>
                <ImageGalleryItem key={imageItem.id} imageUrlSizeS={imageItem.webformatURL} imageUrlSizeXL={imageItem.largeImageURL }  tags={imageItem.tags} />)
            }
        </ul>
    )
}