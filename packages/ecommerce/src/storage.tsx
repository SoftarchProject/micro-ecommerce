import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

interface storageInterface{
    fishes: {items: itemInterface[]},

    addAFish:(items:itemInterface
        )=> void
}

interface itemInterface{
        name: string, 
        price: number
}

export const useFishStore = create<storageInterface>()(
    persist(
        (set) => ({
            fishes: {items:[]},
            addAFish: (item:itemInterface) => set((state)=>({ fishes: {
                items:[...state.fishes.items,item]
            }})),
        }),
        {
            name: 'items-storage', // unique name
            storage: createJSONStorage(() => localStorage), // (optional) by default, 'localStorage' is used
        }
    )
)

