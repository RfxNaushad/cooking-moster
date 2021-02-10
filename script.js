//Event Handler For Search Button
const searchBtn = document.getElementById("search-btn");
searchBtn.addEventListener("click", function () {
    const searchMeal = document.getElementById("search-meal").value;
    // const readInner = searchMeal.innerText;


    //Fetching API from the server
    const url = 'https://www.themealdb.com/api/json/v1/1/search.php?s=' + searchMeal;


    fetch(url)
        .then(res => res.json())
        .then(data => displayMeals(data))


    //Displaying The results after searching


    const displayMeals = data => {
        const searchItems = document.getElementById("search-items");
        searchItems.innerHTML = ' ';
        for (let i = 0; i < data.meals.length; i++) {
            const mealItem = data.meals[i];
            //    console.log(mealItem.strMeal); 
            // console.log(data.meals);

            const mealItemDiv = document.createElement('div');   //Creating New Div
            mealItemDiv.className = "meal_item_div"
            //    const h3 = document.createElement('h3') ;
            //    h3.innerText = mealItem.strMeal;
            //    const mealPicture = document.createElement('img');
            //    mealPicture.style.backgroundImage = mealItem.strMealThumb;
            //    searchItems.appendChild(mealItemDiv);
            //    mealItemDiv.appendChild(mealPicture);
            //    mealItemDiv.appendChild(h3);
            const mealInfo = `
                 <img src="${mealItem.strMealThumb}">
                  <h3>${mealItem.strMeal}</h3>       
            `
            mealItemDiv.innerHTML = mealInfo;
            searchItems.appendChild(mealItemDiv);  //Appending New info to the new div


            mealItemDiv.addEventListener("click", function () {
                const mealDetails = document.getElementById("meal-details");  //Opening All info of the meal
                const mealDetailsDiv = document.createElement('div');
                mealDetailsDiv.className = "meal_details_div"
                const allInfo = `
            <img src="${mealItem.strMealThumb}">
            <h3>${mealItem.strMeal}</h3>
            <br>
            <h2>All Ingredients</h2>
            <p>${mealItem.strIngredient1}</p>
            <p>${mealItem.strIngredient2}</p>
            <p>${mealItem.strIngredient3}</p>
            <p>${mealItem.strIngredient4}</p>
            <p>${mealItem.strIngredient5}</p>
            <p>${mealItem.strIngredient6}</p>
            <p>${mealItem.strIngredient7}</p>
            <p>${mealItem.strIngredient8}</p>
            <p>${mealItem.strIngredient9}</p>
            <p>${mealItem.strIngredient10}</p>
            <p>${mealItem.strIngredient11}</p>
            <p>${mealItem.strIngredient12}</p>
            <p>${mealItem.strIngredient13}</p>
            <p>${mealItem.strIngredient14}</p>
            <p>${mealItem.strIngredient15}</p>
            <p>${mealItem.strIngredient16}</p>
            <p>${mealItem.strIngredient17}</p>
            <p>${mealItem.strIngredient18}</p>
            <p>${mealItem.strIngredient19}</p>
            <p>${mealItem.strIngredient20}</p>
            `
                mealDetailsDiv.innerHTML = allInfo;
                mealDetails.appendChild(mealDetailsDiv);


            })
        }
        //   console.log(data.meals[1]);
    }


})