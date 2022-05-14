# Test PSH Boichetta Alejandro

### Información respecto a la resolución de las tareas:

• Utilicé **Javascript** como lenguaje, **Cypress v9.6.1** como herramienta de automatización, y **Visual Studio Code** como editor de código.  
• Desarrollé la escritura del código mediante el **modelo page object**, de manera tal de poder acceder a la información que requiero mediante clases, minimizando el hardcodeo. El **builder Country** es utilizado para obtener la información referente a la tarea 1, mientras que el **page AutomationPractice** es utilizado a lo largo de todas las tareas, y sirve para llamar a los localizadores de los elementos del DOM. La única exepción a este caso es el header del iframe de la tarea 4, debido a que el método utilizado para interactual con dicho elemento requiere si o si su localizador como argumento.  
• Para la resolución de la tarea 4, utilicé la **librería Cypress iframe**.  
• El código está escrito 100% en ingles, simulando ser un desarrollo real del puesto de trabajo en cuestión

---

### A continuación, algunos detalles de la resolución de cada una de las  tareas:

1) Utilicé el builder Country para acceder a dos datos: "Vene" y "Venezuela". Primero escribí "Vene" en el input de paises con el método type, y luego mediante ese mismo type interactué con el teclado para obtener la sugerencia "Venezuela". Finalmente, validé que el input posee el valor "Venezuela".

2) Iteré la columna de precios mediante el método each de Cypress para descubrir cual de ellos es mayor a 30. Luego de encontrarlo iteré las otras dos columnas, y mediante el método eq de Cypress y el index generado por el método each, obtuve la información de instructor y contenido de ese curso para después plasmarlo en la consola de cypress mediante cy.log.

3) Para este caso también utilicé el metodo each, esta vez para iterar los datos de la columna Amount para luego sumarlos entre si y obtener la suma total de Amount. Una vez obtenido este dato, validé que este se encuentra presente en el texto "Total Amount Collected: 296" del div totalAmount.

4) En este caso utilicé la librería Cypress iframe, que permite manipular iframes y sus elementos. Una vez cargado el iframe mediante su id, procedo nuevamente utilizar el método each para tomar todos los elementos presentes en el header, y luego utilizo el método push de Javascript para poder agregar cada elemento del header en un array. Para visualizar el array, dado que cy.log sobre un array muestra el objeto (es decir, "Array[n]") me propuse a convertir el contenido del array en un string en donde cada objeto es separado por una coma, lo cual fue realizado mediante el método join de Javascript. Si bien esto no está mostrando el array en si con su contenido, es importante destacar que el array resultante puede ser utilizado normalmente (por ejemplo, para hacer un assert en donde se consulte si cierto header se encuentra dentro del array, o no).
