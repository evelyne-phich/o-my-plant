import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Field from "../Field";
import { changeField } from "../../actions/user";

import "./style.scss";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

export default function TransitionsModal() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const currentState = useSelector((state) => state);

  const dispatch = useDispatch();

  const changeFieldInput = (value, name) => {
    console.log(value);
    dispatch(changeField(value, name));
  };

  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <form className="user-plant-form">
              <h2>Titre</h2>
              <p>Surnom</p>
              <hr className="divider" />
              <img
                src="https://res.cloudinary.com/dtnoanxmt/image/upload/v1643367885/sample.jpg"
                alt=""
              ></img>
              <h3>Description</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                tristique velit vel nisl pellentesque, eu finibus erat dapibus.
                Pellentesque tempor odio aliquam odio lacinia, sagittis feugiat
                mi accumsan. Donec eget risus felis. Mauris justo magna, finibus
                eget molestie id, interdum quis lectus. Curabitur pretium enim
                quis magna placerat feugiat. Curabitur hendrerit placerat metus,
                a tempus nisi vestibulum at. In vel neque rhoncus, tempus nisl
                sit amet, rutrum tellus. Etiam finibus semper urna et auctor.
                Aliquam erat volutpat.{" "}
              </p>
              <h3>Entretien</h3>
              <div classname="form-part-left">
                <h4>Fréquence d'arrosage</h4>
                <label htmlFor="wateringfrequency">Périodicité</label>
                <Field
                  name="wateringfrequency"
                  type="text"
                  className="plant-input-field"
                  onChange={changeFieldInput}
                  value={currentState.plant.wateringfrequency || ""}
                  disabled={currentState.plant.infoUpdateDisabled}
                />
                <label htmlFor="numberoftimes">Nombre de fois</label>
                <Field
                  name="numberoftimes"
                  type="number"
                  className="plant-input-field"
                  onChange={changeFieldInput}
                  value={currentState.plant.numberoftimes || ""}
                  disabled={currentState.plant.infoUpdateDisabled}
                />
              </div>
              <div classname="form-part-middle">
                <label htmlFor="site">Emplacement</label>
                <Field
                  name="site"
                  type="text"
                  className="plant-input-field"
                  onChange={changeFieldInput}
                  value={currentState.plant.site || ""}
                  disabled={currentState.plant.infoUpdateDisabled}
                />
                <label htmlFor="exposure">Exposittion</label>
                <Field
                  name="exposure"
                  type="text"
                  className="plant-input-field"
                  onChange={changeFieldInput}
                  value={currentState.plant.exposure || ""}
                  disabled={currentState.plant.infoUpdateDisabled}
                />
              </div>
              <div classname="form-part-right">
                <label htmlFor="trimming">Taillage</label>
                <Field
                  name="trimming"
                  type="text"
                  className="plant-input-field"
                  onChange={changeFieldInput}
                  value={currentState.plant.trimming || ""}
                  disabled={currentState.plant.infoUpdateDisabled}
                />
                <label htmlFor="reppoting">Rempotage</label>
                <Field
                  name="reppoting"
                  type="text"
                  className="plant-input-field"
                  onChange={changeFieldInput}
                  value={currentState.plant.reppoting || ""}
                  disabled={currentState.plant.infoUpdateDisabled}
                />
              </div>

              <button>Modifier</button>
            </form>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
