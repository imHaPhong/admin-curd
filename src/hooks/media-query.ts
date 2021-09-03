import { useEffect, useState } from "react";

export function useMedia(query: string) {
  const [matches, setMatches] = useState(() => window.matchMedia(query).matches);

  useEffect(() => {
    const queryList = window.matchMedia(query);
    setMatches(queryList.matches);

    function listener(evt: MediaQueryListEvent) {
      setMatches(evt.matches);
    }

    queryList.addListener(listener);
    return () => queryList.removeListener(listener);
  }, [query]);

  return matches;
}
