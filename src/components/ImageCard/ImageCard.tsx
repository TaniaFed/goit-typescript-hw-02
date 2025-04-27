import css from './ImageCard.module.css'
import { Image } from './ImageCard.types'

const ImageCard: React.FC<Image> = ({ alt_description, urls, openModal }) => {
  return (
    <li className={css.card}>
      <img
        alt={alt_description}
        src={urls.small}
        onClick={() => openModal(urls.regular, alt_description)}
      />
    </li>
  )
}
export default ImageCard;
