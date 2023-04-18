import { onMounted, onUnmounted } from "vue";

export const useParallax = () => {
  const onScroll = () => {
    const scrolled = window.pageYOffset;
    const parallaxElement = document.getElementById("hero");
    const parallaxSpeed = 0.4;
    const coords = scrolled * parallaxSpeed;
    parallaxElement!.style.backgroundPositionY = `${coords}px`;
  };

  onMounted(() => {
    document.addEventListener("scroll", onScroll, {
      passive: true,
    });
  });

  onUnmounted(() => {
    document.removeEventListener("scroll", onScroll);
  });
};
