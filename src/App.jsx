import Navbar from './components/Navbar';
import { db } from "./firebase";
import {
  collection,
  onSnapshot
} from "firebase/firestore";
import {
  customerID, month_data, month_options
  , day_data, day_options, m_day_labels,
} from './common';
import './App.css'

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

import { Bar } from 'react-chartjs-2';
import { useState, useEffect } from 'react';
import ChangeDataView from './components/ChangeDataView';
import PDFContent from './components/PDFView';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
)

function App() {
  const [exportPDF, setExportPDF] = useState(false)
  const [monthView, setMonthView] = useState(false)
  const [changeView, setChangeView] = useState(false)
  const [currentData, setCurrentData] = useState([
    { value: 0 }
  ])
  const [selectedMonth, setSelectedMonth] = useState('2023-04');
  const ItemsCollectionRef = collection(db, "lora_datas")

  useEffect(
    () => {
      onSnapshot(ItemsCollectionRef, (snapshot) => {
        setCurrentData(snapshot.docs.map(doc => ({
          ...doc.data(),
        })))
      })
      // alert("Để thay đổi dữ liệu, nhấn nút Change Data ở dưới")
    }
    , []);

  useEffect(() => {
    console.log(currentData);
    currentData.map((value) => console.log(value.value))
  }, [currentData])

  let khoiNuoc3 = [34.5, 37.2, 36.9, 35.6, 35.8, 34.1, 32.9, 33.4, 34.7, 35.8, 36.2, 37.1, 38.5, 36.9, 34.2, 36.4, 37.5, 38.2, 37.6, 36.4, 34.9, 35.7, 36.8, 37.3, 38.5, 37.8, 36.1, 35.5, 36.9, 37.2, 38.3];

  let khoinuoc2 = [10, 12, 8, 9, 13, 14, 11, 10, 12, 9, 11, 13, 14, 11, 10, 12, 9, 13, 14, 11, 10, 12, 9, 11, 13, 14, 11]

  let khoinuoc1 = [10, 12, 9, 8, 14, 13, 11, 15, 16, 12, 13, 17, 19, 18, 20, 22, 21, 19, 20, 24, 25, 23, 21, 20, 18, 15, 12, 11, 10, 9];

  let khoinuoc0 = [10, 12, 8, 14, 9, 13, 12, 19, 12];

  const m_day_options = {
    // responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Usage in ' + selectedMonth
      },
    },
  };

  const m_day_data = {
    labels: m_day_labels,
    datasets: [
      {
        label: 'hundered liters',
        backgroundColor: 'rgba(0, 0, 255, 0.8)',
        borderColor: 'rgba(0, 0, 255, 1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(0, 0, 255, 0.6)',
        hoverBorderColor: 'rgba(0, 0, 255, 0.8)',
        data: selectedMonth == '2023-03' ? khoiNuoc3 :
          ((selectedMonth == '2023-02') ? khoinuoc2 :
            ((selectedMonth == '2023-01') ? khoinuoc1 : khoinuoc0))
      }
    ]
  };

  function handleMonthChange(event) {
    setSelectedMonth(event.target.value);
    console.log(event.target.value);
    console.log(selectedMonth);
    setMonthView(true)
  }

  function funcexportPDF(){
    setExportPDF(true);
  }

  return (
    <div className="App">
      <Navbar></Navbar>
      {
        exportPDF ?
          <PDFContent month={selectedMonth}/> :
          changeView ?
            <ChangeDataView />
            :
            <>
              <div className="top_container">
                <select className='customer_select'
                  onChange={(e) => console.log(e.target.value)}>
                  {
                    customerID.map((value, index) => (
                      <option value={value} key={index}>{value}</option>
                    ))
                  }
                </select>
                <div className='value_view'>
                  Current value: {currentData.map((value) =>
                    (value.value))} m<sup>3</sup> / h
                </div>
                <div className='value_search'>
                  <label htmlFor="month-input">Select a month:</label>
                  <input
                    type="month"
                    id="month-input"
                    value={selectedMonth}
                    onChange={handleMonthChange}
                    min={`${new Date().getFullYear()}-01`}
                    max={`${new Date().getFullYear()}-12`}
                  />
                  <button className='btn' onClick={() =>
                    funcexportPDF()}>Export PDF</button>
                </div>
              </div>
              {
                monthView ?
                  <Bar options={m_day_options} data={m_day_data} />
                  :
                  <div className="chart_container">
                    <div className='bar_chart'>
                      <Bar options={month_options} data={month_data} />
                      <Bar options={day_options} data={day_data} />
                    </div>
                  </div>
              }
            </>
      }
      <div className='footer'>
        <footer>
          <p>Copyright © 2023</p>
          <button className='btn btn-change' onClick={() => setChangeView(true)}>
          </button>
        </footer>
      </div>
    </div>
  )
}

export default App
