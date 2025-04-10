import { useState } from "react";

const TextUpdater = () => {
  const [text, setText] = useState("");

  return (
    <div className="p-4 flex justify-center items-center">
      <input
        type="text"
        placeholder="Type something..."
        className="border border-gray-300 p-2 rounded-md w-100"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <p className="mt-2 text-lg font-semibold">{text}</p>
    </div>
  );
};

export default TextUpdater;
