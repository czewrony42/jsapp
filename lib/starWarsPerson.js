const axios = require("axios")

const getStarWars = async (number)=>{
    let res = await axios.get(`https://swapi.dev/api/people/${number}/`)
    return res.data
}

module.exports.getStarWars = getStarWars;