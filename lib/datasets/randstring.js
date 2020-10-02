"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRandomStringFromRegex = exports.getRandomStringWithoutLength = exports.getRandomString = void 0;
const randexp_1 = __importDefault(require("randexp"));
const getRandomString = (characters = 'a-zA-Z0-9', lengthFrom = 10, lengthTo = lengthFrom) => new randexp_1.default(`[${characters}]{${lengthFrom},${lengthTo}}`).gen();
exports.getRandomString = getRandomString;
const getRandomStringWithoutLength = (characters = 'a-zA-Z0-9') => new randexp_1.default(`[${characters}]`).gen();
exports.getRandomStringWithoutLength = getRandomStringWithoutLength;
const getRandomStringFromRegex = (regex = '[a-zA-Z0-9]{1,10}') => new randexp_1.default(regex).gen();
exports.getRandomStringFromRegex = getRandomStringFromRegex;
exports.default = { getRandomString, getRandomStringWithoutLength, getRandomStringFromRegex };
