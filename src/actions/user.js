export const CHANGE_FIELD = "CHANGE_FIELD";
export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";
export const SUBSCRIBE = "SUBSCRIBE";
export const SAVE_SUBSCRIPTION = "SAVE_SUBSCRIPTION";
export const SAVE_USER = "SAVE_USER";
export const FETCH_USER = "FETCH_USER";
export const UPDATE_PROFILE = "UPDATE_PROFILE";
export const HANDLE_UPDATE_PROFILE_SUBMIT = "HANDLE_UPDATE_PROFILE_SUBMIT";

export const changeField = (value, name) => ({
  type: CHANGE_FIELD,
  payload: {
    value: value,
    name,
  },
});

export const updateProfile = () => ({
  type: UPDATE_PROFILE,
});

export const handleProfileUpdateSubmit = () => ({
  type: HANDLE_UPDATE_PROFILE_SUBMIT,
});

export const login = () => ({
  type: LOGIN,
});

export const subscribe = () => ({
  type: SUBSCRIBE,
});

export const logout = () => ({
  type: LOGOUT,
});

export const saveUser = (user) => ({
  type: SAVE_USER,
  payload: {
    ...user,
  },
});

export const saveSubscription = () => ({
  type: SAVE_SUBSCRIPTION,
});

export const fetchUser = () => ({
  type: FETCH_USER,
});
