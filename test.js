var page = require('webpage').create();
page.open('https://odyssy.io/', function() {
  page.render('github.png');
  phantom.exit();
});


function getRandom(items) {
  return items[Math.floor(Math.random()*items.length)];
}

function allParts(bparts, btype, level){
  parts = [];
  for (var i = 0; i < bparts.length; i++) {
      parts.push("svgs/" + getRandom(btype) + "__" + bparts[i] + "--" + level + ".svg");
  }
  
  return parts;
}


	// start svg manipulation
	// var bodyParts = ['Body', 'Legs', 'Arms', 'Head'];
	// var bodyType = ['Gittron', 'Longtron', 'Mopetron'];
	var level = ['1']
	var primaryColors = ['#2825db', '#43db25', '#d525db', '#25dbbd'];
	var secondaryColors = ['#ecde11', '#db2543', '#db6825', '#040505']


  svgs = svgs.replace(/#ffffff/g, getRandom(primaryColors));
  svgs = svgs.replace(/#fff/g, getRandom(primaryColors));
  svgs = svgs.replace(/#231f20/g, getRandom(secondaryColors));
  

		// write svg block to file
		//fs.writeFile(svgFilename, html, function(err) {
		//	if(err) {
		//		return console.log(err);
		//	}
		//
		//	console.log("The file was saved!");
		//}); 