"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   __N_SSG: function() { return /* binding */ __N_SSG; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_meetups_MeetupList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/meetups/MeetupList */ \"./components/meetups/MeetupList.js\");\n\n\nconst DUMMY_MEETUPS = [\n    {\n        id: \"m1\",\n        title: \"First meetup\",\n        image: \"https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/View_of_Empire_State_Building_from_Rockefeller_Center_New_York_City_dllu.jpg/800px-View_of_Empire_State_Building_from_Rockefeller_Center_New_York_City_dllu.jpg\",\n        address: \"Street 5\",\n        description: \"This is the first meetup\"\n    },\n    {\n        id: \"m2\",\n        title: \"Second meetup\",\n        image: \"https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/New_York_City_%28New_York%2C_USA%29%2C_Empire_State_Building_--_2012_--_6448.jpg/1200px-New_York_City_%28New_York%2C_USA%29%2C_Empire_State_Building_--_2012_--_6448.jpg\",\n        address: \"Avenue 10\",\n        description: \"Join us for the second meetup\"\n    },\n    {\n        id: \"m3\",\n        title: \"Third meetup\",\n        image: \"https://images.pexels.com/photos/1563256/pexels-photo-1563256.jpeg?cs=srgb&dl=pexels-ricky-esquivel-1563256.jpg&fm=jpg\",\n        address: \"Park Lane\",\n        description: \"Get ready for the third meetup\"\n    },\n    {\n        id: \"m4\",\n        title: \"Fourth meetup\",\n        image: \"https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/View_of_Empire_State_Building_from_Rockefeller_Center_New_York_City_dllu_%28cropped%29.jpg/1200px-View_of_Empire_State_Building_from_Rockefeller_Center_New_York_City_dllu_%28cropped%29.jpg\",\n        address: \"Central Square\",\n        description: \"The fourth meetup is here!\"\n    },\n    {\n        id: \"m5\",\n        title: \"Fifth meetup\",\n        image: \"https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8fA%3D%3D\",\n        address: \"Main Street\",\n        description: \"Join us for the fifth meetup\"\n    }\n];\nconst HomePage = (props)=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_meetups_MeetupList__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        meetups: props.meetups\n    }, void 0, false, {\n        fileName: \"C:\\\\Naiden\\\\Udemy\\\\React\\\\ReactCompleteGuideUdemy\\\\NextJs\\\\Meetups\\\\pages\\\\index.js\",\n        lineNumber: 48,\n        columnNumber: 10\n    }, undefined);\n};\n_c = HomePage;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (HomePage);\nvar _c;\n$RefreshReg$(_c, \"HomePage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUMwRDtBQUUxRCxNQUFNQyxnQkFBZ0I7SUFDcEI7UUFDRUMsSUFBSTtRQUNKQyxPQUFPO1FBQ1BDLE9BQ0U7UUFDRkMsU0FBUztRQUNUQyxhQUFhO0lBQ2Y7SUFDQTtRQUNFSixJQUFJO1FBQ0pDLE9BQU87UUFDUEMsT0FDRTtRQUNGQyxTQUFTO1FBQ1RDLGFBQWE7SUFDZjtJQUNBO1FBQ0VKLElBQUk7UUFDSkMsT0FBTztRQUNQQyxPQUNFO1FBQ0ZDLFNBQVM7UUFDVEMsYUFBYTtJQUNmO0lBQ0E7UUFDRUosSUFBSTtRQUNKQyxPQUFPO1FBQ1BDLE9BQ0U7UUFDRkMsU0FBUztRQUNUQyxhQUFhO0lBQ2Y7SUFDQTtRQUNFSixJQUFJO1FBQ0pDLE9BQU87UUFDUEMsT0FDRTtRQUNGQyxTQUFTO1FBQ1RDLGFBQWE7SUFDZjtDQUNEO0FBRUQsTUFBTUMsV0FBVyxDQUFDQztJQUNoQixxQkFBTyw4REFBQ1Isc0VBQVVBO1FBQUNTLFNBQVNELE1BQU1DLE9BQU87Ozs7OztBQUMzQztLQUZNRjs7QUFrQ04sK0RBQWVBLFFBQVFBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNb25nb0NsaWVudCB9IGZyb20gXCJtb25nb2RiXCI7XHJcbmltcG9ydCBNZWV0dXBMaXN0IGZyb20gXCIuLi9jb21wb25lbnRzL21lZXR1cHMvTWVldHVwTGlzdFwiO1xyXG5cclxuY29uc3QgRFVNTVlfTUVFVFVQUyA9IFtcclxuICB7XHJcbiAgICBpZDogXCJtMVwiLFxyXG4gICAgdGl0bGU6IFwiRmlyc3QgbWVldHVwXCIsXHJcbiAgICBpbWFnZTpcclxuICAgICAgXCJodHRwczovL3VwbG9hZC53aWtpbWVkaWEub3JnL3dpa2lwZWRpYS9jb21tb25zL3RodW1iLzAvMDUvVmlld19vZl9FbXBpcmVfU3RhdGVfQnVpbGRpbmdfZnJvbV9Sb2NrZWZlbGxlcl9DZW50ZXJfTmV3X1lvcmtfQ2l0eV9kbGx1LmpwZy84MDBweC1WaWV3X29mX0VtcGlyZV9TdGF0ZV9CdWlsZGluZ19mcm9tX1JvY2tlZmVsbGVyX0NlbnRlcl9OZXdfWW9ya19DaXR5X2RsbHUuanBnXCIsXHJcbiAgICBhZGRyZXNzOiBcIlN0cmVldCA1XCIsXHJcbiAgICBkZXNjcmlwdGlvbjogXCJUaGlzIGlzIHRoZSBmaXJzdCBtZWV0dXBcIixcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiBcIm0yXCIsXHJcbiAgICB0aXRsZTogXCJTZWNvbmQgbWVldHVwXCIsXHJcbiAgICBpbWFnZTpcclxuICAgICAgXCJodHRwczovL3VwbG9hZC53aWtpbWVkaWEub3JnL3dpa2lwZWRpYS9jb21tb25zL3RodW1iLzAvMDEvTmV3X1lvcmtfQ2l0eV8lMjhOZXdfWW9yayUyQ19VU0ElMjklMkNfRW1waXJlX1N0YXRlX0J1aWxkaW5nXy0tXzIwMTJfLS1fNjQ0OC5qcGcvMTIwMHB4LU5ld19Zb3JrX0NpdHlfJTI4TmV3X1lvcmslMkNfVVNBJTI5JTJDX0VtcGlyZV9TdGF0ZV9CdWlsZGluZ18tLV8yMDEyXy0tXzY0NDguanBnXCIsXHJcbiAgICBhZGRyZXNzOiBcIkF2ZW51ZSAxMFwiLFxyXG4gICAgZGVzY3JpcHRpb246IFwiSm9pbiB1cyBmb3IgdGhlIHNlY29uZCBtZWV0dXBcIixcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiBcIm0zXCIsXHJcbiAgICB0aXRsZTogXCJUaGlyZCBtZWV0dXBcIixcclxuICAgIGltYWdlOlxyXG4gICAgICBcImh0dHBzOi8vaW1hZ2VzLnBleGVscy5jb20vcGhvdG9zLzE1NjMyNTYvcGV4ZWxzLXBob3RvLTE1NjMyNTYuanBlZz9jcz1zcmdiJmRsPXBleGVscy1yaWNreS1lc3F1aXZlbC0xNTYzMjU2LmpwZyZmbT1qcGdcIixcclxuICAgIGFkZHJlc3M6IFwiUGFyayBMYW5lXCIsXHJcbiAgICBkZXNjcmlwdGlvbjogXCJHZXQgcmVhZHkgZm9yIHRoZSB0aGlyZCBtZWV0dXBcIixcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiBcIm00XCIsXHJcbiAgICB0aXRsZTogXCJGb3VydGggbWVldHVwXCIsXHJcbiAgICBpbWFnZTpcclxuICAgICAgXCJodHRwczovL3VwbG9hZC53aWtpbWVkaWEub3JnL3dpa2lwZWRpYS9jb21tb25zL3RodW1iLzcvN2EvVmlld19vZl9FbXBpcmVfU3RhdGVfQnVpbGRpbmdfZnJvbV9Sb2NrZWZlbGxlcl9DZW50ZXJfTmV3X1lvcmtfQ2l0eV9kbGx1XyUyOGNyb3BwZWQlMjkuanBnLzEyMDBweC1WaWV3X29mX0VtcGlyZV9TdGF0ZV9CdWlsZGluZ19mcm9tX1JvY2tlZmVsbGVyX0NlbnRlcl9OZXdfWW9ya19DaXR5X2RsbHVfJTI4Y3JvcHBlZCUyOS5qcGdcIixcclxuICAgIGFkZHJlc3M6IFwiQ2VudHJhbCBTcXVhcmVcIixcclxuICAgIGRlc2NyaXB0aW9uOiBcIlRoZSBmb3VydGggbWVldHVwIGlzIGhlcmUhXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogXCJtNVwiLFxyXG4gICAgdGl0bGU6IFwiRmlmdGggbWVldHVwXCIsXHJcbiAgICBpbWFnZTpcclxuICAgICAgXCJodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTUxOTUwMTAyNTI2NC02NWJhMTVhODIzOTA/YXV0bz1mb3JtYXQmZml0PWNyb3AmcT04MCZ3PTEwMDAmaXhsaWI9cmItNC4wLjMmaXhpZD1NM3d4TWpBM2ZEQjhNSHhsZUhCc2IzSmxMV1psWldSOE1ueDhmR1Z1ZkRCOGZIeDhmQSUzRCUzRFwiLFxyXG4gICAgYWRkcmVzczogXCJNYWluIFN0cmVldFwiLFxyXG4gICAgZGVzY3JpcHRpb246IFwiSm9pbiB1cyBmb3IgdGhlIGZpZnRoIG1lZXR1cFwiLFxyXG4gIH0sXHJcbl07XHJcblxyXG5jb25zdCBIb21lUGFnZSA9IChwcm9wcykgPT4ge1xyXG4gIHJldHVybiA8TWVldHVwTGlzdCBtZWV0dXBzPXtwcm9wcy5tZWV0dXBzfSAvPjtcclxufTtcclxuXHJcbi8vIGV4cG9ydCBjb25zdCBnZXRTZXJ2ZXJTaWRlUHJvcHMgPSBhc3luYyAoY29udGV4dCkgPT4ge1xyXG4vLyAgIGNvbnN0IHJlcSA9IGNvbnRleHQucmVxO1xyXG4vLyAgIGNvbnN0IHJlcyA9IGNvbnRleHQucmVzO1xyXG5cclxuLy8gICByZXR1cm4ge1xyXG4vLyAgICAgcHJvcHM6IHsgbWVldHVwczogRFVNTVlfTUVFVFVQUyB9LFxyXG4vLyAgIH07XHJcbi8vIH07XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUHJvcHMgPSBhc3luYyAoKSA9PiB7XHJcbiAgY29uc3QgY2xpZW50ID0gYXdhaXQgTW9uZ29DbGllbnQuY29ubmVjdChcclxuICAgIFwibW9uZ29kYitzcnY6Ly90ZXN0QWRtaW4xMjM6dGVzdEFkbWluMTIzQGNsdXN0ZXIwLmhpb3FzZWUubW9uZ29kYi5uZXQvP3JldHJ5V3JpdGVzPXRydWUmdz1tYWpvcml0eVwiXHJcbiAgKTtcclxuICBjb25zdCBkYiA9IGNsaWVudC5kYigpO1xyXG4gIGNvbnN0IG1lZXR1cHNDb2xsZWN0aW9uID0gZGIuY29sbGVjdGlvbihcIm1lZXR1cHNcIik7XHJcbiAgY29uc3QgbWVldHVwcyA9IGF3YWl0IG1lZXR1cHNDb2xsZWN0aW9uLmZpbmQoKS50b0FycmF5KCk7XHJcbiAgY2xpZW50LmNsb3NlKCk7XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBwcm9wczoge1xyXG4gICAgICBtZWV0dXBzOiBtZWV0dXBzLm1hcCgobSkgPT4gKHtcclxuICAgICAgICB0aXRsZTogbS50aXRsZSxcclxuICAgICAgICBhZGRyZXNzOiBtLmFkZHJlc3MsXHJcbiAgICAgICAgaW1hZ2U6IG0uaW1hZ2UsXHJcbiAgICAgIH0pKSxcclxuICAgIH0sXHJcbiAgICByZXZhbGlkYXRlOiAxMCxcclxuICB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG9tZVBhZ2U7XHJcbiJdLCJuYW1lcyI6WyJNZWV0dXBMaXN0IiwiRFVNTVlfTUVFVFVQUyIsImlkIiwidGl0bGUiLCJpbWFnZSIsImFkZHJlc3MiLCJkZXNjcmlwdGlvbiIsIkhvbWVQYWdlIiwicHJvcHMiLCJtZWV0dXBzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});