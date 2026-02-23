const baseUrl = process.env.API_URL;

/**
 * Fetches a list of products with optional limit
 */
export async function fetchProducts({ limit = null } = {}) {
  const params = new URLSearchParams({ offset: 0 });
  if (limit) params.append('limit', limit);

  try {
    const url = `${baseUrl}/products?${params.toString()}`;
    const res = await fetch(url);

    if (!res.ok) {
      console.error(`API Error: ${res.status}`);
      return [];
    }
    return await res.json();
  } catch (error) {
    console.error("Network error fetching products:", error);
    return [];
  }
}

/**
 * Fetches a single product by slug
 */
export async function fetchProduct(slug) {
  try {
    const res = await fetch(`${baseUrl}/products/slug/${slug}`);

    // Treat bad requests and not found as null to trigger Next.js notFound()
    if (res.status === 404 || res.status === 400) return null;

    if (!res.ok) throw new Error('Failed to fetch product');

    return await res.json();
  } catch (error) {
    // Log the error but return null so the page can handle the empty state
    console.error("fetchProduct Error:", error);
    return null;
  }
}