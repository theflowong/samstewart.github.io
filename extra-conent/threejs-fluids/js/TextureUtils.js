/** Directly creates a new texture with the given width / height and map(x,y)
at the given pixels (row, column)
map (x,y) : [0, N - 1]x[0, M - 1] -> Uint8 (4)
coordinates are such that origin is in lower left corner.
*/
function createTextureWithColorMap(width, height, map) {

	var size = width * height;
	var data = new Uint8Array(4 * size);

	for (var i = 0; i < size; i++ ) {
		// ordering believed to be from:
		// https://github.com/mrdoob/three.js/blob/6c7f000734f8579da37fb39e5c2e9e5e2dfb14f8/examples/js/utils/ImageUtils.js
		var pixelColor = map(i % width, Math.floor(i / width));

		data[i * 4] 	= pixelColor[0];
		data[i * 4 + 1] = pixelColor[1];
		data[i * 4 + 2] = pixelColor[2];
		data[i * 4 + 3] = pixelColor[3];
	}

	var texture = new THREE.DataTexture(data, width, height, THREE.RGBAFormat);
	texture.needsUpdate = true; // not completely sure if this is necessary?

	return texture;
}