import { r as renderers } from './chunks/internal_BsTt5pTQ.mjs';
import { c as createExports } from './chunks/entrypoint_QGBwcTW1.mjs';
import { manifest } from './manifest_BbW7K8jd.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/404.astro.mjs');
const _page2 = () => import('./pages/api/contact.astro.mjs');
const _page3 = () => import('./pages/brochure.pdf.astro.mjs');
const _page4 = () => import('./pages/company.astro.mjs');
const _page5 = () => import('./pages/contact.astro.mjs');
const _page6 = () => import('./pages/faqs.astro.mjs');
const _page7 = () => import('./pages/features.astro.mjs');
const _page8 = () => import('./pages/integrations.astro.mjs');
const _page9 = () => import('./pages/privacy-policy.astro.mjs');
const _page10 = () => import('./pages/services.astro.mjs');
const _page11 = () => import('./pages/terms-conditions.astro.mjs');
const _page12 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/404.astro", _page1],
    ["src/pages/api/contact.js", _page2],
    ["src/pages/brochure.pdf.astro", _page3],
    ["src/pages/company.astro", _page4],
    ["src/pages/contact.astro", _page5],
    ["src/pages/faqs.astro", _page6],
    ["src/pages/features.astro", _page7],
    ["src/pages/integrations.astro", _page8],
    ["src/pages/privacy-policy.astro", _page9],
    ["src/pages/services.astro", _page10],
    ["src/pages/terms-conditions.astro", _page11],
    ["src/pages/index.astro", _page12]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./_noop-actions.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "34b693af-25ca-49c4-94b6-de457088af9f",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
