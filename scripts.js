const toggleAside = () => {
  if (
    ["", " 0px", "-124px"].includes(
      document.querySelector("#layout-aside").style.left
    )
  ) {
    document.querySelector("#layout-aside").style.left = "0";
  } else {
    document.querySelector("#layout-aside").style.left = "-124px";
  }
};
