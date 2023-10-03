import { MenuRounds } from "./Menuitems";
export function Menu () {
    return (
      <div>
            <div className="menuBox">
      {MenuRounds.map((icon) => (
        <div className="menuTextsStyle">
          {icon.title}
        </div>
      ))}
    </div>
      </div>
    );
  }
  