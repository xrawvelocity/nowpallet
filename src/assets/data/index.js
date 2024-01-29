import beauty from './beauty.mock.json'
import grocery from './grocery.mock.json'
import health from './health.mock.json'
import home from './home.mock.json'
import pets from './pets.mock.json'
import toys from './toys.mock.json'

const categories = {
    beauty,
    grocery,
    health,
    home,
    pets,
    toys,
}

export default categories

export const products = [
    ...beauty,
    ...grocery,
    ...health,
    ...home,
    ...pets,
    ...toys,
]