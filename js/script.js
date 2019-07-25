/*

$(function() {
    //jQuery goes here...
/*
    $(".red-box").fadeOut(2000);
    $(".green-box").fadeOut(2000);//aftre the ann=imation it changes the display property to none i.e display: none;
    $(".red-box").fadeIn(2000);//it set the display property back to normal ;
    $(".green-box").fadeIn(3000);
    $(".red-box").fadeTo(2000,0.2);//it changes the opacity as mensoned but never touches the css 'display' property , so if the css display property is 'none' then , this will only changes the opacity as given but not do anything to the display property we can't get it back .   
    $(".green-box").fadeTo(2000,0.5);
    $(".blue-box").fadeTo(2000,0.7);
    $(".red-box").fadeTo(3000,0.4);
    $(".green-box").fadeTo(4000,0.7);
    $(".blue-box").fadeTo(5000,0.9);
    $(".red-box").fadeToggle();
    $(".red-box").fadeToggle();

*/

/*
$(".red-box").toggle();// if box is displaying then it set the set the 'display' to 'none' or visversa
$(".red-box").toggle(1000);
$(".blue-box").hide(1000);
$(".blue-box").show(1000);

*/

/*
$(".red-box").slideUp(1000);
$(".red-box").slideDown(1000);

$("p").hide();
$("p").slideDown(2000);
$(".red-box").slideToggle(1000);


});


*/

/************************
 * Custom Animation
*/

/*
$(function(){
    $(".blue-box").animate({
        "margin-left" : "+=100px"
    } , 1000 , "linear")
});

$(function(){
    $(".blue-box").animate({
        "margin-left" : "-=100px"
    } , 1000 , "swing")
})

*/

/*
$(function(){
    $(".blue-box").animate({
        marginLeft : "100px" ,
        opacity : "0",
        height : "25px",
        width : "25px" ,
        marginTop : "35px"
    } , 1000)
})

$(function(){
    $("p").delay(1000).animate({
        fontSize : "+=10px"
    },1000)
})

*/


/************************
 * delay Animation
*/

/*
$(function(){
    $(".red-box").fadeTo(1000,0.2);
    $(".green-box").delay(1000).fadeTo(1000,0.5);//it will wait for 1000ms i.e 1sec. and then starts the annimation;
    $(".blue-box").delay(2000).fadeTo(1000,0.7);
})


*/


/************************
 * callback-function/timing animation Animation
*/

// $(function(){
//     $(".red-box").fadeTo(1000,0.5,function(){
//         alert("opacity decresed to 50% and callback function() called");
//     });
// });

/*

$(function(){
    $(".red-box").fadeTo(1000,0.5,function(){
        $(".green-box").fadeTo(1000,0.5,function(){
            $(".blue-box").fadeTo(1000,0.5,function(){
                alert("All boxs have now 0.5 opacity");
                fn();
            });
        });
    });
});
var fn = function(){
$(".red-box").fadeTo(1000,1.0,function(){
    $(".green-box").fadeTo(1000,1.0,function(){
        $(".blue-box").fadeTo(1000,1.0,function(){
            alert("all boxes are moved back to 1.0 opasity");
        });
    });
});

};

*/

/************************
 * 
*/

$(function(){
    $(".light-box").delay(1000).fadeIn(1000);
});

