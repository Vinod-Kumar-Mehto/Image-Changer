
$(document).ready(function(){
    let imgn = document.querySelector("img")
    let count = 1;
    let inter = setInterval(function hello(){
        console.log(count)
        imgn.src = `${count}.jpg`;
        $(imgn).fadeIn(500)
        setTimeout(function(){
            $(imgn).fadeOut(1000)
        }, 3000)
        
        console.log(count)
        if(count == 3){
            count = 1;
        }else{

            count++
        };
    
        $(".right").mouseleave(function(){
            clearInterval(inter)
            inter = setInterval(hello, 4000)
    
        })
        $(".left").mouseleave(function(){
            clearInterval(inter)
            inter = setInterval(hello, 4000)
    
        })
    
    }, 5000);

    $("button").each(function(){
        $(this).click(function(){
            clearInterval(inter)
            if ($(this).hasClass("right")){
                    if(count == 3){
                        count = 1;
                    }else{
                        count++
                    }
                    $(imgn).fadeIn(1000)
                imgn.src = `${count}.jpg`
               
            }else{
                if(count === 1){
                    count = 3;
                }else{
                    count--
                }
                console.log(count)
                $(imgn).fadeIn(1000)
            imgn.src = `${count}.jpg`
            }
        })
    })
    
})


