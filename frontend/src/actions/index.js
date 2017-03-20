export default function selectBook(book) {
  // selectBook is an actioncreator => need to return naction
  return {
    type: 'BOOK_SELECTED',
    payload: book,
  }
}
