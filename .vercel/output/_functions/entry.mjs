import { r as renderers } from './chunks/internal_BsTt5pTQ.mjs';
import { c as createExports } from './chunks/entrypoint_Tkyhgqpr.mjs';
import { manifest } from './manifest_Dnk-0o8w.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/404.astro.mjs');
const _page2 = () => import('./pages/api/contact.astro.mjs');
const _page3 = () => import('./pages/company.astro.mjs');
const _page4 = () => import('./pages/contact.astro.mjs');
const _page5 = () => import('./pages/faqs.astro.mjs');
const _page6 = () => import('./pages/features.astro.mjs');
const _page7 = () => import('./pages/integrations.astro.mjs');
const _page8 = () => import('./pages/privacy-policy.astro.mjs');
const _page9 = () => import('./pages/terms-conditions.astro.mjs');
const _page10 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/404.astro", _page1],
    ["src/pages/api/contact.js", _page2],
    ["src/pages/company.astro", _page3],
    ["src/pages/contact.astro", _page4],
    ["src/pages/faqs.astro", _page5],
    ["src/pages/features.astro", _page6],
    ["src/pages/integrations.astro", _page7],
    ["src/pages/privacy-policy.astro", _page8],
    ["src/pages/terms-conditions.astro", _page9],
    ["src/pages/index.astro", _page10]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./_noop-actions.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "afe748c4-0600-451d-aa83-f44194381bc0",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
