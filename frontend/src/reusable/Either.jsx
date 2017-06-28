export default Either = ({children, cond}) =>
  cond ? children[0] : children[1]
