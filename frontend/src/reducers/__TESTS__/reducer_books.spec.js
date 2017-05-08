import reducer, {initialState} from 'reducers/reducer_books'

describe("test reducer books", () => {
  it("should return the initial state", () => {
    expect(
      reducer(undefined, {})
    ).toEqual(initialState)
  })
})
