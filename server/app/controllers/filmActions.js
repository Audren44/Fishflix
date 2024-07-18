
const tables = require("../../database/tables");


const browse = async (req, res, next) => {
  try {
    
    const films = await tables.film.readAll();

    
    res.json(films);
  } catch (err) {
    
    next(err);
  }
};


module.exports = {
  browse,
};
