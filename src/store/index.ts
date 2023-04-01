import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'
import AsyncStorage from '@react-native-async-storage/async-storage'
import type { UserSlice } from './user'
import createUserSlice from './user'

type Store = UserSlice
const useMainStore = create<Store>()(
  persist(
    (set, _get) => ({
      ...createUserSlice(set),
    }),
    {
      name: 'main-storage',
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
)

export { useMainStore }
