import React, { useContext, useState, useEffect } from "react";
import axios from "axios";
import { ResultContext } from "../../contexts/ResultContext";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const URL = "https://randomuser.me/api/?results=5";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    fontFamily: "Roboto",
  },
  media: {
    height: 0,
    paddingTop: "21.1875%", // 16:9
    //
    // 28.25%
    backgroundSize: "auto",
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function SearchResult({ item }) {
  const { onResultClick, open } = useContext(ResultContext);
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  console.log(item);

  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const result = await axios(URL);
        setData(result.data.results[0].picture.thumbnail);
        console.log(result.data.results[0].picture.thumbnail);
        setIsLoading(false);
      } catch (err) {
        console.log("err: ", err);
      }
    };

    fetchData();
    return () => setIsLoading(false);
  }, []);

  return (
    <Card className={classes.root} open={open}>
      <CardHeader title={item.title} />
      {!isLoading && data && (
        <CardMedia className={classes.media} image={data} title={item.title} />
      )}
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          Type: {item.type}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          Creator: {item.creator}
        </Typography>

        {item.braveryRate ? (
          <Typography variant="body2" color="textSecondary" component="p">
            Bravery Rate: {item.braveryRate}
          </Typography>
        ) : (
          <Typography variant="body2" color="textSecondary" component="p">
            Bravery Rate: Be the first one to rate!
          </Typography>
        )}
      </CardContent>
      <CardActions disableSpacing>
        {/* <IconButton onClick={} /> */}
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
          <Typography>Plot</Typography>
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph style={{ fontSize: "14px" }}>
            {item.plot}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
