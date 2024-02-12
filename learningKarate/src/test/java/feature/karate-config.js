function fn() {
var env = karate.env
if(!env){
env = 'dev';
}
var config = {
env: env,
myVarName: 'hello Karate',
baseUrl: 'https://restful-booker.herokuapp.com',
tokenID: 'a16dac3a42ab702'
}
if (env == 'dev'){
// customize
// e.g.
} else if (env == 'e2e')
{
	//customize
}
return config;
	
}