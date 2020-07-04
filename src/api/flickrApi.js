export default function FlickrApi(search) {
  const apiKey = process.env.REACT_APP_FLICKR_API_KEY;
  return fetch(
    `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&text=${search}&sort=relevance&per_page=24&format=json&nojsoncallback=1`
  )
    .then((res) => res.json())
    .then(({ photos }) => photos.photo)
    .catch((error) => error);
}
