import React from "react";

const UpComing = (props) => {
  return (
    <>
      <section className="containers">
        <div className="border-l-[5px] border-solid border-red-700 pl-[10px]">
          <h1 className="text-3xl my-3">Up Coming</h1>
        </div>
        <div className="flex flex-wrap p-8 bg-neutral-800 rounded-box">{props.movies}</div>
      </section>
    </>
  );
};

export default UpComing;
