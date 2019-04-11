/* global moment */

// When the page loads, grab and display all of our chirps

function reloadPage() {
  location.reload();
}


$.get("/char", function(data){
  var char_table = "<h2>";
  char_table += data;
  char_table += "</h2>";

  $("#test").prepend(char_table);

});


$.get("/api/all", function(data) {

  if (data.length !== 0) {

    for (var i = 0; i < data.length; i++) {

      var row = $("<div>");
      row.addClass("chirp");

      row.append("<p>" + data[i].author + " chirped.. </p>");
      row.append("<p>" + data[i].body + "</p>");
      row.append("<p>At " + moment(data[i].created_at).format("h:mma on dddd") + "</p>");

      $("#chirp-area").prepend(row);

    }

  }

});

// When user chirps (clicks addBtn)
$("#chirp-submit").on("click", function(event) {
  event.preventDefault();

  // Make a newChirp object
  var newChirp = {
    name: $("#name").val().trim(),
    class: $("#class").val().trim(),
    battle_cry: $("#battle_cry").val().trim(),

    health: $("#health").val().trim(),
    attack: $("#attack").val().trim(),
    mana: $("#mana").val().trim(),

    created_at: moment().format("YYYY-MM-DD HH:mm:ss")
  };

  console.log(newChirp);



  // Send an AJAX POST-request with jQuery
  $.post("/api/new", newChirp)
    // On success, run the following code
    .then(function() {

      var row = $("<div>");
      row.addClass("chirp");

      row.append("<p>" + newChirp.name + "</p>");
      row.append("<p>" + newChirp.class + "</p>");
      row.append("<p>" + newChirp.battle_cry + "</p>");

      row.append("<p>" + newChirp.health + "</p>");
      row.append("<p>" + newChirp.attack + "</p>");
      row.append("<p>" + newChirp.mana + "</p>");


      row.append("<p>At " + moment(newChirp.created_at).format("h:mma on dddd") + "</p>");

      $("#chirp-area").prepend(row);

    });

  // Empty each input box by replacing the value with an empty string
  $("#name").val("");
  $("#class").val("");
  $("#battle_cry").val("");

  $("#health").val("");
  $("#attack").val("");
  $("#mana").val("");


  reloadPage();
});
