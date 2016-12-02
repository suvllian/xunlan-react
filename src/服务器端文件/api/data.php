<?php
require_once("./db.class.php");  

header('Access-Control-Allow-Origin:*');   
header('Access-Control-Allow-Headers:x-requested-with,content-type');  

$page = $_GET['page']-0;
$position = ($page-1)*16;

$sql = "select * from image_info limit ".$position.",16";
$result = $db->fetchAll($sql);
echo json_encode($result);
