$(function(){
//메뉴
$(".main > li, .sub_bg").mouseover(function(){
$(".sub, .sub_bg").stop().slideDown();
})//main > li").mouseover

$(".main > li, .sub_bg").mouseout(function(){
    $(".sub, .sub_bg").stop().slideUp();
})//main > li").mouseout



// //slide_img_1
// var i=0; //현재보이는 인덱스번호 0~2
// setInterval(function(){
// if(i == 2){
//     i=0;
// }else{
//     i++;
// }//if
// console.log("i:",i)
// pos = i * -1200 + "px"
// console.log("pos:",pos)
// $(".left_move").animate({left:pos},500,);
// },2000)//setinterval

//slide_img_2
setInterval(function(){
$(".left_move").animate({left:"-1200px"},500, function(){
    $(".left_move").css({left:"0"})
    $(".left_move").append($(".left_move li").eq(0))
    // $(".left_move").append($(".left_move li:first-child"))
})
},2000)//setinterval

//notice pop
$(".p_click").click(function(){
    $(".pop_bg, .pop").show()
})//p_click").click
$(".close").click(function(){
    $(".pop_bg, .pop").hide()
})//close").click









})//jquery