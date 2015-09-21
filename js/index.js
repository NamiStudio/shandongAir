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
   //header部分（简体中文和繁体中文切换，登录注册）
   $(".country").bind("mouseover",function(){
      $(".complex").show();
   });
   $(".country").bind("mouseout",function(){
      $(".complex ").hide();
   });
   $(".country .complex").bind("click",function(){
      var $label1=$(this).text();
      var $label2=$(this).siblings("label").text();
      $(this).text($label2);
      $(this).siblings("label").text($label1);
      $(this).hide();
   });
   $(".person").bind("mouseover",function(){
      $(".person .menu").show();
   });
   $(".person").bind("mouseout",function(){
      $(".person .menu").hide();
   })
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
   function showul(){
      var $ul=$(this).children('ul');
      if($ul.is(":visible")){
         $(this).removeClass("infinit-active");
         $ul.hide();
      }else{
         $(this).addClass("infinit-active");
         $ul.show();
      }
   }
   function changeText(){
      var $this=$(this);
      var $text1=$this.parent().parent().children("label").text();
      var $text2=$this.text();
      $this.text($text1);
      $this.parent().parent().children('label').text($text2);
   }
   $(".infinit").bind("click",showul);
   $(".infinit ul li").bind("click",changeText);
   $("#identify").bind("click",showul);
   $("#identify ul li").bind("click",changeText);

   //航班动态里的切换效果
   function airnews(){
      $(this).addClass("airnews-active");
      $(this).siblings().removeClass("airnews-active");
   }
   $(".airnews-left").bind("click",airnews);
   $(".airnews-right").bind("click",airnews);
   //left-top的切换效果
   $("ul .book").bind("click",function(){
      $(this).addClass("book-active");
      $(this).siblings('.online').removeClass('online-active');
      $(this).siblings('.airnews').removeClass('airnews-active');
      $("#online").hide();
      $("#airnews").hide();
      $("#book").show();
   });
   $("ul .online").bind("click",function(){
      $(this).addClass("online-active");
      $(this).siblings('.book').removeClass('book-active');
      $(this).siblings('.airnews').removeClass('airnews-active');
      $("#book").hide();
      $("#airnews").hide();
      $("#online").show();
   });
   $("ul .airnews").bind("click",function(){
      $(this).addClass("airnews-active");
      $(this).siblings('.book').removeClass('book-active');
      $(this).siblings('.online').removeClass('online-active');
      $("#book").hide();
      $("#online").hide();
      $("#airnews").show();
   });
   //pc-3的动画效果
   setInterval(function(){
      setTimeout(function(){
         $(".pc-span3 .h-first").hide();
         $(".pc-span3 .h-second").animate({opacity:"show"},1000);
         $(".pc-span3 .h-second").show();
      },4000); 
      setTimeout(function(){
         $(".pc-span3 .h-second").hide();
         $(".pc-span3 .h-first").animate({opacity:"show"},1000);
         $(".pc-span3 .h-first").show();
      },9000); 
   },11000);

   //山航秒杀部分
   function listFirst(day,hour,minute,s1,s2,s3){
         var $oTarget=new Date();
         $oTarget.setFullYear($oTarget.getFullYear(),$oTarget.getMonth(),$oTarget.getDate()+arguments[0]);
         $oTarget.setHours(arguments[1],arguments[2],0);
         var $iTarget=$oTarget.getTime();
         var $oDate=new Date();
         var $iNow=$oDate.getTime();
         console.log($iTarget-$iNow);
         var $s=parseInt(($iTarget-$iNow)/1000);
         console.log($s);
         var $h=parseInt($s/3600);
         $s%=3600;
         var $m=parseInt($s/60);
         $s%=60;
         if($h<10){
            $(arguments[3]).text("0"+$h);
         }else{
            $(arguments[3]).text($h);
         }
         if($m<10){
            $(arguments[4]).text("0"+$m);
         }else{
            $(arguments[4]).text($m);
         }
         if($s<10){
            $(arguments[5]).text("0"+$s);
         }else{
            $(arguments[5]).text($s);
         }
      }
   function countTime(){
      listFirst(1,9,9,"#list-1 .hour","#list-1 .minute","#list-1 .second");
      listFirst(2,0,0,"#list-2 .hour","#list-2 .minute","#list-2 .second");
      listFirst(3,3,1,"#list-3 .hour","#list-3 .minute","#list-3 .second");
      listFirst(1,18,2,"#list-4 .hour","#list-4 .minute","#list-4 .second");
      listFirst(2,10,3,"#list-5 .hour","#list-5 .minute","#list-5 .second");
      listFirst(3,1,4,"#list-6 .hour","#list-6 .minute","#list-6 .second");
      
   }
   countTime();
   setInterval(countTime,1000);

   //同种图片不同颜色相互切换
   function changeColorOn(){
      var $that=$(this);
      $that.hide();
      $that.next(".next").show();
   }
   $(".img-list a .list-start").bind("mouseover",changeColorOn);
   $(".img-list a .img_list_1").bind("mouseover",changeColorOn);
   $(".img-list a .img_list_2").bind("mouseover",changeColorOn);
   $(".img-list a .img_list_3").bind("mouseover",changeColorOn);
   $(".img-list a .img_list_4").bind("mouseover",changeColorOn);
   $(".img-list a .list-end").bind("mouseover",changeColorOn);
   $(".img-list a .next").bind("mouseout",function(){
      $(this).parent("a").children(0).show();
      $(this).hide();
   });

   //轮播
  
   
   

   





});