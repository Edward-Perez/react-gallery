import { apiKey } from "config";

export default function FlickrApi(search) {
  return fetch(
    `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&text=${search}&sort=relevance&per_page=24&format=json&nojsoncallback=1`
  )
    .then((res) => res.json())
    .then(({ photos }) => photos.photo)
    .catch((error) => error);
}
