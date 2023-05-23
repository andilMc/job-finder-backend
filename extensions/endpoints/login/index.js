const bodyParser = require('body-parser');

 module.exports = (router,{services,database }) => {

	router.use(bodyParser.json());

	router.post('/', async (req, res) => {

		let email = req.body.email;
		let password = req.body.password;

		try {
			let user = await database.select("*").from("user")
		.where({email})
		.andWhere({password})
		.first();
		if (user != null) {
			res.json({code:1,user : user});
			
		} else {
			res.json({code : 0,message :"Unknowne User !!"});
		} 
		} catch (error) {
			res.json({code :-1,err : error});
		}	
	});
};

