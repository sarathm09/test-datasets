import RandExp from 'randexp'

const getRandomString = (characters = 'a-zA-Z0-9', lengthFrom = 10, lengthTo = lengthFrom) => new RandExp(`[${characters}]{${lengthFrom},${lengthTo}}`).gen()

const getRandomStringWithoutLength = (characters = 'a-zA-Z0-9') => new RandExp(`[${characters}]`).gen()

const getRandomStringFromRegex = (regex = '[a-zA-Z0-9]{1,10}') => new RandExp(regex).gen()

export { getRandomString, getRandomStringWithoutLength, getRandomStringFromRegex }
export default { getRandomString, getRandomStringWithoutLength, getRandomStringFromRegex }
