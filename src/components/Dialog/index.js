import { useState, forwardRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";

import { deletePlant } from "../../actions/plant";

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function AlertDialogSlide({ open, onCloseClick }) {
  const dispatch = useDispatch();
  return (
    <div>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={onCloseClick}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>
          {"Souhaitez-vous réellement supprimer cette plante?"}
        </DialogTitle>
        <DialogActions>
          <Button
            onClick={() => {
              onCloseClick();
              dispatch(deletePlant());
            }}
          >
            Oui
          </Button>
          <Button onClick={onCloseClick}>Non</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
