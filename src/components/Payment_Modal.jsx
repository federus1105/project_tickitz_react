import React from "react";

function Payment_Modal() {
  return (
    <>
      <nav
        id="navbar"
        className="sticky top-0 h-25 bg-[rgba(255, 255, 255, 0.8)] z-10 backdrop-filter backdrop-blur-xl"
      >
        <img src="/src/public/Tickitz 1.png" className="absolute pl-26 pt-5" />
        <div id="menu" className="flex flex-row justify-center gap-16 pt-10">
          <a className="link-menu" href="#">
            Home
          </a>
          <a className="link-menu" href="#">
            Movie
          </a>
          <a className="link-menu" href="/code/order_page.html">
            Buy Ticket
          </a>
        </div>
        <div id="button" className="flex gap-8 absolute right-26 top-10 ">
          <button className="signin">
            <a href="#">Signin</a>
          </button>
          <button className="signup">
            <a href="#">SignUp</a>
          </button>
        </div>
      </nav>
      <main className="ml-28 mr-28 bg-gray-200">
        <div id="back" className="bg-gray-300"></div>
        <div
          id="container"
          className="rounded-xl w-80 p-5 flex flex-col justify-center "
        >
          <header id="card-step" className="flex justify-around items-center pr-5 pb-5">
            <div id="circle" className="relative text-center">
              <div id="step done" className="bg-green-500">
                <img src="/src/public/Vector.png" alt="" />
              </div>
              <div className="text">Dates And Time</div>
            </div>
            <div className="line"></div>
            <div className="circle">
              <div className="step done">
                <img src="/src/public/Vector.png" alt="" />
              </div>
              <div className="text">Seat</div>
            </div>
            <div className="line"></div>
            <div className="circle">
              <div className="step aktif">3</div>
              <div className="text">Payment</div>
            </div>
          </header>
        </div>

        <section>
          <div id="container-payment" className="bg-white border-1 rounded-md mb-20">
            <div id="payment-fill" className="m-11">
              <div>
                <h1 className="pb-5">Payment Info</h1>
              </div>
              <div id="grid" className="grid grid-rows-5 gap-5">
                <div>
                  <h4 className="text-gray-400 pb-2.5">DATE & TIME</h4>
                  <p>Tuesday, 07 July 2020 at 02:00pm</p>
                  <hr />
                </div>
                <div>
                  <h4 className="text-gray-400 pb-2.5">MOVIE TITLE</h4>
                  <p>Spider-Man: Homecoming</p>
                  <hr />
                </div>
                <div>
                  <section>
                    <div id="payment-info" className="z-2 absolute bg-gray-200 w-200 h-100 rounded-lg ml-43">
                      <div id="fill-payment" className="py-5 px-10">
                        <h3 className="text-center text-2xl mb-10">Payment Info</h3>
                        <div id="fill-data" className="grid grid-cols-2">
                          <div>
                            <p>No. Rekening Virtual</p>
                            <p>Total Payment</p>
                          </div>
                          <div className="ml-2.5">
                            <h3 className="text-lg inline  ">12321328913829724</h3>
                            <span className="border-1 border-blue-600 rounded-sm py-2.5 px-4 text-blue-600 ml-1">Copy</span>
                            <p className="text-blue-600 flex justify-end">$30</p>
                          </div>
                        </div>
                        <div className="descpay">
                          <p>
                            Pay this payment bill before it is due,
                            <span>on June 23, 2023.</span>
                            If the bill has not been paid by the specified time,
                            it will be forfeited
                          </p>
                        </div>
                        <div className="paybtn">
                          <div id="button">
                            <a href="/code/ticket_result.html">Check Payment</a>
                          </div>
                          <div>Pay Later</div>
                        </div>
                      </div>
                    </div>
                  </section>
                  <h4 className="text-gray-400 pb-2.5">CINEMA NAME</h4>
                  <p>CineOne21 Cinema</p>
                  <hr />
                </div>
                <div>
                  <h4 className="text-gray-400 pb-2.5">NUMBER OF TICKETS</h4>
                  <p>3 pieces</p>
                  <hr />
                </div>
                <div>
                  <h4 className="text-gray-400 pb-2.5">TOTAL PAYMENT</h4>
                  <p>$30,00</p>
                  <hr />
                </div>
              </div>
              <div>
                <div className="head_grid2">
                  <h1>Personal Information</h1>
                </div>
                <div className="grid2">
                  <div>
                    <p>Full Name</p>
                    <input
                      type="text"
                      name=""
                      id=""
                      placeholder="Jonas El Rodriguez"
                    />
                  </div>
                  <div>
                    <p>Email</p>
                    <input
                      type="email"
                      name=""
                      id=""
                      placeholder="jonasrodri123@gmail.com"
                    />
                  </div>
                  <div>
                    <p>Phone Number</p>
                    <input
                      type="number"
                      name=""
                      id=""
                      placeholder="+62 | 81445687121"
                    />
                  </div>
                </div>
              </div>
              <div>
                <div className="head_grid3">
                  <h1>Payment Method</h1>
                </div>
                <div className="grid3">
                  <div>
                    <img
                      src="/assets/icon payment/logos_google-pay.svg"
                      alt=""
                    />
                  </div>
                  <div>
                    <img src="/assets/icon payment/logos_visa.svg" alt="" />
                  </div>
                  <div>
                    <img src="/assets/icon payment/gopay.svg" alt="" />
                  </div>
                  <div>
                    <img src="/assets/icon payment/logos_paypal.svg" alt="" />
                  </div>
                </div>
                <div className="grid4">
                  <div>
                    <img src="/assets/icon payment/dana.svg" alt="" />
                  </div>
                  <div>
                    <img src="/assets/icon payment/BCA.svg" alt="" />
                  </div>
                  <div>
                    <img src="/assets/icon payment/bri.svg" alt="" />
                  </div>
                  <div>
                    <img src="/assets/icon payment/gopay.svg" alt="" />
                  </div>
                </div>
              </div>
              <section>
                <div className="buttonplay">
                  <button id="play">Play your order</button>
                </div>
              </section>
            </div>
          </div>
        </section>
        <footer className="grid grid-cols-4 place-items-center">
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
      </main>
      <article className="text-center bg-white pt-10 pb-5">
        <p>© 2020 Tickitz. All Rights Reserved.</p>
      </article>
    </>
  );
}

export default Payment_Modal;
