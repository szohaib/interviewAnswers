var buttons = $('.flexslider-wrapper').find('.dellmetrics-pl-tab')


$(buttons[0]).click(function () {
	$('.banner-content-wrapper').css('background', 'purple')
	$('.half-image-module').css('background', 'purple')

})

$(buttons[1]).click(function () {
	$('.banner-content-wrapper').css('background', 'green')
	$('.half-image-module').css('background', 'green')

})


////
var cameras = Array.prototype.slice.call($('.inner-module-banner').find('h2')).filter(function(value , index){
	return value.innerText.includes('Cameras')
})

var networking = Array.prototype.slice.call($('.inner-module-banner').find('h2')).filter(function(value , index){
	return value.innerText.includes('Networking')
})

var camerasImages =  Array.prototype.slice.call($(cameras).parent().parent().siblings().children().clone())
var networkingImagesBox = $(networking).parent().parent().siblings()
$(networkingImagesBox).children().remove()

for(var i = 0 ; i < camerasImages.length ; i++){
	$(networkingImagesBox).append(camerasImages[i])
}
///
(function(){
	var powers = Array.prototype.slice.call($('.inner-module-banner').find('h2')).filter(function(value , index){
		return value.innerText.includes('Power')
	})
	
	var powerImages = $(powers).parent().parent().siblings().children()
	
	var sum =  0;
	
	Array.prototype.slice.call($(powerImages).find('.half-hero-pricing')).map(function(value , index){
		sum = sum + parseFloat(value.innerText.split(' $')[1])
		return value
	})
	alert(sum.toFixed(2))
})()





/////////////////////////






