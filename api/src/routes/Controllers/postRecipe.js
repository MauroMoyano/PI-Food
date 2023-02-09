const {Recipe} = require('../../db')
const {Diet} = require('../../db')

module.exports = postRecipe = async (title, summary, healthScore, step, score, image, diet) => {
    if (!summary || !title ) throw Error("La propiedad name o summary no tiene valor")


console.log("title",title,"|sum" ,summary,"|hs :_" ,healthScore, "step ",step,"score :", score,"img ", image,"diet ", diet)
//     return await Recipe.create({name, summary, healthScore, step, score, image})
    const result = await Recipe.create({title, summary, healthScore, step, score, image, diet})
    console.log("entro a el manejador")
    diet.forEach(async (element) => {
            const [d, flag] = await Diet.findOrCreate({
            where: {
                name: element.toLowerCase()
            }
        })
        // d.name = d.name.toLowerCase()
        // console.log("antes de addDiets :", JSON.stringify(d) + "bandera" + flag)
        await result.addDiets(d)
        // console.log("bandera :", flag)
    })
    return result

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
