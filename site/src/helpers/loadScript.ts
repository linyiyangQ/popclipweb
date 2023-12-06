import { useLogger } from "../composables/useLogger";
const log = useLogger();
export async function loadScript(src: string): Promise<boolean> {
  if (document.querySelector(`head script[src="${src}"]`) !== null) {
    log(`Script ${src} already loaded`);
    return Promise.resolve(false);
  }
  return new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.setAttribute("src", src);
    script.defer = true;
    script.onload = () => {
      log(`Loaded script ${src}`);
      resolve(true);
    };
    script.onerror = () => {
      reject(new Error(`Failed to load script ${src}`));
    };
    document.head.appendChild(script);
  });
}
