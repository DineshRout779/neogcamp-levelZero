import { useState } from "react";

const emojiData = {
  "😀": "smile",
  "🤐": "zipped mouth",
  "😴": "sleepy",
  "😢": "crying",
  "🤣": "Rolling on the Floor Laughing",
  "🙄": "Face with Rolling Eyes",
  "🤓": "Nerd Face",
  "😍": "Heart Eyes",
  "🤗": "Hugging Face",
  "😏": "Flirting"
};

const emojis = Object.keys(emojiData);

const Main = () => {
  const [emoji, setEmoji] = useState("");
  const [meaning, setMeaning] = useState("Meaning will appear here...");

  const inputChangehandler = (e) => {
    const inputEmoji = e.target.value;
    setEmoji(inputEmoji);
    !inputEmoji ? setMeaning("Meaning will appear here..") 
    : emojiData[inputEmoji] ? 
    setMeaning(emojiData[inputEmoji]) 
    : setMeaning("Sorry!! Emoji not found.");
  };

  const handleClick = (e) => {
    const inputEmoji = e.target.textContent;
    setEmoji(inputEmoji);
    setMeaning(emojiData[inputEmoji])
  };

  const emojiList = emojis.map((emoji) => {
    return (
      <span className="emoji" key={emoji} onClick={handleClick}>
        {emoji}
      </span>
    );
  });

  return (
    <main>
      <input
        onChange={inputChangehandler}
        value={emoji}
        type="text"
        placeholder="search for an emoji"
      />
      <div>{meaning}</div>
      <div className="emojiList">{emojiList}</div>
    </main>
  );
};

export default Main;
