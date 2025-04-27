import styles from './ErrorMessage.module.css'
import { Error } from './ErrorMessage.types'

const ErrorMessage:React.FC<Error> = ({ message }) => {
  return (
    <div
      className={styles.message}
      style={{ color: 'White', textAlign: 'center', marginTop: '20px' }}
    >
      {message || 'Щось пішло не так. Будь ласка, спробуйте пізніше.'}
    </div>
  )
}

export default ErrorMessage