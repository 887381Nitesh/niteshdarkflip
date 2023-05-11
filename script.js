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

// geo location
let x = document.getElementById('out');
let y = document.getElementById('weather');
function geolocation(){
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(showPosition)
    }else{
        x.innerText="Geo Not Supported"
    }
}

function showPosition(data){
    console.log(data)
    let lat = data.coords.latitude
    let lon = data.coords.longitude
    x.innerText = `Lat ${lat} and long ${lon}`
    const url = `https://api.openweathermap.org/data/2.5/forecast/daily?lat=${lat}&lon=${lon}&mode=json&units=metric&cnt=5&appid=fbf712a5a83d7305c3cda4ca8fe7ef29`;
    //api calling
    fetch(url,{method: 'GET'})
    //return promise
    .then((res) =>res.json())
    //resolve the promise
    .then((data) => {
        console.log(data)
        let cityName = data.city.name;
        let temp = data.list[0].temp.day+" °C"
        y.innerText = ` ${cityName} is ${temp}`
    })
}