$(window).scroll(function(){
    var s = $(window).scrollTop(),
      d = $(document).height(),
      c = $(window).height();

    var scroll_percent = (s / (d - c)) * 100;
    console.clear();
    console.log(scroll_percent);

    if ($(window).width() >= 1050){
        if(scroll_percent<35){
            $('.fab').css('color', 'white');
        } else if(scroll_percent<75){
            $('.fab').css('color', 'black');
        } else if(scroll_percent<95){
            $('.fab').css('color', 'gray');
        } else{
            $('.fab').css('color', 'white');
        }
    }

    else if ($(window).width() >= 800){
        if(scroll_percent<15){
            $('.fab').css('color', 'white');
        } else if(scroll_percent<75){
            $('.fab').css('color', 'black');
        } else if(scroll_percent<90){
            $('.fab').css('color', 'gray');
        } else{
            $('.fab').css('color', 'white');
        }
    }

    else{
        if(scroll_percent<10){
            $('.fab').css('color', 'white');
        } else if(scroll_percent<60){
            $('.fab').css('color', 'black');
        } else if(scroll_percent<90){
            $('.fab').css('color', 'gray');
        } else{
            $('.fab').css('color', 'white');
        }
    }
});