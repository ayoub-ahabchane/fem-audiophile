import { PropTypes as TCartItem } from "@/components/Cart/CartItem/CartItem";
import { useEffect, useState } from "react";
import { Cart } from "swell-js";
import { swelljs } from "./init/client";
import { TCart } from "@/components/Cart/Cart";

export const useCart = () => {
  const [cart, setCart] = useState<TCart>();
  const [isCartLoading, setIsCartLoading] = useState(true);

  const addItemToCart = async (product_id: string, quantity: number) => {
    const addedCartItem = await swelljs.cart.addItem({ product_id, quantity });
  };

  const removeItemFromCart = async (id: string, quantity: number) => {
    await swelljs.cart.removeItem(id);
  };

  const updateCartItemQuantity = async (id: string, quantity: number) => {
    const updatedCartItem = await swelljs.cart.updateItem(id, { quantity });
  };

  const getCart = async () => {
    setIsCartLoading(true);
    const cartDataRaw: Cart | null = await swelljs.cart.get();
    const cartData = cartDataRaw ?? undefined;
    const cartItems: TCartItem[] | [] = cartData?.items
      ? await Promise.all(
          cartData.items.map(async (item): Promise<TCartItem> => {
            return {
              cartItemId: item.id!,
              // @ts-ignore
              productId: item.productId,
              name: item.product!.name!,
              slug: item.product!.slug!,
              maxQuantity: item.product!.stockLevel!,
              price: item.price!,
              orderedQuantity: item.quantity!,
              // @ts-ignore
              category: item.product!.attributes!.productCategory!,
              shortname: item.product!.content!.shortName as string,
              thumbnail: item.product!.images![0].file!.url!,
            };
          })
        )
      : [];
    const checkoutUrl = cartDataRaw?.checkoutUrl ?? undefined;
    const grandTotal = cartData?.grandTotal ?? 0;

    setCart({ cartItems, checkoutUrl, grandTotal });
    setIsCartLoading(false);
  };

  useEffect(() => {
    getCart();
  }, []);

  return {
    cart,
    getCart,
    addItemToCart,
    removeItemFromCart,
    updateCartItemQuantity,
    isCartLoading,
    setIsCartLoading,
  };
};
