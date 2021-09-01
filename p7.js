/*
৭. একদম প্রাথমিক স্টেপ হিসেবে jsonplaceholder এর ওয়েবসাইট থেকে ডাটা fetch করে সেটাকে কনসোল এ দেখাতে হবে। ধরো তুমি তাদের ওয়েবসাইট এ photos এর API এর লিংক কোনটা সেটা জাভাস্ক্রিপ্ট দিয়ে কোড করে সেই ডাটা কনসোল এ দেখতে পারতেছো কিনা। তারপর কয়েকটা কার্ড বানাবে (হতে পারে বুটস্ট্রাপ এর কার্ড) সেগুলা আবার তুমি html দিয়ে ওয়েবসাইট এ ছবি এবং ছবির নিচে ছবির টাইটেল দেখাবে।
*/

const allUrl = 'https://jsonplaceholder.typicode.com/photos'
function loadData() {
    fetch( 'https://jsonplaceholder.typicode.com/photos' )
        .then( res => res.json() )
        .then( data => displayData( data ) );
}

const displaySinglePhoto = ( photo ) => {
    const singlePhoto = document.getElementById( 'single-photo' );
    singlePhoto.innerHTML = '';
    singlePhoto.innerHTML = `
        <div class="card" style="width: 18rem;">
            <img src="${ photo.thumbnailUrl }" class="card-img-top img-fluid">
            <div class="card-body">
                <h5 class="card-title">${ photo.id }</h5>
                <p class="card-text">${ photo.title }</p>
            </div>
        </div>
    `;
}

const loadDataById = ( id ) => {
    const url = `https://jsonplaceholder.typicode.com/photos/${ id }`
    fetch( url )
        .then( res => res.json() )
        .then( data => displaySinglePhoto( data ) );
}

function displayData( photos ) {
    const photoContainer = document.getElementById( 'photo-container' );
    const slicedPhotos = photos.slice( 0, 100 );
    slicedPhotos.forEach( photo => {
        const div = document.createElement( 'div' );
        div.classList.add( 'card', 'p-2', 'col', 'rounded', 'rounded-3' );
        div.innerHTML = `
            <img src="${ photo.thumbnailUrl }" class="card-img-top img-fluid rounded rounded-3" alt="...">
            <div class="card-body">
                <h5 class="card-title text-center">${ photo.id }</h5>
                <a onclick="loadDataById('${ photo.id }')" href="#" class="btn btn-primary w-100">See Details</a>
            </div>
        `;
        photoContainer.appendChild( div );
    } );
}

loadData();