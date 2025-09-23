import React from 'react'
import DetailProfil from "./DetailProfil";
import OrderHistory from "./OrderHistory";

function SettingProfile({ Choose, SetChoose }) {
  return (
    <>
      <div id="setting" className="w-220 h-16 bg-white rounded-lg max-lg:w-155">
        <div className="flex text-[18px] gap-10 py-[19px] px-[50px] max-lg:justify-around">
          <div>
            <button
              className={
                Choose === "settings"
                  ? "font-bold border-b-[2px] border-b-blue-700 transition-all duration-100"
                  : "text-gray-400 border-b-[2px] border-b-transparent transition-all duration-100"
              }
              onClick={() => SetChoose("settings")}
            >
              Account Settings
            </button>
          </div>
          <button
            className={
              Choose === "order"
                ? "font-bold border-b-[2px] border-b-blue-700 transition-all duration-100"
                : "text-gray-400 border-b-[2px] border-b-transparent transition-all duration-100"
            }
            onClick={() => SetChoose("order")}
          >
            Order History
          </button>
        </div>
        <div className="p-4">
          {SetChoose === "settings" && <DetailProfil />}
          {SetChoose === "order" && <OrderHistory />}
        </div>
      </div>
    </>
  );
}

export default SettingProfile;
