$(document).ready(function(){
  //header部分（导航栏效果）
   $("header ul li").each(function (){
      $(this).bind("mouseover",function(){
         $(this).children("a").css("color","#f98c03");
         $(this).children('div.menu-hide').css("display","block");
      });
      $(this).bind("mouseout",function(){
        $(this).children("a").css("color","#092d4f");
        $(this).children('div.menu-hide').css("display","none");
      });
   });
   //机票预订里的效果
   $("#domestic").bind("click",function(){
      $(this).addClass("active");
      $("#world").removeClass("active");
      $(".left-bottom .infinit").show();
      $(".left-bottom .person-3").show();
      $(".left-bottom .person-0").show();
      $(".left-bottom .sale-num").show();
   });
   $("#world").bind("click",function(){
      $(this).addClass("active");
      $("#domestic").removeClass("active");
      $(".left-bottom .infinit").hide();
      $(".left-bottom .person-3").hide();
      $(".left-bottom .person-0").hide();
      $(".left-bottom .sale-num").hide();
   });
   $("#one").bind("click",function(){
      $(this).addClass("active");
      $("#two").removeClass("active");
      $("#retime").hide();
   });
   $("#two").bind("click",function(){
      $(this).addClass("active");
      $("#one").removeClass("active");
      $("#retime").show();
   });
   
});