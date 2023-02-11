const addlistener = () => {
  console.info("Adding listener");
  document.querySelector('button[data-test="volume"]')!.addEventListener("mouseover", () => {
    const nativeRange = document.querySelector<HTMLElement>("div#nativeRange")!;
    nativeRange.style.height = "265px";
    nativeRange.style.top = "calc(-100% - 245px)";

    const volInput = document.querySelector<HTMLInputElement>(".nativeRange--ZV0FD")!;
    if (!volInput) console.error("No volume input found!");
    volInput.style.minWidth = "250px";
  });
}

setTimeout(() => {
  addlistener();
}, 1000);
