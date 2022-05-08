# COMPOUND COMPONENT PATTERN (Patron de composicion de componentes)

>#### Algunos puntos importantes del proyecto: 
              - Cuenta con la implementacion de react-roouter-dom para varias vistas, 
              - useContext para tener un alcance global de mi contexto a traves de un Provider, 
              - Presenta CSS de manera modular

>#### INTRO: 
Patron aplicable a caso tipico de un select con varios options (cada uno esta si es que lo necesito - provienen de afuera).
Con su aplicacion se logra dar el poder al usuario para que pueda participar en el control del component.
Se crea una fn por cada componente que retorna un jsx. Luego lo pinto dentro del un contenedor (ej div), y debo asignar sus props.

	
>#### APLICACION DEL PATRON
	- se utiliza para construir a traves del componente padre los componentes hijos (opcion de añadir tantos elementos como se necesite)
	- otra aplicación tipica es transformar al componente padre en HOC (High Order Component)
	- desde el componente Padre seteo las instancias para poder enviar las props necesarias a los distitnos componentes.  

            

## Comenzando 🚀

Estas instrucciones te permitirán obtener una copia del proyecto en funcionamiento en tu máquina local para propósitos de desarrollo y pruebas.


### Instalación 🔧

### `Clonar` 
Clonar el proyecto utilizando git clone  dentro de tu entorno local para poder obtener el codigo fuente. 
```
git clone https://github.com/D-Perez85/ReactTS-Compound-Pattern.git

```
### `Instalar Dependencias`
Instala las dependencias necesarias para poder correr la App...
```
npm install
```
### `Run`
Una vez instaladas las dependencias podras correr la App con el comando start en el directorio del proyecto. 
Una vez compilado podras ver el resultado en http://localhost:3000/
```
npm start
```

## Learn More About React

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

##
Made with ❤️ by [Damian Perez](https://github.com/D-Perez85) 😊
