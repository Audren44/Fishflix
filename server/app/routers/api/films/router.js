const express = require("express");

const router = express.Router();


const { browse } = require("../../../controllers/filmActions");

// const { browse, read, add } = require("../../../controllers/filmActions");


router.get("/", browse);


module.exports = router;

