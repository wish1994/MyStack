
/*
一、 找对象
				属性				      方法
游戏引擎     场景、蛇、食物			    开始、结束

二、 实现对象
	游戏引擎
*/
 
// 定义  游戏引擎  对象
var gGameBox = {
	
	rows: 10,  // 行数
	
	cols: 10,  // 列数
	
	// 方法： 游戏开始
	start: function() {
		// 场景布置好, 用表格来做
		var oTable = document.createElement("table");
	
		for (var i = 0; i < gGameBox.rows; i++)
		{
			// 创建tr
			var oTr = document.createElement("tr"); 

			for (var j = 0; j < gGameBox.cols; j++) {
				// 创建td
				var oTd = document.createElement("td"); 

				oTr.appendChild(oTd);
			}

			oTable.appendChild(oTr);
		}

		// 添加到body
		document.body.appendChild(oTable);
	}
};