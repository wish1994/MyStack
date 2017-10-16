
function Snake() {

	this.arr = [
		{x: 5, y: 1},
		{x: 4, y: 1},
		{x: 3, y: 1},
		{x: 2, y: 1},
		{x: 1, y: 1}
	];


	this.direct = "down";


	this.fresh();
}


Snake.prototype.fresh = function() {

	for (var i = 0; i < this.arr.length; i++)
	{

		var x = this.arr[i].x;
		var y = this.arr[i].y;

		gGameBox.allTds[y][x].className = "snake"
	}
}

Snake.prototype.move = function() {
	
	var x = this.arr[0].x;
	var y = this.arr[0].y;
	
	if(x>gGameBox.cols||y>gGameBox.rows||x<0||y<0){
		clearInterval(gGameBox.timer);
		alert("GG了,蛇已烟消云散");
		return ;
	}
	if (x == gGameBox.food.x && y == gGameBox.food.y)
	{
		this.arr.unshift({x: x, y: y});
	
		gGameBox.food.change();
	
		
		this.fresh();
	
		return ;
	}

	if (this.direct == "right")
	{
		x++;
	}
    else if (this.direct == "down")
    {
		y++;
    }else if(this.direct=="up"){
		y--;
	}else if(this.direct=="left"){
		x--;
	}

	this.arr.unshift({x: x, y: y});

	this.arr.pop();

	this.fresh();



}
