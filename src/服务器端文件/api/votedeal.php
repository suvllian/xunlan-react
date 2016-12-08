<?php
require_once("./../myfun/db.class.php");  

// 同源策略控制
// header('Access-Control-Allow-Origin:*');   
// header('Access-Control-Allow-Headers:x-requested-with,content-type');  

/* 流程说明：
 * 一、Cookie限制投票
 * 1、用户首次加载页面，会设置Cookie，name为MD5("xunlan")，值为MD5("allow")。
 * 2、用户发送投票请求，首先判断是否存在name为MD5("xunlan")的Cookie，若存在则开始投票处理。
 * 3、设置投票的Cookie，该值的最后一位记录已经投票数，有效时间为一天。超出投票限制，则退出执行当前脚本。
 * 
 * 二、记录IP限制投票
 * 1、得到用户IP，查询该IP当日已投票次数，小于限制则进行下一步处理
 * 2、若是投票操作，则判断该用户是否投过该作品，投过则退出，没投过则增加票数，且记录投票信息。
 * 3、若是取消投票操作，则减少票数，且删除相应投票信息
 *
 * 三、返回值信息
 * 11：投票次数超过限制
 * 12：已经投过该作品
 */


// 接收到的参数
$way = trim($_POST['way']);
$id   = trim($_POST['id']);

// 如果收到的投票作品ID为空，则不做处理
if(empty($id)||empty($way)){
	exit();
}

// 操作cookie
$tickets    = md5("tickets");
$cookieName = md5("xunlan");

// setCookie($tickets,$ticketToken,time()-86400);

// 每日每人最多投票数
$maxTickets = "10";
$limitTikcets = 10;

// 记录投票的时间
$nowDays = date("Y-m-d",mktime());
$nowTime = mktime();

// 记录用户IP
$userIp = $_SERVER["REMOTE_ADDR"];


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
	
	// 查询该Ip当天投票次数
	$sql = "select * from voter_infor where vIp='$userIp' and vVoteDay = '$nowDays'";
	$rowsIp = $db->numRows($sql);

	if($rowsIp < $limitTikcets){
		
		// 根据get传参进行操作
		if($way==="add"){

			// 查询该IP是否投过该作品
			$sql = "select * from voter_infor where vIp='$userIp' and vVoteDay = '$nowDays' and vSelectId='$id'";
			$rows = $db->numRows($sql);

			if($rows!==0){

				// 当天已经投过该作品
				echo 12;
				exit();
			}

			// 记录IP 投票项目
			$sqlIp = "insert voter_infor(vIp,vVoteTime,vVoteDay,vSelectId) value('$userIp','$nowTime','$nowDays',$id)";
			$insertIp = $db->query($sqlIp);

			$sql = "update image_info set iCountVotes = iCountVotes +1 where iId=".$id;
			$result = $db->query($sql);
			
			$ticketNumber++;	
		}else if($way==="sub"){
			$sql = "update image_info set iCountVotes = iCountVotes -1 where iId=".$id;
			$result = $db->query($sql);
			$ticketNumber--;
			
			// 删除Ip对应的投票项目
			$sqlIp = "delete from voter_infor WHERE vIp='$userIp' AND vSelectId= $id";
			$insertIp = $db->query($sqlIp);
			
		}	
	}else{

		// 超出当天投票限制
		echo 11;
	}

	// 已投票数更新，更新cookie。
	$ticketToken = md5("xunlan").".".$ticketNumber;
    setCookie($tickets,$ticketToken,time()+86400);
}


