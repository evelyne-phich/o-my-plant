export const CHANGE_FIELD = "CHANGE_FIELD";
export const UPDATE_PLANT = "UPDATE_PLANT";
export const HANDLE_UPDATE_PLANT_SUBMIT = "HANDLE_UPDATE_PLANT_SUBMIT";
export const SAVE_PLANT = "SAVE_PLANT";
export const FETCH_PLANT = "FETCH_PLANT";

export const changeField = (value, name) => ({
  type: CHANGE_FIELD,
  payload: {
    value: value,
    name,
  },
});

export const updatePlant = () => ({
  type: UPDATE_PLANT,
});

export const handlePlantUpdateSubmit = () => ({
  type: HANDLE_UPDATE_PLANT_SUBMIT,
});

export const fetchPlant = () => ({
  type: FETCH_PLANT,
});

export const savePlant = (plant) => ({
  type: SAVE_PLANT,
  payload: {
    ...plant,
  },
});
