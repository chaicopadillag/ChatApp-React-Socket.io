const Usuario = require('../models/usuario');

const toggleOnline = async (uid) => {
	const usuario = await Usuario.findById(uid);
	usuario.online = !usuario.online;
	await usuario.save();

	return usuario;
};

module.exports = { toggleOnline };
