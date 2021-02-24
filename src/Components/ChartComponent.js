import React from "react";
import Chart from "react-apexcharts";

const Diagram = (props) => {
  const chartData = {
    options: {
        chart: {
          id: "Student results",
          background: '#474140',
          foreColor: '#17E8F0',
        },
        dataLabels: {
          enabled: false
        },
        xaxis: {
          categories: props.data.categories,
          labels: {
            hideOverlappingLabels: false,
          }
        },
        colors: ['#55C7F2', '#F5701C'],
        fill: {
          type: 'gradient',
          gradient: {
            type: 'vertical',
            gradientToColors: ['#3DF5AB', '#F7190F']
          }
        }
    },
  }

    return (
      <div className="app">
        <div className="row">
          <div className="mixed-chart">
            <Chart
              options={chartData.options}
              series={props.data.series}
              type={props.data.type}
              height="600px"
            />
          </div>
        </div>
      </div>
    )
}

export default Diagram;