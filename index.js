var pack = require("./package.json");
dependencies = Object.keys(pack.dependencies);

for (var i = dependencies.length - 1; i >= 0; i--) {
	var name = dependencies[i];
	module.exports[name] = require(name);
}