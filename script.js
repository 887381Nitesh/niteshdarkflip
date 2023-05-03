$( ".change" ).on("click", function() {
    if( $( "nav" ).hasClass( "dark" )) {
        $( "nav"  ).removeClass( "dark" );
        $( ".change" ).text( "OFF" );
    }else {
        $(  "nav" ).addClass( "dark" );
        $( ".change" ).text( "ON" );
    }
    if( $( "body" ).hasClass( "dark" )) {
        $( "body"  ).removeClass( "dark" );
        $( ".change" ).text( "OFF" );
    }else {
        $(  "body" ).addClass( "dark" );
        $( ".change" ).text( "ON" );
    }
    if( $( "div" ).hasClass( "dark" )) {
        $( "div"  ).removeClass( "dark" );
        $( ".change" ).text( "OFF" );
    }else {
        $(  "div" ).addClass( "dark" );
        $( ".change" ).text( "ON" );
    }
    if( $( "section" ).hasClass( "dark" )) {
        $( "section"  ).removeClass( "dark" );
        $( ".change" ).text( "OFF" );
    }else {
        $(  "section" ).addClass( "dark" );
        $( ".change" ).text( "ON" );
    }
    if( $( "footer" ).hasClass( "dark" )) {
        $( "footer"  ).removeClass( "dark" );
        $( ".change" ).text( "OFF" );
    }else {
        $(  "footer" ).addClass( "dark" );
        $( ".change" ).text( "ON" );
    }
});

//! Popup-Window
let popupCloseButton=document.querySelector('#couponClose')
popupCloseButton.addEventListener('click',()=>{
    document.querySelector('#main').style.display='none';
})

/*
function loadCoupon()
{
    document.getElementById('coupon').style.visibility='visible';
    document.getElementById('main').style.opacity='0.7'
}
function closeCoupon()
{
    document.getElementById('coupon').style.visibility='hidden';
    document.getElementById('main').style.opacity='1'
}
*/