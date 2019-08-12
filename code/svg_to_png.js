https://gist.github.com/gustavohenke/9073132

// Sample code
function svg_to_png(container) {
    var wrapper = document.getElementById(container);
    var svg = wrapper.querySelector("svg");

    if (typeof window.XMLSerializer != "undefined") {
        var svgData = (new XMLSerializer()).serializeToString(svg);
    } else if (typeof svg.xml != "undefined") {
        var svgData = svg.xml;
    }

    var canvas = document.createElement("canvas");
    var svgSize = svg.getBoundingClientRect();
    canvas.width = svgSize.width;
    canvas.height = svgSize.height;
    var ctx = canvas.getContext("2d");

    var img = document.createElement("img");
    img.setAttribute("src", "data:image/svg+xml;base64," + btoa(unescape(encodeURIComponent(svgData))) );

    img.onload = function() {
        ctx.drawImage(img, 0, 0);
        var imgsrc = canvas.toDataURL("image/png");

        var a = document.createElement("a");
        a.download = container+".png";
        a.href = imgsrc;
        a.click();
    };
}

// working code
export  function to_png() {
    var svgData = roofMarkup()
    var canvas = document.createElement("canvas");

    canvas.width = 500;
    canvas.height = 500;
    var ctx = canvas.getContext("2d");

    var img = document.createElement("img");
    img.setAttribute("src", "data:image/svg+xml;base64," + btoa(unescape(encodeURIComponent(svgData))) );

    img.onload = function() {
        ctx.drawImage(img, 0, 0);
        var imgsrc = canvas.toDataURL("image/png");

        var a = document.createElement("a");
        a.download = "b.png";
        a.href = imgsrc;
        a.click();
    };
}
