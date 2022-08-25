import "./style.css";
import PageTitle from "./components/PageTitle";
import MainBody from "./components/MainBody.js";
import Footer from "./components/Footer.js";

console.log(MainBody());

document.body.appendChild(PageTitle());
document.body.appendChild(MainBody());
document.body.appendChild(Footer());
