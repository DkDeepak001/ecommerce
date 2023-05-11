import Image from "next/image";

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
      }
    });
  return (
    <div>
      <div className="flex flex-wrap items-center justify-center">
        {product.map((item) => {
          return (
            <div className=" w-1/4 p-4" key={item.id}>
              <div className="rounded-lg bg-white shadow-lg">
                <div className="flex flex-col items-center p-4">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={300}
                    height={300}
                    className="h-60 w-2/4  bg-cover"
                  />
                  <h2 className="mt-2 flex h-12 items-center justify-center text-center text-lg font-semibold text-gray-800">
                    {item.title}
                  </h2>
                  <div className="mx-2 my-4 flex w-full items-center justify-between">
                    <h4 className="text-xl font-bold text-gray-800">
                      ${item.price}
                    </h4>
                    <button className="rounded bg-gray-800 px-3 py-2 text-xs font-bold uppercase text-white">
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
