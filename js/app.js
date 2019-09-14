 

// DOM  elements
const time = document.getElementById('time'),
      greeting = document.getElementById('greeting'),
      name = document.getElementById('name'),
      focus = document.getElementById('focus');

      // show time

      function showTime() {
      	let today = new Date(),
      	     hour = today.getHours(),
      	     min = today.getMinutes(),
      	     sec = today.getSeconds();



      // set AM or PM
      const amPm = hour >= 12 ? 'PM' : 'AM';

      // 12hr Format
       hour = hour % 12 || 12 ;



       // output Time
       

         time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)}`;


       setTimeout(showTime,1000);

       }    
 // add Zeros
    function addZero(n){
    	return (parseInt(n,10) < 10 ? '0' : '') + n ;
    }

    // set background and greeting
    function setBgGreets() {

    	let today = new Date(),
    	   hour = today.getHours();

    	if (hour < 12) {
    		// morning
    		document.body.style.backgroundImage = "url('img/morning.jpg')";
    		greeting.textContent = 'Good Morning';

    	} else if (hour < 18){
    		// afternoon
    		document.body.style.backgroundImage = "url('img/afternoon.jpg')";
    		greeting.textContent = 'Good Afternoon'; 

    	} else{
    		// evening

    		document.body.style.backgroundImage ="url('img/night.jpg')";
    		greeting.textContent = 'Good Evening';
    		document.body.style.color = 'white';
   

    	}
    }

// run
   showTime();
   setBgGreets();
