import { Icons } from "./icons";

export function SidebarAvatar() {
  return (
    <div>
      {Icons.map((icon) => (
        <div className="SidebarDivorce">
          <img src={icon.img} />

          {icon.title}
        </div>
      ))}
    </div>
  );
}
