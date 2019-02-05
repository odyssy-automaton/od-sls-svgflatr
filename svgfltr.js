var page = require('webpage').create(),
    system = require('system'),
    output, width, height;


svgs = system.args[1];
html = system.args[2];
css = system.args[3];
output = system.args[4];
width = system.args[5];
height = system.args[6];
timeout = system.args[7];

console.log("Args: ", system.args);

page.content = html || '<html><style>svg {position: absolute;}</style><body><div id="surface"></div></body></html>';
page.viewportSize = { width: parseInt(width), height: parseInt(height) };
console.log("Viewport: ", JSON.stringify(page.viewportSize));

//svgblock = fs.read(svgs);
page.evaluate(function(svgs) {
    
    var el = document.getElementById('surface')
    el.innerHTML += svgs;
    document.body.style.margin = '0px';
}, svgs);

// after the timeout, save the screenbuffer to file
window.setTimeout(function() {
    page.render(output);
    phantom.exit();
  }, timeout);

