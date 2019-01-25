

	var slideIndex = [3,3];
	var slideId = ["mySlides1", "mySlides2"]
	showSlides(3,2);
	showSlides(3,3);

	function plusSlides(n, no) {
	  showSlides(slideIndex[no] += n, no);

	}

	function showSlides(n, no) {
	  var i;
	  var x = document.getElementsByClassName(slideId[no]);

	  if (n > x.length) {slideIndex[no] = 3}    
	  if (n < 4) {slideIndex[no] = x.length}


	  for (i = 2; i < x.length; i++) {
	     x[i].style.display = "none";  

	  
	  }
	  x[slideIndex[no]-1].style.display = "block";  
	}		








	//----Progress-bar-function!---//
		window.onscroll = function() {myFunction()};
		function myFunction() {
		  var winScroll = document.body.scrollLeft  || document.documentElement.scrollLeft ;
		  var width = document.documentElement.scrollHeight - document.documentElement.clientHeight;
		  var scrolled = (winScroll / width) * 100;
		  document.getElementById("myBar").style.width = scrolled + "%";
		}
	//---End-Progress-bar-function!---//






