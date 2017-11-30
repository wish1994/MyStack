<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <style>
        td{
            width:80px;
            height:40px;
        }
        .orange{
            background:orange;
        }
    </style>
</head>
<body>
    <table>
        <?php for($i = 0;$i < 21;$i ++){ ?>
            <tr <?php if($i % 2==0){echo "class='orange'";}?>>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>

        <?php }?>
    
    </table>
    
</body>
</html>