import axios from "axios";
import { useEffect, useState } from "react";
import './RandomFood.css'

const RandomFood = ()=>{
    // const [food ,setFood] = useState();

    const fetchFood = async ()=>{
        const res =  await axios.get('https://www.themealdb.com/api/json/v1/1/random.php');
        console.log(res.data)
        // setFood(res.data.meals[0]);
       
       }

       useEffect(()=>{
        fetchFood();
      },[]);
  const food = {
    "idMeal": "52818",
    "strMeal": " Gulab Jamun",
    "strsweetdish":" Gajar Ka Halwa",
    "strDrinkAlternate":null ,
    "strCategory": "Chicken",
    "strArea": "American",
    "strInstructions": "Fry your onion, peppers and garlic in olive oil until nicely translucent. Make a well in your veg and add your chicken. Add your seasoning and salt. Allow to colour slightly.\r\nAdd your cream, stock and macaroni.\r\nCook on low for 20 minutes. Add your cheeses, stir to combine.\r\nTop with roasted peppers and parsley.",
    "strMealThumb": "https://www.themealdb.com/images/media/meals/qrqywr1503066605.jpg",
    "strTags": "Pasta,Cheasy,Meat",
    "strYoutube": "https://www.youtube.com/watch?v=bwTSmLTZKNg",
    "strIngredient1": "macaroni",
    "strIngredient2": "chicken stock",
    "strIngredient3": "heavy cream",
    "strIngredient4": "fajita seasoning",
    "strIngredient5": "salt",
    "strIngredient6": "chicken breast",
    "strIngredient7": "olive oil",
    "strIngredient8": "onion",
    "strIngredient9": "red pepper",
    "strIngredient10": "garlic",
    "strIngredient11": "cheddar cheese",
    "strIngredient12": "parsley",
    "strIngredient13": "",
    "strIngredient14": "",
    "strIngredient15": "",
    "strIngredient16": "",
    "strIngredient17": "",
    "strIngredient18": "",
    "strIngredient19": "",
    "strIngredient20": "",
    "strMeasure1": "500g",
    "strMeasure2": "2 cups",
    "strMeasure3": "1/2 cup",
    "strMeasure4": "1 packet",
    "strMeasure5": "1 tsp",
    "strMeasure6": "3 diced",
    "strMeasure7": "2 tbsp",
    "strMeasure8": "1 small finely diced",
    "strMeasure9": "2 finely diced",
    "strMeasure10": "2 cloves minced",
    "strMeasure11": "1 cup",
    "strMeasure12": "garnish chopped",
    "strMeasure13": "",
    "strMeasure14": "",
    "strMeasure15": "",
    "strMeasure16": "",
    "strMeasure17": "",
    "strMeasure18": "",
    "strMeasure19": "",
    "strMeasure20": "",
    "strSource": "http://twistedfood.co.uk/chicken-fajita-mac-n-cheese/",
    "strImageSource": null,
    "strCreativeCommonsConfirmed": null,
    "dateModified": null
}

       
    // return (
    //     <div className="home1">
    //         <h1>{ food.strMeal}</h1>
    //         <img className="home2" src=" https://th.bing.com/th/id/OIP.jHVOWwSFJmKm4WYjoOIS0QHaFk?w=247&h=184&c=7&r=0&o=5&pid=1.7" alt=""  />
            
    //         <h1>{food.strsweetdish}</h1>
    //         <img className="home2" src="https://th.bing.com/th/id/OIP.v6UM1wCMaYeJQWwzuN7DAQHaFs?w=224&h=180&c=7&r=0&o=5&pid=1.7" alt="" />
    //     </div>
    // )
}
export default RandomFood