/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Implement the functions needed to solve the exercise here.
 * Do not forget to export them so they are available for the
 * tests. Here an example of the syntax as reminder:
 *
 * export function yourFunction(...) {
 *   ...
 * }
 */

export function cookingStatus(minutes) {
    if (minutes === 0) {
        return 'Lasagna is done.'
    } else if (minutes === undefined) {
        return 'You forgot to set the timer.'
    } else if (minutes > 0) {
        return 'Not done, please wait.'
    }
}

console.log(cookingStatus(1))

export function preparationTime(layers, minutes) {
    return minutes ? layers.length * minutes : layers.length * 2
}

const layers = ["sauce", "noodles", "sauce", "meat", "mozzarella", "noodles"];

console.log(preparationTime(layers, 3));

export function quantities(layers) {
    let noodles = 0
    let sauce = 0

    for (let i = 0; i < layers.length; i++) {
        if (layers[i] === 'sauce') {
            sauce += 0.2
        } else if (layers[i] === 'noodles') {
            noodles += 50
        }
    }
    return {noodles,
        sauce
    }
}

console.log(quantities(['sauce', 'noodles', 'sauce', 'meat', 'mozzarella', 'noodles']));

export function addSecretIngredient(friendsList, myList) {
    myList.push(friendsList[friendsList.length - 1])
}

const friendsList = ["noodles", "sauce", "mozzarella", "kampot pepper"];
const myList = ["noodles", "meat", "sauce", "mozzarella"];

console.log(addSecretIngredient(friendsList, myList));

console.log(myList)

export function scaleRecipe(recipe, portions) {
let recipeForScaling = {}

    for (const key in recipe) {
    recipeForScaling[key] = recipe[key] * (0.5 * portions)
 }
 return recipeForScaling
}

const recipe = {
  noodles: 200,
  sauce: 0.5,
  mozzarella: 1,
  meat: 100,
};

console.log(scaleRecipe(recipe,4))

console.log(recipe)