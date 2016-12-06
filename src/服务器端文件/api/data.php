<?php
require_once("./../myfun/db.class.php");  

header('Access-Control-Allow-Origin:*');   
header('Access-Control-Allow-Headers:x-requested-with,content-type');  
header('Content-Type:application/json');


$cookieName = md5("xunlan");
$cookieContent = md5("allow");
if (empty($_COOKIE[$cookieName])) {
    setCookie($cookieName,$cookieContent,time()+86400);
}

$page = $_GET['page']-0;

if($page>1){
	$pageNumber = ($page-1)*16;
	$sql = "select * from image_info limit ".$pageNumber.",16";
	$result = $db->fetchAll($sql);
	echo json_encode($result);
}





