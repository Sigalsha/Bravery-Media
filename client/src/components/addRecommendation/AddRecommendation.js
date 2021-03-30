import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { useForm, Controller } from "react-hook-form";
import { colors } from "../../styles/colors";
import {
  LabelWrapper,
  Label,
  Input,
  StyledButton,
  ErrorAlert,
  Textarea,
  Divider,
} from "./style";

export default function AddRecommendation({ props }) {
  const [open, setOpen] = React.useState(false);
  const { register, errors, handleSubmit } = useForm();
  const [indexes, setIndexes] = React.useState([]);
  const [counter, setCounter] = React.useState(0);

  const onSubmit = (data) => {
    console.log(data);
    setOpen(false);
  };
  console.log("errors", errors);

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
      <Button
        variant="outlined"
        style={{
          color: `${colors.DARK_BLUE}`,
          marginLeft: "1.5%",
          backgroundColor: `${colors.GREY}`,
        }}
        onClick={handleClickOpen}
      >
        Add a recommendation
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
        maxWidth="90vw"
      >
        <DialogTitle
          style={{
            padding: "1% 2.5%",
            width: "90vw",
            color: `${colors.DARK_BLUE}`,
          }}
        >
          Recommend "{props.title}" by {props.creator}
        </DialogTitle>
        <DialogContent>
          <form onSubmit={handleSubmit(onSubmit)}>
            <LabelWrapper>
              <Label>Name</Label>
              <Input
                type="text"
                name="name"
                placeholder="add your name"
                ref={register({ required: true, maxLength: 80, minLength: 2 })}
              />
              {errors.name && "name is required"}
            </LabelWrapper>
            <Divider />
            <LabelWrapper>
              <Label>
                Rate the level of bravery of the {props.searchType} (from 1 to
                10)
              </Label>
              <select name="braveryRate" ref={register({ required: true })}>
                <option disabled selected value>
                  select a rate level
                </option>
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
              {errors.braveryRate && (
                <ErrorAlert>"please rate the level of bravery"</ErrorAlert>
              )}
            </LabelWrapper>
            <Divider />
            <LabelWrapper>
              <Label>
                Fill the part that reflects the bravery (minutes in movie, page
                numbers in book, line number in article/song)
              </Label>
              {indexes.map((index) => {
                const fieldName = `moments[${index}]`;
                return (
                  <fieldset name={fieldName} key={fieldName}>
                    <Label>Add part (minute/ page number/ line number)</Label>
                    <Input
                      type="number"
                      name={`${fieldName}.moment`}
                      placeholder="add only numbers please"
                      ref={register({ minLength: 1, pattern: /^[0-9]*$/ })}
                    />
                    {errors[fieldName] && "must contain numbers only"}

                    <StyledButton
                      type="button"
                      onClick={removeBraveryMoment(index)}
                    >
                      Remove
                    </StyledButton>

                    {errors[fieldName] && "must contain numbers only"}
                  </fieldset>
                );
              })}

              <StyledButton type="button" onClick={addBraveryMoment}>
                Add a bravery part
              </StyledButton>

              <StyledButton type="button" onClick={clearBraveryMoments}>
                Clear all parts
              </StyledButton>

              {counter === 0 && (
                <ErrorAlert>Please add a bravery part</ErrorAlert>
              )}
            </LabelWrapper>
            <Divider />
            <LabelWrapper>
              <Label>Why do you think this parts represent bravery acts?</Label>
              <Textarea
                isTextArea={true}
                name="recommendation description"
                placeholder="explain why are you recommending this parts"
                ref={register({
                  required: true,
                  maxLength: 300,
                  minLength: 2,
                })}
              />
            </LabelWrapper>
            <Input type="submit" isSubmit={true} />
          </form>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleClose}
            style={{
              color: `${colors.DARK_BLUE}`,
            }}
          >
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
