export type CartItemsType = {
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
    amount: number;
  };

  export type CartItem  = {
    name: string;
    quantity: number;
    id: number;
    image?: string;
    price?: number;
  }
  export type CartItems  = {
    name: string;
    quantity: number;
    id: number;
    image?: string;
    price: number;
  }
  export type CounterState = {
    // value: number;
    // id: number;
    // name: string;
    cart: CartItems[]; 
  }