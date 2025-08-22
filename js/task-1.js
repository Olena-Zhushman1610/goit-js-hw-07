const listItems = document.querySelectorAll("#categories .item");

console.log(`Numbers of categories: ${listItems.length}`);
listItems.forEach((elem) => {
  const title = elem.querySelector("h2").textContent;
  const leng = elem.querySelectorAll("li").length;

  console.log(`Cutegory : ${title}`);
  console.log(`Elements : ${leng}`);
});
