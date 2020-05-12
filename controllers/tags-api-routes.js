// *********************************************************************************
// tags-api-routes.js - Routes for displaying and saving data to the tags table
// *********************************************************************************

// Dependencies
// =============================================================
const db = require("../models");

// https://medium.com/@hz.bird55/using-sequelize-bulkcreate-method-with-mysql-database-1ebd1bae2109

db.Tags.findAll({
  where: {id: 1},
  include: [{
    model: db.Resources,
    required: true
  }]
})
.then(function(data) {
  console.log(data);
});

// Routes
// =============================================================
module.exports = function(app) {
  // Find all tags
  app.get("/api/tags", function(req, res) {
    db.Tags.findAll({})
      .then(function(data) {
        res.json(data);
      })
      .catch(function(err) {
        res.status(500).send(err);
      });
  });

  // Create new tag
  app.post("/api/tags", function(req, res) {
    db.Tags.create(req.body)
      .then(function(data) {
        res.json(data);
      })
      .catch(function(err) {
        res.status(500).send(err);
      });
  });

};

