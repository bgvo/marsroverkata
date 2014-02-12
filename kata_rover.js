
var obstacles = [[0,2], [2,2], [3,3], [1,3]];
var grid = new Grid(obstacles);
var rover = new Rover(0,0,"N");


function Rover (startPos_x,startPos_y,startOrientation){

    this.position_x = startPos_x;
    this.position_y = startPos_y;
    this.orientation = startOrientation;

    //Returns true if there is an obstacle in grid at point (x,y). Returns false if there is not.
    this.isObstacle = function(x,y,grid){
        for (var i = 0; i < grid.obstacles.length; i++) {
            if (grid.obstacles[i][0] === x){
                if (grid.obstacles[i][1] === y){
                    return true;
                }
            }
        };

        return false;
    }
    this.forward = function(){

        this.last_x = this.position_x;
        this.last_y = this.position_y;

        switch (this.orientation){
            case "N":
                if (this.position_y != 100){
                    this.position_y += 1;
                }else{
                    this.position_y = 1;
                }  
                break;
            case "S":
                if (this.position_y != 0){
                    this.position_y -= 1;
                }else{
                    this.position_y = 99;
                }
                break;
            case "E":
                if (this.position_x != 100){
                    this.position_x += 1;
                }else{
                    this.position_x = 1;
                }
                break;
            case "W":
                if (this.position_x != 0){
                    this.position_x -= 1;
                }else{
                    this.position_x = 99;
                }
                break;
            default:
                console.log("Error!! The rover got cracy!");
        }

        //If there is an obstacle, return false (note the NOT).
        if (this.isObstacle(this.position_x,this.position_y,grid)){
            this.position_x = this.last_x;
            this.position_y = this.last_y;
            return false;
        }else{
            return true;
        }
    }
    this.backward = function(){

        this.last_x = this.position_x;
        this.last_y = this.position_y;

        switch (this.orientation){
            case "N":
                this.position_y -= 1;
                break;
            case "S":
                this.position_y += 1;
                break;
            case "E":
                this.position_x -= 1;
                break;
            case "W":
                this.position_x += 1;
                break;
            default:
                console.log("Error!! The rover got cracy!");
        }

        //If there is an obstacle, return false (note the NOT).
        if (this.isObstacle(position_x,position_y,grid)){
            this.position_x = this.last_x;
            this.position_y = this.last_y;
            return false;
        }else{
            return true;
        }
    }
    this.left = function(){
        switch (this.orientation){
            case "N":
                this.orientation = "W";
                break;
            case "S":
                this.orientation = "E";
                break;
            case "E":
                this.orientation = "N";
                break;
            case "W":
                this.orientation = "S";
                break;
            default:
                console.log("Error!! The rover got cracy!");
        }
    }
    this.right = function(){
        switch (this.orientation){
            case "N":
                this.orientation = "E";
                break;
            case "S":
                this.orientation = "W";
                break;
            case "E":
                this.orientation = "S";
                break;
            case "W":
                this.orientation = "N";
                break;
            default:
                console.log("Error!! The rover got cracy!");
        }
    }
    this.move = function(directions){
        for (var i = 0; i < directions.length; i++) {
            switch (directions[i]){
                case "r":
                    this.right();
                    break;
                case "l":
                    this.left();
                    break;
                case "f":
                    if (!this.forward()){
                        console.log("Sorry, but there is an obstacle!");
                        return false;
                    }
                    break;
                case "b":
                if (!this.forward()){
                        console.log("Sorry, but there is an obstacle!");
                        return false;
                    }
                    break;
            }
        }
        return true;
    }
    this.print = function(){
        console.log("Rover's position: (" + this.position_x + "," + this.position_y + ") - Heading up " + this.orientation);
    }
}

//Grid is defined as a series of obstacles
//@param: obstacle; Type: Array; Description: must be a bidimensional array, each array being a point (x,y).
function Grid (obstacles){
    this.obstacles = obstacles;
}

rover.move("ffrfflbbrffff");
rover.print();
