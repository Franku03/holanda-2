import "../styles/EncitiNeedsHelp.css"
import 'animate.css';

export const EncitiNeedsHelp = () => {
  return (
    <div className="animate__animated animate__fadeIn">
      <div className="contenedor">
        <div className='contenedor'>
          <h2 className="animate__animated animate__fadeIn animate__delay-1s"> ¡VICTORIA! </h2>
          <p className="animate__animated animate__fadeIn animate__delay-2s">
            Te preguntarás:
            <br /> 
            <span style={{"textDecoration": "underline"}}>¿Franklin quéjesto?</span>
          </p>
        </div>
        <div>
          <p className='parrafo-narrativo animate__animated animate__fadeIn animate__delay-3s'>
            Pues muy sencillo:
          </p>

          <p className='parrafo-narrativo animate__animated animate__fadeIn animate__delay-4s'>
            ¡NCT NECESITA TU AYUDA!
          </p>

          <p className='parrafo-narrativo animate__animated animate__fadeIn animate__delay-4s'>
            Parece que Mark y Haechan van casarse, pero el resto de Dream y NCT no pueden ayudarles a cubrir el gasto de su boda en las 
            cataratas del Niágara.

            Por ello, ¡es necesario que hagas click en el siguiente botón para que descubras de qué maneras puedes ayudar a
            estos dos tortolos!

            Jisung &#40;Sí, Park Jisung&#41; me solicitó personalmente que hiciera esta página.
          </p>

          <p className='parrafo-narrativo animate__animated animate__fadeIn animate__delay-5s'>
            Por favor Victoria, de ti y de tus comadres depende el destino del Markhyuk, pásaselo a más gente si es posible D:
          </p>

          <a href="/public/Holanda 2 - El mar de los monstruos.pdf" download className='parrafo-narrativo animate__animated animate__fadeIn animate__delay-5s'>
            <button className="help-button">
                AYUDA AL MARKHYUK
            </button>
          </a>

        </div>
      </div>
    </div>
  )
}
