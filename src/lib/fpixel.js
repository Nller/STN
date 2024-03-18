import { env } from "@/env";

export const FB_PIXEL_ID = env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID;

export const pageview = (url) => {
  window.fbq("track", "PageView");
};

// https://developers.facebook.com/docs/facebook-pixel/advanced/
export const event = (name, options = {}) => {
  window.fbq("track", name, options);
};
