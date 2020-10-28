class mango {
    constructor(x, y){
      var options={
        isStatic: true
      }
     this.x=x;
     this.y=y;
     this.body = Bodies.rectangle(x,y,options);
     World.add(world,this.body);
    }
      display(){
      push();
      translate(this.body.position.x, this.body.position.y);
      imageMode(CENTER);
      image(this.image, this.x, this.y,0,0);
      pop();
      }
  
  
    }