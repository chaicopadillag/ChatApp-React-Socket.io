const { toggleOnline } = require('../controllers/SocketsController');
const { comprobarJsonWebToken } = require('../helpers/jsonWebToken');

class Sockets {
	constructor(io) {
		this.io = io;

		this.socketEvents();
	}

	socketEvents() {
		// On connection
		this.io.on('connection', async (socket) => {
			const [valido, uid] = comprobarJsonWebToken(socket.handshake.query['x-token']);

			if (!valido) {
				console.log('Cliente con Token no Identificado');
				return socket.disconnect();
			}
			await toggleOnline(uid);
			/**
			 * TODO: validar jwt
			 * si el token no es válido desconectar
			 */
			// FIXME: saber que el usuario está activo mediante el UID
			// TODO: emiti todos los usuarios conectados
			// FIXME: Socket join uid
			// TODO: escuchar cuando el cliente manda un mensaje mensje personal
			// FIXME: Deconectar mandar en la db que el usario se desconecto
			// TODO: emitir todos los usuarios conectados

			socket.on('disconnect', async () => {
				console.log('Cliente desconectado');
				await toggleOnline(uid);
			});
		});
	}
}

module.exports = Sockets;
