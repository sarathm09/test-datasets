"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateLorem = void 0;
const lorem_ipsum_1 = require("lorem-ipsum");
const randexp_1 = __importDefault(require("randexp"));
const loremGeneratorConfig = {
    sentencesPerParagraph: {
        max: 8,
        min: 4
    },
    wordsPerSentence: {
        max: 16,
        min: 4
    }
};
const lorem = new lorem_ipsum_1.LoremIpsum(loremGeneratorConfig);
const generateLorem = (limit = 100) => {
    let generatedString = '';
    if (limit < 1)
        generatedString = '';
    if (limit < 10) {
        generatedString = new randexp_1.default(`[a-zA-Z0-9]{0,${limit}}`).gen();
    }
    else {
        while (limit > 0) {
            let tempSentence = lorem.generateSentences(10);
            if (limit - tempSentence.length > 0)
                generatedString += tempSentence;
            else
                generatedString += tempSentence.slice(0, limit - generatedString.length - 1);
            limit -= tempSentence.length;
        }
    }
    return generatedString + '.';
};
exports.generateLorem = generateLorem;
exports.default = { generateLorem };
