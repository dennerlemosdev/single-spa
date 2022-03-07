import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@single-spa/welcome",
  app: () =>
    System.import(
      "https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js"
    ),
  activeWhen: (location) => location.pathname === "/",
});

registerApplication({
  name: "@denner/single-react",
  app: () => System.import("@denner/single-react"),
  activeWhen: (location) => location.pathname === "/react-single",
});

registerApplication({
  name: "@denner/react-multiples",
  app: () => System.import("@denner/react-multiples"),
  activeWhen: (location) => location.pathname.includes("/react-multiples"),
});

start({
  urlRerouteOnly: true,
});
