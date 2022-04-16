const tagsEl = document.getElementById("tags"); // this for get tags at the span
const textArea = document.getElementById("textarea"); // this for get textarea and add action

textArea.focus(); // this for focus textarea

textArea.addEventListener("keyup", (ele) => {
  createTags(ele.target.value);
  if (ele.key === "Enter") {
    setTimeout(() => {
      ele.target.value = "";
    }, 10);
    randomSelect();
  }
});

function createTags(input) {
  // this for make spans as a array and remove spaces from start and end
  const tags = input
    .split(" ")
    .filter((tag) => tag.trim() !== "")
    .map((tag) => tag.trim());

  tagsEl.innerHTML = "";

  tags.forEach((tag) => {
    const tagele = document.createElement("span");
    tagele.classList.add("tag");
    tagele.innerText = tag;
    tagsEl.appendChild(tagele);
  });
}

function randomSelect() {
  const times = 30;

  const interval = setInterval(() => {
    const randomTag = pickRandomTag();
    highLightTag(randomTag);

    setTimeout(() => {
      unHighLightTag(randomTag);
    }, 100);
  }, 100);
  setTimeout(() => {
    clearInterval(interval);
    setTimeout(() => {
      const randomTag = pickRandomTag();

      highLightTag(randomTag);
    }, 100);
  }, times * 100);
}

function pickRandomTag() {
  const tags = document.querySelectorAll(".tag");
  return tags[Math.floor(Math.random() * tags.length)];
}

function highLightTag(tag) {
  tag.classList.add("highlight");
}

function unHighLightTag(tag) {
  tag.classList.remove("highlight");
}
