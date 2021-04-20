import Typed from 'react-typed'

export const FlippingCard = ({ isFlipping, ROLES }) => {
  const card = (
    <>
      <div className={!isFlipping ? 'front' : 'back'}>
        <div className={'image ' + (!isFlipping ? 'image-1' : 'image-2')}>
          <div className="hero-section-content">
            <h2> I'm a </h2>
            <Typed
              loop
              strings={ROLES}
              typeSpeed={70}
              backSpeed={70}
              backDelay={1000}
              loopCount={0}
              className="self-typed"
              showCursor
              cursorChar="|"
            ></Typed>
          </div>

          <div
            className={!isFlipping ? 'shadow-custom' : 'shadow-custom-orange'}
          >
            <div className="shadow-inner"> </div>
          </div>
        </div>
      </div>
    </>
  )

  return (
    <div className={`flipper` + (isFlipping ? ' isFlipping' : '')}>
      {card}
    </div>
  )
}
