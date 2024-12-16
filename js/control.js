import { PDFDocument } from 'https://cdn.jsdelivr.net/npm/pdf-lib/dist/pdf-lib.esm.min.js';

const des = ['./des_b.pdf','./des_m.pdf','./des_c.pdf']

async function combinePDFs(pdfArray) {
    const combinedPdf = await PDFDocument.create();

    for (const pdfBytes of pdfArray) {
        const pdfDoc = await PDFDocument.load(pdfBytes);
        const pages = await combinedPdf.copyPages(pdfDoc, pdfDoc.getPageIndices());
        pages.forEach(page => combinedPdf.addPage(page));
    }

    const combinedPdfBytes = await combinedPdf.save();
    return combinedPdfBytes;
}


const crossd = document.querySelector(".des .cross"),
    tickd = document.querySelector(".des .tick"),
    crossco = document.querySelector(".com .cross"),
    tickco = document.querySelector(".com .tick"),
    crossce = document.querySelector(".cen .cross"),
    tickce = document.querySelector(".cen .tick");

crossd.addEventListener("click", e =>{
    crossd.classList.add("nada");
    tickd.classList.remove("nada");
});

tickd.addEventListener("click", e =>{
    crossd.classList.remove("nada");
    tickd.classList.add("nada");
})

crossco.addEventListener("click", e =>{
    crossco.classList.add("nada");
    tickco.classList.remove("nada");
});

tickco.addEventListener("click", e =>{
    crossco.classList.remove("nada");
    tickco.classList.add("nada");
})

crossce.addEventListener("click", e =>{
    crossce.classList.add("nada");
    tickce.classList.remove("nada");
});

tickce.addEventListener("click", e =>{
    crossce.classList.remove("nada");
    tickce.classList.add("nada");
})

const desayunos = [["desayuno accesible 1", "desayuno accesible 2", "desayuno accesible 3", "desayuno accesible 4", "desayuno accesible 5", "desayuno accesible 6", "desayuno accesible 7"],
["desayuno moderado 1", "desayuno moderado 2", "desayuno moderado 3", "desayuno moderado 4", "desayuno moderado 5", "desayuno moderado 6", "desayuno moderado 7"],
["desayuno premium 1", "desayuno premium 2", "desayuno premium 3", "desayuno premium 4", "desayuno premium 5", "desayuno premium 6", "desayuno premium 7"]
];
const comidas = [["comida accesible 1", "comida accesible 2", "comida accesible 3", "comida accesible 4", "comida accesible 5", "comida accesible 6", "comida accesible 7"],
["comida moderada 1", "comida moderada 2", "comida moderada 3", "comida moderada 4", "comida moderada 5", "comida moderada 6", "comida moderada 7"],
["comida premium 1", "comida premium 2", "comida premium 3", "comida premium 4", "comida premium 5", "comida premium 6", "comida premium 7"]];

const cenas = [["cena accesible 1", "cena accesible 2", "cena accesible 3", "cena accesible 4", "cena accesible 5", "cena accesible 6", "cena accesible 7"],
["cena moderada 1", "cena moderada 2", "cena moderada 3", "cena moderada 4", "cena moderada 5", "cena moderada 6", "cena moderada 7"],
["cena premium 1", "cena premium 2", "cena premium 3", "cena premium 4", "cena premium 5", "cena premium 6", "cena premium 7"]];

function seleccionarTipo(gastoD) {
    var tipo
    switch (true) {
        case gastoD>=50 && gastoD<= 150: //economico
            console.log("economico")
            tipo = 0;
            break;

        case gastoD>=151 && gastoD<=300: //accesible
        console.log("accesible")
        tipo = 1;
            break;
        case gastoD>300: //premium
        tipo = 2;
            break;
    }
    return tipo;
}

function getRandomElements(array, count) {
    var shuffled = array.sort(() => Math.random() - 0.5);
    return shuffled.slice(0, count);
}

function generarMenu(comida, menu) {
    gastoD = parseInt(document.getElementById("costo").value);
    tipo = seleccionarTipo(gastoD);
    console.log(tipo)
    comida = getRandomElements(menu[tipo], 7);
    return comida
    /*for (let index = 0; index < 7; index++) {
        elementoAleatorio = menu[tipo][Math.floor(Math.random() * menu.length)];
        if (index>0) {
        coincidencia = false;
        do {
                comida.forEach(element => {
                    if (element === elementoAleatorio) {
                        coincidencia = true;
                        elementoAleatorio = menu[tipo][Math.floor(Math.random() * menu.length)];
                      }
                      else{
                        coincidencia = false
                      }
                });
            
        } while (coincidencia == true);
        }

        comida[index] = elementoAleatorio;
    }*/
}
function generarTabla() {
    tableBody = document.getElementById("menu");
    desayunoSemana = [];
    comidaSemana = [];
    cenaSemana = [];
    
    generado = document.querySelectorAll(".generado")
    if (generado.length > 0) {
        generado.forEach(element => {
            element.remove();
        });
    }

    if (document.querySelector(".des .cross").classList.length > 1) {
        desayunoSemana = generarMenu(desayunoSemana,desayunos);
        tableBody.innerHTML += `<tr class="generado"> <td>${desayunoSemana[0]}</td> <td>${desayunoSemana[1]}</td> <td>${desayunoSemana[2]}</td> <td>${desayunoSemana[3]}</td> <td>${desayunoSemana[4]}</td> <td>${desayunoSemana[5]}</td> <td>${desayunoSemana[6]}</td> </tr>`
    }
    if (document.querySelector(".com .cross").classList.length > 1) {
        comidaSemana = generarMenu(comidaSemana,comidas);
        tableBody.innerHTML += `<tr class="generado"> <td>${comidaSemana[0]}</td> <td>${comidaSemana[1]}</td> <td>${comidaSemana[2]}</td> <td>${comidaSemana[3]}</td> <td>${comidaSemana[4]}</td> <td>${comidaSemana[5]}</td> <td>${comidaSemana[6]}</td> </tr>`
    }
    if (document.querySelector(".cen .cross").classList.length > 1) {
        cenaSemana = generarMenu(cenaSemana,cenas);
        tableBody.innerHTML += `<tr class="generado"> <td>${cenaSemana[0]}</td> <td>${cenaSemana[1]}</td> <td>${cenaSemana[2]}</td> <td>${cenaSemana[3]}</td> <td>${cenaSemana[4]}</td> <td>${cenaSemana[5]}</td> <td>${cenaSemana[6]}</td> </tr>`
    }
    
    document.getElementById("tabla").classList.add("tabla");
    document.getElementById("tabla").classList.remove("nada");
    
    console.log(desayunoSemana);
    console.log(comidaSemana);
    console.log(cenaSemana);
    console.log(generado)
}

const prueba = document.querySelector(".generar");
prueba.addEventListener("click", async (e) => {
    const gastoD = parseInt(document.getElementById("costo").value);
    const tipo = seleccionarTipo(gastoD);

    const pdfArray = [];

    // Gestiona los PDFs según la selección
    if (document.querySelector(".des .cross").classList.length > 1) {
        if (tipo === 0) {
            pdfArray.push(fetch('./des_b.pdf').then(res => res.arrayBuffer()));
        } else if (tipo === 1) {
            pdfArray.push(fetch('./des_m.pdf').then(res => res.arrayBuffer()));
        } else if (tipo === 2) {
            pdfArray.push(fetch('./des_c.pdf').then(res => res.arrayBuffer()));
        }
    }

    if (document.querySelector(".com .cross").classList.length > 1) {
        // Agrega más lógica aquí si es necesario para las comidas
        if (tipo === 0) {
            pdfArray.push(fetch('./com_b.pdf').then(res => res.arrayBuffer()));
        } else if (tipo === 1) {
            pdfArray.push(fetch('./com_m.pdf').then(res => res.arrayBuffer()));
        } else if (tipo === 2) {
            pdfArray.push(fetch('./com_c.pdf').then(res => res.arrayBuffer()));
        }
    }

    if (document.querySelector(".cen .cross").classList.length > 1) {
        // Agrega más lógica aquí si es necesario para las cenas
        if (tipo === 0) {
            pdfArray.push(fetch('./cen_b.pdf').then(res => res.arrayBuffer()));
        } else if (tipo === 1) {
            pdfArray.push(fetch('./cen_m.pdf').then(res => res.arrayBuffer()));
        } else if (tipo === 2) {
            pdfArray.push(fetch('./cen_a.pdf').then(res => res.arrayBuffer()));
        }
    }

    // Resuelve todas las promesas de fetch antes de combinarlas
    const resolvedPdfArray = await Promise.all(pdfArray);

    // Combina los PDFs y descarga el resultado
    const combinedPdfBytes = await combinePDFs(resolvedPdfArray);

    const blob = new Blob([combinedPdfBytes], { type: 'application/pdf' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'recetario.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});

/*prueba.addEventListener("click", e =>{

     var gastoD = parseInt(document.getElementById("costo").value);
     var tipo = seleccionarTipo(gastoD);

    const pdfArray = [];
    if (document.querySelector(".des .cross").classList.length > 1) {
        if (tipo = 0) {
            pdfArray[0] = fetch('./des_b.pdf').then(res => res.arrayBuffer())
            console.log = tipo;
        }
        
    }
    if (document.querySelector(".com .cross").classList.length > 1) {
        comidaSemana = generarMenu(comidaSemana,comidas);
        tableBody.innerHTML += `<tr class="generado"> <td>${comidaSemana[0]}</td> <td>${comidaSemana[1]}</td> <td>${comidaSemana[2]}</td> <td>${comidaSemana[3]}</td> <td>${comidaSemana[4]}</td> <td>${comidaSemana[5]}</td> <td>${comidaSemana[6]}</td> </tr>`
    }
    if (document.querySelector(".cen .cross").classList.length > 1) {
        cenaSemana = generarMenu(cenaSemana,cenas);
        tableBody.innerHTML += `<tr class="generado"> <td>${cenaSemana[0]}</td> <td>${cenaSemana[1]}</td> <td>${cenaSemana[2]}</td> <td>${cenaSemana[3]}</td> <td>${cenaSemana[4]}</td> <td>${cenaSemana[5]}</td> <td>${cenaSemana[6]}</td> </tr>`
    }

    (async () => {
        // Array con los PDF en formato Uint8Array o ArrayBuffer
       
    
        const combinedPdfBytes = await combinePDFs(pdfArray);
    
        // Descargar el archivo combinado
        const blob = new Blob([combinedPdfBytes], { type: 'application/pdf' });
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = 'combined.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    })();
});*/
