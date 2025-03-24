const wrapper = document.querySelector('.sliderWrapper')
const menuItems = document.querySelectorAll('.menuItem')

const products = [
    {
        id: 1,
        title: "Divisive",
        price: 19.99,
        img: './img/Divisive_Cover-FINAL.jpg',

    },
    {
        id: 2,
        title: "Rust in Peace",
        price: 60,
        img: './img/megadeth_rustinpeace_small_dfd5214e-db49-4869-84f8-a1d9adba51d8_700x700-removebg-preview.png',
    },
    {
        id: 3,
        title: "After Life",
        price: 30,
        img: './img/7196s8BdeTL._SX522_-removebg-preview.png',
    }
]

let chosenProduct = products[0]

const currentProductImage = document.querySelector('.productImage')
const currentProductPrice = document.querySelector('.productPrice')
const currentProductTitle = document.querySelector('.productTitle')
const currentProductVersion = document.querySelectorAll('.version')



menuItems.forEach((item, index)=>{
    item.addEventListener('click', ()=>{
        wrapper.style.transform = `translateX(${-100 * index}vw)`
        chosenProduct = products[index]
        currentProductTitle.textContent = chosenProduct.title
        currentProductPrice.textContent = '$'+chosenProduct.price
        currentProductImage.src = chosenProduct.img
    })
})

currentProductVersion.forEach((version, index)=>{
    version.addEventListener('click', ()=>{
        currentProductVersion.forEach(version=>{
            version.style.backgroundColor = 'white'
        })
        version.style.backgroundColor = 'gray'
    })
})

const productButton = document.querySelector('.productButton')
const payment = document.querySelector('.payment')
const close = document.querySelector('.close')

productButton.addEventListener('click', ()=>{
    payment.style.display = 'flex'
})

close.addEventListener('click', ()=>{
    payment.style.display = 'none'
})






async function fetchGeniusData() {
    const url = 'https://halsey-lyric-snippets.p.rapidapi.com/Halsey/song/random';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '952512fbe8msh0c4eb0d8af85e16p126cafjsn0d5d03789602',
		'X-RapidAPI-Host': 'halsey-lyric-snippets.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.json();
	console.log(result.lyrics);
    console.log(result)
    // document.querySelector('#api').innerHTML = result.lyrics[0]
    document.querySelector('#api').append(result.lyrics[0],". ")
    document.querySelector('#api').append( result.lyrics[1], ".")
    document.querySelector('#apidetail').append(result.name)


} catch (error) {
	console.error(error);
}
}
fetchGeniusData()
















// async function fetchGeniusData() {
// const url = 'https://famous-quotes4.p.rapidapi.com/random?category=all&count=2';
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': '952512fbe8msh0c4eb0d8af85e16p126cafjsn0d5d03789602',
// 		'X-RapidAPI-Host': 'famous-quotes4.p.rapidapi.com'
// 	}
// };

// try {
// 	const response = await fetch(url, options);
// 	const result = await response.text();
// 	console.log(result);
// } catch (error) {
// 	console.error(error);
// }
// }












// async function fetchGeniusData() {
//     const url = 'https://genius-song-lyrics1.p.rapidapi.com/search/?q=%3CREQUIRED%3E&per_page=10&page=1';
//     const options = {
//       method: 'GET',
//       headers: {
//         'X-RapidAPI-Key': '952512fbe8msh0c4eb0d8af85e16p126cafjsn0d5d03789602',
//         'X-RapidAPI-Host': 'genius-song-lyrics1.p.rapidapi.com'
//       }
//     };
  
//     try {
//       const response = await fetch(url, options);
  
//       // Parse the response as JSON
//       const result = await response.json();

//       const dataToDisplay = result.data;
//       const dataContainer = document.getElementById('data-container');
//       const dataElement = document.createElement('pre');
//       dataElement.textContent = JSON.stringify(dataToDisplay, null, 2);

  
//       // Now 'result' contains the parsed JSON data
//       dataContainer.appendChild(dataElement);
//       console.log(result);
//     } catch (error) {
//       console.error(error);
//     }
//   }
  
//   // Call the async function
//   fetchGeniusData();
  










//   async function fetchGeniusData() {
//     const url = 'https://genius-song-lyrics1.p.rapidapi.com/search/?q=%3CREQUIRED%3E&per_page=10&page=1';
//     const options = {
//       method: 'GET',
//       headers: {
//         'X-RapidAPI-Key': '952512fbe8msh0c4eb0d8af85e16p126cafjsn0d5d03789602',
//         'X-RapidAPI-Host': 'genius-song-lyrics1.p.rapidapi.com'
//       }
//     };
  
//     try {
//       const response = await fetch(url, options);
  
//       // Parse the response as JSON
//       const result = await response.json();
  
//       // Access the data you want to display (modify as per your data structure)
//       const dataToDisplay = result.data;
  
//       // Get the data container element
//       const dataContainer = document.getElementById('data-container');
  
//       // Create an HTML element (e.g., <pre>) to display the data
//       const dataElement = document.createElement('pre');
      
//       // Set the content of the element to the JSON data (you may want to format it better)
//       dataElement.textContent = JSON.stringify(dataToDisplay, null, 2);
  
//       // Append the data element to the data container
//       dataContainer.appendChild(dataElement);
//     } catch (error) {
//       console.error(error);
//     }
//   }
  
//   // Call the async function to fetch and display data
//   fetchGeniusData();
  