import RandExp from 'randexp'

const getRandomString = (characters = 'a-zA-Z0-9', length = 10) => new RandExp(`[${characters}]{${length}}`).gen()

export { getRandomString }
export default { getRandomString }
