import ImageCard from '../ImageCard/ImageCard'
import { Gallery } from './ImageGallery.types'
import css from './ImageGallery.module.css'

const ImageGallery: React.FC<Gallery> = ({ results, openModal }) => {
  return (
    <ul className={css.imageList}>
      {results.map(({ id, alt_description, urls }) => (
        <ImageCard
          key={id}
          id={id}
          alt_description={alt_description}
          urls={urls}
          openModal={openModal}
        />
      ))}
    </ul>
  )
}

export default ImageGallery
