import { LoremIpsum } from 'lorem-ipsum'
import RandExp from 'randexp'

const loremGeneratorConfig = {
    sentencesPerParagraph: {
        max: 8,
        min: 4
    },
    wordsPerSentence: {
        max: 16,
        min: 4
    }
}

const lorem = new LoremIpsum(loremGeneratorConfig)

const generateLorem = (limit = 100) => {
    let generatedString = ''

    if (limit < 1) generatedString = ''
    if (limit < 10) {
        generatedString = new RandExp(`[a-zA-Z0-9]{0,${limit}}`).gen()
    } else {
        while (limit > 0) {
            let tempSentence = lorem.generateSentences(10)

            if (limit - tempSentence.length > 0) generatedString += tempSentence
            else generatedString += tempSentence.slice(0, limit - generatedString.length - 1)

            limit -= tempSentence.length
        }
    }

    return generatedString + '.'
}

export { generateLorem }
export default { generateLorem }
