export const DISPLAY_USER_ALREADY_EXISTS_ERROR_MESSAGE =
  "DISPLAY_USER_ALREADY_EXISTS_ERROR_MESSAGE";

export const displayUserAlreadyExistsErrorMessage = (payload) => ({
  type: DISPLAY_USER_ALREADY_EXISTS_ERROR_MESSAGE,
  payload,
});
