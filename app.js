const xhr = new XMLHttpRequest();
xhr.withCredentials = true;

const button = document.getElementById('get-image-button');
const imageContainer = document.getElementById('image-container');

button.addEventListener('click', makeApiRequest);

function makeApiRequest() {
  xhr.open('GET', 'https://porn-image1.p.rapidapi.com/?type=pussy');
  xhr.setRequestHeader('x-rapidapi-key', '4ccc4ce1b4mshc3f760793164640p12ba76jsnb782383276db');
  xhr.setRequestHeader('x-rapidapi-host', 'porn-image1.p.rapidapi.com');

  xhr.addEventListener('readystatechange', function () {
    if (this.readyState === this.DONE) {
      const responseData = JSON.parse(this.responseText);
      console.log(responseData);
      const imageUrl = responseData.url; // Assuming the API returns a URL in the response
      const img = document.createElement('img');
      img.src = imageUrl;
      imageContainer.innerHTML = ''; // Clear the container before adding the new image
      imageContainer.appendChild(img);
    }
  });

  xhr.send(null); // No data needs to be sent in this case
}