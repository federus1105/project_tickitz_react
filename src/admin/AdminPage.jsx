import React, { useEffect, useRef, useState } from "react";
import { createSalesChart } from "../utils/admin-page";

function AdminPage() {
  const grafikRef = useRef(null);
  const grafikTicketRef = useRef(null);
  const chart1Ref = useRef(null);
  const chart2Ref = useRef(null);

  const datadumy = {
    Avengers: [100, 300, 400, 200, 700, 800],
    Batman: [400, 230, 500, 300, 600, 100],
    Superman: [300, 500, 200, 700, 800, 200],
  };

  const datadummy2 = {
    CaptainAmerika: [100, 700, 800, 100, 500, 300],
    Hulk: [400, 230, 500, 300, 400, 800],
    Thor: [300, 800, 100, 300, 100, 300],
  };

  const [selectedFilm, setSelectedFilm] = useState("Avengers");
  const [selectedTicket, setSelectedTicket] = useState("CaptainAmerika");
  const [heading1, setHeading1] = useState("Avengers: End Game");
  const [heading2, setHeading2] = useState("Captain Amerika");

  useEffect(() => {
    // Render chart pertama kali
    chart1Ref.current = createSalesChart(
      grafikRef.current,
      datadumy["Avengers"]
    );
    chart2Ref.current = createSalesChart(
      grafikTicketRef.current,
      datadummy2["CaptainAmerika"]
    );

    return () => {
      chart1Ref.current.destroy();
      chart2Ref.current.destroy();
    };
  }, []);

  const handleFilterChart1 = () => {
    chart1Ref.current.data.datasets[0].data = datadumy[selectedFilm];
    chart1Ref.current.update();
    setHeading1(selectedFilm);
  };

  const handleFilterChart2 = () => {
    chart2Ref.current.data.datasets[0].data = datadummy2[selectedTicket];
    chart2Ref.current.update();
    setHeading2(selectedTicket);
  };

  return (
    <main className="flex items-center flex-col">
      {/* Sales Chart */}
      <div
        id="sales-chart"
        className="border-1 w-93 h-150 rounded-xl my-15 lg:w-260 lg:h-200"
      >
        <div className="pl-6 pr-6 pt-9 text-xl lg:text-xs">
          <p className="font-bold lg:text-xl">Sales Chart</p>

          {/* Select pertama (aktif) */}
          <select
            id="select-one"
            value={selectedFilm}
            onChange={(e) => setSelectedFilm(e.target.value)}
            className="w-80 h-13 rounded-lg pl-3 bg-slate-100 mt-7 lg:w-49 lg:h-11"
          >
            <option value="Avengers">Avengers</option>
            <option value="Batman">Batman</option>
            <option value="Superman">Superman</option>
          </select>

          {/* Select kedua (dummy) */}
          <select
            id="my-dropdown"
            className="w-80 h-13 rounded-lg pl-3 bg-slate-100 mt-7 lg:w-49 lg:ml-1 lg:h-11"
          >
            <option value="option1">Option</option>
            <option value="option2">Option 2 Text</option>
            <option value="option3">Option 3 Text</option>
          </select>

          {/* Tombol filter */}
          <button
            id="filter"
            onClick={handleFilterChart1}
            className="w-80 bg-blue-700 mt-7 rounded-md h-12 text-white lg:w-35 ml-3 lg:h-10 lg:cursor-pointer"
          >
            Filter
          </button>

          {/* Heading */}
          <p id="heading" className="mt-10 mb-6 lg:text-xl">
            {heading1}
          </p>

          <canvas id="grafik" ref={grafikRef}></canvas>
        </div>
      </div>

      {/* Ticket Sales */}
      <div
        id="ticket-sales"
        className="border-1 w-93 h-150 rounded-xl mb-15 lg:w-260 lg:h-200"
      >
        <div className="pl-6 pr-6 pt-9 text-xl lg:text-xs">
          <p className="font-bold lg:text-xl">Ticket Sales</p>

          {/* Select pertama (aktif) */}
          <select
            id="select2"
            value={selectedTicket}
            onChange={(e) => setSelectedTicket(e.target.value)}
            className="w-80 h-13 rounded-lg ml-3 bg-slate-100 mt-7 lg:w-49 lg:h-11"
          >
            <option value="CaptainAmerika">Captain Amerika</option>
            <option value="Hulk">Hulk</option>
            <option value="Thor">Thor</option>
          </select>

          {/* Select kedua (dummy) */}
          <select
            id="my-dropdown"
            className="w-80 h-13 rounded-lg ml-3 bg-slate-100 mt-7 lg:w-49 lg:h-11"
          >
            <option value="option1">Location</option>
            <option value="option2">Option 2 Text</option>
            <option value="option3">Option 3 Text</option>
          </select>

          {/* Tombol filter */}
          <button
            id="filter2"
            onClick={handleFilterChart2}
            className="w-80 bg-blue-700 mt-7 rounded-md h-12 text-white lg:w-35 ml-3 lg:h-10"
          >
            Filter
          </button>

          {/* Heading */}
          <p id="heading2" className="mt-10 mb-6 lg:text-xl">
            {heading2}
          </p>

          <canvas id="grafik-ticket" ref={grafikTicketRef}></canvas>
        </div>
      </div>
    </main>
  );
}

export default AdminPage;
