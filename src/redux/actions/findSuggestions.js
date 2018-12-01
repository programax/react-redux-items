export const type = 'findSuggestions';

const findSuggestions = (text) => ({
    type,
    payload: text,
});

export default findSuggestions;
