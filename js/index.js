$(document).ready(function(){
  $("ul li").each(
     $(this).bind("mouseover",function ()
     {
       $(this).next("div.menu-hide").css("display","block");
     });
     $(this).bind("mouseout",function ()
     {
      $(this).next("div.menu-hide").css("display","none");
     }); 
  );
});
