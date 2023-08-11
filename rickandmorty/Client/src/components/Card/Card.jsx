import {
  DivCard,
  Button,
  Img,
  TextRectangle,
  Title,
} 
from "./DivCard";
import style from './buttonfav.module.css'
import { Link, useLocation } from "react-router-dom";
import { connect } from "react-redux";
import { addFav, removeFav } from "../../redux/actions";
import { useState, useEffect } from "react";

export function Card(props) {
  const { onClose, img, id, addFav, removeFav, myFavorites } = props;

  const location = useLocation();

  const [isFav, setIsFav] = useState(false);

  const handleFavorite = () => {
    isFav ? removeFav(props.id) : addFav(props)
    setIsFav(!isFav)
  };

  

   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === props.id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);

  return (
    <DivCard key={props.key}>
      {isFav ? (
        <button className={style.favButton} onClick={handleFavorite}>❤️</button>
      ) : (
        <button className={style.favButton} onClick={handleFavorite}>🤍</button>
      )}
      { location.pathname !== "/favorites" &&
        <Button onClick={onClose}>X</Button>}
      <TextRectangle>
        <Title>{props.name}</Title>
      </TextRectangle>
      {/* <TextRectangle><Subtitle>status: {props.status}</Subtitle></TextRectangle> */}
      {/* <TextRectangle><Subtitle>species: {props.species}</Subtitle></TextRectangle>
         <TextRectangle><Subtitle>gender: {props.gender}</Subtitle></TextRectangle>
         <TextRectangle><Subtitle>origin: {props.origin}</Subtitle></TextRectangle> */}
      <Link to={`/detail/${id}`}>
        <Img src={img} alt="character" />
      </Link>
    </DivCard>
  );
}
const MapStateToProps = (state) => {
   return {myFavorites: state.myFavorites}
}
const MapDispatchToProps = (dispatch) => {
  return {
    addFav: (character) => {
      dispatch(addFav(character));
    },

    removeFav: (id) => {
      dispatch(removeFav(id));
    },
  };
};

export default connect(MapStateToProps, MapDispatchToProps)(Card);
