import { useRef, useState, useEffect } from 'react'
import reactLogo from '../assets/react.svg'
import { useFishStore } from '../storage'

interface itemProps{
    name?: any,
    price?: any,
    img?: any
}

let cart: any = []

export default function Card(itemProps: itemProps = {name: "", price: 0}) {
    let [targetAmount, setTargetAmount] = useState()
    const inputRef = useRef<any>(null)
    
    function handleChange() {
        if (itemProps['name'] != undefined && itemProps['price'] != undefined && itemProps['price'] != ''){
            cart.push({name: itemProps["name"], price: itemProps['price'], total: inputRef.current?.value})
            setTargetAmount(cart)
        }
    }
    
    // test local stroage
    let item = {name: "Test", price:30}
      
    console.log(targetAmount)

    //add item
    const addAFish=useFishStore((state)=>state.addAFish)
    
    //render test
    const fishes=useFishStore((state)=>state.fishes)
    console.log(fishes)
    
    return (
        <div className="max-w-sm rounded shadow-lg">
            <img className="w-full" src={itemProps["img"]} />
            <div className='flex flex-col justify-center'>
                <div className="px-6 py-4">
                    <div className="mb-2 text-xl font-bold">{itemProps['name']}</div>
                    <p className="text-gray-700 t">
                        Price: {itemProps['price']}
                    </p>
                </div>
                <div className="px-6 pt-4 pb-2">
                    <input name={itemProps['name']} ref={inputRef} type="text" id="small-input" className="block p-2 text-gray-900 border border-gray-300 rounded-lg w-w bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                </div>
                <div>
                    <button type='submit' onClick={()=>addAFish(item)}>Add to cart</button>
                </div>
            </div>
        </div>
    )
}
