const axios = require("axios")
const URL = "https://rickandmortyapi.com/api/character/";

function getCharById (req, res) {
    const {id} = req.params
    axios(`${URL}${id}`)
        .then(({data}) => {
            if (data.name) {
                let character = {
                    "id": data.id,
                    "status": data.status,
                    "name": data.name,
                    "species": data.species,
                    "origin": data.origin,
                    "image": data.image,
                    "gender": data.gender
                }

                res.status(200).json(character)
            } else {
                res.status(404).send("Not found")
            }
        })
        .catch((error) => {
            res.status(500).json({error:error.message})
        })
        
}


module.exports = getCharById