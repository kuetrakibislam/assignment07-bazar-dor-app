import { Product } from "@/types/product";
import { Category } from "@/types/category";

const API_BASE_URL =
  "https://openapi.programming-hero.com/api/bazardor";

// Common API fetch function
async function fetchApi<T>(endpoint: string): Promise<T> {
  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error(
      `API Error: ${response.status} ${response.statusText}`
    );
  }

  return response.json() as Promise<T>;
}

// Get all products
export async function getProducts(): Promise<Product[]> {
  return fetchApi<Product[]>("/products");
}

// Get products by category
export async function getProductsByCategory(
  category: string
): Promise<Product[]> {
  return fetchApi<Product[]>(
    `/products?category=${encodeURIComponent(category)}`
  );
}

// Get single product by ID
export async function getProductById(
  id: number
): Promise<Product> {
  return fetchApi<Product>(`/products/${id}`);
}

// Get all categories
export async function getCategories(): Promise<Category[]> {
  return fetchApi<Category[]>("/categories");
}

// Get single category
export async function getCategoryBySlug(
  slug: string
): Promise<Category> {
  return fetchApi<Category>(`/categories/${encodeURIComponent(slug)}`);
}