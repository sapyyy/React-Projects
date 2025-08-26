import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import { BsCart4 } from "react-icons/bs";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useStoreOrders, useTotalPrice } from "../store/store";
import { Order } from "./Order";
import { toast } from "sonner";

export function Navigation() {
  const orders = useStoreOrders((state) => state.orders);
  const totalPrice = useTotalPrice((state) => state.totalPrice);

  return (
    <div className="h-15 flex justify-around items-center mt-3 sticky top-0 bg-white">
      <div className="font-bold underline">Shopsy</div>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Order Items</NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="w-53">
                <h1 className="text-[0.8rem]">
                  Here you can add items to the cart
                </h1>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuTrigger>Creator</NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="w-53">
                <h1 className="text-[0.8rem]">Website created by @sapyyy</h1>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      <Popover>
        <PopoverTrigger>
          <div className="border cursor-pointer border-neutral-300 rounded-lg p-1">
            <BsCart4 size={20} />
          </div>
        </PopoverTrigger>
        <PopoverContent className="w-50 text-[0.8rem]">
          <ul>
            {orders.length != 0 && (
              <li className="flex justify-between font-bold">
                <li>Name</li>
                <li>Price</li>
              </li>
            )}
            {(orders.length != 0 &&
              orders.map((order) => (
                <Order title={order.title} price={order.price}></Order>
              ))) || (
              <li className="text-center">
                Added items will <br /> be visible here
              </li>
            )}
          </ul>
          <hr className="my-3" />

          {/* Visible when there are orders */}
          {orders.length == 0 || (
            <div className="flex justify-between items-center">
              <h1 className="font-medium">Total: {totalPrice}</h1>
              <button
                onClick={() => toast.error("You really thought that will work")}
                className="bg-green-100/50 text-green-800 p-1 px-2 rounded-xl border border-green-300 cursor-pointer"
              >
                Confirm
              </button>
            </div>
          )}
        </PopoverContent>
      </Popover>
    </div>
  );
}
