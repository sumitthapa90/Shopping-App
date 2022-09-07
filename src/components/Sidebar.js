import React from "react";

const Sidebar = ({ products }) => {
  let size = products.products.reduce((acc, cv) => {
    acc = acc.concat(cv.availableSizes);
    return acc;
  }, []);

  console.log(size);

  let uniqueSize = [new Set(size)];
  console.log(uniqueSize);

  return (
    <>
      <aside className="sidebar">
        <div className="sidebar-box">
          {uniqueSize.map((size) => {
            return <span className="size active">{size}</span>;
          })}
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
