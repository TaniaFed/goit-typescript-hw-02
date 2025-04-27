import style from './SearchBar.module.css'
import { useState, FormEvent, ChangeEvent } from 'react'
import toast from 'react-hot-toast'

import { ISearchBar } from './SearchBar.types'

const notify = () => toast('Enter search requirements!')

const SearchBar: React.FC<ISearchBar> = ({ onSubmit }) => {
  const [query, setQuery] = useState<string>('')

  const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
    setQuery(event.currentTarget.value)
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (!query.trim()) {
      return notify()
    }

    onSubmit(query)

    setQuery('')
  }

  return (
    <form className={style.formBox} onSubmit={handleSubmit}>
      <input
        className={style.input}
        onChange={handleInput}
        name="search"
        value={query}
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search images and photos"
      />
      <button className={style.button} type="submit">
        Search
      </button>
    </form>
  )
}

export default SearchBar
