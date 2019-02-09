/*  author : wahyuhadi */

exports.Welcome = async (req, res, next) => {
	let ip = req.connection.remoteAddress;
	let author = {author : "Rahmat Wahyu hadi", connection_from : ip}
    return res.status(200).json({error: false,code: 200, status:"success", message: "Apps runnings", result: author});
};

exports.Mid = async (req, res, next) => {
    let data = {"name" : "wahyu hadi"}
    res.locals.data = data; /* middleware 1 */
    next()
};

exports.Mid2 = async (req, res, next) => {
    /* res.locals.data get fconnection from Mid Controllers */
	let ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    return res.status(200).json({ error: false, code: 200, status: 'success', message: "Apps runnings", result: res.locals.data, connection_from : ip });
};