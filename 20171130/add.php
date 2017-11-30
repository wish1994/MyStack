<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title>获取数据库数据</title>
	</head>
	<body>
		<?php
			
			//结束htmlform表单传来的数据
			$name=$_POST["xingming"];
			$age=$_POST["nianling"];
			$qq=$_POST["qqhao"];			
			
			$con=mysql_connect("localhost","root","root");

			mysql_select_db("kaoladeshujuku",$con);				
			mysql_query("INSERT INTO xuesheng(xingming,nianling,qqhao) VALUES('$name','$age','$qq')");

		?>
		
	</body>
</html>