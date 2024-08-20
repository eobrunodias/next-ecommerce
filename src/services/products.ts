export type ProductType = {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  inStock: number;
};

export async function fetchProducts() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/products`
  );

  const products: ProductType[] = await response.json();
  return products;
}

export async function fetchProduct(id: string | number) {
  const product: ProductType = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/products/${id}`
  ).then((res) => res.json());
  return product;
}
