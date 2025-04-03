// 1. Birthday Buddy


// import { useState } from "react"
// import data from "./data"
// import List from "./List";
// function App() {

//   const [people,setPeople] = useState(data);

//   return (
//     <main>
//       <section className="container">
//         <h3>{people.length} Birthdays Today</h3>
//         <List people={people}/>
//         <button onClick={()=>setPeople([])} type='button'
//           className='btn btn-block'>clear all</button>
//       </section>
//     </main>
//   )
// }

// export default App

// 2. Tours

import { useState,useEffect } from "react";
import Loading from "./Loading";
import Tours from "./Tours";

const url = 'https://www.course-api.com/react-tours-project';

function App() {

  const [isLoading,setIsLoading] = useState(true);
  const [tours,setTours] = useState([]);

  const fetchtours = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setIsLoading(false);
      setTours(data);
    } catch (error) {
      setIsLoading(false);
      console.log(error)
    }
    
  }

  useEffect(() => {
    fetchtours();;
  }, []);  

  const removeTour = (id) =>{
    const newTours = tours.filter((tour)=>{
      return(tour.id !== id )
    });
    setTours(newTours);
  }
  
  if(isLoading){
    return (
      <main>
        <Loading/>
      </main>
    )
  }
  if (tours.length === 0) {
    return (
      <main>
        <div className='title'>
          <h2>no tours left</h2>
          <button className='btn' onClick={() => fetchtours()}>
            refresh
          </button>
        </div>
      </main>
    );
  }
  return (
    <main>
      <Tours tours = {tours} removeTour={removeTour}/>
    </main>
  )
}

export default App