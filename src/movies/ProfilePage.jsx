import React, { useState } from "react";
import Profile from "../profilpage/Profile";
import SettingProfile from "../profilpage/SettingProfile";
import DetailProfil from "../profilpage/DetailProfil";
import Account from "../profilpage/Account";
import OrderHistory from "../profilpage/OrderHistory";

function ProfilePage() {
  const [Choose, SetChoose] = useState("settings");
  return (
    <>
      <div className="bg-[#dedede] min-h-screen w-full">
        <main className="mt-17 mr-28 ml-28 max-lg:mx-18.5">
          <div id="content" className="flex gap-8 max-lg:block">
            <Profile />
            <section>
              <SettingProfile Choose={Choose} SetChoose={SetChoose} />
              {Choose === "settings" && <DetailProfil />}
              {Choose === "order" && <OrderHistory />}
            </section>
          </div>
        </main>
      </div>
    </>
  );
}
export default ProfilePage;
