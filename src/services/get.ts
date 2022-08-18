export const getBooksRequest = async () => {
  const response = await fetch("http://localhost:3001/books");
  return await response.json();
};
