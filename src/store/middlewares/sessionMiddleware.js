const STORAGE_KEY = 'SESSION_STATE';

export const sesionSaver = store => next => action => {
    const res = next(action);
    window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(store.getState()));
    return res;
}

export function getSavedSession() {
    const savedSession = window.sessionStorage.getItem(STORAGE_KEY);

    if (!savedSession) return undefined;
    try {
        return JSON.parse(savedSession);
    } catch (e) {
        return undefined;
    }
}