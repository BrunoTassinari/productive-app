import "../List/List.css";
import { Button, ImgBasic } from "../Index";
export function List({ itens, remove, mark, ...props }) {
  return (
    <ul {...props}>
      {itens.map((item) => (
        <li className={item.mark ? "item-marker" : ""} key={item.key}>
          <span>{item.name}</span>
          
          <div>
            <Button
              onClick={() => {
                remove(item);
              }}

              className="btn-icon"
            >
              <ImgBasic src={"./src/assets/images/trash.png"}/>
            </Button>
            <Button
              onClick={() => {
                mark(item);
              }}

              className="btn-icon"
            >
              <ImgBasic src={"./src/assets/images/checkbox.png"}/>
            </Button>
          </div>
        </li>
      ))}
    </ul>
  );
}
