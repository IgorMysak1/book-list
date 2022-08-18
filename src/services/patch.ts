type bookBody = { [key in string]: string | boolean };

export const patchBookRequest = async (id: number, book: bookBody) => {
  const response = await fetch(`http://localhost:3001/books/${id}`, {
    method: "PATCH",
    body: JSON.stringify(book),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
  return await response.json();
};
