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

if(!empty($_GET['page'])){

	$page = $_GET['page']-0;
	$pageNumber = ($page-1)*16;
	$sql = "select * from image_info limit ".$pageNumber.",16";
	$result = $db->fetchAll($sql);

	// 返回JSON格式的数据
	echo json_encode($result);
}

if(!empty($_GET['info'])){

	// 进行转义
	$serach = addslashes($_GET['info']);
	$sql = "select * from image_info where iTopic='$serach'";
	$result = $db->fetchAll($sql);

	// 返回JSON格式的数据
	echo json_encode($result);
}

