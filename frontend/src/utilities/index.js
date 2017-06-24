export const safe = (f, def) => {
  try {
    return f()
  } catch (e) { /* no error catch */ }
  return def
}

export default safe
