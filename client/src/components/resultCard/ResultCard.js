import React, { useContext } from "react";
import { ResultContext } from "../../contexts/ResultContext";
import CssBaseline from "@material-ui/core/CssBaseline";
// import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import {
  Wrapper,
  ImgElement,
  HeaderWrapper,
  Divider,
  LabelWrapper,
  Label,
  Text,
} from "./style";

import { colors } from "../../styles/colors";
import AddRecommendation from "../addRecommendation/AddRecommendation";
import Dialog from "@material-ui/core/Dialog";
// import DialogActions from "@material-ui/core/DialogActions";
// import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
// import DialogTitle from "@material-ui/core/DialogTitle";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";

const imgUrl =
  "https://www.themoviedb.org/t/p/w1280/sF1U4EUQS8YHUYjNl3pMGNIQyr0.jpg";

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Text variant="h6">{children}</Text>
      {onClose ? (
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

const ResultCard = ({ item, bookData }) => {
  const img = bookData.volumeInfo.imageLinks.thumbnail;
  const { onResultClick, resultOpen } = useContext(ResultContext);
  const [open, setOpen] = React.useState(false);
  console.log(bookData);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        More info
      </Button>

      <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        maxWidth="xl"
      >
        <HeaderWrapper>
          <DialogTitle
            id="customized-dialog-title"
            onClose={handleClose}
            style={{
              padding: "1% 0",
              width: "90vw",
              color: `${colors.MAIN_BLUE}`,
            }}
          >
            {item.title}
          </DialogTitle>
          {img && <ImgElement src={img} />}
          <AddRecommendation item={item} />
        </HeaderWrapper>

        <DialogContent dividers style={{ marginLeft: "0.5%" }}>
          <LabelWrapper>
            <Label>Type</Label>
            <Text>{item.type}</Text>
          </LabelWrapper>
          <Divider />
          {item.creator && (
            <LabelWrapper>
              <Label>Creator</Label>
              <Text>{item.creator}</Text>
            </LabelWrapper>
          )}
          <Divider />
          <LabelWrapper>
            <Label>Bravery Rate</Label>
            {item.braveryRate ? (
              <Text>{item.braveryRate}</Text>
            ) : (
              <Text>Be the first one to rate!</Text>
            )}
          </LabelWrapper>

          <LabelWrapper>
            <Label>Bravery Moments in the {item.type}:</Label>
            {item.selectedHeroismMoments ? (
              <ul style={{ listStyleType: "none", margin: 0, padding: "0" }}>
                {item.selectedHeroismMoments &&
                  item.selectedHeroismMoments.map((moment, i) => (
                    <li key={i}>{moment}</li>
                  ))}
              </ul>
            ) : (
              <Text>Be the first one to add bravery moments!</Text>
            )}
          </LabelWrapper>
          <Divider />

          <LabelWrapper>
            <Label>Recommendations</Label>
            {item.recommendations &&
              item.recommendations.map((rec, i) => (
                <Text key={i} paragraph style={{ fontSize: "12px" }}>
                  {rec}
                </Text>
              ))}
            {!item.recommendations && (
              <Text>Be the first one to recommend!</Text>
            )}
          </LabelWrapper>

          <LabelWrapper>
            <Label isPlot={true}>Plot</Label>
            <Text>{item.plot}</Text>
          </LabelWrapper>
        </DialogContent>
        <DialogActions>
          <span style={{ marginRight: "auto" }}>
            <AddRecommendation item={item} />
          </span>

          <Button
            onClick={handleClose}
            style={{
              color: `${colors.DARK_BLUE}`,
            }}
          >
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default ResultCard;
//  <Wrapper resultOpen={resultOpen}></Wrapper>
