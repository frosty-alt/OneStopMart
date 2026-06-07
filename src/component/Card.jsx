import React from 'react'

const Card= () => {
  return (<>
    <div className="main-card"  style={{ marginLeft: "20% ", padding :"20px" , backgroundColor:"#f5f5f5" , spaceBetween:"20px", width:"60%"}}>

      <small className="card-title" style={{fontFamily: "inter", fontSize: "16px"}}>Current Delivery</small>
      <h2 className="Order-Id">ORDER-ID</h2>
      <p className="Order-No">#EF-98234-PKH</p>
        <p className="Order-Status">Status: <span style={{color:"green"}}>On the way</span></p>
    </div>
</>
  )
}

export default Card
