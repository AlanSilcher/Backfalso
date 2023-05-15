const axios = require("axios")
const { Recipe, Diet, recipe_diet } = require('../db')


const allJokes = async () => {
  const jokes = (
    await axios.get(`https://v2.jokeapi.dev/joke/Any?type=single&amount=6`)
  ).data   
  

  const fff = jokes.jokes.map(el => {
    return el.joke
  })


return fff

  /* const api = recipes.results.map(el => {
        return {
            id: el.id,
            name: el.title,
            image: el.image,
            description: el.summary,
            healthScore: el.healthScore,
            steps: el.steps,
            diets: el.diets
        }
      })

      const a = await Recipe.findAll({include: { model: Diet}})

      const db = a.map(el => {
        const diets = el.diets.map(el => el.dietName)
        return {
            id: el.id,
            name: el.name,
            image: el.image,
            description: el.description,
            healthScore: el.healthScore,
            steps: el.steps,
            diets: diets
        }
      })

      return [...api, ...db] */
} 






module.exports = {
    allJokes
}