var canvas = document.createElement("canvas");
canvas.width = 352;
canvas.height = 224;
var c = canvas.getContext(canvas);

var keys = [];
addEventListener("keydown", function(e) {
    keys[e.keyCode] = true;
});
addEventListener("keyup", function(e) {
    keys[e.keyCode] = false;
});
