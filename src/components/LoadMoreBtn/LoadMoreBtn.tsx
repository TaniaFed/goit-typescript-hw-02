import css from './LoadMoreBtn.module.css'
import { ILoadMoreBtn } from './LoadMoreBtn.types'

const LoadMoreBtn: React.FC<ILoadMoreBtn> = ({ children, onClick, disabled }) => {
  return (
    <button className={css.loadMoreBtn} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  )
}

export default LoadMoreBtn
