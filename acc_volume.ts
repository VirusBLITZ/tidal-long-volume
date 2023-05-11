const SLIDER_HEIGHT = 250;
// const SLIDER_HEIGHT = 800;
let RETRIES = 10;

const addlistener = () => {
  const volBtn = document.querySelector('button[data-test="volume"]') as HTMLElement;
  if (!volBtn) return false;

  volBtn.addEventListener("mouseover", () => {
    const nativeRange = document.querySelector<HTMLElement>("div#nativeRange")!;
    if (!nativeRange) return false;
    nativeRange.style.height = `${SLIDER_HEIGHT + 15}px`;
    nativeRange.style.top = `calc(-100% - ${SLIDER_HEIGHT - 5}px)`;

    const volInput = document.querySelector<HTMLInputElement>(".nativeRange--u6L4A")!;
    if (!volInput) return false;
    volInput.style.minWidth = `${SLIDER_HEIGHT}px`;
  });
  return true;
}

const main = async () => {
  while (RETRIES > 0) {
    if (addlistener()) break;
    RETRIES--;
    await new Promise(resolve => setTimeout(resolve, 1000));
  }
  if (RETRIES <= 0) console.error("Failed to add listener to volume button.");
};

main();