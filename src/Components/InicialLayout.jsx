import '../App.css'

export const InicialLayout = ({ changeInitialLayout }) => {

  


  return (
    <>
      <div className="contenedor">
        <div className='contenedor'>
          <h2> Holanda </h2>
          <p>Te preguntarás: <span style={{"textDecoration": "underline"}}>¿Franklin quéjesto?</span></p>
        </div>
        <div>
          <p className='parrafo-narrativo'>
            Pues, es 26 de marzo, y solo por eso siento que es una bonita 
            ocasión para recordar un poco lo que hemos 
            hecho juntos a lo largo del año
          </p>

          <button onClick={ () => changeInitialLayout() }>
            Recordar
          </button>
        </div>
      </div>
    </>
  )
}
