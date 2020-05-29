import React from 'react';
import {Line} from 'react-chartjs-2';


function ChartCard ({chartData}) {
        let labels = chartData.weeklyTracks.map(track => track.week)
        let distances = chartData.weeklyTracks.map(track => track.kms)

        const data = {
            labels: labels,
            datasets: [
              {
                label: chartData.name,
                fill: true,
                lineTension: 0.1,
                backgroundColor: 'rgba(75,192,192,0.4)',
                borderColor: 'rgba(75,192,192,1)',
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: 'rgba(75,192,192,1)',
                pointBackgroundColor: '#fff',
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                pointHoverBorderColor: 'rgba(220,220,220,1)',
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                data: distances
              }
            ]
          };
        return (
            <div className="card">
              <div className="card-body">
                <Line  data={data}/>
              </div>
            </div>
        )

}

export default ChartCard