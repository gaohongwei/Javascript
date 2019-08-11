https://dev.to/benjaminblack/using-a-string-of-svg-as-an-image-source-8mo

let svg = `<svg xmlns="http://www.w3.org/2000/svg" ...`;
let blob = new Blob([svg], {type: 'image/svg+xml'});
let url = URL.createObjectURL(blob);
let image = document.createElement('img');
image.src = url;
image.addEventListener('load', () => URL.revokeObjectURL(url), {once: true});
