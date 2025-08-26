import { toast } from "sonner";
import { Navigation } from "../components/Navigation";
import img1 from "../images/image1.webp";
import img2 from "../images/image2.webp";
import img3 from "../images/image3.webp";
import img4 from "../images/image4.webp";
import img5 from "../images/image5.webp";
import img6 from "../images/image6.webp";
import img7 from "../images/image7.webp";
import img8 from "../images/image8.webp";
import img9 from "../images/image9.webp";
import { useStoreOrders, useTotalPrice } from "../store/Store";

let id = 0;

const products = [
  {
    title: "Brown Funky T",
    image: img1,
    price: 2499,
  },
  {
    title: "White Horse Black T",
    image: img2,
    price: 3299,
  },
  {
    title: "Blue T Boat",
    image: img3,
    price: 2499,
  },
  {
    title: "Purpe Aligator Funky",
    image: img4,
    price: 2499,
  },
  {
    title: "Black Crab Cotton",
    image: img5,
    price: 2499,
  },
  {
    title: "Typography Blue T",
    image: img6,
    price: 2499,
  },
  {
    title: "Starrl Black T",
    image: img7,
    price: 2499,
  },
  {
    title: "Chill Vibe T",
    image: img8,
    price: 2499,
  },
  {
    title: "Peach Flower T",
    image: img9,
    price: 2499,
  },
];

export function Landing() {
  const incrementPrice = useTotalPrice((state) => state.incrementPrice);
  const addOrders = useStoreOrders((state) => state.addOrders);

  // setting the total price and orders
  function handleOrders(title, price) {
    incrementPrice(price);
    addOrders({ title: title, price: price });
    toast.success(<div className="font-bold">Item added to cart</div>);
  }

  return (
    <div className="h-dvh overflow-y-scroll [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
      <div className="lg:hidden h-full flex justify-center items-center">
        <h1>Not yet responsive for smaller devices</h1>
      </div>
      <div className="max-lg:hidden w-[800px] min-w-[300px] mx-auto space-y-2">
        <Navigation></Navigation>

        <div>
          <h1 className="text-center font-bold text-4xl">Top Products</h1>
        </div>

        {/* Products */}
        <div className="grid grid-cols-3">
          {products.map(({ title, image, price }) => {
            return (
              <div
                key={id++}
                className="m-4 w-65 p-2 border rounded-lg border-neutral-200"
              >
                <h3 className="font-medium">{title}</h3>
                <div className="flex justify-between">
                  <p className="font-medium text-[0.6rem]">Price: Rs{price}</p>
                  <button
                    onClick={() => handleOrders(title, price)}
                    className="cursor-pointer font-medium text-[0.6rem]"
                  >
                    Add to cart {">"}
                  </button>
                </div>
                <div className="object-contain">
                  <img src={image} alt="image-here" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer section */}
        <footer>
          <p className="text-center my-5 text-[0.7rem]">
            © 2025 SHOPSY RETAIL PRIVATE LIMITED, ALL RIGHTS RESERVED
          </p>
        </footer>
      </div>
    </div>
  );
}
