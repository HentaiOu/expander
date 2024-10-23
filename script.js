let macros = {};

document.getElementById('fileInput').addEventListener('change', (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = function(e) {
        try {
            macros = JSON.parse(e.target.result);
        } catch (error) {
            alert("Error al cargar el archivo JSON.");
        }
    };

    reader.readAsText(file);
});

document.getElementById('expandButton').addEventListener('click', () => {
    const input = document.getElementById('macroInput').value.trim();
    const output = document.getElementById('output');
    output.textContent = macros[input] || "Macro no encontrada.";
});
