import React,{useState} from 'react'

function ProductRateCard({count,setcount,product,rate,imgSrc}) {
//valCount, setvalCount is for the button click and change text
  let [valCount,setvalCount,]=useState(true)

  return <div className="col mb-5">  
                    <div className="card h-100">
                        
                        <img className="card-img-top" src={imgSrc} alt="..." />
                        
                        <div className="card-body p-4">
                            <div className="text-center">
                                
                                <h5 className="fw-bolder">Mobile {product}</h5>
                               
                                {rate}
                            </div>
                        </div>
                        
                        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                            <div className="text-center">
                                {
                                //toogle condition check to set count and boolean
                                valCount?<button className="btn  btn-primary" onClick={()=>{
                                setcount(count+1) 
                                setvalCount(false)
                                }}>
                                Add to Cart
                                </button>:<button className="btn  btn-danger" onClick={()=>{
                                setcount(count-1) 
                                setvalCount(true)
                                }}>
                                Remove from Cart
                                </button>
                                }
                            </div>
                        </div>
                </div>
                </div>
}

export default ProductRateCard