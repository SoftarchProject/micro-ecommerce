import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from '../components/Navbar'
import Card from '../components/Card'
import gardenBackground from '../assets/garden-wallpaper.jpg'
import axiosBaseUrl from '../axiosBaseUrl'

function App() {
  const [count, setCount] = useState(0)
  const [data, setData] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        let { data } = await axiosBaseUrl.axiosItemsInstance.get(`/api/Items`)
        setData(data)
        console.log(data)
      } catch (error) {
        console.error(error)
      }
    }
    fetchData();
  }, [])
  
  const typeBook = [{type: "Action"}, {type: "Fantasy"}, {type: "Horror"}]

  return (
    <div className="flex max-h-screen max-w-screen">
      <div>
        {/* Navbar */}
        <Navbar />
        {/* Image background */}
        <img className='object-cover w-full aspect-video md:aspect-[13/3]' src={gardenBackground} ></img>

        {/* For loop Selling section */}
        <div className="container mx-auto text-2xl font-bold text-blue-600 md:text-4xl">
          {typeBook?.map((item: any, index: number) =>
            <div>
              <h1 className='py-2'> {item?.type} </h1>
              <div className='flex flex-col rounded md:max-w-full md:grid md:grid-cols-3 lg:grid-cols-5 md:gap-4 gap-y-6'>
              {data?.map((itemIn: any, index: number) => itemIn?.type == item?.type &&
                <Card _id={itemIn?._id} name={itemIn?.name} price={itemIn?.price} img={itemIn?.image}></Card>
              )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default App
