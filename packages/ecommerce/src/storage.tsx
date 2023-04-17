import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

interface storageInterface {
    fishes: {
        items: {
            [keyId: string]: {
                name: string
                price: number
                count: number
            }
        }
    },

    addAFish: (itemId: string, name: string, price: number, quality: number) => void
    clearFish: () => void
}

interface itemInterface {
    itemId: string
}

export const useFishStore = create<storageInterface>()(
    persist(
        (set) => ({
            fishes: { items: {} },
            addAFish: (itemId: string, name: string, price: number, quality: number) => set((state) => ({
                fishes: {
                    items: { ...state.fishes.items,
                         [itemId]: {name, price, count:quality} }
                }
            })),
            clearFish: ()=>{
                console.log("Test")
                set((state) => ({
                    fishes: {
                        items: {}
                    }
                }))
            }
        }),
        {
            name: 'items-storage', // unique name
            storage: createJSONStorage(() => localStorage), // (optional) by default, 'localStorage' is used
        }
    )
)

