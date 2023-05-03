import { useNavigate } from "react-router-dom";

export const navigateTo =
  (navigate: ReturnType<typeof useNavigate>) => (route: string) => {
    // @ts-ignore
    if (!document.startViewTransition) {
      return navigate(route);
    }

    // @ts-ignore
    document.startViewTransition(() => {
      navigate(route);
      window.scrollTo(0, 0);
    });
  };
