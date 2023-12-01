const hotelDetails = JSON.parse(localStorage.getItem('hotel'))
const amenitiesDiv = document.getElementById('amenitiessDiv')
const prices = document.getElementById('prices')
 rating.innerText = hotelDetails.rating+"."
 hotelName.innerText = hotelDetails.name
 address.innerText = hotelDetails.address

 reviewsCount.innerText = hotelDetails.reviewsCount+" reviews ·"
reviewsCounts.innerText = " · "+hotelDetails.reviewsCount+" reviews"
if(!rating.isSuperhost) superHost.remove()

const img1 = document.getElementById('img1')

img0.src = hotelDetails.images[0]
img1.src = hotelDetails.images[1]
img2.src = hotelDetails.images[2]
img3.src = hotelDetails.images[3]
img4.src = hotelDetails.images[4]

hostInfo.innerText = `${hotelDetails.type} hosted in ${hotelDetails.city}`
features.innerText = `${hotelDetails.persons} ${hotelDetails.persons>1?"guests":"guest"} · ${hotelDetails.bedrooms} ${hotelDetails.bedrooms>1?"bedrooms":"bedroom"} · ${hotelDetails.beds} ${hotelDetails.beds>1?"beds":"bed"} · ${hotelDetails.beds} ${hotelDetails.bathrooms>1?"bathrooms":"bathroom"}`
hostImg.src = hotelDetails.hostThumbnail

hotelDetails.previewAmenities.forEach(element => {
    const amenity = document.createElement('h4')
    amenity.innerText = element
    amenitiesDiv.appendChild(amenity)
});

pricePerNight.innerText = `₹${hotelDetails.price.rate} / night`


hotelDetails.price.priceItems.forEach(el=>{
    const price = document.createElement('div')
    const title = document.createElement('h4')
    const amount = document.createElement('h4')
    price.className = "priceDiv"
    title.innerText = el.title
    amount.innerText = "₹"+el.amount
    price.appendChild(title)
    price.appendChild(amount)
    prices.appendChild(price)
})

totalPrice.innerText = "₹"+hotelDetails.price.total

map.src = src=`https://maps.google.com/maps?q=${hotelDetails.lat}, ${hotelDetails.lng}&z=15&output=embed`

getDirectionBtn.addEventListener('click', ()=>{
    const url = `https://www.google.com/maps/dir//${hotelDetails.lat},${hotelDetails.lng}`
    window.open(url, "_blank")
})