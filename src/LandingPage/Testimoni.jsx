import React from "react";

function Testimoni() {
  return (
    <>
      <section className="mt-20">
        <section>
          <h4 className="text-blue-700 pb-3 font-bold max-lg:text-center">
            WHY CHOOSE US
          </h4>
          <h1 className="text-3xl pb-5 max-lg:text-center max-lg:text-2xl">
            Unleashing the Ultimate Movie
            <br />
            Experience
          </h1>
        </section>
        <section className="text-justify flex gap-20 max-lg:flex max-lg:flex-wrap max-lg:gap-5">
          <article className="">
            <img src="/Group 233.png" />
            <h1 className="py-3.5 font-bold max-lg:text-sm">Guaranteed</h1>
            <p className="text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim nec,
              proin faucibus nibh et sagittis a. Lacinia purus ac amet.
            </p>
          </article>
          <article>
            <img src="/Group 235.png" />
            <h1 className="py-3.5 font-bold max-lg:text-sm">Affordable</h1>
            <p className="text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim nec,
              proin faucibus nibh et sagittis a. Lacinia purus ac amet.
            </p>
          </article>
          <article>
            <img src="/Group 235.png" />
            <h1 className="py-3.5 font-bold max-lg:text-sm">
              24/7 Customer Service
            </h1>
            <p className="text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim nec,
              proin faucibus nibh et sagittis a. Lacinia purus ac amet.
            </p>
          </article>
        </section>
      </section>
    </>
  );
}

export default Testimoni;
