import { PropTypes as TCartItem } from "@/components/Cart/CartItem/CartItem";
import { Cart } from "swell-js";
import useSWR from "swr";
import { swelljs } from "./init/client";

export const useCart = () => {
  const getCartData = async () => {
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

    return { cartItems, checkoutUrl, grandTotal };
  };

  const addItemToCart = async (product_id: string, quantity: number) => {
    const addedCartItem = await swelljs.cart.addItem({ product_id, quantity });
  };

  const removeItemFromCart = async (id: string) => {
    await swelljs.cart.removeItem(id);
  };

  const updateCartItemQuantity = async (id: string, quantity: number) => {
    const updatedCartItem = await swelljs.cart.updateItem(id, { quantity });
  };

  const emptyCart = async () => {
    await swelljs.cart.setItems([]);
  };

  const { data: cart, isLoading, isValidating } = useSWR("cart", getCartData);

  return {
    cart: {
      cartItems: cart?.cartItems ?? [],
      checkoutUrl: cart?.checkoutUrl ?? undefined,
      grandTotal: cart?.grandTotal ?? 0
    },
    isLoading,
    isValidating,
    emptyCart,
    addItemToCart,
    removeItemFromCart,
    updateCartItemQuantity,
  };
};
