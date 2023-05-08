<?php
 header("Access-Control-Allow-Origin: *");
 
function getIP(){
	if (!empty($_SERVER['HTTP_CLIENT_IP'])) {
    $ip = $_SERVER['HTTP_CLIENT_IP'];
} elseif (!empty($_SERVER['HTTP_X_FORWARDED_FOR'])) {
    $ip = $_SERVER['HTTP_X_FORWARDED_FOR'];
} else {
    $ip = $_SERVER['REMOTE_ADDR'];
}

	return $ip;

}

 error_reporting( E_ALL );
$data=$_REQUEST["img"];


list($type, $data) = explode(';', $data);
list(, $data)      = explode(',', $data);
$data = base64_decode($data);
$carpeta="fotos/";
$nombreBase="Navidad Magica en Unicenter ";
$filename=$carpeta.$nombreBase.date('mdY_hisa').'.jpg';
if( file_put_contents($filename, $data)){
	$url="http://".$_SERVER["HTTP_HOST"].$_SERVER["REQUEST_URI"];
	$url=substr($url, 0,strlen($url)-strlen(basename(__FILE__)));
	echo $url.$filename;
}else{
	echo -1;
}



?>