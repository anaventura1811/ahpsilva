import { useEffect, useState, useCallback, useMemo} from 'react';

type Props = {};

export function useWindowSize(props: Props) {

  const hasWindow = useMemo(() => typeof window !== 'undefined', []);

  const getWindowDimensions = useCallback(() => {
    const innerWidth = hasWindow ? window.innerWidth :  null;
    const innerHeight = hasWindow ? window.innerHeight : null;
    return {
      innerWidth,
      innerHeight
    };
  }, [hasWindow]);

  const [windowSize, setWindowSize] = useState(getWindowDimensions);

  useEffect(() => {
    if (hasWindow) {
      const handleResize = () => {
        setWindowSize(getWindowDimensions());
      }

      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, [getWindowDimensions, hasWindow]);

  return windowSize;
};

// Fonte: https://www.codegrepper.com/code-examples/javascript/how+to+get+screen+width+in+react+js
