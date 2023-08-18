import React, { useState, useEffect } from "react";
import SidebarFilter from "../components/SidebarFilter";
import Cart from "../components/Cart";
import { useSelector, useDispatch } from "react-redux";
import * as itemActions from "../store/_redux/items/action";
import * as CardSlice from '../store/_redux/card/slice';
import { useNavigate } from "react-router-dom";
function HomePage({ value }) {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.items.items);
  const cardSlice = CardSlice.Slice;
  const navigate = useNavigate();

  const itemsPerPage = 12;
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(products.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  const productDetail = (product) => {
    // /productDetail?id=:id
    navigate(`/productDetail/${product.id}`, { state: { product: product } });
  };

  const [sort, setSort] = useState("newToOld");
  const sortedProducts = products
    .filter((obj) => obj.name.toLowerCase().includes(value.toLowerCase()))
    .sort((a, b) => {
      if (sort === "newToOld") {
        return b.id - a.id; // Yeniden eskiye sıralama
      } else if (sort === "oldToNew") {
        return a.id - b.id; // Eskiden yeniye sıralama
      } else if (sort === "highToLow") {
        return b.price - a.price; // Yüksekten düşüğe sıralama
      } else if (sort === "lowToHigh") {
        return a.price - b.price; // Düşükten yükseğe sıralama
      }
      return 0;
    });
  const addToCard =(product)=>{
    dispatch(cardSlice.actions.increase(product));
  }
  useEffect(() => {
    dispatch(itemActions.getProducts());
  }, []);
  return (
    <div className=" bg-primary-bg px-8 md:px-32 py-[26px] gap-[35px] min-h-screen lg:flex">
      <SidebarFilter sort={sort} setSort={setSort} />
      <div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {sortedProducts
            .filter((obj) =>
              obj.name.toLowerCase().includes(value.toLowerCase())
            )
            .slice(startIndex, endIndex)
            .map((product) => (
              <div
                key={product.id}
                className="bg-white flex flex-col gap-[15px] p-[10px] justify-between cursor-pointer"
              >
                <div className="flex flex-col gap-6" 
                onClick={() => {
                  productDetail(product);
                }}>
                  <img  src={product.image} alt="" />
                  <span className="text-sm font-medium text-primary">
                    {product.price}
                  </span>
                </div>
                <div className="flex flex-col gap-6">
                  <p className="text-sm font-medium ">{product.name}</p>
                  <a
                    className="flex bg-primary text-white justify-center py-2 text-[16px] rounded-[4px]"
                    onClick={() => addToCard(product)}
                  >
                    Add to Cart
                  </a>
                </div>
              </div>
            ))}
        </div>
        <div className="pagination flex justify-center text-secondary gap-3 mt-4">
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              className={`pagination-button  ${
                currentPage === index + 1
                  ? "active bg-white text-primary px-2 rounded-[6px]"
                  : ""
              }`}
              onClick={() => handlePageChange(index + 1)}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>
      <Cart />
    </div>
  );
}

export default HomePage;
