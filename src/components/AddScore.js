const AddScore = () => {
  const addScoreContainer = document.createElement("div");
  addScoreContainer.innerHTML = `
  <div class="form-container hidden lg:block">
    <div class = "form-area">
    <h2 class="Form-header text-xl pb-10">Add your Score</h2>
    <form>
      <div class="name-input-area relative z-0 mb-6 w-full group">
        <input
          type="text"
          name="name"
          id="name"
          class="name-input block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-yellow-400 focus:outline-none focus:ring-0 focus:border-yellow-400 peer"
          placeholder=" "
          required=""
        />
        <label
          for="name"
          class="name-label peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-yellow-400 peer-focus:dark:text-yellow-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >Name</label
        >
      </div>
      <div class="score-input-area relative z-0 mb-6 w-full group">
        <input
          type="number"
          name="score"
          id="score"
          class="score-input block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-yellow-400 focus:outline-none focus:ring-0 focus:border-yellow-400 peer"
          placeholder=" "
          required=""
        />
        <label
          for="score"
          class="score-label peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-yellow-400 peer-focus:dark:text-yellow-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >Score</label
        >
      </div>
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
          Submit
        </span>
      </button>
    </form>
    </div>
  </div>`;
  return addScoreContainer;
};

export default AddScore;
