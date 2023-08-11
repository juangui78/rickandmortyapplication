let myFavorites = [];

function postFav (req, res) {
    myFavorites.push(req.body)
    return res.status(200).json(myFavorites)
}


function deleteFav (req, res) {
    let { id } = req.params
    id = Number(id)
    console.log(id)
    
    myFavorites = myFavorites.filter((fav) => {
        fav.id != id
    })
    
    res.status(200).json(myFavorites)
}

module.exports = {
    postFav,
    deleteFav
}