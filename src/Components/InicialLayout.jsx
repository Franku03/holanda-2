import '../styles/InicialLayout.css'

export const InicialLayout = ({ changeInitialLayout }) => {
  return (
    <>
      <div className="sidebar-button animate__animated animate__fadeIn animate__delay-2s">
        <button onClick={ () => changeInitialLayout() }>sidebar</button>
      </div>
    </>
  )
}
