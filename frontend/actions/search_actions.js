export const SEARCH_FORM = 'SEARCH_FORM';
export const CLEAR_FORM = 'CLEAR_FORM';

export const sendForm = (searchForm) => ({
    type: SEARCH_FORM,
    searchForm
})

export const clearForm = () => ({
    type: CLEAR_FORM,
})
