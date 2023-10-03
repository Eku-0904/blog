import { Icons } from "./icons";

export function SidebarItem() {
  return (
    <div>
      {Icons.map((icon) => (
        <div className="SidebarDivorce">
          {icon.svg}

          {icon.title}
        </div>
      ))}
    </div>
  );
}
