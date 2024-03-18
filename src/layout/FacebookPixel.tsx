import { usePathname } from "next/navigation";
import Script from "next/script";
import React, { useEffect, useState } from "react";

import * as fpixel from "@/lib/fpixel";
import Image from "next/image";

export default function FacebookPixel() {
  const [loaded, setLoaded] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (!loaded) return;

    fpixel.pageview();
  }, [pathname, loaded]);

  return (
    <React.Fragment>
      <Script
        id="facebook-pixel"
        strategy="afterInteractive"
        onLoad={() => setLoaded(true)}
      >
        {`
          !(function (f, b, e, v, n, t, s) {
            if (f.fbq) return;
            n = f.fbq = function () {
              n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
            };
            if (!f._fbq) f._fbq = n;
            n.push = n;
            n.loaded = !0;
            n.version = "2.0";
            n.queue = [];
            t = b.createElement(e);
            t.async = !0;
            t.src = v;
            s = b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t, s);
          })(
            window,
            document,
            "script",
            "https://connect.facebook.net/en_US/fbevents.js"
          );
          fbq("init", "${fpixel.FB_PIXEL_ID}");
        `}
      </Script>
      <noscript>
        <Image
          src={`https://www.facebook.com/tr?id=${fpixel.FB_PIXEL_ID}&ev=PageView&noscript=1`}
          className="hidden"
          alt="Facebook Pixel"
          width={1}
          height={1}
        />
      </noscript>
    </React.Fragment>
  );
}
