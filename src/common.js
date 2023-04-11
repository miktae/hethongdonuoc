const month_options = {
    // responsive: true,
    plugins: {
        legend: {
            position: 'top',
        },
        title: {
            display: true,
            text: 'Monthly usage',
        },
    },
};

const day_options = {
    // responsive: true,
    plugins: {
        legend: {
            position: 'top',
        },
        title: {
            display: true,
            text: 'Daily usage',
        },
    },
};

const month_labels = ['January', 'February', 'March', 'April',
    'May', 'June', 'July', 'August', 'September', 'October',
    'November', 'December'
];

const day_labels = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
    11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
    21, 22, 23
];

const m_day_labels = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
    11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
    21, 22, 23, 24, 26, 27, 28, 29, 30, 31
];

const month_data = {
    labels: month_labels,
    datasets: [
      {
        label: 'm3',
        backgroundColor: 'rgba(0, 0, 255, 0.8)',
        borderColor: 'rgba(0, 0, 255, 1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(0, 0, 255, 0.6)',
        hoverBorderColor: 'rgba(0, 0, 255, 0.8)',
        data: [13, 5, 5]
      }
    ]
  };

const day_data = {
    labels: day_labels,
    datasets: [
      {
        label: 'liters',
        backgroundColor: 'rgba(0, 0, 255, 0.8)',
        borderColor: 'rgba(0, 0, 255, 1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(0, 0, 255, 0.6)',
        hoverBorderColor: 'rgba(0, 0, 255, 0.8)',
        data: [15000.0, 12000.0, 10000.0, 9000.0, 8500.0, 8000.0,
             9500.0, 15000.0, 20000.0, 22000.0, 23000.0, 24000.0, 25000.0, 24000.0, 23000.0, 22000.0, 21000.0, 
            23000.0, 25000.0, 27000.0, 26000.0, 23000.0, 20000.0, 17000.0]   
      }
    ]
  };

const customerID = ['Khách hàng 1', 'Khách hàng 2', 'Khách hàng 3'
    , 'Khách hàng 4', 'Khách hàng 5', 'Khách hàng 6', 'Khách hàng 7'
    , 'Khách hàng 8', 'Khách hàng 9', 'Khách hàng 10', 'Khách hàng 11',
    , 'Khách hàng 12', 'Khách hàng 13', 'Khách hàng 14', 'Khách hàng 15'
    , 'Khách hàng 16', 'Khách hàng 17', 'Khách hàng 18', 'Khách hàng 19',
    'Khách hàng 20', 'Khách hàng 21'
]

export { month_data, day_data,
     month_options, day_options, m_day_labels, customerID }