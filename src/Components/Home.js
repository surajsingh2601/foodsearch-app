import React, { useState } from "react";
import Fooddata from "./Data";

const Home = () => {

    const [ menu, setMenu ]= useState(Fooddata);

    const filterfoods = (curfoods)=>{
            const updatefoods = Fooddata.filter((cur, ind)=>{
                  return cur.category === curfoods
                });

                    setMenu(updatefoods)
             }

    




  return (
    <div>
      <section className="container mt-2">
        <h2 className="d-flex justify-content-center" style={{ fontWeight: 400 }} >
         
          Search Your Food


        </h2>




        <div className="btn-container d-flex justify-content-around mt-5">
          <button type="button" className="btn btn-primary" onClick={()=>filterfoods("punjabi")}>
            Punjabi
          </button>
          <button type="button" className="btn btn-secondary" onClick={()=>filterfoods("vadapav")}>
            Vadapav
          </button>
          <button type="button" className="btn btn-success" onClick={()=>filterfoods("Pizza")}>
            Pizza
          </button>
          <button type="button" className="btn btn-danger" onClick={()=>filterfoods("Momos")}>
            Momos
          </button>
          <button type="button" className="btn btn-warning" onClick={()=>filterfoods("Frankie")}>
            Frankie
          </button>
          <button type="button" className="btn btn-info" onClick={()=>filterfoods("Chai")}>
            Chai
          </button>
          <button type="button" className="btn btn-info" onClick={()=>setMenu(Fooddata)}>
            All
          </button>
        </div>





        <div className="container mt-5">
            <div className="row d-flex justify-content-around align-item-center">

                {
                    menu.map((el, ind)=>{
                        return(
                            <>
                                 <div className="card mx-2 mt-4" style={{width: "22rem" , border:'none'}}>
                                       <img src={el.imgdata} className="card-img-top mt-3" alt="..." style={{ height:'16rem'}}/>
                                              <div className="card-body">
                                                          <h5 className="card-title"> {el.rname}</h5>
                                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                                      <p> Price: {el.price} </p>
                                                    <a href="/" className="btn btn-primary">Order</a>
                                               </div>
                                 </div>
                            </>
                        )
                    })
                }
            
       

    
  

 
  </div> 

        </div>
      </section>
    </div>
  );
};

export default Home;
