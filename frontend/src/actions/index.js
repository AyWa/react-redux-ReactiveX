import {
  BOOK_SELECTED,
  ADD_BOOK,
} from './types'

export default function selectBook(book) {
  // selectBook is an actionCreator => need to return action
  return {
    type: BOOK_SELECTED,
    payload: book,
  }
}

export const addBook = (newBook) => {
  return {
    type: ADD_BOOK,
    payload: newBook,
  }
}
