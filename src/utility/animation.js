export const SlideUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] },
  },
});

export const SlideLeft = (delay = 0) => ({
  hidden: { opacity: 0, x: 80 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] },
  },
});

export const SlideRight = (delay = 0) => ({
  hidden: { opacity: 0, x: -80 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] },
  },
});

export const FadeIn = (delay = 0) => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 1, delay, ease: "linear" },
  },
});

export const ClipReveal = (delay = 0) => ({
  hidden: { clipPath: "inset(0 0 100% 0)", opacity: 1 },
  visible: {
    clipPath: "inset(0 0 0% 0)",
    transition: { duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] },
  },
});