const users = require("../utils/users")

function login (req, res) {
    const { email, password } = req.query
    let access = false;
    users.forEach((user) => {
        if (user.email === email && user.password === password){
            access = true
        } 
    })

    if (access) {
        res.status(200).json({access: true})
    } else {
        res.status(500).json({access: false})
    }
}

module.exports = login;