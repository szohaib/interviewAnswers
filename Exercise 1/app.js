var resourceTiles = document.getElementsByClassName('resource-tiles')

resourceTiles[0].classList.remove('row')

var searchBoxContainer = document.querySelector('.product-selector .container .row')

searchBoxContainer.append(resourceTiles[0])

resourceTiles[0].classList.add('col-lg-6' , 'col-md-6' , 'col-sm-12' ,  'col-xs-12')

var searchBox = searchBoxContainer.children[0]

searchBox.classList.remove('col-lg-8' , 'col-md-10' , 'col-lg-offset-2' , 'col-md-offset-1')

searchBox.classList.add('col-lg-6' , 'col-md-6')

Array.prototype.slice.call(resourceTiles[0].children).map(function(value , index){
	value.classList.remove('col-md-3')
	value.classList.add('col-md-6')
	return value
})

searchBox.style.marginTop = 0

resourceTiles[0].style.marginTop = 0

searchBox.classList.add('float-right' , 'bottom-offset-30')
