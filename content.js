if (typeof links === undefined) {
  let links = [...document.getElementsByTagName("a")].map((link) => link.href);
} else {
  links = [...document.getElementsByTagName("a")].map(
    (link) => link.href
  );
}
console.log(links);
