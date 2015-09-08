$(document).ready(function(){
   $("ul li").each(function (){
      $(this).bind("mouseover",function(){
         $(this).children("a").css("color","#f98c03");
         $(this).children('div.menu-hide').css("display","block");
      });
      $(this).bind("mouseout",function(){
        $(this).children("a").css("color","#092d4f");
        $(this).children('div.menu-hide').css("display","none");
      })
   });
});
