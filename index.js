var data = [10, 30, 50, 20, 100, 99];

var x = d3.scaleLinear([0, d3.max(data)], [0, 420]);

d3.select(".chart")
	.selectAll("div")
	.data(data)
	.enter()
	.append("div")
	.style("width", function(d) {
		return x(d) + "px";
	})
	.text(function(d) {
		return d;
	});
