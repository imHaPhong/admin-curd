import { memo } from "react";
import { Bar } from "react-chartjs-2";

const options = {
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
};

const ProjectChart = memo(function ProjectChart({ data }: { data: {} }) {
  return <Bar data={data} options={options} height={150} width={300} />;
});

export { ProjectChart };
