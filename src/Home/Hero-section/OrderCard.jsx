import React from "react";
import Maps from "../../assets/Maps.svg";

const OrderCard = () => {
  return (
   <div className="bg-white rounded-2xl w-full px-10 py-8 flex flex-col gap-8">

      {/* Top Row */}
      <div className="flex justify-between items-center w-full pb-6 px-4">
        <small className="font-[Inter] text-base font-medium">
          Current Delivery
        </small>

       <small style={{paddingLeft: '40px', paddingRight: '40px', paddingTop: '16px', paddingBottom: '16px'}} className="bg-[#00873A] text-white rounded-full font-[Inter] text-sm font-medium">
  IN TRANSIT
</small>
      </div>

    <div className="flex justify-between items-start w-full pt-6 px-4 gap-6">
      <div className="flex flex-col gap-5">
        <h2 className="font-[Inter] text-base font-semibold">
          ORDER-ID
        </h2>

        <p>#EF-98234-PKH</p>

        <p>
          Status: <span className="text-green-600">On the way</span>
        </p>
      </div>
      <img src={Maps} alt="Map" className="w-1/2 h-auto mt-5 rounded-lg shrink-0" />
    </div>

    </div>
  );
};

export default OrderCard;