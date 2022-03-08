import "./SubTitle.css"
export function SubTitle({title, ClassName}) {
    return (
        <h2 className={`subTitle ${ClassName}`}>{title}</h2>
    )
}