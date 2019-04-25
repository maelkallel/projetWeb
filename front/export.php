<?php  
      //export.php  
 if(isset($_POST["export"]))  
 {  
      $connect = mysqli_connect("localhost", "root", "", "marketing");  
      header('Content-Type: text/csv; charset=utf-8'); 
	 $filename ="promo" . date('Ymd') . ".csv";
      header('Content-Disposition: attachment; filename='.$filename);  
      $output = fopen("php://output", "w");  
      fputcsv($output, array('idP', 'dd', 'df', 'prom'));  
      $query = "SELECT * from promo ORDER BY  df ";  
      $result = mysqli_query($connect, $query);  
      while($row = mysqli_fetch_assoc($result))  
      {  
           fputcsv($output, $row);  
      }  
      fclose($output);  
 }  
 ?> 