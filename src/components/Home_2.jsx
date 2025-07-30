import React from 'react'
import '../styles/Home_2.css'

function Home_2() {
  return (
    <>
    <nav className="navbar">
      <img src="Public/Tickitz 1.png" />
      <div className="button">
        <button className="signin"><a href="#">Signin</a></button>
        <button className="signup"><a href="#">SignUp</a></button>
      </div>
      <div className="menu">
        <a className="link-menu" href="#">Home</a>
        <a className="link-menu" href="#">Movie</a>
        <a className="link-menu" href="/code/order_page.html">Buy Ticket</a>
      </div>
    </nav>
    <header>
      <div>
        <img src="Public/image 1.png" alt="" />
        <p>LIST MOVIE OF THE WEEK</p>
        <h1>
          Experience the Magic of<br />
          Cinema: Book Your Tickets<br />
          Today
        </h1>
        <div className="oval">
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </header>
    <main>
      <section>
        <div className="search">
          <p>Cari Event</p>
          <p>Filter</p>
          <div>
            <img src="Public/Search.png" alt="" />
            <input type="text" placeholder="New Born Expert" />
          </div>
          <div className="filter">
            <div>
              <button>Thriller</button>
              <button>Horror</button>
              <button>Romantic</button>
              <button>Adventure</button>
              <button>Sci-Fi</button>
            </div>
          </div>
        </div>
      </section>
      <section className="content3">
        <section className="three_image">
        </section>
      </section>

      <section>
        <div className="button_options">
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button>4</button>
          <button>=</button>
        </div>
      </section>

      <section className="content5">
        <section>
          <h1>Subscribe to our newsletter</h1>
          <input type="text" placeholder="First Name" />
          <input type="email" placeholder="Email Address" />
          <button>Subcribe Now</button>
          <div className="oval"></div>
        </section>
      </section>

  
    </main>
      <footer>
        <section className="left">
          <img src="Public/Tickitz 1.png" alt="" />
          <p>
            Stop waiting in line. Buy tickets<br />
            conveniently, watch movies quietly.
          </p>
        </section>
        <section className="left2">
          <h1>Explore</h1>
          <p>Cinemas</p>
          <p>My ticket</p>
          <p>Cinemas</p>
        </section>
        <section className="left3">
          <h1>Our Sponsor</h1>
          <img src="Public/ebv.id 2.png" alt="" />
          <img src="Public/CineOne21 2.png" alt="" />
          <img src="Public/hiflix 2.png" alt="" />
        </section>
        <section className="left4">
          <h1>Follow us</h1>
          <article>
            <img src="Public/eva_facebook-outline.png" alt="" />
            <p>Tickitz Cinema id</p>
          </article>
          <article>
            <img src="Public/bx_bxl-instagram.png" alt="" />
            <p>tickitz.id</p>
          </article>
          <article>
            <img src="Public/eva_twitter-outline.png" alt="" />
            <p>tickitzid</p>
          </article>
          <article>
            <img src="Public/feather_youtube.png" alt="" />
            <p>tickitzid</p>
          </article>
        </section>
      </footer>
      <article className="copyright">
        <p>© 2020 Tickitz. All Rights Reserved.</p>
      </article></>
  )
}

export default Home_2