import React from "react";

function Footer() {
  return (
    <>
      <div className=" bg-white">
        <footer className="grid grid-cols-4 place-items-center pl-24 pr-27">
          <section className="left">
            <img src="/src/public/Tickitz 1.png" alt="" />
            <p className="text-gray-400">
              Stop waiting in line. Buy tickets
              <br />
              conveniently, watch movies quietly.
            </p>
          </section>
          <section id="left2" className="flex flex-col gap-2.5">
            <h1>Explore</h1>
            <p className="text-gray-400">Cinemas</p>
            <p className="text-gray-400">My ticket</p>
            <p className="text-gray-400">Cinemas</p>
          </section>
          <section className="left3">
            <h1 className="pb-3.5 pt-11">Our Sponsor</h1>
            <img src="/src/public/ebv.id 2.png" alt="" className="h-10 pb-5" />
            <img src="/src/public/CineOne21 2.png" alt="" className="pb-5" />
            <img src="/src/public/hiflix 2.png" alt="" className="pb-5" />
          </section>
          <section className="left4">
            <h1 className="pb-2 pl-1 mt-1">Follow us</h1>
            <article className="flex gap-1">
              <img src="/src/public/eva_facebook-outline.png" alt="" />
              <p className="text-gray-400">Tickitz Cinema id</p>
            </article>
            <article className="flex gap-1.5">
              <img src="/src/public/bx_bxl-instagram.png" alt="" />
              <p className="text-gray-400">tickitz.id</p>
            </article>
            <article className="flex gap-1.5">
              <img src="/src/public/eva_twitter-outline.png" alt="" />
              <p className="text-gray-400">tickitzid</p>
            </article>
            <article className="flex gap-1.5">
              <img src="/src/public/feather_youtube.png" alt="" />
              <p className="text-gray-400 ">tickitzid</p>
            </article>
          </section>
        </footer>
      </div>
      <article className="text-center bg-white pt-10 pb-5">
        <p>© 2020 Tickitz. All Rights Reserved.</p>
      </article>
    </>
  );
}

export default Footer;
