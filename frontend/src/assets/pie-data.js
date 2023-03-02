export const pieChartData = {
  type: 'pie',
  data: {
    labels: [
      'Company A',
      'Company B',
      'Company C',
      'Company D',
      'Company E',
      'Company F',
      'Company G',
      'Company H'
    ],
    datasets: [
      {
        label: 'Zip-Code',
        data: [23, 34, 10, 22, 34, 54, 27, 14],
        backgroundColor: [
          'rgba(255, 0, 0, 0.5)', // Red
          'rgba(0, 0, 255, 0.5)', // Blue
          'rgba(0, 255, 0, 0.5)', // Green
          'rgba(255, 255, 0, 0.5)', // Yellow
          'rgba(255, 0, 255, 0.5)', // Magenta
          'rgba(0, 255, 255, 0.5)', // Cyan
          'rgba(255, 165, 0, 0.5)', // Orange
          'rgba(128, 0, 128, 0.5)' // Purple
        ],
        borderColor: '#36495d',
        borderWidth: 3
      }
    ]
  },
  options: {
    responsive: true,
    lineTension: 1
  }
}

export default pieChartData
