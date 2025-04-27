import css from './ImageCard.module.css'
import { Image } from './ImageCard.types'

const ImageCard: React.FC<Image> = ({ alt_description, likes, urls, openModal }) => {
  return (
    <li className={css.card}>
      <img
        alt={alt_description}
        data-likes={likes}
        src={urls.small}
        onClick={() => openModal(urls.regular)}
      />
    </li>
  )
}
export default ImageCard;
