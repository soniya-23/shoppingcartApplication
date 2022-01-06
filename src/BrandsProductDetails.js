import React,{useState} from 'react';
const BrandsProductDetails=({data, showBrandProductsData,setBrandsTable,setShowBrandProducts})=>{
    const temp= Array(data.length).fill(1)
    const [itemCount, setItemCount] = useState(temp);
    const result = data.filter(d => d.brand === showBrandProductsData.brand);

    return(
        <>
        <button  onClick={() => { setBrandsTable(true);setShowBrandProducts(false)}}>Back</button>
        <table border="1" className="brands-table">
        <tr>{`Products Of ${showBrandProductsData.brand}`}</tr>
        {result.map((r, index) => {
            
        return (
          <tr key={r.id}>    
            <td><img src={r.icon} alt="logo" /></td>
            <td>{r.name}<br></br>{`Price: ${r.price}`}</td>
            <td><div>
          <button
            onClick={() => { 
                itemCount[index]=(Math.max(itemCount[index]-1),0)
              setItemCount([...itemCount]);
         
            }}
          >
            -
          </button>
          {itemCount[index]}
          <button
            onClick={() => {
                itemCount[index]=itemCount[index]+1
              setItemCount([...itemCount]);
             
            }}
          >
          +
          </button>
        </div></td>
          </tr>
        );
      })}

      </table>
      </>
    )
}
export default BrandsProductDetails;