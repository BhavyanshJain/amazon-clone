import Image from "next/image";
import { useSelector } from "react-redux";
import CheckoutProduct from "../components/CheckoutProduct";
import Header from "../components/Header";
import { selectItems, selecttotal } from "../slices/basketSlice";
import Currency from "react-currency-formatter";
import { useSession } from "next-auth/react";

export default function Checkout() {
  const items = useSelector(selectItems);
  const total = useSelector(selecttotal);
  const { data: session } = useSession();

  return (
    <div className="bg-gray-100">
      <Header />
      <main className="max-w-screen-2xl mx-auto flex flex-col md:flex-row">
        {/* LHS */}
        <div className="flex-grow m-5 shadow-sm">
          <Image
            src="https://links.papareact.com/ikj"
            alt=""
            width={1020}
            height={250}
            objectFit="contain"
          />

          <div className="flex flex-col p-5 space-y-10 bg-white">
            <h1 className="text-3xl border-b pb-4 ">
              {items.length == 0
                ? "Your Amazon Basket is empty."
                : "Your Shopping Basket"}
            </h1>

            {items.map((item, i) => (
              <CheckoutProduct
                key={i}
                id={item.id}
                title={item.title}
                rating={item.rating}
                price={item.price}
                description={item.description}
                category={item.category}
                image={item.image}
                hasPrime={item.hasPrime}
              />
            ))}
          </div>
        </div>

        {/* RHS */}
        {items.length > 0 && (
          <div className="flex flex-col bg-white p-10 shadow-md">
            <h2 className="whitespace-nowrap">
              Subtotal ({items.length} items):{" "}
              {
                <span className="font-bold">
                  <Currency quantity={total} currency="INR" />
                </span>
              }
            </h2>

            <button
              disabled={!session}
              onClick={() => alert("hi")}
              className="button mt-2"
            >
              {!session ? "Sign in to checkout" : "Prodceed to checkout"}
            </button>
          </div>
        )}
      </main>
    </div>
  );
}