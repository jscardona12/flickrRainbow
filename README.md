# Node + Express + create-react-app + flickrApi

This is a simple project that helps bootstrap projects that use create-react-app + node + express + flickrapi

To use this app:

```
git clone https://github.com/jscardona12/flickrRainbow.git myApp
cd myApp
echo "my_flickr_api_key" > server/api_key.txt
echo "my_flickr_api_secret" > server/api_secret.txt
npm install
```
You can [get your Flickr api key and secrets here](https://www.flickr.com/services/apps/create/)


Then compile the front-end into the build folder using

```
npm run build
```

And finally run the server

```
npm start
```
And open [http://localhost:9000](http://localhost:9000)

[http://localhost:9000/flickr/query](http://localhost:9000/flickr/query) points to an endpoint that will return a JSON object with the Flickr results. For more information on the Flickr API check:
* The [Flickr API documentation](https://www.flickr.com/services/api/)
* The [flickrapi node module documentation](https://www.npmjs.com/package/flickrapi)
* And this [page that explains how to build the urls for the images](https://www.flickr.com/services/api/misc.urls.html)



