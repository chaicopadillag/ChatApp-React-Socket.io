const Usuario = require('../models/usuario');

const toggleOnline = async (uid) => {
	const usuario = await Usuario.findById(uid);
	usuario.online = !usuario.online;
	await usuario.save();

	return usuario;
};

const getUsuarios = async () => {
	const usuarios = await Usuario.find().sort('-online');
	return usuarios;
};

module.exports = { toggleOnline, getUsuarios };
