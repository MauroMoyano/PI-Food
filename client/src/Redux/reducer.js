import {
    CREATE_RECIPE, CURRENT_PAGE,
    DELETE_STATE,
    DISH_TYPES,
    GET_FOOD_ID,
    GET_HOME_CARDS, LOADER,
    ORDER_RECIPES_HEALTH, ORDER_TITLE,
    PUT_FOOD_BY_NAME
} from './actions'


const initialState = {
    foods: [],
    foodsCopy: [],
    diet: [],
    foodDetail: {},
    currentPage: 0,
    loader: true
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_HOME_CARDS:
            const {home, auxDiets} = action.payload
            return {...state, foods: home, diet: auxDiets, foodsCopy: home, currentPage: 0}

        case GET_FOOD_ID:
            // console.log("reducerrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr", action.payload)
            return {...state, foodDetail: action.payload}

        case PUT_FOOD_BY_NAME:
            console.log("respuesta de la api -------", action.payload)
            return {...state, foods: action.payload, currentPage: 0}

        case DELETE_STATE:
            return {...state, foods: action.payload}

        case CREATE_RECIPE:
            return {...state, foods: [action.payload, ...state.foods]}

        case ORDER_RECIPES_HEALTH:
            return {
                ...state, foods: (action.payload === 'Ascendente')
                    ? [...state.foods.sort((a, b) => a.healthScore - b.healthScore)]
                    : [...state.foods.sort((a, b) => b.healthScore - a.healthScore)],
                currentPage: 0
            }

        case ORDER_TITLE:
            return {
                ...state, foods: (action.payload === 'Ascendente')
                    ? [...state.foods.sort((a, b) => a.title.localeCompare(b.title))]
                    : [...state.foods.sort((a, b) => b.title.localeCompare(a.title))],
                foodsCopy: (action.payload === 'Ascendente')
                    ? [...state.foodsCopy.sort((a, b) => a.title.localeCompare(b.title))]
                    : [...state.foodsCopy.sort((a, b) => b.title.localeCompare(a.title))],
                currentPage: 0

            }

        case DISH_TYPES:
            state.foods = state.foodsCopy
            return {
                ...state,
                foods: state.foods.filter((food) => food.diet.some((d) => d === action.payload)),
                currentPage: 0
                // foods: state.foods.filter((food) => food.diet.map((d) => d === action.payload))
            }

        case CURRENT_PAGE:
            return {...state, currentPage: action.payload}

        case LOADER:
            return {
                ...state, loader: state.loader
                    ? state.loader = false
                    : state.loader = true
            }


        default:
            return {...state}
    }
}
export default rootReducer;

/*

{
        "id": 782585,
        "title": "Cannellini Bean and Asparagus Salad with Mushrooms",
        "healthScore": 100,
        "summary": "Cannellini Bean and Asparagus Salad with Mushrooms requires approximately <b>45 minutes</b> from start to finish. This main course has <b>482 calories</b>, <b>31g of protein</b>, and <b>6g of fat</b> per serving. This gluten free, dairy free, lacto ovo vegetarian, and vegan recipe serves 6 and costs <b>$1.35 per serving</b>. 309 people were impressed by this recipe. Head to the store and pick up grain mustard, sea salt, lemon zest, and a few other things to make it today. It is brought to you by foodandspice.blogspot.com. Taking all factors into account, this recipe <b>earns a spoonacular score of 70%</b>, which is pretty good. Similar recipes are <a href=\"https://spoonacular.com/recipes/cannellini-bean-salad-422994\">Cannellini Bean Salad</a>, <a href=\"https://spoonacular.com/recipes/refreshing-cannellini-bean-salad-113127\">Refreshing Cannellini Bean Salad</a>, and <a href=\"https://spoonacular.com/recipes/cannellini-and-green-bean-salad-33177\">Cannellini-and-Green Bean Salad</a>.",
        "image": "https://spoonacular.com/recipeImages/782585-312x231.jpg",
        "diet": [
            "gluten free",
            "dairy free",
            "lacto ovo vegetarian",
            "vegan"
        ]
    },
        {
            "id": 716426,
            "title": "Cauliflower, Brown Rice, and Vegetable Fried Rice",
            "healthScore": 75,
            "summary": "You can never have too many Chinese recipes, so give Cauliflower, Brown Rice, and Vegetable Fried Rice a try. This recipe serves 8 and costs $1.12 per serving. This hor d'oeuvre has <b>192 calories</b>, <b>7g of protein</b>, and <b>6g of fat</b> per serving. Head to the store and pick up broccoli, sesame seeds, soy sauce, and a few other things to make it today. 3689 people were impressed by this recipe. It is brought to you by fullbellysisters.blogspot.com. It is a good option if you're following a <b>gluten free, dairy free, lacto ovo vegetarian, and vegan</b> diet. From preparation to the plate, this recipe takes roughly <b>30 minutes</b>. Overall, this recipe earns a <b>spectacular spoonacular score of 100%</b>. If you like this recipe, you might also like recipes such as <a href=\"https://spoonacular.com/recipes/cauliflower-brown-rice-and-vegetable-fried-rice-1584601\">Cauliflower, Brown Rice, and Vegetable Fried Rice</a>, <a href=\"https://spoonacular.com/recipes/cauliflower-brown-rice-and-vegetable-fried-rice-1238897\">Cauliflower, Brown Rice, and Vegetable Fried Rice</a>, and <a href=\"https://spoonacular.com/recipes/cauliflower-brown-rice-and-vegetable-fried-rice-1230097\">Cauliflower, Brown Rice, and Vegetable Fried Rice</a>.",
            "image": "https://spoonacular.com/recipeImages/716426-312x231.jpg",
            "diet": [
                "gluten free",
                "dairy free",
                "lacto ovo vegetarian",
                "vegan"
            ]
        },
        {
            "id": 715497,
            "title": "Berry Banana Breakfast Smoothie",
            "healthScore": 64,
            "summary": "If you want to add more <b>lacto ovo vegetarian</b> recipes to your recipe box, Berry Banana Breakfast Smoothie might be a recipe you should try. One portion of this dish contains about <b>21g of protein</b>, <b>10g of fat</b>, and a total of <b>457 calories</b>. This recipe serves 1 and costs $2.07 per serving. 689 people have tried and liked this recipe. It works well as a rather inexpensive breakfast. A mixture of banana, graham cracker crumbs, vanilla yogurt, and a handful of other ingredients are all it takes to make this recipe so yummy. From preparation to the plate, this recipe takes roughly <b>5 minutes</b>. It is brought to you by Pink When. Overall, this recipe earns a <b>super spoonacular score of 99%</b>. Similar recipes include <a href=\"https://spoonacular.com/recipes/berry-banana-breakfast-smoothie-1364145\">Berry Banana Breakfast Smoothie</a>, <a href=\"https://spoonacular.com/recipes/berry-banana-breakfast-smoothie-1405583\">Berry Banana Breakfast Smoothie</a>, and <a href=\"https://spoonacular.com/recipes/berry-banana-breakfast-smoothie-1601311\">Berry Banana Breakfast Smoothie</a>.",
            "image": "https://spoonacular.com/recipeImages/715497-312x231.jpg",
            "diet": [
                "lacto ovo vegetarian"
            ]
        },
        {
            "id": 715415,
            "title": "Red Lentil Soup with Chicken and Turnips",
            "healthScore": 100,
            "summary": "Red Lentil Soup with Chicken and Turnips might be a good recipe to expand your main course repertoire. This recipe serves 8 and costs $3.0 per serving. One serving contains <b>477 calories</b>, <b>27g of protein</b>, and <b>20g of fat</b>. It is brought to you by Pink When. 1866 people have tried and liked this recipe. It can be enjoyed any time, but it is especially good for <b>Autumn</b>. From preparation to the plate, this recipe takes approximately <b>55 minutes</b>. It is a good option if you're following a <b>gluten free and dairy free</b> diet. Head to the store and pick up salt and pepper, canned tomatoes, flat leaf parsley, and a few other things to make it today. Overall, this recipe earns a <b>spectacular spoonacular score of 99%</b>. If you like this recipe, you might also like recipes such as <a href=\"https://spoonacular.com/recipes/red-lentil-and-chicken-soup-682185\">Red Lentil and Chicken Soup</a>, <a href=\"https://spoonacular.com/recipes/red-lentil-and-chicken-soup-1058971\">Red Lentil and Chicken Soup</a>, and <a href=\"https://spoonacular.com/recipes/red-lentil-soup-34121\">Red-Lentil Soup</a>.",
            "image": "https://spoonacular.com/recipeImages/715415-312x231.jpg",
            "diet": [
                "gluten free",
                "dairy free"
            ]
        },
        {
            "id": 716406,
            "title": "Asparagus and Pea Soup: Real Convenience Food",
            "healthScore": 100,
            "summary": "Asparagus and Pea Soup: Real Convenience Food requires approximately <b>20 minutes</b> from start to finish. Watching your figure? This gluten free, dairy free, paleolithic, and lacto ovo vegetarian recipe has <b>217 calories</b>, <b>11g of protein</b>, and <b>8g of fat</b> per serving. This recipe serves 2. For <b>$1.78 per serving</b>, this recipe <b>covers 25%</b> of your daily requirements of vitamins and minerals. <b>Autumn</b> will be even more special with this recipe. It works well as a hor d'oeuvre. 207 people have tried and liked this recipe. It is brought to you by fullbellysisters.blogspot.com. A mixture of vegetable broth, evoo, garlic, and a handful of other ingredients are all it takes to make this recipe so yummy. All things considered, we decided this recipe <b>deserves a spoonacular score of 96%</b>. This score is outstanding. Try <a href=\"https://spoonacular.com/recipes/asparagus-and-pea-soup-real-convenience-food-1393979\">Asparagus and Pea Soup: Real Convenience Food</a>, <a href=\"https://spoonacular.com/recipes/asparagus-and-pea-soup-real-convenience-food-1376201\">Asparagus and Pea Soup: Real Convenience Food</a>, and <a href=\"https://spoonacular.com/recipes/asparagus-and-pea-soup-real-convenience-food-1362341\">Asparagus and Pea Soup: Real Convenience Food</a> for similar recipes.",
            "image": "https://spoonacular.com/recipeImages/716406-312x231.jpg",
            "diet": [
                "gluten free",
                "dairy free",
                "paleolithic",
                "lacto ovo vegetarian",
                "primal",
                "vegan"
            ]
        },
        {
            "id": 644387,
            "title": "Garlicky Kale",
            "healthScore": 83,
            "summary": "Garlicky Kale requires approximately <b>45 minutes</b> from start to finish. This side dish has <b>170 calories</b>, <b>2g of protein</b>, and <b>15g of fat</b> per serving. This recipe serves 2. For <b>69 cents per serving</b>, this recipe <b>covers 17%</b> of your daily requirements of vitamins and minerals. 19 people have made this recipe and would make it again. This recipe from Foodista requires balsamic vinegar, garlic, curly kale, and olive oil. It is a good option if you're following a <b>gluten free, dairy free, paleolithic, and lacto ovo vegetarian</b> diet. With a spoonacular <b>score of 99%</b>, this dish is outstanding. Try <a href=\"https://spoonacular.com/recipes/garlicky-kale-248759\">Garlicky Kale</a>, <a href=\"https://spoonacular.com/recipes/garlicky-kale-1267347\">Garlicky Kale</a>, and <a href=\"https://spoonacular.com/recipes/garlicky-kale-1584523\">Garlicky Kale</a> for similar recipes.",
            "image": "https://spoonacular.com/recipeImages/644387-312x231.jpg",
            "diet": [
                "gluten free",
                "dairy free",
                "paleolithic",
                "lacto ovo vegetarian",
                "primal",
                "gluten free",
                "dairy free"
            ]
        },
        {
            "id": 782601,
            "title": "Red Kidney Bean Jambalaya",
            "healthScore": 96,
            "summary": "Red Kidney Bean Jambalayan is a main course that serves 6. One portion of this dish contains approximately <b>18g of protein</b>, <b>6g of fat</b>, and a total of <b>393 calories</b>. For <b>$1.68 per serving</b>, this recipe <b>covers 33%</b> of your daily requirements of vitamins and minerals. 53 people were glad they tried this recipe. A mixture of vegetable stock, tomatoes, onion, and a handful of other ingredients are all it takes to make this recipe so flavorful. It is a good option if you're following a <b>gluten free, dairy free, lacto ovo vegetarian, and vegan</b> diet. This recipe is typical of Cajun cuisine. It is brought to you by foodandspice.blogspot.com. From preparation to the plate, this recipe takes roughly <b>45 minutes</b>. Overall, this recipe earns a <b>tremendous spoonacular score of 99%</b>. Users who liked this recipe also liked <a href=\"https://spoonacular.com/recipes/red-kidney-bean-jambalaya-1407231\">Red Kidney Bean Jambalaya</a>, <a href=\"https://spoonacular.com/recipes/red-kidney-bean-salad-94525\">Red Kidney Bean Salad</a>, and <a href=\"https://spoonacular.com/recipes/red-kidney-bean-curry-80686\">Red Kidney Bean Curry</a>.",
            "image": "https://spoonacular.com/recipeImages/782601-312x231.jpg",
            "diet": [
                "gluten free",
                "dairy free",
                "lacto ovo vegetarian",
                "vegan"
            ]
        },
        {
            "id": 795751,
            "title": "Chicken Fajita Stuffed Bell Pepper",
            "healthScore": 85,
            "summary": "Chicken Fajita Stuffed Bell Pepper takes approximately <b>45 minutes</b> from beginning to end. Watching your figure? This gluten free recipe has <b>526 calories</b>, <b>50g of protein</b>, and <b>24g of fat</b> per serving. For <b>$4.35 per serving</b>, you get a main course that serves 3. 159 people have made this recipe and would make it again. This recipe is typical of Mexican cuisine. This recipe from Pink When requires cumin, cilantro, salsa, and chili powder. All things considered, we decided this recipe <b>deserves a spoonacular score of 98%</b>. This score is amazing. Users who liked this recipe also liked <a href=\"https://spoonacular.com/recipes/stuffed-bell-peppers-551310\">Stuffed Bell Peppers</a>, <a href=\"https://spoonacular.com/recipes/stuffed-bell-pepper-1348405\">Stuffed Bell Pepper</a>, and <a href=\"https://spoonacular.com/recipes/stuffed-bell-pepper-526845\">Stuffed Bell Pepper</a>.",
            "image": "https://spoonacular.com/recipeImages/795751-312x231.jpg",
            "diet": [
                "gluten free"
            ]
        },
        {
            "id": 766453,
            "title": "Hummus and Za'atar",
            "healthScore": 100,
            "summary": "You can never have too many middl eastern recipes, so give Hummus and Za'atar a try. This recipe serves 4. One portion of this dish contains about <b>34g of protein</b>, <b>31g of fat</b>, and a total of <b>778 calories</b>. For <b>$1.61 per serving</b>, this recipe <b>covers 44%</b> of your daily requirements of vitamins and minerals. If you have chickpeas, olive oil, sea salt, and a few other ingredients on hand, you can make it. It works best as a marinade, and is done in about <b>45 minutes</b>. It is a good option if you're following a <b>gluten free, dairy free, lacto ovo vegetarian, and vegan</b> diet. 35 people have made this recipe and would make it again. It is brought to you by foodandspice.blogspot.com. Overall, this recipe earns a <b>great spoonacular score of 98%</b>. <a href=\"https://spoonacular.com/recipes/chopped-hummus-dip-with-zaatar-180958\">Chopped Hummus Dip with Za'atar</a>, <a href=\"https://spoonacular.com/recipes/mediterranean-hummus-toast-with-zaatar-1067472\">Mediterranean Hummus Toast with Za’atar</a>, and <a href=\"https://spoonacular.com/recipes/hummus-deviled-eggs-with-zaatar-exercise-challenge-1195539\">Hummus Deviled Eggs with Za’atar {Exercise Challenge}</a> are very similar to this recipe.",
            "image": "https://spoonacular.com/recipeImages/766453-312x231.jpg",
            "diet": [
                "gluten free",
                "dairy free",
                "lacto ovo vegetarian",
                "vegan"
            ]
        },
        {
            "id": 716627,
            "title": "Easy Homemade Rice and Beans",
            "healthScore": 60,
            "summary": "Easy Homemade Rice and Beans is a main course that serves 2. One serving contains <b>446 calories</b>, <b>19g of protein</b>, and <b>4g of fat</b>. For <b>$1.06 per serving</b>, this recipe <b>covers 26%</b> of your daily requirements of vitamins and minerals. A mixture of optional: of hot sauce, canned tomatoes, water, and a handful of other ingredients are all it takes to make this recipe so yummy. This recipe from cooking2perfection.blogspot.com has 471 fans. It is a good option if you're following a <b>gluten free, dairy free, lacto ovo vegetarian, and vegan</b> diet. From preparation to the plate, this recipe takes around <b>35 minutes</b>. Overall, this recipe earns a <b>tremendous spoonacular score of 98%</b>. <a href=\"https://spoonacular.com/recipes/easy-homemade-rice-and-beans-1311839\">Easy Homemade Rice and Beans</a>, <a href=\"https://spoonacular.com/recipes/easy-homemade-rice-and-beans-1303021\">Easy Homemade Rice and Beans</a>, and <a href=\"https://spoonacular.com/recipes/easy-homemade-rice-and-beans-1230117\">Easy Homemade Rice and Beans</a> are very similar to this recipe.",
            "image": "https://spoonacular.com/recipeImages/716627-312x231.jpg",
            "diet": [
                "gluten free",
                "dairy free",
                "lacto ovo vegetarian",
                "vegan"
            ]
        },
        {
            "id": 664147,
            "title": "Tuscan White Bean Soup with Olive Oil and Rosemary",
            "healthScore": 94,
            "summary": "Tuscan White Bean Soup with Olive Oil and Rosemary is a <b>gluten free, dairy free, lacto ovo vegetarian, and vegan</b> recipe with 6 servings. This main course has <b>242 calories</b>, <b>16g of protein</b>, and <b>1g of fat</b> per serving. For <b>50 cents per serving</b>, this recipe <b>covers 19%</b> of your daily requirements of vitamins and minerals. It will be a hit at your <b>Autumn</b> event. 22 people found this recipe to be tasty and satisfying. Head to the store and pick up olive oil, rosemary, garlic, and a few other things to make it today. It is brought to you by Foodista. From preparation to the plate, this recipe takes roughly <b>45 minutes</b>. With a spoonacular <b>score of 79%</b>, this dish is good. If you like this recipe, take a look at these similar recipes: <a href=\"https://spoonacular.com/recipes/white-bean-soup-with-pasta-and-rosemary-oil-drizzle-855454\">White Bean Soup with Pastan and Rosemary Oil Drizzle</a>, <a href=\"https://spoonacular.com/recipes/tuscan-white-bean-and-fennel-stew-with-orange-and-rosemary-105383\">Tuscan White Bean and Fennel Stew With Orange and Rosemary</a>, and <a href=\"https://spoonacular.com/recipes/tuscan-white-bean-soup-1054940\">Tuscan White Bean Soup</a>.",
            "image": "https://spoonacular.com/recipeImages/664147-312x231.jpg",
            "diet": [
                "gluten free",
                "dairy free",
                "lacto ovo vegetarian",
                "vegan"
            ]
        },
        {
            "id": 640941,
            "title": "Crunchy Brussels Sprouts Side Dish",
            "healthScore": 100,
            "summary": "The recipe Crunchy Brussels Sprouts Side Dish can be made <b>in about 30 minutes</b>. For <b>$1.69 per serving</b>, you get a side dish that serves 4. One serving contains <b>232 calories</b>, <b>8g of protein</b>, and <b>16g of fat</b>. This recipe is liked by 26 foodies and cooks. It is brought to you by Foodista. A mixture of red wine vinegar, walnuts, dijon mustard, and a handful of other ingredients are all it takes to make this recipe so yummy. It is a good option if you're following a <b>gluten free, dairy free, paleolithic, and lacto ovo vegetarian</b> diet. All things considered, we decided this recipe <b>deserves a spoonacular score of 98%</b>. This score is spectacular. Similar recipes include <a href=\"https://spoonacular.com/recipes/side-dish-sundays-cacio-e-pepe-brussels-sprouts-1146819\">Side Dish Sundays: Cacio e Pepe Brussels Sprouts</a>, <a href=\"https://spoonacular.com/recipes/easy-side-dish-roasted-brussels-sprouts-and-grapes-474168\">Easy Side Dish – Roasted Brussels Sprouts and Grapes</a>, and <a href=\"https://spoonacular.com/recipes/side-dish-sundays-cacio-e-pepe-brussels-sprouts-1385177\">Side Dish Sundays: Cacio e Pepe Brussels Sprouts</a>.",
            "image": "https://spoonacular.com/recipeImages/640941-312x231.jpg",
            "diet": [
                "gluten free",
                "dairy free",
                "paleolithic",
                "lacto ovo vegetarian",
                "primal"
            ]
        },
        {
            "id": 715495,
            "title": "Turkey Tomato Cheese Pizza",
            "healthScore": 39,
            "summary": "Turkey Tomato Cheese Pizza might be just the <b>Mediterranean</b> recipe you are searching for. For <b>$1.84 per serving</b>, this recipe <b>covers 23%</b> of your daily requirements of vitamins and minerals. This hor d'oeuvre has <b>221 calories</b>, <b>10g of protein</b>, and <b>8g of fat</b> per serving. This recipe serves 6. Head to the store and pick up bell pepper, parsley, onion, and a few other things to make it today. This recipe from Pink When has 910 fans. From preparation to the plate, this recipe takes around <b>15 minutes</b>. All things considered, we decided this recipe <b>deserves a spoonacular score of 97%</b>. This score is outstanding. Users who liked this recipe also liked <a href=\"https://spoonacular.com/recipes/turkey-tomato-pizza-430522\">Turkey Tomato Pizza</a>, <a href=\"https://spoonacular.com/recipes/tomato-cheese-pizza-430570\">Tomato Cheese Pizza</a>, and <a href=\"https://spoonacular.com/recipes/cheese-tomato-pizza-696636\">Cheese & Tomato Pizza</a>.",
            "image": "https://spoonacular.com/recipeImages/715495-312x231.jpg",
            "diet": []
        },
        {
            "id": 794349,
            "title": "Broccoli and Chickpea Rice Salad",
            "healthScore": 83,
            "summary": "Broccoli and Chickpea Rice Salad takes roughly <b>45 minutes</b> from beginning to end. Watching your figure? This gluten free, dairy free, lacto ovo vegetarian, and vegan recipe has <b>355 calories</b>, <b>15g of protein</b>, and <b>10g of fat</b> per serving. This recipe serves 6. For <b>$1.13 per serving</b>, this recipe <b>covers 30%</b> of your daily requirements of vitamins and minerals. It works well as a main course. 44 people were glad they tried this recipe. It is brought to you by foodandspice.blogspot.com. A mixture of ground pepper, broccoli florets, olive oil, and a handful of other ingredients are all it takes to make this recipe so tasty. With a spoonacular <b>score of 99%</b>, this dish is tremendous. If you like this recipe, take a look at these similar recipes: <a href=\"https://spoonacular.com/recipes/broccoli-and-chickpea-rice-salad-1380823\">Broccoli and Chickpea Rice Salad</a>, <a href=\"https://spoonacular.com/recipes/broccoli-and-chickpea-rice-salad-1401089\">Broccoli and Chickpea Rice Salad</a>, and <a href=\"https://spoonacular.com/recipes/broccoli-and-chickpea-rice-salad-1287405\">Broccoli and Chickpea Rice Salad</a>.",
            "image": "https://spoonacular.com/recipeImages/794349-312x231.jpg",
            "diet": [
                "gluten free",
                "dairy free",
                "lacto ovo vegetarian",
                "vegan"
            ]
        }


 */