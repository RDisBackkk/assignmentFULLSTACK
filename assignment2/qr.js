const Jimp = require('jimp');
const jsQR = require('jsqr');

async function decodeQR(imagePath) {
  const image = await Jimp.read(imagePath);
  const { data, width, height } = image.bitmap;

  const result = jsQR(data, width, height);

  if (result === null) {
    throw new Error('No QR code found');
  }

  return result.data;
}

if (require.main === module) {
  const testImagePath = process.argv[2] || 'test.jpg';
  decodeQR(testImagePath)
    .then((text) => {
      console.log('QR Code decoded successfully:');
      console.log(text);
    })
    .catch((err) => {
      console.error('Error:', err.message);
    });
}

module.exports = { decodeQR };
