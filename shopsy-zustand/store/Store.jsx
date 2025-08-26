import { create } from "zustand";

export const useStoreOrders = create((set) => ({
  orders: [],
  addOrders: (order) => {
    set((state) => ({ orders: [...state.orders, order] }));
  },
}));

export const useTotalPrice = create((set) => ({
  totalPrice: 0,
  incrementPrice: (price) => {
    set((state) => ({ totalPrice: state.totalPrice + price }));
  },
}));
