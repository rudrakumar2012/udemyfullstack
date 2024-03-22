$("button").click(function() {
    $("h1").css("color", "purple");
});

$("body").keydown(function(e) {
    $("h1").text(e.key);
});