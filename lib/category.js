const baseUrl = process.env.NEXT_PUBLIC_API_URL;

export const fetchCategories = async () => {
  const res = await fetch(`${baseUrl}/categories`);
  const data = await res.json();
  return data;
};
