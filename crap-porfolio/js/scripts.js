$(document).ready(function(){
    $("#carouselButton").click(function () {
        if ($("#carouselButton").children("span").hasClass('fa-pause')) 
        {
            $("#mycarousel").carousel('pause');
            $("#carouselButton").children("span").removeClass('fa-pause');
            $("#carouselButton").children("span").addClass('fa-play');
        }
        else if ($("#carouselButton").children("span").hasClass('fa-play'))
        {
            $("#mycarousel").carousel('cycle');
            $("#carouselButton").children("span").removeClass('fa-play');
            $("#carouselButton").children("span").addClass('fa-pause');
        }
    });


    //Reserve Table Button 
    $("#reserveBtn").click(function(){
        $("#reserveModal").modal("toggle")
    });
    $("#loginBtn").click(function(){
        $("#loginModal").modal("toggle")
    });
});