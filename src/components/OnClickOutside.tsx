import React from 'react';

export const OnClickOutside = ({ children, handler }) => {
  const ref = React.useRef(null);
  React.useEffect(() => {
    const clickEventListener = (e) => {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      handler(e);
    };

    if (!!ref && handler) {
      window.addEventListener('click', clickEventListener, false);
      window.addEventListener('touchstart', clickEventListener, false);
    }
    return () => {
      window.removeEventListener('click', clickEventListener, false);
      window.removeEventListener('touchstart', clickEventListener, false);
    };
  }, [ref, handler]);

  // return <div>clicker</div>;
  return children({ ref });
};
