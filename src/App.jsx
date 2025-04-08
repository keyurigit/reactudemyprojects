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

// import { useState,useEffect } from "react";
// import Loading from "./Loading";
// import Tours from "./Tours";

// const url = 'https://www.course-api.com/react-tours-project';

// function App() {

//   const [isLoading,setIsLoading] = useState(true);
//   const [tours,setTours] = useState([]);

//   const fetchtours = async () => {
//     try {
//       const response = await fetch(url);
//       const data = await response.json();
//       setIsLoading(false);
//       setTours(data);
//     } catch (error) {
//       setIsLoading(false);
//       console.log(error)
//     }
    
//   }

//   useEffect(() => {
//     fetchtours();;
//   }, []);  

//   const removeTour = (id) =>{
//     const newTours = tours.filter((tour)=>{
//       return(tour.id !== id )
//     });
//     setTours(newTours);
//   }
  
//   if(isLoading){
//     return (
//       <main>
//         <Loading/>
//       </main>
//     )
//   }
//   if (tours.length === 0) {
//     return (
//       <main>
//         <div className='title'>
//           <h2>no tours left</h2>
//           <button className='btn' onClick={() => fetchtours()}>
//             refresh
//           </button>
//         </div>
//       </main>
//     );
//   }
//   return (
//     <main>
//       <Tours tours = {tours} removeTour={removeTour}/>
//     </main>
//   )
// }

// export default App

// 3. Reviews

import { useState } from "react";
import { FaQuoteRight, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import data from "./data_reviews";


const App = () =>{

  const[index,setIndex] = useState(0);
  const {id,image,job,name,text}= (data[index]);
  const checkNumber = (number) => {
    if (number > data.length - 1) {
      return 0;
    }
    if (number < 0) {
      return data.length - 1;
    }
    return number;
  };
  const nextPerson = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    });
  };
  const prevPerson = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    });
  };
  const randomPerson = () => {
    let randomNumber = Math.floor(Math.random() * data.length);
    if (randomNumber === index) {
      randomNumber = index + 1;
    }
    setIndex(checkNumber(randomNumber));
  };
    return (
      <main>
        <article className='review'>
          <div className='img-container'>
            <img src={image} alt={name} className='person-img' />
            <span className='quote-icon'>
              <FaQuoteRight />
            </span>
          </div>
          <h4 className='author'>{name}</h4>
          <p className='job'>{job}</p>
          <p className='info'>{text}</p>
          <div className='btn-container'>
            <button className='prev-btn' onClick={prevPerson}>
              <FaChevronLeft />
            </button>
            <button className='next-btn' onClick={nextPerson}>
              <FaChevronRight />
            </button>
          </div>
          <button className='btn btn-hipster' onClick={randomPerson}>
            surprise me
          </button>
        </article>
      </main>
    );
}

export default App