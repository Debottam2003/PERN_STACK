import React from "react";
import { useState ,useEffect} from "react";
import axios from "axios";
function Selector(prop) {
  let [backend_data, setBackendData] = useState("Loading...");
  useEffect(() => {
    let fetchdata = async () => {
    try{
    let resposne = await fetch("http://localhost:5000/",{method: "POST"},{name : "Debottam"});
    console.log(resposne);
    let data = await resposne.json();
    setBackendData(JSON.stringify(data));
    //setBackendData(resposne.data[0].name);
    }catch(err){
      console.log(err);
    }
  }
  fetchdata();
  }, []);
  return (
    <>
      <div className="selector bg-slate-300">
        Selector
        <div className="level1" draggable>
          Level 1<div>op</div>
          <p>lalalalala</p>
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
        <div className="level2">Level 2</div>
      </div>
      <p>lalalalala</p>
      <p>opppppppppp</p>
      <div className="flag border-4 border-white overflow-hidden">
        <div className="orange"></div>
        <div className="white">
          <div className="blue"></div>
        </div>
        <div className="green"></div>
      </div>
      <div className="block">
        <div className="b1">b1</div>
        <div className="b2">b2</div>
      </div>
      <img
        className="border-8 border-r-green-400"
        src="https://images.pexels.com/photos/15838266/pexels-photo-15838266/free-photo-of-camping-among-trees-with-city-behind-at-night.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
      />
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur ad
        cum at dolore, esse, minima repudiandae, pariatur non dolores similique
        dolorem maiores eius aliquid dolorum sunt! Accusamus iusto cum libero?
      </p>
      <h2 style={{color : "yellow"}}>The Data get from the backend is {backend_data}</h2>
      <h4>Age : {prop.age} Happy Birthday PERN stack complete</h4>
    </>
  );
}

export default Selector;
