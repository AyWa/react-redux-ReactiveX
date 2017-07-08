import { createSelector } from 'reselect'

// useless
export const bookSelector = createSelector(
  state => state.books,
  books => books,
)

export default bookSelector
