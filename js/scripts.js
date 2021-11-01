//Business Logic for Places We've been
function Places(location, landmark, timeOfYear, notes) {
  this.location = location;
  this.landmark = landmark;
  this.timeOfYear = timeOfYear;
  this.notes = notes;
}

//UI Logic
$(document).ready(function(){
  $(".clickable").click(function(){
    $(".places-showing").toggle();
    $(".places-hidden").toggle();   
    let place = new Places("LA", "Griffith Park", "July", "Sunny").val();
    let place1 = new Places("NYC", "Brooklyn Bridge", "September", "it was cool").val(); 
    let place2 = new Places("Boliva", "lake Titicaca", "winter", "Evo is the goat").val();
    let place3 = new Places("Tokyo", "Tokyo Skytree", "Spring", "Great Food!").val();
    let place4 = new Places("Barcelona", "Oldest synagogue in europe", "summer", "it was hot").val();
    $(".place").text(place);
    $(".place1").text(place1);
    $(".place2").text(place2);
    $(".place3").text(place3);
    $(".place4").text(place4);
  });
});
