<?php
require_once("./../myfun/db.class.php");  

// 同源策略控制
// header('Access-Control-Allow-Origin:*');   
// header('Access-Control-Allow-Headers:x-requested-with,content-type');  


// 接收到的参数
$way = $_GET['way'];
$id   = $_GET["id"];

// 如果收到的投票作品ID为空，则不做处理
if(empty($id)){
	exit;
}

// 操作cookie
$tickets    = md5("tickets");
$cookieName = md5("xunlan");

// setCookie($tickets,$ticketToken,time()-86400);

// 每日每人最多投票数
$maxTickets = "10";

// 如果登录的token为空，则退出。
if (empty($_COOKIE[$cookieName])) {
    exit();
}else{

	// 如果投票token为空，则设已投票数为0，否则截断token得到该用户已经投票数。
	if(empty($_COOKIE[$tickets])){
		$ticketNumber = 0;
	}else{
		$cookieNumber = $_COOKIE[$tickets];	

		// 票数大于10时，应截断两位
		$ticketNumber = substr($cookieNumber, strpos($cookieNumber,".")+1, 2);

		// 将该用户投票数与最大限制投票数进行比较。字符串进行比较
		if($ticketNumber >= $maxTickets || $ticketNumber < "0"){

			// 超出投票数量限制
			echo 11;
			exit();
		}
	}
	
	// 根据get传参进行操作
	if($way==="add"){
		$sql = "update image_info set iCountVotes = iCountVotes +1 where iId=".$id;
		$ticketNumber++;
	}else if($way==="sub"){
		$sql = "update image_info set iCountVotes = iCountVotes -1 where iId=".$id;
		$ticketNumber--;
	}
	$result = $db->query($sql);

	// 已投票数更新，更新cookie。
	$ticketToken = md5("xunlan").".".$ticketNumber;
    setCookie($tickets,$ticketToken,time()+86400);
}


