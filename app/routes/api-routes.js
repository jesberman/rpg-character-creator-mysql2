// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
var connection = require("../config/connection.js");

// Routes
// =============================================================
module.exports = function(app) {
  // Get all chirps

  app.get("/char", function(req,res){
    var char_query = "SELECT * FROM characters2";
    
    connection.query(char_query, function(err, result){
      if (err) throw err;
      var i;
      var char_queryStringified = JSON.stringify(result);

      var table = "<div id='char-table'>";
      table += "<h2 id='char-table-head'>Character Table</h2>";
      table += "<table style='width:100%'>";

      table += "<tr>";

      table += "<th style='visibility: hidden;' class='table-listing'>";
      table += "Image";
      table += "</th>";

      table += "<th class='table-listing'>";
      table += "Name";
      table += "</th>";

      table += "<th>";
      table += "Class";
      table += "</th>";

      table += "<th>";
      table += "Attack";
      table += "</th>";

      table += "<th>";
      table += "Health";
      table += "</th>";

      table += "<th>";
      table += "Mana";
      table += "</th>";

      table += "<th>";
      table += "Battle Cry";
      table += "</th>";

      table += "</tr>";

      for (i = 0; i < result.length; i++) {
        table += "<tr>";

        table += "<td>";

        if(result[i].class === "Paladin"){
          table += "<img style='height:100px; width:100px;' src='images/paladin.png'>";
        }
        else if(result[i].class === "Pirate") {
          table += "<img style='height:100px; width:100px;' src='images/pirate.png'>";
        }
        else if(result[i].class === "Bard") {
          table += "<img style='height:100px; width:100px;' src='images/bard.png'>";
        }
        else if(result[i].class === "Beast Master") {
          table += "<img style='height:100px; width:100px;' src='images/beast-master.png'>";
        }
        else if(result[i].class === "Berserker") {
          table += "<img style='height:100px; width:100px;' src='images/berserker.png'>";
        }
        else if(result[i].class === "Priest") {
          table += "<img style='height:100px; width:100px;' src='images/priest.png'>";
        }
        else if(result[i].class === "Sorcerer") {
          table += "<img style='height:100px; width:100px;' src='images/sorcerer.png'>";
        }
        else if(result[i].class === "Hunter") {
          table += "<img style='height:100px; width:100px;' src='images/hunter.png'>";
        }
        table += "</td>";

        table += "<td class='table-listing'>";
        table += "<h2>" + result[i].name + "</h2>";
        table += "</td>";
        
        table += "<td>";
        table += "<h2>" + result[i].class + "</h2>";
        table += "</td>";

        table += "<td>";
        table += "<h2>" + result[i].attack + "</h2>";
        table += "</td>";

        table += "<td>";
        table += "<h2>" + result[i].health + "</h2>";
        table += "</td>";

        table += "<td>";
        table += "<h2>" + result[i].mana + "</h2>";
        table += "</td>";

        table += "<td>";
        table += "<h2>" + result[i].battle_cry + "</h2>";
        table += "</td>";

        table += "</tr>";
      }
      table += "</table>";

      table += "</div>"

      res.json(table);
    });
  });




  app.get("/api/all", function(req, res) {
    var dbQuery = "SELECT * FROM chirps";

    connection.query(dbQuery, function(err, result) {
      if (err) throw err;
      res.json(result);
    });
  });

  // Add a chirp
  app.post("/api/new", function(req, res) {
    console.log("Chirp Data:");
    console.log(req.body);

    var dbQuery = "INSERT INTO characters2 (name, battle_cry, class, health, attack, mana, created_at) VALUES (?,?,?,?,?,?,?)";

    connection.query(dbQuery, [req.body.name, req.body.battle_cry, req.body.class, req.body.health, req.body.attack, req.body.mana, req.body.created_at], function(err, result) {
      if (err) throw err;
      console.log("Chirp Successfully Saved!");
      res.end();
    });
  });
};
