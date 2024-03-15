import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

function SingleCard({item}) {

 const handleFavourite = (item) => {
    const reciepeDetails = {
      idMeal : item.idMeal,
      strMealThumb : item.strMealThumb,
      strMeal : item.strMeal,
      strCategory : item.strCategory,
      strArea: item.strArea
    }

    axios.post('http://localhost:6500/reciepes',reciepeDetails)
    .then(res => console.log(res))
    .catch(err => console.log(err))
 }



  return (
    <div className='p-3 border rounded'  style={{width: "350px"}}>
        <img style={{width:"90%"}} src={item.strMealThumb ? item.strMealThumb : "https://img.freepik.com/free-photo/fresh-homemade-chicken-tacos-recipe-idea_53876-105982.jpg"} alt="Reciepe image" />
        <div>
            <h3>Title: {item.strMeal}</h3>
            <p>Instruction: {item.strInstructions.substring(0,60)}...</p>
            <p>Area: {item.strArea}</p>
            <h4>Ingredients: </h4>
            <span>{item.strIngredient1},</span>
            <span>{item.strIngredient2},</span>
            <span>{item.strIngredient3},</span>
            <span>{item.strIngredient4}</span>
            <button className='btn btn-primary me-2 mt-2' >View Details</button>
            <button className='btn btn-secondary mt-2'
            onClick={handleFavourite(item)}
            >Add to favourites</button>
        </div>
    </div>
  )
}

export default SingleCard