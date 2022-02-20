import StarRatingComponent from 'react-star-rating-component';
import React ,{useState} from 'react';


  

function Search() {
    const[rate,setRate]= useState(1)
    const onStarClick=(nextValue, prevValue, name) =>{
        setRate(nextValue);
    }
   
  
  return (
      <div className='row'>
 <input type="text" placeholder="First Name"/>
<StarRatingComponent 
          name="rate1" 
          starCount={5}
          value={rate}
          onStarClick={onStarClick}
        />
      </div>



      
    );
}

export default Search