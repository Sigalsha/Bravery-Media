import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { useForm, Controller } from "react-hook-form";
import Input from "@material-ui/core/Input";
import Select from "@material-ui/core/Select";

export default function AddRecommendation({ props }) {
  const [open, setOpen] = React.useState(false);
  const { register, errors, handleSubmit } = useForm();
  const [indexes, setIndexes] = React.useState([]);
  const [counter, setCounter] = React.useState(0);

  const onSubmit = (data) => {
    console.log(JSON.stringify(data));
  };
  console.log(errors);

  const addBraveryMoment = () => {
    setIndexes((prevIndexes) => [...prevIndexes, counter]);
    setCounter((prevCounter) => prevCounter + 1);
  };

  const removeBraveryMoment = (index) => () => {
    setIndexes((prevIndexes) => [
      ...prevIndexes.filter((item) => item !== index),
    ]);
    setCounter((prevCounter) => prevCounter - 1);
  };

  const clearBraveryMoments = () => {
    setIndexes([]);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Open form dialog
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">
          Recommend "{props.title}"
        </DialogTitle>
        <DialogContent>
          <form onSubmit={handleSubmit(onSubmit)}>
            <label>Name</label>
            <input
              type="text"
              name="Name"
              placeholder="add your name"
              ref={register({ required: true, maxLength: 80, minLength: 2 })}
            />
            <br />
            <label>
              Rate the level of bravery of the {props.searchType} (from 1 to 10)
            </label>
            <select name="bravery rate" ref={register({ required: true })}>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
            <br />
            <label></label>
            {indexes.map((index) => {
              const fieldName = `moments[${index}]`;
              return (
                <fieldset name={fieldName} key={fieldName}>
                  <label>
                    Fill the part that reflects the bravery (minutes in movie,
                    page numbers in book, line number in article/song)
                    <input
                      type="text"
                      name={`${fieldName}.moment`}
                      ref={register}
                    />
                  </label>

                  <button type="button" onClick={removeBraveryMoment(index)}>
                    Remove
                  </button>
                </fieldset>
              );
            })}

            <button type="button" onClick={addBraveryMoment}>
              Add Friend
            </button>
            <button type="button" onClick={clearBraveryMoments}>
              Clear Friends
            </button>

            <br />
            <label>Why do you think this parts represent bravery acts?</label>
            <input
              type="textarea"
              name="recommendation description"
              placeholder="explain why are you recommending this parts"
              ref={register({ required: true, maxLength: 300, minLength: 2 })}
            />
            <input type="submit" />
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

{
  /* <DialogContentText>
            To subscribe to this website, please enter your email address here.
            We will send updates occasionally.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
          /> */
}
