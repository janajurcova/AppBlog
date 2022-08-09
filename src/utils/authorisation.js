import React, {
    createContext,
    useCallback,
    useContext,
    useMemo,
    useState,
} from 'react';

export const initialState = {
    access_token: null,
    username: null,
};
