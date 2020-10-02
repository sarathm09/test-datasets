declare const getRandomQuote: () => {
    content: string;
    author: string;
};
declare const getRandomQuotes: (n?: number) => {
    content: string;
    author: string;
}[];
export { getRandomQuote, getRandomQuotes };
declare const _default: {
    getRandomQuote: () => {
        content: string;
        author: string;
    };
    getRandomQuotes: (n?: number) => {
        content: string;
        author: string;
    }[];
};
export default _default;
