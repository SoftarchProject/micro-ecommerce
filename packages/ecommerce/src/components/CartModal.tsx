import { useEffect, useState } from "react";
import { useFishStore } from "../storage";
import axiosBaseUrl from "../axiosBaseUrl";
import { useNavigate } from "react-router-dom";

export default function CartModal({ handleClose }: { handleClose: () => void }) {
  
  const fishes = useFishStore((state)=>state.fishes)
  const clearFish = useFishStore((state)=>state.clearFish)

  const navgate = useNavigate()
  
  async function postHistoryItem(){
    await axiosBaseUrl.axiosHistoryInstance.post("/api/history",
      fishes.items
    ).then(function (response) {
      console.log(response);
      clearFish()
      navgate("/history")
    })
    .catch(function (error) {
      console.log(error);
    });
  }
  console.log(Object.values(fishes.items))
  return (
    <>
      <div
        className="fixed w-full h-full max-h-screen overflow-auto"
        onClick={handleClose}
      />
      
      <div onClick={handleClose} className="fixed inset-0 flex justify-center w-full bg-[#100e0e3f] overflow-auto flex-col lg:h-screen md:flex-row md:grid md:grid-cols-2 lg:grid-cols-4 gap-y-16 z-50">
        {Object.values(fishes.items)?.length == 0 && <div className="self-center col-span-2 col-start-2 p-4 mx-auto text-5xl font-bold bg-white rounded-md aspect-square"> No avaliable</div>}
        {Object.values(fishes.items)?.map((item: any, index: number) =>
          <div className="flex px-4 overflow-auto lg:m-auto" onClick={(e) => { e.stopPropagation(); }}>
            <div className="relative max-w-lg p-4 mx-auto bg-white rounded-md shadow-lg">
              <div className="mt-3 sm:flex">
                <div className="flex flex-col rounded-lg shadow-lg">
                  <img className="rounded-t-xl w-[250px] h-[250px] aspect-square md:w-full" src={item?.img ?? "www.google.com/image.png"}
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
                    <p className="text-base text-gray-dark">
                      {item?.count} quantity
                    </p>
                  </div>

                </div>
              </div>
            </div>
          </div>
        )}
        {Object.values(fishes.items)?.length != 0 &&
        <div>
          <button onClick={postHistoryItem} className="fixed inset-x-0 bottom-0 self-center justify-center p-2 text-white rounded bg-lime-950" type="button">Purchase</button>
        </div>
        }
      </div>

    </>
  );
}