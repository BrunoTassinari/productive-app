import "./Button.css"
export function Button({title, children, ...props }) {
  return (
    <button type="button" {...props}>
      {children}
    </button>
  );
}
