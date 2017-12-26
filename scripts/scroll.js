$(document).ready(function() {

  var names = ["Andie Orduna", "Cedric Castillo", "Christine Yang", "Kelly Fam"];
  $("li").on("click", function() {
    var name = $(this).text();
    var num = names.indexOf(name) + 1;
    console.log(num);
    $('html, body').animate({
          scrollTop: $("#resident" + num).offset().top
      }, 600);
  });
});
