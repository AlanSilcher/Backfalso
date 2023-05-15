 const { allJokes } = require('../controllers/Controllers')
 
const getJokes = async (req, res) =>{
  const xd = await allJokes()
    res.status(200).json(xd)
}




module.exports = {
    getJokes
}