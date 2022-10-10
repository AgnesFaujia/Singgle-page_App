$(document).ready(function () {
  $("#home_selector").click(() => {
    $(".contact").slideUp(500);
    $(".tugas_tugas").slideUp(500)
    $(".home").toggle(500);
  });
  $("#tugas").click(() => {
    $(".contact").slideUp(500);
    $(".home").slideUp(500)
    $(".tugas_tugas").toggle(500);
  });
  $("#contact_selector").click(() => {
    $(".home").slideUp(500)
    $(".tugas_tugas").slideUp(500);
    $(".contact").toggle(500);
  });

});