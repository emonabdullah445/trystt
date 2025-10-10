"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/upload";
exports.ids = ["pages/api/upload"];
exports.modules = {

/***/ "cloudinary":
/*!*****************************!*\
  !*** external "cloudinary" ***!
  \*****************************/
/***/ ((module) => {

module.exports = require("cloudinary");

/***/ }),

/***/ "formidable":
/*!*****************************!*\
  !*** external "formidable" ***!
  \*****************************/
/***/ ((module) => {

module.exports = import("formidable");;

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "(api)/./pages/api/upload.js":
/*!*****************************!*\
  !*** ./pages/api/upload.js ***!
  \*****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   config: () => (/* binding */ config),\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var cloudinary__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! cloudinary */ \"cloudinary\");\n/* harmony import */ var cloudinary__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(cloudinary__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var formidable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! formidable */ \"formidable\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_2__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([formidable__WEBPACK_IMPORTED_MODULE_1__]);\nformidable__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\nconst config = {\n    api: {\n        bodyParser: false\n    }\n};\ncloudinary__WEBPACK_IMPORTED_MODULE_0___default().config({\n    cloud_name: \"dhgjgbcuy\",\n    api_key: \"123753362727452\",\n    api_secret: \"yRVHBUU-YPImF-h7w6uCFGl810s\",\n    secure: true\n});\nasync function handler(req, res) {\n    if (req.method !== \"POST\") {\n        return res.status(405).json({\n            error: \"Method not allowed\"\n        });\n    }\n    const form = new formidable__WEBPACK_IMPORTED_MODULE_1__.IncomingForm();\n    form.parse(req, async (err, fields, files)=>{\n        if (err) {\n            return res.status(500).json({\n                error: \"Error parsing form data\"\n            });\n        }\n        const filePath = files.file[0].filepath;\n        try {\n            const result = await cloudinary__WEBPACK_IMPORTED_MODULE_0___default().uploader.upload(filePath, {\n                upload_preset: \"trystt\"\n            });\n            // Delete the temporary file after successful upload\n            fs__WEBPACK_IMPORTED_MODULE_2___default().unlinkSync(filePath);\n            res.status(200).json({\n                secure_url: result.secure_url\n            });\n        } catch (error) {\n            console.error(\"Cloudinary upload error:\", error);\n            res.status(500).json({\n                error: error.message\n            });\n        }\n    });\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvdXBsb2FkLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBb0M7QUFDTTtBQUN0QjtBQUViLE1BQU1HLFNBQVM7SUFDcEJDLEtBQUs7UUFDSEMsWUFBWTtJQUNkO0FBQ0YsRUFBRTtBQUVGTCx3REFBaUIsQ0FBQztJQUNoQk0sWUFBVztJQUNYQyxTQUFTO0lBQ1RDLFlBQVc7SUFDWEMsUUFBUTtBQUNWO0FBRWUsZUFBZUMsUUFBUUMsR0FBRyxFQUFFQyxHQUFHO0lBQzVDLElBQUlELElBQUlFLE1BQU0sS0FBSyxRQUFRO1FBQ3pCLE9BQU9ELElBQUlFLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7WUFBRUMsT0FBTztRQUFxQjtJQUM1RDtJQUVBLE1BQU1DLE9BQU8sSUFBSWhCLG9EQUFZQTtJQUU3QmdCLEtBQUtDLEtBQUssQ0FBQ1AsS0FBSyxPQUFPUSxLQUFLQyxRQUFRQztRQUNsQyxJQUFJRixLQUFLO1lBQ1AsT0FBT1AsSUFBSUUsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztnQkFBRUMsT0FBTztZQUEwQjtRQUNqRTtRQUVBLE1BQU1NLFdBQVdELE1BQU1FLElBQUksQ0FBQyxFQUFFLENBQUNDLFFBQVE7UUFFdkMsSUFBSTtZQUNGLE1BQU1DLFNBQVMsTUFBTXpCLDBEQUFtQixDQUFDMkIsTUFBTSxDQUFDTCxVQUFVO2dCQUN4RE0sZUFBZTtZQUNqQjtZQUVBLG9EQUFvRDtZQUNwRDFCLG9EQUFhLENBQUNvQjtZQUVkVixJQUFJRSxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO2dCQUFFZSxZQUFZTCxPQUFPSyxVQUFVO1lBQUM7UUFDdkQsRUFBRSxPQUFPZCxPQUFPO1lBQ2RlLFFBQVFmLEtBQUssQ0FBQyw0QkFBNEJBO1lBQzFDSixJQUFJRSxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO2dCQUFFQyxPQUFPQSxNQUFNZ0IsT0FBTztZQUFDO1FBQzlDO0lBQ0Y7QUFDRiIsInNvdXJjZXMiOlsid2VicGFjazovL3RyeXN0Ly4vcGFnZXMvYXBpL3VwbG9hZC5qcz81NTcyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjbG91ZGluYXJ5IGZyb20gXCJjbG91ZGluYXJ5XCI7XHJcbmltcG9ydCB7IEluY29taW5nRm9ybSB9IGZyb20gXCJmb3JtaWRhYmxlXCI7XHJcbmltcG9ydCBmcyBmcm9tIFwiZnNcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBjb25maWcgPSB7XHJcbiAgYXBpOiB7XHJcbiAgICBib2R5UGFyc2VyOiBmYWxzZSxcclxuICB9LFxyXG59O1xyXG5cclxuY2xvdWRpbmFyeS5jb25maWcoe1xyXG4gIGNsb3VkX25hbWU6XCJkaGdqZ2JjdXlcIixcclxuICBhcGlfa2V5OiBcIjEyMzc1MzM2MjcyNzQ1MlwiLFxyXG4gIGFwaV9zZWNyZXQ6XCJ5UlZIQlVVLVlQSW1GLWg3dzZ1Q0ZHbDgxMHNcIixcclxuICBzZWN1cmU6wqB0cnVlXHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xyXG4gIGlmIChyZXEubWV0aG9kICE9PSBcIlBPU1RcIikge1xyXG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoNDA1KS5qc29uKHsgZXJyb3I6IFwiTWV0aG9kIG5vdCBhbGxvd2VkXCIgfSk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBmb3JtID0gbmV3IEluY29taW5nRm9ybSgpO1xyXG5cclxuICBmb3JtLnBhcnNlKHJlcSwgYXN5bmMgKGVyciwgZmllbGRzLCBmaWxlcykgPT4ge1xyXG4gICAgaWYgKGVycikge1xyXG4gICAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLmpzb24oeyBlcnJvcjogXCJFcnJvciBwYXJzaW5nIGZvcm0gZGF0YVwiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGZpbGVQYXRoID0gZmlsZXMuZmlsZVswXS5maWxlcGF0aDtcclxuXHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBjbG91ZGluYXJ5LnVwbG9hZGVyLnVwbG9hZChmaWxlUGF0aCwge1xyXG4gICAgICAgIHVwbG9hZF9wcmVzZXQ6IFwidHJ5c3R0XCIsXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgLy8gRGVsZXRlIHRoZSB0ZW1wb3JhcnkgZmlsZSBhZnRlciBzdWNjZXNzZnVsIHVwbG9hZFxyXG4gICAgICBmcy51bmxpbmtTeW5jKGZpbGVQYXRoKTtcclxuXHJcbiAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgc2VjdXJlX3VybDogcmVzdWx0LnNlY3VyZV91cmwgfSk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKFwiQ2xvdWRpbmFyeSB1cGxvYWQgZXJyb3I6XCIsIGVycm9yKTtcclxuICAgICAgcmVzLnN0YXR1cyg1MDApLmpzb24oeyBlcnJvcjogZXJyb3IubWVzc2FnZSB9KTtcclxuICAgIH1cclxuICB9KTtcclxufVxyXG4iXSwibmFtZXMiOlsiY2xvdWRpbmFyeSIsIkluY29taW5nRm9ybSIsImZzIiwiY29uZmlnIiwiYXBpIiwiYm9keVBhcnNlciIsImNsb3VkX25hbWUiLCJhcGlfa2V5IiwiYXBpX3NlY3JldCIsInNlY3VyZSIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJzdGF0dXMiLCJqc29uIiwiZXJyb3IiLCJmb3JtIiwicGFyc2UiLCJlcnIiLCJmaWVsZHMiLCJmaWxlcyIsImZpbGVQYXRoIiwiZmlsZSIsImZpbGVwYXRoIiwicmVzdWx0IiwidXBsb2FkZXIiLCJ1cGxvYWQiLCJ1cGxvYWRfcHJlc2V0IiwidW5saW5rU3luYyIsInNlY3VyZV91cmwiLCJjb25zb2xlIiwibWVzc2FnZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/upload.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/upload.js"));
module.exports = __webpack_exports__;

})();