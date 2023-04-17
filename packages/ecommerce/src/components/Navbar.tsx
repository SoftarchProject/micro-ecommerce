import { useState } from 'react'
import reactLogo from './assets/react.svg'
import treeLogo from '../assets/tree-logo-free-vector.jpg'
import viteLogo from '/vite.svg'
import CartModal from '../components/CartModal'

function Navbar() {
    const [open, setOpen] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const handleClose = () => { setShowModal(false) };
    let item = {name: "Test", price:"30"}
    let listitem = {items: [item, item, item, item, item]}
    // let listitem = {items: []}
    const handleOpen = () => {
        setOpen(!open);
    };

    return (
        <nav className="fixed top-0 left-0 z-20 w-full bg-gray-900 border-b border-gray-200 dark:border-gray-600">
            <div className="flex flex-wrap items-center justify-between max-w-screen-xl p-4 mx-auto">
                <a href="/" className="flex items-center">
                    <img src={treeLogo} className="h-8 mr-3 rounded-[180px]" alt="Flowbite Logo" />
                    <span className="self-center text-2xl font-semibold text-white whitespace-nowrap">Logo</span>
                </a>
                <div className="flex md:order-2">
                    <div className="relative inline-block text-left">
                        <div className='flex items-center mx-4'>
                            {showModal && listitem && 
                            
                            < CartModal handleClose={handleClose} itemData={listitem} />
                            }
                            <button data-modal-target="defaultModal" data-modal-toggle="defaultModal" type="button" className="w-full px-2 py-2 rounded-md hover:bg-gray-500" id="menu-button" aria-expanded="true" aria-haspopup="true">
                                <svg onClick={() => { setShowModal(true); item }} className='h-8 scale-x-[-1] fill-white' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" aria-hidden="true"><path fill-rule="evenodd" d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" /></svg>
                            </button>
                        </div>
                    </div>
                    <div className="relative inline-block my-[5px] text-left">
                        <button onClick={handleOpen} data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
                            <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                        </button>
                        {open ? (
                            <div className="absolute right-0 z-10 w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex={-1}>
                                <div className="py-1" role="none">
                                    {/* <!-- Active: "bg-gray-100 text-gray-900", Not Active: "text-gray-700" --> */}
                                    <a href="/history" className="block px-4 py-2 text-sm text-gray-700" id="menu-button" aria-expanded="true" aria-haspopup="true">History</a>
                                </div>
                            </div>) : null}
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar

