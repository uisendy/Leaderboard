const PageTitle = (title = "Leaderboard") => {
  const header = document.createElement("header");
  header.classList.add("header");

  const heading = document.createElement("h1");
  heading.classList.add("heading");
  heading.textContent = title;

  header.appendChild(heading);

  return header;
};

export default PageTitle;
