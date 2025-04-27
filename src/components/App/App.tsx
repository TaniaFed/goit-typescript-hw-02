import { useState, useEffect } from 'react'
import SearchBar from '../SearchBar/SearchBar'
import Loader from '../Loader/Loader'
import toast, { Toaster } from 'react-hot-toast'
import { getPhotos } from '../../apiService/photos'
import ImageGallery from '../ImageGallery/ImageGallery'
import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn'
import { ImageModal } from '../ImageModal/ImageModal'
import ErrorMessage from '../ErrorMessage/ErrorMessage'
import { IPhoto } from '../../apiService/photos.types'
import './App.css'

function App() {
  const [query, setQuery] = useState<string>('')
  const [page, setPage] = useState<number>(1)
  const [results, setResults] = useState<IPhoto[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)
  const [isEmpty, setIsEmpty] = useState<boolean>(false)
  const [isVisible, setIsVisible] = useState<boolean>(false)
  const [modalIsOpen, setIsOpen] = useState<boolean>(false)
  const [modalSrc, setModalSrc] = useState<string>('')
  const [modalAlt, setModalAlt] = useState<string>('')

  useEffect(() => {
    if (error) {
      toast('Oops! Something went wrong...')
    }
  }, [error])

  useEffect(() => {
    if (isEmpty) {
      toast('Sorry, nothing was found for your search... Try again!')
    }
  }, [isEmpty])

  useEffect(() => {
    if (!query) return

    const fetchPhotos = async () => {
      setIsLoading(true)
      try {
      const { results, total_pages } = await getPhotos({query, page})

        if (!results.length) {
          setIsEmpty(true)
          return
        }
        setResults((prevImages) => [...prevImages, ...results])

        setIsVisible(page < total_pages)
      } catch (error) {
        setError(error instanceof Error ? error.message : 'Unknown error')
      } finally {
        setIsLoading(false)
      }
    }
    fetchPhotos()
  }, [page, query])

  const handleSearch = (inputValue: string) => {
    setQuery(inputValue)
    setResults([])
    setPage(1)
    setError(null)
    setIsEmpty(false)
    setIsVisible(false)
  }

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1)
  }

  const openModal = (src: string, alt: string) => {
    setIsOpen(true)
    setModalSrc(src)
    setModalAlt(alt)
  }

  const closeModal = () => {
    setIsOpen(false)
    setModalSrc('')
    setModalAlt('')
  }

  return (
    <div className="app">
      <header className="header">
        <SearchBar onSubmit={handleSearch} />
      </header>
      <main className="gallery">
        {isLoading && <Loader className="loader" />}
        {results.length > 0 && (
          <ImageGallery results={results} openModal={openModal} />
        )}
        <Toaster position="top-left" />

        {error && <ErrorMessage message="Oops! Something went wrong..." />}

        {isVisible && (
          <LoadMoreBtn onClick={handleLoadMore} disabled={isLoading}>
            {isLoading ? 'LOADING...' : 'LOAD MORE'}
          </LoadMoreBtn>
        )}
        {isEmpty && <ErrorMessage message="Nothing found. Try another search!" />}
        <ImageModal
          modalIsOpen={modalIsOpen}
          closeModal={closeModal}
          src={modalSrc}
          alt={modalAlt}
        />
      </main>
    </div>
  )
}

export default App
