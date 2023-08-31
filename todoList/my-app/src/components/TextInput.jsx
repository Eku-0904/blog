export function TextInput({ handle }) {
    return (
      <input onKeyDown={handle} className="inputBox" placeholder="what's next?" />
    );
  }