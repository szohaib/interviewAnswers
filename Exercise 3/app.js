var a = Array.prototype.slice.call(document.querySelectorAll('.cat-tile-text')).filter(function (value, index) {
    return value.innerText.includes('Alienware')
})

var b = a[0].parentElement.parentElement

var c1 = a[0].parentElement.parentElement.parentElement.children[1]

a[0].parentElement.parentElement.parentElement.insertBefore(b, c1)



for (var i = 0; i < document.querySelectorAll('.fran').length; i++) {
    if (document.querySelectorAll('.fran')[i].dataset.catid === 'alienware-laptops') {
        var alienwareLaptops = document.querySelectorAll('.fran')[i]
    }
}

document.querySelector('.cat-off-screen-pane').insertBefore(alienwareLaptops, document.querySelectorAll('.fran')[0])

var anavLinks = []
for(var i = 0 ; i < document.querySelectorAll('.anav.active span').length ; i++){
    if(Object.keys(document.querySelectorAll('.anav.active span')[i].dataset)[0] === 'ref'){
        anavLinks.push(document.querySelectorAll('.anav.active span')[i].cloneNode(['deep']))
    }
}

for(var i = anavLinks.length - 1 ; i >= 0 ; i--){
    anavLinks[i].style.marginRight = '10px';
    anavLinks[i].style.color = '#007db8';
    anavLinks[i].style.cursor = 'pointer';
    anavLinks[i].style.display = 'inline-block';
    anavLinks[i].style.marginBottom = '10px'
    anavLinks[i].addEventListener('click' , test())
    document.querySelector('.cat-off-screen-pane').prepend(anavLinks[i])
}

document.querySelector('.cat-off-screen-pane').style.display = 'inline-block'

var appliedRefinements = []
function test(){
    return function(e){
        for(var i = 0 ; i < document.querySelectorAll('.anav.active .dellmetrics-pl-anav input').length ; i++){
            if(JSON.parse(document.querySelectorAll('.anav.active .dellmetrics-pl-anav input')[i].dataset.metrics).anav_caption === e.target.innerText){
                appliedRefinements.push(document.querySelectorAll('.anav.active .dellmetrics-pl-anav input')[i].value)
            }
        }

        window.location.href = 'https://www.dell.com/en-us/shop/dell-laptops/sr/laptops/?appliedRefinements='+appliedRefinements.join(',')
        
    }
    
}
