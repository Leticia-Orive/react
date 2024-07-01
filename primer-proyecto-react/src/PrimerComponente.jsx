//Creamos variables de entorno para poder usar JSX
const string = 'Esto es un texto'
const number = 123456
const array = ['Curso de React', 'Youtube', 4, 100000]
const boolean = true
const funcion = () => 1+1
const objeto = {nombre: 'Curso de javaScript', duracion: 4}
const fecha = new Date()

//Función que retorna un h1 con el texto Hola Mundo
export const PrimerComponente = () => {
  return (
    //Vamos a usar las variables de entorno
    /*vamos a usar la variable string
    <h1>{string}</h1>*/
    /*vamos a usar la variable number
    <h1>{number}</h1>*/
    /*vamos a usar la variable array
    <h1>{array}</h1>*/
    /*vamos a usar la variable boolean
    <h1>{boolean}</h1>*/
    /*vamos a usar la variable funcion con los parentesis la estamos ejecutando si no los ponemos solo mostrara la funcion sin ejecutarla
    <h1>{funcion()}</h1>*/
    /*vamos a usar la variable objeto*/
   /*Si le pasamos objeto solo la consola nos va a tirar este error Objects are not valid as a React child (found: object with keys {nombre, duracion}). If you meant to render a collection of children, use an array instead. y lo mismo pasa con fecha
    <h1>{objeto}</h1>*/
    /*Para solucionar esto podemos usar JSON.stringify
    <h1>{JSON.stringify(objeto)}</h1>*/
    /*vamos a usar la variable fecha
    <h1>{fecha}</h1>*/
    // o tambien con json.stringify
    <h1>{JSON.stringify(fecha)}</h1>
    
  
  )
}
