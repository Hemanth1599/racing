canvas = document.getElementById("mycanvas");
ctx = canvas.getContext("2d");

car_width= 100;
car_height= 90;

car_x= 350;
car_y= 250;

background_image= "racing.jpg";
car_image="car1.png";
function add() {
    background_img = new Image();
    background_img.onload= uploadbackground;
    background_img.src=background_image;
    
    car_img = new Image();
    car_img.onload= uploadcar;
    car_img.src=car_image;
}

function uploadbackground() {
    ctx.drawImage(background_img,0,0,canvas.width,canvas.height);
}

function uploadcar() {
    ctx.drawImage(car_img,car_x,car_y,car_width,car_height);
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
    keypress=e.keyCode;
    console.log(keypress);
    if(keypress == "38"){
        up();
        console.log("up");
    }

    if(keypress == "40"){
        down();
        console.log("down");
    }

    if(keypress == "37"){
        left();
        console.log("left");
    }

    if(keypress == "39"){
        right();
        console.log("right");
    }
}

function up(){
    if(car_y >=0){
        car_y=car_y - 30;
        console.log("when up is pressed, x =" + car_x + "| y = " + car_y);
        uploadbackground();
        uploadcar();
    }
}

function down(){
    if(car_y <= 500){
        car_y=car_y + 30;
        console.log("when up is pressed, x =" + car_x + "| y = " + car_y);
        uploadbackground();
        uploadcar();
    }
}

function left(){
    if(car_x >=0){
        car_x=car_x - 30;
        console.log("when up is pressed, x =" + car_x + "| y = " + car_y);
        uploadbackground();
        uploadcar();
    }
}

function right(){
    if(car_x <=700){
        car_x=car_x + 30;
        console.log("when up is pressed, x =" + car_x + "| y = " + car_y);
        uploadbackground();
        uploadcar();
    }
}