//Selector

let funcionalidad = parseInt(prompt('Selecciona la opción que quieras \n1: Buscar empanadas vegetarianas\n2: Buscar empanadas por relleno \n3: Mostrar todas las empanadas \n0: Salir'));

while (funcionalidad != 0){
    switch (funcionalidad){
        case 1:
            //Filtro de empanadas vegetarianas
            let empanadasVegetarianas = prompt('Mostrar empanadas\n1: Vegetarianas \n2: No vegetarianas');
            filtroVegetarianas(empanadasVegetarianas);
        break;

        case 2:
            //Busqueda de empanada por relleno
            let nombreEmpanada = prompt('Ingresa el relleno de la empanada que estas buscando');
            if (nombreEmpanada != ""){
                buscarEmpanadas(nombreEmpanada);
            } else {
                alert('No escribiste ningún relleno');
            }
        break;

        case 3:
            //Contar empanadas
            contarEmpanadas();
        break;

        default:
            alert('Opción incorrecta');
        break;
    }

    funcionalidad = parseInt(prompt('Selecciona la opción que quieras \n1: Buscar empanadas vegetarianas\n2: Buscar empanadas por relleno \n3: Mostrar todas las empanadas \n0: Salir'));
}


//Funciones

function filtroVegetarianas(vegetariana){

    let filtro=[];
    if(vegetariana == 1){
        filtro = empanadas.filter(empanadas => empanadas.vegetariana == "Si");
    }
    else if(vegetariana == 2){
        filtro = empanadas.filter(empanadas => empanadas.vegetariana == "No");
    }
    else {
        alert ('Selección invalida');
    };
    console.table(filtro);
}


function buscarEmpanadas(nombre){

    let empanadaEncontrada = empanadas.find(empanadas => empanadas.nombre.toLowerCase().includes(nombre.toLowerCase()));

    if (empanadaEncontrada != undefined){
        console.log(empanadaEncontrada);
    }
    else {
        console.log('No tenemos ese relleno');
    }
}



function contarEmpanadas(){

    console.log('Cantidad de empanadas: '+empanadas.length);
}
