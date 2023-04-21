(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 3037:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "Container_container__732iQ"
};


/***/ }),

/***/ 9718:
/***/ ((module) => {

// Exports
module.exports = {
	"footer": "Footer_footer__dvdI3",
	"inner_wrapper": "Footer_inner_wrapper__jsLyS",
	"title": "Footer_title__T26Io",
	"address": "Footer_address__7sfwl",
	"menus_mobile": "Footer_menus_mobile__KHTmP",
	"social_links": "Footer_social_links__DN3lr",
	"link": "Footer_link__l0KdT",
	"menu_wrapper": "Footer_menu_wrapper__c81ju",
	"menu": "Footer_menu__dkXYs",
	"address_wrapper": "Footer_address_wrapper__2JKwz",
	"links_wrapper": "Footer_links_wrapper__vMUFD",
	"menus_wrapper": "Footer_menus_wrapper__VV4Zf"
};


/***/ }),

/***/ 5240:
/***/ ((module) => {

// Exports
module.exports = {
	"header": "Header_header___iI0v",
	"hide": "Header_hide__jvPw7",
	"container": "Header_container__pEO_x"
};


/***/ }),

/***/ 2313:
/***/ ((module) => {

// Exports
module.exports = {
	"layout": "Layout_layout__2hMmr",
	"content": "Layout_content__1BsLI",
	"paddingtop": "Layout_paddingtop__AaGb1"
};


/***/ }),

/***/ 3930:
/***/ ((module) => {

// Exports
module.exports = {
	"form": "NewsletterForm_form__Phisz",
	"title": "NewsletterForm_title__VIlgw"
};


/***/ }),

/***/ 5100:
/***/ ((module) => {

// Exports
module.exports = {
	"whatsapp": "Whatsapp_whatsapp__yApeQ"
};


/***/ }),

/***/ 4469:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Container_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3037);
/* harmony import */ var _Container_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Container_module_scss__WEBPACK_IMPORTED_MODULE_2__);



const Container = ({ children  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: (_Container_module_scss__WEBPACK_IMPORTED_MODULE_2___default().container),
        children: children
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Container);


/***/ }),

/***/ 3008:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ App)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./src/compnents/header/Header.module.scss
var Header_module = __webpack_require__(5240);
var Header_module_default = /*#__PURE__*/__webpack_require__.n(Header_module);
;// CONCATENATED MODULE: ./src/assets/logo.svg
/* harmony default export */ const logo = ({"src":"/_next/static/media/logo.9f3a1838.svg","height":48,"width":238,"blurWidth":0,"blurHeight":0});
// EXTERNAL MODULE: external "gsap"
var external_gsap_ = __webpack_require__(4287);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./src/compnents/header/index.tsx






const Header = ()=>{
    const [hideHeader, setHideHeader] = (0,external_react_.useState)(false);
    const HEADER = (0,external_react_.useRef)(null);
    (0,external_react_.useEffect)(()=>{
        HEADER.current && external_gsap_.gsap.to(HEADER.current, {
            y: 0,
            opacity: 1,
            duration: 1
        });
        window.addEventListener("scroll", ()=>{
            if (window.scrollY > 300) {
                setHideHeader(true);
            } else {
                setHideHeader(false);
            }
        });
    }, []);
    return /*#__PURE__*/ jsx_runtime_.jsx("header", {
        className: `${(Header_module_default()).header} ${hideHeader ? (Header_module_default()).hide : ""}`,
        ref: HEADER,
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: (Header_module_default()).container,
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("nav", {
                className: "navbar navbar-expand-lg",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        className: "navbar-brand",
                        href: "/",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                            src: logo.src,
                            alt: "Mentor"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                        className: "navbar-toggler",
                        type: "button",
                        "data-toggle": "collapse",
                        "data-target": "#navbarSupportedContent",
                        "aria-controls": "navbarSupportedContent",
                        "aria-expanded": "false",
                        "aria-label": "Toggle navigation",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: "navbar-toggler-icon"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "collapse navbar-collapse",
                        id: "navbarSupportedContent",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                            className: "navbar-nav ml-auto",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    className: "nav-item active",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        className: "nav-link",
                                        href: "#",
                                        children: "Admisson"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    className: "nav-item",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        className: "nav-link",
                                        href: "#",
                                        children: "About Us"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    className: "nav-item",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        className: "nav-link",
                                        href: "/course-listing",
                                        children: "Courses"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    className: "nav-item",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        className: "nav-link",
                                        href: "#",
                                        children: "Blog"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    className: "nav-item",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        className: "nav-link",
                                        href: "#",
                                        children: "Contact Us"
                                    })
                                })
                            ]
                        })
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const header = (Header);

// EXTERNAL MODULE: external "yup"
var external_yup_ = __webpack_require__(5609);
// EXTERNAL MODULE: external "formik"
var external_formik_ = __webpack_require__(2296);
// EXTERNAL MODULE: ./src/compnents/newsletter-form/NewsletterForm.module.scss
var NewsletterForm_module = __webpack_require__(3930);
var NewsletterForm_module_default = /*#__PURE__*/__webpack_require__.n(NewsletterForm_module);
;// CONCATENATED MODULE: ./src/assets/arrow-right-blue.svg
/* harmony default export */ const arrow_right_blue = ({"src":"/_next/static/media/arrow-right-blue.be9275f0.svg","height":26,"width":26,"blurWidth":0,"blurHeight":0});
;// CONCATENATED MODULE: ./src/compnents/newsletter-form/index.tsx






const SCHEMA = external_yup_.object().shape({
    email: external_yup_.string().email().required()
});
const INITIAL_VALUES = {
    email: ""
};
const NewsletterForm = ()=>{
    const onSubmitHandler = ()=>{};
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "d-block pt-4",
        children: /*#__PURE__*/ jsx_runtime_.jsx(external_formik_.Formik, {
            initialValues: INITIAL_VALUES,
            validationSchema: SCHEMA,
            onSubmit: onSubmitHandler,
            children: ()=>{
                return /*#__PURE__*/ jsx_runtime_.jsx("form", {
                    onSubmit: onSubmitHandler,
                    className: (NewsletterForm_module_default()).form,
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "row",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-12",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                    className: (NewsletterForm_module_default()).title,
                                    children: "Newsletter"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-12",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                    type: "text",
                                    placeholder: "Enter your email address"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-1 pt-3",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                                    type: "submit",
                                    children: [
                                        "SUBSCRIBE",
                                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            src: arrow_right_blue.src,
                                            alt: "arrow"
                                        })
                                    ]
                                })
                            })
                        ]
                    })
                });
            }
        })
    });
};
/* harmony default export */ const newsletter_form = (NewsletterForm);

// EXTERNAL MODULE: ./src/compnents/container/index.tsx
var container = __webpack_require__(4469);
// EXTERNAL MODULE: ./src/compnents/footer/Footer.module.scss
var Footer_module = __webpack_require__(9718);
var Footer_module_default = /*#__PURE__*/__webpack_require__.n(Footer_module);
;// CONCATENATED MODULE: ./src/assets/facebook.svg
/* harmony default export */ const facebook = ({"src":"/_next/static/media/facebook.b19aab96.svg","height":20,"width":20,"blurWidth":0,"blurHeight":0});
;// CONCATENATED MODULE: ./src/assets/linkedin.svg
/* harmony default export */ const linkedin = ({"src":"/_next/static/media/linkedin.46fd861d.svg","height":20,"width":19,"blurWidth":0,"blurHeight":0});
;// CONCATENATED MODULE: ./src/assets/instagram.svg
/* harmony default export */ const instagram = ({"src":"/_next/static/media/instagram.bcb6ce69.svg","height":19,"width":19,"blurWidth":0,"blurHeight":0});
;// CONCATENATED MODULE: ./src/assets/reddit.svg
/* harmony default export */ const reddit = ({"src":"/_next/static/media/reddit.e31369e9.svg","height":18,"width":19,"blurWidth":0,"blurHeight":0});
;// CONCATENATED MODULE: ./src/compnents/footer/Const.ts




const CONST = {
    MENU: [
        {
            title: "Home",
            link: "/home"
        },
        {
            title: "About Us",
            link: "/about"
        },
        {
            title: "Admin",
            link: "/admin"
        },
        {
            title: "Blog",
            link: "/Blog"
        }
    ],
    COURSES: [
        {
            title: "B.Tech CSE",
            link: "/"
        },
        {
            title: "B.Tech CSE AI and ML",
            link: "/"
        },
        {
            title: "B.Tech CSE AI and DSC",
            link: "/"
        },
        {
            title: "B.Tech CSE IOT",
            link: "/"
        },
        {
            title: "B.Tech CSE CYBER SECURITY",
            link: "/"
        },
        {
            title: "B.Tech CSE BLOCKCHAIN",
            link: "/"
        }
    ],
    SOCIAL_LINKS: [
        {
            title: "Facebook",
            icon: facebook.src,
            link: "https://www.facebook.com/MADEITMENTOR/"
        },
        {
            title: "LinkedIn",
            icon: linkedin.src,
            link: "https://www.instagram.com/__mentor_academy__/"
        },
        {
            title: "Instagram",
            icon: instagram.src,
            link: "https://www.linkedin.com/company/mentor-engineering-college/"
        },
        {
            title: "Reddit",
            icon: reddit.src,
            link: "https://www.reddit.com/user/Mentorow"
        }
    ]
};

// EXTERNAL MODULE: ./src/compnents/whatsapp/Whatsapp.module.scss
var Whatsapp_module = __webpack_require__(5100);
var Whatsapp_module_default = /*#__PURE__*/__webpack_require__.n(Whatsapp_module);
;// CONCATENATED MODULE: ./src/assets/whatsapp.svg
/* harmony default export */ const whatsapp = ({"src":"/_next/static/media/whatsapp.b48f6831.svg","height":47,"width":47,"blurWidth":0,"blurHeight":0});
;// CONCATENATED MODULE: ./src/compnents/whatsapp/index.tsx





const Whatsapp = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: (Whatsapp_module_default()).whatsapp,
        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
            href: "https://wa.me/9745680111",
            target: "_blank",
            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                src: whatsapp.src,
                alt: "whatsapp"
            })
        })
    });
};
/* harmony default export */ const compnents_whatsapp = (Whatsapp);

;// CONCATENATED MODULE: ./src/compnents/footer/index.tsx









const Footer = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("footer", {
        className: `${(Footer_module_default()).footer}`,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(compnents_whatsapp, {}),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(container/* default */.Z, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "row",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: `col-12 col-lg-6 col-xl-5 mb-4 ${(Footer_module_default()).address_wrapper}`,
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: (Footer_module_default()).inner_wrapper,
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "row",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "col-12 mb-5",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    href: "#",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                        src: logo.src,
                                                        alt: "Mentor"
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: `col-12 ${(Footer_module_default()).menus_mobile}`,
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: (Footer_module_default()).menu_wrapper,
                                                    children: CONST.MENU.map((menu, index)=>{
                                                        return /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: `d-block ${(Footer_module_default()).menu}`,
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                href: menu.link,
                                                                children: menu.title
                                                            })
                                                        }, index);
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "col-12",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: (Footer_module_default()).title,
                                                        children: "Mentor Academy of Excellence"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: (Footer_module_default()).address,
                                                        children: "Ettapilly, Mannathoor(PO), Pampakuda via Muvattupuzha Ernakulam, Kerala 686667, INDIA Contact : 6282089866"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "col-12",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(newsletter_form, {})
                                            })
                                        ]
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: `col-12 col-lg-6 col-xl-2 mb-4 ${(Footer_module_default()).links_wrapper}`,
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: `row ${(Footer_module_default()).social_links}`,
                                    children: CONST.SOCIAL_LINKS.map((social, index)=>{
                                        return /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: `col-6 col-lg-12 ${(Footer_module_default()).link}`,
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
                                                href: social.link,
                                                target: "_blank",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                        src: social.icon
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: (Footer_module_default()).social_media,
                                                        children: social.title
                                                    })
                                                ]
                                            })
                                        }, index);
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: `col-12 col-lg-6 col-xl-2 mb-4 ${(Footer_module_default()).menus_wrapper}`,
                                children: CONST.MENU.map((menu, index)=>{
                                    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: `d-block ${(Footer_module_default()).menu}`,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: menu.link,
                                            children: menu.title
                                        })
                                    }, index);
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: `col-12 col-lg-6 col-xl-3 mb-4 ${(Footer_module_default()).courses_list_wrapper}`,
                                children: CONST.COURSES.map((course, index)=>{
                                    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: `d-block`,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: course.link,
                                            children: course.title
                                        })
                                    }, index);
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "row py-5",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "col-12",
                            children: "\xa9 MENTOR COLLEGE OF ENGINEERING. ALL RIGHTS RESERVED"
                        })
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const footer = (Footer);

// EXTERNAL MODULE: ./src/compnents/layout/Layout.module.scss
var Layout_module = __webpack_require__(2313);
var Layout_module_default = /*#__PURE__*/__webpack_require__.n(Layout_module);
;// CONCATENATED MODULE: external "next/router"
const router_namespaceObject = require("next/router");
;// CONCATENATED MODULE: ./src/compnents/layout/index.tsx






const Layout = ({ children  })=>{
    const router = (0,router_namespaceObject.useRouter)();
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (Layout_module_default()).layout,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(header, {}),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: `${(Layout_module_default()).content} ${router.route !== "/" ? (Layout_module_default()).paddingtop : ""}`,
                children: children
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(footer, {})
        ]
    });
};
/* harmony default export */ const layout = (Layout);

// EXTERNAL MODULE: ./src/styles/globals.css
var globals = __webpack_require__(108);
;// CONCATENATED MODULE: ./src/pages/_app.tsx



function App({ Component , pageProps  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx(layout, {
        children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
            ...pageProps
        })
    });
}


/***/ }),

/***/ 108:
/***/ (() => {



/***/ }),

/***/ 2296:
/***/ ((module) => {

"use strict";
module.exports = require("formik");

/***/ }),

/***/ 4287:
/***/ ((module) => {

"use strict";
module.exports = require("gsap");

/***/ }),

/***/ 3280:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 1109:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-local-url.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 7782:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-href.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 5609:
/***/ ((module) => {

"use strict";
module.exports = require("yup");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [664], () => (__webpack_exec__(3008)));
module.exports = __webpack_exports__;

})();