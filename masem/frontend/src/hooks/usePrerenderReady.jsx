// usePrerenderReady.ts
import { useEffect } from 'react';

export function usePrerenderReady(ready) {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.prerenderReady = ready;
    }
  }, [ready]);
}
