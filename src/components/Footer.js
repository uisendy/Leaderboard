const Footer = () => {
  const footer = document.createElement("footer");
  footer.innerHTML = `<div class="bg-yellow-400 mt-16">
  <div class="max-w-screen-xl px-4 py-8 mx-auto sm:px-6 lg:px-8">
    <div class="sm:flex sm:items-center sm:justify-between">
      <div class="flex justify-center text-teal-600 sm:justify-start">
        LeaderBoard
      </div>

      <p class="mt-4 text-sm text-center text-gray-500 lg:text-right lg:mt-0">
        Copyright &copy; 2022. All rights reserved.
      </p>
    </div>
  </div>
</div>
`;
  return footer;
};

export default Footer;
