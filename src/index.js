import "./style.css";
import MainBody from "./components/MainBody.js";
import Footer from "./components/Footer.js";
import APIrequest from "./ApiRequest.js";

const newRequest = new APIrequest();
class MyScore {
  constructor(user, score) {
    this.user = user;
    this.score = score;
  }
}

window.addEventListener("load", async () => {
  document.body.appendChild(await MainBody());
  document.body.appendChild(Footer());

  const formData = document.querySelector(".form");
  const refreshBtn = document.querySelector(".refresh-btn");

  formData.addEventListener("submit", async (e) => {
    e.preventDefault();
    const user = document.querySelector(".name-input").value;
    const score = document.querySelector(".score-input").value;
    const myScore = new MyScore(user, score);
    await APIrequest.postScore(myScore, `games/${newRequest.gameID}/scores`);
    formData.reset();
  });

  refreshBtn.addEventListener("click", async () => {
    await APIrequest.getScores();
    window.location.reload();
  });
});
