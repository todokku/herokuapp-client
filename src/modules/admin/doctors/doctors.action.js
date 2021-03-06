export const SAVE_DOC_ATTEMPT = 'SAVE_DOC_ATTEMPT'
export const SAVE_DOC_SUCCESS = 'SAVE_DOC_SUCCESS'

export const saveDocAttemp = payload=>({type:SAVE_DOC_ATTEMPT, payload});
export const saveDocSuccess = payload =>({type:SAVE_DOC_SUCCESS, payload});

export const DOCLIST_REQUEST = 'DOCLIST_REQUEST';
export const DOCLIST_RECEIVED = 'DOCLIST_RECEIVED';

export const docListRequest = payload =>({type:DOCLIST_REQUEST, payload});
export const docListReceived = payload =>({type:DOCLIST_RECEIVED, payload});


export const REMOVE_DOC_ATTEMPT = 'REMOVE_DOC_ATTEMPT'
export const REMOVE_DOC_SUCCESS = 'REMOVE_DOC_SUCCESS'

export const removeDocAttempt = payload =>({type:REMOVE_DOC_ATTEMPT, payload});
export const removeDocSuccess = payload =>({type:REMOVE_DOC_SUCCESS, payload});
