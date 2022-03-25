addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})
/**
 * Respond with hello worker text
 * @param {Request} request
 */
async function handleRequest(request) {
  var myHeaders = new Headers();
  myHeaders.append("Cookie", "__cf_bm=hbZKv0bYOlLrqv6Yo8ycl4X8ZxqSd.YgmQLPFVfCuZc-1647329879-0-Aabxzspf3npTw0Cl4QlxA9VJST9zAXFvlFBGbuiiUe8I6MHBsbynTgWA1lyCWwO3MuKYyjl3xHIct696AMBK5YQ=");
  
  var urlencoded = new URLSearchParams();
  
  var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    body: urlencoded,
    redirect: 'follow'
  };
  
  fetch("https://opensea.io/0xdB9eF10439f9BD418BE39Aa96d2C923820e9f134?search[sortBy]=PRICE&search[sortAscending]=false", requestOptions)
    .then(response => response.text())
    .then(html => {
      // Initialize the DOM parser
      let parser = new DOMParser();
    
      // Parse the text
      let doc = parser.parseFromString(html, "text/html");
    
      // You can now even select part of that html as you would in the regular DOM
      // Example:
      // var docArticle = doc.querySelector('article').innerHTML;
    
      let result = doc
        .getElementsByTagName("article")[0]
        .getElementsByTagName("a")[0]
        .getAttribute("href")
        .split("/")[2];
        console.log(result);
    })
    .catch(error => console.log('error', error));
  return new Response('Hello worker!', {
    headers: { 'content-type': 'text/plain' },
  })
}
