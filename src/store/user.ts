import type { StoreApi } from 'zustand'

export interface IUser {
  name: string
  email: string
}

export interface UserSlice {
  userData: IUser | null
  setUserData: (user: IUser) => void
  resetUserData: () => void
}

const createUserSlice = (set: StoreApi<UserSlice>['setState']) => ({
  userData: null,
  setUserData: (user: IUser) => set({ userData: user }),
  resetUserData: () => set({ userData: null }),
})

export default createUserSlice
