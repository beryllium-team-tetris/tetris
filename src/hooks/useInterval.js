import { useEffect, useRef } from 'react'

export default function useInterval(callBack, delay) {
    const savedCallback = useRef();

    useEffect(() => {
      savedCallback.current = callBack;
    }, [callBack]);

    useEffect(() => {
      function tick() {
          savedCallback.current();
      }
      if (delay !== null) {
          const id = setInterval(tick, delay);
          return () => {
            clearInterval(id);
          };
      }
    }, [delay]);
}
