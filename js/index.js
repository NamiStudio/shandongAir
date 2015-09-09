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

   //单个订单乘机人数不能超过3人！（包括小孩）
   
   $(".person-3 .person-add").bind("click",function(){
      var num1=parseInt($(".person-3 label").text());
      var num2=parseInt($(".person-0 label").text());
      if(num1+num2==3){
         alert("温馨提示:单个订单乘机人数不能超过3人！");
      }else{
         num1=num1+1;
         $(".person-3 label").text(num1);
      }
   });

   $(".person-3 .person-minus").bind("click",function(){
      var num=parseInt($(".person-3 label").text());
      if(num>1){
         num--;
         $(".person-3 label").text(num);
      }
   });
   var flag=false;
   $(".person-0 .person-add").bind("click",function(){
      var num1=parseInt($(".person-3 label").text());
      var num2=parseInt($(".person-0 label").text());
      if(flag==false){
         flag=true;
         confirm("温馨提示：携带儿童的成人需年满18周岁且是具有民事行为能力的成人，如果是请点击确认，否则点击取消！");
      }
      if(num1+num2==3){
         alert("温馨提示:单个订单乘机人数不能超过3人！");
      }else{
         num2=num2+1;
         $(".person-0 label").text(num2);
      }
   });
   $(".person-0 .person-minus").bind("click",function(){
      var num=parseInt($(".person-0 label").text());
      if(num>0){
         num--;
         $(".person-0 label").text(num);
      }
   });
   function addrmust(){
      var text1=$("#departure").text();
      var text2=$("#destination").text();
      if(text1==""||text2==""){
         alert("温馨提示：请完整填写出发地和目的地！");
      }
   }
   $("#gotime").bind("click",addrmust);
   $("#retime").bind("click",addrmust);

   //经济舱头等舱or无限制
   $(".infinit").bind("click",function(){
      var $ul=$(".infinit ul");
      if($ul.is(":visible")){
         $(".infinit").removeClass("infinit-active");
         $ul.hide();
      }else{
         $(".infinit").addClass("infinit-active");
         $ul.show();
      }
   });

});