const express = require("express");
const router = express.Router();
const homeController = require("../controllers/home.controller");

// Get all details
router.get("/", homeController.getHome);

// get single detail
router.get("/:id", homeController.getSingleHome);

// create new entitiy
router.post("/:id", homeController.postHome);

// update created entity
router.put("/:id", homeController.putHome);

// delete specific entity
router.delete("/:id", homeController.deleteHome);

module.exports = router;
