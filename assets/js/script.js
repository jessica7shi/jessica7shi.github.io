$(document).ready(function() { 
//Home Button
	$("#home").hover(function(){
        $(this).css("opacity", "0.6");
        }, function(){
        $(this).css("opacity", "0.2");
    });

// Window

	$("#about").click(function() {
		$(".window").fadeIn();
	})
	$(".close").click(function() {
		$(".window").fadeOut();
	})

//Typewriter effect
  $(".sub").typeIt({
    strings: ["For first time plant raisers", "For those looking for a cool new plant", "For those that want to green up their life"],
    speed: 80,
    breakLines: false,loop: true,
    deleteDelay: 1500,
    loopDelay: 1000
    });
  $(".hello").typeIt({
    strings: ["Nice to meet you!", "Thanks for visiting!"],
    speed: 80,
    breakLines: false,loop: true,
    deleteDelay: 1500,
    loopDelay: 1000
    });
//Home Hover and Slide Image Change
	$(".icon").hover(function(){
		console.log("#s"+this.id.slice(1));
		$(".image").hide();
		$("#s"+this.id.slice(1)).show();
	});


});