<?php
require_once("./../myfun/db.class.php"); 
header('Access-Control-Allow-Origin:*');   
header('Access-Control-Allow-Headers:x-requested-with,content-type');  

$sql = "update visit_count set count = count+1";
$result = $db->query($sql);

$sql = "select * from visit_count";
$result = $db->fetchAll($sql);
echo $result[0]["count"];
