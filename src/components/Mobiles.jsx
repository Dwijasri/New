import { useEffect, useState } from "react";
import axios from 'axios';
import "./Mobiles.css";
const Mobiles=()=>{
    const [mobiles,setMobiles]=useState([]);
    const get_moblies=async()=>{
        const res=await axios.get("http://localhost:8081/mobiles");
        const {data}=res;
        setMobiles(data);
    }
    useEffect(()=>{
        get_moblies();
    },[])
    return(
        <>
            <div className="parent">
                {
                    mobiles.map((element,index)=>{
                        return(
                            <div className="child" key={index}>
                                <img className= "image"src={element.pimage} alt="mobiles"/>
                                <h4>{element.pname}</h4>
                                <h4><i className="fa fa-rupee"></i>{element.pcost}</h4>
                                <h4>{element.pqty}</h4>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}
export default Mobiles;