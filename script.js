const atajos = {
    '.hi': { tipo: 'texto', contenido: 'Hola, bienvenido' },
    //'.img': { tipo: 'imagen', url: 'https://ruta-a-tu-imagen.com/imagen.jpg' },
  };
  
  function expandirTexto(input) {
    const palabras = input.split(' ');
    const ultimaPalabra = palabras[palabras.length - 1];
    if (atajos[ultimaPalabra]) {
      const atajo = atajos[ultimaPalabra];
      if (atajo.tipo === 'texto') {
        palabras[palabras.length - 1] = atajo.contenido;
      } else if (atajo.tipo === 'imagen') {
        palabras[palabras.length - 1] = `<img src="${atajo.url}" alt="imagen"/>`;
      }
    }
    return palabras.join(' ');
  }
  
  // Ejemplo de uso
  const input = "Hola .hi";
  console.log(expandirTexto(input));
  