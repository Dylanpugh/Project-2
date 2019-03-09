var db = require("../models");

module.exports = function(app) {
  app.get("/api/userData", function(req, res) {
    db.userData.findAll({}).then(function(dbExamples) {
      res.json(dbUserData);

    });
  })
  app.post("/api/userData",function(req,res){
    console.log("hello from route", req.body)
  db.userProfile.create(req.body).then(function(data){
  console.log("We Save", data);
  res.json(data);
  })
  
  })
}

