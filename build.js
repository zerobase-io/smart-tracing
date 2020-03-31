const { transpileToJavascript, pugToJs, minifyJs, minifyCss, convertPugtoHTML } = require('./buildUtils');

transpileToJavascript()
	.then(() => {
		pugToJs().then(()=>{
			minifyJs();
			minifyCss();
			convertPugtoHTML();
		})
		.catch(console.log);
	})
	.catch(console.log);
