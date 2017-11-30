<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>Document</title>
    </head>
    <body>
        <?php 
            $con = mysql_connect("localhost","root","root");
            mysql_select_db("kaoladeshujuku",$con);
            $result = mysql_query("SELECT * FROM xuesheng");
            while($row = mysql_fetch_array($result)){
                print_r ("姓名是：".$row["xingming"]."&nbsp;&nbsp;");
                print_r ("年龄是：".$row["nianling"]."&nbsp;&nbsp;");
                print_r ("QQ号是：".$row["qqhao"]);
                echo "<br/>";
            };
            mysql_close($con);
        ?>
        
    </body>
</html>