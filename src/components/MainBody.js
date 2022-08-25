import LeaderBoard from "./LeaderBoard.js";
import AddScore from "./AddScore.js";

const MainBody = () => {
  const main = document.createElement("main");
  main.className = "main";
  main.appendChild(LeaderBoard());
  main.appendChild(AddScore());
  return main;
};

export default MainBody;
