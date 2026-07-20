import { createRequire } from 'module';

createRequire(import.meta.url);

// src/config.ts
var defaultOptions = {
  name: "Profile",
  image: ""
};
var configuredOptions = defaultOptions;
function init(options) {
  configuredOptions = {
    name: typeof options?.name === "string" ? options.name : defaultOptions.name,
    image: typeof options?.image === "string" ? options.image : defaultOptions.image,
    imageAlt: typeof options?.imageAlt === "string" ? options.imageAlt : void 0
  };
}
function getProfileCardOptions() {
  return configuredOptions;
}

// src/components/styles/profile-card.scss
var profile_card_default = ".profile-card {\n  box-sizing: border-box;\n  width: 100%;\n  max-width: 180px;\n  color: var(--dark);\n}\n\n.profile-card__name {\n  margin: 0 0 12px;\n  color: var(--darkgray);\n  font-size: 0.65rem;\n  font-weight: 600;\n  line-height: 1.2;\n  text-transform: uppercase;\n}\n\n.profile-card__image {\n  display: block;\n  width: 100%;\n  aspect-ratio: 1/1;\n  object-fit: cover;\n  border-radius: 4px;\n}\n\n@media all and (max-width: 800px) {\n  .profile-card {\n    max-width: none;\n  }\n}";
var l;
l = { __e: function(n2, l2, u3, t2) {
  for (var i2, o2, r2; l2 = l2.__; ) if ((i2 = l2.__c) && !i2.__) try {
    if ((o2 = i2.constructor) && null != o2.getDerivedStateFromError && (i2.setState(o2.getDerivedStateFromError(n2)), r2 = i2.__d), null != i2.componentDidCatch && (i2.componentDidCatch(n2, t2 || {}), r2 = i2.__d), r2) return i2.__E = i2;
  } catch (l3) {
    n2 = l3;
  }
  throw n2;
} }, "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout;

// node_modules/preact/jsx-runtime/dist/jsxRuntime.mjs
var f2 = 0;
function u2(e2, t2, n2, o2, i2, u3) {
  t2 || (t2 = {});
  var a2, c2, p2 = t2;
  if ("ref" in p2) for (c2 in p2 = {}, t2) "ref" == c2 ? a2 = t2[c2] : p2[c2] = t2[c2];
  var l2 = { type: e2, props: p2, key: n2, ref: a2, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: --f2, __i: -1, __u: 0, __source: i2, __self: u3 };
  if ("function" == typeof e2 && (a2 = e2.defaultProps)) for (c2 in a2) void 0 === p2[c2] && (p2[c2] = a2[c2]);
  return l.vnode && l.vnode(l2), l2;
}

// src/components/ProfileCard.tsx
var ProfileCard_default = ((opts) => {
  const { name, image, imageAlt } = { ...getProfileCardOptions(), ...opts };
  const ProfileCard = () => /* @__PURE__ */ u2("section", { class: "profile-card", "aria-label": name, children: [
    /* @__PURE__ */ u2("p", { class: "profile-card__name", children: name }),
    image ? /* @__PURE__ */ u2("img", { class: "profile-card__image", src: image, alt: imageAlt ?? name, loading: "lazy" }) : null
  ] });
  ProfileCard.css = profile_card_default;
  return ProfileCard;
});

export { ProfileCard_default as ProfileCard, init };
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map