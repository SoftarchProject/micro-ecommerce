import { useState } from "react";

interface itemInterface {
  items: {
    item: object[]
  }
}

export default function CartModal({ handleClose, itemData }: { handleClose: () => void, itemData: itemInterface }) {
  function clearLocalStorage(){
    
  }
  
  console.log("item: ", itemData["items"])
  return (
    <>
      <div
        className="fixed w-full h-full max-h-screen overflow-auto"
        onClick={handleClose}
      />
      
      <div onClick={handleClose} className="fixed inset-0 flex justify-center w-full bg-[#100e0e3f] overflow-auto flex-col lg:h-screen md:flex-row md:grid md:grid-cols-2 lg:grid-cols-4 gap-y-16 z-50">
        {itemData["items"]?.length == 0 && <div className="relative max-w-lg p-4 mx-auto bg-white rounded-md shadow-lg"> No avaliable</div>}
        {itemData["items"]?.map((item: any, index: number) =>
          <div className="flex px-4 overflow-auto lg:m-auto" onClick={(e) => { e.stopPropagation(); }}>
            <div className="relative max-w-lg p-4 mx-auto bg-white rounded-md shadow-lg">
              <div className="mt-3 sm:flex">
                <div className="flex flex-col rounded-lg shadow-lg">
                  <img className="rounded-t-xl w-[250px] h-[250px] aspect-square md:w-full" src={item?.largeImage ?? "www.google.com/image.png"}
                    onError={(e: any) => {
                      console.log(e)

                      e.target.onerror = null;
                      e.target.src = 'http://placekitten.com/g/200/300';
                    }} />
                  <div className="px-6 py-4">
                    <div className="mb-2 text-xl font-bold">{item?.name}</div>
                    <p className="text-base text-gray-dark">
                      {item?.price} price
                    </p>
                  </div>

                </div>
              </div>
            </div>
          </div>
        )}
        {itemData["items"]?.length != 0 &&
        <div>
          <a href="/history">
            <button className="fixed inset-x-0 bottom-0 self-center justify-center p-2 text-white rounded bg-lime-950" type="button">Purchase</button>
          </a>
        </div>
        }
      </div>

    </>
  );
}