import Typed from 'react-typed'

export const TypedBlock = ({INTRO}) => {
  return (
    <div className="hero-welcome-text h-50">
      <Typed
        strings={INTRO}
        typeSpeed={70}
        loopCount={1}
        className="self-typed"
        cursorChar="|"
      ></Typed>
    </div>
  )
}
