import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from '../components/Navbar'

function History() {
  const [count, setCount] = useState(0)

  return (
    <div className="flex justify-center min-h-screen">
      {/* Navbar */}
      <Navbar />
      <div className="flex flex-col w-full mt-20">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <table className="min-w-full text-sm font-light text-left">
                <thead className="font-medium text-white border-b dark:border-neutral-500 bg-neutral-800">
                  <tr>
                    <th scope="col" className="px-6 py-4">#</th>
                    <th scope="col" className="px-6 py-4">Items</th>
                    <th scope="col" className="px-6 py-4">Price</th>
                    <th scope="col" className="px-6 py-4">Total Price</th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    className="transition duration-300 ease-in-out border-b hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600">
                    <td className="px-6 py-4 font-medium whitespace-nowrap">1</td>
                    <td className="px-6 py-4 whitespace-nowrap">Dec Tree</td>
                    <td className="px-6 py-4 whitespace-nowrap">232</td>
                    <td className="px-6 py-4 whitespace-nowrap">2</td>
                  </tr>
                  <tr
                    className="transition duration-300 ease-in-out border-b hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600">
                    <td className="px-6 py-4 font-medium whitespace-nowrap">2</td>
                    <td className="px-6 py-4 whitespace-nowrap">Death Tree</td>
                    <td className="px-6 py-4 whitespace-nowrap">125215</td>
                    <td className="px-6 py-4 whitespace-nowrap">1</td>
                  </tr>
                  <tr
                    className="transition duration-300 ease-in-out border-b hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600">
                    <td className="px-6 py-4 font-medium whitespace-nowrap">3</td>
                    <td className="px-6 py-4 whitespace-nowrap">Desert Tree</td>
                    <td className="px-6 py-4 whitespace-nowrap">1234</td>
                    <td className="px-6 py-4 whitespace-nowrap">2</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default History
