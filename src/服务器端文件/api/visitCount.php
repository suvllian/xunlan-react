<?php
require_once("./../myfun/db.class.php"); 

$sql = "update visit_count set count = count+1";
$result = $db->query($sql);

$sql = "select * from visit_count";
$result = $db->fetchAll($sql);
echo $result[0]["count"];
