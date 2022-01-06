import React,{ useState } from "react";
import './BrandsTable.css';
import BrandsProductDetails from './BrandsProductDetails'

const BrandsTable = ({ data }) => {
    const[showBrandsTable, setBrandsTable]=useState(true);
    const [showBrandProducts, setShowBrandProducts]= useState(false);
    const [showBrandProductsData, setShowBrandProductsData]= useState(false);
  return (
      <>
    {showBrandsTable &&<table border="1" className="brands-table">
      <tr>Brands</tr>
      {data.map((d) => {
        return (
          <tr onClick={() => { setShowBrandProductsData(d);setShowBrandProducts(true);setBrandsTable(false)}}>
            <td><img src={d.icon} alt="logo" /></td>
            <td>{d.brand}<br></br>{`Product count: ${d.weight}`}</td>
            
          </tr>
        );
      })}
    </table>}
    {showBrandProducts === true ? <BrandsProductDetails showBrandProductsData={showBrandProductsData}data={data}setBrandsTable={setBrandsTable}setShowBrandProducts={setShowBrandProducts}/> :''}
    </>
  );
};
export default BrandsTable;
