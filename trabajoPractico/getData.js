const https = require('https');

// URL de la que haremos el GET
const url = 'https://reclutamiento-dev-procontacto-default-rtdb.firebaseio.com/reclutier.json';

// Hacer una solicitud GET
https.get(url, (res) => {
  let data = '';

  // Recibir datos en fragmentos
  res.on('data', (chunk) => {
    data += chunk;
  });

  // Al finalizar la recepción de datos
  res.on('end', () => {
    try {
      const registros = JSON.parse(data);
      console.log('Registros obtenidos:', registros);
    } catch (error) {
      console.error('Error al parsear JSON:', error.message);
    }
  });

}).on('error', (err) => {
  console.error('Error al realizar la solicitud:', err.message);
});

