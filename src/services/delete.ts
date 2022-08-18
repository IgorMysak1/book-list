export const deleteBookRequest = async (id: number) => {
  const response = await fetch(`http://localhost:3001/books/${id}`, {
    method: "DELETE",
  });
  return await response.json();
};
