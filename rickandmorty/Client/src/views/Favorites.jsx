import { connect, useDispatch } from "react-redux"
import Card from "../components/Card/Card"
import { filterCards, orderCards } from "../redux/actions";
import { useState } from "react";
export function Favorites (props) {
    const { myFavorites } = props;
    const [aux, setAux] = useState(false)
    const dispatch = useDispatch();

    const handleOrder = (event) => {
        dispatch(orderCards(event.target.value))
        setAux(!aux)
    }

    const handleFilter = (event) => {
        if (event.target.value === 'all') {
            dispatch(orderCards('A'))
            setAux(!aux)
        } else {
            dispatch(filterCards(event.target.value))
        }
        
    }


    return(
        <div>
            <div>
                <select onChange={handleOrder}>
                    <option value=''>Select an Order</option>
                    <option value='A'>Ascendente</option>
                    <option value='D'>Descendente</option>
                </select>

                <select onChange={handleFilter}>
                    <option value='all'>All</option>
                    <option value='Female'>Female</option>
                    <option value='Male'>Male</option>
                    <option value='Genderless'>Genderless</option>
                    <option value='unknown'>Unknown</option>
                </select>
            </div>
            
            {myFavorites && myFavorites.map((character) => {
                return <Card id= {character.id} 
                name={character.name}
                img={character.img} 
                key={character.id}
                />
            })}
        </div>
    )
}

const MapStateToProps = (state) => {
    return {myFavorites: state.myFavorites}
}


export default connect(MapStateToProps, null)(Favorites)