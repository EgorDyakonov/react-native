export const count = () => ({ type: 'COUNT' });
export const refresh = (value) => ({ type: 'REFRESH', data: value });
export const addList = (data) => ({ type: 'ADD_LIST', data: data });
export const removeList = () => ({ type: 'REMOVE_LIST', data: [] });