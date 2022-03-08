import "./ImgBasic.css"
export function ImgBasic({className,...props}){
  return (
    <img className={`img-basic ${className}`} {...props} />
  )
}