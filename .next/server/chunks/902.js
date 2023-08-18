exports.id = 902;
exports.ids = [902];
exports.modules = {

/***/ 6178:
/***/ ((module) => {

// Exports
module.exports = {
	"header": "header_header__zJOD0",
	"link": "header_link__ne2MS",
	"active": "header_active__GNYUV"
};


/***/ }),

/***/ 3902:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ Layout)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: ./components/header.module.css
var header_module = __webpack_require__(6178);
var header_module_default = /*#__PURE__*/__webpack_require__.n(header_module);
;// CONCATENATED MODULE: ./components/header.js




const Header = ()=>{
    const router = (0,router_.useRouter)();
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: (header_module_default()).header,
        children: [
            /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                href: "/",
                passHref: true,
                children: /*#__PURE__*/ jsx_runtime.jsx("span", {
                    className: router.pathname === "/" ? (header_module_default()).active : (header_module_default()).link,
                    children: "Home"
                })
            }),
            /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                href: "/blog",
                passHref: true,
                children: /*#__PURE__*/ jsx_runtime.jsx("span", {
                    className: router.pathname === "/blog" ? (header_module_default()).active : (header_module_default()).link,
                    children: "Blog"
                })
            }),
            /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                href: "/profile",
                passHref: true,
                children: /*#__PURE__*/ jsx_runtime.jsx("span", {
                    className: router.pathname === "/profile" ? (header_module_default()).active : (header_module_default()).link,
                    children: "Profile"
                })
            }),
            /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                href: "/blog/items",
                passHref: true,
                children: /*#__PURE__*/ jsx_runtime.jsx("span", {
                    className: router.pathname === "/blog/items" ? (header_module_default()).active : (header_module_default()).link,
                    children: "Items"
                })
            }),
            /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                href: "/blog/categories",
                passHref: true,
                children: /*#__PURE__*/ jsx_runtime.jsx("span", {
                    className: router.pathname === "/blog/categories" ? (header_module_default()).active : (header_module_default()).link,
                    children: "Categories"
                })
            }),
            /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                href: "/departements",
                passHref: true,
                children: /*#__PURE__*/ jsx_runtime.jsx("span", {
                    className: router.pathname === "/departements" ? (header_module_default()).active : (header_module_default()).link,
                    children: "D\xe9partements"
                })
            })
        ]
    });
};

;// CONCATENATED MODULE: ./components/layout.js


const Layout = ({ children })=>{
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        children: [
            /*#__PURE__*/ jsx_runtime.jsx(Header, {}),
            children
        ]
    });
};


/***/ })

};
;