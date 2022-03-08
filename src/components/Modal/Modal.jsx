import "./Modal.css"

export function Modal({children, className}) {
  return (
    <div className={`modal ${className}`}>
      {children}
    </div>
  )
}