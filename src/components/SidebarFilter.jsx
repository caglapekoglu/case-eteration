import React from "react";

const SidebarFilter = ({sort,setSort}) => {
  const handleSortChange = (event) => {
    setSort(event.target.value);
  };
  return (
    <div className="flex lg:flex-col gap-5 overflow-scroll lg:overflow-visible mb-10">
      <div>
        <span className="text-secondary text-[12px]">Sort by</span>
        <div className="bg-white w-[220px] flex flex-col gap-[15px] p-4 text-sm">
          <label className="flex gap-2">
          <input 
             type="radio"
             value="oldToNew"
             checked={sort === "oldToNew"}
             onChange={handleSortChange} />
            <p>Old to new</p>
          </label>
          <label className="flex gap-2">
            <input 
              type="radio"
              value="newToOld"
              checked={sort=== "newToOld"}
              onChange={handleSortChange} />
            <p>New to old</p>
          </label>
          <label className="flex gap-2">
            <input 
             type="radio"
             value="highToLow"
             checked={sort === "highToLow"}
             onChange={handleSortChange} />
            <p>Price high to low</p>
          </label>
          <label className="flex gap-2">
            
          <input 
             type="radio"
             value="lowToHigh"
             checked={sort === "lowToHigh"}
             onChange={handleSortChange} />
            <p>Price low to high</p>
          </label>
        </div>
      </div>
      <div>
        <span className="text-secondary text-[12px]">Brands</span>
        <div className="bg-white w-[220px] flex flex-col gap-[15px] p-4 text-sm">
          <div className="flex ">
            <input type="text" placeholder="Search" className="bg-primary-bg p-2"/>
          </div>
          <div className="flex gap-2">
            <input type="checkbox" />
            <p>Apple</p>
          </div>
          <div className="flex gap-2">
            <input type="checkbox" />
            <p>Samsung</p>
          </div>
          <div className="flex gap-2">
            <input type="checkbox" />
            <p>Huawei</p>
          </div>
        </div>
      </div>
      <div>
        <span className="text-secondary text-[12px]">Model</span>
        <div className="bg-white w-[220px] flex flex-col gap-[15px] p-4 text-sm">
          <div className="flex ">
            <input type="text" placeholder="Search" className="bg-primary-bg p-2"/>
          </div>
          <div className="flex gap-2">
            <input type="checkbox" />
            <p>11</p>
          </div>
          <div className="flex gap-2">
            <input type="checkbox" />
            <p>12 Pro</p>
          </div>
          <div className="flex gap-2">
            <input type="checkbox" />
            <p>13 Pro Max</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SidebarFilter;
