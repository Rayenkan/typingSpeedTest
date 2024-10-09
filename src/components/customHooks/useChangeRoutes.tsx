"use client";

import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

export default function useRouteState() {
  const router = useRouter();
  const [routeParams, setRouteParams] = useState<Record<string, string> | null>(null);
  const [currentRoute, setCurrentRoute] = useState<string>("");

  const pushRoute = async (path: string, queryParams: Record<string, string> | null = null) => {
    let newPath: string = path;
    if (queryParams) {
      const query = new URLSearchParams(queryParams).toString();
      newPath = `${path}?${query}`;
      setRouteParams(queryParams);
    } else {
      setRouteParams(null);
    }
    router.push(newPath);
    setCurrentRoute(newPath);
  };

  useEffect(() => {
    const updateRouteInfo = () => {
      const queryParams = Object.fromEntries(new URLSearchParams(window.location.search));
      setRouteParams(queryParams);
      setCurrentRoute(window.location.pathname);
    };

    updateRouteInfo(); // Set the initial state

    const handleRouteChange = () => {
      updateRouteInfo();
    };

    // Attach the event listener for route changes
    window.addEventListener('popstate', handleRouteChange);

    return () => {
      // Clean up the event listener
      window.removeEventListener('popstate', handleRouteChange);
    };
  }, []); // Run only once on mount

  return { pushRoute, routeParams, currentRoute };
}
