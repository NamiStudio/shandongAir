$(document).ready(function(){
   $("ul li").bind("mouseover",function(){
   	  $(this).next("div.menu-hide").show();
   	  $(this).next("div.menu-hide").bind("mouseover",function(){
   	  	$("ul li div.menu-hide").show();
   	  });
   });
   $("ul li").bind("mouseout",disapear);
   $("ul li div.menu-hide").bind("mouseout",function(){
   	   $(this).hide();
   });

   function disapear(){
   			$(this).next(".menu-hide").hide();		   	
   }




});