import { create } from 'zustand'
import mockData from '../../public/mock-data.json'

export const useAuthStore = create((set) => ({
  user: null,
  coupons: mockData,
  login: (email) =>
    set({
      user: { id: `user${Math.random()}`, email },
    }),
  logout: () => set({ user: null }),
  addCoupon: (coupon) =>
    set((state) => ({
      coupons: [...state.coupons, { ...coupon, id: `${state.coupons.length + 1}` }],
    })),
  deleteCoupon: (id) =>
    set((state) => ({
      coupons: state.coupons.filter((coupon) => coupon.id !== id),
    })),
}))