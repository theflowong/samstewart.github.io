/** 
Fills a given THREE.FloatType texture with colors given by the map function.
map (x,y) : [0, N - 1]x[0, M - 1] -> Float32Array(4)
coordinates are such that origin is in lower left corner.
*/
function fillTexture(texture, map) {
	var data = texture.image.data;

	for (var i = 0; i < data.length; i++ ) {
		// ordering believed to be from:
		// https://github.com/mrdoob/three.js/blob/6c7f000734f8579da37fb39e5c2e9e5e2dfb14f8/examples/js/utils/ImageUtils.js
		var pixelColor = map(i % texture.image.width, Math.floor(i / texture.image.width));

		data[i * 4] 	= pixelColor[0];
		data[i * 4 + 1] = pixelColor[1];
		data[i * 4 + 2] = pixelColor[2];
		data[i * 4 + 3] = pixelColor[3];
	}

	texture.needsUpdate = true; // not completely sure if this is necessary?
}