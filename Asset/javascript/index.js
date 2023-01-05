import { GetCategory, GetDetailFood,GetRecipeFood } from "./function.js"; 
const urlparams = new URLSearchParams(window.location.search)
console.log(urlparams.get('category'))
console.log(urlparams.get('recipe'))
const recipe = urlparams.get('recipe')
const category = urlparams.get('category')

if (category){
  await GetDetailFood(category)
}

if (recipe){
  await GetRecipeFood(recipe)
}
await GetCategory()
