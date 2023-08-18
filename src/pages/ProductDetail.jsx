import React from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

const ProductDetail = () => {
  const location = useLocation();
  const products = useSelector(state => state.items.items)
  const getItem = ()=> {
    const id = window.location.pathname.split("/").slice(-1);
    return products.filter((obj)=>obj.id==id)[0]
  }

  const item = location?.state?.product!=null?location.state.product:getItem();
  debugger
  return (
    <div className=" bg-primary-bg px-32 py-[26px] h-screen">
      <div className="bg-white grid grid-cols-2 p-2 gap-[30px]">
        <img className="w-full" src={item?.image} alt="" />
        <div className="flex flex-col justify-between">
          <div className="flex flex-col gap-5">
          <h1 className="text-2xl">{item?.name}</h1>
          <span className="text-primary text-2xl">{item?.price}</span>
          </div>
          <div className="flex flex-col gap-5">
          <a className="flex bg-primary text-white justify-center py-2 text-[16px] rounded-[4px]"
            href="/">
            Add to Cart
          </a>
          <p>{item?.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
