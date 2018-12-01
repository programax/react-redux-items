export const type = 'findResults';

const findResults = (text) => ({
    type,
    payload: text,
});

export default findResults;
