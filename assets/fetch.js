export async function useFecth(id = -1) {
  const baseUrl = "http://localhost:3000/api/animal";
  const endUrl = id === -1 ? baseUrl : baseUrl + `/${id}`;

  const res = await fetch(endUrl);
  const data = await res.json();
  return data;
}
