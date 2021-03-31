import React, { useContext } from "react";
import { ResultContext } from "../../contexts/ResultContext";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { Wrapper, ImgElement, HeaderWrapper } from "./style";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import { makeStyles } from "@material-ui/core/styles";
import { colors } from "../../styles/colors";
import AddRecommendation from "../addRecommendation/AddRecommendation";

const imgUrl =
  "https://www.themoviedb.org/t/p/w1280/sF1U4EUQS8YHUYjNl3pMGNIQyr0.jpg";

const ResultCard = ({ item, bookData }) => {
  const img = bookData.volumeInfo.imageLinks.thumbnail;
  const { onResultClick, resultOpen } = useContext(ResultContext);
  console.log(bookData);

  return (
    <Wrapper resultOpen={resultOpen}>
      <CssBaseline />
      <Container maxWidth="sm" style={{ border: "1px solid black" }}>
        <HeaderWrapper>
          <CardHeader
            title={item.title}
            style={{ color: `${colors.MAIN_BLUE}` }}
          />
          <AddRecommendation item={item} />
        </HeaderWrapper>
        {img && <ImgElement src={img} />}
        <CardContent>
          <Typography component="p">Type: {item.type}</Typography>
          {item.creator && (
            <Typography component="p">Creator: {item.type}</Typography>
          )}

          {item.braveryRate ? (
            <Typography component="p">
              Bravery Rate: {item.braveryRate}
            </Typography>
          ) : (
            <Typography component="p">
              Bravery Rate: Be the first one to rate!
            </Typography>
          )}
        </CardContent>
        <CardContent>
          {item.selectedHeroismMoments && (
            <Typography style={{ display: "inline" }}>
              Bravery Moments in the {item.type}:
            </Typography>
          )}
          <ul style={{ listStyleType: "none", margin: 0, padding: "0" }}>
            {item.selectedHeroismMoments &&
              item.selectedHeroismMoments.map((moment, i) => (
                <li key={i}>{moment}</li>
              ))}
          </ul>
        </CardContent>
        <CardContent>
          {item.recommendations ? (
            <Typography component="p">Recommendations:</Typography>
          ) : (
            <Typography component="p">
              Recommendations: Be the first one to recommend!
            </Typography>
          )}
          {item.recommendations &&
            item.recommendations.map((rec, i) => (
              <Typography key={i} paragraph style={{ fontSize: "12px" }}>
                {rec}
              </Typography>
            ))}
        </CardContent>
        <CardContent>
          <Typography style={{ textDecoration: "underline", lineHeight: 1.5 }}>
            Plot
          </Typography>
          <Typography paragraph style={{ fontSize: "12px" }}>
            {item.plot}
          </Typography>
        </CardContent>
      </Container>
    </Wrapper>
  );
};

export default ResultCard;
/*        {
         item.selectedHeroismMoments && (
           <Typography
             variant="body2"
             color="textSecondary"
             component="p"
             style={{ display: "inline" }}
           >
             Bravery Moments (in {item.type}):
           </Typography>
         );
       }
       {
         item.selectedHeroismMoments &&
           item.selectedHeroismMoments.map((moment) => <span>{moment}, </span>);
       } */
