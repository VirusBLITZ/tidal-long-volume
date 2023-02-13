const SLIDER_HEIGHT = 250;
// const SLIDER_HEIGHT = 800;

const addlistener = () => {
  console.info("Adding listener");
  document.querySelector('button[data-test="volume"]')!.addEventListener("mouseover", () => {
    const nativeRange = document.querySelector<HTMLElement>("div#nativeRange")!;
    nativeRange.style.height = `${SLIDER_HEIGHT + 15}px`;
    nativeRange.style.top = `calc(-100% - ${SLIDER_HEIGHT - 5}px)`;

    const volInput = document.querySelector<HTMLInputElement>(".nativeRange--ZV0FD")!;
    if (!volInput) console.error("No volume input found!");
    volInput.style.minWidth = `${SLIDER_HEIGHT}px`;
  });
}

setTimeout(() => {
  addlistener();
}, 1000);
