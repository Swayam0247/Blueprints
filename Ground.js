class Ground{
   
    constructor(x,y,width,heigth){

        var ground_option = {
            isStatic : true
        }
         
        this.body = Bodies.rectangle(x,y,width,heigth,ground_option);
        this.width= width;
        this.heigth = heigth;
        World.add(world,this.body);
   
    }

    display()
    {
        var pos = this.body.position
        
        rectMode(CENTER);
        rect(pos.x,pos.y,this.width,this.heigth);

    } 
}