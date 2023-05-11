export type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
};

export default async function Home() {
  let product: Product[] = [];
  await fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .then((json) => {
      if (Array.isArray(json)) {
        product = json as Product[];
        console.log(product);
      }
    });
  return <div></div>;
}
