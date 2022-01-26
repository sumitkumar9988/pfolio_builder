import React, { useState } from "react";
import { createPortal } from "react-dom";

export const IFrame = ({ children, head, ...props }) => {
  const [contentRef, setContentRef] = useState(null);
  const mountNode = contentRef?.contentWindow?.document?.body;
  const mountHead = contentRef?.contentWindow?.document?.head;

  return (
    <iframe
      frameborder="0"
      className="w-full h-screen"
      title="frame"
      {...props}
      ref={setContentRef}
    >
      {mountHead &&
        createPortal(
            <head>
            <meta charset="utf-8"/>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Example</title>
            <script src="https://cdn.tailwindcss.com/"></script>
          </head>,
          mountHead
        )}
      {mountNode && createPortal(children, mountNode)}
    </iframe>
  );
};
