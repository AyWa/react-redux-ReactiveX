import { BOOK_SELECTED } from './types'

export default function selectBook(book) {
  // selectBook is an actionCreator => need to return action
  return {
    type: BOOK_SELECTED,
    payload: book,
  }
}
