import { renderData, renderError, renderLoading } from "./render";

export default async function fetchCountries() {
  try {
    renderLoading(true);
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    
    if (!res.ok) throw new Error("Something Error!");
    
    const data = await res.json();

    renderData(data);

  } catch (err) {
    renderError(err.messsage);

  } finally {
    renderLoading(false);
  }
}
