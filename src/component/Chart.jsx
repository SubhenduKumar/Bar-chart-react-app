import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import { NavLink } from "react-router-dom";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
let options = {
  indexAxis: "x",
  elements: {
    bar: {
      borderWidth: 2,
    },
  },
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Vertical Bar Chart",
    },
  },
};

const Chart = () => {
  const [data, setData] = useState({
    datasets: [],
  });
  const [refersh, setRefresh] = useState(true);
  useEffect(() => {
    const randomColor = () => {
      return Math.floor(Math.random() * 16777215).toString(16);
    };
    const fetchData = async () => {
      const url =
        "https://www.randomnumberapi.com/api/v1.0/random?min=100&max=1000&count=5";
      await fetch(url)
        .then((data) => {
          const res = data.json();
          return res;
        })
        .then((res) => {
          console.log(res);
          setData({
            labels: [
              "Instagram",
              "Facebook",
              "Twitter",
              "Whatsapp",
              "Telegram",
            ],
            datasets: [
              {
                label: "Male Using Social Media in 1 sec",
                data: res,
                borderColor: [
                  `#${randomColor()}`,
                  `#${randomColor()}`,
                  `#${randomColor()}`,
                  `#${randomColor()}`,
                  `#${randomColor()}`,
                ],
                backgroundColor: [
                  `#${randomColor()}`,
                  `#${randomColor()}`,
                  `#${randomColor()}`,
                  `#${randomColor()}`,
                  `#${randomColor()}`,
                ],
              },
              {
                label: "Female Using Social Media in 1 sec",
                data: res.map((e) => {
                  return (e = Math.abs(Math.floor(Math.random() * 1000)));
                }),
                borderColor: [
                  `#${randomColor()}`,
                  `#${randomColor()}`,
                  `#${randomColor()}`,
                  `#${randomColor()}`,
                  `#${randomColor()}`,
                ],
                backgroundColor: [
                  `#${randomColor()}`,
                  `#${randomColor()}`,
                  `#${randomColor()}`,
                  `#${randomColor()}`,
                  `#${randomColor()}`,
                ],
              },
            ],
          });
        })
        .catch((e) => {
          console.log("error", e);
        });
    };
    fetchData();
  }, [refersh]);

  function refresh() {
    console.log("Data Refreshed");
    setRefresh(!refersh);
  }
  return (
    <div onClick={refresh} className="chart">
      <Bar data={data} options={options} />
      <br />
      <NavLink to="/" className="chart__button-last">Go back</NavLink>
    </div>
  );
};
export default Chart;
