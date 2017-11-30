<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    
    <?php 
        echo 1;
        $arr=array("东","南","西","北");
        for($i=0;$i<count($arr);$i++){
            echo "<h4>$i</h4>";
            echo "<span>$arr[$i]</span>";
        };
    ?>
</body>
</html>