import './App.css';
import { useState, useEffect } from "react";
import axios from 'axios';

function App() {
  const [details, setDetails] = useState([]);


  const fetchDetails = async () => {
    const { data } = await axios.get("https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode=845401&date=07-12-2021");
    // const data = response.data;
    // const res = data.data;
    console.log("response", data.sessions);

    // console.log(response.data[0]);

    const details = data.sessions;


    setDetails(details);


  }

  useEffect(() => {
    fetchDetails();
  }, [])


  return (
    <div className="App">
      <h1>Covid Centers In Motihari</h1>
      <div className="cities">
        {details.map((el, index) => (
          <div key={index} className="cities_content">
            <p>{el.address}</p>
            <p>Fee : {el.fee_type}</p>
            <p>Age Limit : {el.min_age_limit}</p>
            <p>Start Time from:  {el.from} to {el.to}</p>
            <p>Vaccine Name: {el.vaccine}</p>
          </div>
        ))}

      </div>
    </div>
  )

}

export default App;


