import css from './Loader.module.css'
import ClipLoader from 'react-spinners/ClipLoader'
import { ILoader } from './Loader.types'

const Loader: React.FC<ILoader> = ({className}) => (
  <div className={className}>
    <ClipLoader
      color={css.color}
      loading={true}
      cssOverride={{}}
      size={50}
      aria-label="Loading Spinner"
      data-testid="loader"
    />
  </div>
)

export default Loader
