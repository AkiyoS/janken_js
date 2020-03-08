$('#arupaka').on('click',function(){
    $('#inu').fadeOut(1000);
    $('#monster').fadeOut(1000);
    $('#arupaka').css("width","240px");
    $('.character>p:hover').css("opacity","1");
    $('.choice>h2').hide();
    $('.btnTe').show(2000);
    localStorage.setItem("chara", "#arupaka");
});

$('#inu').on('click',function(){
    $('#arupaka').fadeOut(1500);
    $('#monster').fadeOut(1500);
    $('#inu').css("width","240px");
    $('.character>p:hover').css("opacity","1");
    $('.choice>h2').hide();
    $('.btnTe').show(2000);
    localStorage.setItem("chara", "#inu");
});

$('#monster').on('click',function(){
    $('#arupaka').fadeOut(1500);
    $('#inu').fadeOut(1500);
    $('#monster').css("width","240px");
    $('.character>p:hover').css("opacity","1");
    $('.choice>h2').hide();
    $('.btnTe').show(2000);
    localStorage.setItem("chara", "#monster");
});

$('.btnTe').on('click',function(){
    $('.te').show(1000);
    $('.selectHand').css("display","flex")
    .css("width","480px")
    .css("justify-content","space-between")
    .css("margin","0 auto");
});

$('.te').on('click',function(){
    var val = $(this).attr('id');
    localStorage.setItem("hand",val);
    $(this).css("width","240px");
    $('.btnBoxTe').slideUp();
    $('.selectHand').slideUp(1000);
    $('.btnShobu').show(3000);
});

// $('#gu').on('click',function(){
//     $("#gu").css("width","240px");
//     $('.btnBoxTe').slideUp();
//     $('.selectHand').slideUp(1000);
//     $('.btnShobu').show(3000);
//     localStorage.setItem("hand","#gu");
// });

// $('#choki').on('click',function(){
//     $("#choki").css("width","240px");
//     $('.btnBoxTe').slideUp();
//     $('.selectHand').slideUp(1000);
//     $('.btnShobu').show(3000);
//     localStorage.setItem("hand","#choki");
// });

// $('#pa').on('click',function(){
//     $("#pa").css("width","240px");
//     $('.btnBoxTe').slideUp();
//     $('.selectHand').slideUp(1000);
//     $('.btnShobu').show(3000);
//     localStorage.setItem("hand","#pa");
// });

$('.btnShobu').on('click',function(){
    $('.janken').show()
    .animate({"padding-top":"10px"},700)
    .animate({"padding-top":"-10px"},700);
    var userHand = localStorage.getItem("hand");
    if(userHand == "gu"){
        $('#matchGu').fadeIn(4000);
    }else if(userHand == "choki"){
        $('#matchChoki').fadeIn(4000);
    }else if(userHand == "pa"){
        $('#matchPa').fadeIn(4000);
    }
    var charaHand = Math.random();
    var character = localStorage.getItem("chara");
    if(charaHand < 0.5 && character == "#arupaka"){
        // localStorage.setItem("charaHand","gu");
        $('#charaGu').fadeIn(4000);
    }else if(charaHand >= 0.5 && charaHand < 0.8 && character == "#arupaka"){
        $('#charaChoki').fadeIn(4000);
    }else if(charaHand >= 0.8 && character == "#arupaka"){
        $('#charaPa').fadeIn(4000);
    }else if(charaHand < 0.5 && character == "#inu"){
        $('#charaChoki').fadeIn(4000);
    }else if(charaHand >= 0.5 && charaHand < 0.8 && character == "#inu"){
        $('#charaPa').fadeIn(4000);
    }else if(charaHand >= 0.8 && character == "#inu"){
        $('#charaGu').fadeIn(4000);
    }else if(charaHand < 0.5 && character == "#monster"){
        $('#charaPa').fadeIn(4000);
    }else if(charaHand >= 0.5 && charaHand < 0.8 && character == "#monster"){
        $('#charaGu').fadeIn(4000);
    }else if(charaHand >= 0.8 && character == "#monster"){
        $('#charaChoki').fadeIn(4000);
    }
    $('.btnBoxShobu').remove();
});



