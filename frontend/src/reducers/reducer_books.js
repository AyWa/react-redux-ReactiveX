import {ADD_BOOK} from 'actions/types'

const init = [
  {title: 'Javascript'},
  {title: 'Harry Potter'},
  {title: 'The dark Tower'},
  {title: 'Eloquent Ruby'},
  {title: 'Yolo'},
]

export default function (state=init, action) {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, {title: action.payload.nameBook}]
    default : return state;
  }
}
