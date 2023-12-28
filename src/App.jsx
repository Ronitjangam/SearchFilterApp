import React, { useState } from "react";
import './App.css';
                                     


//Array ob Object
const PLANET_DATA=[
{id:"01",name:"Mercury",size:"2440",unit:"km"},
{id:"02",name:"Venus",size:"6052",unit:"km"},
{id:"03",name:"Earth",size:"6371",unit:"km"},
{id:"04",name:"Mars",size:"3390",unit:"km"},
{id:"05",name:"Jupiter",size:"69911",unit:"km"},
{id:"06",name:"Staurn",size:"58232",unit:"km"},
{id:"07",name:"Uranus",size:"25362",unit:"km"},
{id:"08",name:"Neptune",size:"24622",unit:"km"},


]
const App=()=>{
  const [filteredList,setfilteredList]=useState(PLANET_DATA);
  const [searchQuery,setsearchQuery]=useState("")

  //Search list of objects
  const handleSearch=(event)=>{
    const query=event.target.value;
    if(!query){
      setfilteredList(PLANET_DATA);
      return
    }
    setsearchQuery(query)
    const searchList=filteredList.filter((item)=>
      {return item.name.toLowerCase().indexOf(query.toLowerCase())!==-1;}
    )
    
    setfilteredList(searchList)
    //console.log(filteredList)
    //console.log(query)
    console.log(searchList)
  };
  function clearData(){
    setsearchQuery("")
    setfilteredList(PLANET_DATA)
  }



  const onFilterChange=(event)=>{
    const selectedSize=Number(event.target.value);
    if(!selectedSize){
      setfilteredList(PLANET_DATA)
      return
    }
    const filterList=PLANET_DATA.filter((item)=>{
      return Number(item.size) > selectedSize; 
    });
    setfilteredList(filterList)
    console.log(selectedSize)
    console.log(filterList)
  }

  return(
    <div className="container">
      <h2>Search Filter Array of Objects</h2>
      <div className="list-wrapper">
        <div className="filter-container">
          <input type="text" name="search" placeholder="Search" value={searchQuery} onChange={handleSearch}/>

          <div>
            <select name="size" id="" onChange={onFilterChange}>
              <option value="">Filter by Size</option>
              <option value="2000">Greater than 2000km</option>
              <option value="6000">Greater than 6000km</option>
              <option value="10000">Greater than 10000km</option>
              <option value="25000">Greater than 25000km</option>
            </select>
          </div>
          <div><button onClick={clearData} className="clear">Clear</button></div>
        </div>
        {filteredList.map((item,index)=> (
        
        <div className="card" key={index}>
              <p className="num-text">{item.id}</p>
              <div>
                <p className="title">{item.name}</p>
                <p className="description">
                {item.size}{item.unit}
                </p>
              </div>
            </div>
    ))}
      </div>
    </div>
    



   
  );
}

export default App;
