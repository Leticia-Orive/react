import './styles/PrimerComponente.css'
//importamos PropTypes
import PropTypes from 'prop-types'

/*Creamos variables de entorno para poder usar JSX
const string = 'Esto es un texto'
const number = 123456
const array = ['Curso de React', 'Youtube', 4, 100000]
const boolean = true
const funcion = () => 1+1
const objeto = {nombre: 'Curso de javaScript', duracion: 4}
const fecha = new Date()*/



//Función que retorna un h1 con el texto Hola Mundo
export const PrimerComponente = ({titulo, subtitulo} ) => {
   
  return (

<>
    <h1>{titulo} </h1>
    <h2>{subtitulo +1}</h2>
    </>
     
  )
}

    PrimerComponente.propTypes = {
        titulo: PropTypes.string.isRequired,
        subtitulo: PropTypes.string.isRequired
    }
    PrimerComponente.defaultProps = {
        titulo: 'Titulo por defecto',
        subtitulo: 0
    }


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
    /* o tambien con json.stringify
    <h1>{JSON.stringify(fecha)}</h1>*/


    /*Antes para que no nos de error metiamos todo en un div ahora con React.Fragment no es necesario
    //pero si queremos usar un div lo podemos hacer
    //Ahora tambien nos funcionaria quitando la importacion de Fragment y poniendo <></>
    <>
      <h1>Variables en JSX</h1>
    <h4>Variable tipo String:</h4><p>{string}</p>
    <h4>Variable tipo number:</h4><p>{number}</p>
    <h4>Variable tipo array:</h4><p>{array}</p>
    <h4>Variable tipo boolean:</h4><p>{boolean}</p>
    <h4>Variable tipo funcion:</h4><p>{funcion()}</p>  
    </>*/
    
    
 
