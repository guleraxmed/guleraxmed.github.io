$("#bg").css({
    "display" : "none",
    width : "100%",
    "height" : "100vh",
    "background-repeat" : "no-repeat",
    "background-position" : "center",
    "background-color" : "rgba(0,0,0,.6)",
    "position" : "fixed",
    "z-index": 4,
    "top" : 0,
    "left" : 0,
});

$(".proimg").on("click", function(){
    let src = $(this).attr("src");
    $("#bg").css({
        "display" : "block",
        "background-image" : `url('${src}')`,
    })
    
})
$("#bg").on("click",function(){
    $(this).css({
        "display":"none",
    })
})
