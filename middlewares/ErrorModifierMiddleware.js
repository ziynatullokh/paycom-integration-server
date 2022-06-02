module.exports = function ErrorModifierMiddleware(req, res, next) {
	let error = {};

	error.invalidAmount = function (res) {
		res.status(200).json({
			allow: false,
			error: -31049,
			
		});
	};

	error.invalidAccount = function (res) {
		res.status(200).json({
			allow: false,
			error: -31050,
			
		});
	};

	error.cantDoOperation = function (res) {
		res.status(200).json({
			error: {
				code: -31008,
				message: {
					ru: "Мы не можем сделать операцию",
					uz: "Biz operatsiyani bajara olmaymiz",
					en: "We can't do operation",
				},
				data: "user_id", // you can change it
			},
		});
	};

	error.transactionNotFound = function (res) {
		res.status(200).json({
			error: {
				code: -31003,
				message: {
					ru: "Мы не можем сделать операцию",
					uz: "Biz operatsiyani bajara olmaymiz",
					en: "We can't do operation",
				},
			},
		});
	};

	error.alreadyDone = function (res) {
		res.status(200).json({
			error: {
				code: -31007,
				message: {
					ru: "Мы не можем сделать операцию",
					uz: "Biz operatsiyani bajara olmaymiz",
					en: "We can't do operation",
				},
			},
		});
	};

	res.error = error;
	next();
};
