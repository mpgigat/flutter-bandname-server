const {io}=require('../index')

// Mensajes de Sockets
io.on('connection', client => {
    console.log('Cliente conectado')
    client.on('event', data => { /* … */ });
    client.on('disconnect', () => { console.log('Cliente desconectado') });
    client.on('mensaje', (value) => {
        console.log('Mensaje emitido', value);
        io.emit('mensaje',{admin:'Nuevo Mensaje'})
    });
});