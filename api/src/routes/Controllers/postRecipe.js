const {Recipe} = require('../../db')
const {Diet} = require('../../db')

module.exports = postRecipe = async (name, summary, healthScore, step, score, image, diet) => {

    if (!summary || !name ) throw Error("La propiedad name o summary no tiene valor")

// console.log(JSON.stringify(Recipe))
//     return await Recipe.create({name, summary, healthScore, step, score, image})
    const result = await Recipe.create({name, summary, healthScore, step, score, image, diet})

    diet.forEach(async (element) => {
            const [d, flag] = await Diet.findOrCreate({
            where: {
                name: element
            }
        })
        console.log("antes de addDiets :", JSON.stringify(d) + "bandera" + flag)
        await result.addDiets(d)
        console.log("bandera :", flag)
    })


}


/*
router.post("/", async (req, res) => {
  const { name, image, platforms, description, released, rating, gender } =
    req.body;

  try {
    const result = await Videogame.create({
      name,
      image,
      platforms,
      description,
      released,
      rating,
      gender,
    });

    gender.forEach(async (element) => {
      const [genre, created] = await Gender.findOrCreate({
        where: {
          name: [element],
        },
      });
      await result.addGender(genre);
      console.log(created);
    });
    res.status(200).send(result);
  } catch (error) {
    res.status(404).send(error.message);
  }
});
*/
/*

for of

    for (const element of diet) {
        const [d, flag] = await Diet.findOrCreate({
            where: {
                name: [element]
            }
        })
        await result.addDiets(d)
        console.log("bandera :", flag)
    }*/
