/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/edit.js":
/*!*********************!*\
  !*** ./src/edit.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Edit)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./editor.scss */ "./src/editor.scss");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);

/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */


/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */


/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */


/*
My imports
*/




/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */
function Edit({
  attributes,
  setAttributes,
  className
}) {
  //get a unique id suffix for this block instance
  const iid = Math.random().toString(36).substr(2, 9);

  //merge the blockprops, borderProps, and classname
  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps)({
    className: 'contentoracle-ai_chat_root'
  });
  //console.log(blockProps);
  const borderProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.__experimentalUseBorderProps)(attributes);
  //console.log(borderProps);
  //add border classes to the block props classes
  if (borderProps?.className) {
    if (blockProps?.className) {
      blockProps.className += ' ' + borderProps.className;
    } else {
      blockProps.className = borderProps.className;
    }
  }

  //add border styles to the block props styles
  if (borderProps?.style) {
    if (blockProps?.style) {
      blockProps.style = {
        ...blockProps.style,
        ...borderProps.style
      };
    } else {
      blockProps.style = borderProps.style;
    }
  }

  //make input container props
  const inputContainerProps = {
    ...borderProps
  };
  if (inputContainerProps?.className) {
    inputContainerProps.className += ' contentoracle-ai_chat_input_container';
  } else {
    inputContainerProps.className = 'contentoracle-ai_chat_input_container';
  }

  //make input props
  const inputProps = {
    className: 'contentoracle-ai_chat_input',
    style: {
      borderRadius: borderProps?.style?.borderRadius
    }
  };

  //make button props
  const buttonProps = {
    className: 'contentoracle-ai_chat_button',
    style: {
      borderRadius: borderProps?.style?.borderRadius,
      backgroundColor: borderProps?.style?.borderColor,
      color: blockProps?.style?.textColor
    }
  };

  //make header props
  const labelProps = {
    className: 'contentoracle-ai_chat_header',
    style: {
      color: blockProps?.style?.color
    }
  };

  //make chat window props
  const chatWindowProps = {
    className: 'contentoracle-ai_chat_conversation',
    style: {
      borderRadius: borderProps?.style?.borderRadius,
      borderColor: borderProps?.style?.borderColor,
      borderWidth: borderProps?.style?.borderWidth,
      height: attributes?.height || "20rem"
    }
  };

  //make bot message props
  const botMsgProps = {
    className: 'contentoracle-ai_chat_bubble contentoracle-ai_chat_bubble_bot',
    style: {
      backgroundColor: attributes?.botMsgBgColor,
      color: attributes?.botMsgTextColor
    }
  };

  //make user message props
  const userMsgProps = {
    className: 'contentoracle-ai_chat_bubble contentoracle-ai_chat_bubble_user',
    style: {
      backgroundColor: attributes?.userMsgBgColor,
      color: attributes?.userMsgTextColor
    }
  };

  //make citation link styles
  const inlineCitationLinkProps = {
    className: 'contentoracle-inline_citation',
    style: {
      color: borderProps?.style?.borderColor
    }
  };
  const footerCitationLinkProps = {
    className: 'contentoracle-footer_citation_link',
    style: {
      color: borderProps?.style?.borderColor
    }
  };

  //make footer citation border styles
  const footerCitationListProps = {
    className: 'contentoracle-source_list',
    style: {
      borderRadius: borderProps?.style?.borderRadius,
      borderColor: borderProps?.style?.borderColor,
      borderWidth: borderProps?.style?.borderWidth,
      width: "100%" //need this for some reason for WYSIWYG
    }
  };

  //make action container styles
  const actionContainerProps = {
    className: 'contentoracle-action_container',
    style: {
      borderRadius: borderProps?.style?.borderRadius,
      borderColor: borderProps?.style?.borderColor,
      borderWidth: borderProps?.style?.borderWidth,
      width: "100%" //need this for some reason for WYSIWYG
    }
  };

  //make action label styles
  const actionLabelProps = {
    className: 'contentoracle-action_label'
  };

  //make action image styles
  const actionImageProps = {
    className: 'contentoracle-action_image'
  };

  //make action text styles
  const actionTextProps = {
    className: 'contentoracle-action_text'
  };

  //make action button styles
  const actionButtonProps = {
    className: 'contentoracle-action_button contentoracle-ai_chat_button',
    style: {
      borderRadius: borderProps?.style?.borderRadius,
      backgroundColor: borderProps?.style?.borderColor,
      color: blockProps?.style?.textColor
    }
  };

  //return the editor markup
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InspectorControls, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "contentoracle-ai_panelbody_root"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h3", null, "Display Settings"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "contentoracle-ai_panelbody_group"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "contentoracle-ai_panelbody_input_container"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    className: "components-base-control__label aceef-fb-c-f-cfc-1v57ksj ej5x27r2",
    htmlFor: `wp-block-chat_height_${iid}`
  }, "Height"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "range",
    min: "10",
    max: "80",
    step: "1",
    defaultValue: parseInt(attributes.height.slice(0, -3)),
    id: `wp-block-chat_height_${iid}`,
    onChange: event => {
      setAttributes({
        height: event.target.value + "rem"
      });
    }
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, attributes?.height || "-", " ")), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "contentoracle-ai_panelbody_group"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "contentoracle-ai_panelbody_input_container"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.PanelColorSettings, {
    title: "Bot Message Colors",
    initialOpen: true,
    id: `contentoracle-ai_chat_bot_msg_background_color_${iid}`,
    colorSettings: [{
      value: attributes?.botMsgBgColor,
      onChange: color => setAttributes({
        botMsgBgColor: color
      }),
      label: 'Bot Background Color'
    }, {
      value: attributes?.botMsgTextColor,
      onChange: color => setAttributes({
        botMsgTextColor: color
      }),
      label: 'Bot Text Color'
    }]
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.PanelColorSettings, {
    title: "User Message Colors",
    initialOpen: true,
    id: `contentoracle-ai_chat_user_msg_background_color_${iid}`,
    colorSettings: [{
      value: attributes?.userMsgBgColor,
      onChange: color => setAttributes({
        userMsgBgColor: color
      }),
      label: 'User Background Color'
    }, {
      value: attributes?.userMsgTextColor,
      onChange: color => setAttributes({
        userMsgTextColor: color
      }),
      label: 'User Text Color'
    }]
  })))))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ...blockProps
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "contentoracle-ai_chat_header"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h3", {
    ...labelProps
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText, {
    placeholder: "AI Chat header here...",
    value: attributes.header,
    onChange: newValue => {
      setAttributes({
        header: newValue
      });
    }
  }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ...chatWindowProps
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ...userMsgProps
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, "How do I grow a tomato plant?")), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ...botMsgProps
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, "Tomato plants grow best in full sun, in soil that is rich in organic matter, and well-drained.", (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("sup", {
    ...inlineCitationLinkProps
  }, "1"), "  They need a lot of water, but not too much. They also need a lot of nutrients, so you should fertilize them regularly. You should also prune them regularly to keep them healthy and productive. If you follow these tips, you should have a healthy and productive tomato plant."), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    style: {
      padding: '0.25rem',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    style: {
      textSize: 'larger',
      width: '100%'
    }
  }, " Take Action! "), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ...actionContainerProps
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    ...actionLabelProps
  }, "Want to learn more about growing tomatos?  Read on!"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    ...actionImageProps,
    src: window.location.origin + '/wp-content/plugins/contentoracle/features/chat_block/assets/images/tomatos.jpg',
    alt: "tomatos"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    ...actionTextProps
  }, "Discover the secrets to cultivating thriving tomatoes with the perfect soil mix. From pH levels to nutrient-rich ingredients, learn how to create the ideal growing environment for juicy, flavorful tomatoes in your garden."), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    ...actionButtonProps
  }, "Keep Reading"))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    style: {
      padding: '0.25rem',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    style: {
      fontSize: 'larger',
      width: '100%'
    }
  }, "Sources"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("ol", {
    ...footerCitationListProps
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", {
    className: "contentoracle-footer_citation"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, "The Best Soil for Growing Tomatos"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    href: "#",
    ...footerCitationLinkProps
  }, "\u2192")))))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ...inputContainerProps
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "contentoracle-ai_chat_input_wrapper"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "text",
    ...inputProps,
    "aria-label": "Optional placeholder text",
    placeholder: "Optional placeholder\u2026",
    defaultValue: attributes.placeholder,
    onChange: event => {
      setAttributes({
        placeholder: event.target.value
      });
    }
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ...buttonProps
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText, {
    placeholder: "Search text here...",
    value: attributes.buttonText,
    onChange: newValue => {
      setAttributes({
        buttonText: newValue
      });
    }
  })))));
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./editor.scss */ "./src/editor.scss");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./edit */ "./src/edit.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./block.json */ "./src/block.json");
/* harmony import */ var _coai_icon_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./coai_icon.png */ "./src/coai_icon.png");

/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/#registering-a-block
 */


/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * All files containing `style` keyword are bundled together. The code used
 * gets applied both to the front of your site and to the editor. All other files
 * get applied to the editor only.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */



/**
 * Internal dependencies
 */




/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/#registering-a-block
 */
(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_5__.name, {
  icon: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    src: _coai_icon_png__WEBPACK_IMPORTED_MODULE_6__,
    alt: "ContentOracle AI Chat",
    style: {
      width: '24px',
      height: '24px'
    }
  }),
  /**
   * @see ./edit.js
   */
  edit: _edit__WEBPACK_IMPORTED_MODULE_4__["default"]
});

/***/ }),

/***/ "./src/editor.scss":
/*!*************************!*\
  !*** ./src/editor.scss ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/coai_icon.png":
/*!***************************!*\
  !*** ./src/coai_icon.png ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/coai_icon.74bda2e4.png";

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

module.exports = window["React"];

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ ((module) => {

module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ ((module) => {

module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ ((module) => {

module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ ((module) => {

module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "./src/block.json":
/*!************************!*\
  !*** ./src/block.json ***!
  \************************/
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"contentoracle/ai-chat","version":"0.1.0","title":"Contentoracle Ai Chat","category":"contentoracle","icon":"smiley","description":"Let your users chat with ai, and show ai search results with your site\'s custom content.","example":{},"keywords":["chat","ai","contentoracle","search","searchbar","query","answer","question"],"attributes":{"header":{"type":"string","default":"ContentOracle Ai Chat"},"placeholder":{"type":"string","default":"Ask me anything..."},"buttonText":{"type":"string","default":"Send"},"height":{"type":"string","default":"20rem"},"botMsgBgColor":{"type":"string","default":"#d1d1d1"},"botMsgTextColor":{"type":"string","default":"#111111"},"userMsgBgColor":{"type":"string","default":"#3232fd"},"userMsgTextColor":{"type":"string","default":"#eeeeff"}},"selectors":{"root":".contentoracle-ai_chat_root","input_container":".contentoracle-ai_chat_input_container","input":".contentoracle-ai_chat_input","button":".contentoracle-ai_chat_button","conversation":".contentoracle-ai_chat_conversation","label":".contentoracle-ai_chat_label","header":".contentoracle-ai_chat_header","inline_citation":".contentoracle-inline_citation","source_list":".contentoracle-source_list","footer_citation":".contentoracle-footer_citation","footer_citation_link":".contentoracle-footer_citation_link","action_container":".contentoracle-action_container","action_label":".contentoracle-action_label","action_button":".contentoracle-action_button","action_excerpt":".contentoracle-action_excerpt","action_image":".contentoracle-action_image"},"supports":{"color":{"background":true,"text":true},"__experimentalBorder":{"color":true,"radius":true,"width":true,"__experimentalSkipSerialization":true,"__experimentalDefaultControls":{"color":true,"radius":true,"width":true}},"border":{"radius":true,"color":true},"spacing":{"margin":true,"padding":true},"html":false},"textdomain":"contentoracle-ai-chat-block","editorScript":"file:./index.js","editorStyle":"file:./index.css","style":"file:./style-index.css","render":"file:./render.php","viewScriptModule":"file:./view.js"}');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var chunkIds = deferred[i][0];
/******/ 				var fn = deferred[i][1];
/******/ 				var priority = deferred[i][2];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"index": 0,
/******/ 			"./style-index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkcontentoracle_ai_chat_block"] = self["webpackChunkcontentoracle_ai_chat_block"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["./style-index"], () => (__webpack_require__("./src/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map