import 'kleur/colors';
import { f as decodeKey } from './chunks/astro/server_RORmjlBn.mjs';
import 'clsx';
import 'cookie';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_C6OAjLvD.mjs';
import 'es-module-lexer';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///home/jeeldesai/Documents/Fosslink/","cacheDir":"file:///home/jeeldesai/Documents/Fosslink/node_modules/.astro/","outDir":"file:///home/jeeldesai/Documents/Fosslink/dist/","srcDir":"file:///home/jeeldesai/Documents/Fosslink/src/","publicDir":"file:///home/jeeldesai/Documents/Fosslink/public/","buildClientDir":"file:///home/jeeldesai/Documents/Fosslink/dist/client/","buildServerDir":"file:///home/jeeldesai/Documents/Fosslink/dist/server/","adapterName":"@astrojs/vercel","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"404.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/404","isIndex":false,"type":"page","pattern":"^\\/404\\/?$","segments":[[{"content":"404","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/404.astro","pathname":"/404","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"company/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/company","isIndex":false,"type":"page","pattern":"^\\/company\\/?$","segments":[[{"content":"company","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/company.astro","pathname":"/company","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"contact/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/contact","isIndex":false,"type":"page","pattern":"^\\/contact\\/?$","segments":[[{"content":"contact","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/contact.astro","pathname":"/contact","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"faqs/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/faqs","isIndex":false,"type":"page","pattern":"^\\/faqs\\/?$","segments":[[{"content":"faqs","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/faqs.astro","pathname":"/faqs","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"features/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/features","isIndex":false,"type":"page","pattern":"^\\/features\\/?$","segments":[[{"content":"features","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/features.astro","pathname":"/features","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"integrations/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/integrations","isIndex":false,"type":"page","pattern":"^\\/integrations\\/?$","segments":[[{"content":"integrations","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/integrations.astro","pathname":"/integrations","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"privacy-policy/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/privacy-policy","isIndex":false,"type":"page","pattern":"^\\/privacy-policy\\/?$","segments":[[{"content":"privacy-policy","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/privacy-policy.astro","pathname":"/privacy-policy","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"terms-conditions/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/terms-conditions","isIndex":false,"type":"page","pattern":"^\\/terms-conditions\\/?$","segments":[[{"content":"terms-conditions","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/terms-conditions.astro","pathname":"/terms-conditions","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/page.BCFd37Sx.js"}],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/page.BCFd37Sx.js"}],"styles":[],"routeData":{"route":"/api/contact","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/contact\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"contact","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/contact.js","pathname":"/api/contact","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/home/jeeldesai/Documents/Fosslink/src/components/Hero.astro",{"propagation":"in-tree","containsHead":false}],["/home/jeeldesai/Documents/Fosslink/src/pages/index.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/index@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astrojs-ssr-virtual-entry",{"propagation":"in-tree","containsHead":false}],["/home/jeeldesai/Documents/Fosslink/src/pages/404.astro",{"propagation":"none","containsHead":true}],["/home/jeeldesai/Documents/Fosslink/src/pages/company.astro",{"propagation":"none","containsHead":true}],["/home/jeeldesai/Documents/Fosslink/src/pages/contact.astro",{"propagation":"none","containsHead":true}],["/home/jeeldesai/Documents/Fosslink/src/pages/faqs.astro",{"propagation":"none","containsHead":true}],["/home/jeeldesai/Documents/Fosslink/src/pages/features.astro",{"propagation":"none","containsHead":true}],["/home/jeeldesai/Documents/Fosslink/src/pages/integrations.astro",{"propagation":"none","containsHead":true}],["/home/jeeldesai/Documents/Fosslink/src/pages/privacy-policy.astro",{"propagation":"none","containsHead":true}],["/home/jeeldesai/Documents/Fosslink/src/pages/terms-conditions.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000noop-middleware":"_noop-middleware.mjs","\u0000noop-actions":"_noop-actions.mjs","\u0000@astro-page:src/pages/404@_@astro":"pages/404.astro.mjs","\u0000@astro-page:src/pages/api/contact@_@js":"pages/api/contact.astro.mjs","\u0000@astro-page:src/pages/company@_@astro":"pages/company.astro.mjs","\u0000@astro-page:src/pages/faqs@_@astro":"pages/faqs.astro.mjs","\u0000@astro-page:src/pages/features@_@astro":"pages/features.astro.mjs","\u0000@astro-page:src/pages/integrations@_@astro":"pages/integrations.astro.mjs","\u0000@astro-page:src/pages/privacy-policy@_@astro":"pages/privacy-policy.astro.mjs","\u0000@astro-page:src/pages/terms-conditions@_@astro":"pages/terms-conditions.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-page:src/pages/contact@_@astro":"pages/contact.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astro-renderers":"renderers.mjs","/home/jeeldesai/Documents/Fosslink/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_DlVomFOT.mjs","\u0000@astrojs-manifest":"manifest_CpUAKySC.mjs","/home/jeeldesai/Documents/Fosslink/src/pages/features.astro?astro&type=script&index=0&lang.ts":"_astro/features.astro_astro_type_script_index_0_lang.B4vd_yeB.js","/home/jeeldesai/Documents/Fosslink/src/layouts/Layout.astro?astro&type=script&index=0&lang.ts":"_astro/Layout.astro_astro_type_script_index_0_lang.7pUXG82z.js","/home/jeeldesai/Documents/Fosslink/src/layouts/Layout.astro?astro&type=script&index=1&lang.ts":"_astro/Layout.astro_astro_type_script_index_1_lang.BTNPhFEc.js","/home/jeeldesai/Documents/Fosslink/node_modules/astro/components/ClientRouter.astro?astro&type=script&index=0&lang.ts":"_astro/ClientRouter.astro_astro_type_script_index_0_lang.BZs-2RF_.js","astro:scripts/page.js":"_astro/page.BCFd37Sx.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[["/home/jeeldesai/Documents/Fosslink/src/layouts/Layout.astro?astro&type=script&index=0&lang.ts","document.addEventListener(\"astro:page-load\",()=>{document.querySelectorAll(\"[data-animate]\").forEach((t,e)=>{const n=t.getAttribute(\"data-animate\"),a=t.getAttribute(\"data-delay\")||e*100;t.style.animationDelay=`${a}ms`,setTimeout(()=>{t.classList.add(n),t.classList.add(\"animated\")},10)});const i=document.querySelectorAll(\"[data-parallax]\");if(i.length>0){const t=()=>{i.forEach(e=>{const n=e.getAttribute(\"data-parallax\")||.1,a=-(window.scrollY*n);e.style.transform=`translateY(${a}px)`})};window.addEventListener(\"scroll\",t)}document.querySelectorAll('a[href^=\"#\"]:not([href=\"#\"])').forEach(t=>{t.addEventListener(\"click\",e=>{e.preventDefault();const n=t.getAttribute(\"href\"),a=document.querySelector(n);if(a){const l=a.getBoundingClientRect().top+window.pageYOffset;window.scrollTo({top:l,behavior:\"smooth\"})}})}),document.querySelectorAll(\"[data-page-transition]\").forEach(t=>{const e=t.getAttribute(\"data-page-transition\");t.classList.add(`transition-${e}`)})});document.addEventListener(\"astro:before-preparation\",({from:o,to:i,direction:s})=>{if(o&&i){const r=new URL(o).pathname,t=new URL(i).pathname,e=r.split(\"/\").filter(Boolean).length,n=t.split(\"/\").filter(Boolean).length;let a=\"same\";n>e?a=\"deeper\":n<e&&(a=\"shallower\"),localStorage.setItem(\"navigationDirection\",a)}});document.addEventListener(\"astro:page-load\",()=>{const o=localStorage.getItem(\"navigationDirection\");o&&(document.documentElement.setAttribute(\"data-navigation\",o),setTimeout(()=>{localStorage.removeItem(\"navigationDirection\")},1e3))});"],["/home/jeeldesai/Documents/Fosslink/src/layouts/Layout.astro?astro&type=script&index=1&lang.ts","localStorage.getItem(\"darkMode\")===null&&(window.matchMedia(\"(prefers-color-scheme: dark)\").matches?(localStorage.setItem(\"darkMode\",\"true\"),document.documentElement.classList.add(\"dark\")):localStorage.setItem(\"darkMode\",\"false\"));document.addEventListener(\"astro:page-load\",()=>{const e=document.getElementById(\"page-wrapper\");e&&e.classList.add(\"page-loaded\")});document.addEventListener(\"astro:before-swap\",()=>{const e=document.getElementById(\"page-wrapper\");e&&e.classList.remove(\"page-loaded\")});"]],"assets":["/_astro/company.CkAZqM6v.css","/favicon.svg","/_astro/ClientRouter.astro_astro_type_script_index_0_lang.BZs-2RF_.js","/_astro/features.astro_astro_type_script_index_0_lang.B4vd_yeB.js","/_astro/page.BCFd37Sx.js","/_astro/page.BCFd37Sx.js","/404.html","/company/index.html","/contact/index.html","/faqs/index.html","/features/index.html","/integrations/index.html","/privacy-policy/index.html","/terms-conditions/index.html","/index.html"],"buildFormat":"directory","checkOrigin":true,"serverIslandNameMap":[],"key":"jcSJ8iqtJiCEPSpkjNgPGGoGKWXc3cADVd12NgYvGVE="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };
