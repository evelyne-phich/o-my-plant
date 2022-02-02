export const CHANGE_FIELD = "CHANGE_FIELD";
/* export const UPDATE_PLANT = "UPDATE_PLANT"; */
export const HANDLE_CREATION_PLANT_SUBMIT = "HANDLE_CREATION_PLANT_SUBMIT";
export const CREATE_PLANT = "CREATE_PLANT";
/* export const FETCH_PLANT = "FETCH_PLANT"; */

export const changeField = (value, name) => ({
  type: CHANGE_FIELD,
  payload: {
    value: value,
    name,
  },
});
/*
export const updatePlant = () => ({
  type: UPDATE_PLANT,
});*/

export const handlePlantCreationSubmit = () => ({
  type: HANDLE_CREATION_PLANT_SUBMIT,
});
/*
export const fetchPlant = () => ({
  type: FETCH_PLANT,
});*/

export const createPlant = (plant) => ({
  type: CREATE_PLANT,
  payload: {
    ...plant,
  },
});
