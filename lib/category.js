export const fetchCategories = async () => {
  const res = await fetch(`${process.env.API_URL}/categories`);
  const data = await res.json();
  return data;
};
