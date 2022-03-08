export function Text({title, className, ...props}){
  return (
    <span className={`basic-text ${className}`} {...props}> 
      {title}
    </span>
  )
}