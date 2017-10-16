
var gGameBox = {
	
	rows: 20,  
	
	cols: 20,  

	allTds: [],

	food: null, 

	snake: null, 


	clear: function() {
		for (var i = 0; i < gGameBox.allTds.length; i++) {
			for (var j = 0; j < gGameBox.allTds[i].length; j++) {
				gGameBox.allTds[i][j].className = "";
			}
		}
	},
	
	
	init: function() {
		
		var oTable = document.createElement("table");
		
		for (var i = 0; i < gGameBox.rows; i++)
		{
			
			var oTr = document.createElement("tr"); 
			
			
			var arr = [];
			
			for (var j = 0; j < gGameBox.cols; j++) {
				// 创建td
				var oTd = document.createElement("td"); 
				
				oTr.appendChild(oTd);
				
				arr.push(oTd);
			}
			gGameBox.allTds.push(arr);
			
			oTable.appendChild(oTr);
		}
		
		document.body.appendChild(oTable);
	},
	keyControl:function(){
		window.onkeydown=function(e){
			var k=e.keyCode;
			if(k==38){
				if(gGameBox.snake.direct=="down"){
					return;
				}else{
					gGameBox.snake.direct="up";
				}
			}else if(k==37){
				if(gGameBox.snake.direct=="right"){
					return;
				}else{
					gGameBox.snake.direct="left";
				}
			}else if(k==39){
				if(gGameBox.snake.direct=="left"){
					return;
				}else{
					gGameBox.snake.direct="right";
				}
			}else if(k==40){
				if(gGameBox.snake.direct=="up"){
					return;
				}else{
					gGameBox.snake.direct="down";
				}
			}
		}
	},
	start: function() {

		gGameBox.init(); 
		
		gGameBox.food = new Food(); 
		gGameBox.snake = new Snake();

		

		gGameBox.timer=setInterval(function() {


			gGameBox.clear();
			

			gGameBox.snake.move();


			gGameBox.food.show();

			gGameBox.keyControl();


		}, 300);

		
	}
};