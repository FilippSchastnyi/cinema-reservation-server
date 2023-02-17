export const sortFilmsModule = (input, films) => {
  const { page = 1, limit = 0 } = input;
  const start = (page - 1) * limit;
  return films.slice(start, start + limit)
}