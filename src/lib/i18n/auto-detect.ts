/**
 * Inline script string. Runs in <head> before React hydrates so there's no
 * flash on first paint. Decides EN vs ES based on:
 *   1. saved localStorage preference (set by LocaleProvider)
 *   2. otherwise navigator.language
 * Then redirects /  ↔ /es/  to match the chosen locale.
 *
 * basePath: include when site is deployed under a subpath (GitHub Pages).
 */
export function buildAutoDetectScript(basePath = ""): string {
  return `
(function() {
  try {
    var bp = ${JSON.stringify(basePath)};
    var path = location.pathname;
    // strip basePath if present
    if (bp && path.indexOf(bp) === 0) path = path.slice(bp.length) || "/";
    var saved = null;
    try { saved = localStorage.getItem("lang"); } catch (e) {}
    var nav = (navigator.language || "en").slice(0, 2).toLowerCase();
    var lang = saved || (nav === "es" ? "es" : "en");
    var onES = /^\\/es(\\/|$)/.test(path);
    if (lang === "es" && !onES) {
      var rest = path === "/" ? "" : path;
      location.replace(bp + "/es" + rest + location.search + location.hash);
    } else if (lang === "en" && onES) {
      var stripped = path.replace(/^\\/es/, "") || "/";
      location.replace(bp + stripped + location.search + location.hash);
    }
  } catch (e) {}
})();
`;
}
