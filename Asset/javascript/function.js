// https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}
// https://www.themealdb.com/api/json/v1/1/categories.php
  
//Fetching Data
export async function GetCategory(){
  $.ajax({
    url : 'https://www.themealdb.com/api/json/v1/1/categories.php',
    type : 'GET',
    dataType : 'json',
    success : function(response){
      response.categories.map((item) => {
        rendercategories(item)
        // console.log(item)
      })
    }, fail: function(err){
        console.error(err.message)
    }
  })
}

export async function GetDetailFood(category){
  $.ajax({
    url : `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`,
    type : 'GET',
    dataType : 'json',
    success : function(response){
      RemoveCategory()
      response.meals.map((item) => {
        renderdetailfood(item)
        console.log(item)
      })
    }
  })
}


export async function GetRecipeFood(recipe){
  $.ajax({
    url : `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${recipe}`,
    type : 'GET',
    dataType : 'json',
    success : function(response){
      RemoveCategory()
      RemoveDetailFood()
      response.meals.map((item) => {
        renderrecipefood(item)
        console.log(item)
      })
    }
  })
}

function RemoveCategory(){
  $('#food-category').remove()
}
function RemoveDetailFood(){
  $('#food-detail').remove()
}


//Render Element
function rendercategories(item){
  $('#food-category').append(
    `
    <div class="Card">
      <a href="?category=${item.strCategory}">
        <h2>${item.strCategory}</h2>
        <div class="CardIMG">
          <img src="${item.strCategoryThumb}">
        </div>
        <p>${item.strCategoryDescription}</p>
      </a>
    </div>
    `
  )
}

function renderdetailfood(item){
  $('#food-detail').append(
    `
    <div class="Card2">
      <a href="?recipe=${item.idMeal}">
        <h3>${item.strMeal}</h3>
        <div class="CardIMG">
          <img src="${item.strMealThumb}">
        </div>
      </a>
    </div>
    
    `
  )
}
function renderrecipefood(item){
  $('#food-recipe').append(
    `
    <div class="Card3">
      <div class="CardIMG">
        <img src="${item.strMealThumb}">
      </div>
      <h2>${item.strMeal}</h2>
      <h3 class="category">${item.strCategory}</h3>
      <h3>Intruction</h3>
      <p>${item.strInstructions}</p>
    </div>
    `
  )
}