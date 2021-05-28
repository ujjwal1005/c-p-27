function keypressed(){
    if(keyCode === UP_ARROW){

    Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,
        {x: -50,y: -45});
    }
}
