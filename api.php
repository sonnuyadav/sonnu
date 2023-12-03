<?php
 header("Access-Control-Allow-Origin: *");
 header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
 header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, X-Requested-With");

 $data = json_decode(file_get_contents('php://input'), true);
if(!empty($data['name']) && !empty($data['email']) && !empty($data['message'])){

$email = isset($data['email']) ? trim($data['email']) :'';
$name = isset($data['name']) ? trim($data['name']) :'';
$mess = isset($data['message']) ? trim($data['message']) :'';

$message='<table align="center" width="60%" border="0" cellspacing="0" cellpadding="0" style=" font-family:Verdana, Geneva, sans-serif; font-size:12px; border:solid 2px #0a6092;margin-left:0px;">

  <tr>
     <td width="26%" style="padding:5px; border:solid 1px #f4f4f4; background:#f8f8f8;">Name</td>
    <td width="72%" style="padding:5px; border:solid 1px #f4f4f4;">'.$name.'</td>

  </tr>

<tr>
     <td width="26%" style="padding:5px; border:solid 1px #f4f4f4; background:#f8f8f8;">Email</td>
    <td width="72%" style="padding:5px; border:solid 1px #f4f4f4;">'.$email.'</td>

  </tr>

 
<tr>
     <td width="26%" style="padding:5px; border:solid 1px #f4f4f4; background:#f8f8f8;">Message</td>
    <td width="72%" style="padding:5px; border:solid 1px #f4f4f4;">'.$mess.'</td>

  </tr>
  ';
 $message.='</table>';
if(!empty($email)):
  $to = 'sonnu.yadav@gmail.com';
  $subject = "Contact Enquiry From ".$name;
  $headers  = 'MIME-Version: 1.0' . "\r\n";
  $headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
  $headers .= 'From: Sonnu.in <noreply@aseries.in>' . "\r\n";
  mail($to,$subject,$message,$headers);
echo 'true';
else:
echo 'false'; 
endif;
}else{
    echo 'false';    
}