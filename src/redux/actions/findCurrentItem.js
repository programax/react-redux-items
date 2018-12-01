export const type = 'findCurrentItem';

const findCurrentItem = (itemId) => ({
    type,
    payload: +itemId,
});

export default findCurrentItem;
