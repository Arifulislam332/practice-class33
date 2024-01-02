const main = document.querySelector(".main");

export function renderData(posts) {
  posts.forEach((post) => {
    const template = `
      <div>
        <h1 class="text-2xl p-5 m-5 bg-violet-500 text-white font-serif font-medium border-2 border-yellow-600 rounded">${post.id} - ${post.title}</h1>
      </div>
    `;
    main.insertAdjacentHTML("beforeend", template);
  });
}
export function renderError(message) {
  const template = `<p class="text-5xl text-center text-red-700">${message}</p>`;
  main.insertAdjacentHTML("beforeend", template);
}
export function renderLoading(loadingState) {
  const template = `<p class="loading text-4xl text-center">Loading...</p>`;
  if (!loadingState) {
    document.querySelector(".loading").style.display = "none";
  } else {
    main.insertAdjacentHTML("beforeend", template);
  }
}
