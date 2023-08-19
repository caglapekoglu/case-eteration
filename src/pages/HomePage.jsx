import React, { useState, useEffect } from "react";
import SidebarFilter from "../components/SidebarFilter";
import Cart from "../components/Cart/Cart";
import { useSelector, useDispatch } from "react-redux";
import * as itemActions from "../store/_redux/items/action";
import * as CardSlice from '../store/_redux/card/slice';
import { useNavigate } from "react-router-dom";
import Product from "../components/Product/Product";
import { useAutoAnimate } from '@formkit/auto-animate/react'
function HomePage({ value }) {
  const [animationParent] = useAutoAnimate()
  const dispatch = useDispatch();
  const products = useSelector((state) => state.items.items);
  const cardSlice = CardSlice.Slice;
  const navigate = useNavigate();
  const itemsPerPage = 12;
  const [currentPage, setCurrentPage] = useState(1);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const [items, setItems] = useState(products);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  const productDetail = (product) => {
    // /productDetail?id=:id
    navigate(`/productDetail/${product.id}`, { state: { product: product } });
  };

  const [sort, setSort] = useState("oldToNew");
  const sortedProducts = items
    .filter((obj) => obj.name.toLowerCase().includes(value.toLowerCase()))
    .sort((a, b) => {
      if (sort === "newToOld") {
        return new Date(b.createdAt) - new Date(a.createdAt); // Yeniden eskiye sıralama
      } else if (sort === "oldToNew") {
        return new Date(a.createdAt) - new Date(b.createdAt); // Eskiden yeniye sıralama
      } else if (sort === "highToLow") {
        return b.price - a.price; // Yüksekten düşüğe sıralama
      } else if (sort === "lowToHigh") {
        return a.price - b.price; // Düşükten yükseğe sıralama
      }
      return 0;
    });
  const totalPages = Math.ceil(sortedProducts.length / itemsPerPage);

  const addToCard = (product) => {
    dispatch(cardSlice.actions.increase(product));
  }
  useEffect(() => {
    dispatch(itemActions.getProducts());
  }, []);
  return (
    <div className=" bg-primary-bg px-8 md:px-32 py-[26px] gap-[35px] min-h-screen lg:flex">
      <SidebarFilter
        products={products}
        items={items}
        setItems={setItems}
        sort={sort}
        setSort={setSort} />
      <div>
        <div ref={animationParent} className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {sortedProducts
            .filter((obj) =>
              obj.name.toLowerCase().includes(value.toLowerCase())
            )
            .slice(startIndex, endIndex)
            .map((product, i) => (
              <Product key={product.id} product={product} addToCard={addToCard} productDetail={productDetail} />
            ))}
        </div>
        <div className="pagination flex justify-center text-secondary gap-3 mt-4">
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              className={`pagination-button  ${currentPage === index + 1
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
