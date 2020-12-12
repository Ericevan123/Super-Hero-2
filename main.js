canvas = new fabric.Canvas("myCanvas");

block_image_width = 30;
block_image_height = 30;

player_x = 10;
player_y = 10;

player_object="";

player_img="player.png";
block_img="";

function player_update(){
    fabric.Image.fromURL("player.png", function(Img) {
        player_object = Img;
        
        player_object.scale.scaleToWidth(150);
        player_object.scale.scaleHeight(140);
        player_object.set({
          top:player_y,
          left:player_x
        });
        canvas.add(player_object);
    });
}
function new_image(){
    fabric.Image.fromURL(get_image, function(Img) {
        block_image_object = Img;
        
       block_image_object.scale.scaleToWidth(150);
       block_image_object.scale.scaleToHeight(140);
       block_image_object.set({
          top:player_y,
          left:player_x
        });
        canvas.add(block_image_object);
    });
}

window.addEventListener("keydown",my_keydown);

function my_keydown(e){
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if(e.shift == true && keyPressed == '80'){
        console.log("p and shift");
        block_image_width = block_image_width + 10;
        block_image_height = block_image_height +10;
        document.getElementById("current_width").innerHTML = block_image_width;
        document.getElementById("current_height").innerHTML = block_image_height;
    }
    if(e.shift == true && keyPressed == '77'){
        console.log("m and shift");
        block_image_width = block_image_width - 10;
        block_image_height = block_image_height - 10;
        document.getElementById("current_width").innerHTML = block_image_width;
        document.getElementById("current_height").innerHTML = block_image_height;
    }
    if(keyPressed == '38'){
        up();
        console.log("up");
    }
    if(keyPressed == '40'){
        down();
        console.log("down");
    }
    if(keyPressed == '37'){
        left();
        console.log("left");
    }
    if(keyPressed == '39'){
        right();
        console.log("right");
    }
    if(keyPressed == '70'){
        new_image('iron_man_face.png');
        console.log("f")
    }
    if(keyPressed == '66'){
        new_image('spider_man_body.png');
        console.log("b")
    }
    if(keyPressed == '76'){
        new_image('hulk_legs.png');
        console.log("l")
    }
    if(keyPressed == '72'){
        new_image('captian_america_left_hand.png');
        console.log("h")
    }
    if(keyPressed == '82'){
        new_image('thor_right_hand.png');
        console.log("r")
    }
}