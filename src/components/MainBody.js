import LeaderBoard from "./LeaderBoard.js";
import AddScore from "./AddScore.js";

const MainBody = () => {
  const main = document.createElement("main");
  main.className = "main";

  const mainHead = document.createElement("div");
  mainHead.className = "main-head";
  mainHead.innerHTML = `
  <div class = "recent-score pb-10 flex justify-between lg:w-[40%] mx-[6.5%]"> 
    <h2 class = " text-xl md:text-4xl" > Recent Score </h2>
    <button
      type="submit"
      class="relative inline-block group focus:outline-none focus:ring"
    >
      <span
        class="absolute inset-0 transition-transform translate-x-0 translate-y-0 bg-yellow-300 group-hover:translate-y-1.5 group-hover:translate-x-1.5"
      ></span>
      <span
        class="relative inline-block px-8 py-3 text-sm font-bold tracking-widest uppercase border-2 border-current"
      >
        Refresh
      </span>
    </button>
  
  `;

  const container = document.createElement("div");
  container.className = "main-container";

  container.appendChild(LeaderBoard());
  container.appendChild(AddScore());

  main.appendChild(mainHead);
  main.appendChild(container);

  return main;
};

export default MainBody;
