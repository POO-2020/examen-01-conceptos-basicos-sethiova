# Examen 01 Conceptos básicos

<img src="img/hotel.jpg" width="700">

# El Hotel

Se requiere desarrollar un sistema web que permita administrar las reservaciones de un hotel. Para este sistema se ha diseñado la siguiente arquitectura la cual deberás implementar utilizando JavaScript

<img src="img/diagrama-uml.png" width="800">

## Descripción de clases
La mayoría de los detalles de las clases para su implementación se pueden obtener del diagrama UML. Sin embargo a continuación se presentan algunas precisiones para algunos métodos o atributos de las clases.

--NOTA-- Para considerarse correctas, las respuestas (implementaciones) deberán aplicar de manera correcta los principios básicos de la programación orientada a objetos y las buenas prácticas para la escritura de código de programación.

### (2 Puntos) La clase Huesped

Representa los datos generales del huésped.

- (1 Punto) Atributos
  - nombre. El nombre completo del huésped, por ejemplo: Juan Pérez.
  - genero. El genero del huésped, puede ser masculino o femenino.
  
- (1 puntos) Métodos
  - getDescripción(). Regresa un string con la descripción del huésped como se muestra en el siguiente ejemplo: Juan Pérez (masculino).

## (5 puntos) La clase Reservacion

Representa una reservación de una habitación por uno o más huéspedes.

- (1 Punto) Atributos
  - numeroHabitacion. El número que identifica a la habiltación, por ejemplo: 1256 ó 2345.
  - fechaLlegada. La fecha de llegada de los huéspedes
  - noches. Número de noches reservadas
  - huespedes. Las personas que estarán hospedadas en esta habitación
  
- (4 Puntos) Métodos
  - (1 punto) getFechaFormatoCorte(). Regresa un string representando la fecha en el siguiente formato: 25/2/2000.
  - (1 punto) addHuesped(). Agrega un huesped a la reservación
  - (1 punto) getNumHuespedes(). Regresa el número de huéspedes que registrados en esta reservación 
  - (1 punto) print(). Imprime en consola un resumen de la reservación como el que se muestra en el siguiente ejemplo:
    - Habitación 1456
    - Fecha de Llegada 25/2/2020
    - 3 noches reservadas
    - Juan Pérez (masculino)
    - María Hernández(femenino)

## (3 Puntos) La clase Hotel

Representa a un hotel

- Atributos
  - nombre. Nombre del hotel
  - reservaciones. Las reservaciones que tiene el hotel

- (3 puntos) Métodos
  - (1 punto) getNumHuespedes(). Regresa el número de huéspedes que hay en todo el hotel.
  - (1 punto) getCostoReservaciones(). Regresa el costo total de todas las reservaciones que hay en el hotel.
  - (1 punto) print(). Imprime el resumen de todas las reservaciones del hotel
