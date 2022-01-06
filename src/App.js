//import "./styles.css";
import BrandsTable from "./BrandsTable";
import React,{ useEffect, useState } from "react";

export default function App() {
  const [apidata, setApiData] = useState([]);
  useEffect(() => {
    fetch("https://gist.githubusercontent.com/sandeepdillerao/edb372a95d6cf1a2a49b79577d023281/raw/75bf5e59e47748fad0d01ca63c81dd3791c2615c/product.json")
    .then(response => response.json())
    .then(data => setApiData(data));
  });
  return (
    <div className="App">
      <BrandsTable data={apidata} />
    </div>
  );
}