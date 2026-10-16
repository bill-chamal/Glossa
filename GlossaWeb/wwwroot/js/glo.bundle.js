window["gloEngine"] =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./glo-entry.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./glo-entry.js":
/*!**********************!*\
  !*** ./glo-entry.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var glo = __webpack_require__(/*! ./glo/modules/glo/lib/glo.js */ "./glo/modules/glo/lib/glo.js");
var GLOError = __webpack_require__(/*! ./glo/modules/error/lib/GLOError.js */ "./glo/modules/error/lib/GLOError.js");

module.exports = {
  interpret: glo.default || glo,
  GLOError: GLOError.default || GLOError
};


/***/ }),

/***/ "./glo/modules/ast/lib/AST.js":
/*!************************************!*\
  !*** ./glo/modules/ast/lib/AST.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ASTVisitor = void 0;
const ASTVisitor_1 = __importDefault(__webpack_require__(/*! ./ASTVisitor */ "./glo/modules/ast/lib/ASTVisitor.js"));
exports.ASTVisitor = ASTVisitor_1.default;
__exportStar(__webpack_require__(/*! ./AST/index */ "./glo/modules/ast/lib/AST/index.js"), exports);
//# sourceMappingURL=AST.js.map

/***/ }),

/***/ "./glo/modules/ast/lib/AST/AST.js":
/*!****************************************!*\
  !*** ./glo/modules/ast/lib/AST/AST.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const error_1 = __webpack_require__(/*! @glossa-glo/error */ "./glo/modules/error/lib/GLOError.js");
class AST extends error_1.DebugInfoProvider {
    constructor(..._) {
        super();
        this._children = [];
        this.parent = null;
    }
    get children() {
        return this._children;
    }
    addChild(...children) {
        children.forEach(child => {
            child.parent = this;
            this._children.push(child);
        });
    }
}
exports.default = AST;
//# sourceMappingURL=AST.js.map

/***/ }),

/***/ "./glo/modules/ast/lib/AST/AndAST.js":
/*!*******************************************!*\
  !*** ./glo/modules/ast/lib/AST/AndAST.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const BinaryAST_1 = __importDefault(__webpack_require__(/*! ./BinaryAST */ "./glo/modules/ast/lib/AST/BinaryAST.js"));
class AndAST extends BinaryAST_1.default {
}
exports.default = AndAST;
//# sourceMappingURL=AndAST.js.map

/***/ }),

/***/ "./glo/modules/ast/lib/AST/ArrayAST.js":
/*!*********************************************!*\
  !*** ./glo/modules/ast/lib/AST/ArrayAST.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const TypeAST_1 = __importDefault(__webpack_require__(/*! ./TypeAST */ "./glo/modules/ast/lib/AST/TypeAST.js"));
const data_types_1 = __webpack_require__(/*! @glossa-glo/data-types */ "./glo/modules/data-types/lib/index.js");
class ArrayAST extends TypeAST_1.default {
    constructor(dimensionLength, componentType) {
        super();
        this.dimensionLength = dimensionLength;
        this.componentType = componentType;
        this.dimensionLengthNumbers = []; // Filled by SimplifyConstants
        this.addChild(componentType);
    }
    get dataType() {
        if (!this.componentType.dataType) {
            throw new Error('Program error: Could not calculate ArrayAST data type: component type has no data type');
        }
        if (this.dimensionLengthNumbers.length !== this.dimensionLength.length) {
            throw new Error('Program error: Could not calculate ArrayAST data type: dimension length numbers not filled');
        }
        return data_types_1.createGLOArray(this.componentType.dataType, this.dimensionLengthNumbers);
    }
}
exports.default = ArrayAST;
//# sourceMappingURL=ArrayAST.js.map

/***/ }),

/***/ "./glo/modules/ast/lib/AST/ArrayAccessAST.js":
/*!***************************************************!*\
  !*** ./glo/modules/ast/lib/AST/ArrayAccessAST.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const AST_1 = __importDefault(__webpack_require__(/*! ./AST */ "./glo/modules/ast/lib/AST/AST.js"));
class ArrayAccessAST extends AST_1.default {
    constructor(array, accessors) {
        super();
        this.array = array;
        this.accessors = accessors;
        this.addChild(array, ...accessors);
    }
}
exports.default = ArrayAccessAST;
//# sourceMappingURL=ArrayAccessAST.js.map

/***/ }),

/***/ "./glo/modules/ast/lib/AST/AssignmentAST.js":
/*!**************************************************!*\
  !*** ./glo/modules/ast/lib/AST/AssignmentAST.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const BinaryAST_1 = __importDefault(__webpack_require__(/*! ./BinaryAST */ "./glo/modules/ast/lib/AST/BinaryAST.js"));
class AssignmentAST extends BinaryAST_1.default {
}
exports.default = AssignmentAST;
//# sourceMappingURL=AssignmentAST.js.map

/***/ }),

/***/ "./glo/modules/ast/lib/AST/BinaryAST.js":
/*!**********************************************!*\
  !*** ./glo/modules/ast/lib/AST/BinaryAST.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const AST_1 = __importDefault(__webpack_require__(/*! ./AST */ "./glo/modules/ast/lib/AST/AST.js"));
class BinaryAST extends AST_1.default {
    constructor(left, right) {
        super();
        this.left = left;
        this.right = right;
    }
    get left() {
        return this._left;
    }
    set left(value) {
        const indexOfCurrent = this._children.indexOf(this._left);
        if (indexOfCurrent !== -1) {
            this._children.splice(indexOfCurrent, 1);
        }
        this.addChild(value);
        this._left = value;
    }
    get right() {
        return this._right;
    }
    set right(value) {
        const indexOfCurrent = this._children.indexOf(this._right);
        if (indexOfCurrent !== -1) {
            this._children.splice(indexOfCurrent, 1);
        }
        this.addChild(value);
        this._right = value;
    }
}
exports.default = BinaryAST;
//# sourceMappingURL=BinaryAST.js.map

/***/ }),

/***/ "./glo/modules/ast/lib/AST/BooleanAST.js":
/*!***********************************************!*\
  !*** ./glo/modules/ast/lib/AST/BooleanAST.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const TypeAST_1 = __importDefault(__webpack_require__(/*! ./TypeAST */ "./glo/modules/ast/lib/AST/TypeAST.js"));
const data_types_1 = __webpack_require__(/*! @glossa-glo/data-types */ "./glo/modules/data-types/lib/index.js");
class BooleanAST extends TypeAST_1.default {
    constructor() {
        super(...arguments);
        this.dataType = data_types_1.GLOBoolean;
    }
}
exports.default = BooleanAST;
//# sourceMappingURL=BooleanAST.js.map

/***/ }),

/***/ "./glo/modules/ast/lib/AST/ConstantAST.js":
/*!************************************************!*\
  !*** ./glo/modules/ast/lib/AST/ConstantAST.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const AST_1 = __importDefault(__webpack_require__(/*! ./AST */ "./glo/modules/ast/lib/AST/AST.js"));
class ConstantAST extends AST_1.default {
}
exports.default = ConstantAST;
//# sourceMappingURL=ConstantAST.js.map

/***/ }),

/***/ "./glo/modules/ast/lib/AST/ConstantDeclarationAST.js":
/*!***********************************************************!*\
  !*** ./glo/modules/ast/lib/AST/ConstantDeclarationAST.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const AST_1 = __importDefault(__webpack_require__(/*! ./AST */ "./glo/modules/ast/lib/AST/AST.js"));
class ConstantDeclarationAST extends AST_1.default {
    constructor(variable, expression) {
        super();
        this.variable = variable;
        this.expression = expression;
        this.type = null;
        this.value = null;
        this.addChild(variable, expression);
    }
}
exports.default = ConstantDeclarationAST;
//# sourceMappingURL=ConstantDeclarationAST.js.map

/***/ }),

/***/ "./glo/modules/ast/lib/AST/EmptyAST.js":
/*!*********************************************!*\
  !*** ./glo/modules/ast/lib/AST/EmptyAST.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const AST_1 = __importDefault(__webpack_require__(/*! ./AST */ "./glo/modules/ast/lib/AST/AST.js"));
class EmptyAST extends AST_1.default {
}
exports.default = EmptyAST;
//# sourceMappingURL=EmptyAST.js.map

/***/ }),

/***/ "./glo/modules/ast/lib/AST/EqualsAST.js":
/*!**********************************************!*\
  !*** ./glo/modules/ast/lib/AST/EqualsAST.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const BinaryAST_1 = __importDefault(__webpack_require__(/*! ./BinaryAST */ "./glo/modules/ast/lib/AST/BinaryAST.js"));
class EqualsAST extends BinaryAST_1.default {
}
exports.default = EqualsAST;
//# sourceMappingURL=EqualsAST.js.map

/***/ }),

/***/ "./glo/modules/ast/lib/AST/ExponentiationAST.js":
/*!******************************************************!*\
  !*** ./glo/modules/ast/lib/AST/ExponentiationAST.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const BinaryAST_1 = __importDefault(__webpack_require__(/*! ./BinaryAST */ "./glo/modules/ast/lib/AST/BinaryAST.js"));
class ExponentiationAST extends BinaryAST_1.default {
}
exports.default = ExponentiationAST;
//# sourceMappingURL=ExponentiationAST.js.map

/***/ }),

/***/ "./glo/modules/ast/lib/AST/FalseConstantAST.js":
/*!*****************************************************!*\
  !*** ./glo/modules/ast/lib/AST/FalseConstantAST.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ConstantAST_1 = __importDefault(__webpack_require__(/*! ./ConstantAST */ "./glo/modules/ast/lib/AST/ConstantAST.js"));
const data_types_1 = __webpack_require__(/*! @glossa-glo/data-types */ "./glo/modules/data-types/lib/index.js");
class FalseConstantAST extends ConstantAST_1.default {
    constructor() {
        super(...arguments);
        this.value = new data_types_1.GLOBoolean(false);
        this.dataType = data_types_1.GLOBoolean;
    }
}
exports.default = FalseConstantAST;
//# sourceMappingURL=FalseConstantAST.js.map

/***/ }),

/***/ "./glo/modules/ast/lib/AST/ForAST.js":
/*!*******************************************!*\
  !*** ./glo/modules/ast/lib/AST/ForAST.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const AST_1 = __importDefault(__webpack_require__(/*! ./AST */ "./glo/modules/ast/lib/AST/AST.js"));
class ForAST extends AST_1.default {
    constructor(counter, startValue, endValue, step, statementList) {
        super();
        this.counter = counter;
        this.startValue = startValue;
        this.endValue = endValue;
        this.step = step;
        this.statementList = statementList;
        this.addChild(counter, step, startValue, endValue, ...statementList);
    }
}
exports.default = ForAST;
//# sourceMappingURL=ForAST.js.map

/***/ }),

/***/ "./glo/modules/ast/lib/AST/FunctionCallAST.js":
/*!****************************************************!*\
  !*** ./glo/modules/ast/lib/AST/FunctionCallAST.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const AST_1 = __importDefault(__webpack_require__(/*! ./AST */ "./glo/modules/ast/lib/AST/AST.js"));
class FunctionCallAST extends AST_1.default {
    constructor(name, args) {
        super();
        this.name = name;
        this.args = args;
        this.addChild(...args);
    }
}
exports.default = FunctionCallAST;
//# sourceMappingURL=FunctionCallAST.js.map

/***/ }),

/***/ "./glo/modules/ast/lib/AST/FunctionDeclarationAST.js":
/*!***********************************************************!*\
  !*** ./glo/modules/ast/lib/AST/FunctionDeclarationAST.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const AST_1 = __importDefault(__webpack_require__(/*! ./AST */ "./glo/modules/ast/lib/AST/AST.js"));
class FunctionDeclarationAST extends AST_1.default {
    constructor(name, args, returnType, constantDeclarations, variableDeclarations, statementList) {
        super();
        this.name = name;
        this.args = args;
        this.returnType = returnType;
        this.constantDeclarations = constantDeclarations;
        this.variableDeclarations = variableDeclarations;
        this.statementList = statementList;
        this.addChild(...args, returnType, ...constantDeclarations, ...variableDeclarations, ...statementList);
    }
}
exports.default = FunctionDeclarationAST;
//# sourceMappingURL=FunctionDeclarationAST.js.map

/***/ }),

/***/ "./glo/modules/ast/lib/AST/GreaterEqualsAST.js":
/*!*****************************************************!*\
  !*** ./glo/modules/ast/lib/AST/GreaterEqualsAST.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const BinaryAST_1 = __importDefault(__webpack_require__(/*! ./BinaryAST */ "./glo/modules/ast/lib/AST/BinaryAST.js"));
class GreaterEqualsAST extends BinaryAST_1.default {
}
exports.default = GreaterEqualsAST;
//# sourceMappingURL=GreaterEqualsAST.js.map

/***/ }),

/***/ "./glo/modules/ast/lib/AST/GreaterThanAST.js":
/*!***************************************************!*\
  !*** ./glo/modules/ast/lib/AST/GreaterThanAST.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const BinaryAST_1 = __importDefault(__webpack_require__(/*! ./BinaryAST */ "./glo/modules/ast/lib/AST/BinaryAST.js"));
class GreaterThanAST extends BinaryAST_1.default {
}
exports.default = GreaterThanAST;
//# sourceMappingURL=GreaterThanAST.js.map

/***/ }),

/***/ "./glo/modules/ast/lib/AST/IfAST.js":
/*!******************************************!*\
  !*** ./glo/modules/ast/lib/AST/IfAST.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const AST_1 = __importDefault(__webpack_require__(/*! ./AST */ "./glo/modules/ast/lib/AST/AST.js"));
class IfAST extends AST_1.default {
    constructor(condition, statementList) {
        super();
        this.condition = condition;
        this.statementList = statementList;
        this.next = null;
        this.addChild(condition, ...statementList);
    }
    addNext(next) {
        if (this.next) {
            throw new Error('Cannot add next if node more than once');
        }
        this.next = next;
        if (Array.isArray(next)) {
            for (let i = 0; i < next.length; i++) {
                this.addChild(next[i]);
            }
        }
        else
            this.addChild(next);
    }
}
exports.default = IfAST;
//# sourceMappingURL=IfAST.js.map

/***/ }),

/***/ "./glo/modules/ast/lib/AST/IntegerAST.js":
/*!***********************************************!*\
  !*** ./glo/modules/ast/lib/AST/IntegerAST.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const TypeAST_1 = __importDefault(__webpack_require__(/*! ./TypeAST */ "./glo/modules/ast/lib/AST/TypeAST.js"));
const data_types_1 = __webpack_require__(/*! @glossa-glo/data-types */ "./glo/modules/data-types/lib/index.js");
class IntegerAST extends TypeAST_1.default {
    constructor() {
        super(...arguments);
        this.dataType = data_types_1.GLOInteger;
    }
}
exports.default = IntegerAST;
//# sourceMappingURL=IntegerAST.js.map

/***/ }),

/***/ "./glo/modules/ast/lib/AST/IntegerConstantAST.js":
/*!*******************************************************!*\
  !*** ./glo/modules/ast/lib/AST/IntegerConstantAST.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ConstantAST_1 = __importDefault(__webpack_require__(/*! ./ConstantAST */ "./glo/modules/ast/lib/AST/ConstantAST.js"));
const Types = __importStar(__webpack_require__(/*! @glossa-glo/data-types */ "./glo/modules/data-types/lib/index.js"));
const RealConstantAST_1 = __importDefault(__webpack_require__(/*! ./RealConstantAST */ "./glo/modules/ast/lib/AST/RealConstantAST.js"));
class IntegerConstantAST extends ConstantAST_1.default {
    constructor(value) {
        super();
        this.dataType = Types.GLOInteger;
        this.promote = new Map();
        this.value = value;
        this.promote.set(Types.GLOReal, () => {
            return new RealConstantAST_1.default(this.value.promote.get(Types.GLOReal)());
        });
    }
}
exports.default = IntegerConstantAST;
//# sourceMappingURL=IntegerConstantAST.js.map

/***/ }),

/***/ "./glo/modules/ast/lib/AST/IntegerDivisionAST.js":
/*!*******************************************************!*\
  !*** ./glo/modules/ast/lib/AST/IntegerDivisionAST.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const BinaryAST_1 = __importDefault(__webpack_require__(/*! ./BinaryAST */ "./glo/modules/ast/lib/AST/BinaryAST.js"));
class IntegerDivisonAST extends BinaryAST_1.default {
}
exports.default = IntegerDivisonAST;
//# sourceMappingURL=IntegerDivisionAST.js.map

/***/ }),

/***/ "./glo/modules/ast/lib/AST/LessEqualsAST.js":
/*!**************************************************!*\
  !*** ./glo/modules/ast/lib/AST/LessEqualsAST.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const BinaryAST_1 = __importDefault(__webpack_require__(/*! ./BinaryAST */ "./glo/modules/ast/lib/AST/BinaryAST.js"));
class LessEqualsAST extends BinaryAST_1.default {
}
exports.default = LessEqualsAST;
//# sourceMappingURL=LessEqualsAST.js.map

/***/ }),

/***/ "./glo/modules/ast/lib/AST/LessThanAST.js":
/*!************************************************!*\
  !*** ./glo/modules/ast/lib/AST/LessThanAST.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const BinaryAST_1 = __importDefault(__webpack_require__(/*! ./BinaryAST */ "./glo/modules/ast/lib/AST/BinaryAST.js"));
class LessThanAST extends BinaryAST_1.default {
}
exports.default = LessThanAST;
//# sourceMappingURL=LessThanAST.js.map

/***/ }),

/***/ "./glo/modules/ast/lib/AST/MinusAST.js":
/*!*********************************************!*\
  !*** ./glo/modules/ast/lib/AST/MinusAST.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const BinaryAST_1 = __importDefault(__webpack_require__(/*! ./BinaryAST */ "./glo/modules/ast/lib/AST/BinaryAST.js"));
class MinusAST extends BinaryAST_1.default {
}
exports.default = MinusAST;
//# sourceMappingURL=MinusAST.js.map

/***/ }),

/***/ "./glo/modules/ast/lib/AST/ModAST.js":
/*!*******************************************!*\
  !*** ./glo/modules/ast/lib/AST/ModAST.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const BinaryAST_1 = __importDefault(__webpack_require__(/*! ./BinaryAST */ "./glo/modules/ast/lib/AST/BinaryAST.js"));
class ModAST extends BinaryAST_1.default {
}
exports.default = ModAST;
//# sourceMappingURL=ModAST.js.map

/***/ }),

/***/ "./glo/modules/ast/lib/AST/MultiplicationAST.js":
/*!******************************************************!*\
  !*** ./glo/modules/ast/lib/AST/MultiplicationAST.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const BinaryAST_1 = __importDefault(__webpack_require__(/*! ./BinaryAST */ "./glo/modules/ast/lib/AST/BinaryAST.js"));
class MultiplicationAST extends BinaryAST_1.default {
}
exports.default = MultiplicationAST;
//# sourceMappingURL=MultiplicationAST.js.map

/***/ }),

/***/ "./glo/modules/ast/lib/AST/NotAST.js":
/*!*******************************************!*\
  !*** ./glo/modules/ast/lib/AST/NotAST.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const UnaryAST_1 = __importDefault(__webpack_require__(/*! ./UnaryAST */ "./glo/modules/ast/lib/AST/UnaryAST.js"));
class NotAST extends UnaryAST_1.default {
}
exports.default = NotAST;
//# sourceMappingURL=NotAST.js.map

/***/ }),

/***/ "./glo/modules/ast/lib/AST/NotEqualsAST.js":
/*!*************************************************!*\
  !*** ./glo/modules/ast/lib/AST/NotEqualsAST.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const BinaryAST_1 = __importDefault(__webpack_require__(/*! ./BinaryAST */ "./glo/modules/ast/lib/AST/BinaryAST.js"));
class NotEqualsAST extends BinaryAST_1.default {
}
exports.default = NotEqualsAST;
//# sourceMappingURL=NotEqualsAST.js.map

/***/ }),

/***/ "./glo/modules/ast/lib/AST/OrAST.js":
/*!******************************************!*\
  !*** ./glo/modules/ast/lib/AST/OrAST.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const BinaryAST_1 = __importDefault(__webpack_require__(/*! ./BinaryAST */ "./glo/modules/ast/lib/AST/BinaryAST.js"));
class OrAST extends BinaryAST_1.default {
}
exports.default = OrAST;
//# sourceMappingURL=OrAST.js.map

/***/ }),

/***/ "./glo/modules/ast/lib/AST/PlusAST.js":
/*!********************************************!*\
  !*** ./glo/modules/ast/lib/AST/PlusAST.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const BinaryAST_1 = __importDefault(__webpack_require__(/*! ./BinaryAST */ "./glo/modules/ast/lib/AST/BinaryAST.js"));
class PlusAST extends BinaryAST_1.default {
}
exports.default = PlusAST;
//# sourceMappingURL=PlusAST.js.map

/***/ }),

/***/ "./glo/modules/ast/lib/AST/ProcedureCallAST.js":
/*!*****************************************************!*\
  !*** ./glo/modules/ast/lib/AST/ProcedureCallAST.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const AST_1 = __importDefault(__webpack_require__(/*! ./AST */ "./glo/modules/ast/lib/AST/AST.js"));
class ProcedureCallAST extends AST_1.default {
    constructor(name, args) {
        super();
        this.name = name;
        this.args = args;
        this.addChild(...args);
    }
}
exports.default = ProcedureCallAST;
//# sourceMappingURL=ProcedureCallAST.js.map

/***/ }),

/***/ "./glo/modules/ast/lib/AST/ProcedureDeclarationAST.js":
/*!************************************************************!*\
  !*** ./glo/modules/ast/lib/AST/ProcedureDeclarationAST.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const AST_1 = __importDefault(__webpack_require__(/*! ./AST */ "./glo/modules/ast/lib/AST/AST.js"));
class ProcedureDeclarationAST extends AST_1.default {
    constructor(name, args, constantDeclarations, variableDeclarations, statementList) {
        super();
        this.name = name;
        this.args = args;
        this.constantDeclarations = constantDeclarations;
        this.variableDeclarations = variableDeclarations;
        this.statementList = statementList;
        this.addChild(...args, ...constantDeclarations, ...variableDeclarations, ...statementList);
    }
}
exports.default = ProcedureDeclarationAST;
//# sourceMappingURL=ProcedureDeclarationAST.js.map

/***/ }),

/***/ "./glo/modules/ast/lib/AST/ProgramAST.js":
/*!***********************************************!*\
  !*** ./glo/modules/ast/lib/AST/ProgramAST.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const AST_1 = __importDefault(__webpack_require__(/*! ./AST */ "./glo/modules/ast/lib/AST/AST.js"));
class ProgramAST extends AST_1.default {
    constructor(name, declarations, statementList) {
        super();
        this.name = name;
        this.declarations = declarations;
        this.statementList = statementList;
        this.addChild(...declarations, ...statementList);
        this.name = name;
    }
}
exports.default = ProgramAST;
//# sourceMappingURL=ProgramAST.js.map

/***/ }),

/***/ "./glo/modules/ast/lib/AST/ReadAST.js":
/*!********************************************!*\
  !*** ./glo/modules/ast/lib/AST/ReadAST.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const AST_1 = __importDefault(__webpack_require__(/*! ./AST */ "./glo/modules/ast/lib/AST/AST.js"));
class ReadAST extends AST_1.default {
    constructor(args) {
        super();
        this.args = args;
        this.addChild(...args);
    }
}
exports.default = ReadAST;
//# sourceMappingURL=ReadAST.js.map

/***/ }),

/***/ "./glo/modules/ast/lib/AST/RealAST.js":
/*!********************************************!*\
  !*** ./glo/modules/ast/lib/AST/RealAST.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const TypeAST_1 = __importDefault(__webpack_require__(/*! ./TypeAST */ "./glo/modules/ast/lib/AST/TypeAST.js"));
const data_types_1 = __webpack_require__(/*! @glossa-glo/data-types */ "./glo/modules/data-types/lib/index.js");
class RealAST extends TypeAST_1.default {
    constructor() {
        super(...arguments);
        this.dataType = data_types_1.GLOReal;
    }
}
exports.default = RealAST;
//# sourceMappingURL=RealAST.js.map

/***/ }),

/***/ "./glo/modules/ast/lib/AST/RealConstantAST.js":
/*!****************************************************!*\
  !*** ./glo/modules/ast/lib/AST/RealConstantAST.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ConstantAST_1 = __importDefault(__webpack_require__(/*! ./ConstantAST */ "./glo/modules/ast/lib/AST/ConstantAST.js"));
const Types = __importStar(__webpack_require__(/*! @glossa-glo/data-types */ "./glo/modules/data-types/lib/index.js"));
class RealConstantAST extends ConstantAST_1.default {
    constructor(value) {
        super();
        this.dataType = Types.GLOReal;
        this.value = value;
    }
}
exports.default = RealConstantAST;
//# sourceMappingURL=RealConstantAST.js.map

/***/ }),

/***/ "./glo/modules/ast/lib/AST/RealDivisionAST.js":
/*!****************************************************!*\
  !*** ./glo/modules/ast/lib/AST/RealDivisionAST.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const BinaryAST_1 = __importDefault(__webpack_require__(/*! ./BinaryAST */ "./glo/modules/ast/lib/AST/BinaryAST.js"));
class RealDivisonAST extends BinaryAST_1.default {
}
exports.default = RealDivisonAST;
//# sourceMappingURL=RealDivisionAST.js.map

/***/ }),

/***/ "./glo/modules/ast/lib/AST/RepeatAST.js":
/*!**********************************************!*\
  !*** ./glo/modules/ast/lib/AST/RepeatAST.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const AST_1 = __importDefault(__webpack_require__(/*! ./AST */ "./glo/modules/ast/lib/AST/AST.js"));
class RepeatAST extends AST_1.default {
    constructor(condition, statementList) {
        super();
        this.condition = condition;
        this.statementList = statementList;
        this.addChild(condition, ...statementList);
    }
}
exports.default = RepeatAST;
//# sourceMappingURL=RepeatAST.js.map

/***/ }),

/***/ "./glo/modules/ast/lib/AST/StringAST.js":
/*!**********************************************!*\
  !*** ./glo/modules/ast/lib/AST/StringAST.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const TypeAST_1 = __importDefault(__webpack_require__(/*! ./TypeAST */ "./glo/modules/ast/lib/AST/TypeAST.js"));
const data_types_1 = __webpack_require__(/*! @glossa-glo/data-types */ "./glo/modules/data-types/lib/index.js");
class StringAST extends TypeAST_1.default {
    constructor() {
        super(...arguments);
        this.dataType = data_types_1.GLOString;
    }
}
exports.default = StringAST;
//# sourceMappingURL=StringAST.js.map

/***/ }),

/***/ "./glo/modules/ast/lib/AST/StringConstantAST.js":
/*!******************************************************!*\
  !*** ./glo/modules/ast/lib/AST/StringConstantAST.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ConstantAST_1 = __importDefault(__webpack_require__(/*! ./ConstantAST */ "./glo/modules/ast/lib/AST/ConstantAST.js"));
const Types = __importStar(__webpack_require__(/*! @glossa-glo/data-types */ "./glo/modules/data-types/lib/index.js"));
class StringConstantAST extends ConstantAST_1.default {
    constructor(value) {
        super();
        this.dataType = Types.GLOString;
        this.value = value;
    }
}
exports.default = StringConstantAST;
//# sourceMappingURL=StringConstantAST.js.map

/***/ }),

/***/ "./glo/modules/ast/lib/AST/SubrangeAST.js":
/*!************************************************!*\
  !*** ./glo/modules/ast/lib/AST/SubrangeAST.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const AST_1 = __importDefault(__webpack_require__(/*! ./AST */ "./glo/modules/ast/lib/AST/AST.js"));
class SubrangeAST extends AST_1.default {
    constructor(left, right) {
        super();
        this.left = left;
        this.right = right;
    }
}
exports.default = SubrangeAST;
//# sourceMappingURL=SubrangeAST.js.map

/***/ }),

/***/ "./glo/modules/ast/lib/AST/TrueConstantAST.js":
/*!****************************************************!*\
  !*** ./glo/modules/ast/lib/AST/TrueConstantAST.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ConstantAST_1 = __importDefault(__webpack_require__(/*! ./ConstantAST */ "./glo/modules/ast/lib/AST/ConstantAST.js"));
const data_types_1 = __webpack_require__(/*! @glossa-glo/data-types */ "./glo/modules/data-types/lib/index.js");
class TrueConstantAST extends ConstantAST_1.default {
    constructor() {
        super(...arguments);
        this.dataType = data_types_1.GLOBoolean;
        this.value = new data_types_1.GLOBoolean(true);
    }
}
exports.default = TrueConstantAST;
//# sourceMappingURL=TrueConstantAST.js.map

/***/ }),

/***/ "./glo/modules/ast/lib/AST/TypeAST.js":
/*!********************************************!*\
  !*** ./glo/modules/ast/lib/AST/TypeAST.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const AST_1 = __importDefault(__webpack_require__(/*! ./AST */ "./glo/modules/ast/lib/AST/AST.js"));
class TypeAST extends AST_1.default {
}
exports.default = TypeAST;
//# sourceMappingURL=TypeAST.js.map

/***/ }),

/***/ "./glo/modules/ast/lib/AST/UnaryAST.js":
/*!*********************************************!*\
  !*** ./glo/modules/ast/lib/AST/UnaryAST.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const AST_1 = __importDefault(__webpack_require__(/*! ./AST */ "./glo/modules/ast/lib/AST/AST.js"));
class UnaryAST extends AST_1.default {
    constructor(target) {
        super();
        this.target = target;
        this.addChild(target);
    }
}
exports.default = UnaryAST;
//# sourceMappingURL=UnaryAST.js.map

/***/ }),

/***/ "./glo/modules/ast/lib/AST/UnaryMinusAST.js":
/*!**************************************************!*\
  !*** ./glo/modules/ast/lib/AST/UnaryMinusAST.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const UnaryAST_1 = __importDefault(__webpack_require__(/*! ./UnaryAST */ "./glo/modules/ast/lib/AST/UnaryAST.js"));
class UnaryMinusAST extends UnaryAST_1.default {
}
exports.default = UnaryMinusAST;
//# sourceMappingURL=UnaryMinusAST.js.map

/***/ }),

/***/ "./glo/modules/ast/lib/AST/UnaryPlusAST.js":
/*!*************************************************!*\
  !*** ./glo/modules/ast/lib/AST/UnaryPlusAST.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const UnaryAST_1 = __importDefault(__webpack_require__(/*! ./UnaryAST */ "./glo/modules/ast/lib/AST/UnaryAST.js"));
class UnaryPlusAST extends UnaryAST_1.default {
}
exports.default = UnaryPlusAST;
//# sourceMappingURL=UnaryPlusAST.js.map

/***/ }),

/***/ "./glo/modules/ast/lib/AST/VariableAST.js":
/*!************************************************!*\
  !*** ./glo/modules/ast/lib/AST/VariableAST.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const AST_1 = __importDefault(__webpack_require__(/*! ./AST */ "./glo/modules/ast/lib/AST/AST.js"));
class VariableAST extends AST_1.default {
    constructor(name) {
        super();
        this.name = name;
    }
}
exports.default = VariableAST;
//# sourceMappingURL=VariableAST.js.map

/***/ }),

/***/ "./glo/modules/ast/lib/AST/VariableDeclarationAST.js":
/*!***********************************************************!*\
  !*** ./glo/modules/ast/lib/AST/VariableDeclarationAST.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const AST_1 = __importDefault(__webpack_require__(/*! ./AST */ "./glo/modules/ast/lib/AST/AST.js"));
class VariableDeclarationAST extends AST_1.default {
    constructor(variable, type) {
        super();
        this.variable = variable;
        this.addChild(variable, type);
        this.type = type;
    }
}
exports.default = VariableDeclarationAST;
//# sourceMappingURL=VariableDeclarationAST.js.map

/***/ }),

/***/ "./glo/modules/ast/lib/AST/WhileAST.js":
/*!*********************************************!*\
  !*** ./glo/modules/ast/lib/AST/WhileAST.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const AST_1 = __importDefault(__webpack_require__(/*! ./AST */ "./glo/modules/ast/lib/AST/AST.js"));
class WhileAST extends AST_1.default {
    constructor(condition, statementList) {
        super();
        this.condition = condition;
        this.statementList = statementList;
        this.addChild(condition, ...statementList);
    }
}
exports.default = WhileAST;
//# sourceMappingURL=WhileAST.js.map

/***/ }),

/***/ "./glo/modules/ast/lib/AST/WriteAST.js":
/*!*********************************************!*\
  !*** ./glo/modules/ast/lib/AST/WriteAST.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const AST_1 = __importDefault(__webpack_require__(/*! ./AST */ "./glo/modules/ast/lib/AST/AST.js"));
class WriteAST extends AST_1.default {
    constructor(args) {
        super();
        this.args = args;
        this.addChild(...args);
    }
}
exports.default = WriteAST;
//# sourceMappingURL=WriteAST.js.map

/***/ }),

/***/ "./glo/modules/ast/lib/AST/index.js":
/*!******************************************!*\
  !*** ./glo/modules/ast/lib/AST/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConstantDeclarationAST = exports.ExponentiationAST = exports.ArrayAST = exports.ProcedureCallAST = exports.FunctionCallAST = exports.WriteAST = exports.ReadAST = exports.FunctionDeclarationAST = exports.ArrayAccessAST = exports.SubrangeAST = exports.RepeatAST = exports.WhileAST = exports.ForAST = exports.NotAST = exports.OrAST = exports.AndAST = exports.StringConstantAST = exports.StringAST = exports.IfAST = exports.LessEqualsAST = exports.GreaterEqualsAST = exports.LessThanAST = exports.GreaterThanAST = exports.NotEqualsAST = exports.EqualsAST = exports.BooleanAST = exports.FalseConstantAST = exports.TrueConstantAST = exports.ModAST = exports.ConstantAST = exports.RealConstantAST = exports.IntegerConstantAST = exports.ProcedureDeclarationAST = exports.UnaryPlusAST = exports.UnaryMinusAST = exports.AssignmentAST = exports.RealDivisionAST = exports.IntegerDivisionAST = exports.MultiplicationAST = exports.MinusAST = exports.PlusAST = exports.ProgramAST = exports.TypeAST = exports.VariableDeclarationAST = exports.RealAST = exports.VariableAST = exports.UnaryAST = exports.IntegerAST = exports.EmptyAST = exports.BinaryAST = exports.AST = void 0;
const AST_1 = __importDefault(__webpack_require__(/*! ./AST */ "./glo/modules/ast/lib/AST/AST.js"));
exports.AST = AST_1.default;
const BinaryAST_1 = __importDefault(__webpack_require__(/*! ./BinaryAST */ "./glo/modules/ast/lib/AST/BinaryAST.js"));
exports.BinaryAST = BinaryAST_1.default;
const EmptyAST_1 = __importDefault(__webpack_require__(/*! ./EmptyAST */ "./glo/modules/ast/lib/AST/EmptyAST.js"));
exports.EmptyAST = EmptyAST_1.default;
const IntegerAST_1 = __importDefault(__webpack_require__(/*! ./IntegerAST */ "./glo/modules/ast/lib/AST/IntegerAST.js"));
exports.IntegerAST = IntegerAST_1.default;
const UnaryAST_1 = __importDefault(__webpack_require__(/*! ./UnaryAST */ "./glo/modules/ast/lib/AST/UnaryAST.js"));
exports.UnaryAST = UnaryAST_1.default;
const VariableAST_1 = __importDefault(__webpack_require__(/*! ./VariableAST */ "./glo/modules/ast/lib/AST/VariableAST.js"));
exports.VariableAST = VariableAST_1.default;
const RealAST_1 = __importDefault(__webpack_require__(/*! ./RealAST */ "./glo/modules/ast/lib/AST/RealAST.js"));
exports.RealAST = RealAST_1.default;
const VariableDeclarationAST_1 = __importDefault(__webpack_require__(/*! ./VariableDeclarationAST */ "./glo/modules/ast/lib/AST/VariableDeclarationAST.js"));
exports.VariableDeclarationAST = VariableDeclarationAST_1.default;
const TypeAST_1 = __importDefault(__webpack_require__(/*! ./TypeAST */ "./glo/modules/ast/lib/AST/TypeAST.js"));
exports.TypeAST = TypeAST_1.default;
const ProgramAST_1 = __importDefault(__webpack_require__(/*! ./ProgramAST */ "./glo/modules/ast/lib/AST/ProgramAST.js"));
exports.ProgramAST = ProgramAST_1.default;
const PlusAST_1 = __importDefault(__webpack_require__(/*! ./PlusAST */ "./glo/modules/ast/lib/AST/PlusAST.js"));
exports.PlusAST = PlusAST_1.default;
const MinusAST_1 = __importDefault(__webpack_require__(/*! ./MinusAST */ "./glo/modules/ast/lib/AST/MinusAST.js"));
exports.MinusAST = MinusAST_1.default;
const MultiplicationAST_1 = __importDefault(__webpack_require__(/*! ./MultiplicationAST */ "./glo/modules/ast/lib/AST/MultiplicationAST.js"));
exports.MultiplicationAST = MultiplicationAST_1.default;
const IntegerDivisionAST_1 = __importDefault(__webpack_require__(/*! ./IntegerDivisionAST */ "./glo/modules/ast/lib/AST/IntegerDivisionAST.js"));
exports.IntegerDivisionAST = IntegerDivisionAST_1.default;
const RealDivisionAST_1 = __importDefault(__webpack_require__(/*! ./RealDivisionAST */ "./glo/modules/ast/lib/AST/RealDivisionAST.js"));
exports.RealDivisionAST = RealDivisionAST_1.default;
const AssignmentAST_1 = __importDefault(__webpack_require__(/*! ./AssignmentAST */ "./glo/modules/ast/lib/AST/AssignmentAST.js"));
exports.AssignmentAST = AssignmentAST_1.default;
const UnaryMinusAST_1 = __importDefault(__webpack_require__(/*! ./UnaryMinusAST */ "./glo/modules/ast/lib/AST/UnaryMinusAST.js"));
exports.UnaryMinusAST = UnaryMinusAST_1.default;
const UnaryPlusAST_1 = __importDefault(__webpack_require__(/*! ./UnaryPlusAST */ "./glo/modules/ast/lib/AST/UnaryPlusAST.js"));
exports.UnaryPlusAST = UnaryPlusAST_1.default;
const ProcedureDeclarationAST_1 = __importDefault(__webpack_require__(/*! ./ProcedureDeclarationAST */ "./glo/modules/ast/lib/AST/ProcedureDeclarationAST.js"));
exports.ProcedureDeclarationAST = ProcedureDeclarationAST_1.default;
const IntegerConstantAST_1 = __importDefault(__webpack_require__(/*! ./IntegerConstantAST */ "./glo/modules/ast/lib/AST/IntegerConstantAST.js"));
exports.IntegerConstantAST = IntegerConstantAST_1.default;
const RealConstantAST_1 = __importDefault(__webpack_require__(/*! ./RealConstantAST */ "./glo/modules/ast/lib/AST/RealConstantAST.js"));
exports.RealConstantAST = RealConstantAST_1.default;
const ConstantAST_1 = __importDefault(__webpack_require__(/*! ./ConstantAST */ "./glo/modules/ast/lib/AST/ConstantAST.js"));
exports.ConstantAST = ConstantAST_1.default;
const ModAST_1 = __importDefault(__webpack_require__(/*! ./ModAST */ "./glo/modules/ast/lib/AST/ModAST.js"));
exports.ModAST = ModAST_1.default;
const TrueConstantAST_1 = __importDefault(__webpack_require__(/*! ./TrueConstantAST */ "./glo/modules/ast/lib/AST/TrueConstantAST.js"));
exports.TrueConstantAST = TrueConstantAST_1.default;
const FalseConstantAST_1 = __importDefault(__webpack_require__(/*! ./FalseConstantAST */ "./glo/modules/ast/lib/AST/FalseConstantAST.js"));
exports.FalseConstantAST = FalseConstantAST_1.default;
const BooleanAST_1 = __importDefault(__webpack_require__(/*! ./BooleanAST */ "./glo/modules/ast/lib/AST/BooleanAST.js"));
exports.BooleanAST = BooleanAST_1.default;
const EqualsAST_1 = __importDefault(__webpack_require__(/*! ./EqualsAST */ "./glo/modules/ast/lib/AST/EqualsAST.js"));
exports.EqualsAST = EqualsAST_1.default;
const NotEqualsAST_1 = __importDefault(__webpack_require__(/*! ./NotEqualsAST */ "./glo/modules/ast/lib/AST/NotEqualsAST.js"));
exports.NotEqualsAST = NotEqualsAST_1.default;
const GreaterThanAST_1 = __importDefault(__webpack_require__(/*! ./GreaterThanAST */ "./glo/modules/ast/lib/AST/GreaterThanAST.js"));
exports.GreaterThanAST = GreaterThanAST_1.default;
const LessThanAST_1 = __importDefault(__webpack_require__(/*! ./LessThanAST */ "./glo/modules/ast/lib/AST/LessThanAST.js"));
exports.LessThanAST = LessThanAST_1.default;
const GreaterEqualsAST_1 = __importDefault(__webpack_require__(/*! ./GreaterEqualsAST */ "./glo/modules/ast/lib/AST/GreaterEqualsAST.js"));
exports.GreaterEqualsAST = GreaterEqualsAST_1.default;
const LessEqualsAST_1 = __importDefault(__webpack_require__(/*! ./LessEqualsAST */ "./glo/modules/ast/lib/AST/LessEqualsAST.js"));
exports.LessEqualsAST = LessEqualsAST_1.default;
const IfAST_1 = __importDefault(__webpack_require__(/*! ./IfAST */ "./glo/modules/ast/lib/AST/IfAST.js"));
exports.IfAST = IfAST_1.default;
const StringAST_1 = __importDefault(__webpack_require__(/*! ./StringAST */ "./glo/modules/ast/lib/AST/StringAST.js"));
exports.StringAST = StringAST_1.default;
const StringConstantAST_1 = __importDefault(__webpack_require__(/*! ./StringConstantAST */ "./glo/modules/ast/lib/AST/StringConstantAST.js"));
exports.StringConstantAST = StringConstantAST_1.default;
const AndAST_1 = __importDefault(__webpack_require__(/*! ./AndAST */ "./glo/modules/ast/lib/AST/AndAST.js"));
exports.AndAST = AndAST_1.default;
const OrAST_1 = __importDefault(__webpack_require__(/*! ./OrAST */ "./glo/modules/ast/lib/AST/OrAST.js"));
exports.OrAST = OrAST_1.default;
const NotAST_1 = __importDefault(__webpack_require__(/*! ./NotAST */ "./glo/modules/ast/lib/AST/NotAST.js"));
exports.NotAST = NotAST_1.default;
const FunctionCallAST_1 = __importDefault(__webpack_require__(/*! ./FunctionCallAST */ "./glo/modules/ast/lib/AST/FunctionCallAST.js"));
exports.FunctionCallAST = FunctionCallAST_1.default;
const ForAST_1 = __importDefault(__webpack_require__(/*! ./ForAST */ "./glo/modules/ast/lib/AST/ForAST.js"));
exports.ForAST = ForAST_1.default;
const WhileAST_1 = __importDefault(__webpack_require__(/*! ./WhileAST */ "./glo/modules/ast/lib/AST/WhileAST.js"));
exports.WhileAST = WhileAST_1.default;
const RepeatAST_1 = __importDefault(__webpack_require__(/*! ./RepeatAST */ "./glo/modules/ast/lib/AST/RepeatAST.js"));
exports.RepeatAST = RepeatAST_1.default;
const SubrangeAST_1 = __importDefault(__webpack_require__(/*! ./SubrangeAST */ "./glo/modules/ast/lib/AST/SubrangeAST.js"));
exports.SubrangeAST = SubrangeAST_1.default;
const ArrayAccessAST_1 = __importDefault(__webpack_require__(/*! ./ArrayAccessAST */ "./glo/modules/ast/lib/AST/ArrayAccessAST.js"));
exports.ArrayAccessAST = ArrayAccessAST_1.default;
const FunctionDeclarationAST_1 = __importDefault(__webpack_require__(/*! ./FunctionDeclarationAST */ "./glo/modules/ast/lib/AST/FunctionDeclarationAST.js"));
exports.FunctionDeclarationAST = FunctionDeclarationAST_1.default;
const ReadAST_1 = __importDefault(__webpack_require__(/*! ./ReadAST */ "./glo/modules/ast/lib/AST/ReadAST.js"));
exports.ReadAST = ReadAST_1.default;
const WriteAST_1 = __importDefault(__webpack_require__(/*! ./WriteAST */ "./glo/modules/ast/lib/AST/WriteAST.js"));
exports.WriteAST = WriteAST_1.default;
const ProcedureCallAST_1 = __importDefault(__webpack_require__(/*! ./ProcedureCallAST */ "./glo/modules/ast/lib/AST/ProcedureCallAST.js"));
exports.ProcedureCallAST = ProcedureCallAST_1.default;
const ArrayAST_1 = __importDefault(__webpack_require__(/*! ./ArrayAST */ "./glo/modules/ast/lib/AST/ArrayAST.js"));
exports.ArrayAST = ArrayAST_1.default;
const ExponentiationAST_1 = __importDefault(__webpack_require__(/*! ./ExponentiationAST */ "./glo/modules/ast/lib/AST/ExponentiationAST.js"));
exports.ExponentiationAST = ExponentiationAST_1.default;
const ConstantDeclarationAST_1 = __importDefault(__webpack_require__(/*! ./ConstantDeclarationAST */ "./glo/modules/ast/lib/AST/ConstantDeclarationAST.js"));
exports.ConstantDeclarationAST = ConstantDeclarationAST_1.default;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./glo/modules/ast/lib/ASTVisitor.js":
/*!*******************************************!*\
  !*** ./glo/modules/ast/lib/ASTVisitor.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const AST = __importStar(__webpack_require__(/*! ./AST */ "./glo/modules/ast/lib/AST.js"));
const error_1 = __importDefault(__webpack_require__(/*! @glossa-glo/error */ "./glo/modules/error/lib/GLOError.js"));
class ASTVisitor {
    visit(node) {
        if (node instanceof AST.AssignmentAST) {
            return this.visitAssignment(node);
        }
        else if (node instanceof AST.BooleanAST) {
            return this.visitBoolean(node);
        }
        else if (node instanceof AST.EmptyAST) {
            return this.visitEmpty(node);
        }
        else if (node instanceof AST.IntegerAST) {
            return this.visitInteger(node);
        }
        else if (node instanceof AST.IntegerConstantAST) {
            return this.visitIntegerConstant(node);
        }
        else if (node instanceof AST.IntegerDivisionAST) {
            return this.visitIntegerDivision(node);
        }
        else if (node instanceof AST.MinusAST) {
            return this.visitMinus(node);
        }
        else if (node instanceof AST.MultiplicationAST) {
            return this.visitMultiplication(node);
        }
        else if (node instanceof AST.PlusAST) {
            return this.visitPlus(node);
        }
        else if (node instanceof AST.ProcedureDeclarationAST) {
            return this.visitProcedureDeclaration(node);
        }
        else if (node instanceof AST.ProgramAST) {
            return this.visitProgram(node);
        }
        else if (node instanceof AST.RealAST) {
            return this.visitReal(node);
        }
        else if (node instanceof AST.RealConstantAST) {
            return this.visitRealConstant(node);
        }
        else if (node instanceof AST.RealDivisionAST) {
            return this.visitRealDivision(node);
        }
        else if (node instanceof AST.UnaryMinusAST) {
            return this.visitUnaryMinus(node);
        }
        else if (node instanceof AST.UnaryPlusAST) {
            return this.visitUnaryPlus(node);
        }
        else if (node instanceof AST.VariableAST) {
            return this.visitVariable(node);
        }
        else if (node instanceof AST.VariableDeclarationAST) {
            return this.visitVariableDeclaration(node);
        }
        else if (node instanceof AST.ModAST) {
            return this.visitMod(node);
        }
        else if (node instanceof AST.TrueConstantAST) {
            return this.visitTrue(node);
        }
        else if (node instanceof AST.FalseConstantAST) {
            return this.visitFalse(node);
        }
        else if (node instanceof AST.EqualsAST) {
            return this.visitEquals(node);
        }
        else if (node instanceof AST.NotEqualsAST) {
            return this.visitNotEquals(node);
        }
        else if (node instanceof AST.GreaterThanAST) {
            return this.visitGreaterThan(node);
        }
        else if (node instanceof AST.LessThanAST) {
            return this.visitLessThan(node);
        }
        else if (node instanceof AST.GreaterEqualsAST) {
            return this.visitGreaterEquals(node);
        }
        else if (node instanceof AST.LessEqualsAST) {
            return this.visitLessEquals(node);
        }
        else if (node instanceof AST.IfAST) {
            return this.visitIf(node);
        }
        else if (node instanceof AST.StringAST) {
            return this.visitString(node);
        }
        else if (node instanceof AST.StringConstantAST) {
            return this.visitStringConstant(node);
        }
        else if (node instanceof AST.AndAST) {
            return this.visitAnd(node);
        }
        else if (node instanceof AST.OrAST) {
            return this.visitOr(node);
        }
        else if (node instanceof AST.NotAST) {
            return this.visitNot(node);
        }
        else if (node instanceof AST.FunctionCallAST) {
            return this.visitFunctionCall(node);
        }
        else if (node instanceof AST.ProcedureCallAST) {
            return this.visitProcedureCall(node);
        }
        else if (node instanceof AST.ForAST) {
            return this.visitFor(node);
        }
        else if (node instanceof AST.WhileAST) {
            return this.visitWhile(node);
        }
        else if (node instanceof AST.RepeatAST) {
            return this.visitRepeat(node);
        }
        else if (node instanceof AST.SubrangeAST) {
            return this.visitSubrange(node);
        }
        else if (node instanceof AST.ArrayAST) {
            return this.visitArray(node);
        }
        else if (node instanceof AST.ArrayAccessAST) {
            return this.visitArrayAccess(node);
        }
        else if (node instanceof AST.FunctionDeclarationAST) {
            return this.visitFunctionDeclaration(node);
        }
        else if (node instanceof AST.ReadAST) {
            return this.visitRead(node);
        }
        else if (node instanceof AST.WriteAST) {
            return this.visitWrite(node);
        }
        else if (node instanceof AST.ExponentiationAST) {
            return this.visitExponentiation(node);
        }
        else if (node instanceof AST.ConstantDeclarationAST) {
            return this.visitConstantDeclaration(node);
        }
        else {
            throw new error_1.default(node, `Program error: Unknown AST node type on visitor ${node.constructor.name}`);
        }
    }
}
exports.default = ASTVisitor;
//# sourceMappingURL=ASTVisitor.js.map

/***/ }),

/***/ "./glo/modules/case-insensitive-map/lib/CaseInsensitiveMap.js":
/*!********************************************************************!*\
  !*** ./glo/modules/case-insensitive-map/lib/CaseInsensitiveMap.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.toUpperCaseNormalizedGreek = void 0;
function toUpperCaseNormalizedGreek(s) {
    return s
        .toUpperCase()
        .replace(/Ά/g, 'Α')
        .replace(/Έ/g, 'Ε')
        .replace(/Ή/g, 'Η')
        .replace(/Ί|Ϊ|Ϊ́/g, 'Ι')
        .replace(/Ό/g, 'Ο')
        .replace(/Ύ|Ϋ|Ϋ́/g, 'Υ')
        .replace(/Ώ/g, 'Ω');
}
exports.toUpperCaseNormalizedGreek = toUpperCaseNormalizedGreek;
// If entries are provided on the constructor, originalKey
// is initialized on the first set call
class CaseInsensitiveMap extends Map {
    constructor(entries) {
        super(entries);
        if (!this.originalKey) {
            this.originalKey = new Map();
        }
    }
    set(key, value) {
        if (typeof key === 'string') {
            const originalKey = key;
            key = toUpperCaseNormalizedGreek(key);
            if (!this.originalKey) {
                this.originalKey = new Map();
            }
            this.originalKey.set(key, originalKey);
        }
        return Map.prototype.set.call(this, key, value);
    }
    get(key) {
        if (typeof key === 'string') {
            key = toUpperCaseNormalizedGreek(key);
        }
        return Map.prototype.get.call(this, key);
    }
    delete(key) {
        if (typeof key === 'string') {
            this.originalKey.delete(key);
            key = toUpperCaseNormalizedGreek(key);
        }
        return Map.prototype.delete.call(this, key);
    }
    has(key) {
        if (typeof key === 'string') {
            key = toUpperCaseNormalizedGreek(key);
        }
        return Map.prototype.has.call(this, key);
    }
}
exports.default = CaseInsensitiveMap;
//# sourceMappingURL=CaseInsensitiveMap.js.map

/***/ }),

/***/ "./glo/modules/data-types/lib/GLOArray.js":
/*!************************************************!*\
  !*** ./glo/modules/data-types/lib/GLOArray.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.isGLOArray = void 0;
const _1 = __webpack_require__(/*! . */ "./glo/modules/data-types/lib/index.js");
function isGLOArray(dataType) {
    return dataType.isArray;
}
exports.isGLOArray = isGLOArray;
function createGLOArray(componentType, dimensionLength) {
    var _a;
    return _a = class GLOArray extends _1.GLODataType {
            constructor() {
                super();
                this.isArray = true;
                this.dimensionLength = dimensionLength;
                this.value = {};
            }
            // Cannot use name print as it is used
            // To determine whether the data type
            // can be written with the write command
            // TODO: Make more efficient, allow n-dimensional arrays
            arrayPrint() {
                if (this.dimensionLength.length === 1) {
                    const arr = new Array(this.dimensionLength[0] + 1);
                    for (let i = 1; i <= this.dimensionLength[0]; i++) {
                        if (this.value[i] instanceof _1.GLODataType) {
                            arr[i] = this.value[i].print();
                        }
                    }
                    return arr;
                }
                else if (this.dimensionLength.length === 2) {
                    const arr = new Array(this.dimensionLength[0] + 1);
                    for (let i = 1; i <= this.dimensionLength[0]; i++) {
                        arr[i] = new Array(this.dimensionLength[1] + 1);
                        for (let j = 1; j <= this.dimensionLength[1]; j++) {
                            if (this.value[i] && this.value[i][j] instanceof _1.GLODataType) {
                                arr[i][j] = this.value[i][j].print();
                            }
                        }
                    }
                    return arr;
                }
                else {
                    return [];
                }
            }
            print() {
                throw new Error('Program error: Cannot print array');
            }
            changeValue(keys, value) {
                let current = this.value;
                for (let i = 0; i < keys.length - 1; i++) {
                    const key = keys[i];
                    const serialized = key.serialize();
                    if (!current.hasOwnProperty(serialized)) {
                        current[serialized] = {};
                    }
                    current = current[serialized];
                }
                current[keys[keys.length - 1].serialize()] = value;
            }
            getValue(keys) {
                let current = this.value;
                for (let i = 0; i < keys.length - 1; i++) {
                    const key = keys[i];
                    const serialized = key.serialize();
                    if (!current.hasOwnProperty(serialized)) {
                        return undefined;
                    }
                    current = current[serialized];
                }
                return current[keys[keys.length - 1].serialize()];
            }
        },
        _a.isArrayType = true,
        _a.componentType = componentType,
        _a.dimensionLength = dimensionLength,
        _a.defaultValue = new _a(),
        _a;
}
exports.default = createGLOArray;
//# sourceMappingURL=GLOArray.js.map

/***/ }),

/***/ "./glo/modules/data-types/lib/GLOBoolean.js":
/*!**************************************************!*\
  !*** ./glo/modules/data-types/lib/GLOBoolean.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const GLODataType_1 = __importDefault(__webpack_require__(/*! ./GLODataType */ "./glo/modules/data-types/lib/GLODataType.js"));
class GLOBoolean extends GLODataType_1.default {
    constructor(value) {
        super();
        this.value = value;
        if (value === true) {
            return GLOBoolean.true;
        }
        else {
            return GLOBoolean.false;
        }
    }
    equals(right) {
        return this.value == right.value;
    }
    notEquals(right) {
        return this.value != right.value;
    }
    print() {
        return this.value ? 'ΑΛΗΘΗΣ' : 'ΨΕΥΔΗΣ';
    }
}
exports.default = GLOBoolean;
GLOBoolean.true = new GLOBoolean(true);
GLOBoolean.false = new GLOBoolean(false);
//# sourceMappingURL=GLOBoolean.js.map

/***/ }),

/***/ "./glo/modules/data-types/lib/GLODataType.js":
/*!***************************************************!*\
  !*** ./glo/modules/data-types/lib/GLODataType.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class GLODataType {
    constructor(..._) {
        this.isArray = false;
    }
}
GLODataType.isArrayType = false;
exports.default = GLODataType;
//# sourceMappingURL=GLODataType.js.map

/***/ }),

/***/ "./glo/modules/data-types/lib/GLOFunction.js":
/*!***************************************************!*\
  !*** ./glo/modules/data-types/lib/GLOFunction.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const _1 = __webpack_require__(/*! . */ "./glo/modules/data-types/lib/index.js");
class GLOFunction extends _1.GLODataType {
    constructor(call) {
        super();
        this.call = call;
        this.returnValue = null;
    }
    print() {
        throw new Error('Program error: Cannot print function');
    }
}
exports.default = GLOFunction;
//# sourceMappingURL=GLOFunction.js.map

/***/ }),

/***/ "./glo/modules/data-types/lib/GLOInteger.js":
/*!**************************************************!*\
  !*** ./glo/modules/data-types/lib/GLOInteger.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const GLODataType_1 = __importDefault(__webpack_require__(/*! ./GLODataType */ "./glo/modules/data-types/lib/GLODataType.js"));
const GLOReal_1 = __importDefault(__webpack_require__(/*! ./GLOReal */ "./glo/modules/data-types/lib/GLOReal.js"));
class GLOInteger extends GLODataType_1.default {
    constructor(value) {
        super();
        this.value = value;
        this.promote = new Map();
        this.promote.set(GLOReal_1.default, () => {
            return new GLOReal_1.default(this.value);
        });
    }
    serialize() {
        return this.value;
    }
    print() {
        return this.value.toString();
    }
    add(right) {
        return new GLOInteger(this.value + right.value);
    }
    subtract(right) {
        return new GLOInteger(this.value - right.value);
    }
    multiply(right) {
        return new GLOInteger(this.value * right.value);
    }
    divide(right) {
        return new GLOReal_1.default(this.value / right.value);
    }
    integerDivide(right) {
        return new GLOInteger(Math.trunc(this.value / right.value));
    }
    mod(right) {
        return new GLOInteger(this.value % right.value);
    }
    exponent(right) {
        return new GLOInteger(Math.pow(this.value, right.value));
    }
    equals(right) {
        return this.value == right.value;
    }
    notEquals(right) {
        return this.value != right.value;
    }
    lessThan(right) {
        return this.value < right.value;
    }
    greaterThan(right) {
        return this.value > right.value;
    }
    lessEqualsThan(right) {
        return this.value <= right.value;
    }
    greaterEqualsThan(right) {
        return this.value >= right.value;
    }
    unaryPlus() {
        return new GLOInteger(this.value);
    }
    unaryMinus() {
        return new GLOInteger(-this.value);
    }
}
exports.default = GLOInteger;
GLOInteger.promotable = [GLOReal_1.default];
//# sourceMappingURL=GLOInteger.js.map

/***/ }),

/***/ "./glo/modules/data-types/lib/GLOMultitype.js":
/*!****************************************************!*\
  !*** ./glo/modules/data-types/lib/GLOMultitype.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const GLODataType_1 = __importDefault(__webpack_require__(/*! ./GLODataType */ "./glo/modules/data-types/lib/GLODataType.js"));
function createGLOMultitype(...types) {
    var _a;
    return _a = class GLOMultitype extends GLODataType_1.default {
            print() {
                throw new Error('Program error: Cannot print multitype');
            }
        },
        _a.multitype = types,
        _a;
}
exports.default = createGLOMultitype;
//# sourceMappingURL=GLOMultitype.js.map

/***/ }),

/***/ "./glo/modules/data-types/lib/GLOProcedure.js":
/*!****************************************************!*\
  !*** ./glo/modules/data-types/lib/GLOProcedure.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const _1 = __webpack_require__(/*! . */ "./glo/modules/data-types/lib/index.js");
class GLOProcedure extends _1.GLODataType {
    constructor(call) {
        super();
        this.call = call;
    }
    print() {
        throw new Error('Program error: Cannot print procedure');
    }
}
exports.default = GLOProcedure;
//# sourceMappingURL=GLOProcedure.js.map

/***/ }),

/***/ "./glo/modules/data-types/lib/GLOReal.js":
/*!***********************************************!*\
  !*** ./glo/modules/data-types/lib/GLOReal.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const GLODataType_1 = __importDefault(__webpack_require__(/*! ./GLODataType */ "./glo/modules/data-types/lib/GLODataType.js"));
class GLOReal extends GLODataType_1.default {
    constructor(value) {
        super();
        // Hack to avoid toFixed rounding: Add one more digit and remove after string conversion
        this.internalValue = value.toFixed(GLOReal.PRECISION + 1).slice(0, -1);
    }
    get value() {
        return parseFloat(this.internalValue);
    }
    print() {
        return this.internalValue;
    }
    add(right) {
        return new GLOReal(this.value + right.value);
    }
    subtract(right) {
        return new GLOReal(this.value - right.value);
    }
    multiply(right) {
        return new GLOReal(this.value * right.value);
    }
    divide(right) {
        return new GLOReal(this.value / right.value);
    }
    exponent(right) {
        return new GLOReal(Math.pow(this.value, right.value));
    }
    equals(right) {
        return this.value == right.value;
    }
    notEquals(right) {
        return this.value != right.value;
    }
    lessThan(right) {
        return this.value < right.value;
    }
    greaterThan(right) {
        return this.value > right.value;
    }
    lessEqualsThan(right) {
        return this.value <= right.value;
    }
    greaterEqualsThan(right) {
        return this.value >= right.value;
    }
    unaryPlus() {
        return new GLOReal(this.value);
    }
    unaryMinus() {
        return new GLOReal(-this.value);
    }
}
exports.default = GLOReal;
GLOReal.PRECISION = 2;
//# sourceMappingURL=GLOReal.js.map

/***/ }),

/***/ "./glo/modules/data-types/lib/GLOString.js":
/*!*************************************************!*\
  !*** ./glo/modules/data-types/lib/GLOString.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const _1 = __webpack_require__(/*! . */ "./glo/modules/data-types/lib/index.js");
class GLOString extends _1.GLODataType {
    constructor(value) {
        super();
        this.value = value;
    }
    print() {
        return this.value;
    }
    lessThan(right) {
        return this.value < right.value;
    }
    greaterThan(right) {
        return this.value > right.value;
    }
    lessEqualsThan(right) {
        return this.value <= right.value;
    }
    greaterEqualsThan(right) {
        return this.value >= right.value;
    }
    equals(right) {
        return this.value == right.value;
    }
    notEquals(right) {
        return this.value != right.value;
    }
}
exports.default = GLOString;
//# sourceMappingURL=GLOString.js.map

/***/ }),

/***/ "./glo/modules/data-types/lib/GLOSubrange.js":
/*!***************************************************!*\
  !*** ./glo/modules/data-types/lib/GLOSubrange.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const _1 = __webpack_require__(/*! . */ "./glo/modules/data-types/lib/index.js");
class GLOSubrange extends _1.GLODataType {
    constructor(left, right) {
        super();
        this.left = left;
        this.right = right;
    }
    print() {
        throw new Error('Program error: Cannot print subrange');
    }
    runtimeValidation(value) {
        return (this.left.lessEqualsThan(value) && this.right.greaterEqualsThan(value));
    }
}
exports.default = GLOSubrange;
//# sourceMappingURL=GLOSubrange.js.map

/***/ }),

/***/ "./glo/modules/data-types/lib/GLOType.js":
/*!***********************************************!*\
  !*** ./glo/modules/data-types/lib/GLOType.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const _1 = __webpack_require__(/*! . */ "./glo/modules/data-types/lib/index.js");
class GLOType extends _1.GLODataType {
}
exports.default = GLOType;
//# sourceMappingURL=GLOType.js.map

/***/ }),

/***/ "./glo/modules/data-types/lib/GLOVoid.js":
/*!***********************************************!*\
  !*** ./glo/modules/data-types/lib/GLOVoid.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const _1 = __webpack_require__(/*! . */ "./glo/modules/data-types/lib/index.js");
class GLOVoid extends _1.GLODataType {
    print() {
        throw new Error('Program error: Cannot print void');
    }
}
exports.default = GLOVoid;
//# sourceMappingURL=GLOVoid.js.map

/***/ }),

/***/ "./glo/modules/data-types/lib/assertTypeEquality.js":
/*!**********************************************************!*\
  !*** ./glo/modules/data-types/lib/assertTypeEquality.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const error_1 = __importStar(__webpack_require__(/*! @glossa-glo/error */ "./glo/modules/error/lib/GLOError.js"));
const _1 = __webpack_require__(/*! . */ "./glo/modules/data-types/lib/index.js");
function compareArrays(arr1, arr2) {
    return arr1.length === arr2.length && arr1.every((v, i) => v === arr2[i]);
}
function assertTypeEquality({ node, left, right, allowPromoteLeft = true, allowPromoteRight = true, message, }) {
    const leftPrint = _1.printType(left);
    const rightPrint = _1.printType(right);
    let promoteLeft = null;
    let promoteRight = null;
    if (left !== right) {
        if (allowPromoteLeft &&
            left.promotable &&
            left.promotable.includes(right)) {
            promoteLeft = left = right;
        }
        else if (allowPromoteRight &&
            right.promotable &&
            right.promotable.includes(left)) {
            promoteRight = right = left;
        }
        else if (allowPromoteLeft &&
            allowPromoteRight &&
            left.promotable &&
            right.promotable) {
            for (const sharedPromotableCandidate of left.promotable) {
                if (right.promotable.includes(sharedPromotableCandidate)) {
                    promoteLeft = promoteRight = left = right = sharedPromotableCandidate;
                }
            }
        }
    }
    if (left.multitype && left.multitype.includes(right)) {
        left = right;
    }
    else if (right.multitype && right.multitype.includes(left)) {
        right = left;
    }
    else if (left.multitype && right.multitype) {
        for (const sharedMultitypeCandidate of left.multitype) {
            if (right.multitype.includes(sharedMultitypeCandidate)) {
                left = right = sharedMultitypeCandidate;
            }
        }
    }
    const errorMessage = message
        ? message
            .replace(/LEFT_TYPE/g, leftPrint)
            .replace(/RIGHT_TYPE/g, rightPrint)
        : `Περίμενα οι τελεστέοι να είναι του ίδιου τύπου, αλλά έλαβα μη συμβατούς τύπους ${leftPrint} και ${rightPrint}`;
    if (left.isArrayType && right.isArrayType) {
        if (left.componentType === right.componentType &&
            compareArrays(left.dimensionLength, right.dimensionLength)) {
            return {
                promoteLeft,
                promoteRight,
            };
        }
        else {
            throw new error_1.default(node, errorMessage);
        }
    }
    error_1.assertEquality(node, left, right, errorMessage);
    return {
        promoteLeft,
        promoteRight,
    };
}
exports.default = assertTypeEquality;
//# sourceMappingURL=assertTypeEquality.js.map

/***/ }),

/***/ "./glo/modules/data-types/lib/canBeUsedInIO.js":
/*!*****************************************************!*\
  !*** ./glo/modules/data-types/lib/canBeUsedInIO.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.canBeWritten = exports.canBeRead = void 0;
const _1 = __webpack_require__(/*! . */ "./glo/modules/data-types/lib/index.js");
function canBeRead(type) {
    if (type === _1.GLOInteger || type === _1.GLOReal || type === _1.GLOString) {
        return true;
    }
    else {
        return false;
    }
}
exports.canBeRead = canBeRead;
function canBeWritten(type) {
    if (type === _1.GLOBoolean ||
        type === _1.GLOInteger ||
        type === _1.GLOReal ||
        type === _1.GLOString) {
        return true;
    }
    else {
        return false;
    }
}
exports.canBeWritten = canBeWritten;
//# sourceMappingURL=canBeUsedInIO.js.map

/***/ }),

/***/ "./glo/modules/data-types/lib/index.js":
/*!*********************************************!*\
  !*** ./glo/modules/data-types/lib/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.assertTypeEquality = exports.canBeWritten = exports.canBeRead = exports.GLOSubrange = exports.GLOFunction = exports.createGLOMultitype = exports.isGLOArray = exports.createGLOArray = exports.printType = exports.createGLOSubrange = exports.GLOProcedure = exports.GLOString = exports.GLOBoolean = exports.GLOType = exports.GLOVoid = exports.GLODataType = exports.GLOReal = exports.GLOInteger = void 0;
const GLOInteger_1 = __importDefault(__webpack_require__(/*! ./GLOInteger */ "./glo/modules/data-types/lib/GLOInteger.js"));
exports.GLOInteger = GLOInteger_1.default;
const GLOReal_1 = __importDefault(__webpack_require__(/*! ./GLOReal */ "./glo/modules/data-types/lib/GLOReal.js"));
exports.GLOReal = GLOReal_1.default;
const GLODataType_1 = __importDefault(__webpack_require__(/*! ./GLODataType */ "./glo/modules/data-types/lib/GLODataType.js"));
exports.GLODataType = GLODataType_1.default;
const GLOVoid_1 = __importDefault(__webpack_require__(/*! ./GLOVoid */ "./glo/modules/data-types/lib/GLOVoid.js"));
exports.GLOVoid = GLOVoid_1.default;
const GLOType_1 = __importDefault(__webpack_require__(/*! ./GLOType */ "./glo/modules/data-types/lib/GLOType.js"));
exports.GLOType = GLOType_1.default;
const GLOBoolean_1 = __importDefault(__webpack_require__(/*! ./GLOBoolean */ "./glo/modules/data-types/lib/GLOBoolean.js"));
exports.GLOBoolean = GLOBoolean_1.default;
const GLOString_1 = __importDefault(__webpack_require__(/*! ./GLOString */ "./glo/modules/data-types/lib/GLOString.js"));
exports.GLOString = GLOString_1.default;
const GLOProcedure_1 = __importDefault(__webpack_require__(/*! ./GLOProcedure */ "./glo/modules/data-types/lib/GLOProcedure.js"));
exports.GLOProcedure = GLOProcedure_1.default;
const GLOSubrange_1 = __importDefault(__webpack_require__(/*! ./GLOSubrange */ "./glo/modules/data-types/lib/GLOSubrange.js"));
exports.createGLOSubrange = GLOSubrange_1.default;
const printType_1 = __importDefault(__webpack_require__(/*! ./printType */ "./glo/modules/data-types/lib/printType.js"));
exports.printType = printType_1.default;
const GLOArray_1 = __importStar(__webpack_require__(/*! ./GLOArray */ "./glo/modules/data-types/lib/GLOArray.js"));
exports.createGLOArray = GLOArray_1.default;
Object.defineProperty(exports, "isGLOArray", { enumerable: true, get: function () { return GLOArray_1.isGLOArray; } });
const GLOMultitype_1 = __importDefault(__webpack_require__(/*! ./GLOMultitype */ "./glo/modules/data-types/lib/GLOMultitype.js"));
exports.createGLOMultitype = GLOMultitype_1.default;
const GLOFunction_1 = __importDefault(__webpack_require__(/*! ./GLOFunction */ "./glo/modules/data-types/lib/GLOFunction.js"));
exports.GLOFunction = GLOFunction_1.default;
const GLOSubrange_2 = __importDefault(__webpack_require__(/*! ./GLOSubrange */ "./glo/modules/data-types/lib/GLOSubrange.js"));
exports.GLOSubrange = GLOSubrange_2.default;
const canBeUsedInIO_1 = __webpack_require__(/*! ./canBeUsedInIO */ "./glo/modules/data-types/lib/canBeUsedInIO.js");
Object.defineProperty(exports, "canBeRead", { enumerable: true, get: function () { return canBeUsedInIO_1.canBeRead; } });
Object.defineProperty(exports, "canBeWritten", { enumerable: true, get: function () { return canBeUsedInIO_1.canBeWritten; } });
const assertTypeEquality_1 = __importDefault(__webpack_require__(/*! ./assertTypeEquality */ "./glo/modules/data-types/lib/assertTypeEquality.js"));
exports.assertTypeEquality = assertTypeEquality_1.default;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./glo/modules/data-types/lib/printType.js":
/*!*************************************************!*\
  !*** ./glo/modules/data-types/lib/printType.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const _1 = __webpack_require__(/*! . */ "./glo/modules/data-types/lib/index.js");
function printType(type) {
    if (type && type.multitype)
        return type.multitype.map(printType).join(' ή ');
    else if (type && type.isArrayType)
        return `Πίνακας από ${printType(type.componentType)} ${type.dimensionLength.length} ${type.dimensionLength.length === 1 ? 'διάστασης' : 'διαστάσεων'}`;
    else if (type === _1.GLOBoolean)
        return 'Λογική';
    else if (type === _1.GLOString)
        return 'Χαρακτήρες';
    else if (type === _1.GLOInteger)
        return 'Ακέραια';
    else if (type === _1.GLOProcedure)
        return 'Διαδικασία';
    else if (type === _1.GLOFunction)
        return 'Συνάρτηση';
    else if (type === _1.GLOReal)
        return 'Πραγματική';
    else if (type === _1.GLOSubrange)
        return 'Εύρος';
    else if (type === _1.GLOVoid)
        return 'Κενό';
    else
        return `Άγνωστο`;
}
exports.default = printType;
//# sourceMappingURL=printType.js.map

/***/ }),

/***/ "./glo/modules/error/lib/GLOError.js":
/*!*******************************************!*\
  !*** ./glo/modules/error/lib/GLOError.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.assertEquality = exports.assert = exports.GLOErrorType = exports.DebugInfoProvider = void 0;
const deep_equal_1 = __importDefault(__webpack_require__(/*! deep-equal */ "./glo/modules/error/node_modules/deep-equal/index.js"));
class DebugInfoProvider {
    constructor() {
        this.start = {
            linePosition: -1,
            characterPosition: -1,
        };
        this.end = {
            linePosition: -1,
            characterPosition: -1,
        };
    }
    setPosition(line, character, type) {
        this[type].linePosition = line;
        this[type].characterPosition = character;
        return this;
    }
    inheritStartPositionFrom(positionProvider) {
        this.start.linePosition = positionProvider.linePosition;
        this.start.characterPosition = positionProvider.characterPosition;
        return this;
    }
    inheritEndPositionFrom(positionProvider) {
        this.end.linePosition = positionProvider.linePosition;
        this.end.characterPosition = positionProvider.characterPosition;
        return this;
    }
    inheritPositionFrom(fullPositionProvider) {
        this.start.linePosition = fullPositionProvider.start.linePosition;
        this.start.characterPosition = fullPositionProvider.start.characterPosition;
        this.end.linePosition = fullPositionProvider.end.linePosition;
        this.end.characterPosition = fullPositionProvider.end.characterPosition;
        return this;
    }
}
exports.DebugInfoProvider = DebugInfoProvider;
var GLOErrorType;
(function (GLOErrorType) {
    GLOErrorType["LexerError"] = "LexerError";
    GLOErrorType["ParserError"] = "ParserError";
})(GLOErrorType = exports.GLOErrorType || (exports.GLOErrorType = {}));
class GLOError extends DebugInfoProvider {
    constructor(debugInfoProvider, message) {
        super();
        this.debugInfoProvider = debugInfoProvider;
        this.message = message;
        this.start = debugInfoProvider.start;
        this.end = debugInfoProvider.end;
    }
}
exports.default = GLOError;
function assert(debugInfoProvider, cond, message) {
    if (!cond) {
        throw new GLOError(debugInfoProvider, message);
    }
}
exports.assert = assert;
function assertEquality(debugInfoProvider, obj1, obj2, message) {
    if (!deep_equal_1.default(obj1, obj2)) {
        throw new GLOError(debugInfoProvider, message);
    }
}
exports.assertEquality = assertEquality;
//# sourceMappingURL=GLOError.js.map

/***/ }),

/***/ "./glo/modules/error/node_modules/array-filter/index.js":
/*!**************************************************************!*\
  !*** ./glo/modules/error/node_modules/array-filter/index.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * Array#filter.
 *
 * @param {Array} arr
 * @param {Function} fn
 * @param {Object=} self
 * @return {Array}
 * @throw TypeError
 */

module.exports = function (arr, fn, self) {
  if (arr.filter) return arr.filter(fn, self);
  if (void 0 === arr || null === arr) throw new TypeError;
  if ('function' != typeof fn) throw new TypeError;
  var ret = [];
  for (var i = 0; i < arr.length; i++) {
    if (!hasOwn.call(arr, i)) continue;
    var val = arr[i];
    if (fn.call(self, val, i, arr)) ret.push(val);
  }
  return ret;
};

var hasOwn = Object.prototype.hasOwnProperty;


/***/ }),

/***/ "./glo/modules/error/node_modules/available-typed-arrays/index.js":
/*!************************************************************************!*\
  !*** ./glo/modules/error/node_modules/available-typed-arrays/index.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

var filter = __webpack_require__(/*! array-filter */ "./glo/modules/error/node_modules/array-filter/index.js");

module.exports = function availableTypedArrays() {
	return filter([
		'BigInt64Array',
		'BigUint64Array',
		'Float32Array',
		'Float64Array',
		'Int16Array',
		'Int32Array',
		'Int8Array',
		'Uint16Array',
		'Uint32Array',
		'Uint8Array',
		'Uint8ClampedArray'
	], function (typedArray) {
		return typeof global[typedArray] === 'function';
	});
};

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../webapp/node_modules/webpack/buildin/global.js */ "./glo/modules/webapp/node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./glo/modules/error/node_modules/call-bind/callBound.js":
/*!***************************************************************!*\
  !*** ./glo/modules/error/node_modules/call-bind/callBound.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var GetIntrinsic = __webpack_require__(/*! get-intrinsic */ "./glo/modules/error/node_modules/get-intrinsic/index.js");

var callBind = __webpack_require__(/*! ./ */ "./glo/modules/error/node_modules/call-bind/index.js");

var $indexOf = callBind(GetIntrinsic('String.prototype.indexOf'));

module.exports = function callBoundIntrinsic(name, allowMissing) {
	var intrinsic = GetIntrinsic(name, !!allowMissing);
	if (typeof intrinsic === 'function' && $indexOf(name, '.prototype.') > -1) {
		return callBind(intrinsic);
	}
	return intrinsic;
};


/***/ }),

/***/ "./glo/modules/error/node_modules/call-bind/index.js":
/*!***********************************************************!*\
  !*** ./glo/modules/error/node_modules/call-bind/index.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var bind = __webpack_require__(/*! function-bind */ "./glo/modules/error/node_modules/function-bind/index.js");
var GetIntrinsic = __webpack_require__(/*! get-intrinsic */ "./glo/modules/error/node_modules/get-intrinsic/index.js");

var $apply = GetIntrinsic('%Function.prototype.apply%');
var $call = GetIntrinsic('%Function.prototype.call%');
var $reflectApply = GetIntrinsic('%Reflect.apply%', true) || bind.call($call, $apply);

var $defineProperty = GetIntrinsic('%Object.defineProperty%', true);

if ($defineProperty) {
	try {
		$defineProperty({}, 'a', { value: 1 });
	} catch (e) {
		// IE 8 has a broken defineProperty
		$defineProperty = null;
	}
}

module.exports = function callBind() {
	return $reflectApply(bind, $call, arguments);
};

var applyBind = function applyBind() {
	return $reflectApply(bind, $apply, arguments);
};

if ($defineProperty) {
	$defineProperty(module.exports, 'apply', { value: applyBind });
} else {
	module.exports.apply = applyBind;
}


/***/ }),

/***/ "./glo/modules/error/node_modules/deep-equal/index.js":
/*!************************************************************!*\
  !*** ./glo/modules/error/node_modules/deep-equal/index.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var objectKeys = __webpack_require__(/*! object-keys */ "./glo/modules/error/node_modules/object-keys/index.js");
var isArguments = __webpack_require__(/*! is-arguments */ "./glo/modules/error/node_modules/is-arguments/index.js");
var is = __webpack_require__(/*! object-is */ "./glo/modules/error/node_modules/object-is/index.js");
var isRegex = __webpack_require__(/*! is-regex */ "./glo/modules/error/node_modules/is-regex/index.js");
var flags = __webpack_require__(/*! regexp.prototype.flags */ "./glo/modules/error/node_modules/regexp.prototype.flags/index.js");
var isArray = __webpack_require__(/*! isarray */ "./glo/modules/error/node_modules/isarray/index.js");
var isDate = __webpack_require__(/*! is-date-object */ "./glo/modules/error/node_modules/is-date-object/index.js");
var whichBoxedPrimitive = __webpack_require__(/*! which-boxed-primitive */ "./glo/modules/error/node_modules/which-boxed-primitive/index.js");
var GetIntrinsic = __webpack_require__(/*! es-abstract/GetIntrinsic */ "./glo/modules/error/node_modules/deep-equal/node_modules/es-abstract/GetIntrinsic.js");
var callBound = __webpack_require__(/*! es-abstract/helpers/callBound */ "./glo/modules/error/node_modules/deep-equal/node_modules/es-abstract/helpers/callBound.js");
var whichCollection = __webpack_require__(/*! which-collection */ "./glo/modules/error/node_modules/which-collection/index.js");
var getIterator = __webpack_require__(/*! es-get-iterator */ "./glo/modules/error/node_modules/es-get-iterator/index.js");
var getSideChannel = __webpack_require__(/*! side-channel */ "./glo/modules/error/node_modules/side-channel/index.js");
var whichTypedArray = __webpack_require__(/*! which-typed-array */ "./glo/modules/error/node_modules/which-typed-array/index.js");
var assign = __webpack_require__(/*! object.assign */ "./glo/modules/error/node_modules/object.assign/index.js");

var $getTime = callBound('Date.prototype.getTime');
var gPO = Object.getPrototypeOf;
var $objToString = callBound('Object.prototype.toString');

var $Set = GetIntrinsic('%Set%', true);
var $mapHas = callBound('Map.prototype.has', true);
var $mapGet = callBound('Map.prototype.get', true);
var $mapSize = callBound('Map.prototype.size', true);
var $setAdd = callBound('Set.prototype.add', true);
var $setDelete = callBound('Set.prototype.delete', true);
var $setHas = callBound('Set.prototype.has', true);
var $setSize = callBound('Set.prototype.size', true);

// taken from https://github.com/browserify/commonjs-assert/blob/bba838e9ba9e28edf3127ce6974624208502f6bc/internal/util/comparisons.js#L401-L414
function setHasEqualElement(set, val1, opts, channel) {
  var i = getIterator(set);
  var result;
  while ((result = i.next()) && !result.done) {
    if (internalDeepEqual(val1, result.value, opts, channel)) { // eslint-disable-line no-use-before-define
      // Remove the matching element to make sure we do not check that again.
      $setDelete(set, result.value);
      return true;
    }
  }

  return false;
}

// taken from https://github.com/browserify/commonjs-assert/blob/bba838e9ba9e28edf3127ce6974624208502f6bc/internal/util/comparisons.js#L416-L439
function findLooseMatchingPrimitives(prim) {
  if (typeof prim === 'undefined') {
    return null;
  }
  if (typeof prim === 'object') { // Only pass in null as object!
    return void 0;
  }
  if (typeof prim === 'symbol') {
    return false;
  }
  if (typeof prim === 'string' || typeof prim === 'number') {
    // Loose equal entries exist only if the string is possible to convert to a regular number and not NaN.
    return +prim === +prim; // eslint-disable-line no-implicit-coercion
  }
  return true;
}

// taken from https://github.com/browserify/commonjs-assert/blob/bba838e9ba9e28edf3127ce6974624208502f6bc/internal/util/comparisons.js#L449-L460
function mapMightHaveLoosePrim(a, b, prim, item, opts, channel) {
  var altValue = findLooseMatchingPrimitives(prim);
  if (altValue != null) {
    return altValue;
  }
  var curB = $mapGet(b, altValue);
  var looseOpts = assign({}, opts, { strict: false });
  if (
    (typeof curB === 'undefined' && !$mapHas(b, altValue))
    // eslint-disable-next-line no-use-before-define
    || !internalDeepEqual(item, curB, looseOpts, channel)
  ) {
    return false;
  }
  // eslint-disable-next-line no-use-before-define
  return !$mapHas(a, altValue) && internalDeepEqual(item, curB, looseOpts, channel);
}

// taken from https://github.com/browserify/commonjs-assert/blob/bba838e9ba9e28edf3127ce6974624208502f6bc/internal/util/comparisons.js#L441-L447
function setMightHaveLoosePrim(a, b, prim) {
  var altValue = findLooseMatchingPrimitives(prim);
  if (altValue != null) {
    return altValue;
  }

  return $setHas(b, altValue) && !$setHas(a, altValue);
}

// taken from https://github.com/browserify/commonjs-assert/blob/bba838e9ba9e28edf3127ce6974624208502f6bc/internal/util/comparisons.js#L518-L533
function mapHasEqualEntry(set, map, key1, item1, opts, channel) {
  var i = getIterator(set);
  var result;
  var key2;
  while ((result = i.next()) && !result.done) {
    key2 = result.value;
    if (
      // eslint-disable-next-line no-use-before-define
      internalDeepEqual(key1, key2, opts, channel)
      // eslint-disable-next-line no-use-before-define
      && internalDeepEqual(item1, $mapGet(map, key2), opts, channel)
    ) {
      $setDelete(set, key2);
      return true;
    }
  }

  return false;
}

function internalDeepEqual(actual, expected, options, channel) {
  var opts = options || {};

  // 7.1. All identical values are equivalent, as determined by ===.
  if (opts.strict ? is(actual, expected) : actual === expected) {
    return true;
  }

  var actualBoxed = whichBoxedPrimitive(actual);
  var expectedBoxed = whichBoxedPrimitive(expected);
  if (actualBoxed !== expectedBoxed) {
    return false;
  }

  // 7.3. Other pairs that do not both pass typeof value == 'object', equivalence is determined by ==.
  if (!actual || !expected || (typeof actual !== 'object' && typeof expected !== 'object')) {
    return opts.strict ? is(actual, expected) : actual == expected; // eslint-disable-line eqeqeq
  }

  /*
   * 7.4. For all other Object pairs, including Array objects, equivalence is
   * determined by having the same number of owned properties (as verified
   * with Object.prototype.hasOwnProperty.call), the same set of keys
   * (although not necessarily the same order), equivalent values for every
   * corresponding key, and an identical 'prototype' property. Note: this
   * accounts for both named and indexed properties on Arrays.
   */
  // see https://github.com/nodejs/node/commit/d3aafd02efd3a403d646a3044adcf14e63a88d32 for memos/channel inspiration

  var hasActual = channel.has(actual);
  var hasExpected = channel.has(expected);
  var sentinel;
  if (hasActual && hasExpected) {
    if (channel.get(actual) === channel.get(expected)) {
      return true;
    }
  } else {
    sentinel = {};
  }
  if (!hasActual) { channel.set(actual, sentinel); }
  if (!hasExpected) { channel.set(expected, sentinel); }

  // eslint-disable-next-line no-use-before-define
  return objEquiv(actual, expected, opts, channel);
}

function isBuffer(x) {
  if (!x || typeof x !== 'object' || typeof x.length !== 'number') {
    return false;
  }
  if (typeof x.copy !== 'function' || typeof x.slice !== 'function') {
    return false;
  }
  if (x.length > 0 && typeof x[0] !== 'number') {
    return false;
  }

  return !!(x.constructor && x.constructor.isBuffer && x.constructor.isBuffer(x));
}

function setEquiv(a, b, opts, channel) {
  if ($setSize(a) !== $setSize(b)) {
    return false;
  }
  var iA = getIterator(a);
  var iB = getIterator(b);
  var resultA;
  var resultB;
  var set;
  while ((resultA = iA.next()) && !resultA.done) {
    if (resultA.value && typeof resultA.value === 'object') {
      if (!set) { set = new $Set(); }
      $setAdd(set, resultA.value);
    } else if (!$setHas(b, resultA.value)) {
      if (opts.strict) { return false; }
      if (!setMightHaveLoosePrim(a, b, resultA.value)) {
        return false;
      }
      if (!set) { set = new $Set(); }
      $setAdd(set, resultA.value);
    }
  }
  if (set) {
    while ((resultB = iB.next()) && !resultB.done) {
      // We have to check if a primitive value is already matching and only if it's not, go hunting for it.
      if (resultB.value && typeof resultB.value === 'object') {
        if (!setHasEqualElement(set, resultB.value, opts.strict, channel)) {
          return false;
        }
      } else if (
        !opts.strict
        && !$setHas(a, resultB.value)
        && !setHasEqualElement(set, resultB.value, opts.strict, channel)
      ) {
        return false;
      }
    }
    return $setSize(set) === 0;
  }
  return true;
}

function mapEquiv(a, b, opts, channel) {
  if ($mapSize(a) !== $mapSize(b)) {
    return false;
  }
  var iA = getIterator(a);
  var iB = getIterator(b);
  var resultA;
  var resultB;
  var set;
  var key;
  var item1;
  var item2;
  while ((resultA = iA.next()) && !resultA.done) {
    key = resultA.value[0];
    item1 = resultA.value[1];
    if (key && typeof key === 'object') {
      if (!set) { set = new $Set(); }
      $setAdd(set, key);
    } else {
      item2 = $mapGet(b, key);
      if ((typeof item2 === 'undefined' && !$mapHas(b, key)) || !internalDeepEqual(item1, item2, opts, channel)) {
        if (opts.strict) {
          return false;
        }
        if (!mapMightHaveLoosePrim(a, b, key, item1, opts, channel)) {
          return false;
        }
        if (!set) { set = new $Set(); }
        $setAdd(set, key);
      }
    }
  }

  if (set) {
    while ((resultB = iB.next()) && !resultB.done) {
      key = resultB.value[0];
      item2 = resultB.value[1];
      if (key && typeof key === 'object') {
        if (!mapHasEqualEntry(set, a, key, item2, opts, channel)) {
          return false;
        }
      } else if (
        !opts.strict
        && (!a.has(key) || !internalDeepEqual($mapGet(a, key), item2, opts, channel))
        && !mapHasEqualEntry(set, a, key, item2, assign({}, opts, { strict: false }), channel)
      ) {
        return false;
      }
    }
    return $setSize(set) === 0;
  }
  return true;
}

function objEquiv(a, b, opts, channel) {
  /* eslint max-statements: [2, 100], max-lines-per-function: [2, 120], max-depth: [2, 5] */
  var i, key;

  if (typeof a !== typeof b) { return false; }
  if (a == null || b == null) { return false; }

  if ($objToString(a) !== $objToString(b)) { return false; }

  if (isArguments(a) !== isArguments(b)) { return false; }

  var aIsArray = isArray(a);
  var bIsArray = isArray(b);
  if (aIsArray !== bIsArray) { return false; }

  // TODO: replace when a cross-realm brand check is available
  var aIsError = a instanceof Error;
  var bIsError = b instanceof Error;
  if (aIsError !== bIsError) { return false; }
  if (aIsError || bIsError) {
    if (a.name !== b.name || a.message !== b.message) { return false; }
  }

  var aIsRegex = isRegex(a);
  var bIsRegex = isRegex(b);
  if (aIsRegex !== bIsRegex) { return false; }
  if ((aIsRegex || bIsRegex) && (a.source !== b.source || flags(a) !== flags(b))) {
    return false;
  }

  var aIsDate = isDate(a);
  var bIsDate = isDate(b);
  if (aIsDate !== bIsDate) { return false; }
  if (aIsDate || bIsDate) { // && would work too, because both are true or both false here
    if ($getTime(a) !== $getTime(b)) { return false; }
  }
  if (opts.strict && gPO && gPO(a) !== gPO(b)) { return false; }

  if (whichTypedArray(a) !== whichTypedArray(b)) {
    return false;
  }

  var aIsBuffer = isBuffer(a);
  var bIsBuffer = isBuffer(b);
  if (aIsBuffer !== bIsBuffer) { return false; }
  if (aIsBuffer || bIsBuffer) { // && would work too, because both are true or both false here
    if (a.length !== b.length) { return false; }
    for (i = 0; i < a.length; i++) {
      if (a[i] !== b[i]) { return false; }
    }
    return true;
  }

  if (typeof a !== typeof b) { return false; }

  var ka = objectKeys(a);
  var kb = objectKeys(b);
  // having the same number of owned properties (keys incorporates hasOwnProperty)
  if (ka.length !== kb.length) { return false; }

  // the same set of keys (although not necessarily the same order),
  ka.sort();
  kb.sort();
  // ~~~cheap key test
  for (i = ka.length - 1; i >= 0; i--) {
    if (ka[i] != kb[i]) { return false; } // eslint-disable-line eqeqeq
  }

  // equivalent values for every corresponding key, and ~~~possibly expensive deep test
  for (i = ka.length - 1; i >= 0; i--) {
    key = ka[i];
    if (!internalDeepEqual(a[key], b[key], opts, channel)) { return false; }
  }

  var aCollection = whichCollection(a);
  var bCollection = whichCollection(b);
  if (aCollection !== bCollection) {
    return false;
  }
  if (aCollection === 'Set' || bCollection === 'Set') { // aCollection === bCollection
    return setEquiv(a, b, opts, channel);
  }
  if (aCollection === 'Map') { // aCollection === bCollection
    return mapEquiv(a, b, opts, channel);
  }

  return true;
}

module.exports = function deepEqual(a, b, opts) {
  return internalDeepEqual(a, b, opts, getSideChannel());
};


/***/ }),

/***/ "./glo/modules/error/node_modules/deep-equal/node_modules/es-abstract/GetIntrinsic.js":
/*!********************************************************************************************!*\
  !*** ./glo/modules/error/node_modules/deep-equal/node_modules/es-abstract/GetIntrinsic.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* globals
	AggregateError,
	Atomics,
	FinalizationRegistry,
	SharedArrayBuffer,
	WeakRef,
*/

var undefined;

var $SyntaxError = SyntaxError;
var $Function = Function;
var $TypeError = TypeError;

// eslint-disable-next-line consistent-return
var getEvalledConstructor = function (expressionSyntax) {
	try {
		// eslint-disable-next-line no-new-func
		return Function('"use strict"; return (' + expressionSyntax + ').constructor;')();
	} catch (e) {}
};

var $gOPD = Object.getOwnPropertyDescriptor;
if ($gOPD) {
	try {
		$gOPD({}, '');
	} catch (e) {
		$gOPD = null; // this is IE 8, which has a broken gOPD
	}
}

var throwTypeError = function () { throw new $TypeError(); };
var ThrowTypeError = $gOPD
	? (function () {
		try {
			// eslint-disable-next-line no-unused-expressions, no-caller, no-restricted-properties
			arguments.callee; // IE 8 does not throw here
			return throwTypeError;
		} catch (calleeThrows) {
			try {
				// IE 8 throws on Object.getOwnPropertyDescriptor(arguments, '')
				return $gOPD(arguments, 'callee').get;
			} catch (gOPDthrows) {
				return throwTypeError;
			}
		}
	}())
	: throwTypeError;

var hasSymbols = __webpack_require__(/*! has-symbols */ "./glo/modules/error/node_modules/has-symbols/index.js")();

var getProto = Object.getPrototypeOf || function (x) { return x.__proto__; }; // eslint-disable-line no-proto

var asyncGenFunction = getEvalledConstructor('async function* () {}');
var asyncGenFunctionPrototype = asyncGenFunction ? asyncGenFunction.prototype : undefined;
var asyncGenPrototype = asyncGenFunctionPrototype ? asyncGenFunctionPrototype.prototype : undefined;

var TypedArray = typeof Uint8Array === 'undefined' ? undefined : getProto(Uint8Array);

var INTRINSICS = {
	'%AggregateError%': typeof AggregateError === 'undefined' ? undefined : AggregateError,
	'%Array%': Array,
	'%ArrayBuffer%': typeof ArrayBuffer === 'undefined' ? undefined : ArrayBuffer,
	'%ArrayIteratorPrototype%': hasSymbols ? getProto([][Symbol.iterator]()) : undefined,
	'%AsyncFromSyncIteratorPrototype%': undefined,
	'%AsyncFunction%': getEvalledConstructor('async function () {}'),
	'%AsyncGenerator%': asyncGenFunctionPrototype,
	'%AsyncGeneratorFunction%': asyncGenFunction,
	'%AsyncIteratorPrototype%': asyncGenPrototype ? getProto(asyncGenPrototype) : undefined,
	'%Atomics%': typeof Atomics === 'undefined' ? undefined : Atomics,
	'%BigInt%': typeof BigInt === 'undefined' ? undefined : BigInt,
	'%Boolean%': Boolean,
	'%DataView%': typeof DataView === 'undefined' ? undefined : DataView,
	'%Date%': Date,
	'%decodeURI%': decodeURI,
	'%decodeURIComponent%': decodeURIComponent,
	'%encodeURI%': encodeURI,
	'%encodeURIComponent%': encodeURIComponent,
	'%Error%': Error,
	'%eval%': eval, // eslint-disable-line no-eval
	'%EvalError%': EvalError,
	'%Float32Array%': typeof Float32Array === 'undefined' ? undefined : Float32Array,
	'%Float64Array%': typeof Float64Array === 'undefined' ? undefined : Float64Array,
	'%FinalizationRegistry%': typeof FinalizationRegistry === 'undefined' ? undefined : FinalizationRegistry,
	'%Function%': $Function,
	'%GeneratorFunction%': getEvalledConstructor('function* () {}'),
	'%Int8Array%': typeof Int8Array === 'undefined' ? undefined : Int8Array,
	'%Int16Array%': typeof Int16Array === 'undefined' ? undefined : Int16Array,
	'%Int32Array%': typeof Int32Array === 'undefined' ? undefined : Int32Array,
	'%isFinite%': isFinite,
	'%isNaN%': isNaN,
	'%IteratorPrototype%': hasSymbols ? getProto(getProto([][Symbol.iterator]())) : undefined,
	'%JSON%': typeof JSON === 'object' ? JSON : undefined,
	'%Map%': typeof Map === 'undefined' ? undefined : Map,
	'%MapIteratorPrototype%': typeof Map === 'undefined' || !hasSymbols ? undefined : getProto(new Map()[Symbol.iterator]()),
	'%Math%': Math,
	'%Number%': Number,
	'%Object%': Object,
	'%parseFloat%': parseFloat,
	'%parseInt%': parseInt,
	'%Promise%': typeof Promise === 'undefined' ? undefined : Promise,
	'%Proxy%': typeof Proxy === 'undefined' ? undefined : Proxy,
	'%RangeError%': RangeError,
	'%ReferenceError%': ReferenceError,
	'%Reflect%': typeof Reflect === 'undefined' ? undefined : Reflect,
	'%RegExp%': RegExp,
	'%Set%': typeof Set === 'undefined' ? undefined : Set,
	'%SetIteratorPrototype%': typeof Set === 'undefined' || !hasSymbols ? undefined : getProto(new Set()[Symbol.iterator]()),
	'%SharedArrayBuffer%': typeof SharedArrayBuffer === 'undefined' ? undefined : SharedArrayBuffer,
	'%String%': String,
	'%StringIteratorPrototype%': hasSymbols ? getProto(''[Symbol.iterator]()) : undefined,
	'%Symbol%': hasSymbols ? Symbol : undefined,
	'%SyntaxError%': $SyntaxError,
	'%ThrowTypeError%': ThrowTypeError,
	'%TypedArray%': TypedArray,
	'%TypeError%': $TypeError,
	'%Uint8Array%': typeof Uint8Array === 'undefined' ? undefined : Uint8Array,
	'%Uint8ClampedArray%': typeof Uint8ClampedArray === 'undefined' ? undefined : Uint8ClampedArray,
	'%Uint16Array%': typeof Uint16Array === 'undefined' ? undefined : Uint16Array,
	'%Uint32Array%': typeof Uint32Array === 'undefined' ? undefined : Uint32Array,
	'%URIError%': URIError,
	'%WeakMap%': typeof WeakMap === 'undefined' ? undefined : WeakMap,
	'%WeakRef%': typeof WeakRef === 'undefined' ? undefined : WeakRef,
	'%WeakSet%': typeof WeakSet === 'undefined' ? undefined : WeakSet
};

var LEGACY_ALIASES = {
	'%ArrayBufferPrototype%': ['ArrayBuffer', 'prototype'],
	'%ArrayPrototype%': ['Array', 'prototype'],
	'%ArrayProto_entries%': ['Array', 'prototype', 'entries'],
	'%ArrayProto_forEach%': ['Array', 'prototype', 'forEach'],
	'%ArrayProto_keys%': ['Array', 'prototype', 'keys'],
	'%ArrayProto_values%': ['Array', 'prototype', 'values'],
	'%AsyncFunctionPrototype%': ['AsyncFunction', 'prototype'],
	'%AsyncGenerator%': ['AsyncGeneratorFunction', 'prototype'],
	'%AsyncGeneratorPrototype%': ['AsyncGeneratorFunction', 'prototype', 'prototype'],
	'%BooleanPrototype%': ['Boolean', 'prototype'],
	'%DataViewPrototype%': ['DataView', 'prototype'],
	'%DatePrototype%': ['Date', 'prototype'],
	'%ErrorPrototype%': ['Error', 'prototype'],
	'%EvalErrorPrototype%': ['EvalError', 'prototype'],
	'%Float32ArrayPrototype%': ['Float32Array', 'prototype'],
	'%Float64ArrayPrototype%': ['Float64Array', 'prototype'],
	'%FunctionPrototype%': ['Function', 'prototype'],
	'%Generator%': ['GeneratorFunction', 'prototype'],
	'%GeneratorPrototype%': ['GeneratorFunction', 'prototype', 'prototype'],
	'%Int8ArrayPrototype%': ['Int8Array', 'prototype'],
	'%Int16ArrayPrototype%': ['Int16Array', 'prototype'],
	'%Int32ArrayPrototype%': ['Int32Array', 'prototype'],
	'%JSONParse%': ['JSON', 'parse'],
	'%JSONStringify%': ['JSON', 'stringify'],
	'%MapPrototype%': ['Map', 'prototype'],
	'%NumberPrototype%': ['Number', 'prototype'],
	'%ObjectPrototype%': ['Object', 'prototype'],
	'%ObjProto_toString%': ['Object', 'prototype', 'toString'],
	'%ObjProto_valueOf%': ['Object', 'prototype', 'valueOf'],
	'%PromisePrototype%': ['Promise', 'prototype'],
	'%PromiseProto_then%': ['Promise', 'prototype', 'then'],
	'%Promise_all%': ['Promise', 'all'],
	'%Promise_reject%': ['Promise', 'reject'],
	'%Promise_resolve%': ['Promise', 'resolve'],
	'%RangeErrorPrototype%': ['RangeError', 'prototype'],
	'%ReferenceErrorPrototype%': ['ReferenceError', 'prototype'],
	'%RegExpPrototype%': ['RegExp', 'prototype'],
	'%SetPrototype%': ['Set', 'prototype'],
	'%SharedArrayBufferPrototype%': ['SharedArrayBuffer', 'prototype'],
	'%StringPrototype%': ['String', 'prototype'],
	'%SymbolPrototype%': ['Symbol', 'prototype'],
	'%SyntaxErrorPrototype%': ['SyntaxError', 'prototype'],
	'%TypedArrayPrototype%': ['TypedArray', 'prototype'],
	'%TypeErrorPrototype%': ['TypeError', 'prototype'],
	'%Uint8ArrayPrototype%': ['Uint8Array', 'prototype'],
	'%Uint8ClampedArrayPrototype%': ['Uint8ClampedArray', 'prototype'],
	'%Uint16ArrayPrototype%': ['Uint16Array', 'prototype'],
	'%Uint32ArrayPrototype%': ['Uint32Array', 'prototype'],
	'%URIErrorPrototype%': ['URIError', 'prototype'],
	'%WeakMapPrototype%': ['WeakMap', 'prototype'],
	'%WeakSetPrototype%': ['WeakSet', 'prototype']
};

var bind = __webpack_require__(/*! function-bind */ "./glo/modules/error/node_modules/function-bind/index.js");
var hasOwn = __webpack_require__(/*! has */ "./glo/modules/error/node_modules/has/src/index.js");
var $concat = bind.call(Function.call, Array.prototype.concat);
var $spliceApply = bind.call(Function.apply, Array.prototype.splice);
var $replace = bind.call(Function.call, String.prototype.replace);

/* adapted from https://github.com/lodash/lodash/blob/4.17.15/dist/lodash.js#L6735-L6744 */
var rePropName = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g;
var reEscapeChar = /\\(\\)?/g; /** Used to match backslashes in property paths. */
var stringToPath = function stringToPath(string) {
	var result = [];
	$replace(string, rePropName, function (match, number, quote, subString) {
		result[result.length] = quote ? $replace(subString, reEscapeChar, '$1') : number || match;
	});
	return result;
};
/* end adaptation */

var getBaseIntrinsic = function getBaseIntrinsic(name, allowMissing) {
	var intrinsicName = name;
	var alias;
	if (hasOwn(LEGACY_ALIASES, intrinsicName)) {
		alias = LEGACY_ALIASES[intrinsicName];
		intrinsicName = '%' + alias[0] + '%';
	}

	if (hasOwn(INTRINSICS, intrinsicName)) {
		var value = INTRINSICS[intrinsicName];
		if (typeof value === 'undefined' && !allowMissing) {
			throw new $TypeError('intrinsic ' + name + ' exists, but is not available. Please file an issue!');
		}

		return {
			alias: alias,
			name: intrinsicName,
			value: value
		};
	}

	throw new $SyntaxError('intrinsic ' + name + ' does not exist!');
};

module.exports = function GetIntrinsic(name, allowMissing) {
	if (typeof name !== 'string' || name.length === 0) {
		throw new $TypeError('intrinsic name must be a non-empty string');
	}
	if (arguments.length > 1 && typeof allowMissing !== 'boolean') {
		throw new $TypeError('"allowMissing" argument must be a boolean');
	}

	var parts = stringToPath(name);
	var intrinsicBaseName = parts.length > 0 ? parts[0] : '';

	var intrinsic = getBaseIntrinsic('%' + intrinsicBaseName + '%', allowMissing);
	var intrinsicRealName = intrinsic.name;
	var value = intrinsic.value;
	var skipFurtherCaching = false;

	var alias = intrinsic.alias;
	if (alias) {
		intrinsicBaseName = alias[0];
		$spliceApply(parts, $concat([0, 1], alias));
	}

	for (var i = 1, isOwn = true; i < parts.length; i += 1) {
		var part = parts[i];
		if (part === 'constructor' || !isOwn) {
			skipFurtherCaching = true;
		}

		intrinsicBaseName += '.' + part;
		intrinsicRealName = '%' + intrinsicBaseName + '%';

		if (hasOwn(INTRINSICS, intrinsicRealName)) {
			value = INTRINSICS[intrinsicRealName];
		} else if (value != null) {
			if ($gOPD && (i + 1) >= parts.length) {
				var desc = $gOPD(value, part);
				isOwn = !!desc;

				if (!allowMissing && !(part in value)) {
					throw new $TypeError('base intrinsic for ' + name + ' exists, but the property is not available.');
				}
				// By convention, when a data property is converted to an accessor
				// property to emulate a data property that does not suffer from
				// the override mistake, that accessor's getter is marked with
				// an `originalValue` property. Here, when we detect this, we
				// uphold the illusion by pretending to see that original data
				// property, i.e., returning the value rather than the getter
				// itself.
				if (isOwn && 'get' in desc && !('originalValue' in desc.get)) {
					value = desc.get;
				} else {
					value = value[part];
				}
			} else {
				isOwn = hasOwn(value, part);
				value = value[part];
			}

			if (isOwn && !skipFurtherCaching) {
				INTRINSICS[intrinsicRealName] = value;
			}
		}
	}
	return value;
};


/***/ }),

/***/ "./glo/modules/error/node_modules/deep-equal/node_modules/es-abstract/helpers/callBind.js":
/*!************************************************************************************************!*\
  !*** ./glo/modules/error/node_modules/deep-equal/node_modules/es-abstract/helpers/callBind.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var bind = __webpack_require__(/*! function-bind */ "./glo/modules/error/node_modules/function-bind/index.js");

var GetIntrinsic = __webpack_require__(/*! ../GetIntrinsic */ "./glo/modules/error/node_modules/deep-equal/node_modules/es-abstract/GetIntrinsic.js");

var $apply = GetIntrinsic('%Function.prototype.apply%');
var $call = GetIntrinsic('%Function.prototype.call%');
var $reflectApply = GetIntrinsic('%Reflect.apply%', true) || bind.call($call, $apply);

var $defineProperty = GetIntrinsic('%Object.defineProperty%', true);

if ($defineProperty) {
	try {
		$defineProperty({}, 'a', { value: 1 });
	} catch (e) {
		// IE 8 has a broken defineProperty
		$defineProperty = null;
	}
}

module.exports = function callBind() {
	return $reflectApply(bind, $call, arguments);
};

var applyBind = function applyBind() {
	return $reflectApply(bind, $apply, arguments);
};

if ($defineProperty) {
	$defineProperty(module.exports, 'apply', { value: applyBind });
} else {
	module.exports.apply = applyBind;
}


/***/ }),

/***/ "./glo/modules/error/node_modules/deep-equal/node_modules/es-abstract/helpers/callBound.js":
/*!*************************************************************************************************!*\
  !*** ./glo/modules/error/node_modules/deep-equal/node_modules/es-abstract/helpers/callBound.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var GetIntrinsic = __webpack_require__(/*! ../GetIntrinsic */ "./glo/modules/error/node_modules/deep-equal/node_modules/es-abstract/GetIntrinsic.js");

var callBind = __webpack_require__(/*! ./callBind */ "./glo/modules/error/node_modules/deep-equal/node_modules/es-abstract/helpers/callBind.js");

var $indexOf = callBind(GetIntrinsic('String.prototype.indexOf'));

module.exports = function callBoundIntrinsic(name, allowMissing) {
	var intrinsic = GetIntrinsic(name, !!allowMissing);
	if (typeof intrinsic === 'function' && $indexOf(name, '.prototype.')) {
		return callBind(intrinsic);
	}
	return intrinsic;
};


/***/ }),

/***/ "./glo/modules/error/node_modules/define-properties/index.js":
/*!*******************************************************************!*\
  !*** ./glo/modules/error/node_modules/define-properties/index.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var keys = __webpack_require__(/*! object-keys */ "./glo/modules/error/node_modules/object-keys/index.js");
var hasSymbols = typeof Symbol === 'function' && typeof Symbol('foo') === 'symbol';

var toStr = Object.prototype.toString;
var concat = Array.prototype.concat;
var origDefineProperty = Object.defineProperty;

var isFunction = function (fn) {
	return typeof fn === 'function' && toStr.call(fn) === '[object Function]';
};

var arePropertyDescriptorsSupported = function () {
	var obj = {};
	try {
		origDefineProperty(obj, 'x', { enumerable: false, value: obj });
		// eslint-disable-next-line no-unused-vars, no-restricted-syntax
		for (var _ in obj) { // jscs:ignore disallowUnusedVariables
			return false;
		}
		return obj.x === obj;
	} catch (e) { /* this is IE 8. */
		return false;
	}
};
var supportsDescriptors = origDefineProperty && arePropertyDescriptorsSupported();

var defineProperty = function (object, name, value, predicate) {
	if (name in object && (!isFunction(predicate) || !predicate())) {
		return;
	}
	if (supportsDescriptors) {
		origDefineProperty(object, name, {
			configurable: true,
			enumerable: false,
			value: value,
			writable: true
		});
	} else {
		object[name] = value;
	}
};

var defineProperties = function (object, map) {
	var predicates = arguments.length > 2 ? arguments[2] : {};
	var props = keys(map);
	if (hasSymbols) {
		props = concat.call(props, Object.getOwnPropertySymbols(map));
	}
	for (var i = 0; i < props.length; i += 1) {
		defineProperty(object, props[i], map[props[i]], predicates[props[i]]);
	}
};

defineProperties.supportsDescriptors = !!supportsDescriptors;

module.exports = defineProperties;


/***/ }),

/***/ "./glo/modules/error/node_modules/es-abstract/GetIntrinsic.js":
/*!********************************************************************!*\
  !*** ./glo/modules/error/node_modules/es-abstract/GetIntrinsic.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* globals
	Atomics,
	SharedArrayBuffer,
*/

var undefined;

var $TypeError = TypeError;

var $gOPD = Object.getOwnPropertyDescriptor;
if ($gOPD) {
	try {
		$gOPD({}, '');
	} catch (e) {
		$gOPD = null; // this is IE 8, which has a broken gOPD
	}
}

var throwTypeError = function () { throw new $TypeError(); };
var ThrowTypeError = $gOPD
	? (function () {
		try {
			// eslint-disable-next-line no-unused-expressions, no-caller, no-restricted-properties
			arguments.callee; // IE 8 does not throw here
			return throwTypeError;
		} catch (calleeThrows) {
			try {
				// IE 8 throws on Object.getOwnPropertyDescriptor(arguments, '')
				return $gOPD(arguments, 'callee').get;
			} catch (gOPDthrows) {
				return throwTypeError;
			}
		}
	}())
	: throwTypeError;

var hasSymbols = __webpack_require__(/*! has-symbols */ "./glo/modules/error/node_modules/has-symbols/index.js")();

var getProto = Object.getPrototypeOf || function (x) { return x.__proto__; }; // eslint-disable-line no-proto

var generator; // = function * () {};
var generatorFunction = generator ? getProto(generator) : undefined;
var asyncFn; // async function() {};
var asyncFunction = asyncFn ? asyncFn.constructor : undefined;
var asyncGen; // async function * () {};
var asyncGenFunction = asyncGen ? getProto(asyncGen) : undefined;
var asyncGenIterator = asyncGen ? asyncGen() : undefined;

var TypedArray = typeof Uint8Array === 'undefined' ? undefined : getProto(Uint8Array);

var INTRINSICS = {
	'%Array%': Array,
	'%ArrayBuffer%': typeof ArrayBuffer === 'undefined' ? undefined : ArrayBuffer,
	'%ArrayBufferPrototype%': typeof ArrayBuffer === 'undefined' ? undefined : ArrayBuffer.prototype,
	'%ArrayIteratorPrototype%': hasSymbols ? getProto([][Symbol.iterator]()) : undefined,
	'%ArrayPrototype%': Array.prototype,
	'%ArrayProto_entries%': Array.prototype.entries,
	'%ArrayProto_forEach%': Array.prototype.forEach,
	'%ArrayProto_keys%': Array.prototype.keys,
	'%ArrayProto_values%': Array.prototype.values,
	'%AsyncFromSyncIteratorPrototype%': undefined,
	'%AsyncFunction%': asyncFunction,
	'%AsyncFunctionPrototype%': asyncFunction ? asyncFunction.prototype : undefined,
	'%AsyncGenerator%': asyncGen ? getProto(asyncGenIterator) : undefined,
	'%AsyncGeneratorFunction%': asyncGenFunction,
	'%AsyncGeneratorPrototype%': asyncGenFunction ? asyncGenFunction.prototype : undefined,
	'%AsyncIteratorPrototype%': asyncGenIterator && hasSymbols && Symbol.asyncIterator ? asyncGenIterator[Symbol.asyncIterator]() : undefined,
	'%Atomics%': typeof Atomics === 'undefined' ? undefined : Atomics,
	'%Boolean%': Boolean,
	'%BooleanPrototype%': Boolean.prototype,
	'%DataView%': typeof DataView === 'undefined' ? undefined : DataView,
	'%DataViewPrototype%': typeof DataView === 'undefined' ? undefined : DataView.prototype,
	'%Date%': Date,
	'%DatePrototype%': Date.prototype,
	'%decodeURI%': decodeURI,
	'%decodeURIComponent%': decodeURIComponent,
	'%encodeURI%': encodeURI,
	'%encodeURIComponent%': encodeURIComponent,
	'%Error%': Error,
	'%ErrorPrototype%': Error.prototype,
	'%eval%': eval, // eslint-disable-line no-eval
	'%EvalError%': EvalError,
	'%EvalErrorPrototype%': EvalError.prototype,
	'%Float32Array%': typeof Float32Array === 'undefined' ? undefined : Float32Array,
	'%Float32ArrayPrototype%': typeof Float32Array === 'undefined' ? undefined : Float32Array.prototype,
	'%Float64Array%': typeof Float64Array === 'undefined' ? undefined : Float64Array,
	'%Float64ArrayPrototype%': typeof Float64Array === 'undefined' ? undefined : Float64Array.prototype,
	'%Function%': Function,
	'%FunctionPrototype%': Function.prototype,
	'%Generator%': generator ? getProto(generator()) : undefined,
	'%GeneratorFunction%': generatorFunction,
	'%GeneratorPrototype%': generatorFunction ? generatorFunction.prototype : undefined,
	'%Int8Array%': typeof Int8Array === 'undefined' ? undefined : Int8Array,
	'%Int8ArrayPrototype%': typeof Int8Array === 'undefined' ? undefined : Int8Array.prototype,
	'%Int16Array%': typeof Int16Array === 'undefined' ? undefined : Int16Array,
	'%Int16ArrayPrototype%': typeof Int16Array === 'undefined' ? undefined : Int8Array.prototype,
	'%Int32Array%': typeof Int32Array === 'undefined' ? undefined : Int32Array,
	'%Int32ArrayPrototype%': typeof Int32Array === 'undefined' ? undefined : Int32Array.prototype,
	'%isFinite%': isFinite,
	'%isNaN%': isNaN,
	'%IteratorPrototype%': hasSymbols ? getProto(getProto([][Symbol.iterator]())) : undefined,
	'%JSON%': typeof JSON === 'object' ? JSON : undefined,
	'%JSONParse%': typeof JSON === 'object' ? JSON.parse : undefined,
	'%Map%': typeof Map === 'undefined' ? undefined : Map,
	'%MapIteratorPrototype%': typeof Map === 'undefined' || !hasSymbols ? undefined : getProto(new Map()[Symbol.iterator]()),
	'%MapPrototype%': typeof Map === 'undefined' ? undefined : Map.prototype,
	'%Math%': Math,
	'%Number%': Number,
	'%NumberPrototype%': Number.prototype,
	'%Object%': Object,
	'%ObjectPrototype%': Object.prototype,
	'%ObjProto_toString%': Object.prototype.toString,
	'%ObjProto_valueOf%': Object.prototype.valueOf,
	'%parseFloat%': parseFloat,
	'%parseInt%': parseInt,
	'%Promise%': typeof Promise === 'undefined' ? undefined : Promise,
	'%PromisePrototype%': typeof Promise === 'undefined' ? undefined : Promise.prototype,
	'%PromiseProto_then%': typeof Promise === 'undefined' ? undefined : Promise.prototype.then,
	'%Promise_all%': typeof Promise === 'undefined' ? undefined : Promise.all,
	'%Promise_reject%': typeof Promise === 'undefined' ? undefined : Promise.reject,
	'%Promise_resolve%': typeof Promise === 'undefined' ? undefined : Promise.resolve,
	'%Proxy%': typeof Proxy === 'undefined' ? undefined : Proxy,
	'%RangeError%': RangeError,
	'%RangeErrorPrototype%': RangeError.prototype,
	'%ReferenceError%': ReferenceError,
	'%ReferenceErrorPrototype%': ReferenceError.prototype,
	'%Reflect%': typeof Reflect === 'undefined' ? undefined : Reflect,
	'%RegExp%': RegExp,
	'%RegExpPrototype%': RegExp.prototype,
	'%Set%': typeof Set === 'undefined' ? undefined : Set,
	'%SetIteratorPrototype%': typeof Set === 'undefined' || !hasSymbols ? undefined : getProto(new Set()[Symbol.iterator]()),
	'%SetPrototype%': typeof Set === 'undefined' ? undefined : Set.prototype,
	'%SharedArrayBuffer%': typeof SharedArrayBuffer === 'undefined' ? undefined : SharedArrayBuffer,
	'%SharedArrayBufferPrototype%': typeof SharedArrayBuffer === 'undefined' ? undefined : SharedArrayBuffer.prototype,
	'%String%': String,
	'%StringIteratorPrototype%': hasSymbols ? getProto(''[Symbol.iterator]()) : undefined,
	'%StringPrototype%': String.prototype,
	'%Symbol%': hasSymbols ? Symbol : undefined,
	'%SymbolPrototype%': hasSymbols ? Symbol.prototype : undefined,
	'%SyntaxError%': SyntaxError,
	'%SyntaxErrorPrototype%': SyntaxError.prototype,
	'%ThrowTypeError%': ThrowTypeError,
	'%TypedArray%': TypedArray,
	'%TypedArrayPrototype%': TypedArray ? TypedArray.prototype : undefined,
	'%TypeError%': $TypeError,
	'%TypeErrorPrototype%': $TypeError.prototype,
	'%Uint8Array%': typeof Uint8Array === 'undefined' ? undefined : Uint8Array,
	'%Uint8ArrayPrototype%': typeof Uint8Array === 'undefined' ? undefined : Uint8Array.prototype,
	'%Uint8ClampedArray%': typeof Uint8ClampedArray === 'undefined' ? undefined : Uint8ClampedArray,
	'%Uint8ClampedArrayPrototype%': typeof Uint8ClampedArray === 'undefined' ? undefined : Uint8ClampedArray.prototype,
	'%Uint16Array%': typeof Uint16Array === 'undefined' ? undefined : Uint16Array,
	'%Uint16ArrayPrototype%': typeof Uint16Array === 'undefined' ? undefined : Uint16Array.prototype,
	'%Uint32Array%': typeof Uint32Array === 'undefined' ? undefined : Uint32Array,
	'%Uint32ArrayPrototype%': typeof Uint32Array === 'undefined' ? undefined : Uint32Array.prototype,
	'%URIError%': URIError,
	'%URIErrorPrototype%': URIError.prototype,
	'%WeakMap%': typeof WeakMap === 'undefined' ? undefined : WeakMap,
	'%WeakMapPrototype%': typeof WeakMap === 'undefined' ? undefined : WeakMap.prototype,
	'%WeakSet%': typeof WeakSet === 'undefined' ? undefined : WeakSet,
	'%WeakSetPrototype%': typeof WeakSet === 'undefined' ? undefined : WeakSet.prototype
};

var bind = __webpack_require__(/*! function-bind */ "./glo/modules/error/node_modules/function-bind/index.js");
var $replace = bind.call(Function.call, String.prototype.replace);

/* adapted from https://github.com/lodash/lodash/blob/4.17.15/dist/lodash.js#L6735-L6744 */
var rePropName = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g;
var reEscapeChar = /\\(\\)?/g; /** Used to match backslashes in property paths. */
var stringToPath = function stringToPath(string) {
	var result = [];
	$replace(string, rePropName, function (match, number, quote, subString) {
		result[result.length] = quote ? $replace(subString, reEscapeChar, '$1') : (number || match);
	});
	return result;
};
/* end adaptation */

var getBaseIntrinsic = function getBaseIntrinsic(name, allowMissing) {
	if (!(name in INTRINSICS)) {
		throw new SyntaxError('intrinsic ' + name + ' does not exist!');
	}

	// istanbul ignore if // hopefully this is impossible to test :-)
	if (typeof INTRINSICS[name] === 'undefined' && !allowMissing) {
		throw new $TypeError('intrinsic ' + name + ' exists, but is not available. Please file an issue!');
	}

	return INTRINSICS[name];
};

module.exports = function GetIntrinsic(name, allowMissing) {
	if (typeof name !== 'string' || name.length === 0) {
		throw new TypeError('intrinsic name must be a non-empty string');
	}
	if (arguments.length > 1 && typeof allowMissing !== 'boolean') {
		throw new TypeError('"allowMissing" argument must be a boolean');
	}

	var parts = stringToPath(name);

	var value = getBaseIntrinsic('%' + (parts.length > 0 ? parts[0] : '') + '%', allowMissing);
	for (var i = 1; i < parts.length; i += 1) {
		if (value != null) {
			if ($gOPD && (i + 1) >= parts.length) {
				var desc = $gOPD(value, parts[i]);
				if (!allowMissing && !(parts[i] in value)) {
					throw new $TypeError('base intrinsic for ' + name + ' exists, but the property is not available.');
				}
				// By convention, when a data property is converted to an accessor
				// property to emulate a data property that does not suffer from
				// the override mistake, that accessor's getter is marked with
				// an `originalValue` property. Here, when we detect this, we
				// uphold the illusion by pretending to see that original data
				// property, i.e., returning the value rather than the getter
				// itself.
				value = desc && 'get' in desc && !('originalValue' in desc.get) ? desc.get : value[parts[i]];
			} else {
				value = value[parts[i]];
			}
		}
	}
	return value;
};


/***/ }),

/***/ "./glo/modules/error/node_modules/es-abstract/helpers/callBind.js":
/*!************************************************************************!*\
  !*** ./glo/modules/error/node_modules/es-abstract/helpers/callBind.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var bind = __webpack_require__(/*! function-bind */ "./glo/modules/error/node_modules/function-bind/index.js");

var GetIntrinsic = __webpack_require__(/*! ../GetIntrinsic */ "./glo/modules/error/node_modules/es-abstract/GetIntrinsic.js");

var $apply = GetIntrinsic('%Function.prototype.apply%');
var $call = GetIntrinsic('%Function.prototype.call%');
var $reflectApply = GetIntrinsic('%Reflect.apply%', true) || bind.call($call, $apply);

var $defineProperty = GetIntrinsic('%Object.defineProperty%', true);

if ($defineProperty) {
	try {
		$defineProperty({}, 'a', { value: 1 });
	} catch (e) {
		// IE 8 has a broken defineProperty
		$defineProperty = null;
	}
}

module.exports = function callBind() {
	return $reflectApply(bind, $call, arguments);
};

var applyBind = function applyBind() {
	return $reflectApply(bind, $apply, arguments);
};

if ($defineProperty) {
	$defineProperty(module.exports, 'apply', { value: applyBind });
} else {
	module.exports.apply = applyBind;
}


/***/ }),

/***/ "./glo/modules/error/node_modules/es-abstract/helpers/callBound.js":
/*!*************************************************************************!*\
  !*** ./glo/modules/error/node_modules/es-abstract/helpers/callBound.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var GetIntrinsic = __webpack_require__(/*! ../GetIntrinsic */ "./glo/modules/error/node_modules/es-abstract/GetIntrinsic.js");

var callBind = __webpack_require__(/*! ./callBind */ "./glo/modules/error/node_modules/es-abstract/helpers/callBind.js");

var $indexOf = callBind(GetIntrinsic('String.prototype.indexOf'));

module.exports = function callBoundIntrinsic(name, allowMissing) {
	var intrinsic = GetIntrinsic(name, !!allowMissing);
	if (typeof intrinsic === 'function' && $indexOf(name, '.prototype.')) {
		return callBind(intrinsic);
	}
	return intrinsic;
};


/***/ }),

/***/ "./glo/modules/error/node_modules/es-abstract/helpers/getOwnPropertyDescriptor.js":
/*!****************************************************************************************!*\
  !*** ./glo/modules/error/node_modules/es-abstract/helpers/getOwnPropertyDescriptor.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var GetIntrinsic = __webpack_require__(/*! ../GetIntrinsic */ "./glo/modules/error/node_modules/es-abstract/GetIntrinsic.js");

var $gOPD = GetIntrinsic('%Object.getOwnPropertyDescriptor%');
if ($gOPD) {
	try {
		$gOPD([], 'length');
	} catch (e) {
		// IE 8 has a broken gOPD
		$gOPD = null;
	}
}

module.exports = $gOPD;


/***/ }),

/***/ "./glo/modules/error/node_modules/es-get-iterator/index.js":
/*!*****************************************************************!*\
  !*** ./glo/modules/error/node_modules/es-get-iterator/index.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

/* eslint global-require: 0 */
// the code is structured this way so that bundlers can
// alias out `has-symbols` to `() => true` or `() => false` if your target
// environments' Symbol capabilities are known, and then use
// dead code elimination on the rest of this module.
//
// Similarly, `isarray` can be aliased to `Array.isArray` if
// available in all target environments.

var isArguments = __webpack_require__(/*! is-arguments */ "./glo/modules/error/node_modules/is-arguments/index.js");

if (__webpack_require__(/*! has-symbols */ "./glo/modules/error/node_modules/has-symbols/index.js")() || __webpack_require__(/*! has-symbols/shams */ "./glo/modules/error/node_modules/has-symbols/shams.js")()) {
	var $iterator = Symbol.iterator;
	// Symbol is available natively or shammed
	// natively:
	//  - Chrome >= 38
	//  - Edge 12-14?, Edge >= 15 for sure
	//  - FF >= 36
	//  - Safari >= 9
	//  - node >= 0.12
	module.exports = function getIterator(iterable) {
		// alternatively, `iterable[$iterator]?.()`
		if (iterable != null && typeof iterable[$iterator] !== 'undefined') {
			return iterable[$iterator]();
		}
		if (isArguments(iterable)) {
			// arguments objects lack Symbol.iterator
			// - node 0.12
			return Array.prototype[$iterator].call(iterable);
		}
	};
} else {
	// Symbol is not available, native or shammed
	var isArray = __webpack_require__(/*! isarray */ "./glo/modules/error/node_modules/isarray/index.js");
	var isString = __webpack_require__(/*! is-string */ "./glo/modules/error/node_modules/is-string/index.js");
	var GetIntrinsic = __webpack_require__(/*! get-intrinsic */ "./glo/modules/error/node_modules/get-intrinsic/index.js");
	var $Map = GetIntrinsic('%Map%', true);
	var $Set = GetIntrinsic('%Set%', true);
	var callBound = __webpack_require__(/*! call-bind/callBound */ "./glo/modules/error/node_modules/call-bind/callBound.js");
	var $arrayPush = callBound('Array.prototype.push');
	var $charCodeAt = callBound('String.prototype.charCodeAt');
	var $stringSlice = callBound('String.prototype.slice');

	var advanceStringIndex = function advanceStringIndex(S, index) {
		var length = S.length;
		if ((index + 1) >= length) {
			return index + 1;
		}

		var first = $charCodeAt(S, index);
		if (first < 0xD800 || first > 0xDBFF) {
			return index + 1;
		}

		var second = $charCodeAt(S, index + 1);
		if (second < 0xDC00 || second > 0xDFFF) {
			return index + 1;
		}

		return index + 2;
	};

	var getArrayIterator = function getArrayIterator(arraylike) {
		var i = 0;
		return {
			next: function next() {
				var done = i >= arraylike.length;
				var value;
				if (!done) {
					value = arraylike[i];
					i += 1;
				}
				return {
					done: done,
					value: value
				};
			}
		};
	};

	var getNonCollectionIterator = function getNonCollectionIterator(iterable, noPrimordialCollections) {
		if (isArray(iterable) || isArguments(iterable)) {
			return getArrayIterator(iterable);
		}
		if (isString(iterable)) {
			var i = 0;
			return {
				next: function next() {
					var nextIndex = advanceStringIndex(iterable, i);
					var value = $stringSlice(iterable, i, nextIndex);
					i = nextIndex;
					return {
						done: nextIndex > iterable.length,
						value: value
					};
				}
			};
		}

		// es6-shim and es-shims' es-map use a string "_es6-shim iterator_" property on different iterables, such as MapIterator.
		if (noPrimordialCollections && typeof iterable['_es6-shim iterator_'] !== 'undefined') {
			return iterable['_es6-shim iterator_']();
		}
	};

	if (!$Map && !$Set) {
		// the only language iterables are Array, String, arguments
		// - Safari <= 6.0
		// - Chrome < 38
		// - node < 0.12
		// - FF < 13
		// - IE < 11
		// - Edge < 11

		module.exports = function getIterator(iterable) {
			if (iterable != null) {
				return getNonCollectionIterator(iterable, true);
			}
		};
	} else {
		// either Map or Set are available, but Symbol is not
		// - es6-shim on an ES5 browser
		// - Safari 6.2 (maybe 6.1?)
		// - FF v[13, 36)
		// - IE 11
		// - Edge 11
		// - Safari v[6, 9)

		var isMap = __webpack_require__(/*! is-map */ "./glo/modules/error/node_modules/is-map/index.js");
		var isSet = __webpack_require__(/*! is-set */ "./glo/modules/error/node_modules/is-set/index.js");

		// Firefox >= 27, IE 11, Safari 6.2 - 9, Edge 11, es6-shim in older envs, all have forEach
		var $mapForEach = callBound('Map.prototype.forEach', true);
		var $setForEach = callBound('Set.prototype.forEach', true);
		if (typeof process === 'undefined' || !process.versions || !process.versions.node) { // "if is not node"

			// Firefox 17 - 26 has `.iterator()`, whose iterator `.next()` either
			// returns a value, or throws a StopIteration object. These browsers
			// do not have any other mechanism for iteration.
			var $mapIterator = callBound('Map.prototype.iterator', true);
			var $setIterator = callBound('Set.prototype.iterator', true);
			var getStopIterationIterator = function (iterator) {
				var done = false;
				return {
					next: function next() {
						try {
							return {
								done: done,
								value: done ? undefined : iterator.next()
							};
						} catch (e) {
							done = true;
							return {
								done: true,
								value: undefined
							};
						}
					}
				};
			};
		}
		// Firefox 27-35, and some older es6-shim versions, use a string "@@iterator" property
		// this returns a proper iterator object, so we should use it instead of forEach.
		// newer es6-shim versions use a string "_es6-shim iterator_" property.
		var $mapAtAtIterator = callBound('Map.prototype.@@iterator', true) || callBound('Map.prototype._es6-shim iterator_', true);
		var $setAtAtIterator = callBound('Set.prototype.@@iterator', true) || callBound('Set.prototype._es6-shim iterator_', true);

		var getCollectionIterator = function getCollectionIterator(iterable) {
			if (isMap(iterable)) {
				if ($mapIterator) {
					return getStopIterationIterator($mapIterator(iterable));
				}
				if ($mapAtAtIterator) {
					return $mapAtAtIterator(iterable);
				}
				if ($mapForEach) {
					var entries = [];
					$mapForEach(iterable, function (v, k) {
						$arrayPush(entries, [k, v]);
					});
					return getArrayIterator(entries);
				}
			}
			if (isSet(iterable)) {
				if ($setIterator) {
					return getStopIterationIterator($setIterator(iterable));
				}
				if ($setAtAtIterator) {
					return $setAtAtIterator(iterable);
				}
				if ($setForEach) {
					var values = [];
					$setForEach(iterable, function (v) {
						$arrayPush(values, v);
					});
					return getArrayIterator(values);
				}
			}
		};

		module.exports = function getIterator(iterable) {
			return getCollectionIterator(iterable) || getNonCollectionIterator(iterable);
		};
	}
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../webapp/node_modules/process/browser.js */ "./glo/modules/webapp/node_modules/process/browser.js")))

/***/ }),

/***/ "./glo/modules/error/node_modules/foreach/index.js":
/*!*********************************************************!*\
  !*** ./glo/modules/error/node_modules/foreach/index.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {


var hasOwn = Object.prototype.hasOwnProperty;
var toString = Object.prototype.toString;

module.exports = function forEach (obj, fn, ctx) {
    if (toString.call(fn) !== '[object Function]') {
        throw new TypeError('iterator must be a function');
    }
    var l = obj.length;
    if (l === +l) {
        for (var i = 0; i < l; i++) {
            fn.call(ctx, obj[i], i, obj);
        }
    } else {
        for (var k in obj) {
            if (hasOwn.call(obj, k)) {
                fn.call(ctx, obj[k], k, obj);
            }
        }
    }
};



/***/ }),

/***/ "./glo/modules/error/node_modules/function-bind/implementation.js":
/*!************************************************************************!*\
  !*** ./glo/modules/error/node_modules/function-bind/implementation.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* eslint no-invalid-this: 1 */

var ERROR_MESSAGE = 'Function.prototype.bind called on incompatible ';
var slice = Array.prototype.slice;
var toStr = Object.prototype.toString;
var funcType = '[object Function]';

module.exports = function bind(that) {
    var target = this;
    if (typeof target !== 'function' || toStr.call(target) !== funcType) {
        throw new TypeError(ERROR_MESSAGE + target);
    }
    var args = slice.call(arguments, 1);

    var bound;
    var binder = function () {
        if (this instanceof bound) {
            var result = target.apply(
                this,
                args.concat(slice.call(arguments))
            );
            if (Object(result) === result) {
                return result;
            }
            return this;
        } else {
            return target.apply(
                that,
                args.concat(slice.call(arguments))
            );
        }
    };

    var boundLength = Math.max(0, target.length - args.length);
    var boundArgs = [];
    for (var i = 0; i < boundLength; i++) {
        boundArgs.push('$' + i);
    }

    bound = Function('binder', 'return function (' + boundArgs.join(',') + '){ return binder.apply(this,arguments); }')(binder);

    if (target.prototype) {
        var Empty = function Empty() {};
        Empty.prototype = target.prototype;
        bound.prototype = new Empty();
        Empty.prototype = null;
    }

    return bound;
};


/***/ }),

/***/ "./glo/modules/error/node_modules/function-bind/index.js":
/*!***************************************************************!*\
  !*** ./glo/modules/error/node_modules/function-bind/index.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var implementation = __webpack_require__(/*! ./implementation */ "./glo/modules/error/node_modules/function-bind/implementation.js");

module.exports = Function.prototype.bind || implementation;


/***/ }),

/***/ "./glo/modules/error/node_modules/get-intrinsic/index.js":
/*!***************************************************************!*\
  !*** ./glo/modules/error/node_modules/get-intrinsic/index.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* globals
	AggregateError,
	Atomics,
	FinalizationRegistry,
	SharedArrayBuffer,
	WeakRef,
*/

var undefined;

var $SyntaxError = SyntaxError;
var $Function = Function;
var $TypeError = TypeError;

// eslint-disable-next-line consistent-return
var getEvalledConstructor = function (expressionSyntax) {
	try {
		// eslint-disable-next-line no-new-func
		return Function('"use strict"; return (' + expressionSyntax + ').constructor;')();
	} catch (e) {}
};

var $gOPD = Object.getOwnPropertyDescriptor;
if ($gOPD) {
	try {
		$gOPD({}, '');
	} catch (e) {
		$gOPD = null; // this is IE 8, which has a broken gOPD
	}
}

var throwTypeError = function () {
	throw new $TypeError();
};
var ThrowTypeError = $gOPD
	? (function () {
		try {
			// eslint-disable-next-line no-unused-expressions, no-caller, no-restricted-properties
			arguments.callee; // IE 8 does not throw here
			return throwTypeError;
		} catch (calleeThrows) {
			try {
				// IE 8 throws on Object.getOwnPropertyDescriptor(arguments, '')
				return $gOPD(arguments, 'callee').get;
			} catch (gOPDthrows) {
				return throwTypeError;
			}
		}
	}())
	: throwTypeError;

var hasSymbols = __webpack_require__(/*! has-symbols */ "./glo/modules/error/node_modules/has-symbols/index.js")();

var getProto = Object.getPrototypeOf || function (x) { return x.__proto__; }; // eslint-disable-line no-proto

var asyncGenFunction = getEvalledConstructor('async function* () {}');
var asyncGenFunctionPrototype = asyncGenFunction ? asyncGenFunction.prototype : undefined;
var asyncGenPrototype = asyncGenFunctionPrototype ? asyncGenFunctionPrototype.prototype : undefined;

var TypedArray = typeof Uint8Array === 'undefined' ? undefined : getProto(Uint8Array);

var INTRINSICS = {
	'%AggregateError%': typeof AggregateError === 'undefined' ? undefined : AggregateError,
	'%Array%': Array,
	'%ArrayBuffer%': typeof ArrayBuffer === 'undefined' ? undefined : ArrayBuffer,
	'%ArrayIteratorPrototype%': hasSymbols ? getProto([][Symbol.iterator]()) : undefined,
	'%AsyncFromSyncIteratorPrototype%': undefined,
	'%AsyncFunction%': getEvalledConstructor('async function () {}'),
	'%AsyncGenerator%': asyncGenFunctionPrototype,
	'%AsyncGeneratorFunction%': asyncGenFunction,
	'%AsyncIteratorPrototype%': asyncGenPrototype ? getProto(asyncGenPrototype) : undefined,
	'%Atomics%': typeof Atomics === 'undefined' ? undefined : Atomics,
	'%BigInt%': typeof BigInt === 'undefined' ? undefined : BigInt,
	'%Boolean%': Boolean,
	'%DataView%': typeof DataView === 'undefined' ? undefined : DataView,
	'%Date%': Date,
	'%decodeURI%': decodeURI,
	'%decodeURIComponent%': decodeURIComponent,
	'%encodeURI%': encodeURI,
	'%encodeURIComponent%': encodeURIComponent,
	'%Error%': Error,
	'%eval%': eval, // eslint-disable-line no-eval
	'%EvalError%': EvalError,
	'%Float32Array%': typeof Float32Array === 'undefined' ? undefined : Float32Array,
	'%Float64Array%': typeof Float64Array === 'undefined' ? undefined : Float64Array,
	'%FinalizationRegistry%': typeof FinalizationRegistry === 'undefined' ? undefined : FinalizationRegistry,
	'%Function%': $Function,
	'%GeneratorFunction%': getEvalledConstructor('function* () {}'),
	'%Int8Array%': typeof Int8Array === 'undefined' ? undefined : Int8Array,
	'%Int16Array%': typeof Int16Array === 'undefined' ? undefined : Int16Array,
	'%Int32Array%': typeof Int32Array === 'undefined' ? undefined : Int32Array,
	'%isFinite%': isFinite,
	'%isNaN%': isNaN,
	'%IteratorPrototype%': hasSymbols ? getProto(getProto([][Symbol.iterator]())) : undefined,
	'%JSON%': typeof JSON === 'object' ? JSON : undefined,
	'%Map%': typeof Map === 'undefined' ? undefined : Map,
	'%MapIteratorPrototype%': typeof Map === 'undefined' || !hasSymbols ? undefined : getProto(new Map()[Symbol.iterator]()),
	'%Math%': Math,
	'%Number%': Number,
	'%Object%': Object,
	'%parseFloat%': parseFloat,
	'%parseInt%': parseInt,
	'%Promise%': typeof Promise === 'undefined' ? undefined : Promise,
	'%Proxy%': typeof Proxy === 'undefined' ? undefined : Proxy,
	'%RangeError%': RangeError,
	'%ReferenceError%': ReferenceError,
	'%Reflect%': typeof Reflect === 'undefined' ? undefined : Reflect,
	'%RegExp%': RegExp,
	'%Set%': typeof Set === 'undefined' ? undefined : Set,
	'%SetIteratorPrototype%': typeof Set === 'undefined' || !hasSymbols ? undefined : getProto(new Set()[Symbol.iterator]()),
	'%SharedArrayBuffer%': typeof SharedArrayBuffer === 'undefined' ? undefined : SharedArrayBuffer,
	'%String%': String,
	'%StringIteratorPrototype%': hasSymbols ? getProto(''[Symbol.iterator]()) : undefined,
	'%Symbol%': hasSymbols ? Symbol : undefined,
	'%SyntaxError%': $SyntaxError,
	'%ThrowTypeError%': ThrowTypeError,
	'%TypedArray%': TypedArray,
	'%TypeError%': $TypeError,
	'%Uint8Array%': typeof Uint8Array === 'undefined' ? undefined : Uint8Array,
	'%Uint8ClampedArray%': typeof Uint8ClampedArray === 'undefined' ? undefined : Uint8ClampedArray,
	'%Uint16Array%': typeof Uint16Array === 'undefined' ? undefined : Uint16Array,
	'%Uint32Array%': typeof Uint32Array === 'undefined' ? undefined : Uint32Array,
	'%URIError%': URIError,
	'%WeakMap%': typeof WeakMap === 'undefined' ? undefined : WeakMap,
	'%WeakRef%': typeof WeakRef === 'undefined' ? undefined : WeakRef,
	'%WeakSet%': typeof WeakSet === 'undefined' ? undefined : WeakSet
};

var LEGACY_ALIASES = {
	'%ArrayBufferPrototype%': ['ArrayBuffer', 'prototype'],
	'%ArrayPrototype%': ['Array', 'prototype'],
	'%ArrayProto_entries%': ['Array', 'prototype', 'entries'],
	'%ArrayProto_forEach%': ['Array', 'prototype', 'forEach'],
	'%ArrayProto_keys%': ['Array', 'prototype', 'keys'],
	'%ArrayProto_values%': ['Array', 'prototype', 'values'],
	'%AsyncFunctionPrototype%': ['AsyncFunction', 'prototype'],
	'%AsyncGenerator%': ['AsyncGeneratorFunction', 'prototype'],
	'%AsyncGeneratorPrototype%': ['AsyncGeneratorFunction', 'prototype', 'prototype'],
	'%BooleanPrototype%': ['Boolean', 'prototype'],
	'%DataViewPrototype%': ['DataView', 'prototype'],
	'%DatePrototype%': ['Date', 'prototype'],
	'%ErrorPrototype%': ['Error', 'prototype'],
	'%EvalErrorPrototype%': ['EvalError', 'prototype'],
	'%Float32ArrayPrototype%': ['Float32Array', 'prototype'],
	'%Float64ArrayPrototype%': ['Float64Array', 'prototype'],
	'%FunctionPrototype%': ['Function', 'prototype'],
	'%Generator%': ['GeneratorFunction', 'prototype'],
	'%GeneratorPrototype%': ['GeneratorFunction', 'prototype', 'prototype'],
	'%Int8ArrayPrototype%': ['Int8Array', 'prototype'],
	'%Int16ArrayPrototype%': ['Int16Array', 'prototype'],
	'%Int32ArrayPrototype%': ['Int32Array', 'prototype'],
	'%JSONParse%': ['JSON', 'parse'],
	'%JSONStringify%': ['JSON', 'stringify'],
	'%MapPrototype%': ['Map', 'prototype'],
	'%NumberPrototype%': ['Number', 'prototype'],
	'%ObjectPrototype%': ['Object', 'prototype'],
	'%ObjProto_toString%': ['Object', 'prototype', 'toString'],
	'%ObjProto_valueOf%': ['Object', 'prototype', 'valueOf'],
	'%PromisePrototype%': ['Promise', 'prototype'],
	'%PromiseProto_then%': ['Promise', 'prototype', 'then'],
	'%Promise_all%': ['Promise', 'all'],
	'%Promise_reject%': ['Promise', 'reject'],
	'%Promise_resolve%': ['Promise', 'resolve'],
	'%RangeErrorPrototype%': ['RangeError', 'prototype'],
	'%ReferenceErrorPrototype%': ['ReferenceError', 'prototype'],
	'%RegExpPrototype%': ['RegExp', 'prototype'],
	'%SetPrototype%': ['Set', 'prototype'],
	'%SharedArrayBufferPrototype%': ['SharedArrayBuffer', 'prototype'],
	'%StringPrototype%': ['String', 'prototype'],
	'%SymbolPrototype%': ['Symbol', 'prototype'],
	'%SyntaxErrorPrototype%': ['SyntaxError', 'prototype'],
	'%TypedArrayPrototype%': ['TypedArray', 'prototype'],
	'%TypeErrorPrototype%': ['TypeError', 'prototype'],
	'%Uint8ArrayPrototype%': ['Uint8Array', 'prototype'],
	'%Uint8ClampedArrayPrototype%': ['Uint8ClampedArray', 'prototype'],
	'%Uint16ArrayPrototype%': ['Uint16Array', 'prototype'],
	'%Uint32ArrayPrototype%': ['Uint32Array', 'prototype'],
	'%URIErrorPrototype%': ['URIError', 'prototype'],
	'%WeakMapPrototype%': ['WeakMap', 'prototype'],
	'%WeakSetPrototype%': ['WeakSet', 'prototype']
};

var bind = __webpack_require__(/*! function-bind */ "./glo/modules/error/node_modules/function-bind/index.js");
var hasOwn = __webpack_require__(/*! has */ "./glo/modules/error/node_modules/has/src/index.js");
var $concat = bind.call(Function.call, Array.prototype.concat);
var $spliceApply = bind.call(Function.apply, Array.prototype.splice);
var $replace = bind.call(Function.call, String.prototype.replace);

/* adapted from https://github.com/lodash/lodash/blob/4.17.15/dist/lodash.js#L6735-L6744 */
var rePropName = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g;
var reEscapeChar = /\\(\\)?/g; /** Used to match backslashes in property paths. */
var stringToPath = function stringToPath(string) {
	var result = [];
	$replace(string, rePropName, function (match, number, quote, subString) {
		result[result.length] = quote ? $replace(subString, reEscapeChar, '$1') : number || match;
	});
	return result;
};
/* end adaptation */

var getBaseIntrinsic = function getBaseIntrinsic(name, allowMissing) {
	var intrinsicName = name;
	var alias;
	if (hasOwn(LEGACY_ALIASES, intrinsicName)) {
		alias = LEGACY_ALIASES[intrinsicName];
		intrinsicName = '%' + alias[0] + '%';
	}

	if (hasOwn(INTRINSICS, intrinsicName)) {
		var value = INTRINSICS[intrinsicName];
		if (typeof value === 'undefined' && !allowMissing) {
			throw new $TypeError('intrinsic ' + name + ' exists, but is not available. Please file an issue!');
		}

		return {
			alias: alias,
			name: intrinsicName,
			value: value
		};
	}

	throw new $SyntaxError('intrinsic ' + name + ' does not exist!');
};

module.exports = function GetIntrinsic(name, allowMissing) {
	if (typeof name !== 'string' || name.length === 0) {
		throw new $TypeError('intrinsic name must be a non-empty string');
	}
	if (arguments.length > 1 && typeof allowMissing !== 'boolean') {
		throw new $TypeError('"allowMissing" argument must be a boolean');
	}

	var parts = stringToPath(name);
	var intrinsicBaseName = parts.length > 0 ? parts[0] : '';

	var intrinsic = getBaseIntrinsic('%' + intrinsicBaseName + '%', allowMissing);
	var intrinsicRealName = intrinsic.name;
	var value = intrinsic.value;
	var skipFurtherCaching = false;

	var alias = intrinsic.alias;
	if (alias) {
		intrinsicBaseName = alias[0];
		$spliceApply(parts, $concat([0, 1], alias));
	}

	for (var i = 1, isOwn = true; i < parts.length; i += 1) {
		var part = parts[i];
		if (part === 'constructor' || !isOwn) {
			skipFurtherCaching = true;
		}

		intrinsicBaseName += '.' + part;
		intrinsicRealName = '%' + intrinsicBaseName + '%';

		if (hasOwn(INTRINSICS, intrinsicRealName)) {
			value = INTRINSICS[intrinsicRealName];
		} else if (value != null) {
			if ($gOPD && (i + 1) >= parts.length) {
				var desc = $gOPD(value, part);
				isOwn = !!desc;

				if (!allowMissing && !(part in value)) {
					throw new $TypeError('base intrinsic for ' + name + ' exists, but the property is not available.');
				}
				// By convention, when a data property is converted to an accessor
				// property to emulate a data property that does not suffer from
				// the override mistake, that accessor's getter is marked with
				// an `originalValue` property. Here, when we detect this, we
				// uphold the illusion by pretending to see that original data
				// property, i.e., returning the value rather than the getter
				// itself.
				if (isOwn && 'get' in desc && !('originalValue' in desc.get)) {
					value = desc.get;
				} else {
					value = value[part];
				}
			} else {
				isOwn = hasOwn(value, part);
				value = value[part];
			}

			if (isOwn && !skipFurtherCaching) {
				INTRINSICS[intrinsicRealName] = value;
			}
		}
	}
	return value;
};


/***/ }),

/***/ "./glo/modules/error/node_modules/has-symbols/index.js":
/*!*************************************************************!*\
  !*** ./glo/modules/error/node_modules/has-symbols/index.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

var origSymbol = global.Symbol;
var hasSymbolSham = __webpack_require__(/*! ./shams */ "./glo/modules/error/node_modules/has-symbols/shams.js");

module.exports = function hasNativeSymbols() {
	if (typeof origSymbol !== 'function') { return false; }
	if (typeof Symbol !== 'function') { return false; }
	if (typeof origSymbol('foo') !== 'symbol') { return false; }
	if (typeof Symbol('bar') !== 'symbol') { return false; }

	return hasSymbolSham();
};

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../webapp/node_modules/webpack/buildin/global.js */ "./glo/modules/webapp/node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./glo/modules/error/node_modules/has-symbols/shams.js":
/*!*************************************************************!*\
  !*** ./glo/modules/error/node_modules/has-symbols/shams.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* eslint complexity: [2, 18], max-statements: [2, 33] */
module.exports = function hasSymbols() {
	if (typeof Symbol !== 'function' || typeof Object.getOwnPropertySymbols !== 'function') { return false; }
	if (typeof Symbol.iterator === 'symbol') { return true; }

	var obj = {};
	var sym = Symbol('test');
	var symObj = Object(sym);
	if (typeof sym === 'string') { return false; }

	if (Object.prototype.toString.call(sym) !== '[object Symbol]') { return false; }
	if (Object.prototype.toString.call(symObj) !== '[object Symbol]') { return false; }

	// temp disabled per https://github.com/ljharb/object.assign/issues/17
	// if (sym instanceof Symbol) { return false; }
	// temp disabled per https://github.com/WebReflection/get-own-property-symbols/issues/4
	// if (!(symObj instanceof Symbol)) { return false; }

	// if (typeof Symbol.prototype.toString !== 'function') { return false; }
	// if (String(sym) !== Symbol.prototype.toString.call(sym)) { return false; }

	var symVal = 42;
	obj[sym] = symVal;
	for (sym in obj) { return false; } // eslint-disable-line no-restricted-syntax
	if (typeof Object.keys === 'function' && Object.keys(obj).length !== 0) { return false; }

	if (typeof Object.getOwnPropertyNames === 'function' && Object.getOwnPropertyNames(obj).length !== 0) { return false; }

	var syms = Object.getOwnPropertySymbols(obj);
	if (syms.length !== 1 || syms[0] !== sym) { return false; }

	if (!Object.prototype.propertyIsEnumerable.call(obj, sym)) { return false; }

	if (typeof Object.getOwnPropertyDescriptor === 'function') {
		var descriptor = Object.getOwnPropertyDescriptor(obj, sym);
		if (descriptor.value !== symVal || descriptor.enumerable !== true) { return false; }
	}

	return true;
};


/***/ }),

/***/ "./glo/modules/error/node_modules/has/src/index.js":
/*!*********************************************************!*\
  !*** ./glo/modules/error/node_modules/has/src/index.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var bind = __webpack_require__(/*! function-bind */ "./glo/modules/error/node_modules/function-bind/index.js");

module.exports = bind.call(Function.call, Object.prototype.hasOwnProperty);


/***/ }),

/***/ "./glo/modules/error/node_modules/is-arguments/index.js":
/*!**************************************************************!*\
  !*** ./glo/modules/error/node_modules/is-arguments/index.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var hasToStringTag = typeof Symbol === 'function' && typeof Symbol.toStringTag === 'symbol';
var toStr = Object.prototype.toString;

var isStandardArguments = function isArguments(value) {
	if (hasToStringTag && value && typeof value === 'object' && Symbol.toStringTag in value) {
		return false;
	}
	return toStr.call(value) === '[object Arguments]';
};

var isLegacyArguments = function isArguments(value) {
	if (isStandardArguments(value)) {
		return true;
	}
	return value !== null &&
		typeof value === 'object' &&
		typeof value.length === 'number' &&
		value.length >= 0 &&
		toStr.call(value) !== '[object Array]' &&
		toStr.call(value.callee) === '[object Function]';
};

var supportsStandardArguments = (function () {
	return isStandardArguments(arguments);
}());

isStandardArguments.isLegacyArguments = isLegacyArguments; // for tests

module.exports = supportsStandardArguments ? isStandardArguments : isLegacyArguments;


/***/ }),

/***/ "./glo/modules/error/node_modules/is-bigint/index.js":
/*!***********************************************************!*\
  !*** ./glo/modules/error/node_modules/is-bigint/index.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (typeof BigInt === 'function') {
	var bigIntValueOf = BigInt.prototype.valueOf;
	var tryBigInt = function tryBigIntObject(value) {
		try {
			bigIntValueOf.call(value);
			return true;
		} catch (e) {
		}
		return false;
	};

	module.exports = function isBigInt(value) {
		if (
			value === null
			|| typeof value === 'undefined'
			|| typeof value === 'boolean'
			|| typeof value === 'string'
			|| typeof value === 'number'
			|| typeof value === 'symbol'
			|| typeof value === 'function'
		) {
			return false;
		}
		if (typeof value === 'bigint') { // eslint-disable-line valid-typeof
			return true;
		}

		return tryBigInt(value);
	};
} else {
	module.exports = function isBigInt(value) {
		return  false && false;
	};
}


/***/ }),

/***/ "./glo/modules/error/node_modules/is-boolean-object/index.js":
/*!*******************************************************************!*\
  !*** ./glo/modules/error/node_modules/is-boolean-object/index.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var boolToStr = Boolean.prototype.toString;

var tryBooleanObject = function booleanBrandCheck(value) {
	try {
		boolToStr.call(value);
		return true;
	} catch (e) {
		return false;
	}
};
var toStr = Object.prototype.toString;
var boolClass = '[object Boolean]';
var hasToStringTag = typeof Symbol === 'function' && typeof Symbol.toStringTag === 'symbol';

module.exports = function isBoolean(value) {
	if (typeof value === 'boolean') {
		return true;
	}
	if (value === null || typeof value !== 'object') {
		return false;
	}
	return hasToStringTag && Symbol.toStringTag in value ? tryBooleanObject(value) : toStr.call(value) === boolClass;
};


/***/ }),

/***/ "./glo/modules/error/node_modules/is-date-object/index.js":
/*!****************************************************************!*\
  !*** ./glo/modules/error/node_modules/is-date-object/index.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var getDay = Date.prototype.getDay;
var tryDateObject = function tryDateGetDayCall(value) {
	try {
		getDay.call(value);
		return true;
	} catch (e) {
		return false;
	}
};

var toStr = Object.prototype.toString;
var dateClass = '[object Date]';
var hasToStringTag = typeof Symbol === 'function' && typeof Symbol.toStringTag === 'symbol';

module.exports = function isDateObject(value) {
	if (typeof value !== 'object' || value === null) {
		return false;
	}
	return hasToStringTag ? tryDateObject(value) : toStr.call(value) === dateClass;
};


/***/ }),

/***/ "./glo/modules/error/node_modules/is-map/index.js":
/*!********************************************************!*\
  !*** ./glo/modules/error/node_modules/is-map/index.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var $Map = typeof Map === 'function' && Map.prototype ? Map : null;
var $Set = typeof Set === 'function' && Set.prototype ? Set : null;

var exported;

if (!$Map) {
	// eslint-disable-next-line no-unused-vars
	exported = function isMap(x) {
		// `Map` is not present in this environment.
		return false;
	};
}

var $mapHas = $Map ? Map.prototype.has : null;
var $setHas = $Set ? Set.prototype.has : null;
if (!exported && !$mapHas) {
	// eslint-disable-next-line no-unused-vars
	exported = function isMap(x) {
		// `Map` does not have a `has` method
		return false;
	};
}

module.exports = exported || function isMap(x) {
	if (!x || typeof x !== 'object') {
		return false;
	}
	try {
		$mapHas.call(x);
		if ($setHas) {
			try {
				$setHas.call(x);
			} catch (e) {
				return true;
			}
		}
		return x instanceof $Map; // core-js workaround, pre-v2.5.0
	} catch (e) {}
	return false;
};


/***/ }),

/***/ "./glo/modules/error/node_modules/is-number-object/index.js":
/*!******************************************************************!*\
  !*** ./glo/modules/error/node_modules/is-number-object/index.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var numToStr = Number.prototype.toString;
var tryNumberObject = function tryNumberObject(value) {
	try {
		numToStr.call(value);
		return true;
	} catch (e) {
		return false;
	}
};
var toStr = Object.prototype.toString;
var numClass = '[object Number]';
var hasToStringTag = typeof Symbol === 'function' && typeof Symbol.toStringTag === 'symbol';

module.exports = function isNumberObject(value) {
	if (typeof value === 'number') {
		return true;
	}
	if (typeof value !== 'object') {
		return false;
	}
	return hasToStringTag ? tryNumberObject(value) : toStr.call(value) === numClass;
};


/***/ }),

/***/ "./glo/modules/error/node_modules/is-regex/index.js":
/*!**********************************************************!*\
  !*** ./glo/modules/error/node_modules/is-regex/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var hasSymbols = __webpack_require__(/*! has-symbols */ "./glo/modules/error/node_modules/has-symbols/index.js")();
var hasToStringTag = hasSymbols && typeof Symbol.toStringTag === 'symbol';
var hasOwnProperty;
var regexExec;
var isRegexMarker;
var badStringifier;

if (hasToStringTag) {
	hasOwnProperty = Function.call.bind(Object.prototype.hasOwnProperty);
	regexExec = Function.call.bind(RegExp.prototype.exec);
	isRegexMarker = {};

	var throwRegexMarker = function () {
		throw isRegexMarker;
	};
	badStringifier = {
		toString: throwRegexMarker,
		valueOf: throwRegexMarker
	};

	if (typeof Symbol.toPrimitive === 'symbol') {
		badStringifier[Symbol.toPrimitive] = throwRegexMarker;
	}
}

var toStr = Object.prototype.toString;
var gOPD = Object.getOwnPropertyDescriptor;
var regexClass = '[object RegExp]';

module.exports = hasToStringTag
	// eslint-disable-next-line consistent-return
	? function isRegex(value) {
		if (!value || typeof value !== 'object') {
			return false;
		}

		var descriptor = gOPD(value, 'lastIndex');
		var hasLastIndexDataProperty = descriptor && hasOwnProperty(descriptor, 'value');
		if (!hasLastIndexDataProperty) {
			return false;
		}

		try {
			regexExec(value, badStringifier);
		} catch (e) {
			return e === isRegexMarker;
		}
	}
	: function isRegex(value) {
		// In older browsers, typeof regex incorrectly returns 'function'
		if (!value || (typeof value !== 'object' && typeof value !== 'function')) {
			return false;
		}

		return toStr.call(value) === regexClass;
	};


/***/ }),

/***/ "./glo/modules/error/node_modules/is-set/index.js":
/*!********************************************************!*\
  !*** ./glo/modules/error/node_modules/is-set/index.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var $Map = typeof Map === 'function' && Map.prototype ? Map : null;
var $Set = typeof Set === 'function' && Set.prototype ? Set : null;

var exported;

if (!$Set) {
	// eslint-disable-next-line no-unused-vars
	exported = function isSet(x) {
		// `Set` is not present in this environment.
		return false;
	};
}

var $mapHas = $Map ? Map.prototype.has : null;
var $setHas = $Set ? Set.prototype.has : null;
if (!exported && !$setHas) {
	// eslint-disable-next-line no-unused-vars
	exported = function isSet(x) {
		// `Set` does not have a `has` method
		return false;
	};
}

module.exports = exported || function isSet(x) {
	if (!x || typeof x !== 'object') {
		return false;
	}
	try {
		$setHas.call(x);
		if ($mapHas) {
			try {
				$mapHas.call(x);
			} catch (e) {
				return true;
			}
		}
		return x instanceof $Set; // core-js workaround, pre-v2.5.0
	} catch (e) {}
	return false;
};


/***/ }),

/***/ "./glo/modules/error/node_modules/is-string/index.js":
/*!***********************************************************!*\
  !*** ./glo/modules/error/node_modules/is-string/index.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var strValue = String.prototype.valueOf;
var tryStringObject = function tryStringObject(value) {
	try {
		strValue.call(value);
		return true;
	} catch (e) {
		return false;
	}
};
var toStr = Object.prototype.toString;
var strClass = '[object String]';
var hasToStringTag = typeof Symbol === 'function' && typeof Symbol.toStringTag === 'symbol';

module.exports = function isString(value) {
	if (typeof value === 'string') {
		return true;
	}
	if (typeof value !== 'object') {
		return false;
	}
	return hasToStringTag ? tryStringObject(value) : toStr.call(value) === strClass;
};


/***/ }),

/***/ "./glo/modules/error/node_modules/is-symbol/index.js":
/*!***********************************************************!*\
  !*** ./glo/modules/error/node_modules/is-symbol/index.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var toStr = Object.prototype.toString;
var hasSymbols = __webpack_require__(/*! has-symbols */ "./glo/modules/error/node_modules/has-symbols/index.js")();

if (hasSymbols) {
	var symToStr = Symbol.prototype.toString;
	var symStringRegex = /^Symbol\(.*\)$/;
	var isSymbolObject = function isRealSymbolObject(value) {
		if (typeof value.valueOf() !== 'symbol') {
			return false;
		}
		return symStringRegex.test(symToStr.call(value));
	};

	module.exports = function isSymbol(value) {
		if (typeof value === 'symbol') {
			return true;
		}
		if (toStr.call(value) !== '[object Symbol]') {
			return false;
		}
		try {
			return isSymbolObject(value);
		} catch (e) {
			return false;
		}
	};
} else {

	module.exports = function isSymbol(value) {
		// this environment does not support Symbols.
		return  false && false;
	};
}


/***/ }),

/***/ "./glo/modules/error/node_modules/is-typed-array/index.js":
/*!****************************************************************!*\
  !*** ./glo/modules/error/node_modules/is-typed-array/index.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

var forEach = __webpack_require__(/*! foreach */ "./glo/modules/error/node_modules/foreach/index.js");
var availableTypedArrays = __webpack_require__(/*! available-typed-arrays */ "./glo/modules/error/node_modules/available-typed-arrays/index.js");
var callBound = __webpack_require__(/*! es-abstract/helpers/callBound */ "./glo/modules/error/node_modules/es-abstract/helpers/callBound.js");

var $toString = callBound('Object.prototype.toString');
var hasSymbols = __webpack_require__(/*! has-symbols */ "./glo/modules/error/node_modules/has-symbols/index.js")();
var hasToStringTag = hasSymbols && typeof Symbol.toStringTag === 'symbol';

var typedArrays = availableTypedArrays();

var $indexOf = callBound('Array.prototype.indexOf', true) || function indexOf(array, value) {
	for (var i = 0; i < array.length; i += 1) {
		if (array[i] === value) {
			return i;
		}
	}
	return -1;
};
var $slice = callBound('String.prototype.slice');
var toStrTags = {};
var gOPD = __webpack_require__(/*! es-abstract/helpers/getOwnPropertyDescriptor */ "./glo/modules/error/node_modules/es-abstract/helpers/getOwnPropertyDescriptor.js");
var getPrototypeOf = Object.getPrototypeOf; // require('getprototypeof');
if (hasToStringTag && gOPD && getPrototypeOf) {
	forEach(typedArrays, function (typedArray) {
		var arr = new global[typedArray]();
		if (!(Symbol.toStringTag in arr)) {
			throw new EvalError('this engine has support for Symbol.toStringTag, but ' + typedArray + ' does not have the property! Please report this.');
		}
		var proto = getPrototypeOf(arr);
		var descriptor = gOPD(proto, Symbol.toStringTag);
		if (!descriptor) {
			var superProto = getPrototypeOf(proto);
			descriptor = gOPD(superProto, Symbol.toStringTag);
		}
		toStrTags[typedArray] = descriptor.get;
	});
}

var tryTypedArrays = function tryAllTypedArrays(value) {
	var anyTrue = false;
	forEach(toStrTags, function (getter, typedArray) {
		if (!anyTrue) {
			try {
				anyTrue = getter.call(value) === typedArray;
			} catch (e) { /**/ }
		}
	});
	return anyTrue;
};

module.exports = function isTypedArray(value) {
	if (!value || typeof value !== 'object') { return false; }
	if (!hasToStringTag) {
		var tag = $slice($toString(value), 8, -1);
		return $indexOf(typedArrays, tag) > -1;
	}
	if (!gOPD) { return false; }
	return tryTypedArrays(value);
};

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../webapp/node_modules/webpack/buildin/global.js */ "./glo/modules/webapp/node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./glo/modules/error/node_modules/is-weakmap/index.js":
/*!************************************************************!*\
  !*** ./glo/modules/error/node_modules/is-weakmap/index.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var $WeakMap = typeof WeakMap === 'function' && WeakMap.prototype ? WeakMap : null;
var $WeakSet = typeof WeakSet === 'function' && WeakSet.prototype ? WeakSet : null;

var exported;

if (!$WeakMap) {
	// eslint-disable-next-line no-unused-vars
	exported = function isWeakMap(x) {
		// `WeakMap` is not present in this environment.
		return false;
	};
}

var $mapHas = $WeakMap ? $WeakMap.prototype.has : null;
var $setHas = $WeakSet ? $WeakSet.prototype.has : null;
if (!exported && !$mapHas) {
	// eslint-disable-next-line no-unused-vars
	exported = function isWeakMap(x) {
		// `WeakMap` does not have a `has` method
		return false;
	};
}

module.exports = exported || function isWeakMap(x) {
	if (!x || typeof x !== 'object') {
		return false;
	}
	try {
		$mapHas.call(x, $mapHas);
		if ($setHas) {
			try {
				$setHas.call(x, $setHas);
			} catch (e) {
				return true;
			}
		}
		return x instanceof $WeakMap; // core-js workaround, pre-v3
	} catch (e) {}
	return false;
};


/***/ }),

/***/ "./glo/modules/error/node_modules/is-weakset/index.js":
/*!************************************************************!*\
  !*** ./glo/modules/error/node_modules/is-weakset/index.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var $WeakMap = typeof WeakMap === 'function' && WeakMap.prototype ? WeakMap : null;
var $WeakSet = typeof WeakSet === 'function' && WeakSet.prototype ? WeakSet : null;

var exported;

if (!$WeakMap) {
	// eslint-disable-next-line no-unused-vars
	exported = function isWeakSet(x) {
		// `WeakSet` is not present in this environment.
		return false;
	};
}

var $mapHas = $WeakMap ? $WeakMap.prototype.has : null;
var $setHas = $WeakSet ? $WeakSet.prototype.has : null;
if (!exported && !$setHas) {
	// eslint-disable-next-line no-unused-vars
	module.exports = function isWeakSet(x) {
		// `WeakSet` does not have a `has` method
		return false;
	};
}

module.exports = exported || function isWeakSet(x) {
	if (!x || typeof x !== 'object') {
		return false;
	}
	try {
		$setHas.call(x, $setHas);
		if ($mapHas) {
			try {
				$mapHas.call(x, $mapHas);
			} catch (e) {
				return true;
			}
		}
		return x instanceof $WeakSet; // core-js workaround, pre-v3
	} catch (e) {}
	return false;
};


/***/ }),

/***/ "./glo/modules/error/node_modules/isarray/index.js":
/*!*********************************************************!*\
  !*** ./glo/modules/error/node_modules/isarray/index.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = Array.isArray || function (arr) {
  return toString.call(arr) == '[object Array]';
};


/***/ }),

/***/ "./glo/modules/error/node_modules/object-inspect/index.js":
/*!****************************************************************!*\
  !*** ./glo/modules/error/node_modules/object-inspect/index.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var hasMap = typeof Map === 'function' && Map.prototype;
var mapSizeDescriptor = Object.getOwnPropertyDescriptor && hasMap ? Object.getOwnPropertyDescriptor(Map.prototype, 'size') : null;
var mapSize = hasMap && mapSizeDescriptor && typeof mapSizeDescriptor.get === 'function' ? mapSizeDescriptor.get : null;
var mapForEach = hasMap && Map.prototype.forEach;
var hasSet = typeof Set === 'function' && Set.prototype;
var setSizeDescriptor = Object.getOwnPropertyDescriptor && hasSet ? Object.getOwnPropertyDescriptor(Set.prototype, 'size') : null;
var setSize = hasSet && setSizeDescriptor && typeof setSizeDescriptor.get === 'function' ? setSizeDescriptor.get : null;
var setForEach = hasSet && Set.prototype.forEach;
var hasWeakMap = typeof WeakMap === 'function' && WeakMap.prototype;
var weakMapHas = hasWeakMap ? WeakMap.prototype.has : null;
var hasWeakSet = typeof WeakSet === 'function' && WeakSet.prototype;
var weakSetHas = hasWeakSet ? WeakSet.prototype.has : null;
var booleanValueOf = Boolean.prototype.valueOf;
var objectToString = Object.prototype.toString;
var functionToString = Function.prototype.toString;
var match = String.prototype.match;
var bigIntValueOf = typeof BigInt === 'function' ? BigInt.prototype.valueOf : null;

var inspectCustom = __webpack_require__(/*! ./util.inspect */ 0).custom;
var inspectSymbol = inspectCustom && isSymbol(inspectCustom) ? inspectCustom : null;

module.exports = function inspect_(obj, options, depth, seen) {
    var opts = options || {};

    if (has(opts, 'quoteStyle') && (opts.quoteStyle !== 'single' && opts.quoteStyle !== 'double')) {
        throw new TypeError('option "quoteStyle" must be "single" or "double"');
    }
    if (
        has(opts, 'maxStringLength') && (typeof opts.maxStringLength === 'number'
            ? opts.maxStringLength < 0 && opts.maxStringLength !== Infinity
            : opts.maxStringLength !== null
        )
    ) {
        throw new TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');
    }
    var customInspect = has(opts, 'customInspect') ? opts.customInspect : true;
    if (typeof customInspect !== 'boolean') {
        throw new TypeError('option "customInspect", if provided, must be `true` or `false`');
    }

    if (
        has(opts, 'indent')
        && opts.indent !== null
        && opts.indent !== '\t'
        && !(parseInt(opts.indent, 10) === opts.indent && opts.indent > 0)
    ) {
        throw new TypeError('options "indent" must be "\\t", an integer > 0, or `null`');
    }

    if (typeof obj === 'undefined') {
        return 'undefined';
    }
    if (obj === null) {
        return 'null';
    }
    if (typeof obj === 'boolean') {
        return obj ? 'true' : 'false';
    }

    if (typeof obj === 'string') {
        return inspectString(obj, opts);
    }
    if (typeof obj === 'number') {
        if (obj === 0) {
            return Infinity / obj > 0 ? '0' : '-0';
        }
        return String(obj);
    }
    if (typeof obj === 'bigint') { // eslint-disable-line valid-typeof
        return String(obj) + 'n';
    }

    var maxDepth = typeof opts.depth === 'undefined' ? 5 : opts.depth;
    if (typeof depth === 'undefined') { depth = 0; }
    if (depth >= maxDepth && maxDepth > 0 && typeof obj === 'object') {
        return isArray(obj) ? '[Array]' : '[Object]';
    }

    var indent = getIndent(opts, depth);

    if (typeof seen === 'undefined') {
        seen = [];
    } else if (indexOf(seen, obj) >= 0) {
        return '[Circular]';
    }

    function inspect(value, from, noIndent) {
        if (from) {
            seen = seen.slice();
            seen.push(from);
        }
        if (noIndent) {
            var newOpts = {
                depth: opts.depth
            };
            if (has(opts, 'quoteStyle')) {
                newOpts.quoteStyle = opts.quoteStyle;
            }
            return inspect_(value, newOpts, depth + 1, seen);
        }
        return inspect_(value, opts, depth + 1, seen);
    }

    if (typeof obj === 'function') {
        var name = nameOf(obj);
        return '[Function' + (name ? ': ' + name : ' (anonymous)') + ']';
    }
    if (isSymbol(obj)) {
        var symString = Symbol.prototype.toString.call(obj);
        return typeof obj === 'object' ? markBoxed(symString) : symString;
    }
    if (isElement(obj)) {
        var s = '<' + String(obj.nodeName).toLowerCase();
        var attrs = obj.attributes || [];
        for (var i = 0; i < attrs.length; i++) {
            s += ' ' + attrs[i].name + '=' + wrapQuotes(quote(attrs[i].value), 'double', opts);
        }
        s += '>';
        if (obj.childNodes && obj.childNodes.length) { s += '...'; }
        s += '</' + String(obj.nodeName).toLowerCase() + '>';
        return s;
    }
    if (isArray(obj)) {
        if (obj.length === 0) { return '[]'; }
        var xs = arrObjKeys(obj, inspect);
        if (indent && !singleLineValues(xs)) {
            return '[' + indentedJoin(xs, indent) + ']';
        }
        return '[ ' + xs.join(', ') + ' ]';
    }
    if (isError(obj)) {
        var parts = arrObjKeys(obj, inspect);
        if (parts.length === 0) { return '[' + String(obj) + ']'; }
        return '{ [' + String(obj) + '] ' + parts.join(', ') + ' }';
    }
    if (typeof obj === 'object' && customInspect) {
        if (inspectSymbol && typeof obj[inspectSymbol] === 'function') {
            return obj[inspectSymbol]();
        } else if (typeof obj.inspect === 'function') {
            return obj.inspect();
        }
    }
    if (isMap(obj)) {
        var mapParts = [];
        mapForEach.call(obj, function (value, key) {
            mapParts.push(inspect(key, obj, true) + ' => ' + inspect(value, obj));
        });
        return collectionOf('Map', mapSize.call(obj), mapParts, indent);
    }
    if (isSet(obj)) {
        var setParts = [];
        setForEach.call(obj, function (value) {
            setParts.push(inspect(value, obj));
        });
        return collectionOf('Set', setSize.call(obj), setParts, indent);
    }
    if (isWeakMap(obj)) {
        return weakCollectionOf('WeakMap');
    }
    if (isWeakSet(obj)) {
        return weakCollectionOf('WeakSet');
    }
    if (isNumber(obj)) {
        return markBoxed(inspect(Number(obj)));
    }
    if (isBigInt(obj)) {
        return markBoxed(inspect(bigIntValueOf.call(obj)));
    }
    if (isBoolean(obj)) {
        return markBoxed(booleanValueOf.call(obj));
    }
    if (isString(obj)) {
        return markBoxed(inspect(String(obj)));
    }
    if (!isDate(obj) && !isRegExp(obj)) {
        var ys = arrObjKeys(obj, inspect);
        if (ys.length === 0) { return '{}'; }
        if (indent) {
            return '{' + indentedJoin(ys, indent) + '}';
        }
        return '{ ' + ys.join(', ') + ' }';
    }
    return String(obj);
};

function wrapQuotes(s, defaultStyle, opts) {
    var quoteChar = (opts.quoteStyle || defaultStyle) === 'double' ? '"' : "'";
    return quoteChar + s + quoteChar;
}

function quote(s) {
    return String(s).replace(/"/g, '&quot;');
}

function isArray(obj) { return toStr(obj) === '[object Array]'; }
function isDate(obj) { return toStr(obj) === '[object Date]'; }
function isRegExp(obj) { return toStr(obj) === '[object RegExp]'; }
function isError(obj) { return toStr(obj) === '[object Error]'; }
function isSymbol(obj) { return toStr(obj) === '[object Symbol]'; }
function isString(obj) { return toStr(obj) === '[object String]'; }
function isNumber(obj) { return toStr(obj) === '[object Number]'; }
function isBigInt(obj) { return toStr(obj) === '[object BigInt]'; }
function isBoolean(obj) { return toStr(obj) === '[object Boolean]'; }

var hasOwn = Object.prototype.hasOwnProperty || function (key) { return key in this; };
function has(obj, key) {
    return hasOwn.call(obj, key);
}

function toStr(obj) {
    return objectToString.call(obj);
}

function nameOf(f) {
    if (f.name) { return f.name; }
    var m = match.call(functionToString.call(f), /^function\s*([\w$]+)/);
    if (m) { return m[1]; }
    return null;
}

function indexOf(xs, x) {
    if (xs.indexOf) { return xs.indexOf(x); }
    for (var i = 0, l = xs.length; i < l; i++) {
        if (xs[i] === x) { return i; }
    }
    return -1;
}

function isMap(x) {
    if (!mapSize || !x || typeof x !== 'object') {
        return false;
    }
    try {
        mapSize.call(x);
        try {
            setSize.call(x);
        } catch (s) {
            return true;
        }
        return x instanceof Map; // core-js workaround, pre-v2.5.0
    } catch (e) {}
    return false;
}

function isWeakMap(x) {
    if (!weakMapHas || !x || typeof x !== 'object') {
        return false;
    }
    try {
        weakMapHas.call(x, weakMapHas);
        try {
            weakSetHas.call(x, weakSetHas);
        } catch (s) {
            return true;
        }
        return x instanceof WeakMap; // core-js workaround, pre-v2.5.0
    } catch (e) {}
    return false;
}

function isSet(x) {
    if (!setSize || !x || typeof x !== 'object') {
        return false;
    }
    try {
        setSize.call(x);
        try {
            mapSize.call(x);
        } catch (m) {
            return true;
        }
        return x instanceof Set; // core-js workaround, pre-v2.5.0
    } catch (e) {}
    return false;
}

function isWeakSet(x) {
    if (!weakSetHas || !x || typeof x !== 'object') {
        return false;
    }
    try {
        weakSetHas.call(x, weakSetHas);
        try {
            weakMapHas.call(x, weakMapHas);
        } catch (s) {
            return true;
        }
        return x instanceof WeakSet; // core-js workaround, pre-v2.5.0
    } catch (e) {}
    return false;
}

function isElement(x) {
    if (!x || typeof x !== 'object') { return false; }
    if (typeof HTMLElement !== 'undefined' && x instanceof HTMLElement) {
        return true;
    }
    return typeof x.nodeName === 'string' && typeof x.getAttribute === 'function';
}

function inspectString(str, opts) {
    if (str.length > opts.maxStringLength) {
        var remaining = str.length - opts.maxStringLength;
        var trailer = '... ' + remaining + ' more character' + (remaining > 1 ? 's' : '');
        return inspectString(str.slice(0, opts.maxStringLength), opts) + trailer;
    }
    // eslint-disable-next-line no-control-regex
    var s = str.replace(/(['\\])/g, '\\$1').replace(/[\x00-\x1f]/g, lowbyte);
    return wrapQuotes(s, 'single', opts);
}

function lowbyte(c) {
    var n = c.charCodeAt(0);
    var x = {
        8: 'b', 9: 't', 10: 'n', 12: 'f', 13: 'r'
    }[n];
    if (x) { return '\\' + x; }
    return '\\x' + (n < 0x10 ? '0' : '') + n.toString(16);
}

function markBoxed(str) {
    return 'Object(' + str + ')';
}

function weakCollectionOf(type) {
    return type + ' { ? }';
}

function collectionOf(type, size, entries, indent) {
    var joinedEntries = indent ? indentedJoin(entries, indent) : entries.join(', ');
    return type + ' (' + size + ') {' + joinedEntries + '}';
}

function singleLineValues(xs) {
    for (var i = 0; i < xs.length; i++) {
        if (indexOf(xs[i], '\n') >= 0) {
            return false;
        }
    }
    return true;
}

function getIndent(opts, depth) {
    var baseIndent;
    if (opts.indent === '\t') {
        baseIndent = '\t';
    } else if (typeof opts.indent === 'number' && opts.indent > 0) {
        baseIndent = Array(opts.indent + 1).join(' ');
    } else {
        return null;
    }
    return {
        base: baseIndent,
        prev: Array(depth + 1).join(baseIndent)
    };
}

function indentedJoin(xs, indent) {
    if (xs.length === 0) { return ''; }
    var lineJoiner = '\n' + indent.prev + indent.base;
    return lineJoiner + xs.join(',' + lineJoiner) + '\n' + indent.prev;
}

function arrObjKeys(obj, inspect) {
    var isArr = isArray(obj);
    var xs = [];
    if (isArr) {
        xs.length = obj.length;
        for (var i = 0; i < obj.length; i++) {
            xs[i] = has(obj, i) ? inspect(obj[i], obj) : '';
        }
    }
    for (var key in obj) { // eslint-disable-line no-restricted-syntax
        if (!has(obj, key)) { continue; } // eslint-disable-line no-restricted-syntax, no-continue
        if (isArr && String(Number(key)) === key && key < obj.length) { continue; } // eslint-disable-line no-restricted-syntax, no-continue
        if ((/[^\w$]/).test(key)) {
            xs.push(inspect(key, obj) + ': ' + inspect(obj[key], obj));
        } else {
            xs.push(key + ': ' + inspect(obj[key], obj));
        }
    }
    return xs;
}


/***/ }),

/***/ "./glo/modules/error/node_modules/object-is/implementation.js":
/*!********************************************************************!*\
  !*** ./glo/modules/error/node_modules/object-is/implementation.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var numberIsNaN = function (value) {
	return value !== value;
};

module.exports = function is(a, b) {
	if (a === 0 && b === 0) {
		return 1 / a === 1 / b;
	}
	if (a === b) {
		return true;
	}
	if (numberIsNaN(a) && numberIsNaN(b)) {
		return true;
	}
	return false;
};



/***/ }),

/***/ "./glo/modules/error/node_modules/object-is/index.js":
/*!***********************************************************!*\
  !*** ./glo/modules/error/node_modules/object-is/index.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var define = __webpack_require__(/*! define-properties */ "./glo/modules/error/node_modules/define-properties/index.js");
var callBind = __webpack_require__(/*! es-abstract/helpers/callBind */ "./glo/modules/error/node_modules/object-is/node_modules/es-abstract/helpers/callBind.js");

var implementation = __webpack_require__(/*! ./implementation */ "./glo/modules/error/node_modules/object-is/implementation.js");
var getPolyfill = __webpack_require__(/*! ./polyfill */ "./glo/modules/error/node_modules/object-is/polyfill.js");
var shim = __webpack_require__(/*! ./shim */ "./glo/modules/error/node_modules/object-is/shim.js");

var polyfill = callBind(getPolyfill(), Object);

define(polyfill, {
	getPolyfill: getPolyfill,
	implementation: implementation,
	shim: shim
});

module.exports = polyfill;


/***/ }),

/***/ "./glo/modules/error/node_modules/object-is/node_modules/es-abstract/GetIntrinsic.js":
/*!*******************************************************************************************!*\
  !*** ./glo/modules/error/node_modules/object-is/node_modules/es-abstract/GetIntrinsic.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* globals
	AggregateError,
	Atomics,
	FinalizationRegistry,
	SharedArrayBuffer,
	WeakRef,
*/

var undefined;

var $SyntaxError = SyntaxError;
var $Function = Function;
var $TypeError = TypeError;

// eslint-disable-next-line consistent-return
var getEvalledConstructor = function (expressionSyntax) {
	try {
		// eslint-disable-next-line no-new-func
		return Function('"use strict"; return (' + expressionSyntax + ').constructor;')();
	} catch (e) {}
};

var $gOPD = Object.getOwnPropertyDescriptor;
if ($gOPD) {
	try {
		$gOPD({}, '');
	} catch (e) {
		$gOPD = null; // this is IE 8, which has a broken gOPD
	}
}

var throwTypeError = function () { throw new $TypeError(); };
var ThrowTypeError = $gOPD
	? (function () {
		try {
			// eslint-disable-next-line no-unused-expressions, no-caller, no-restricted-properties
			arguments.callee; // IE 8 does not throw here
			return throwTypeError;
		} catch (calleeThrows) {
			try {
				// IE 8 throws on Object.getOwnPropertyDescriptor(arguments, '')
				return $gOPD(arguments, 'callee').get;
			} catch (gOPDthrows) {
				return throwTypeError;
			}
		}
	}())
	: throwTypeError;

var hasSymbols = __webpack_require__(/*! has-symbols */ "./glo/modules/error/node_modules/has-symbols/index.js")();

var getProto = Object.getPrototypeOf || function (x) { return x.__proto__; }; // eslint-disable-line no-proto

var asyncGenFunction = getEvalledConstructor('async function* () {}');
var asyncGenFunctionPrototype = asyncGenFunction ? asyncGenFunction.prototype : undefined;
var asyncGenPrototype = asyncGenFunctionPrototype ? asyncGenFunctionPrototype.prototype : undefined;

var TypedArray = typeof Uint8Array === 'undefined' ? undefined : getProto(Uint8Array);

var INTRINSICS = {
	'%AggregateError%': typeof AggregateError === 'undefined' ? undefined : AggregateError,
	'%Array%': Array,
	'%ArrayBuffer%': typeof ArrayBuffer === 'undefined' ? undefined : ArrayBuffer,
	'%ArrayIteratorPrototype%': hasSymbols ? getProto([][Symbol.iterator]()) : undefined,
	'%AsyncFromSyncIteratorPrototype%': undefined,
	'%AsyncFunction%': getEvalledConstructor('async function () {}'),
	'%AsyncGenerator%': asyncGenFunctionPrototype,
	'%AsyncGeneratorFunction%': asyncGenFunction,
	'%AsyncIteratorPrototype%': asyncGenPrototype ? getProto(asyncGenPrototype) : undefined,
	'%Atomics%': typeof Atomics === 'undefined' ? undefined : Atomics,
	'%BigInt%': typeof BigInt === 'undefined' ? undefined : BigInt,
	'%Boolean%': Boolean,
	'%DataView%': typeof DataView === 'undefined' ? undefined : DataView,
	'%Date%': Date,
	'%decodeURI%': decodeURI,
	'%decodeURIComponent%': decodeURIComponent,
	'%encodeURI%': encodeURI,
	'%encodeURIComponent%': encodeURIComponent,
	'%Error%': Error,
	'%eval%': eval, // eslint-disable-line no-eval
	'%EvalError%': EvalError,
	'%Float32Array%': typeof Float32Array === 'undefined' ? undefined : Float32Array,
	'%Float64Array%': typeof Float64Array === 'undefined' ? undefined : Float64Array,
	'%FinalizationRegistry%': typeof FinalizationRegistry === 'undefined' ? undefined : FinalizationRegistry,
	'%Function%': $Function,
	'%GeneratorFunction%': getEvalledConstructor('function* () {}'),
	'%Int8Array%': typeof Int8Array === 'undefined' ? undefined : Int8Array,
	'%Int16Array%': typeof Int16Array === 'undefined' ? undefined : Int16Array,
	'%Int32Array%': typeof Int32Array === 'undefined' ? undefined : Int32Array,
	'%isFinite%': isFinite,
	'%isNaN%': isNaN,
	'%IteratorPrototype%': hasSymbols ? getProto(getProto([][Symbol.iterator]())) : undefined,
	'%JSON%': typeof JSON === 'object' ? JSON : undefined,
	'%Map%': typeof Map === 'undefined' ? undefined : Map,
	'%MapIteratorPrototype%': typeof Map === 'undefined' || !hasSymbols ? undefined : getProto(new Map()[Symbol.iterator]()),
	'%Math%': Math,
	'%Number%': Number,
	'%Object%': Object,
	'%parseFloat%': parseFloat,
	'%parseInt%': parseInt,
	'%Promise%': typeof Promise === 'undefined' ? undefined : Promise,
	'%Proxy%': typeof Proxy === 'undefined' ? undefined : Proxy,
	'%RangeError%': RangeError,
	'%ReferenceError%': ReferenceError,
	'%Reflect%': typeof Reflect === 'undefined' ? undefined : Reflect,
	'%RegExp%': RegExp,
	'%Set%': typeof Set === 'undefined' ? undefined : Set,
	'%SetIteratorPrototype%': typeof Set === 'undefined' || !hasSymbols ? undefined : getProto(new Set()[Symbol.iterator]()),
	'%SharedArrayBuffer%': typeof SharedArrayBuffer === 'undefined' ? undefined : SharedArrayBuffer,
	'%String%': String,
	'%StringIteratorPrototype%': hasSymbols ? getProto(''[Symbol.iterator]()) : undefined,
	'%Symbol%': hasSymbols ? Symbol : undefined,
	'%SyntaxError%': $SyntaxError,
	'%ThrowTypeError%': ThrowTypeError,
	'%TypedArray%': TypedArray,
	'%TypeError%': $TypeError,
	'%Uint8Array%': typeof Uint8Array === 'undefined' ? undefined : Uint8Array,
	'%Uint8ClampedArray%': typeof Uint8ClampedArray === 'undefined' ? undefined : Uint8ClampedArray,
	'%Uint16Array%': typeof Uint16Array === 'undefined' ? undefined : Uint16Array,
	'%Uint32Array%': typeof Uint32Array === 'undefined' ? undefined : Uint32Array,
	'%URIError%': URIError,
	'%WeakMap%': typeof WeakMap === 'undefined' ? undefined : WeakMap,
	'%WeakRef%': typeof WeakRef === 'undefined' ? undefined : WeakRef,
	'%WeakSet%': typeof WeakSet === 'undefined' ? undefined : WeakSet
};

var LEGACY_ALIASES = {
	'%ArrayBufferPrototype%': ['ArrayBuffer', 'prototype'],
	'%ArrayPrototype%': ['Array', 'prototype'],
	'%ArrayProto_entries%': ['Array', 'prototype', 'entries'],
	'%ArrayProto_forEach%': ['Array', 'prototype', 'forEach'],
	'%ArrayProto_keys%': ['Array', 'prototype', 'keys'],
	'%ArrayProto_values%': ['Array', 'prototype', 'values'],
	'%AsyncFunctionPrototype%': ['AsyncFunction', 'prototype'],
	'%AsyncGenerator%': ['AsyncGeneratorFunction', 'prototype'],
	'%AsyncGeneratorPrototype%': ['AsyncGeneratorFunction', 'prototype', 'prototype'],
	'%BooleanPrototype%': ['Boolean', 'prototype'],
	'%DataViewPrototype%': ['DataView', 'prototype'],
	'%DatePrototype%': ['Date', 'prototype'],
	'%ErrorPrototype%': ['Error', 'prototype'],
	'%EvalErrorPrototype%': ['EvalError', 'prototype'],
	'%Float32ArrayPrototype%': ['Float32Array', 'prototype'],
	'%Float64ArrayPrototype%': ['Float64Array', 'prototype'],
	'%FunctionPrototype%': ['Function', 'prototype'],
	'%Generator%': ['GeneratorFunction', 'prototype'],
	'%GeneratorPrototype%': ['GeneratorFunction', 'prototype', 'prototype'],
	'%Int8ArrayPrototype%': ['Int8Array', 'prototype'],
	'%Int16ArrayPrototype%': ['Int16Array', 'prototype'],
	'%Int32ArrayPrototype%': ['Int32Array', 'prototype'],
	'%JSONParse%': ['JSON', 'parse'],
	'%JSONStringify%': ['JSON', 'stringify'],
	'%MapPrototype%': ['Map', 'prototype'],
	'%NumberPrototype%': ['Number', 'prototype'],
	'%ObjectPrototype%': ['Object', 'prototype'],
	'%ObjProto_toString%': ['Object', 'prototype', 'toString'],
	'%ObjProto_valueOf%': ['Object', 'prototype', 'valueOf'],
	'%PromisePrototype%': ['Promise', 'prototype'],
	'%PromiseProto_then%': ['Promise', 'prototype', 'then'],
	'%Promise_all%': ['Promise', 'all'],
	'%Promise_reject%': ['Promise', 'reject'],
	'%Promise_resolve%': ['Promise', 'resolve'],
	'%RangeErrorPrototype%': ['RangeError', 'prototype'],
	'%ReferenceErrorPrototype%': ['ReferenceError', 'prototype'],
	'%RegExpPrototype%': ['RegExp', 'prototype'],
	'%SetPrototype%': ['Set', 'prototype'],
	'%SharedArrayBufferPrototype%': ['SharedArrayBuffer', 'prototype'],
	'%StringPrototype%': ['String', 'prototype'],
	'%SymbolPrototype%': ['Symbol', 'prototype'],
	'%SyntaxErrorPrototype%': ['SyntaxError', 'prototype'],
	'%TypedArrayPrototype%': ['TypedArray', 'prototype'],
	'%TypeErrorPrototype%': ['TypeError', 'prototype'],
	'%Uint8ArrayPrototype%': ['Uint8Array', 'prototype'],
	'%Uint8ClampedArrayPrototype%': ['Uint8ClampedArray', 'prototype'],
	'%Uint16ArrayPrototype%': ['Uint16Array', 'prototype'],
	'%Uint32ArrayPrototype%': ['Uint32Array', 'prototype'],
	'%URIErrorPrototype%': ['URIError', 'prototype'],
	'%WeakMapPrototype%': ['WeakMap', 'prototype'],
	'%WeakSetPrototype%': ['WeakSet', 'prototype']
};

var bind = __webpack_require__(/*! function-bind */ "./glo/modules/error/node_modules/function-bind/index.js");
var hasOwn = __webpack_require__(/*! has */ "./glo/modules/error/node_modules/has/src/index.js");
var $concat = bind.call(Function.call, Array.prototype.concat);
var $spliceApply = bind.call(Function.apply, Array.prototype.splice);
var $replace = bind.call(Function.call, String.prototype.replace);

/* adapted from https://github.com/lodash/lodash/blob/4.17.15/dist/lodash.js#L6735-L6744 */
var rePropName = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g;
var reEscapeChar = /\\(\\)?/g; /** Used to match backslashes in property paths. */
var stringToPath = function stringToPath(string) {
	var result = [];
	$replace(string, rePropName, function (match, number, quote, subString) {
		result[result.length] = quote ? $replace(subString, reEscapeChar, '$1') : number || match;
	});
	return result;
};
/* end adaptation */

var getBaseIntrinsic = function getBaseIntrinsic(name, allowMissing) {
	var intrinsicName = name;
	var alias;
	if (hasOwn(LEGACY_ALIASES, intrinsicName)) {
		alias = LEGACY_ALIASES[intrinsicName];
		intrinsicName = '%' + alias[0] + '%';
	}

	if (hasOwn(INTRINSICS, intrinsicName)) {
		var value = INTRINSICS[intrinsicName];
		if (typeof value === 'undefined' && !allowMissing) {
			throw new $TypeError('intrinsic ' + name + ' exists, but is not available. Please file an issue!');
		}

		return {
			alias: alias,
			name: intrinsicName,
			value: value
		};
	}

	throw new $SyntaxError('intrinsic ' + name + ' does not exist!');
};

module.exports = function GetIntrinsic(name, allowMissing) {
	if (typeof name !== 'string' || name.length === 0) {
		throw new $TypeError('intrinsic name must be a non-empty string');
	}
	if (arguments.length > 1 && typeof allowMissing !== 'boolean') {
		throw new $TypeError('"allowMissing" argument must be a boolean');
	}

	var parts = stringToPath(name);
	var intrinsicBaseName = parts.length > 0 ? parts[0] : '';

	var intrinsic = getBaseIntrinsic('%' + intrinsicBaseName + '%', allowMissing);
	var intrinsicRealName = intrinsic.name;
	var value = intrinsic.value;
	var skipFurtherCaching = false;

	var alias = intrinsic.alias;
	if (alias) {
		intrinsicBaseName = alias[0];
		$spliceApply(parts, $concat([0, 1], alias));
	}

	for (var i = 1, isOwn = true; i < parts.length; i += 1) {
		var part = parts[i];
		if (part === 'constructor' || !isOwn) {
			skipFurtherCaching = true;
		}

		intrinsicBaseName += '.' + part;
		intrinsicRealName = '%' + intrinsicBaseName + '%';

		if (hasOwn(INTRINSICS, intrinsicRealName)) {
			value = INTRINSICS[intrinsicRealName];
		} else if (value != null) {
			if ($gOPD && (i + 1) >= parts.length) {
				var desc = $gOPD(value, part);
				isOwn = !!desc;

				if (!allowMissing && !(part in value)) {
					throw new $TypeError('base intrinsic for ' + name + ' exists, but the property is not available.');
				}
				// By convention, when a data property is converted to an accessor
				// property to emulate a data property that does not suffer from
				// the override mistake, that accessor's getter is marked with
				// an `originalValue` property. Here, when we detect this, we
				// uphold the illusion by pretending to see that original data
				// property, i.e., returning the value rather than the getter
				// itself.
				if (isOwn && 'get' in desc && !('originalValue' in desc.get)) {
					value = desc.get;
				} else {
					value = value[part];
				}
			} else {
				isOwn = hasOwn(value, part);
				value = value[part];
			}

			if (isOwn && !skipFurtherCaching) {
				INTRINSICS[intrinsicRealName] = value;
			}
		}
	}
	return value;
};


/***/ }),

/***/ "./glo/modules/error/node_modules/object-is/node_modules/es-abstract/helpers/callBind.js":
/*!***********************************************************************************************!*\
  !*** ./glo/modules/error/node_modules/object-is/node_modules/es-abstract/helpers/callBind.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var bind = __webpack_require__(/*! function-bind */ "./glo/modules/error/node_modules/function-bind/index.js");

var GetIntrinsic = __webpack_require__(/*! ../GetIntrinsic */ "./glo/modules/error/node_modules/object-is/node_modules/es-abstract/GetIntrinsic.js");

var $apply = GetIntrinsic('%Function.prototype.apply%');
var $call = GetIntrinsic('%Function.prototype.call%');
var $reflectApply = GetIntrinsic('%Reflect.apply%', true) || bind.call($call, $apply);

var $defineProperty = GetIntrinsic('%Object.defineProperty%', true);

if ($defineProperty) {
	try {
		$defineProperty({}, 'a', { value: 1 });
	} catch (e) {
		// IE 8 has a broken defineProperty
		$defineProperty = null;
	}
}

module.exports = function callBind() {
	return $reflectApply(bind, $call, arguments);
};

var applyBind = function applyBind() {
	return $reflectApply(bind, $apply, arguments);
};

if ($defineProperty) {
	$defineProperty(module.exports, 'apply', { value: applyBind });
} else {
	module.exports.apply = applyBind;
}


/***/ }),

/***/ "./glo/modules/error/node_modules/object-is/polyfill.js":
/*!**************************************************************!*\
  !*** ./glo/modules/error/node_modules/object-is/polyfill.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var implementation = __webpack_require__(/*! ./implementation */ "./glo/modules/error/node_modules/object-is/implementation.js");

module.exports = function getPolyfill() {
	return typeof Object.is === 'function' ? Object.is : implementation;
};


/***/ }),

/***/ "./glo/modules/error/node_modules/object-is/shim.js":
/*!**********************************************************!*\
  !*** ./glo/modules/error/node_modules/object-is/shim.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var getPolyfill = __webpack_require__(/*! ./polyfill */ "./glo/modules/error/node_modules/object-is/polyfill.js");
var define = __webpack_require__(/*! define-properties */ "./glo/modules/error/node_modules/define-properties/index.js");

module.exports = function shimObjectIs() {
	var polyfill = getPolyfill();
	define(Object, { is: polyfill }, {
		is: function testObjectIs() {
			return Object.is !== polyfill;
		}
	});
	return polyfill;
};


/***/ }),

/***/ "./glo/modules/error/node_modules/object-keys/implementation.js":
/*!**********************************************************************!*\
  !*** ./glo/modules/error/node_modules/object-keys/implementation.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var keysShim;
if (!Object.keys) {
	// modified from https://github.com/es-shims/es5-shim
	var has = Object.prototype.hasOwnProperty;
	var toStr = Object.prototype.toString;
	var isArgs = __webpack_require__(/*! ./isArguments */ "./glo/modules/error/node_modules/object-keys/isArguments.js"); // eslint-disable-line global-require
	var isEnumerable = Object.prototype.propertyIsEnumerable;
	var hasDontEnumBug = !isEnumerable.call({ toString: null }, 'toString');
	var hasProtoEnumBug = isEnumerable.call(function () {}, 'prototype');
	var dontEnums = [
		'toString',
		'toLocaleString',
		'valueOf',
		'hasOwnProperty',
		'isPrototypeOf',
		'propertyIsEnumerable',
		'constructor'
	];
	var equalsConstructorPrototype = function (o) {
		var ctor = o.constructor;
		return ctor && ctor.prototype === o;
	};
	var excludedKeys = {
		$applicationCache: true,
		$console: true,
		$external: true,
		$frame: true,
		$frameElement: true,
		$frames: true,
		$innerHeight: true,
		$innerWidth: true,
		$onmozfullscreenchange: true,
		$onmozfullscreenerror: true,
		$outerHeight: true,
		$outerWidth: true,
		$pageXOffset: true,
		$pageYOffset: true,
		$parent: true,
		$scrollLeft: true,
		$scrollTop: true,
		$scrollX: true,
		$scrollY: true,
		$self: true,
		$webkitIndexedDB: true,
		$webkitStorageInfo: true,
		$window: true
	};
	var hasAutomationEqualityBug = (function () {
		/* global window */
		if (typeof window === 'undefined') { return false; }
		for (var k in window) {
			try {
				if (!excludedKeys['$' + k] && has.call(window, k) && window[k] !== null && typeof window[k] === 'object') {
					try {
						equalsConstructorPrototype(window[k]);
					} catch (e) {
						return true;
					}
				}
			} catch (e) {
				return true;
			}
		}
		return false;
	}());
	var equalsConstructorPrototypeIfNotBuggy = function (o) {
		/* global window */
		if (typeof window === 'undefined' || !hasAutomationEqualityBug) {
			return equalsConstructorPrototype(o);
		}
		try {
			return equalsConstructorPrototype(o);
		} catch (e) {
			return false;
		}
	};

	keysShim = function keys(object) {
		var isObject = object !== null && typeof object === 'object';
		var isFunction = toStr.call(object) === '[object Function]';
		var isArguments = isArgs(object);
		var isString = isObject && toStr.call(object) === '[object String]';
		var theKeys = [];

		if (!isObject && !isFunction && !isArguments) {
			throw new TypeError('Object.keys called on a non-object');
		}

		var skipProto = hasProtoEnumBug && isFunction;
		if (isString && object.length > 0 && !has.call(object, 0)) {
			for (var i = 0; i < object.length; ++i) {
				theKeys.push(String(i));
			}
		}

		if (isArguments && object.length > 0) {
			for (var j = 0; j < object.length; ++j) {
				theKeys.push(String(j));
			}
		} else {
			for (var name in object) {
				if (!(skipProto && name === 'prototype') && has.call(object, name)) {
					theKeys.push(String(name));
				}
			}
		}

		if (hasDontEnumBug) {
			var skipConstructor = equalsConstructorPrototypeIfNotBuggy(object);

			for (var k = 0; k < dontEnums.length; ++k) {
				if (!(skipConstructor && dontEnums[k] === 'constructor') && has.call(object, dontEnums[k])) {
					theKeys.push(dontEnums[k]);
				}
			}
		}
		return theKeys;
	};
}
module.exports = keysShim;


/***/ }),

/***/ "./glo/modules/error/node_modules/object-keys/index.js":
/*!*************************************************************!*\
  !*** ./glo/modules/error/node_modules/object-keys/index.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var slice = Array.prototype.slice;
var isArgs = __webpack_require__(/*! ./isArguments */ "./glo/modules/error/node_modules/object-keys/isArguments.js");

var origKeys = Object.keys;
var keysShim = origKeys ? function keys(o) { return origKeys(o); } : __webpack_require__(/*! ./implementation */ "./glo/modules/error/node_modules/object-keys/implementation.js");

var originalKeys = Object.keys;

keysShim.shim = function shimObjectKeys() {
	if (Object.keys) {
		var keysWorksWithArguments = (function () {
			// Safari 5.0 bug
			var args = Object.keys(arguments);
			return args && args.length === arguments.length;
		}(1, 2));
		if (!keysWorksWithArguments) {
			Object.keys = function keys(object) { // eslint-disable-line func-name-matching
				if (isArgs(object)) {
					return originalKeys(slice.call(object));
				}
				return originalKeys(object);
			};
		}
	} else {
		Object.keys = keysShim;
	}
	return Object.keys || keysShim;
};

module.exports = keysShim;


/***/ }),

/***/ "./glo/modules/error/node_modules/object-keys/isArguments.js":
/*!*******************************************************************!*\
  !*** ./glo/modules/error/node_modules/object-keys/isArguments.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var toStr = Object.prototype.toString;

module.exports = function isArguments(value) {
	var str = toStr.call(value);
	var isArgs = str === '[object Arguments]';
	if (!isArgs) {
		isArgs = str !== '[object Array]' &&
			value !== null &&
			typeof value === 'object' &&
			typeof value.length === 'number' &&
			value.length >= 0 &&
			toStr.call(value.callee) === '[object Function]';
	}
	return isArgs;
};


/***/ }),

/***/ "./glo/modules/error/node_modules/object.assign/implementation.js":
/*!************************************************************************!*\
  !*** ./glo/modules/error/node_modules/object.assign/implementation.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// modified from https://github.com/es-shims/es6-shim
var keys = __webpack_require__(/*! object-keys */ "./glo/modules/error/node_modules/object-keys/index.js");
var canBeObject = function (obj) {
	return typeof obj !== 'undefined' && obj !== null;
};
var hasSymbols = __webpack_require__(/*! has-symbols/shams */ "./glo/modules/error/node_modules/has-symbols/shams.js")();
var callBound = __webpack_require__(/*! call-bind/callBound */ "./glo/modules/error/node_modules/call-bind/callBound.js");
var toObject = Object;
var $push = callBound('Array.prototype.push');
var $propIsEnumerable = callBound('Object.prototype.propertyIsEnumerable');
var originalGetSymbols = hasSymbols ? Object.getOwnPropertySymbols : null;

// eslint-disable-next-line no-unused-vars
module.exports = function assign(target, source1) {
	if (!canBeObject(target)) { throw new TypeError('target must be an object'); }
	var objTarget = toObject(target);
	var s, source, i, props, syms, value, key;
	for (s = 1; s < arguments.length; ++s) {
		source = toObject(arguments[s]);
		props = keys(source);
		var getSymbols = hasSymbols && (Object.getOwnPropertySymbols || originalGetSymbols);
		if (getSymbols) {
			syms = getSymbols(source);
			for (i = 0; i < syms.length; ++i) {
				key = syms[i];
				if ($propIsEnumerable(source, key)) {
					$push(props, key);
				}
			}
		}
		for (i = 0; i < props.length; ++i) {
			key = props[i];
			value = source[key];
			if ($propIsEnumerable(source, key)) {
				objTarget[key] = value;
			}
		}
	}
	return objTarget;
};


/***/ }),

/***/ "./glo/modules/error/node_modules/object.assign/index.js":
/*!***************************************************************!*\
  !*** ./glo/modules/error/node_modules/object.assign/index.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var defineProperties = __webpack_require__(/*! define-properties */ "./glo/modules/error/node_modules/define-properties/index.js");
var callBind = __webpack_require__(/*! call-bind */ "./glo/modules/error/node_modules/call-bind/index.js");

var implementation = __webpack_require__(/*! ./implementation */ "./glo/modules/error/node_modules/object.assign/implementation.js");
var getPolyfill = __webpack_require__(/*! ./polyfill */ "./glo/modules/error/node_modules/object.assign/polyfill.js");
var shim = __webpack_require__(/*! ./shim */ "./glo/modules/error/node_modules/object.assign/shim.js");

var polyfill = callBind.apply(getPolyfill());
// eslint-disable-next-line no-unused-vars
var bound = function assign(target, source1) {
	return polyfill(Object, arguments);
};

defineProperties(bound, {
	getPolyfill: getPolyfill,
	implementation: implementation,
	shim: shim
});

module.exports = bound;


/***/ }),

/***/ "./glo/modules/error/node_modules/object.assign/polyfill.js":
/*!******************************************************************!*\
  !*** ./glo/modules/error/node_modules/object.assign/polyfill.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var implementation = __webpack_require__(/*! ./implementation */ "./glo/modules/error/node_modules/object.assign/implementation.js");

var lacksProperEnumerationOrder = function () {
	if (!Object.assign) {
		return false;
	}
	/*
	 * v8, specifically in node 4.x, has a bug with incorrect property enumeration order
	 * note: this does not detect the bug unless there's 20 characters
	 */
	var str = 'abcdefghijklmnopqrst';
	var letters = str.split('');
	var map = {};
	for (var i = 0; i < letters.length; ++i) {
		map[letters[i]] = letters[i];
	}
	var obj = Object.assign({}, map);
	var actual = '';
	for (var k in obj) {
		actual += k;
	}
	return str !== actual;
};

var assignHasPendingExceptions = function () {
	if (!Object.assign || !Object.preventExtensions) {
		return false;
	}
	/*
	 * Firefox 37 still has "pending exception" logic in its Object.assign implementation,
	 * which is 72% slower than our shim, and Firefox 40's native implementation.
	 */
	var thrower = Object.preventExtensions({ 1: 2 });
	try {
		Object.assign(thrower, 'xy');
	} catch (e) {
		return thrower[1] === 'y';
	}
	return false;
};

module.exports = function getPolyfill() {
	if (!Object.assign) {
		return implementation;
	}
	if (lacksProperEnumerationOrder()) {
		return implementation;
	}
	if (assignHasPendingExceptions()) {
		return implementation;
	}
	return Object.assign;
};


/***/ }),

/***/ "./glo/modules/error/node_modules/object.assign/shim.js":
/*!**************************************************************!*\
  !*** ./glo/modules/error/node_modules/object.assign/shim.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var define = __webpack_require__(/*! define-properties */ "./glo/modules/error/node_modules/define-properties/index.js");
var getPolyfill = __webpack_require__(/*! ./polyfill */ "./glo/modules/error/node_modules/object.assign/polyfill.js");

module.exports = function shimAssign() {
	var polyfill = getPolyfill();
	define(
		Object,
		{ assign: polyfill },
		{ assign: function () { return Object.assign !== polyfill; } }
	);
	return polyfill;
};


/***/ }),

/***/ "./glo/modules/error/node_modules/regexp.prototype.flags/implementation.js":
/*!*********************************************************************************!*\
  !*** ./glo/modules/error/node_modules/regexp.prototype.flags/implementation.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var $Object = Object;
var $TypeError = TypeError;

module.exports = function flags() {
	if (this != null && this !== $Object(this)) {
		throw new $TypeError('RegExp.prototype.flags getter called on non-object');
	}
	var result = '';
	if (this.global) {
		result += 'g';
	}
	if (this.ignoreCase) {
		result += 'i';
	}
	if (this.multiline) {
		result += 'm';
	}
	if (this.dotAll) {
		result += 's';
	}
	if (this.unicode) {
		result += 'u';
	}
	if (this.sticky) {
		result += 'y';
	}
	return result;
};


/***/ }),

/***/ "./glo/modules/error/node_modules/regexp.prototype.flags/index.js":
/*!************************************************************************!*\
  !*** ./glo/modules/error/node_modules/regexp.prototype.flags/index.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var define = __webpack_require__(/*! define-properties */ "./glo/modules/error/node_modules/define-properties/index.js");
var callBind = __webpack_require__(/*! es-abstract/helpers/callBind */ "./glo/modules/error/node_modules/es-abstract/helpers/callBind.js");

var implementation = __webpack_require__(/*! ./implementation */ "./glo/modules/error/node_modules/regexp.prototype.flags/implementation.js");
var getPolyfill = __webpack_require__(/*! ./polyfill */ "./glo/modules/error/node_modules/regexp.prototype.flags/polyfill.js");
var shim = __webpack_require__(/*! ./shim */ "./glo/modules/error/node_modules/regexp.prototype.flags/shim.js");

var flagsBound = callBind(implementation);

define(flagsBound, {
	getPolyfill: getPolyfill,
	implementation: implementation,
	shim: shim
});

module.exports = flagsBound;


/***/ }),

/***/ "./glo/modules/error/node_modules/regexp.prototype.flags/polyfill.js":
/*!***************************************************************************!*\
  !*** ./glo/modules/error/node_modules/regexp.prototype.flags/polyfill.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var implementation = __webpack_require__(/*! ./implementation */ "./glo/modules/error/node_modules/regexp.prototype.flags/implementation.js");

var supportsDescriptors = __webpack_require__(/*! define-properties */ "./glo/modules/error/node_modules/define-properties/index.js").supportsDescriptors;
var $gOPD = Object.getOwnPropertyDescriptor;
var $TypeError = TypeError;

module.exports = function getPolyfill() {
	if (!supportsDescriptors) {
		throw new $TypeError('RegExp.prototype.flags requires a true ES5 environment that supports property descriptors');
	}
	if ((/a/mig).flags === 'gim') {
		var descriptor = $gOPD(RegExp.prototype, 'flags');
		if (descriptor && typeof descriptor.get === 'function' && typeof (/a/).dotAll === 'boolean') {
			return descriptor.get;
		}
	}
	return implementation;
};


/***/ }),

/***/ "./glo/modules/error/node_modules/regexp.prototype.flags/shim.js":
/*!***********************************************************************!*\
  !*** ./glo/modules/error/node_modules/regexp.prototype.flags/shim.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var supportsDescriptors = __webpack_require__(/*! define-properties */ "./glo/modules/error/node_modules/define-properties/index.js").supportsDescriptors;
var getPolyfill = __webpack_require__(/*! ./polyfill */ "./glo/modules/error/node_modules/regexp.prototype.flags/polyfill.js");
var gOPD = Object.getOwnPropertyDescriptor;
var defineProperty = Object.defineProperty;
var TypeErr = TypeError;
var getProto = Object.getPrototypeOf;
var regex = /a/;

module.exports = function shimFlags() {
	if (!supportsDescriptors || !getProto) {
		throw new TypeErr('RegExp.prototype.flags requires a true ES5 environment that supports property descriptors');
	}
	var polyfill = getPolyfill();
	var proto = getProto(regex);
	var descriptor = gOPD(proto, 'flags');
	if (!descriptor || descriptor.get !== polyfill) {
		defineProperty(proto, 'flags', {
			configurable: true,
			enumerable: false,
			get: polyfill
		});
	}
	return polyfill;
};


/***/ }),

/***/ "./glo/modules/error/node_modules/side-channel/index.js":
/*!**************************************************************!*\
  !*** ./glo/modules/error/node_modules/side-channel/index.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var GetIntrinsic = __webpack_require__(/*! es-abstract/GetIntrinsic */ "./glo/modules/error/node_modules/side-channel/node_modules/es-abstract/GetIntrinsic.js");
var callBound = __webpack_require__(/*! es-abstract/helpers/callBound */ "./glo/modules/error/node_modules/side-channel/node_modules/es-abstract/helpers/callBound.js");
var inspect = __webpack_require__(/*! object-inspect */ "./glo/modules/error/node_modules/object-inspect/index.js");

var $TypeError = GetIntrinsic('%TypeError%');
var $WeakMap = GetIntrinsic('%WeakMap%', true);
var $Map = GetIntrinsic('%Map%', true);
var $push = callBound('Array.prototype.push');

var $weakMapGet = callBound('WeakMap.prototype.get', true);
var $weakMapSet = callBound('WeakMap.prototype.set', true);
var $weakMapHas = callBound('WeakMap.prototype.has', true);
var $mapGet = callBound('Map.prototype.get', true);
var $mapSet = callBound('Map.prototype.set', true);
var $mapHas = callBound('Map.prototype.has', true);
var objectGet = function (objects, key) { // eslint-disable-line consistent-return
	for (var i = 0; i < objects.length; i += 1) {
		if (objects[i].key === key) {
			return objects[i].value;
		}
	}
};
var objectSet = function (objects, key, value) {
	for (var i = 0; i < objects.length; i += 1) {
		if (objects[i].key === key) {
			objects[i].value = value; // eslint-disable-line no-param-reassign
			return;
		}
	}
	$push(objects, {
		key: key,
		value: value
	});
};
var objectHas = function (objects, key) {
	for (var i = 0; i < objects.length; i += 1) {
		if (objects[i].key === key) {
			return true;
		}
	}
	return false;
};

module.exports = function getSideChannel() {
	var $wm;
	var $m;
	var $o;
	var channel = {
		assert: function (key) {
			if (!channel.has(key)) {
				throw new $TypeError('Side channel does not contain ' + inspect(key));
			}
		},
		get: function (key) { // eslint-disable-line consistent-return
			if ($WeakMap && key && (typeof key === 'object' || typeof key === 'function')) {
				if ($wm) {
					return $weakMapGet($wm, key);
				}
			} else if ($Map) {
				if ($m) {
					return $mapGet($m, key);
				}
			} else {
				if ($o) { // eslint-disable-line no-lonely-if
					return objectGet($o, key);
				}
			}
		},
		has: function (key) {
			if ($WeakMap && key && (typeof key === 'object' || typeof key === 'function')) {
				if ($wm) {
					return $weakMapHas($wm, key);
				}
			} else if ($Map) {
				if ($m) {
					return $mapHas($m, key);
				}
			} else {
				if ($o) { // eslint-disable-line no-lonely-if
					return objectHas($o, key);
				}
			}
			return false;
		},
		set: function (key, value) {
			if ($WeakMap && key && (typeof key === 'object' || typeof key === 'function')) {
				if (!$wm) {
					$wm = new $WeakMap();
				}
				$weakMapSet($wm, key, value);
			} else if ($Map) {
				if (!$m) {
					$m = new $Map();
				}
				$mapSet($m, key, value);
			} else {
				if (!$o) {
					$o = [];
				}
				objectSet($o, key, value);
			}
		}
	};
	return channel;
};


/***/ }),

/***/ "./glo/modules/error/node_modules/side-channel/node_modules/es-abstract/GetIntrinsic.js":
/*!**********************************************************************************************!*\
  !*** ./glo/modules/error/node_modules/side-channel/node_modules/es-abstract/GetIntrinsic.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* globals
	AggregateError,
	Atomics,
	FinalizationRegistry,
	SharedArrayBuffer,
	WeakRef,
*/

var undefined;

var $SyntaxError = SyntaxError;
var $Function = Function;
var $TypeError = TypeError;

// eslint-disable-next-line consistent-return
var getEvalledConstructor = function (expressionSyntax) {
	try {
		// eslint-disable-next-line no-new-func
		return Function('"use strict"; return (' + expressionSyntax + ').constructor;')();
	} catch (e) {}
};

var $gOPD = Object.getOwnPropertyDescriptor;
if ($gOPD) {
	try {
		$gOPD({}, '');
	} catch (e) {
		$gOPD = null; // this is IE 8, which has a broken gOPD
	}
}

var throwTypeError = function () { throw new $TypeError(); };
var ThrowTypeError = $gOPD
	? (function () {
		try {
			// eslint-disable-next-line no-unused-expressions, no-caller, no-restricted-properties
			arguments.callee; // IE 8 does not throw here
			return throwTypeError;
		} catch (calleeThrows) {
			try {
				// IE 8 throws on Object.getOwnPropertyDescriptor(arguments, '')
				return $gOPD(arguments, 'callee').get;
			} catch (gOPDthrows) {
				return throwTypeError;
			}
		}
	}())
	: throwTypeError;

var hasSymbols = __webpack_require__(/*! has-symbols */ "./glo/modules/error/node_modules/has-symbols/index.js")();

var getProto = Object.getPrototypeOf || function (x) { return x.__proto__; }; // eslint-disable-line no-proto

var asyncGenFunction = getEvalledConstructor('async function* () {}');
var asyncGenFunctionPrototype = asyncGenFunction ? asyncGenFunction.prototype : undefined;
var asyncGenPrototype = asyncGenFunctionPrototype ? asyncGenFunctionPrototype.prototype : undefined;

var TypedArray = typeof Uint8Array === 'undefined' ? undefined : getProto(Uint8Array);

var INTRINSICS = {
	'%AggregateError%': typeof AggregateError === 'undefined' ? undefined : AggregateError,
	'%Array%': Array,
	'%ArrayBuffer%': typeof ArrayBuffer === 'undefined' ? undefined : ArrayBuffer,
	'%ArrayIteratorPrototype%': hasSymbols ? getProto([][Symbol.iterator]()) : undefined,
	'%AsyncFromSyncIteratorPrototype%': undefined,
	'%AsyncFunction%': getEvalledConstructor('async function () {}'),
	'%AsyncGenerator%': asyncGenFunctionPrototype,
	'%AsyncGeneratorFunction%': asyncGenFunction,
	'%AsyncIteratorPrototype%': asyncGenPrototype ? getProto(asyncGenPrototype) : undefined,
	'%Atomics%': typeof Atomics === 'undefined' ? undefined : Atomics,
	'%BigInt%': typeof BigInt === 'undefined' ? undefined : BigInt,
	'%Boolean%': Boolean,
	'%DataView%': typeof DataView === 'undefined' ? undefined : DataView,
	'%Date%': Date,
	'%decodeURI%': decodeURI,
	'%decodeURIComponent%': decodeURIComponent,
	'%encodeURI%': encodeURI,
	'%encodeURIComponent%': encodeURIComponent,
	'%Error%': Error,
	'%eval%': eval, // eslint-disable-line no-eval
	'%EvalError%': EvalError,
	'%Float32Array%': typeof Float32Array === 'undefined' ? undefined : Float32Array,
	'%Float64Array%': typeof Float64Array === 'undefined' ? undefined : Float64Array,
	'%FinalizationRegistry%': typeof FinalizationRegistry === 'undefined' ? undefined : FinalizationRegistry,
	'%Function%': $Function,
	'%GeneratorFunction%': getEvalledConstructor('function* () {}'),
	'%Int8Array%': typeof Int8Array === 'undefined' ? undefined : Int8Array,
	'%Int16Array%': typeof Int16Array === 'undefined' ? undefined : Int16Array,
	'%Int32Array%': typeof Int32Array === 'undefined' ? undefined : Int32Array,
	'%isFinite%': isFinite,
	'%isNaN%': isNaN,
	'%IteratorPrototype%': hasSymbols ? getProto(getProto([][Symbol.iterator]())) : undefined,
	'%JSON%': typeof JSON === 'object' ? JSON : undefined,
	'%Map%': typeof Map === 'undefined' ? undefined : Map,
	'%MapIteratorPrototype%': typeof Map === 'undefined' || !hasSymbols ? undefined : getProto(new Map()[Symbol.iterator]()),
	'%Math%': Math,
	'%Number%': Number,
	'%Object%': Object,
	'%parseFloat%': parseFloat,
	'%parseInt%': parseInt,
	'%Promise%': typeof Promise === 'undefined' ? undefined : Promise,
	'%Proxy%': typeof Proxy === 'undefined' ? undefined : Proxy,
	'%RangeError%': RangeError,
	'%ReferenceError%': ReferenceError,
	'%Reflect%': typeof Reflect === 'undefined' ? undefined : Reflect,
	'%RegExp%': RegExp,
	'%Set%': typeof Set === 'undefined' ? undefined : Set,
	'%SetIteratorPrototype%': typeof Set === 'undefined' || !hasSymbols ? undefined : getProto(new Set()[Symbol.iterator]()),
	'%SharedArrayBuffer%': typeof SharedArrayBuffer === 'undefined' ? undefined : SharedArrayBuffer,
	'%String%': String,
	'%StringIteratorPrototype%': hasSymbols ? getProto(''[Symbol.iterator]()) : undefined,
	'%Symbol%': hasSymbols ? Symbol : undefined,
	'%SyntaxError%': $SyntaxError,
	'%ThrowTypeError%': ThrowTypeError,
	'%TypedArray%': TypedArray,
	'%TypeError%': $TypeError,
	'%Uint8Array%': typeof Uint8Array === 'undefined' ? undefined : Uint8Array,
	'%Uint8ClampedArray%': typeof Uint8ClampedArray === 'undefined' ? undefined : Uint8ClampedArray,
	'%Uint16Array%': typeof Uint16Array === 'undefined' ? undefined : Uint16Array,
	'%Uint32Array%': typeof Uint32Array === 'undefined' ? undefined : Uint32Array,
	'%URIError%': URIError,
	'%WeakMap%': typeof WeakMap === 'undefined' ? undefined : WeakMap,
	'%WeakRef%': typeof WeakRef === 'undefined' ? undefined : WeakRef,
	'%WeakSet%': typeof WeakSet === 'undefined' ? undefined : WeakSet
};

var LEGACY_ALIASES = {
	'%ArrayBufferPrototype%': ['ArrayBuffer', 'prototype'],
	'%ArrayPrototype%': ['Array', 'prototype'],
	'%ArrayProto_entries%': ['Array', 'prototype', 'entries'],
	'%ArrayProto_forEach%': ['Array', 'prototype', 'forEach'],
	'%ArrayProto_keys%': ['Array', 'prototype', 'keys'],
	'%ArrayProto_values%': ['Array', 'prototype', 'values'],
	'%AsyncFunctionPrototype%': ['AsyncFunction', 'prototype'],
	'%AsyncGenerator%': ['AsyncGeneratorFunction', 'prototype'],
	'%AsyncGeneratorPrototype%': ['AsyncGeneratorFunction', 'prototype', 'prototype'],
	'%BooleanPrototype%': ['Boolean', 'prototype'],
	'%DataViewPrototype%': ['DataView', 'prototype'],
	'%DatePrototype%': ['Date', 'prototype'],
	'%ErrorPrototype%': ['Error', 'prototype'],
	'%EvalErrorPrototype%': ['EvalError', 'prototype'],
	'%Float32ArrayPrototype%': ['Float32Array', 'prototype'],
	'%Float64ArrayPrototype%': ['Float64Array', 'prototype'],
	'%FunctionPrototype%': ['Function', 'prototype'],
	'%Generator%': ['GeneratorFunction', 'prototype'],
	'%GeneratorPrototype%': ['GeneratorFunction', 'prototype', 'prototype'],
	'%Int8ArrayPrototype%': ['Int8Array', 'prototype'],
	'%Int16ArrayPrototype%': ['Int16Array', 'prototype'],
	'%Int32ArrayPrototype%': ['Int32Array', 'prototype'],
	'%JSONParse%': ['JSON', 'parse'],
	'%JSONStringify%': ['JSON', 'stringify'],
	'%MapPrototype%': ['Map', 'prototype'],
	'%NumberPrototype%': ['Number', 'prototype'],
	'%ObjectPrototype%': ['Object', 'prototype'],
	'%ObjProto_toString%': ['Object', 'prototype', 'toString'],
	'%ObjProto_valueOf%': ['Object', 'prototype', 'valueOf'],
	'%PromisePrototype%': ['Promise', 'prototype'],
	'%PromiseProto_then%': ['Promise', 'prototype', 'then'],
	'%Promise_all%': ['Promise', 'all'],
	'%Promise_reject%': ['Promise', 'reject'],
	'%Promise_resolve%': ['Promise', 'resolve'],
	'%RangeErrorPrototype%': ['RangeError', 'prototype'],
	'%ReferenceErrorPrototype%': ['ReferenceError', 'prototype'],
	'%RegExpPrototype%': ['RegExp', 'prototype'],
	'%SetPrototype%': ['Set', 'prototype'],
	'%SharedArrayBufferPrototype%': ['SharedArrayBuffer', 'prototype'],
	'%StringPrototype%': ['String', 'prototype'],
	'%SymbolPrototype%': ['Symbol', 'prototype'],
	'%SyntaxErrorPrototype%': ['SyntaxError', 'prototype'],
	'%TypedArrayPrototype%': ['TypedArray', 'prototype'],
	'%TypeErrorPrototype%': ['TypeError', 'prototype'],
	'%Uint8ArrayPrototype%': ['Uint8Array', 'prototype'],
	'%Uint8ClampedArrayPrototype%': ['Uint8ClampedArray', 'prototype'],
	'%Uint16ArrayPrototype%': ['Uint16Array', 'prototype'],
	'%Uint32ArrayPrototype%': ['Uint32Array', 'prototype'],
	'%URIErrorPrototype%': ['URIError', 'prototype'],
	'%WeakMapPrototype%': ['WeakMap', 'prototype'],
	'%WeakSetPrototype%': ['WeakSet', 'prototype']
};

var bind = __webpack_require__(/*! function-bind */ "./glo/modules/error/node_modules/function-bind/index.js");
var hasOwn = __webpack_require__(/*! has */ "./glo/modules/error/node_modules/has/src/index.js");
var $concat = bind.call(Function.call, Array.prototype.concat);
var $spliceApply = bind.call(Function.apply, Array.prototype.splice);
var $replace = bind.call(Function.call, String.prototype.replace);

/* adapted from https://github.com/lodash/lodash/blob/4.17.15/dist/lodash.js#L6735-L6744 */
var rePropName = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g;
var reEscapeChar = /\\(\\)?/g; /** Used to match backslashes in property paths. */
var stringToPath = function stringToPath(string) {
	var result = [];
	$replace(string, rePropName, function (match, number, quote, subString) {
		result[result.length] = quote ? $replace(subString, reEscapeChar, '$1') : number || match;
	});
	return result;
};
/* end adaptation */

var getBaseIntrinsic = function getBaseIntrinsic(name, allowMissing) {
	var intrinsicName = name;
	var alias;
	if (hasOwn(LEGACY_ALIASES, intrinsicName)) {
		alias = LEGACY_ALIASES[intrinsicName];
		intrinsicName = '%' + alias[0] + '%';
	}

	if (hasOwn(INTRINSICS, intrinsicName)) {
		var value = INTRINSICS[intrinsicName];
		if (typeof value === 'undefined' && !allowMissing) {
			throw new $TypeError('intrinsic ' + name + ' exists, but is not available. Please file an issue!');
		}

		return {
			alias: alias,
			name: intrinsicName,
			value: value
		};
	}

	throw new $SyntaxError('intrinsic ' + name + ' does not exist!');
};

module.exports = function GetIntrinsic(name, allowMissing) {
	if (typeof name !== 'string' || name.length === 0) {
		throw new $TypeError('intrinsic name must be a non-empty string');
	}
	if (arguments.length > 1 && typeof allowMissing !== 'boolean') {
		throw new $TypeError('"allowMissing" argument must be a boolean');
	}

	var parts = stringToPath(name);
	var intrinsicBaseName = parts.length > 0 ? parts[0] : '';

	var intrinsic = getBaseIntrinsic('%' + intrinsicBaseName + '%', allowMissing);
	var intrinsicRealName = intrinsic.name;
	var value = intrinsic.value;
	var skipFurtherCaching = false;

	var alias = intrinsic.alias;
	if (alias) {
		intrinsicBaseName = alias[0];
		$spliceApply(parts, $concat([0, 1], alias));
	}

	for (var i = 1, isOwn = true; i < parts.length; i += 1) {
		var part = parts[i];
		if (part === 'constructor' || !isOwn) {
			skipFurtherCaching = true;
		}

		intrinsicBaseName += '.' + part;
		intrinsicRealName = '%' + intrinsicBaseName + '%';

		if (hasOwn(INTRINSICS, intrinsicRealName)) {
			value = INTRINSICS[intrinsicRealName];
		} else if (value != null) {
			if ($gOPD && (i + 1) >= parts.length) {
				var desc = $gOPD(value, part);
				isOwn = !!desc;

				if (!allowMissing && !(part in value)) {
					throw new $TypeError('base intrinsic for ' + name + ' exists, but the property is not available.');
				}
				// By convention, when a data property is converted to an accessor
				// property to emulate a data property that does not suffer from
				// the override mistake, that accessor's getter is marked with
				// an `originalValue` property. Here, when we detect this, we
				// uphold the illusion by pretending to see that original data
				// property, i.e., returning the value rather than the getter
				// itself.
				if (isOwn && 'get' in desc && !('originalValue' in desc.get)) {
					value = desc.get;
				} else {
					value = value[part];
				}
			} else {
				isOwn = hasOwn(value, part);
				value = value[part];
			}

			if (isOwn && !skipFurtherCaching) {
				INTRINSICS[intrinsicRealName] = value;
			}
		}
	}
	return value;
};


/***/ }),

/***/ "./glo/modules/error/node_modules/side-channel/node_modules/es-abstract/helpers/callBind.js":
/*!**************************************************************************************************!*\
  !*** ./glo/modules/error/node_modules/side-channel/node_modules/es-abstract/helpers/callBind.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var bind = __webpack_require__(/*! function-bind */ "./glo/modules/error/node_modules/function-bind/index.js");

var GetIntrinsic = __webpack_require__(/*! ../GetIntrinsic */ "./glo/modules/error/node_modules/side-channel/node_modules/es-abstract/GetIntrinsic.js");

var $apply = GetIntrinsic('%Function.prototype.apply%');
var $call = GetIntrinsic('%Function.prototype.call%');
var $reflectApply = GetIntrinsic('%Reflect.apply%', true) || bind.call($call, $apply);

var $defineProperty = GetIntrinsic('%Object.defineProperty%', true);

if ($defineProperty) {
	try {
		$defineProperty({}, 'a', { value: 1 });
	} catch (e) {
		// IE 8 has a broken defineProperty
		$defineProperty = null;
	}
}

module.exports = function callBind() {
	return $reflectApply(bind, $call, arguments);
};

var applyBind = function applyBind() {
	return $reflectApply(bind, $apply, arguments);
};

if ($defineProperty) {
	$defineProperty(module.exports, 'apply', { value: applyBind });
} else {
	module.exports.apply = applyBind;
}


/***/ }),

/***/ "./glo/modules/error/node_modules/side-channel/node_modules/es-abstract/helpers/callBound.js":
/*!***************************************************************************************************!*\
  !*** ./glo/modules/error/node_modules/side-channel/node_modules/es-abstract/helpers/callBound.js ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var GetIntrinsic = __webpack_require__(/*! ../GetIntrinsic */ "./glo/modules/error/node_modules/side-channel/node_modules/es-abstract/GetIntrinsic.js");

var callBind = __webpack_require__(/*! ./callBind */ "./glo/modules/error/node_modules/side-channel/node_modules/es-abstract/helpers/callBind.js");

var $indexOf = callBind(GetIntrinsic('String.prototype.indexOf'));

module.exports = function callBoundIntrinsic(name, allowMissing) {
	var intrinsic = GetIntrinsic(name, !!allowMissing);
	if (typeof intrinsic === 'function' && $indexOf(name, '.prototype.')) {
		return callBind(intrinsic);
	}
	return intrinsic;
};


/***/ }),

/***/ "./glo/modules/error/node_modules/which-boxed-primitive/index.js":
/*!***********************************************************************!*\
  !*** ./glo/modules/error/node_modules/which-boxed-primitive/index.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isString = __webpack_require__(/*! is-string */ "./glo/modules/error/node_modules/is-string/index.js");
var isNumber = __webpack_require__(/*! is-number-object */ "./glo/modules/error/node_modules/is-number-object/index.js");
var isBoolean = __webpack_require__(/*! is-boolean-object */ "./glo/modules/error/node_modules/is-boolean-object/index.js");
var isSymbol = __webpack_require__(/*! is-symbol */ "./glo/modules/error/node_modules/is-symbol/index.js");
var isBigInt = __webpack_require__(/*! is-bigint */ "./glo/modules/error/node_modules/is-bigint/index.js");

// eslint-disable-next-line consistent-return
module.exports = function whichBoxedPrimitive(value) {
	// eslint-disable-next-line eqeqeq
	if (value == null || (typeof value !== 'object' && typeof value !== 'function')) {
		return null;
	}
	if (isString(value)) {
		return 'String';
	}
	if (isNumber(value)) {
		return 'Number';
	}
	if (isBoolean(value)) {
		return 'Boolean';
	}
	if (isSymbol(value)) {
		return 'Symbol';
	}
	if (isBigInt(value)) {
		return 'BigInt';
	}
};


/***/ }),

/***/ "./glo/modules/error/node_modules/which-collection/index.js":
/*!******************************************************************!*\
  !*** ./glo/modules/error/node_modules/which-collection/index.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isMap = __webpack_require__(/*! is-map */ "./glo/modules/error/node_modules/is-map/index.js");
var isSet = __webpack_require__(/*! is-set */ "./glo/modules/error/node_modules/is-set/index.js");
var isWeakMap = __webpack_require__(/*! is-weakmap */ "./glo/modules/error/node_modules/is-weakmap/index.js");
var isWeakSet = __webpack_require__(/*! is-weakset */ "./glo/modules/error/node_modules/is-weakset/index.js");

module.exports = function whichCollection(value) {
	if (value && typeof value === 'object') {
		if (isMap(value)) {
			return 'Map';
		}
		if (isSet(value)) {
			return 'Set';
		}
		if (isWeakMap(value)) {
			return 'WeakMap';
		}
		if (isWeakSet(value)) {
			return 'WeakSet';
		}
	}
	return false;
};


/***/ }),

/***/ "./glo/modules/error/node_modules/which-typed-array/index.js":
/*!*******************************************************************!*\
  !*** ./glo/modules/error/node_modules/which-typed-array/index.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

var forEach = __webpack_require__(/*! foreach */ "./glo/modules/error/node_modules/foreach/index.js");
var availableTypedArrays = __webpack_require__(/*! available-typed-arrays */ "./glo/modules/error/node_modules/available-typed-arrays/index.js");
var callBound = __webpack_require__(/*! es-abstract/helpers/callBound */ "./glo/modules/error/node_modules/es-abstract/helpers/callBound.js");

var $toString = callBound('Object.prototype.toString');
var hasSymbols = __webpack_require__(/*! has-symbols */ "./glo/modules/error/node_modules/has-symbols/index.js")();
var hasToStringTag = hasSymbols && typeof Symbol.toStringTag === 'symbol';

var typedArrays = availableTypedArrays();

var $slice = callBound('String.prototype.slice');
var toStrTags = {};
var gOPD = __webpack_require__(/*! es-abstract/helpers/getOwnPropertyDescriptor */ "./glo/modules/error/node_modules/es-abstract/helpers/getOwnPropertyDescriptor.js");
var getPrototypeOf = Object.getPrototypeOf; // require('getprototypeof');
if (hasToStringTag && gOPD && getPrototypeOf) {
	forEach(typedArrays, function (typedArray) {
		if (typeof global[typedArray] === 'function') {
			var arr = new global[typedArray]();
			if (!(Symbol.toStringTag in arr)) {
				throw new EvalError('this engine has support for Symbol.toStringTag, but ' + typedArray + ' does not have the property! Please report this.');
			}
			var proto = getPrototypeOf(arr);
			var descriptor = gOPD(proto, Symbol.toStringTag);
			if (!descriptor) {
				var superProto = getPrototypeOf(proto);
				descriptor = gOPD(superProto, Symbol.toStringTag);
			}
			toStrTags[typedArray] = descriptor.get;
		}
	});
}

var tryTypedArrays = function tryAllTypedArrays(value) {
	var foundName = false;
	forEach(toStrTags, function (getter, typedArray) {
		if (!foundName) {
			try {
				var name = getter.call(value);
				if (name === typedArray) {
					foundName = name;
				}
			} catch (e) {}
		}
	});
	return foundName;
};

var isTypedArray = __webpack_require__(/*! is-typed-array */ "./glo/modules/error/node_modules/is-typed-array/index.js");

module.exports = function whichTypedArray(value) {
	if (!isTypedArray(value)) { return false; }
	if (!hasToStringTag) { return $slice($toString(value), 8, -1); }
	return tryTypedArrays(value);
};

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../webapp/node_modules/webpack/buildin/global.js */ "./glo/modules/webapp/node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./glo/modules/glo/lib/glo.js":
/*!************************************!*\
  !*** ./glo/modules/glo/lib/glo.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const lexer_1 = __webpack_require__(/*! @glossa-glo/lexer */ "./glo/modules/lexer/lib/Lexer.js");
const parser_1 = __webpack_require__(/*! @glossa-glo/parser */ "./glo/modules/parser/lib/Parser.js");
const interpreter_1 = __webpack_require__(/*! @glossa-glo/interpreter */ "./glo/modules/interpreter/lib/Interpreter.js");
const semantic_analyzer_1 = __webpack_require__(/*! @glossa-glo/semantic-analyzer */ "./glo/modules/semantic-analyzer/lib/SemanticAnalyzer.js");
const symbol_1 = __webpack_require__(/*! @glossa-glo/symbol */ "./glo/modules/symbol/lib/GLOSymbol.js");
const library_1 = __importDefault(__webpack_require__(/*! @glossa-glo/library */ "./glo/modules/library/lib/Library.js"));
function interpret(sourceCode, options) {
    return __awaiter(this, void 0, void 0, function* () {
        const lexer = new lexer_1.Lexer(sourceCode);
        const tree = new parser_1.Parser(lexer).run();
        const baseScope = new symbol_1.BaseSymbolScope('root');
        library_1.default(baseScope);
        new semantic_analyzer_1.SimplifyConstants(tree, baseScope).run();
        new semantic_analyzer_1.SymbolBuilder(tree, baseScope).run();
        new semantic_analyzer_1.TypeChecker(tree, baseScope).run();
        const interpreter = new interpreter_1.Interpreter(tree, baseScope, options);
        yield interpreter.run();
    });
}
exports.default = interpret;
//# sourceMappingURL=glo.js.map

/***/ }),

/***/ "./glo/modules/interpreter/lib/Interpreter.js":
/*!****************************************************!*\
  !*** ./glo/modules/interpreter/lib/Interpreter.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Interpreter = void 0;
const Types = __importStar(__webpack_require__(/*! @glossa-glo/data-types */ "./glo/modules/data-types/lib/index.js"));
const AST = __importStar(__webpack_require__(/*! @glossa-glo/ast */ "./glo/modules/ast/lib/AST.js"));
const symbol_1 = __webpack_require__(/*! @glossa-glo/symbol */ "./glo/modules/symbol/lib/GLOSymbol.js");
const ast_1 = __webpack_require__(/*! @glossa-glo/ast */ "./glo/modules/ast/lib/AST.js");
const error_1 = __importStar(__webpack_require__(/*! @glossa-glo/error */ "./glo/modules/error/lib/GLOError.js"));
const clone_deep_1 = __importDefault(__webpack_require__(/*! clone-deep */ "./glo/modules/interpreter/node_modules/clone-deep/index.js"));
class Interpreter extends AST.ASTVisitor {
    constructor(ast, baseScope, options) {
        super();
        this.ast = ast;
        this.options = options;
        this.scope = baseScope;
    }
    visit(node) {
        const _super = Object.create(null, {
            visit: { get: () => super.visit }
        });
        return __awaiter(this, void 0, void 0, function* () {
            if (this.options.interceptor) {
                yield this.options.interceptor(node, this.scope);
            }
            return _super.visit.call(this, node);
        });
    }
    withNewScope(name, fn) {
        return __awaiter(this, void 0, void 0, function* () {
            const scope = this.scope.children.get(name);
            if (!scope)
                throw new Error(`Program error: Scope with name ${name} does not exist on scope ${this.scope.name}`);
            this.scope = scope;
            const result = yield fn(scope);
            this.scope = this.scope.getParent();
            return result;
        });
    }
    visitAssignment(node) {
        return __awaiter(this, void 0, void 0, function* () {
            const left = node.left;
            const newValue = yield this.visit(node.right);
            if (left instanceof AST.VariableAST) {
                if (this.scope.type === symbol_1.SymbolScopeType.Function && // Is in function
                    this.scope.nameEquals(left.name) // Variable name matches function name
                ) {
                    this.scope.changeFunctionReturnType(left.name, newValue);
                }
                else
                    this.scope.changeValue(left.name, newValue);
            }
            else if (left instanceof AST.ArrayAccessAST) {
                const dimensionLength = this.scope.resolve(left.array.name, symbol_1.VariableSymbol).dimensionLength;
                const accessorValues = yield Promise.all(left.accessors.map(node => this.visit(node)));
                for (let i = 0; i < accessorValues.length; i++) {
                    const accessorValue = accessorValues[i];
                    error_1.assert(left.accessors[i], accessorValue.greaterEqualsThan(new Types.GLOInteger(1)), `Ο δείκτης του πίνακα '${left.array.name}' πρέπει να είναι μεγαλύτερος ή ίσος του 1'`);
                    // TODO: Fix this hack
                    const lP = dimensionLength[i].start.linePosition;
                    dimensionLength[i].start.linePosition = -1;
                    error_1.assert(left.accessors[i], accessorValue.lessEqualsThan(yield this.visit(dimensionLength[i])), `Ο δείκτης του πίνακα '${left.array.name}' έχει τιμή ${accessorValue.print()}, εκτός ορίων του πίνακα`);
                    dimensionLength[i].start.linePosition = lP;
                }
                this.scope.changeArrayValue(left.array.name, accessorValues, newValue);
            }
            return new Types.GLOVoid();
        });
    }
    visitPlus(node) {
        return __awaiter(this, void 0, void 0, function* () {
            const left = yield this.visit(node.left);
            const right = yield this.visit(node.right);
            return left.add(right);
        });
    }
    visitMinus(node) {
        return __awaiter(this, void 0, void 0, function* () {
            const left = yield this.visit(node.left);
            const right = yield this.visit(node.right);
            return left.subtract(right);
        });
    }
    visitIntegerDivision(node) {
        return __awaiter(this, void 0, void 0, function* () {
            const left = yield this.visit(node.left);
            const right = yield this.visit(node.right);
            if (right.equals(new Types.GLOInteger(0))) {
                throw new error_1.default(node, 'Δεν μπορώ να διαιρέσω με το μηδέν');
            }
            return left.integerDivide(right);
        });
    }
    visitRealDivision(node) {
        return __awaiter(this, void 0, void 0, function* () {
            const left = yield this.visit(node.left);
            const right = yield this.visit(node.right);
            if (right.equals(new Types.GLOInteger(0)) ||
                right.equals(new Types.GLOReal(0))) {
                throw new error_1.default(node, 'Δεν μπορώ να διαιρέσω με το μηδέν');
            }
            return left.divide(right);
        });
    }
    visitMultiplication(node) {
        return __awaiter(this, void 0, void 0, function* () {
            const left = yield this.visit(node.left);
            const right = yield this.visit(node.right);
            return left.multiply(right);
        });
    }
    visitExponentiation(node) {
        return __awaiter(this, void 0, void 0, function* () {
            const left = yield this.visit(node.left);
            const right = yield this.visit(node.right);
            return left.exponent(right);
        });
    }
    visitMod(node) {
        return __awaiter(this, void 0, void 0, function* () {
            const left = yield this.visit(node.left);
            const right = yield this.visit(node.right);
            if (right.equals(new Types.GLOInteger(0)) ||
                right.equals(new Types.GLOReal(0))) {
                throw new error_1.default(node, 'Δεν μπορώ να κάνω mod με το μηδέν');
            }
            return left.mod(right);
        });
    }
    visitEquals(node) {
        return __awaiter(this, void 0, void 0, function* () {
            const left = yield this.visit(node.left);
            const right = yield this.visit(node.right);
            return new Types.GLOBoolean(left.equals(right));
        });
    }
    visitNotEquals(node) {
        return __awaiter(this, void 0, void 0, function* () {
            const left = yield this.visit(node.left);
            const right = yield this.visit(node.right);
            return new Types.GLOBoolean(left.notEquals(right));
        });
    }
    visitGreaterThan(node) {
        return __awaiter(this, void 0, void 0, function* () {
            const left = yield this.visit(node.left);
            const right = yield this.visit(node.right);
            return new Types.GLOBoolean(left.greaterThan(right));
        });
    }
    visitLessThan(node) {
        return __awaiter(this, void 0, void 0, function* () {
            const left = yield this.visit(node.left);
            const right = yield this.visit(node.right);
            return new Types.GLOBoolean(left.lessThan(right));
        });
    }
    visitGreaterEquals(node) {
        return __awaiter(this, void 0, void 0, function* () {
            const left = yield this.visit(node.left);
            const right = yield this.visit(node.right);
            return new Types.GLOBoolean(left.greaterEqualsThan(right));
        });
    }
    visitLessEquals(node) {
        return __awaiter(this, void 0, void 0, function* () {
            const left = yield this.visit(node.left);
            const right = yield this.visit(node.right);
            return new Types.GLOBoolean(left.lessEqualsThan(right));
        });
    }
    visitIntegerConstant(node) {
        return __awaiter(this, void 0, void 0, function* () {
            return node.value;
        });
    }
    visitRealConstant(node) {
        return __awaiter(this, void 0, void 0, function* () {
            return node.value;
        });
    }
    visitStringConstant(node) {
        return __awaiter(this, void 0, void 0, function* () {
            return node.value;
        });
    }
    visitTrue(node) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Types.GLOBoolean(true);
        });
    }
    visitFalse(node) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Types.GLOBoolean(false);
        });
    }
    visitUnaryPlus(node) {
        return __awaiter(this, void 0, void 0, function* () {
            const target = yield this.visit(node.target);
            return target.unaryPlus();
        });
    }
    visitUnaryMinus(node) {
        return __awaiter(this, void 0, void 0, function* () {
            const target = yield this.visit(node.target);
            return target.unaryMinus();
        });
    }
    visitVariable(node, initializationCheck = true) {
        return __awaiter(this, void 0, void 0, function* () {
            const variableValue = this.scope.resolveValue(node.name);
            if (!variableValue && initializationCheck) {
                throw new error_1.default(node, `Η μεταβλητή '${node.name}' χρησιμοποιήθηκε χωρίς πρώτα να έχει αρχικοποιηθεί`);
            }
            return variableValue || new Types.GLOVoid();
        });
    }
    visitEmpty(node) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Types.GLOVoid();
        });
    }
    visitProgram(node) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.withNewScope(node.name, () => __awaiter(this, void 0, void 0, function* () {
                for (let i = 0; i < node.children.length; i++) {
                    yield this.visit(node.children[i]);
                }
                return new Types.GLOVoid();
            }));
        });
    }
    visitConstantDeclaration(node) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Types.GLOVoid();
        });
    }
    visitVariableDeclaration(node) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Types.GLOVoid();
        });
    }
    visitReal(node) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Types.GLOVoid();
        });
    }
    visitInteger(node) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Types.GLOVoid();
        });
    }
    visitBoolean(node) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Types.GLOVoid();
        });
    }
    visitString(node) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Types.GLOVoid();
        });
    }
    visitProcedureDeclaration(node) {
        return __awaiter(this, void 0, void 0, function* () {
            const procedure = new Types.GLOProcedure((args, rewrite) => __awaiter(this, void 0, void 0, function* () {
                yield this.withNewScope(node.name.name, (scope) => __awaiter(this, void 0, void 0, function* () {
                    const symbol = this.scope.resolve(node.name.name); // Guaranteed by TypeChecker
                    if (!this.scope.has(symbol)) {
                        // Allow recursion
                        scope.insert(symbol);
                        scope.changeValue(node.name.name, procedure);
                        new symbol_1.LocalSymbolScope(node.name.name, symbol_1.SymbolScopeType.Procedure, this.scope);
                    }
                    // Copy in parameter values
                    node.args
                        // Filter uninitialized variables
                        .filter((arg, i) => !(args[i] instanceof Types.GLOVoid))
                        // Filter unitialized array indices
                        .map(arg => arg.name)
                        .forEach((argName, i) => {
                        scope.changeValue(argName, clone_deep_1.default(args[i]));
                    });
                    for (let i = 0; i < node.constantDeclarations.length; i++) {
                        yield this.visit(node.constantDeclarations[i]);
                    }
                    for (let i = 0; i < node.variableDeclarations.length; i++) {
                        yield this.visit(node.variableDeclarations[i]);
                    }
                    for (let i = 0; i < node.statementList.length; i++) {
                        yield this.visit(node.statementList[i]);
                    }
                    // Copy out parameter values in parent scope
                    for (let i = node.args.length - 1; i >= 0; i--) {
                        const arg = node.args[i];
                        const currentRewrite = rewrite[i];
                        if (currentRewrite) {
                            if (currentRewrite.accessors) {
                                scope
                                    .getParent()
                                    .changeArrayValue(currentRewrite.name, currentRewrite.accessors, scope.resolveValue(arg.name));
                            }
                            else {
                                scope
                                    .getParent()
                                    .changeValue(currentRewrite.name, scope.resolveValue(arg.name));
                            }
                        }
                    }
                }));
            }));
            this.scope.changeValue(node.name.name, procedure);
            return new Types.GLOVoid();
        });
    }
    visitIf(node) {
        return __awaiter(this, void 0, void 0, function* () {
            const condition = yield this.visit(node.condition);
            if (condition.equals(Types.GLOBoolean.true)) {
                for (let i = 0; i < node.statementList.length; i++) {
                    yield this.visit(node.statementList[i]);
                }
            }
            else {
                if (node.next) {
                    if (Array.isArray(node.next)) {
                        for (let i = 0; i < node.next.length; i++) {
                            yield this.visit(node.next[i]);
                        }
                    }
                    else {
                        yield this.visit(node.next);
                    }
                }
            }
            return new Types.GLOVoid();
        });
    }
    visitAnd(node) {
        return __awaiter(this, void 0, void 0, function* () {
            const left = yield this.visit(node.left);
            const right = yield this.visit(node.right);
            return new Types.GLOBoolean(left.equals(Types.GLOBoolean.true) && right.equals(Types.GLOBoolean.true));
        });
    }
    visitOr(node) {
        return __awaiter(this, void 0, void 0, function* () {
            const left = yield this.visit(node.left);
            const right = yield this.visit(node.right);
            return new Types.GLOBoolean(left.equals(Types.GLOBoolean.true) || right.equals(Types.GLOBoolean.true));
        });
    }
    visitNot(node) {
        return __awaiter(this, void 0, void 0, function* () {
            const target = yield this.visit(node.target);
            return target.equals(Types.GLOBoolean.true)
                ? Types.GLOBoolean.false
                : Types.GLOBoolean.true;
        });
    }
    visitFunctionCall(node) {
        return __awaiter(this, void 0, void 0, function* () {
            const args = yield Promise.all(node.args.map(arg => this.visit(arg)));
            const func = this.scope.resolveValue(node.name);
            yield func.call(args, node.args);
            const returnValue = this.scope.resolveValue(node.name)
                .returnValue;
            if (!returnValue) {
                throw new error_1.default(node, `Η συνάρτηση '${node.name}' δεν επιστρέφει κάποια τιμή`);
            }
            return returnValue;
        });
    }
    visitProcedureCall(node) {
        return __awaiter(this, void 0, void 0, function* () {
            const args = yield Promise.all(node.args.map(arg => {
                if (arg instanceof AST.VariableAST) {
                    return this.visitVariable(arg, false);
                }
                else if (arg instanceof AST.ArrayAccessAST) {
                    return this.visitArrayAccess(arg, false);
                }
                else {
                    return this.visit(arg);
                }
            }));
            const procedure = this.scope.resolveValue(node.name);
            yield procedure.call(args, yield Promise.all(node.args.map((arg) => __awaiter(this, void 0, void 0, function* () {
                if (arg instanceof AST.VariableAST) {
                    return !this.scope.resolve(arg.name).isConstant
                        ? {
                            name: arg.name,
                            accessors: null,
                        }
                        : false;
                }
                else if (arg instanceof AST.ArrayAccessAST) {
                    return {
                        name: arg.array.name,
                        accessors: yield Promise.all(arg.accessors.map(arg => this.visit(arg))),
                    };
                }
                else
                    return false;
            }))));
            return new Types.GLOVoid();
        });
    }
    visitFor(node) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.visitAssignment(new AST.AssignmentAST(node.counter, node.startValue));
            if ((yield this.visit(node.step)).equals(new Types.GLOInteger(0))) {
                throw new error_1.default(node.step, 'Απαγορεύεται επανάληψη με βήμα 0');
            }
            else {
                while ((yield this.visit(node.step)).greaterThan(new Types.GLOInteger(0))
                    ? (yield this.visit(node.counter)).lessEqualsThan(yield this.visit(node.endValue))
                    : (yield this.visit(node.counter)).greaterEqualsThan(yield this.visit(node.endValue))) {
                    for (let i = 0; i < node.statementList.length; i++) {
                        yield this.visit(node.statementList[i]);
                    }
                    yield this.visit(new AST.AssignmentAST(node.counter, new AST.PlusAST(node.counter, new ast_1.IntegerConstantAST((yield this.visit(node.step)) /* Guaranteed by TypeChecker */))));
                }
            }
            return new Types.GLOVoid();
        });
    }
    visitWhile(node) {
        return __awaiter(this, void 0, void 0, function* () {
            while ((yield this.visit(node.condition)).equals(Types.GLOBoolean.true)) {
                for (let i = 0; i < node.statementList.length; i++) {
                    yield this.visit(node.statementList[i]);
                }
            }
            return new Types.GLOVoid();
        });
    }
    visitRepeat(node) {
        return __awaiter(this, void 0, void 0, function* () {
            do {
                for (let i = 0; i < node.statementList.length; i++) {
                    yield this.visit(node.statementList[i]);
                }
            } while ((yield this.visit(node.condition)).equals(Types.GLOBoolean.false));
            return new Types.GLOVoid();
        });
    }
    visitSubrange(node) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Types.GLOSubrange(node.left, node.right);
        });
    }
    visitArray(node) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Types.GLOVoid();
        });
    }
    visitArrayAccess(node, initializationCheck = true) {
        return __awaiter(this, void 0, void 0, function* () {
            const array = this.scope.resolveValue(node.array.name);
            if (!array) {
                throw new error_1.default(node, `Program error: Array accessed without being initialized`);
            }
            if (!Types.isGLOArray(array)) {
                throw new error_1.default(node, `Program error: Expected array access variable to be array`);
            }
            const dimensionLength = this.scope.resolve(node.array.name, symbol_1.VariableSymbol)
                .dimensionLength;
            error_1.assertEquality(node, node.accessors.length, dimensionLength.length, `Ο πίνακας είναι ${dimensionLength.length}-διάστατος αλλά ${node.accessors.length === 1 ? 'δόθηκε' : 'δόθηκαν'} ${node.accessors.length} ${node.accessors.length === 1 ? 'δείκτης' : 'δείκτες'}`);
            const accessorValues = yield Promise.all(node.accessors.map(node => this.visit(node)));
            for (let i = 0; i < accessorValues.length; i++) {
                const accessorValue = accessorValues[i];
                error_1.assert(node.accessors[i], accessorValue.greaterEqualsThan(new Types.GLOInteger(1)), `Ο δείκτης του πίνακα '${node.array.name}' πρέπει να είναι μεγαλύτερος ή ίσος του 1'`);
                error_1.assert(node.accessors[i], accessorValue.lessEqualsThan(yield this.visit(dimensionLength[i])), `Ο δείκτης του πίνακα '${node.array.name}' έχει τιμή ${accessorValue.print()}, εκτός ορίων του πίνακα`);
            }
            const value = array.getValue(accessorValues);
            if (!value && initializationCheck) {
                throw new error_1.default(node, `Προσπάθησα να χρησιμοποιήσω το στοιχείο του πίνακα '${node.array.name}' χωρίς πρώτα αυτό να έχει αρχικοποιηθεί`);
            }
            return value;
        });
    }
    visitFunctionDeclaration(node) {
        return __awaiter(this, void 0, void 0, function* () {
            const func = new Types.GLOFunction((args) => __awaiter(this, void 0, void 0, function* () {
                yield this.withNewScope(node.name.name, (scope) => __awaiter(this, void 0, void 0, function* () {
                    const symbol = this.scope.resolve(node.name.name); // Guaranteed by TypeChecker
                    if (!this.scope.has(symbol)) {
                        // Allow recursion
                        scope.insert(symbol);
                        scope.changeValue(node.name.name, func);
                        new symbol_1.LocalSymbolScope(node.name.name, symbol_1.SymbolScopeType.Function, this.scope);
                    }
                    node.args
                        .map(arg => arg.name)
                        .forEach((argName, i) => {
                        scope.changeValue(argName, args[i]);
                    });
                    for (let i = 0; i < node.constantDeclarations.length; i++) {
                        yield this.visit(node.constantDeclarations[i]);
                    }
                    for (let i = 0; i < node.variableDeclarations.length; i++) {
                        yield this.visit(node.variableDeclarations[i]);
                    }
                    for (let i = 0; i < node.statementList.length; i++) {
                        yield this.visit(node.statementList[i]);
                    }
                }));
            }));
            this.scope.changeValue(node.name.name, func);
            return new Types.GLOVoid();
        });
    }
    visitWrite(node) {
        return __awaiter(this, void 0, void 0, function* () {
            const args = yield Promise.all(node.args.map(arg => this.visit(arg))).then(args => args.map(arg => arg.print()));
            yield this.options.write(...args);
            return new Types.GLOVoid();
        });
    }
    visitRead(node) {
        return __awaiter(this, void 0, void 0, function* () {
            const noInfoError = {
                start: {
                    linePosition: -1,
                    characterPosition: -1,
                },
                end: {
                    linePosition: -1,
                    characterPosition: -1,
                },
            };
            const argNames = node.args.map(arg => arg instanceof ast_1.VariableAST ? arg.name : arg.array.name);
            const variableTypes = node.args.map((arg, i) => arg instanceof ast_1.VariableAST
                ? this.scope.resolve(argNames[i]).type
                : this.scope.resolve(argNames[i]).type
                    .componentType);
            const values = [];
            for (let i = 0; i < node.args.length; i++) {
                const argNode = node.args[i];
                const expectedType = variableTypes[i];
                const name = argNames[i];
                const reading = yield this.options.read(argNode);
                if (expectedType === Types.GLOReal) {
                    if (/^[+-]?\d+(\.\d+)*$/.test(reading)) {
                        values.push(new Types.GLOReal(parseFloat(reading)));
                    }
                    else {
                        throw new error_1.default(noInfoError, `Περίμενα να διαβάσω πραγματική τιμή στη μεταβλητή ${name} αλλά έλαβα μη έγκυρη πραγματική τιμή '${reading}'`);
                    }
                }
                else if (expectedType === Types.GLOInteger) {
                    if (/^[+-]?\d+$/.test(reading)) {
                        values.push(new Types.GLOInteger(parseInt(reading)));
                    }
                    else {
                        throw new error_1.default(noInfoError, `Περίμενα να διαβάσω ακέραια τιμή στη μεταβλητή ${name} αλλά έλαβα μη έγκυρη ακέραια τιμή '${reading}'`);
                    }
                }
                else if (expectedType === Types.GLOString) {
                    values.push(new Types.GLOString(reading));
                }
                else {
                    throw new Error(`Invalid expected read type ${expectedType.constructor.name}`);
                }
            }
            for (let i = 0; i < node.args.length; i++) {
                const arg = node.args[i];
                const value = values[i];
                // const valueType = value.constructor as typeof Types.GLODataType;
                // const name = argNames[i];
                // const variableType = variableTypes[i];
                // Types.assertTypeEquality({
                //   node: arg,
                //   left: variableType,
                //   right: valueType,
                //   allowPromoteLeft: false,
                //   message: `Προσπάθησα να διαβάσω την τιμή '${value.print()}' τύπου RIGHT_TYPE στην μεταβλητή '${name}' μη συμβατού τύπου LEFT_TYPE`,
                // });
                if (arg instanceof AST.VariableAST) {
                    this.scope.changeValue(arg.name, value);
                }
                else {
                    this.scope.changeArrayValue(arg.array.name, yield Promise.all(arg.accessors.map(arg => this.visit(arg))), value);
                }
            }
            return new Types.GLOVoid();
        });
    }
    run() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.visit(this.ast);
            return;
        });
    }
}
exports.Interpreter = Interpreter;
//# sourceMappingURL=Interpreter.js.map

/***/ }),

/***/ "./glo/modules/interpreter/node_modules/clone-deep/index.js":
/*!******************************************************************!*\
  !*** ./glo/modules/interpreter/node_modules/clone-deep/index.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Module dependenices
 */

const clone = __webpack_require__(/*! shallow-clone */ "./glo/modules/interpreter/node_modules/shallow-clone/index.js");
const typeOf = __webpack_require__(/*! kind-of */ "./glo/modules/interpreter/node_modules/kind-of/index.js");
const isPlainObject = __webpack_require__(/*! is-plain-object */ "./glo/modules/interpreter/node_modules/is-plain-object/index.js");

function cloneDeep(val, instanceClone) {
  switch (typeOf(val)) {
    case 'object':
      return cloneObjectDeep(val, instanceClone);
    case 'array':
      return cloneArrayDeep(val, instanceClone);
    default: {
      return clone(val);
    }
  }
}

function cloneObjectDeep(val, instanceClone) {
  if (typeof instanceClone === 'function') {
    return instanceClone(val);
  }
  if (instanceClone || isPlainObject(val)) {
    const res = new val.constructor();
    for (let key in val) {
      res[key] = cloneDeep(val[key], instanceClone);
    }
    return res;
  }
  return val;
}

function cloneArrayDeep(val, instanceClone) {
  const res = new val.constructor(val.length);
  for (let i = 0; i < val.length; i++) {
    res[i] = cloneDeep(val[i], instanceClone);
  }
  return res;
}

/**
 * Expose `cloneDeep`
 */

module.exports = cloneDeep;


/***/ }),

/***/ "./glo/modules/interpreter/node_modules/is-plain-object/index.js":
/*!***********************************************************************!*\
  !*** ./glo/modules/interpreter/node_modules/is-plain-object/index.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * is-plain-object <https://github.com/jonschlinkert/is-plain-object>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */



var isObject = __webpack_require__(/*! isobject */ "./glo/modules/interpreter/node_modules/isobject/index.js");

function isObjectObject(o) {
  return isObject(o) === true
    && Object.prototype.toString.call(o) === '[object Object]';
}

module.exports = function isPlainObject(o) {
  var ctor,prot;

  if (isObjectObject(o) === false) return false;

  // If has modified constructor
  ctor = o.constructor;
  if (typeof ctor !== 'function') return false;

  // If has modified prototype
  prot = ctor.prototype;
  if (isObjectObject(prot) === false) return false;

  // If constructor does not have an Object-specific method
  if (prot.hasOwnProperty('isPrototypeOf') === false) {
    return false;
  }

  // Most likely a plain Object
  return true;
};


/***/ }),

/***/ "./glo/modules/interpreter/node_modules/isobject/index.js":
/*!****************************************************************!*\
  !*** ./glo/modules/interpreter/node_modules/isobject/index.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * isobject <https://github.com/jonschlinkert/isobject>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */



module.exports = function isObject(val) {
  return val != null && typeof val === 'object' && Array.isArray(val) === false;
};


/***/ }),

/***/ "./glo/modules/interpreter/node_modules/kind-of/index.js":
/*!***************************************************************!*\
  !*** ./glo/modules/interpreter/node_modules/kind-of/index.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var toString = Object.prototype.toString;

module.exports = function kindOf(val) {
  if (val === void 0) return 'undefined';
  if (val === null) return 'null';

  var type = typeof val;
  if (type === 'boolean') return 'boolean';
  if (type === 'string') return 'string';
  if (type === 'number') return 'number';
  if (type === 'symbol') return 'symbol';
  if (type === 'function') {
    return isGeneratorFn(val) ? 'generatorfunction' : 'function';
  }

  if (isArray(val)) return 'array';
  if (isBuffer(val)) return 'buffer';
  if (isArguments(val)) return 'arguments';
  if (isDate(val)) return 'date';
  if (isError(val)) return 'error';
  if (isRegexp(val)) return 'regexp';

  switch (ctorName(val)) {
    case 'Symbol': return 'symbol';
    case 'Promise': return 'promise';

    // Set, Map, WeakSet, WeakMap
    case 'WeakMap': return 'weakmap';
    case 'WeakSet': return 'weakset';
    case 'Map': return 'map';
    case 'Set': return 'set';

    // 8-bit typed arrays
    case 'Int8Array': return 'int8array';
    case 'Uint8Array': return 'uint8array';
    case 'Uint8ClampedArray': return 'uint8clampedarray';

    // 16-bit typed arrays
    case 'Int16Array': return 'int16array';
    case 'Uint16Array': return 'uint16array';

    // 32-bit typed arrays
    case 'Int32Array': return 'int32array';
    case 'Uint32Array': return 'uint32array';
    case 'Float32Array': return 'float32array';
    case 'Float64Array': return 'float64array';
  }

  if (isGeneratorObj(val)) {
    return 'generator';
  }

  // Non-plain objects
  type = toString.call(val);
  switch (type) {
    case '[object Object]': return 'object';
    // iterators
    case '[object Map Iterator]': return 'mapiterator';
    case '[object Set Iterator]': return 'setiterator';
    case '[object String Iterator]': return 'stringiterator';
    case '[object Array Iterator]': return 'arrayiterator';
  }

  // other
  return type.slice(8, -1).toLowerCase().replace(/\s/g, '');
};

function ctorName(val) {
  return typeof val.constructor === 'function' ? val.constructor.name : null;
}

function isArray(val) {
  if (Array.isArray) return Array.isArray(val);
  return val instanceof Array;
}

function isError(val) {
  return val instanceof Error || (typeof val.message === 'string' && val.constructor && typeof val.constructor.stackTraceLimit === 'number');
}

function isDate(val) {
  if (val instanceof Date) return true;
  return typeof val.toDateString === 'function'
    && typeof val.getDate === 'function'
    && typeof val.setDate === 'function';
}

function isRegexp(val) {
  if (val instanceof RegExp) return true;
  return typeof val.flags === 'string'
    && typeof val.ignoreCase === 'boolean'
    && typeof val.multiline === 'boolean'
    && typeof val.global === 'boolean';
}

function isGeneratorFn(name, val) {
  return ctorName(name) === 'GeneratorFunction';
}

function isGeneratorObj(val) {
  return typeof val.throw === 'function'
    && typeof val.return === 'function'
    && typeof val.next === 'function';
}

function isArguments(val) {
  try {
    if (typeof val.length === 'number' && typeof val.callee === 'function') {
      return true;
    }
  } catch (err) {
    if (err.message.indexOf('callee') !== -1) {
      return true;
    }
  }
  return false;
}

/**
 * If you need to support Safari 5-7 (8-10 yr-old browser),
 * take a look at https://github.com/feross/is-buffer
 */

function isBuffer(val) {
  if (val.constructor && typeof val.constructor.isBuffer === 'function') {
    return val.constructor.isBuffer(val);
  }
  return false;
}


/***/ }),

/***/ "./glo/modules/interpreter/node_modules/shallow-clone/index.js":
/*!*********************************************************************!*\
  !*** ./glo/modules/interpreter/node_modules/shallow-clone/index.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Buffer) {/*!
 * shallow-clone <https://github.com/jonschlinkert/shallow-clone>
 *
 * Copyright (c) 2015-present, Jon Schlinkert.
 * Released under the MIT License.
 */



const valueOf = Symbol.prototype.valueOf;
const typeOf = __webpack_require__(/*! kind-of */ "./glo/modules/interpreter/node_modules/kind-of/index.js");

function clone(val, deep) {
  switch (typeOf(val)) {
    case 'array':
      return val.slice();
    case 'object':
      return Object.assign({}, val);
    case 'date':
      return new val.constructor(Number(val));
    case 'map':
      return new Map(val);
    case 'set':
      return new Set(val);
    case 'buffer':
      return cloneBuffer(val);
    case 'symbol':
      return cloneSymbol(val);
    case 'arraybuffer':
      return cloneArrayBuffer(val);
    case 'float32array':
    case 'float64array':
    case 'int16array':
    case 'int32array':
    case 'int8array':
    case 'uint16array':
    case 'uint32array':
    case 'uint8clampedarray':
    case 'uint8array':
      return cloneTypedArray(val);
    case 'regexp':
      return cloneRegExp(val);
    case 'error':
      return Object.create(val);
    default: {
      return val;
    }
  }
}

function cloneRegExp(val) {
  const flags = val.flags !== void 0 ? val.flags : (/\w+$/.exec(val) || void 0);
  const re = new val.constructor(val.source, flags);
  re.lastIndex = val.lastIndex;
  return re;
}

function cloneArrayBuffer(val) {
  const res = new val.constructor(val.byteLength);
  new Uint8Array(res).set(new Uint8Array(val));
  return res;
}

function cloneTypedArray(val, deep) {
  return new val.constructor(val.buffer, val.byteOffset, val.length);
}

function cloneBuffer(val) {
  const len = val.length;
  const buf = Buffer.allocUnsafe ? Buffer.allocUnsafe(len) : Buffer.from(len);
  val.copy(buf);
  return buf;
}

function cloneSymbol(val) {
  return valueOf ? Object(valueOf.call(val)) : {};
}

/**
 * Expose `clone`
 */

module.exports = clone;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../webapp/node_modules/node-libs-browser/node_modules/buffer/index.js */ "./glo/modules/webapp/node_modules/node-libs-browser/node_modules/buffer/index.js").Buffer))

/***/ }),

/***/ "./glo/modules/lexer/lib/Lexer.js":
/*!****************************************!*\
  !*** ./glo/modules/lexer/lib/Lexer.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Lexer = void 0;
const Token = __importStar(__webpack_require__(/*! ./token */ "./glo/modules/lexer/lib/token/index.js"));
const case_insensitive_map_1 = __importDefault(__webpack_require__(/*! @glossa-glo/case-insensitive-map */ "./glo/modules/case-insensitive-map/lib/CaseInsensitiveMap.js"));
const Types = __importStar(__webpack_require__(/*! @glossa-glo/data-types */ "./glo/modules/data-types/lib/index.js"));
const error_1 = __importDefault(__webpack_require__(/*! @glossa-glo/error */ "./glo/modules/error/lib/GLOError.js"));
class Lexer {
    constructor(sourceCode) {
        this.numberRegex = /^\d$/;
        this.idFirstCharacterRegex = /^[α-ωΑ-ΩίϊΐόάέύϋΰήώΊΪΪ́ΌΆΈΎΫΫ́ΉΏa-zA-Z_]$/;
        this.idRegex = /^[α-ωΑ-ΩίϊΐόάέύϋΰήώΊΪΪ́ΌΆΈΎΫΫ́ΉΏa-zA-Z0-9_]$/;
        this.whitespaceRegex = /^[^\S\n]$/;
        this.sourceCode = sourceCode;
        this.position = 0;
        this.currentCharacter = this.sourceCode[this.position];
    }
    get linePosition() {
        return this.sourceCode.slice(0, this.position).split('\n').length - 1;
    }
    get characterPosition() {
        const lastNewline = this.sourceCode
            .slice(0, this.position)
            .lastIndexOf('\n');
        return lastNewline !== -1 ? this.position - lastNewline - 1 : this.position;
    }
    getPositionMinus(a) {
        this.position -= a;
        const position = {
            linePosition: this.linePosition,
            characterPosition: this.characterPosition,
        };
        this.position += a;
        return position;
    }
    peek(length = 1) {
        const peekPosition = this.position + length;
        if (peekPosition >= this.sourceCode.length) {
            return null;
        }
        else {
            return this.sourceCode.substring(this.position + 1, peekPosition + 1);
        }
    }
    advance(length = 1) {
        this.position += length;
        if (this.position >= this.sourceCode.length) {
            return null;
        }
        else {
            return this.sourceCode[this.position];
        }
    }
    whitespace() {
        while (this.currentCharacter !== null &&
            this.currentCharacter.match(this.whitespaceRegex)) {
            this.currentCharacter = this.advance();
        }
    }
    comment() {
        while (this.currentCharacter != '\n' && this.currentCharacter != null) {
            this.currentCharacter = this.advance();
        }
    }
    number() {
        const startPosition = {
            linePosition: this.linePosition,
            characterPosition: this.characterPosition,
        };
        let number = '';
        while (this.currentCharacter !== null &&
            this.currentCharacter.match(this.numberRegex)) {
            number += this.currentCharacter;
            this.currentCharacter = this.advance();
        }
        if (this.currentCharacter == '.' &&
            this.peek() != '.' // Fix conflicts with integer subrange type
        ) {
            number += this.currentCharacter;
            this.currentCharacter = this.advance();
            while (this.currentCharacter !== null &&
                this.currentCharacter.match(this.numberRegex)) {
                number += this.currentCharacter;
                this.currentCharacter = this.advance();
            }
            return new Token.RealConstToken(new Types.GLOReal(parseFloat(number)))
                .inheritStartPositionFrom(startPosition)
                .inheritEndPositionFrom(this);
        }
        else {
            return new Token.IntegerConstToken(new Types.GLOInteger(parseInt(number)))
                .inheritStartPositionFrom(startPosition)
                .inheritEndPositionFrom(this);
        }
    }
    id() {
        const startPosition = {
            linePosition: this.linePosition,
            characterPosition: this.characterPosition,
        };
        let id = '';
        while (this.currentCharacter !== null &&
            this.currentCharacter.match(this.idRegex)) {
            id += this.currentCharacter;
            this.currentCharacter = this.advance();
        }
        if (Lexer.reservedKeywords.has(id)) {
            return Lexer.reservedKeywords.get(id)()
                .inheritStartPositionFrom(startPosition)
                .inheritEndPositionFrom(this);
        }
        else {
            return new Token.IdToken(id)
                .inheritStartPositionFrom(startPosition)
                .inheritEndPositionFrom(this);
        }
    }
    stringConstant(terminator) {
        let str = '';
        const startPosition = {
            start: {
                linePosition: this.linePosition,
                characterPosition: this.characterPosition - 1,
            },
            end: {
                linePosition: this.linePosition,
                characterPosition: this.characterPosition,
            },
        };
        while (this.currentCharacter != terminator) {
            if (this.currentCharacter === '\n' || this.currentCharacter === null) {
                throw new error_1.default(startPosition, 'Η σταθερά χαρακτήρων δεν τελειώνει');
            }
            str += this.currentCharacter;
            this.currentCharacter = this.advance();
        }
        this.currentCharacter = this.advance();
        return new Token.StringConstantToken(new Types.GLOString(str))
            .inheritStartPositionFrom(this)
            .inheritEndPositionFrom(this);
    }
    peekNextToken() {
        const oldPosition = this.position;
        const oldCurrentCharacter = this.currentCharacter;
        const token = this.getNextToken();
        this.position = oldPosition;
        this.currentCharacter = oldCurrentCharacter;
        return token;
    }
    getNextToken() {
        while (this.currentCharacter != null) {
            if (this.currentCharacter.match(this.whitespaceRegex)) {
                this.whitespace();
                continue;
            }
            else if (this.currentCharacter == '!') {
                this.comment();
                continue;
            }
            else if (this.currentCharacter == '<' && this.peek() == '-') {
                this.currentCharacter = this.advance(2);
                return new Token.AssignToken()
                    .inheritStartPositionFrom(this.getPositionMinus(2))
                    .inheritEndPositionFrom(this);
            }
            else if (this.currentCharacter == '\n') {
                this.currentCharacter = this.advance();
                return new Token.NewLineToken()
                    .inheritStartPositionFrom(this.getPositionMinus(1))
                    .inheritEndPositionFrom(this);
            }
            else if (this.currentCharacter == '+') {
                this.currentCharacter = this.advance();
                return new Token.PlusToken()
                    .inheritStartPositionFrom(this.getPositionMinus(1))
                    .inheritEndPositionFrom(this);
            }
            else if (this.currentCharacter == '-') {
                this.currentCharacter = this.advance();
                return new Token.MinusToken()
                    .inheritStartPositionFrom(this.getPositionMinus(1))
                    .inheritEndPositionFrom(this);
            }
            else if (this.currentCharacter == '*') {
                this.currentCharacter = this.advance();
                return new Token.MultiplicationToken()
                    .inheritStartPositionFrom(this.getPositionMinus(1))
                    .inheritEndPositionFrom(this);
            }
            else if (this.currentCharacter == '/') {
                this.currentCharacter = this.advance();
                return new Token.RealDivisionToken()
                    .inheritStartPositionFrom(this.getPositionMinus(1))
                    .inheritEndPositionFrom(this);
            }
            else if (this.currentCharacter == '(') {
                this.currentCharacter = this.advance();
                return new Token.OpeningParenthesisToken()
                    .inheritStartPositionFrom(this.getPositionMinus(1))
                    .inheritEndPositionFrom(this);
            }
            else if (this.currentCharacter == ')') {
                this.currentCharacter = this.advance();
                return new Token.ClosingParenthesisToken()
                    .inheritStartPositionFrom(this.getPositionMinus(1))
                    .inheritEndPositionFrom(this);
            }
            else if (this.currentCharacter == '.') {
                this.currentCharacter = this.advance();
                if (this.currentCharacter == '.') {
                    this.currentCharacter = this.advance();
                    return new Token.DoubleDotToken()
                        .inheritStartPositionFrom(this.getPositionMinus(2))
                        .inheritEndPositionFrom(this);
                }
                else {
                    return new Token.DotToken()
                        .inheritStartPositionFrom(this.getPositionMinus(1))
                        .inheritEndPositionFrom(this);
                }
            }
            else if (this.currentCharacter == ':') {
                this.currentCharacter = this.advance();
                return new Token.ColonToken()
                    .inheritStartPositionFrom(this.getPositionMinus(1))
                    .inheritEndPositionFrom(this);
            }
            else if (this.currentCharacter == ',') {
                this.currentCharacter = this.advance();
                return new Token.CommaToken()
                    .inheritStartPositionFrom(this.getPositionMinus(1))
                    .inheritEndPositionFrom(this);
            }
            else if (this.currentCharacter == '=') {
                this.currentCharacter = this.advance();
                return new Token.EqualsToken()
                    .inheritStartPositionFrom(this.getPositionMinus(1))
                    .inheritEndPositionFrom(this);
            }
            else if (this.currentCharacter == '<' && this.peek() == '>') {
                this.currentCharacter = this.advance(2);
                return new Token.NotEqualsToken()
                    .inheritStartPositionFrom(this.getPositionMinus(2))
                    .inheritEndPositionFrom(this);
            }
            else if (this.currentCharacter == '>' && this.peek() == '=') {
                this.currentCharacter = this.advance(2);
                return new Token.GreaterEqualsToken()
                    .inheritStartPositionFrom(this.getPositionMinus(2))
                    .inheritEndPositionFrom(this);
            }
            else if (this.currentCharacter == '<' && this.peek() == '=') {
                this.currentCharacter = this.advance(2);
                return new Token.LessEqualsToken()
                    .inheritStartPositionFrom(this.getPositionMinus(2))
                    .inheritEndPositionFrom(this);
            }
            else if (this.currentCharacter == '>') {
                this.currentCharacter = this.advance();
                return new Token.GreaterThanToken()
                    .inheritStartPositionFrom(this.getPositionMinus(1))
                    .inheritEndPositionFrom(this);
            }
            else if (this.currentCharacter == '<') {
                this.currentCharacter = this.advance();
                return new Token.LessThanToken()
                    .inheritStartPositionFrom(this.getPositionMinus(1))
                    .inheritEndPositionFrom(this);
            }
            else if (this.currentCharacter == '[') {
                this.currentCharacter = this.advance();
                return new Token.OpeningBracketToken()
                    .inheritStartPositionFrom(this.getPositionMinus(1))
                    .inheritEndPositionFrom(this);
            }
            else if (this.currentCharacter == ']') {
                this.currentCharacter = this.advance();
                return new Token.ClosingBracketToken()
                    .inheritStartPositionFrom(this.getPositionMinus(1))
                    .inheritEndPositionFrom(this);
            }
            else if (this.currentCharacter == "'" || this.currentCharacter == '"') {
                const stringTerminator = this.currentCharacter;
                this.currentCharacter = this.advance();
                return this.stringConstant(stringTerminator)
                    .inheritStartPositionFrom(this.getPositionMinus(1))
                    .inheritEndPositionFrom(this);
            }
            else if (this.currentCharacter == '^') {
                this.currentCharacter = this.advance();
                return new Token.ExponentiationToken()
                    .inheritStartPositionFrom(this.getPositionMinus(1))
                    .inheritEndPositionFrom(this);
            }
            else if (this.currentCharacter.match(this.numberRegex)) {
                return this.number();
            }
            else if (this.currentCharacter.match(this.idFirstCharacterRegex)) {
                return this.id();
            }
            else {
                throw new error_1.default({
                    start: this,
                    end: {
                        linePosition: this.linePosition,
                        characterPosition: this.characterPosition + 1,
                    },
                }, `Μη δεκτός χαρακτήρας '${this.currentCharacter}'`);
            }
        }
        return new Token.EofToken().inheritPositionFrom({
            start: this,
            end: this,
        });
    }
}
exports.Lexer = Lexer;
Lexer.reservedKeywords = new case_insensitive_map_1.default([
    ['ΠΡΟΓΡΑΜΜΑ', () => new Token.ProgramToken()],
    ['ΜΕΤΑΒΛΗΤΕΣ', () => new Token.VariableToken()],
    ['ΑΡΧΗ', () => new Token.BeginToken()],
    ['ΤΕΛΟΣ_ΠΡΟΓΡΑΜΜΑΤΟΣ', () => new Token.ProgramEndToken()],
    ['DIV', () => new Token.IntegerDivisionToken()],
    ['ΑΚΕΡΑΙΕΣ', () => new Token.IntegerToken()],
    ['ΠΡΑΓΜΑΤΙΚΕΣ', () => new Token.RealToken()],
    ['ΔΙΑΔΙΚΑΣΙΑ', () => new Token.ProcedureToken()],
    ['ΑΛΗΘΗΣ', () => new Token.TrueToken()],
    ['ΨΕΥΔΗΣ', () => new Token.FalseToken()],
    ['ΛΟΓΙΚΕΣ', () => new Token.BooleanToken()],
    ['ΑΝ', () => new Token.IfToken()],
    ['ΤΟΤΕ', () => new Token.ThenToken()],
    ['ΑΛΛΙΩΣ', () => new Token.ElseToken()],
    ['ΧΑΡΑΚΤΗΡΕΣ', () => new Token.StringToken()],
    ['ΚΑΙ', () => new Token.AndToken()],
    ['Η', () => new Token.OrToken()],
    ['ΟΧΙ', () => new Token.NotToken()],
    ['ΓΙΑ', () => new Token.ForToken()],
    ['TO', () => new Token.ToToken()],
    ['ΑΠΟ', () => new Token.FromToken()],
    ['ΜΕΧΡΙ', () => new Token.ToToken()],
    ['ΕΠΑΝΑΛΑΒΕ', () => new Token.DoToken()],
    ['ΟΣΟ', () => new Token.WhileToken()],
    ['ΑΡΧΗ_ΕΠΑΝΑΛΗΨΗΣ', () => new Token.RepeatToken()],
    ['ΜΕΧΡΙΣ_ΟΤΟΥ', () => new Token.UntilToken()],
    ['ΣΥΝΑΡΤΗΣΗ', () => new Token.FunctionToken()],
    ['ΤΕΛΟΣ_ΕΠΑΝΑΛΗΨΗΣ', () => new Token.LoopEndToken()],
    ['ΜΕ_ΒΗΜΑ', () => new Token.WithStepToken()],
    ['ΤΕΛΟΣ_ΣΥΝΑΡΤΗΣΗΣ', () => new Token.FunctionEndToken()],
    ['ΤΕΛΟΣ_ΔΙΑΔΙΚΑΣΙΑΣ', () => new Token.ProcedureEndToken()],
    ['ΚΑΛΕΣΕ', () => new Token.CallToken()],
    ['ΔΙΑΒΑΣΕ', () => new Token.ReadToken()],
    ['ΓΡΑΨΕ', () => new Token.WriteToken()],
    ['ΑΛΛΙΩΣ_ΑΝ', () => new Token.ElseIfToken()],
    ['ΤΕΛΟΣ_ΑΝ', () => new Token.EndIfToken()],
    ['ΑΚΕΡΑΙΑ', () => new Token.IntegerSingularToken()],
    ['ΠΡΑΓΜΑΤΙΚΗ', () => new Token.RealSingularToken()],
    ['ΛΟΓΙΚΗ', () => new Token.BooleanSingularToken()],
    ['ΧΑΡΑΚΤΗΡΑΣ', () => new Token.StringSingularToken()],
    ['ΕΠΙΛΕΞΕ', () => new Token.SelectToken()],
    ['ΠΕΡΙΠΤΩΣΗ', () => new Token.CaseToken()],
    ['ΤΕΛΟΣ_ΕΠΙΛΟΓΩΝ', () => new Token.SelectEndToken()],
    ['MOD', () => new Token.ModToken()],
    ['ΣΤΑΘΕΡΕΣ', () => new Token.ConstantToken()],
]);
__exportStar(__webpack_require__(/*! ./token */ "./glo/modules/lexer/lib/token/index.js"), exports);
//# sourceMappingURL=Lexer.js.map

/***/ }),

/***/ "./glo/modules/lexer/lib/token/AndToken.js":
/*!*************************************************!*\
  !*** ./glo/modules/lexer/lib/token/AndToken.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const _1 = __webpack_require__(/*! . */ "./glo/modules/lexer/lib/token/index.js");
class AndToken extends _1.Token {
    constructor() {
        super(...arguments);
        this.value = null;
    }
}
exports.default = AndToken;
//# sourceMappingURL=AndToken.js.map

/***/ }),

/***/ "./glo/modules/lexer/lib/token/AssignToken.js":
/*!****************************************************!*\
  !*** ./glo/modules/lexer/lib/token/AssignToken.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const _1 = __webpack_require__(/*! . */ "./glo/modules/lexer/lib/token/index.js");
class AssignToken extends _1.Token {
    constructor() {
        super(...arguments);
        this.value = null;
    }
}
exports.default = AssignToken;
//# sourceMappingURL=AssignToken.js.map

/***/ }),

/***/ "./glo/modules/lexer/lib/token/BeginToken.js":
/*!***************************************************!*\
  !*** ./glo/modules/lexer/lib/token/BeginToken.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const _1 = __webpack_require__(/*! . */ "./glo/modules/lexer/lib/token/index.js");
class BeginToken extends _1.Token {
    constructor() {
        super(...arguments);
        this.value = null;
    }
}
exports.default = BeginToken;
//# sourceMappingURL=BeginToken.js.map

/***/ }),

/***/ "./glo/modules/lexer/lib/token/BooleanSingularToken.js":
/*!*************************************************************!*\
  !*** ./glo/modules/lexer/lib/token/BooleanSingularToken.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const _1 = __webpack_require__(/*! . */ "./glo/modules/lexer/lib/token/index.js");
class BooleanSingularToken extends _1.Token {
    constructor() {
        super(...arguments);
        this.value = null;
    }
}
exports.default = BooleanSingularToken;
//# sourceMappingURL=BooleanSingularToken.js.map

/***/ }),

/***/ "./glo/modules/lexer/lib/token/BooleanToken.js":
/*!*****************************************************!*\
  !*** ./glo/modules/lexer/lib/token/BooleanToken.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const _1 = __webpack_require__(/*! . */ "./glo/modules/lexer/lib/token/index.js");
class BooleanToken extends _1.Token {
    constructor() {
        super(...arguments);
        this.value = null;
    }
}
exports.default = BooleanToken;
//# sourceMappingURL=BooleanToken.js.map

/***/ }),

/***/ "./glo/modules/lexer/lib/token/CallToken.js":
/*!**************************************************!*\
  !*** ./glo/modules/lexer/lib/token/CallToken.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const _1 = __webpack_require__(/*! . */ "./glo/modules/lexer/lib/token/index.js");
class CallToken extends _1.Token {
    constructor() {
        super(...arguments);
        this.value = null;
    }
}
exports.default = CallToken;
//# sourceMappingURL=CallToken.js.map

/***/ }),

/***/ "./glo/modules/lexer/lib/token/CaseToken.js":
/*!**************************************************!*\
  !*** ./glo/modules/lexer/lib/token/CaseToken.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const _1 = __webpack_require__(/*! . */ "./glo/modules/lexer/lib/token/index.js");
class CaseToken extends _1.Token {
    constructor() {
        super(...arguments);
        this.value = null;
    }
}
exports.default = CaseToken;
//# sourceMappingURL=CaseToken.js.map

/***/ }),

/***/ "./glo/modules/lexer/lib/token/ClosingBracketToken.js":
/*!************************************************************!*\
  !*** ./glo/modules/lexer/lib/token/ClosingBracketToken.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const _1 = __webpack_require__(/*! . */ "./glo/modules/lexer/lib/token/index.js");
class ClosingBracketToken extends _1.Token {
    constructor() {
        super(...arguments);
        this.value = null;
    }
}
exports.default = ClosingBracketToken;
//# sourceMappingURL=ClosingBracketToken.js.map

/***/ }),

/***/ "./glo/modules/lexer/lib/token/ClosingParenthesisToken.js":
/*!****************************************************************!*\
  !*** ./glo/modules/lexer/lib/token/ClosingParenthesisToken.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const _1 = __webpack_require__(/*! . */ "./glo/modules/lexer/lib/token/index.js");
class ClosingParenthesisToken extends _1.Token {
    constructor() {
        super(...arguments);
        this.value = null;
    }
}
exports.default = ClosingParenthesisToken;
//# sourceMappingURL=ClosingParenthesisToken.js.map

/***/ }),

/***/ "./glo/modules/lexer/lib/token/ColonToken.js":
/*!***************************************************!*\
  !*** ./glo/modules/lexer/lib/token/ColonToken.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const _1 = __webpack_require__(/*! . */ "./glo/modules/lexer/lib/token/index.js");
class ColonToken extends _1.Token {
    constructor() {
        super(...arguments);
        this.value = null;
    }
}
exports.default = ColonToken;
//# sourceMappingURL=ColonToken.js.map

/***/ }),

/***/ "./glo/modules/lexer/lib/token/CommaToken.js":
/*!***************************************************!*\
  !*** ./glo/modules/lexer/lib/token/CommaToken.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const _1 = __webpack_require__(/*! . */ "./glo/modules/lexer/lib/token/index.js");
class CommaToken extends _1.Token {
    constructor() {
        super(...arguments);
        this.value = null;
    }
}
exports.default = CommaToken;
//# sourceMappingURL=CommaToken.js.map

/***/ }),

/***/ "./glo/modules/lexer/lib/token/ConstantToken.js":
/*!******************************************************!*\
  !*** ./glo/modules/lexer/lib/token/ConstantToken.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const _1 = __webpack_require__(/*! . */ "./glo/modules/lexer/lib/token/index.js");
class ConstantToken extends _1.Token {
    constructor() {
        super(...arguments);
        this.value = null;
    }
}
exports.default = ConstantToken;
//# sourceMappingURL=ConstantToken.js.map

/***/ }),

/***/ "./glo/modules/lexer/lib/token/DotToken.js":
/*!*************************************************!*\
  !*** ./glo/modules/lexer/lib/token/DotToken.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const _1 = __webpack_require__(/*! . */ "./glo/modules/lexer/lib/token/index.js");
class DotToken extends _1.Token {
    constructor() {
        super(...arguments);
        this.value = null;
    }
}
exports.default = DotToken;
//# sourceMappingURL=DotToken.js.map

/***/ }),

/***/ "./glo/modules/lexer/lib/token/DoubleDotToken.js":
/*!*******************************************************!*\
  !*** ./glo/modules/lexer/lib/token/DoubleDotToken.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const _1 = __webpack_require__(/*! . */ "./glo/modules/lexer/lib/token/index.js");
class DoubleDotToken extends _1.Token {
    constructor() {
        super(...arguments);
        this.value = null;
    }
}
exports.default = DoubleDotToken;
//# sourceMappingURL=DoubleDotToken.js.map

/***/ }),

/***/ "./glo/modules/lexer/lib/token/ElseIfToken.js":
/*!****************************************************!*\
  !*** ./glo/modules/lexer/lib/token/ElseIfToken.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const _1 = __webpack_require__(/*! . */ "./glo/modules/lexer/lib/token/index.js");
class ElseIfToken extends _1.Token {
    constructor() {
        super(...arguments);
        this.value = null;
    }
}
exports.default = ElseIfToken;
//# sourceMappingURL=ElseIfToken.js.map

/***/ }),

/***/ "./glo/modules/lexer/lib/token/ElseToken.js":
/*!**************************************************!*\
  !*** ./glo/modules/lexer/lib/token/ElseToken.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const _1 = __webpack_require__(/*! . */ "./glo/modules/lexer/lib/token/index.js");
class ElseToken extends _1.Token {
    constructor() {
        super(...arguments);
        this.value = null;
    }
}
exports.default = ElseToken;
//# sourceMappingURL=ElseToken.js.map

/***/ }),

/***/ "./glo/modules/lexer/lib/token/EndIfToken.js":
/*!***************************************************!*\
  !*** ./glo/modules/lexer/lib/token/EndIfToken.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const _1 = __webpack_require__(/*! . */ "./glo/modules/lexer/lib/token/index.js");
class EndIfToken extends _1.Token {
    constructor() {
        super(...arguments);
        this.value = null;
    }
}
exports.default = EndIfToken;
//# sourceMappingURL=EndIfToken.js.map

/***/ }),

/***/ "./glo/modules/lexer/lib/token/EofToken.js":
/*!*************************************************!*\
  !*** ./glo/modules/lexer/lib/token/EofToken.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const _1 = __webpack_require__(/*! . */ "./glo/modules/lexer/lib/token/index.js");
class EofToken extends _1.Token {
    constructor() {
        super(...arguments);
        this.value = null;
    }
}
exports.default = EofToken;
//# sourceMappingURL=EofToken.js.map

/***/ }),

/***/ "./glo/modules/lexer/lib/token/EqualsToken.js":
/*!****************************************************!*\
  !*** ./glo/modules/lexer/lib/token/EqualsToken.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const _1 = __webpack_require__(/*! . */ "./glo/modules/lexer/lib/token/index.js");
class EqualsToken extends _1.Token {
    constructor() {
        super(...arguments);
        this.value = null;
    }
}
exports.default = EqualsToken;
//# sourceMappingURL=EqualsToken.js.map

/***/ }),

/***/ "./glo/modules/lexer/lib/token/ExponentiationToken.js":
/*!************************************************************!*\
  !*** ./glo/modules/lexer/lib/token/ExponentiationToken.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const _1 = __webpack_require__(/*! . */ "./glo/modules/lexer/lib/token/index.js");
class ExponentiationToken extends _1.Token {
    constructor() {
        super(...arguments);
        this.value = null;
    }
}
exports.default = ExponentiationToken;
//# sourceMappingURL=ExponentiationToken.js.map

/***/ }),

/***/ "./glo/modules/lexer/lib/token/FalseToken.js":
/*!***************************************************!*\
  !*** ./glo/modules/lexer/lib/token/FalseToken.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const _1 = __webpack_require__(/*! . */ "./glo/modules/lexer/lib/token/index.js");
class FalseToken extends _1.Token {
    constructor() {
        super(...arguments);
        this.value = false;
    }
}
exports.default = FalseToken;
//# sourceMappingURL=FalseToken.js.map

/***/ }),

/***/ "./glo/modules/lexer/lib/token/ForToken.js":
/*!*************************************************!*\
  !*** ./glo/modules/lexer/lib/token/ForToken.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const _1 = __webpack_require__(/*! . */ "./glo/modules/lexer/lib/token/index.js");
class ForToken extends _1.Token {
    constructor() {
        super(...arguments);
        this.value = null;
    }
}
exports.default = ForToken;
//# sourceMappingURL=ForToken.js.map

/***/ }),

/***/ "./glo/modules/lexer/lib/token/FromToken.js":
/*!**************************************************!*\
  !*** ./glo/modules/lexer/lib/token/FromToken.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const _1 = __webpack_require__(/*! . */ "./glo/modules/lexer/lib/token/index.js");
class FromToken extends _1.Token {
    constructor() {
        super(...arguments);
        this.value = null;
    }
}
exports.default = FromToken;
//# sourceMappingURL=FromToken.js.map

/***/ }),

/***/ "./glo/modules/lexer/lib/token/FunctionEndToken.js":
/*!*********************************************************!*\
  !*** ./glo/modules/lexer/lib/token/FunctionEndToken.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const _1 = __webpack_require__(/*! . */ "./glo/modules/lexer/lib/token/index.js");
class FunctionEndToken extends _1.Token {
    constructor() {
        super(...arguments);
        this.value = null;
    }
}
exports.default = FunctionEndToken;
//# sourceMappingURL=FunctionEndToken.js.map

/***/ }),

/***/ "./glo/modules/lexer/lib/token/FunctionToken.js":
/*!******************************************************!*\
  !*** ./glo/modules/lexer/lib/token/FunctionToken.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const _1 = __webpack_require__(/*! . */ "./glo/modules/lexer/lib/token/index.js");
class FunctionToken extends _1.Token {
    constructor() {
        super(...arguments);
        this.value = null;
    }
}
exports.default = FunctionToken;
//# sourceMappingURL=FunctionToken.js.map

/***/ }),

/***/ "./glo/modules/lexer/lib/token/GreaterEqualsToken.js":
/*!***********************************************************!*\
  !*** ./glo/modules/lexer/lib/token/GreaterEqualsToken.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const _1 = __webpack_require__(/*! . */ "./glo/modules/lexer/lib/token/index.js");
class GreaterEqualsToken extends _1.Token {
    constructor() {
        super(...arguments);
        this.value = null;
    }
}
exports.default = GreaterEqualsToken;
//# sourceMappingURL=GreaterEqualsToken.js.map

/***/ }),

/***/ "./glo/modules/lexer/lib/token/GreaterThanToken.js":
/*!*********************************************************!*\
  !*** ./glo/modules/lexer/lib/token/GreaterThanToken.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const _1 = __webpack_require__(/*! . */ "./glo/modules/lexer/lib/token/index.js");
class GreaterThanToken extends _1.Token {
    constructor() {
        super(...arguments);
        this.value = null;
    }
}
exports.default = GreaterThanToken;
//# sourceMappingURL=GreaterThanToken.js.map

/***/ }),

/***/ "./glo/modules/lexer/lib/token/IdToken.js":
/*!************************************************!*\
  !*** ./glo/modules/lexer/lib/token/IdToken.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const _1 = __webpack_require__(/*! . */ "./glo/modules/lexer/lib/token/index.js");
class IdToken extends _1.Token {
    constructor(id) {
        super();
        this.value = id;
    }
}
exports.default = IdToken;
//# sourceMappingURL=IdToken.js.map

/***/ }),

/***/ "./glo/modules/lexer/lib/token/IfToken.js":
/*!************************************************!*\
  !*** ./glo/modules/lexer/lib/token/IfToken.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const _1 = __webpack_require__(/*! . */ "./glo/modules/lexer/lib/token/index.js");
class IfToken extends _1.Token {
    constructor() {
        super(...arguments);
        this.value = null;
    }
}
exports.default = IfToken;
//# sourceMappingURL=IfToken.js.map

/***/ }),

/***/ "./glo/modules/lexer/lib/token/IntegerConstToken.js":
/*!**********************************************************!*\
  !*** ./glo/modules/lexer/lib/token/IntegerConstToken.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const _1 = __webpack_require__(/*! . */ "./glo/modules/lexer/lib/token/index.js");
class IntegerConstToken extends _1.Token {
    constructor(value) {
        super();
        this.value = value;
    }
}
exports.default = IntegerConstToken;
//# sourceMappingURL=IntegerConstToken.js.map

/***/ }),

/***/ "./glo/modules/lexer/lib/token/IntegerDivisionToken.js":
/*!*************************************************************!*\
  !*** ./glo/modules/lexer/lib/token/IntegerDivisionToken.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const _1 = __webpack_require__(/*! . */ "./glo/modules/lexer/lib/token/index.js");
class IntegerDivisionToken extends _1.Token {
    constructor() {
        super(...arguments);
        this.value = null;
    }
}
exports.default = IntegerDivisionToken;
//# sourceMappingURL=IntegerDivisionToken.js.map

/***/ }),

/***/ "./glo/modules/lexer/lib/token/IntegerSingularToken.js":
/*!*************************************************************!*\
  !*** ./glo/modules/lexer/lib/token/IntegerSingularToken.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const _1 = __webpack_require__(/*! . */ "./glo/modules/lexer/lib/token/index.js");
class IntegerSingularToken extends _1.Token {
    constructor() {
        super(...arguments);
        this.value = null;
    }
}
exports.default = IntegerSingularToken;
//# sourceMappingURL=IntegerSingularToken.js.map

/***/ }),

/***/ "./glo/modules/lexer/lib/token/IntegerToken.js":
/*!*****************************************************!*\
  !*** ./glo/modules/lexer/lib/token/IntegerToken.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const _1 = __webpack_require__(/*! . */ "./glo/modules/lexer/lib/token/index.js");
class IntegerToken extends _1.Token {
    constructor() {
        super(...arguments);
        this.value = null;
    }
}
exports.default = IntegerToken;
//# sourceMappingURL=IntegerToken.js.map

/***/ }),

/***/ "./glo/modules/lexer/lib/token/LessEqualsToken.js":
/*!********************************************************!*\
  !*** ./glo/modules/lexer/lib/token/LessEqualsToken.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const _1 = __webpack_require__(/*! . */ "./glo/modules/lexer/lib/token/index.js");
class LessEqualsToken extends _1.Token {
    constructor() {
        super(...arguments);
        this.value = null;
    }
}
exports.default = LessEqualsToken;
//# sourceMappingURL=LessEqualsToken.js.map

/***/ }),

/***/ "./glo/modules/lexer/lib/token/LessThanToken.js":
/*!******************************************************!*\
  !*** ./glo/modules/lexer/lib/token/LessThanToken.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const _1 = __webpack_require__(/*! . */ "./glo/modules/lexer/lib/token/index.js");
class LessThanToken extends _1.Token {
    constructor() {
        super(...arguments);
        this.value = null;
    }
}
exports.default = LessThanToken;
//# sourceMappingURL=LessThanToken.js.map

/***/ }),

/***/ "./glo/modules/lexer/lib/token/LoopEndToken.js":
/*!*****************************************************!*\
  !*** ./glo/modules/lexer/lib/token/LoopEndToken.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const _1 = __webpack_require__(/*! . */ "./glo/modules/lexer/lib/token/index.js");
class LoopEndToken extends _1.Token {
    constructor() {
        super(...arguments);
        this.value = null;
    }
}
exports.default = LoopEndToken;
//# sourceMappingURL=LoopEndToken.js.map

/***/ }),

/***/ "./glo/modules/lexer/lib/token/MinusToken.js":
/*!***************************************************!*\
  !*** ./glo/modules/lexer/lib/token/MinusToken.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const _1 = __webpack_require__(/*! . */ "./glo/modules/lexer/lib/token/index.js");
class MinusToken extends _1.Token {
    constructor() {
        super(...arguments);
        this.value = null;
    }
}
exports.default = MinusToken;
//# sourceMappingURL=MinusToken.js.map

/***/ }),

/***/ "./glo/modules/lexer/lib/token/ModToken.js":
/*!*************************************************!*\
  !*** ./glo/modules/lexer/lib/token/ModToken.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const _1 = __webpack_require__(/*! . */ "./glo/modules/lexer/lib/token/index.js");
class ModToken extends _1.Token {
    constructor() {
        super(...arguments);
        this.value = null;
    }
}
exports.default = ModToken;
//# sourceMappingURL=ModToken.js.map

/***/ }),

/***/ "./glo/modules/lexer/lib/token/MultiplicationToken.js":
/*!************************************************************!*\
  !*** ./glo/modules/lexer/lib/token/MultiplicationToken.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const _1 = __webpack_require__(/*! . */ "./glo/modules/lexer/lib/token/index.js");
class MultiplicationToken extends _1.Token {
    constructor() {
        super(...arguments);
        this.value = null;
    }
}
exports.default = MultiplicationToken;
//# sourceMappingURL=MultiplicationToken.js.map

/***/ }),

/***/ "./glo/modules/lexer/lib/token/NewLineToken.js":
/*!*****************************************************!*\
  !*** ./glo/modules/lexer/lib/token/NewLineToken.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const _1 = __webpack_require__(/*! . */ "./glo/modules/lexer/lib/token/index.js");
class NewLineToken extends _1.Token {
    constructor() {
        super(...arguments);
        this.value = null;
    }
}
exports.default = NewLineToken;
//# sourceMappingURL=NewLineToken.js.map

/***/ }),

/***/ "./glo/modules/lexer/lib/token/NotEqualsToken.js":
/*!*******************************************************!*\
  !*** ./glo/modules/lexer/lib/token/NotEqualsToken.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const _1 = __webpack_require__(/*! . */ "./glo/modules/lexer/lib/token/index.js");
class NotEqualsToken extends _1.Token {
    constructor() {
        super(...arguments);
        this.value = null;
    }
}
exports.default = NotEqualsToken;
//# sourceMappingURL=NotEqualsToken.js.map

/***/ }),

/***/ "./glo/modules/lexer/lib/token/NotToken.js":
/*!*************************************************!*\
  !*** ./glo/modules/lexer/lib/token/NotToken.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const _1 = __webpack_require__(/*! . */ "./glo/modules/lexer/lib/token/index.js");
class NotToken extends _1.Token {
    constructor() {
        super(...arguments);
        this.value = null;
    }
}
exports.default = NotToken;
//# sourceMappingURL=NotToken.js.map

/***/ }),

/***/ "./glo/modules/lexer/lib/token/OpeningBracketToken.js":
/*!************************************************************!*\
  !*** ./glo/modules/lexer/lib/token/OpeningBracketToken.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const _1 = __webpack_require__(/*! . */ "./glo/modules/lexer/lib/token/index.js");
class OpeningBracketToken extends _1.Token {
    constructor() {
        super(...arguments);
        this.value = null;
    }
}
exports.default = OpeningBracketToken;
//# sourceMappingURL=OpeningBracketToken.js.map

/***/ }),

/***/ "./glo/modules/lexer/lib/token/OpeningParenthesisToken.js":
/*!****************************************************************!*\
  !*** ./glo/modules/lexer/lib/token/OpeningParenthesisToken.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const _1 = __webpack_require__(/*! . */ "./glo/modules/lexer/lib/token/index.js");
class OpeningParenthesisToken extends _1.Token {
    constructor() {
        super(...arguments);
        this.value = null;
    }
}
exports.default = OpeningParenthesisToken;
//# sourceMappingURL=OpeningParenthesisToken.js.map

/***/ }),

/***/ "./glo/modules/lexer/lib/token/OrToken.js":
/*!************************************************!*\
  !*** ./glo/modules/lexer/lib/token/OrToken.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const _1 = __webpack_require__(/*! . */ "./glo/modules/lexer/lib/token/index.js");
class OrToken extends _1.Token {
    constructor() {
        super(...arguments);
        this.value = null;
    }
}
exports.default = OrToken;
//# sourceMappingURL=OrToken.js.map

/***/ }),

/***/ "./glo/modules/lexer/lib/token/PlusToken.js":
/*!**************************************************!*\
  !*** ./glo/modules/lexer/lib/token/PlusToken.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const _1 = __webpack_require__(/*! . */ "./glo/modules/lexer/lib/token/index.js");
class PlusToken extends _1.Token {
    constructor() {
        super(...arguments);
        this.value = null;
    }
}
exports.default = PlusToken;
//# sourceMappingURL=PlusToken.js.map

/***/ }),

/***/ "./glo/modules/lexer/lib/token/ProcedureEndToken.js":
/*!**********************************************************!*\
  !*** ./glo/modules/lexer/lib/token/ProcedureEndToken.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const _1 = __webpack_require__(/*! . */ "./glo/modules/lexer/lib/token/index.js");
class ProcedureEndToken extends _1.Token {
    constructor() {
        super(...arguments);
        this.value = null;
    }
}
exports.default = ProcedureEndToken;
//# sourceMappingURL=ProcedureEndToken.js.map

/***/ }),

/***/ "./glo/modules/lexer/lib/token/ProcedureToken.js":
/*!*******************************************************!*\
  !*** ./glo/modules/lexer/lib/token/ProcedureToken.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const _1 = __webpack_require__(/*! . */ "./glo/modules/lexer/lib/token/index.js");
class ProcedureToken extends _1.Token {
    constructor() {
        super(...arguments);
        this.value = null;
    }
}
exports.default = ProcedureToken;
//# sourceMappingURL=ProcedureToken.js.map

/***/ }),

/***/ "./glo/modules/lexer/lib/token/ProgramEndToken.js":
/*!********************************************************!*\
  !*** ./glo/modules/lexer/lib/token/ProgramEndToken.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const _1 = __webpack_require__(/*! . */ "./glo/modules/lexer/lib/token/index.js");
class ProgramEndToken extends _1.Token {
    constructor() {
        super(...arguments);
        this.value = null;
    }
}
exports.default = ProgramEndToken;
//# sourceMappingURL=ProgramEndToken.js.map

/***/ }),

/***/ "./glo/modules/lexer/lib/token/ProgramToken.js":
/*!*****************************************************!*\
  !*** ./glo/modules/lexer/lib/token/ProgramToken.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const _1 = __webpack_require__(/*! . */ "./glo/modules/lexer/lib/token/index.js");
class ProgramToken extends _1.Token {
    constructor() {
        super(...arguments);
        this.value = null;
    }
}
exports.default = ProgramToken;
//# sourceMappingURL=ProgramToken.js.map

/***/ }),

/***/ "./glo/modules/lexer/lib/token/ReadToken.js":
/*!**************************************************!*\
  !*** ./glo/modules/lexer/lib/token/ReadToken.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const _1 = __webpack_require__(/*! . */ "./glo/modules/lexer/lib/token/index.js");
class ReadToken extends _1.Token {
    constructor() {
        super(...arguments);
        this.value = null;
    }
}
exports.default = ReadToken;
//# sourceMappingURL=ReadToken.js.map

/***/ }),

/***/ "./glo/modules/lexer/lib/token/RealConstToken.js":
/*!*******************************************************!*\
  !*** ./glo/modules/lexer/lib/token/RealConstToken.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const _1 = __webpack_require__(/*! . */ "./glo/modules/lexer/lib/token/index.js");
class RealConstToken extends _1.Token {
    constructor(value) {
        super();
        this.value = value;
    }
}
exports.default = RealConstToken;
//# sourceMappingURL=RealConstToken.js.map

/***/ }),

/***/ "./glo/modules/lexer/lib/token/RealDivisionToken.js":
/*!**********************************************************!*\
  !*** ./glo/modules/lexer/lib/token/RealDivisionToken.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const _1 = __webpack_require__(/*! . */ "./glo/modules/lexer/lib/token/index.js");
class RealDivisionToken extends _1.Token {
    constructor() {
        super(...arguments);
        this.value = null;
    }
}
exports.default = RealDivisionToken;
//# sourceMappingURL=RealDivisionToken.js.map

/***/ }),

/***/ "./glo/modules/lexer/lib/token/RealSingularToken.js":
/*!**********************************************************!*\
  !*** ./glo/modules/lexer/lib/token/RealSingularToken.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const _1 = __webpack_require__(/*! . */ "./glo/modules/lexer/lib/token/index.js");
class RealSingularToken extends _1.Token {
    constructor() {
        super(...arguments);
        this.value = null;
    }
}
exports.default = RealSingularToken;
//# sourceMappingURL=RealSingularToken.js.map

/***/ }),

/***/ "./glo/modules/lexer/lib/token/RealToken.js":
/*!**************************************************!*\
  !*** ./glo/modules/lexer/lib/token/RealToken.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const _1 = __webpack_require__(/*! . */ "./glo/modules/lexer/lib/token/index.js");
class RealToken extends _1.Token {
    constructor() {
        super(...arguments);
        this.value = null;
    }
}
exports.default = RealToken;
//# sourceMappingURL=RealToken.js.map

/***/ }),

/***/ "./glo/modules/lexer/lib/token/RepeatToken.js":
/*!****************************************************!*\
  !*** ./glo/modules/lexer/lib/token/RepeatToken.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const _1 = __webpack_require__(/*! . */ "./glo/modules/lexer/lib/token/index.js");
class RepeatToken extends _1.Token {
    constructor() {
        super(...arguments);
        this.value = null;
    }
}
exports.default = RepeatToken;
//# sourceMappingURL=RepeatToken.js.map

/***/ }),

/***/ "./glo/modules/lexer/lib/token/SelectEndToken.js":
/*!*******************************************************!*\
  !*** ./glo/modules/lexer/lib/token/SelectEndToken.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const _1 = __webpack_require__(/*! . */ "./glo/modules/lexer/lib/token/index.js");
class SelectEndToken extends _1.Token {
    constructor() {
        super(...arguments);
        this.value = null;
    }
}
exports.default = SelectEndToken;
//# sourceMappingURL=SelectEndToken.js.map

/***/ }),

/***/ "./glo/modules/lexer/lib/token/SelectToken.js":
/*!****************************************************!*\
  !*** ./glo/modules/lexer/lib/token/SelectToken.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const _1 = __webpack_require__(/*! . */ "./glo/modules/lexer/lib/token/index.js");
class SelectToken extends _1.Token {
    constructor() {
        super(...arguments);
        this.value = null;
    }
}
exports.default = SelectToken;
//# sourceMappingURL=SelectToken.js.map

/***/ }),

/***/ "./glo/modules/lexer/lib/token/StringConstantToken.js":
/*!************************************************************!*\
  !*** ./glo/modules/lexer/lib/token/StringConstantToken.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const _1 = __webpack_require__(/*! . */ "./glo/modules/lexer/lib/token/index.js");
class StringConstantToken extends _1.Token {
    constructor(value) {
        super();
        this.value = value;
    }
}
exports.default = StringConstantToken;
//# sourceMappingURL=StringConstantToken.js.map

/***/ }),

/***/ "./glo/modules/lexer/lib/token/StringSingularToken.js":
/*!************************************************************!*\
  !*** ./glo/modules/lexer/lib/token/StringSingularToken.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const _1 = __webpack_require__(/*! . */ "./glo/modules/lexer/lib/token/index.js");
class StringSingularToken extends _1.Token {
    constructor() {
        super(...arguments);
        this.value = null;
    }
}
exports.default = StringSingularToken;
//# sourceMappingURL=StringSingularToken.js.map

/***/ }),

/***/ "./glo/modules/lexer/lib/token/StringToken.js":
/*!****************************************************!*\
  !*** ./glo/modules/lexer/lib/token/StringToken.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const _1 = __webpack_require__(/*! . */ "./glo/modules/lexer/lib/token/index.js");
class StringToken extends _1.Token {
    constructor() {
        super(...arguments);
        this.value = null;
    }
}
exports.default = StringToken;
//# sourceMappingURL=StringToken.js.map

/***/ }),

/***/ "./glo/modules/lexer/lib/token/ThenToken.js":
/*!**************************************************!*\
  !*** ./glo/modules/lexer/lib/token/ThenToken.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const _1 = __webpack_require__(/*! . */ "./glo/modules/lexer/lib/token/index.js");
class ThenToken extends _1.Token {
    constructor() {
        super(...arguments);
        this.value = null;
    }
}
exports.default = ThenToken;
//# sourceMappingURL=ThenToken.js.map

/***/ }),

/***/ "./glo/modules/lexer/lib/token/ToToken.js":
/*!************************************************!*\
  !*** ./glo/modules/lexer/lib/token/ToToken.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const _1 = __webpack_require__(/*! . */ "./glo/modules/lexer/lib/token/index.js");
class ToToken extends _1.Token {
    constructor() {
        super(...arguments);
        this.value = null;
    }
}
exports.default = ToToken;
//# sourceMappingURL=ToToken.js.map

/***/ }),

/***/ "./glo/modules/lexer/lib/token/Token.js":
/*!**********************************************!*\
  !*** ./glo/modules/lexer/lib/token/Token.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const error_1 = __webpack_require__(/*! @glossa-glo/error */ "./glo/modules/error/lib/GLOError.js");
class Token extends error_1.DebugInfoProvider {
}
exports.default = Token;
//# sourceMappingURL=Token.js.map

/***/ }),

/***/ "./glo/modules/lexer/lib/token/TrueToken.js":
/*!**************************************************!*\
  !*** ./glo/modules/lexer/lib/token/TrueToken.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const _1 = __webpack_require__(/*! . */ "./glo/modules/lexer/lib/token/index.js");
class TrueToken extends _1.Token {
    constructor() {
        super(...arguments);
        this.value = true;
    }
}
exports.default = TrueToken;
//# sourceMappingURL=TrueToken.js.map

/***/ }),

/***/ "./glo/modules/lexer/lib/token/UntilToken.js":
/*!***************************************************!*\
  !*** ./glo/modules/lexer/lib/token/UntilToken.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const _1 = __webpack_require__(/*! . */ "./glo/modules/lexer/lib/token/index.js");
class UntilToken extends _1.Token {
    constructor() {
        super(...arguments);
        this.value = null;
    }
}
exports.default = UntilToken;
//# sourceMappingURL=UntilToken.js.map

/***/ }),

/***/ "./glo/modules/lexer/lib/token/VariableToken.js":
/*!******************************************************!*\
  !*** ./glo/modules/lexer/lib/token/VariableToken.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const _1 = __webpack_require__(/*! . */ "./glo/modules/lexer/lib/token/index.js");
class VariableToken extends _1.Token {
    constructor() {
        super(...arguments);
        this.value = null;
    }
}
exports.default = VariableToken;
//# sourceMappingURL=VariableToken.js.map

/***/ }),

/***/ "./glo/modules/lexer/lib/token/WhileToken.js":
/*!***************************************************!*\
  !*** ./glo/modules/lexer/lib/token/WhileToken.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const _1 = __webpack_require__(/*! . */ "./glo/modules/lexer/lib/token/index.js");
class WhileToken extends _1.Token {
    constructor() {
        super(...arguments);
        this.value = null;
    }
}
exports.default = WhileToken;
//# sourceMappingURL=WhileToken.js.map

/***/ }),

/***/ "./glo/modules/lexer/lib/token/WithStepToken.js":
/*!******************************************************!*\
  !*** ./glo/modules/lexer/lib/token/WithStepToken.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const _1 = __webpack_require__(/*! . */ "./glo/modules/lexer/lib/token/index.js");
class WithStepToken extends _1.Token {
    constructor() {
        super(...arguments);
        this.value = null;
    }
}
exports.default = WithStepToken;
//# sourceMappingURL=WithStepToken.js.map

/***/ }),

/***/ "./glo/modules/lexer/lib/token/WriteToken.js":
/*!***************************************************!*\
  !*** ./glo/modules/lexer/lib/token/WriteToken.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const _1 = __webpack_require__(/*! . */ "./glo/modules/lexer/lib/token/index.js");
class WriteToken extends _1.Token {
    constructor() {
        super(...arguments);
        this.value = null;
    }
}
exports.default = WriteToken;
//# sourceMappingURL=WriteToken.js.map

/***/ }),

/***/ "./glo/modules/lexer/lib/token/index.js":
/*!**********************************************!*\
  !*** ./glo/modules/lexer/lib/token/index.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConstantToken = exports.SelectEndToken = exports.CaseToken = exports.SelectToken = exports.ExponentiationToken = exports.StringSingularToken = exports.RealSingularToken = exports.IntegerSingularToken = exports.BooleanSingularToken = exports.ElseIfToken = exports.EndIfToken = exports.CallToken = exports.NewLineToken = exports.FromToken = exports.LoopEndToken = exports.WithStepToken = exports.WriteToken = exports.ReadToken = exports.FunctionEndToken = exports.ProcedureEndToken = exports.FunctionToken = exports.ClosingBracketToken = exports.OpeningBracketToken = exports.DoubleDotToken = exports.UntilToken = exports.RepeatToken = exports.WhileToken = exports.DoToken = exports.ToToken = exports.ForToken = exports.NotToken = exports.OrToken = exports.AndToken = exports.StringConstantToken = exports.StringToken = exports.ElseToken = exports.ThenToken = exports.IfToken = exports.LessEqualsToken = exports.GreaterEqualsToken = exports.LessThanToken = exports.GreaterThanToken = exports.NotEqualsToken = exports.EqualsToken = exports.BooleanToken = exports.FalseToken = exports.TrueToken = exports.ModToken = exports.ProcedureToken = exports.VariableToken = exports.RealToken = exports.RealDivisionToken = exports.RealConstToken = exports.ProgramToken = exports.PlusToken = exports.OpeningParenthesisToken = exports.MultiplicationToken = exports.MinusToken = exports.IntegerToken = exports.IntegerDivisionToken = exports.IntegerConstToken = exports.IdToken = exports.EofToken = exports.ProgramEndToken = exports.DotToken = exports.CommaToken = exports.ColonToken = exports.ClosingParenthesisToken = exports.BeginToken = exports.AssignToken = exports.Token = void 0;
const Token_1 = __importDefault(__webpack_require__(/*! ./Token */ "./glo/modules/lexer/lib/token/Token.js"));
exports.Token = Token_1.default;
const AssignToken_1 = __importDefault(__webpack_require__(/*! ./AssignToken */ "./glo/modules/lexer/lib/token/AssignToken.js"));
exports.AssignToken = AssignToken_1.default;
const BeginToken_1 = __importDefault(__webpack_require__(/*! ./BeginToken */ "./glo/modules/lexer/lib/token/BeginToken.js"));
exports.BeginToken = BeginToken_1.default;
const ClosingParenthesisToken_1 = __importDefault(__webpack_require__(/*! ./ClosingParenthesisToken */ "./glo/modules/lexer/lib/token/ClosingParenthesisToken.js"));
exports.ClosingParenthesisToken = ClosingParenthesisToken_1.default;
const ColonToken_1 = __importDefault(__webpack_require__(/*! ./ColonToken */ "./glo/modules/lexer/lib/token/ColonToken.js"));
exports.ColonToken = ColonToken_1.default;
const CommaToken_1 = __importDefault(__webpack_require__(/*! ./CommaToken */ "./glo/modules/lexer/lib/token/CommaToken.js"));
exports.CommaToken = CommaToken_1.default;
const DotToken_1 = __importDefault(__webpack_require__(/*! ./DotToken */ "./glo/modules/lexer/lib/token/DotToken.js"));
exports.DotToken = DotToken_1.default;
const ProgramEndToken_1 = __importDefault(__webpack_require__(/*! ./ProgramEndToken */ "./glo/modules/lexer/lib/token/ProgramEndToken.js"));
exports.ProgramEndToken = ProgramEndToken_1.default;
const EofToken_1 = __importDefault(__webpack_require__(/*! ./EofToken */ "./glo/modules/lexer/lib/token/EofToken.js"));
exports.EofToken = EofToken_1.default;
const IdToken_1 = __importDefault(__webpack_require__(/*! ./IdToken */ "./glo/modules/lexer/lib/token/IdToken.js"));
exports.IdToken = IdToken_1.default;
const IntegerConstToken_1 = __importDefault(__webpack_require__(/*! ./IntegerConstToken */ "./glo/modules/lexer/lib/token/IntegerConstToken.js"));
exports.IntegerConstToken = IntegerConstToken_1.default;
const IntegerDivisionToken_1 = __importDefault(__webpack_require__(/*! ./IntegerDivisionToken */ "./glo/modules/lexer/lib/token/IntegerDivisionToken.js"));
exports.IntegerDivisionToken = IntegerDivisionToken_1.default;
const IntegerToken_1 = __importDefault(__webpack_require__(/*! ./IntegerToken */ "./glo/modules/lexer/lib/token/IntegerToken.js"));
exports.IntegerToken = IntegerToken_1.default;
const MinusToken_1 = __importDefault(__webpack_require__(/*! ./MinusToken */ "./glo/modules/lexer/lib/token/MinusToken.js"));
exports.MinusToken = MinusToken_1.default;
const MultiplicationToken_1 = __importDefault(__webpack_require__(/*! ./MultiplicationToken */ "./glo/modules/lexer/lib/token/MultiplicationToken.js"));
exports.MultiplicationToken = MultiplicationToken_1.default;
const OpeningParenthesisToken_1 = __importDefault(__webpack_require__(/*! ./OpeningParenthesisToken */ "./glo/modules/lexer/lib/token/OpeningParenthesisToken.js"));
exports.OpeningParenthesisToken = OpeningParenthesisToken_1.default;
const PlusToken_1 = __importDefault(__webpack_require__(/*! ./PlusToken */ "./glo/modules/lexer/lib/token/PlusToken.js"));
exports.PlusToken = PlusToken_1.default;
const ProgramToken_1 = __importDefault(__webpack_require__(/*! ./ProgramToken */ "./glo/modules/lexer/lib/token/ProgramToken.js"));
exports.ProgramToken = ProgramToken_1.default;
const RealConstToken_1 = __importDefault(__webpack_require__(/*! ./RealConstToken */ "./glo/modules/lexer/lib/token/RealConstToken.js"));
exports.RealConstToken = RealConstToken_1.default;
const RealDivisionToken_1 = __importDefault(__webpack_require__(/*! ./RealDivisionToken */ "./glo/modules/lexer/lib/token/RealDivisionToken.js"));
exports.RealDivisionToken = RealDivisionToken_1.default;
const RealToken_1 = __importDefault(__webpack_require__(/*! ./RealToken */ "./glo/modules/lexer/lib/token/RealToken.js"));
exports.RealToken = RealToken_1.default;
const VariableToken_1 = __importDefault(__webpack_require__(/*! ./VariableToken */ "./glo/modules/lexer/lib/token/VariableToken.js"));
exports.VariableToken = VariableToken_1.default;
const ProcedureToken_1 = __importDefault(__webpack_require__(/*! ./ProcedureToken */ "./glo/modules/lexer/lib/token/ProcedureToken.js"));
exports.ProcedureToken = ProcedureToken_1.default;
const ModToken_1 = __importDefault(__webpack_require__(/*! ./ModToken */ "./glo/modules/lexer/lib/token/ModToken.js"));
exports.ModToken = ModToken_1.default;
const TrueToken_1 = __importDefault(__webpack_require__(/*! ./TrueToken */ "./glo/modules/lexer/lib/token/TrueToken.js"));
exports.TrueToken = TrueToken_1.default;
const FalseToken_1 = __importDefault(__webpack_require__(/*! ./FalseToken */ "./glo/modules/lexer/lib/token/FalseToken.js"));
exports.FalseToken = FalseToken_1.default;
const BooleanToken_1 = __importDefault(__webpack_require__(/*! ./BooleanToken */ "./glo/modules/lexer/lib/token/BooleanToken.js"));
exports.BooleanToken = BooleanToken_1.default;
const EqualsToken_1 = __importDefault(__webpack_require__(/*! ./EqualsToken */ "./glo/modules/lexer/lib/token/EqualsToken.js"));
exports.EqualsToken = EqualsToken_1.default;
const NotEqualsToken_1 = __importDefault(__webpack_require__(/*! ./NotEqualsToken */ "./glo/modules/lexer/lib/token/NotEqualsToken.js"));
exports.NotEqualsToken = NotEqualsToken_1.default;
const GreaterThanToken_1 = __importDefault(__webpack_require__(/*! ./GreaterThanToken */ "./glo/modules/lexer/lib/token/GreaterThanToken.js"));
exports.GreaterThanToken = GreaterThanToken_1.default;
const LessThanToken_1 = __importDefault(__webpack_require__(/*! ./LessThanToken */ "./glo/modules/lexer/lib/token/LessThanToken.js"));
exports.LessThanToken = LessThanToken_1.default;
const GreaterEqualsToken_1 = __importDefault(__webpack_require__(/*! ./GreaterEqualsToken */ "./glo/modules/lexer/lib/token/GreaterEqualsToken.js"));
exports.GreaterEqualsToken = GreaterEqualsToken_1.default;
const LessEqualsToken_1 = __importDefault(__webpack_require__(/*! ./LessEqualsToken */ "./glo/modules/lexer/lib/token/LessEqualsToken.js"));
exports.LessEqualsToken = LessEqualsToken_1.default;
const IfToken_1 = __importDefault(__webpack_require__(/*! ./IfToken */ "./glo/modules/lexer/lib/token/IfToken.js"));
exports.IfToken = IfToken_1.default;
const ThenToken_1 = __importDefault(__webpack_require__(/*! ./ThenToken */ "./glo/modules/lexer/lib/token/ThenToken.js"));
exports.ThenToken = ThenToken_1.default;
const ElseToken_1 = __importDefault(__webpack_require__(/*! ./ElseToken */ "./glo/modules/lexer/lib/token/ElseToken.js"));
exports.ElseToken = ElseToken_1.default;
const StringToken_1 = __importDefault(__webpack_require__(/*! ./StringToken */ "./glo/modules/lexer/lib/token/StringToken.js"));
exports.StringToken = StringToken_1.default;
const StringConstantToken_1 = __importDefault(__webpack_require__(/*! ./StringConstantToken */ "./glo/modules/lexer/lib/token/StringConstantToken.js"));
exports.StringConstantToken = StringConstantToken_1.default;
const AndToken_1 = __importDefault(__webpack_require__(/*! ./AndToken */ "./glo/modules/lexer/lib/token/AndToken.js"));
exports.AndToken = AndToken_1.default;
const OrToken_1 = __importDefault(__webpack_require__(/*! ./OrToken */ "./glo/modules/lexer/lib/token/OrToken.js"));
exports.OrToken = OrToken_1.default;
const NotToken_1 = __importDefault(__webpack_require__(/*! ./NotToken */ "./glo/modules/lexer/lib/token/NotToken.js"));
exports.NotToken = NotToken_1.default;
const ForToken_1 = __importDefault(__webpack_require__(/*! ./ForToken */ "./glo/modules/lexer/lib/token/ForToken.js"));
exports.ForToken = ForToken_1.default;
const ToToken_1 = __importDefault(__webpack_require__(/*! ./ToToken */ "./glo/modules/lexer/lib/token/ToToken.js"));
exports.ToToken = ToToken_1.default;
const FromToken_1 = __importDefault(__webpack_require__(/*! ./FromToken */ "./glo/modules/lexer/lib/token/FromToken.js"));
exports.DoToken = FromToken_1.default;
const WhileToken_1 = __importDefault(__webpack_require__(/*! ./WhileToken */ "./glo/modules/lexer/lib/token/WhileToken.js"));
exports.WhileToken = WhileToken_1.default;
const RepeatToken_1 = __importDefault(__webpack_require__(/*! ./RepeatToken */ "./glo/modules/lexer/lib/token/RepeatToken.js"));
exports.RepeatToken = RepeatToken_1.default;
const UntilToken_1 = __importDefault(__webpack_require__(/*! ./UntilToken */ "./glo/modules/lexer/lib/token/UntilToken.js"));
exports.UntilToken = UntilToken_1.default;
const DoubleDotToken_1 = __importDefault(__webpack_require__(/*! ./DoubleDotToken */ "./glo/modules/lexer/lib/token/DoubleDotToken.js"));
exports.DoubleDotToken = DoubleDotToken_1.default;
const OpeningBracketToken_1 = __importDefault(__webpack_require__(/*! ./OpeningBracketToken */ "./glo/modules/lexer/lib/token/OpeningBracketToken.js"));
exports.OpeningBracketToken = OpeningBracketToken_1.default;
const ClosingBracketToken_1 = __importDefault(__webpack_require__(/*! ./ClosingBracketToken */ "./glo/modules/lexer/lib/token/ClosingBracketToken.js"));
exports.ClosingBracketToken = ClosingBracketToken_1.default;
const FunctionToken_1 = __importDefault(__webpack_require__(/*! ./FunctionToken */ "./glo/modules/lexer/lib/token/FunctionToken.js"));
exports.FunctionToken = FunctionToken_1.default;
const ProcedureEndToken_1 = __importDefault(__webpack_require__(/*! ./ProcedureEndToken */ "./glo/modules/lexer/lib/token/ProcedureEndToken.js"));
exports.ProcedureEndToken = ProcedureEndToken_1.default;
const FunctionEndToken_1 = __importDefault(__webpack_require__(/*! ./FunctionEndToken */ "./glo/modules/lexer/lib/token/FunctionEndToken.js"));
exports.FunctionEndToken = FunctionEndToken_1.default;
const ReadToken_1 = __importDefault(__webpack_require__(/*! ./ReadToken */ "./glo/modules/lexer/lib/token/ReadToken.js"));
exports.ReadToken = ReadToken_1.default;
const WriteToken_1 = __importDefault(__webpack_require__(/*! ./WriteToken */ "./glo/modules/lexer/lib/token/WriteToken.js"));
exports.WriteToken = WriteToken_1.default;
const WithStepToken_1 = __importDefault(__webpack_require__(/*! ./WithStepToken */ "./glo/modules/lexer/lib/token/WithStepToken.js"));
exports.WithStepToken = WithStepToken_1.default;
const LoopEndToken_1 = __importDefault(__webpack_require__(/*! ./LoopEndToken */ "./glo/modules/lexer/lib/token/LoopEndToken.js"));
exports.LoopEndToken = LoopEndToken_1.default;
const FromToken_2 = __importDefault(__webpack_require__(/*! ./FromToken */ "./glo/modules/lexer/lib/token/FromToken.js"));
exports.FromToken = FromToken_2.default;
const NewLineToken_1 = __importDefault(__webpack_require__(/*! ./NewLineToken */ "./glo/modules/lexer/lib/token/NewLineToken.js"));
exports.NewLineToken = NewLineToken_1.default;
const CallToken_1 = __importDefault(__webpack_require__(/*! ./CallToken */ "./glo/modules/lexer/lib/token/CallToken.js"));
exports.CallToken = CallToken_1.default;
const EndIfToken_1 = __importDefault(__webpack_require__(/*! ./EndIfToken */ "./glo/modules/lexer/lib/token/EndIfToken.js"));
exports.EndIfToken = EndIfToken_1.default;
const ElseIfToken_1 = __importDefault(__webpack_require__(/*! ./ElseIfToken */ "./glo/modules/lexer/lib/token/ElseIfToken.js"));
exports.ElseIfToken = ElseIfToken_1.default;
const BooleanSingularToken_1 = __importDefault(__webpack_require__(/*! ./BooleanSingularToken */ "./glo/modules/lexer/lib/token/BooleanSingularToken.js"));
exports.BooleanSingularToken = BooleanSingularToken_1.default;
const IntegerSingularToken_1 = __importDefault(__webpack_require__(/*! ./IntegerSingularToken */ "./glo/modules/lexer/lib/token/IntegerSingularToken.js"));
exports.IntegerSingularToken = IntegerSingularToken_1.default;
const RealSingularToken_1 = __importDefault(__webpack_require__(/*! ./RealSingularToken */ "./glo/modules/lexer/lib/token/RealSingularToken.js"));
exports.RealSingularToken = RealSingularToken_1.default;
const StringSingularToken_1 = __importDefault(__webpack_require__(/*! ./StringSingularToken */ "./glo/modules/lexer/lib/token/StringSingularToken.js"));
exports.StringSingularToken = StringSingularToken_1.default;
const ExponentiationToken_1 = __importDefault(__webpack_require__(/*! ./ExponentiationToken */ "./glo/modules/lexer/lib/token/ExponentiationToken.js"));
exports.ExponentiationToken = ExponentiationToken_1.default;
const SelectToken_1 = __importDefault(__webpack_require__(/*! ./SelectToken */ "./glo/modules/lexer/lib/token/SelectToken.js"));
exports.SelectToken = SelectToken_1.default;
const CaseToken_1 = __importDefault(__webpack_require__(/*! ./CaseToken */ "./glo/modules/lexer/lib/token/CaseToken.js"));
exports.CaseToken = CaseToken_1.default;
const SelectEndToken_1 = __importDefault(__webpack_require__(/*! ./SelectEndToken */ "./glo/modules/lexer/lib/token/SelectEndToken.js"));
exports.SelectEndToken = SelectEndToken_1.default;
const ConstantToken_1 = __importDefault(__webpack_require__(/*! ./ConstantToken */ "./glo/modules/lexer/lib/token/ConstantToken.js"));
exports.ConstantToken = ConstantToken_1.default;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./glo/modules/library/lib/Library.js":
/*!********************************************!*\
  !*** ./glo/modules/library/lib/Library.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const absoluteValue_1 = __importDefault(__webpack_require__(/*! ./functions/absoluteValue */ "./glo/modules/library/lib/functions/absoluteValue.js"));
const cosine_1 = __importDefault(__webpack_require__(/*! ./functions/cosine */ "./glo/modules/library/lib/functions/cosine.js"));
const exponential_1 = __importDefault(__webpack_require__(/*! ./functions/exponential */ "./glo/modules/library/lib/functions/exponential.js"));
const naturalLogarithm_1 = __importDefault(__webpack_require__(/*! ./functions/naturalLogarithm */ "./glo/modules/library/lib/functions/naturalLogarithm.js"));
const sine_1 = __importDefault(__webpack_require__(/*! ./functions/sine */ "./glo/modules/library/lib/functions/sine.js"));
const squareRoot_1 = __importDefault(__webpack_require__(/*! ./functions/squareRoot */ "./glo/modules/library/lib/functions/squareRoot.js"));
const tangent_1 = __importDefault(__webpack_require__(/*! ./functions/tangent */ "./glo/modules/library/lib/functions/tangent.js"));
const trunctuateReal_1 = __importDefault(__webpack_require__(/*! ./functions/trunctuateReal */ "./glo/modules/library/lib/functions/trunctuateReal.js"));
function injectLibraryToScope(scope) {
    cosine_1.default.inject(scope);
    exponential_1.default.inject(scope);
    naturalLogarithm_1.default.inject(scope);
    sine_1.default.inject(scope);
    tangent_1.default.inject(scope);
    trunctuateReal_1.default.inject(scope);
    squareRoot_1.default.inject(scope);
    absoluteValue_1.default.inject(scope);
}
exports.default = injectLibraryToScope;
//# sourceMappingURL=Library.js.map

/***/ }),

/***/ "./glo/modules/library/lib/functions/LibraryFunction.js":
/*!**************************************************************!*\
  !*** ./glo/modules/library/lib/functions/LibraryFunction.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const data_types_1 = __webpack_require__(/*! @glossa-glo/data-types */ "./glo/modules/data-types/lib/index.js");
const symbol_1 = __webpack_require__(/*! @glossa-glo/symbol */ "./glo/modules/symbol/lib/GLOSymbol.js");
class LibraryFunction {
    constructor(name, types, func) {
        this.func = func;
        this.functionSymbol = new symbol_1.FunctionSymbol(name, types[0].args.map(arg => new symbol_1.VariableSymbol(arg[0], arg[1])), types[0].returnType, types.slice(1).map(type => ({
            args: type.args.map(arg => new symbol_1.VariableSymbol(arg[0], arg[1])),
            returnType: type.returnType,
        })));
    }
    inject(scope) {
        scope.insert(this.functionSymbol);
        scope.changeValue(this.functionSymbol.name, new data_types_1.GLOFunction((args, argDebugInfoProviders) => __awaiter(this, void 0, void 0, function* () {
            const returnValue = this.func(args, argDebugInfoProviders);
            scope.changeFunctionReturnType(this.functionSymbol.name, returnValue);
        })));
    }
}
exports.default = LibraryFunction;
//# sourceMappingURL=LibraryFunction.js.map

/***/ }),

/***/ "./glo/modules/library/lib/functions/absoluteValue.js":
/*!************************************************************!*\
  !*** ./glo/modules/library/lib/functions/absoluteValue.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const data_types_1 = __webpack_require__(/*! @glossa-glo/data-types */ "./glo/modules/data-types/lib/index.js");
const LibraryFunction_1 = __importDefault(__webpack_require__(/*! ./LibraryFunction */ "./glo/modules/library/lib/functions/LibraryFunction.js"));
exports.default = new LibraryFunction_1.default('Α_Τ', [
    // The ordering here matters, as GLOInteger is promotable to GLOReal!!
    { args: [['τιμή', data_types_1.GLOInteger]], returnType: data_types_1.GLOInteger },
    { args: [['τιμή', data_types_1.GLOReal]], returnType: data_types_1.GLOReal },
], args => {
    const value = args[0].value;
    return args[0] instanceof data_types_1.GLOInteger
        ? new data_types_1.GLOInteger(Math.abs(value))
        : new data_types_1.GLOReal(Math.abs(value));
});
//# sourceMappingURL=absoluteValue.js.map

/***/ }),

/***/ "./glo/modules/library/lib/functions/cosine.js":
/*!*****************************************************!*\
  !*** ./glo/modules/library/lib/functions/cosine.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const data_types_1 = __webpack_require__(/*! @glossa-glo/data-types */ "./glo/modules/data-types/lib/index.js");
const LibraryFunction_1 = __importDefault(__webpack_require__(/*! ./LibraryFunction */ "./glo/modules/library/lib/functions/LibraryFunction.js"));
exports.default = new LibraryFunction_1.default('ΣΥΝ', [{ args: [['μοίρες', data_types_1.GLOReal]], returnType: data_types_1.GLOReal }], args => {
    const value = args[0].value;
    const degrees = (value * Math.PI) / 180;
    return new data_types_1.GLOReal(Math.cos(degrees));
});
//# sourceMappingURL=cosine.js.map

/***/ }),

/***/ "./glo/modules/library/lib/functions/exponential.js":
/*!**********************************************************!*\
  !*** ./glo/modules/library/lib/functions/exponential.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const data_types_1 = __webpack_require__(/*! @glossa-glo/data-types */ "./glo/modules/data-types/lib/index.js");
const LibraryFunction_1 = __importDefault(__webpack_require__(/*! ./LibraryFunction */ "./glo/modules/library/lib/functions/LibraryFunction.js"));
exports.default = new LibraryFunction_1.default('Ε', [{ args: [['τιμή', data_types_1.GLOReal]], returnType: data_types_1.GLOReal }], args => {
    const value = args[0].value;
    return new data_types_1.GLOReal(Math.exp(value));
});
//# sourceMappingURL=exponential.js.map

/***/ }),

/***/ "./glo/modules/library/lib/functions/naturalLogarithm.js":
/*!***************************************************************!*\
  !*** ./glo/modules/library/lib/functions/naturalLogarithm.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const data_types_1 = __webpack_require__(/*! @glossa-glo/data-types */ "./glo/modules/data-types/lib/index.js");
const error_1 = __importDefault(__webpack_require__(/*! @glossa-glo/error */ "./glo/modules/error/lib/GLOError.js"));
const LibraryFunction_1 = __importDefault(__webpack_require__(/*! ./LibraryFunction */ "./glo/modules/library/lib/functions/LibraryFunction.js"));
exports.default = new LibraryFunction_1.default('ΛΟΓ', [{ args: [['τιμή', data_types_1.GLOReal]], returnType: data_types_1.GLOReal }], (args, argDebugInfoProviders) => {
    const value = args[0].value;
    if (value <= 0) {
        throw new error_1.default(argDebugInfoProviders[0], 'Δεν επιτρέπεται παράμετρος αρνητική ή μηδέν στη συνάρτηση ΛΟΓ');
    }
    return new data_types_1.GLOReal(Math.log(value));
});
//# sourceMappingURL=naturalLogarithm.js.map

/***/ }),

/***/ "./glo/modules/library/lib/functions/sine.js":
/*!***************************************************!*\
  !*** ./glo/modules/library/lib/functions/sine.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const data_types_1 = __webpack_require__(/*! @glossa-glo/data-types */ "./glo/modules/data-types/lib/index.js");
const LibraryFunction_1 = __importDefault(__webpack_require__(/*! ./LibraryFunction */ "./glo/modules/library/lib/functions/LibraryFunction.js"));
exports.default = new LibraryFunction_1.default('ΗΜ', [{ args: [['μοίρες', data_types_1.GLOReal]], returnType: data_types_1.GLOReal }], (args) => {
    const value = args[0].value;
    const degrees = (value * Math.PI) / 180;
    return new data_types_1.GLOReal(Math.sin(degrees));
});
//# sourceMappingURL=sine.js.map

/***/ }),

/***/ "./glo/modules/library/lib/functions/squareRoot.js":
/*!*********************************************************!*\
  !*** ./glo/modules/library/lib/functions/squareRoot.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const data_types_1 = __webpack_require__(/*! @glossa-glo/data-types */ "./glo/modules/data-types/lib/index.js");
const error_1 = __importDefault(__webpack_require__(/*! @glossa-glo/error */ "./glo/modules/error/lib/GLOError.js"));
const LibraryFunction_1 = __importDefault(__webpack_require__(/*! ./LibraryFunction */ "./glo/modules/library/lib/functions/LibraryFunction.js"));
exports.default = new LibraryFunction_1.default('Τ_Ρ', [{ args: [['τιμή', data_types_1.GLOReal]], returnType: data_types_1.GLOReal }], (args, argDebugInfoProviders) => {
    const value = args[0].value;
    if (value < 0) {
        throw new error_1.default(argDebugInfoProviders[0], 'Δεν επιτρέπεται αρνητική παράμετρος στη συνάρτηση Τ_Ρ');
    }
    return new data_types_1.GLOReal(Math.sqrt(value));
});
//# sourceMappingURL=squareRoot.js.map

/***/ }),

/***/ "./glo/modules/library/lib/functions/tangent.js":
/*!******************************************************!*\
  !*** ./glo/modules/library/lib/functions/tangent.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const data_types_1 = __webpack_require__(/*! @glossa-glo/data-types */ "./glo/modules/data-types/lib/index.js");
const LibraryFunction_1 = __importDefault(__webpack_require__(/*! ./LibraryFunction */ "./glo/modules/library/lib/functions/LibraryFunction.js"));
exports.default = new LibraryFunction_1.default('ΕΦ', [{ args: [['μοίρες', data_types_1.GLOReal]], returnType: data_types_1.GLOReal }], (args) => {
    const value = args[0].value;
    const degrees = (value * Math.PI) / 180;
    return new data_types_1.GLOReal(Math.tan(degrees));
});
//# sourceMappingURL=tangent.js.map

/***/ }),

/***/ "./glo/modules/library/lib/functions/trunctuateReal.js":
/*!*************************************************************!*\
  !*** ./glo/modules/library/lib/functions/trunctuateReal.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const data_types_1 = __webpack_require__(/*! @glossa-glo/data-types */ "./glo/modules/data-types/lib/index.js");
const LibraryFunction_1 = __importDefault(__webpack_require__(/*! ./LibraryFunction */ "./glo/modules/library/lib/functions/LibraryFunction.js"));
exports.default = new LibraryFunction_1.default('Α_Μ', [{ args: [['τιμή', data_types_1.GLOReal]], returnType: data_types_1.GLOReal }], (args) => {
    const value = args[0].value;
    return new data_types_1.GLOInteger(Math.trunc(value));
});
//# sourceMappingURL=trunctuateReal.js.map

/***/ }),

/***/ "./glo/modules/parser/lib/Parser.js":
/*!******************************************!*\
  !*** ./glo/modules/parser/lib/Parser.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Parser = void 0;
const Lexer = __importStar(__webpack_require__(/*! @glossa-glo/lexer */ "./glo/modules/lexer/lib/Lexer.js"));
const AST = __importStar(__webpack_require__(/*! @glossa-glo/ast */ "./glo/modules/ast/lib/AST.js"));
const Types = __importStar(__webpack_require__(/*! @glossa-glo/data-types */ "./glo/modules/data-types/lib/index.js"));
const error_1 = __importDefault(__webpack_require__(/*! @glossa-glo/error */ "./glo/modules/error/lib/GLOError.js"));
class Parser {
    constructor(lexer) {
        this.previousToken = null; // Needed for better errors. Skips Lexer.NewLineToken
        this.lexer = lexer;
        this.currentToken = this.lexer.getNextToken();
    }
    get previousTokenEndLocationProvider() {
        return {
            start: {
                linePosition: this.previousToken.end.linePosition,
                characterPosition: this.previousToken.end.characterPosition - 1,
            },
            end: {
                linePosition: this.previousToken.end.linePosition,
                characterPosition: this.previousToken.end.characterPosition,
            },
        };
    }
    eat(type, message, previousTokenThrow = false, throwEntirePreviousToken = false) {
        if (this.currentToken instanceof type) {
            if (!(this.currentToken instanceof Lexer.NewLineToken)) {
                this.previousToken = this.currentToken;
            }
            return this.lexer.getNextToken();
        }
        else {
            throw new error_1.default(previousTokenThrow
                ? throwEntirePreviousToken
                    ? this.previousToken
                    : this.previousTokenEndLocationProvider
                : this.currentToken instanceof Lexer.NewLineToken
                    ? this.peek()
                    : this.currentToken, message ||
                `Expected ${this.currentToken.constructor.name} to be ${type.name}`);
        }
    }
    peek() {
        return this.lexer.peekNextToken();
    }
    nl(errorMessage) {
        this.currentToken = this.eat(Lexer.NewLineToken, errorMessage, true);
        while (this.currentToken instanceof Lexer.NewLineToken) {
            this.currentToken = this.eat(Lexer.NewLineToken);
        }
        return new AST.EmptyAST();
    }
    repeatLoop() {
        const repeatToken = Object.assign({}, this.currentToken);
        this.currentToken = this.eat(Lexer.RepeatToken);
        this.nl('Περίμενα νέα γραμμή μετά από ΑΡΧΗ_ΕΠΑΝΑΛΗΨΗΣ');
        const statementList = this.statementList();
        this.currentToken = this.eat(Lexer.UntilToken, 'Περίμενα ΜΕΧΡΙΣ_ΟΤΟΥ μετά τη λήξη της επανάληψης', true);
        const condition = this.expression();
        return new AST.RepeatAST(condition, statementList).inheritPositionFrom(repeatToken);
    }
    whileLoop() {
        const whileToken = Object.assign({}, this.currentToken);
        this.currentToken = this.eat(Lexer.WhileToken);
        const condition = this.expression();
        this.currentToken = this.eat(Lexer.DoToken, 'Περίμενα ΕΠΑΝΑΛΑΒΕ μετά από συνθήκη', true);
        this.nl('Περίμενα νέα γραμμή μετά από ΕΠΑΝΑΛΑΒΕ');
        const statementList = this.statementList();
        this.currentToken = this.eat(Lexer.LoopEndToken, 'Περίμενα ΤΕΛΟΣ_ΕΠΑΝΑΛΗΨΗΣ στο τέλος δομής επανάληψης');
        return new AST.WhileAST(condition, statementList).inheritPositionFrom(whileToken);
    }
    forLoop() {
        const forToken = Object.assign({}, this.currentToken);
        this.currentToken = this.eat(Lexer.ForToken);
        let counter;
        if (this.peek() instanceof Lexer.OpeningBracketToken) {
            counter = this.arrayAccess();
        }
        else {
            counter = this.variable();
        }
        this.currentToken = this.eat(Lexer.FromToken, 'Περίμενα ΑΠΟ μετά τη μεταβλητή επανάληψης');
        const startValue = this.expression();
        this.currentToken = this.eat(Lexer.ToToken, 'Περίμενα ΜΕΧΡΙ μετά την αρχική τιμή της μεταβλητής της επανάληψης', true);
        const endValue = this.expression();
        let step = new AST.IntegerConstantAST(new Types.GLOInteger(1));
        if (this.currentToken instanceof Lexer.WithStepToken) {
            this.currentToken = this.eat(Lexer.WithStepToken);
            step = this.expression();
        }
        this.nl('Περίμενα νέα γραμμή μετά από κεφάλι επανάληψης');
        const statementList = this.statementList();
        this.currentToken = this.eat(Lexer.LoopEndToken, 'Περίμενα ΤΕΛΟΣ_ΕΠΑΝΑΛΗΨΗΣ στο τέλος δομής επανάληψης');
        return new AST.ForAST(counter, startValue, endValue, step, statementList).inheritPositionFrom(forToken);
    }
    if() {
        const ifToken = Object.assign({}, this.currentToken);
        this.currentToken = this.eat(Lexer.IfToken);
        const condition = this.expression();
        this.currentToken = this.eat(Lexer.ThenToken, 'Περίμενα ΤΟΤΕ μετά από συνθήκη επιλογής', true);
        this.nl('Περίμενα νέα γραμμή μετά από ΤΟΤΕ');
        const statementList = this.statementList();
        return new AST.IfAST(condition, statementList).inheritPositionFrom(ifToken);
    }
    ifStatement() {
        const firstIf = this.if();
        let currentIf = firstIf;
        while (this.currentToken instanceof Lexer.ElseIfToken) {
            const elseIfToken = Object.assign({}, this.currentToken);
            this.currentToken = this.eat(Lexer.ElseIfToken);
            const condition = this.expression();
            this.currentToken = this.eat(Lexer.ThenToken, 'Περίμενα ΤΟΤΕ μετά από συνθήκη επιλογής', true);
            this.nl('Περίμενα νέα γραμμή μετά από ΤΟΤΕ');
            const statementList = this.statementList();
            const newIf = new AST.IfAST(condition, statementList).inheritPositionFrom(elseIfToken);
            currentIf.addNext(newIf);
            currentIf = newIf;
        }
        if (this.currentToken instanceof Lexer.ElseToken) {
            this.currentToken = this.eat(Lexer.ElseToken);
            this.nl('Περίμενα νέα γραμμή μετά από ΑΛΛΙΩΣ');
            currentIf.addNext(this.statementList());
        }
        this.currentToken = this.eat(Lexer.EndIfToken, `Περίμενα ΤΕΛΟΣ_ΑΝ στο τέλος επιλογής`);
        return firstIf;
    }
    selectCase(selectValue) {
        const savedToken = Object.assign({}, this.currentToken);
        if (this.currentToken instanceof Lexer.EqualsToken) {
            this.currentToken = this.eat(Lexer.EqualsToken);
            return new AST.EqualsAST(selectValue, this.expression()).inheritPositionFrom(savedToken);
        }
        else if (this.currentToken instanceof Lexer.NotEqualsToken) {
            this.currentToken = this.eat(Lexer.NotEqualsToken);
            return new AST.NotEqualsAST(selectValue, this.expression()).inheritPositionFrom(savedToken);
        }
        else if (this.currentToken instanceof Lexer.GreaterThanToken) {
            this.currentToken = this.eat(Lexer.GreaterThanToken);
            return new AST.GreaterThanAST(selectValue, this.expression()).inheritPositionFrom(savedToken);
        }
        else if (this.currentToken instanceof Lexer.LessThanToken) {
            this.currentToken = this.eat(Lexer.LessThanToken);
            return new AST.LessThanAST(selectValue, this.expression()).inheritPositionFrom(savedToken);
        }
        else if (this.currentToken instanceof Lexer.GreaterEqualsToken) {
            this.currentToken = this.eat(Lexer.GreaterEqualsToken);
            return new AST.GreaterEqualsAST(selectValue, this.expression()).inheritPositionFrom(savedToken);
        }
        else if (this.currentToken instanceof Lexer.LessEqualsToken) {
            this.currentToken = this.eat(Lexer.LessEqualsToken);
            return new AST.LessEqualsAST(selectValue, this.expression()).inheritPositionFrom(savedToken);
        }
        else if (this.currentToken instanceof Lexer.IntegerConstToken &&
            this.peek() instanceof Lexer.DoubleDotToken) {
            const left = this.atom();
            const doubleDotToken = Object.assign({}, this.currentToken);
            this.currentToken = this.eat(Lexer.DoubleDotToken);
            if (!(this.currentToken instanceof Lexer.IntegerConstToken)) {
                throw new error_1.default(this.currentToken instanceof Lexer.NewLineToken
                    ? this.previousToken
                    : this.currentToken, this.currentToken instanceof Lexer.NewLineToken
                    ? 'Περίμενα δεξιά ακέραια τιμή για το εύρος'
                    : 'Περίμενα να δώ ακέραια τιμή για το εύρος');
            }
            const right = this.atom();
            return [
                new AST.GreaterEqualsAST(selectValue, left).inheritPositionFrom(doubleDotToken),
                new AST.LessEqualsAST(selectValue, right).inheritPositionFrom(doubleDotToken),
            ];
        }
        else {
            const expr = this.expression();
            return new AST.EqualsAST(selectValue, expr).inheritPositionFrom(expr);
        }
    }
    selectStatement() {
        this.currentToken = this.eat(Lexer.SelectToken);
        const selectValue = this.expression();
        this.nl('Περίμενα νέα γραμμή μετά από την έκφραση δομής επιλογής');
        const ifStatements = [];
        do {
            const caseToken = Object.assign({}, this.currentToken);
            this.currentToken = this.eat(Lexer.CaseToken, 'Περίμενα ΠΕΡΙΠΤΩΣΗ μέσα στη δομή επιλογής');
            const conditions = [];
            const res = this.selectCase(selectValue);
            if (Array.isArray(res)) {
                conditions.push(new AST.AndAST(res[0], res[1]));
            }
            else {
                conditions.push(res);
            }
            while (this.currentToken instanceof Lexer.CommaToken) {
                this.currentToken = this.eat(Lexer.CommaToken);
                if (this.currentToken instanceof Lexer.NewLineToken) {
                    throw new error_1.default(this.previousToken, 'Περίμενα συνθήκη μετά το κόμμα στην εντολή ΕΠΙΛΕΞΕ');
                }
                const res = this.selectCase(selectValue);
                if (Array.isArray(res)) {
                    conditions.push(new AST.AndAST(res[0], res[1]));
                }
                else {
                    conditions.push(res);
                }
            }
            this.nl(`Περίμενα νέα γραμμή μετά από ${conditions.length === 1 ? 'την περίπτωση' : 'τις περιπτώσεις'} δομής επιλογής`);
            const statementList = this.statementList();
            function orify(conditions) {
                if (conditions.length === 1)
                    return conditions[0];
                else
                    return new AST.OrAST(conditions[0], orify(conditions.slice(1)));
            }
            ifStatements.push(new AST.IfAST(orify(conditions), statementList).inheritPositionFrom(caseToken));
        } while (this.currentToken instanceof Lexer.CaseToken &&
            !(this.peek() instanceof Lexer.ElseToken));
        const firstIf = ifStatements[0];
        let currentIf = firstIf;
        for (const ifStatement of ifStatements.slice(1)) {
            currentIf.next = ifStatement;
            currentIf = ifStatement;
        }
        if (this.currentToken instanceof Lexer.CaseToken &&
            this.peek() instanceof Lexer.ElseToken) {
            this.currentToken = this.eat(Lexer.CaseToken);
            this.currentToken = this.eat(Lexer.ElseToken);
            currentIf.next = this.statementList();
        }
        this.currentToken = this.eat(Lexer.SelectEndToken, 'Περίμενα ΤΕΛΟΣ_ΕΠΙΛΟΓΩΝ στο τέλος δομής επιλογής');
        return firstIf;
    }
    constantDeclaration() {
        this.currentToken = this.eat(Lexer.ConstantToken);
        this.nl('Περίμενα νέα γραμμή μετά από ΣΤΑΘΕΡΕΣ');
        const declarations = [];
        do {
            const variableToken = Object.assign({}, this.currentToken);
            const variable = this.variable();
            this.currentToken = this.eat(Lexer.EqualsToken, "Περίμενα '=' μετά από όνομα σταθεράς");
            if (this.currentToken instanceof Lexer.NewLineToken) {
                throw new error_1.default(this.previousToken, "Περίμενα έκφραση μετά από το '=' στη δήλωση σταθεράς");
            }
            const expression = this.expression();
            declarations.push(new AST.ConstantDeclarationAST(variable, expression).inheritPositionFrom(variableToken));
            this.nl('Περίμενα νέα γραμμή μετά τη δήλωση σταθεράς');
        } while (this.currentToken instanceof Lexer.IdToken);
        return declarations;
    }
    variableDeclaration() {
        const variableOrArrayDeclaration = (type) => {
            const variableToken = Object.assign({}, this.currentToken);
            const variable = this.variable();
            const dimensionLength = [];
            if (this.currentToken instanceof Lexer.OpeningBracketToken) {
                this.currentToken = this.eat(Lexer.OpeningBracketToken);
                dimensionLength.push(this.expression());
                while (this.currentToken instanceof Lexer.CommaToken) {
                    this.currentToken = this.eat(Lexer.CommaToken);
                    if (this.currentToken instanceof Lexer.ClosingBracketToken) {
                        throw new error_1.default(this.previousToken, 'Περίμενα έκφραση μετά το κόμμα στην δήλωση διαστάσεων πίνακα');
                    }
                    dimensionLength.push(this.expression());
                }
                this.currentToken = this.eat(Lexer.ClosingBracketToken, 'Περίμενα κλείσιμο αγκύλης μετά τον ορισμό πίνακα', true);
            }
            if (dimensionLength.length) {
                return new AST.VariableDeclarationAST(variable, new AST.ArrayAST(dimensionLength, type)).inheritPositionFrom(variableToken);
            }
            else {
                return new AST.VariableDeclarationAST(variable, type).inheritPositionFrom(variableToken);
            }
        };
        this.currentToken = this.eat(Lexer.VariableToken);
        this.nl('Περίμενα νέα γραμμή μετά από ΜΕΤΑΒΛΗΤΕΣ');
        if (this.currentToken instanceof Lexer.BeginToken) {
            throw new error_1.default(this.previousToken, 'Περίμενα δήλωση μεταβλητών μετά από ΜΕΤΑΒΛΗΤΕΣ');
        }
        const declarations = [];
        do {
            const type = this.type();
            this.currentToken = this.eat(Lexer.ColonToken, 'Περίμενα άνω-κάτω τελεία μετά τον τύπο μεταβλητής', true);
            if (!(this.currentToken instanceof Lexer.IdToken)) {
                throw new error_1.default(!(this.currentToken instanceof Lexer.NewLineToken)
                    ? this.currentToken
                    : this.previousToken, 'Περίμενα όνομα μεταβλητής μετά από άνω-κάτω τελεία');
            }
            const ids = [variableOrArrayDeclaration(type)];
            while (this.currentToken instanceof Lexer.CommaToken) {
                this.currentToken = this.eat(Lexer.CommaToken);
                if (this.currentToken instanceof Lexer.NewLineToken) {
                    throw new error_1.default(this.previousToken, 'Περίμενα μεταβλητή ή πίνακα μετά το κόμμα στην δήλωση μεταβλητών');
                }
                ids.push(variableOrArrayDeclaration(type));
            }
            ids.forEach(d => declarations.push(d));
            if (this.currentToken instanceof Lexer.IdToken) {
                throw new error_1.default(this.previousToken, 'Περίμενα κόμμα ανάμεσα από τις δηλώσεις δύο μεταβλητών');
            }
            this.nl('Περίμενα νέα γραμμή μετά τη δήλωση μεταβλητών ενός τύπου');
        } while (this.currentToken instanceof Lexer.IntegerToken ||
            this.currentToken instanceof Lexer.RealToken ||
            this.currentToken instanceof Lexer.StringToken ||
            this.currentToken instanceof Lexer.BooleanToken);
        return declarations;
    }
    constantOrVariableDeclaration() {
        let constantDeclarations = [];
        let variableDeclarations = [];
        if (this.currentToken instanceof Lexer.ConstantToken) {
            constantDeclarations = this.constantDeclaration();
        }
        if (this.currentToken instanceof Lexer.VariableToken) {
            variableDeclarations = this.variableDeclaration();
        }
        if (this.currentToken instanceof Lexer.ConstantToken &&
            !constantDeclarations.length) {
            throw new error_1.default(this.currentToken, 'Οι σταθερές πρέπει να δηλώνονται πρίν από τις μεταβλητές');
        }
        return {
            constantDeclarations,
            variableDeclarations,
        };
    }
    subprogramDeclarations() {
        const declarations = [];
        while (this.currentToken instanceof Lexer.ProcedureToken ||
            this.currentToken instanceof Lexer.FunctionToken) {
            if (this.currentToken instanceof Lexer.ProcedureToken) {
                declarations.push(this.procedureDeclaration());
            }
            else if (this.currentToken instanceof Lexer.FunctionToken) {
                declarations.push(this.functionDeclaration());
            }
        }
        return declarations;
    }
    procedureOrFunctionParameterList(type) {
        const params = [];
        if (this.currentToken instanceof Lexer.IdToken) {
            params.push(this.variable());
            while (this.currentToken instanceof Lexer.CommaToken) {
                this.currentToken = this.eat(Lexer.CommaToken);
                if (this.currentToken instanceof Lexer.ClosingParenthesisToken) {
                    throw new error_1.default(this.previousToken, `Περίμενα όνομα μεταβλητής μετά το κόμμα στην δήλωση παραμέτρων ${type === 'procedure' ? 'διαδικασίας' : 'συνάρτησης'}`);
                }
                params.push(this.variable());
            }
            if (this.currentToken instanceof Lexer.IdToken) {
                throw new error_1.default(this.previousToken, `Περίμενα κόμμα ανάμεσα στις δηλώσεις δύο παραμέτρων ${type === 'procedure' ? 'διαδικασίας' : 'συνάρτησης'}`);
            }
        }
        return params;
    }
    procedureDeclaration() {
        const procedureToken = Object.assign({}, this.currentToken);
        this.currentToken = this.eat(Lexer.ProcedureToken);
        const name = this.variable();
        let args = [];
        if (this.currentToken instanceof Lexer.OpeningParenthesisToken) {
            this.currentToken = this.eat(Lexer.OpeningParenthesisToken);
            args = this.procedureOrFunctionParameterList('procedure');
            this.currentToken = this.eat(Lexer.ClosingParenthesisToken, 'Περίμενα κλείσιμο παρένθεσης μετά από παραμέτρους διαδικασίας', true);
        }
        this.nl('Περίμενα νέα γραμμή μετά από ορισμό κεφαλιού διαδικασίας');
        const declarations = [];
        const { constantDeclarations, variableDeclarations, } = this.constantOrVariableDeclaration();
        this.currentToken = this.eat(Lexer.BeginToken, 'Περίμενα ΑΡΧΗ στην αρχή μιας διαδικασίας');
        const statementList = this.statementList();
        this.currentToken = this.eat(Lexer.ProcedureEndToken, 'Περίμενα ΤΕΛΟΣ_ΔΙΑΔΙΚΑΣΙΑΣ στο τέλος μιας διαδικασίας');
        this.nl('Περίμενα νέα γραμμή μετά από ΤΕΛΟΣ_ΔΙΑΔΙΚΑΣΙΑΣ');
        return new AST.ProcedureDeclarationAST(name, args, constantDeclarations, variableDeclarations, statementList).inheritPositionFrom(procedureToken);
    }
    functionDeclaration() {
        const functionToken = Object.assign({}, this.currentToken);
        this.currentToken = this.eat(Lexer.FunctionToken);
        const name = this.variable();
        let args = [];
        if (this.currentToken instanceof Lexer.OpeningParenthesisToken) {
            this.currentToken = this.eat(Lexer.OpeningParenthesisToken);
            args = this.procedureOrFunctionParameterList('function');
            this.currentToken = this.eat(Lexer.ClosingParenthesisToken, 'Περίμενα κλείσιμο παρένθεσης μετά από παραμέτρους συνάρτησης', true);
        }
        this.currentToken = this.eat(Lexer.ColonToken, `Περίμενα άνω-κάτω τελεία μετά το κλείσιμο παρένθεσης στη δήλωση συνάρτησης`, true);
        const returnType = this.functionReturnType();
        this.nl('Περίμενα νέα γραμμή μετά άπο ορισμό κεφαλιού συνάρτησης');
        const { constantDeclarations, variableDeclarations, } = this.constantOrVariableDeclaration();
        this.currentToken = this.eat(Lexer.BeginToken, 'Περίμενα ΑΡΧΗ στην αρχή μιας συνάρτησης');
        const statementList = this.statementList();
        this.currentToken = this.eat(Lexer.FunctionEndToken, 'Περίμενα ΤΕΛΟΣ_ΣΥΝΑΡΤΗΣΗΣ στο τέλος μιας συνάρτησης');
        this.nl('Περίμενα νέα γραμμή μετά από ΤΕΛΟΣ_ΣΥΝΑΡΤΗΣΗΣ');
        return new AST.FunctionDeclarationAST(name, args, returnType, constantDeclarations, variableDeclarations, statementList).inheritPositionFrom(functionToken);
    }
    subrange() {
        if (!(this.currentToken instanceof Lexer.IntegerConstToken)) {
            throw new error_1.default(this.currentToken, 'Περίμενα ακέραια αρχική τιμή εύρους');
        }
        const start = this.currentToken;
        this.currentToken = this.eat(Lexer.IntegerConstToken);
        this.currentToken = this.eat(Lexer.DoubleDotToken);
        if (!(this.currentToken instanceof Lexer.IntegerConstToken)) {
            throw new error_1.default(this.currentToken, 'Περίμενα ακέραια τελική τιμή εύρους');
        }
        const end = this.currentToken;
        this.currentToken = this.eat(Lexer.IntegerConstToken);
        return new AST.SubrangeAST(start.value, end.value)
            .inheritStartPositionFrom(start.start)
            .inheritEndPositionFrom(end.end);
    }
    type() {
        const savedToken = Object.assign({}, this.currentToken);
        if (this.currentToken instanceof Lexer.IntegerToken) {
            this.currentToken = this.eat(Lexer.IntegerToken);
            return new AST.IntegerAST().inheritPositionFrom(savedToken);
        }
        else if (this.currentToken instanceof Lexer.RealToken) {
            this.currentToken = this.eat(Lexer.RealToken);
            return new AST.RealAST().inheritPositionFrom(savedToken);
        }
        else if (this.currentToken instanceof Lexer.BooleanToken) {
            this.currentToken = this.eat(Lexer.BooleanToken);
            return new AST.BooleanAST().inheritPositionFrom(savedToken);
        }
        else if (this.currentToken instanceof Lexer.StringToken) {
            this.currentToken = this.eat(Lexer.StringToken);
            return new AST.StringAST().inheritPositionFrom(savedToken);
        }
        else {
            throw new error_1.default(this.currentToken, 'Μη έγκυρος τύπος μεταβλητής');
        }
    }
    program() {
        const programToken = Object.assign({}, this.currentToken);
        while (this.currentToken instanceof Lexer.NewLineToken) {
            this.currentToken = this.eat(Lexer.NewLineToken);
        }
        this.currentToken = this.eat(Lexer.ProgramToken, 'Περίμενα το πρόγραμμα να αρχίζει με εντολή ΠΡΟΓΡΑΜΜΑ');
        const programName = this.variable().name;
        this.nl('Περίμενα νέα γραμμή μετά από το όνομα προγράμματος');
        const { constantDeclarations, variableDeclarations, } = this.constantOrVariableDeclaration();
        this.currentToken = this.eat(Lexer.BeginToken, 'Περίμενα ΑΡΧΗ μετά το τμήμα δηλώσεων προγράμματος');
        this.nl('Περίμενα νέα γραμμή μετά από ΑΡΧΗ');
        const statementList = this.statementList();
        this.currentToken = this.eat(Lexer.ProgramEndToken, 'Περίμενα ΤΕΛΟΣ_ΠΡΟΓΡΑΜΜΑΤΟΣ στο τέλος του προγράμματος');
        this.nl('Περίμενα νέα γραμμή μετά από ΤΕΛΟΣ_ΠΡΟΓΡΑΜΜΑΤΟΣ');
        const subprogramDeclarations = this.subprogramDeclarations();
        if (!(this.currentToken instanceof Lexer.EofToken)) {
            throw new error_1.default(this.currentToken, 'Περίμενα ΔΙΑΔΙΚΑΣΙΑ ή ΣΥΝΑΡΤΗΣΗ μετά από ΤΕΛΟΣ_ΠΡΟΓΡΑΜΜΑΤΟΣ');
        }
        return new AST.ProgramAST(programName, [
            ...constantDeclarations,
            ...variableDeclarations,
            ...subprogramDeclarations,
        ], statementList).inheritPositionFrom(programToken);
    }
    statementList() {
        const statements = [this.statement()];
        while (this.currentToken instanceof Lexer.NewLineToken) {
            this.currentToken = this.eat(Lexer.NewLineToken);
            statements.push(this.statement());
        }
        return statements;
    }
    readStatement() {
        const variableOrArrayAccess = () => {
            const variable = this.variable();
            const dimensionLength = [];
            let closingBracketToken = null;
            if (this.currentToken instanceof Lexer.OpeningBracketToken) {
                this.currentToken = this.eat(Lexer.OpeningBracketToken);
                dimensionLength.push(this.expression());
                while (this.currentToken instanceof Lexer.CommaToken) {
                    this.currentToken = this.eat(Lexer.CommaToken);
                    if (this.currentToken instanceof Lexer.ClosingBracketToken) {
                        throw new error_1.default(this.previousToken, 'Περίμενα έκφραση μετά το κόμμα στην πρόσβαση πίνακα');
                    }
                    dimensionLength.push(this.expression());
                }
                closingBracketToken = Object.assign({}, this.currentToken);
                this.currentToken = this.eat(Lexer.ClosingBracketToken, 'Περίμενα κλείσιμο αγκύλης μετά τον ορισμό πίνακα', true);
            }
            if (dimensionLength.length) {
                return new AST.ArrayAccessAST(variable, dimensionLength)
                    .inheritStartPositionFrom(variable.start)
                    .inheritEndPositionFrom(closingBracketToken.end);
            }
            else {
                return variable;
            }
        };
        const readToken = Object.assign({}, this.currentToken);
        this.currentToken = this.eat(Lexer.ReadToken);
        if (this.currentToken instanceof Lexer.NewLineToken) {
            throw new error_1.default(this.previousToken, 'Περίμενα παραμέτρους για την εντολή ΔΙΑΒΑΣΕ');
        }
        const args = [variableOrArrayAccess()];
        while (this.currentToken instanceof Lexer.CommaToken) {
            this.currentToken = this.eat(Lexer.CommaToken);
            if (this.currentToken instanceof Lexer.NewLineToken) {
                throw new error_1.default(this.previousToken, 'Περίμενα μεταβλητή ή στοιχείο πίνακα μετά το κόμμα στην εντολή ΔΙΑΒΑΣΕ');
            }
            args.push(variableOrArrayAccess());
        }
        return new AST.ReadAST(args).inheritPositionFrom(readToken);
    }
    writeStatement() {
        const writeToken = Object.assign({}, this.currentToken);
        this.currentToken = this.eat(Lexer.WriteToken);
        if (this.currentToken instanceof Lexer.NewLineToken) {
            throw new error_1.default(this.previousToken, 'Περίμενα παραμέτρους για την εντολή ΓΡΑΨΕ');
        }
        const args = [this.expression()];
        while (this.currentToken instanceof Lexer.CommaToken) {
            this.currentToken = this.eat(Lexer.CommaToken);
            if (this.currentToken instanceof Lexer.NewLineToken) {
                throw new error_1.default(this.previousToken, 'Περίμενα έκφραση μετά το κόμμα στην εντολή ΓΡΑΨΕ');
            }
            args.push(this.expression());
        }
        return new AST.WriteAST(args).inheritPositionFrom(writeToken);
    }
    statement() {
        if (this.currentToken instanceof Lexer.CallToken) {
            return this.callProcedure();
        }
        else if (this.currentToken instanceof Lexer.IdToken) {
            return this.assignmentExpression();
        }
        else if (this.currentToken instanceof Lexer.IfToken) {
            return this.ifStatement();
        }
        else if (this.currentToken instanceof Lexer.SelectToken) {
            return this.selectStatement();
        }
        else if (this.currentToken instanceof Lexer.ForToken) {
            return this.forLoop();
        }
        else if (this.currentToken instanceof Lexer.WhileToken) {
            return this.whileLoop();
        }
        else if (this.currentToken instanceof Lexer.RepeatToken) {
            return this.repeatLoop();
        }
        else if (this.currentToken instanceof Lexer.ReadToken) {
            return this.readStatement();
        }
        else if (this.currentToken instanceof Lexer.WriteToken) {
            return this.writeStatement();
        }
        else {
            return this.empty();
        }
    }
    functionReturnType() {
        const savedToken = Object.assign({}, this.currentToken);
        if (this.currentToken instanceof Lexer.IntegerSingularToken) {
            this.currentToken = this.eat(Lexer.IntegerSingularToken);
            return new AST.IntegerAST().inheritPositionFrom(savedToken);
        }
        else if (this.currentToken instanceof Lexer.RealSingularToken) {
            this.currentToken = this.eat(Lexer.RealSingularToken);
            return new AST.RealAST().inheritPositionFrom(savedToken);
        }
        else if (this.currentToken instanceof Lexer.StringSingularToken) {
            this.currentToken = this.eat(Lexer.StringSingularToken);
            return new AST.StringAST().inheritPositionFrom(savedToken);
        }
        else if (this.currentToken instanceof Lexer.BooleanSingularToken) {
            this.currentToken = this.eat(Lexer.BooleanSingularToken);
            return new AST.BooleanAST().inheritPositionFrom(savedToken);
        }
        else if (this.currentToken instanceof Lexer.IdToken) {
            throw new error_1.default(this.currentToken, 'Μη έγκυρος τύπος συνάρτησης. Περίμενα ΠΡΑΓΜΑΤΙΚΗ ή ΑΚΕΡΑΙΑ ή ΧΑΡΑΚΤΗΡΑΣ ή ΛΟΓΙΚΗ');
        }
        else {
            throw new error_1.default(this.previousToken, 'Περίμενα τύπο συνάρτησης μετά από την άνω-κάτω τελεία');
        }
    }
    assignmentExpression() {
        let left;
        if (this.peek() instanceof Lexer.OpeningBracketToken) {
            left = this.arrayAccess();
        }
        else {
            left = this.variable();
        }
        const assignmentToken = Object.assign({}, this.currentToken);
        this.currentToken = this.eat(Lexer.AssignToken, 'Μη έγκυρη εντολή', true, true); // Not enough information to determine whether user actually wanted an assignment statement
        return new AST.AssignmentAST(left, this.expression()).inheritPositionFrom(assignmentToken);
    }
    variable() {
        const node = new AST.VariableAST(this.currentToken.value).inheritPositionFrom(this.currentToken);
        this.currentToken = this.eat(Lexer.IdToken);
        return node;
    }
    arrayAccess() {
        const array = this.variable();
        this.currentToken = this.eat(Lexer.OpeningBracketToken);
        const accessors = [this.expression()];
        while (this.currentToken instanceof Lexer.CommaToken) {
            this.currentToken = this.eat(Lexer.CommaToken);
            if (this.currentToken instanceof Lexer.ClosingBracketToken) {
                throw new error_1.default(this.previousToken, 'Περίμενα έκφραση μετά το κόμμα στην πρόσβαση πίνακα');
            }
            accessors.push(this.expression());
        }
        this.currentToken = this.eat(Lexer.ClosingBracketToken, 'Περίμενα κλείσιμο αγκύλης μετά τους δείκτες πίνακα', true);
        return new AST.ArrayAccessAST(array, accessors)
            .inheritStartPositionFrom(array.start)
            .inheritEndPositionFrom(accessors[accessors.length - 1].end);
    }
    empty() {
        return new AST.EmptyAST();
    }
    expression() {
        let current = this.and();
        while (this.currentToken instanceof Lexer.OrToken) {
            const orToken = Object.assign({}, this.currentToken);
            this.currentToken = this.eat(Lexer.OrToken);
            current = new AST.OrAST(current, this.and()).inheritPositionFrom(orToken);
        }
        return current;
    }
    and() {
        let current = this.comparison();
        while (this.currentToken instanceof Lexer.AndToken) {
            const andToken = Object.assign({}, this.currentToken);
            this.currentToken = this.eat(Lexer.AndToken);
            current = new AST.AndAST(current, this.comparison()).inheritPositionFrom(andToken);
        }
        return current;
    }
    comparison() {
        let current = this.term();
        const savedToken = Object.assign({}, this.currentToken);
        while (this.currentToken instanceof Lexer.EqualsToken ||
            this.currentToken instanceof Lexer.NotEqualsToken ||
            this.currentToken instanceof Lexer.GreaterThanToken ||
            this.currentToken instanceof Lexer.LessThanToken ||
            this.currentToken instanceof Lexer.GreaterEqualsToken ||
            this.currentToken instanceof Lexer.LessEqualsToken) {
            if (this.currentToken instanceof Lexer.EqualsToken) {
                this.currentToken = this.eat(Lexer.EqualsToken);
                current = new AST.EqualsAST(current, this.term()).inheritPositionFrom(savedToken);
            }
            else if (this.currentToken instanceof Lexer.NotEqualsToken) {
                this.currentToken = this.eat(Lexer.NotEqualsToken);
                current = new AST.NotEqualsAST(current, this.term()).inheritPositionFrom(savedToken);
            }
            else if (this.currentToken instanceof Lexer.GreaterThanToken) {
                this.currentToken = this.eat(Lexer.GreaterThanToken);
                current = new AST.GreaterThanAST(current, this.term()).inheritPositionFrom(savedToken);
            }
            else if (this.currentToken instanceof Lexer.LessThanToken) {
                this.currentToken = this.eat(Lexer.LessThanToken);
                current = new AST.LessThanAST(current, this.term()).inheritPositionFrom(savedToken);
            }
            else if (this.currentToken instanceof Lexer.GreaterEqualsToken) {
                this.currentToken = this.eat(Lexer.GreaterEqualsToken);
                current = new AST.GreaterEqualsAST(current, this.term()).inheritPositionFrom(savedToken);
            }
            else if (this.currentToken instanceof Lexer.LessEqualsToken) {
                this.currentToken = this.eat(Lexer.LessEqualsToken);
                current = new AST.LessEqualsAST(current, this.term()).inheritPositionFrom(savedToken);
            }
        }
        return current;
    }
    term() {
        let current = this.factor();
        const savedToken = Object.assign({}, this.currentToken);
        while (this.currentToken instanceof Lexer.PlusToken ||
            this.currentToken instanceof Lexer.MinusToken) {
            if (this.currentToken instanceof Lexer.PlusToken) {
                this.currentToken = this.eat(Lexer.PlusToken);
                current = new AST.PlusAST(current, this.factor()).inheritPositionFrom(savedToken);
            }
            else if (this.currentToken instanceof Lexer.MinusToken) {
                this.currentToken = this.eat(Lexer.MinusToken);
                current = new AST.MinusAST(current, this.factor()).inheritPositionFrom(savedToken);
            }
        }
        return current;
    }
    factor() {
        let current = this.power();
        const savedToken = Object.assign({}, this.currentToken);
        while (this.currentToken instanceof Lexer.MultiplicationToken ||
            this.currentToken instanceof Lexer.IntegerDivisionToken ||
            this.currentToken instanceof Lexer.RealDivisionToken ||
            this.currentToken instanceof Lexer.ModToken) {
            if (this.currentToken instanceof Lexer.MultiplicationToken) {
                this.currentToken = this.eat(Lexer.MultiplicationToken);
                current = new AST.MultiplicationAST(current, this.power()).inheritPositionFrom(savedToken);
            }
            else if (this.currentToken instanceof Lexer.IntegerDivisionToken) {
                this.currentToken = this.eat(Lexer.IntegerDivisionToken);
                current = new AST.IntegerDivisionAST(current, this.power()).inheritPositionFrom(savedToken);
            }
            else if (this.currentToken instanceof Lexer.RealDivisionToken) {
                this.currentToken = this.eat(Lexer.RealDivisionToken);
                current = new AST.RealDivisionAST(current, this.power()).inheritPositionFrom(savedToken);
            }
            else if (this.currentToken instanceof Lexer.ModToken) {
                this.currentToken = this.eat(Lexer.ModToken);
                current = new AST.ModAST(current, this.power()).inheritPositionFrom(savedToken);
            }
        }
        return current;
    }
    power() {
        let current = this.atom();
        while (this.currentToken instanceof Lexer.ExponentiationToken) {
            const exponentiationToken = Object.assign({}, this.currentToken);
            this.currentToken = this.eat(Lexer.ExponentiationToken);
            current = new AST.ExponentiationAST(current, this.atom()).inheritPositionFrom(exponentiationToken);
        }
        return current;
    }
    atom() {
        const savedToken = Object.assign({}, this.currentToken);
        if (this.currentToken instanceof Lexer.PlusToken) {
            this.currentToken = this.eat(Lexer.PlusToken);
            return new AST.UnaryPlusAST(this.atom()).inheritPositionFrom(savedToken);
        }
        else if (this.currentToken instanceof Lexer.MinusToken) {
            this.currentToken = this.eat(Lexer.MinusToken);
            return new AST.UnaryMinusAST(this.atom()).inheritPositionFrom(savedToken);
        }
        else if (this.currentToken instanceof Lexer.IntegerConstToken) {
            const value = this.currentToken.value;
            this.currentToken = this.eat(Lexer.IntegerConstToken);
            return new AST.IntegerConstantAST(value).inheritPositionFrom(savedToken);
        }
        else if (this.currentToken instanceof Lexer.RealConstToken) {
            const value = this.currentToken.value;
            this.currentToken = this.eat(Lexer.RealConstToken);
            return new AST.RealConstantAST(value).inheritPositionFrom(savedToken);
        }
        else if (this.currentToken instanceof Lexer.OpeningParenthesisToken) {
            this.currentToken = this.eat(Lexer.OpeningParenthesisToken);
            const result = this.expression();
            this.currentToken = this.eat(Lexer.ClosingParenthesisToken);
            return result;
        }
        else if (this.currentToken instanceof Lexer.TrueToken) {
            this.currentToken = this.eat(Lexer.TrueToken);
            return new AST.TrueConstantAST().inheritPositionFrom(savedToken);
        }
        else if (this.currentToken instanceof Lexer.FalseToken) {
            this.currentToken = this.eat(Lexer.FalseToken);
            return new AST.FalseConstantAST().inheritPositionFrom(savedToken);
        }
        else if (this.currentToken instanceof Lexer.StringConstantToken) {
            const str = this.currentToken.value;
            this.currentToken = this.eat(Lexer.StringConstantToken);
            return new AST.StringConstantAST(str).inheritPositionFrom(savedToken);
        }
        else if (this.currentToken instanceof Lexer.NotToken) {
            this.currentToken = this.eat(Lexer.NotToken);
            return new AST.NotAST(this.atom()).inheritPositionFrom(savedToken);
        }
        else if (this.currentToken instanceof Lexer.IdToken &&
            this.peek() instanceof Lexer.OpeningBracketToken) {
            return this.arrayAccess();
        }
        else if (this.currentToken instanceof Lexer.IdToken &&
            this.peek() instanceof Lexer.OpeningParenthesisToken) {
            return this.callFunction();
        }
        else if (this.currentToken instanceof Lexer.IdToken) {
            return this.variable();
        }
        else {
            throw new error_1.default(savedToken, 'Μη έγκυρος παράγοντας έκφρασης');
        }
    }
    callFunction() {
        const nameAST = this.variable();
        const name = nameAST.name;
        this.currentToken = this.eat(Lexer.OpeningParenthesisToken);
        const args = [];
        if (!(this.currentToken instanceof Lexer.ClosingParenthesisToken)) {
            args.push(this.expression());
            while (this.currentToken instanceof Lexer.CommaToken) {
                this.currentToken = this.eat(Lexer.CommaToken);
                if (this.currentToken instanceof Lexer.ClosingParenthesisToken) {
                    throw new error_1.default(this.previousToken, 'Περίμενα έκφραση μετά το κόμμα στο κάλεσμα συνάρτησης');
                }
                args.push(this.expression());
            }
        }
        this.currentToken = this.eat(Lexer.ClosingParenthesisToken, 'Περίμενα κλείσιμο παρένθεσης μετά από παραμέτρους συνάρτησης', true);
        return new AST.FunctionCallAST(name, args).inheritPositionFrom(nameAST);
    }
    callProcedure() {
        this.currentToken = this.eat(Lexer.CallToken);
        const nameAST = this.variable();
        const name = nameAST.name;
        this.currentToken = this.eat(Lexer.OpeningParenthesisToken, 'Περίμενα άνοιγμα παρένθεσης μετά από όνομα διαδικασίας', this.currentToken instanceof Lexer.NewLineToken);
        const args = [];
        if (!(this.currentToken instanceof Lexer.ClosingParenthesisToken) &&
            !(this.currentToken instanceof Lexer.NewLineToken)) {
            args.push(this.expression());
            while (this.currentToken instanceof Lexer.CommaToken) {
                this.currentToken = this.eat(Lexer.CommaToken);
                if (this.currentToken instanceof Lexer.ClosingParenthesisToken) {
                    throw new error_1.default(this.previousToken, 'Περίμενα έκφραση μετά το κόμμα στο κάλεσμα διαδικασίας');
                }
                args.push(this.expression());
            }
        }
        this.currentToken = this.eat(Lexer.ClosingParenthesisToken, 'Περίμενα κλείσιμο παρένθεσης μετά από παραμέτρους διαδικασίας', this.currentToken instanceof Lexer.NewLineToken);
        return new AST.ProcedureCallAST(name, args).inheritPositionFrom(nameAST);
    }
    run() {
        const node = this.program();
        this.currentToken = this.eat(Lexer.EofToken);
        return node;
    }
}
exports.Parser = Parser;
//# sourceMappingURL=Parser.js.map

/***/ }),

/***/ "./glo/modules/semantic-analyzer/lib/SemanticAnalyzer.js":
/*!***************************************************************!*\
  !*** ./glo/modules/semantic-analyzer/lib/SemanticAnalyzer.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SimplifyConstants = exports.TypeChecker = exports.SymbolBuilder = void 0;
const SymbolBuilder_1 = __importDefault(__webpack_require__(/*! ./SymbolBuilder */ "./glo/modules/semantic-analyzer/lib/SymbolBuilder.js"));
exports.SymbolBuilder = SymbolBuilder_1.default;
const TypeChecker_1 = __importDefault(__webpack_require__(/*! ./TypeChecker */ "./glo/modules/semantic-analyzer/lib/TypeChecker.js"));
exports.TypeChecker = TypeChecker_1.default;
const SimplifyConstants_1 = __importDefault(__webpack_require__(/*! ./SimplifyConstants */ "./glo/modules/semantic-analyzer/lib/SimplifyConstants.js"));
exports.SimplifyConstants = SimplifyConstants_1.default;
//# sourceMappingURL=SemanticAnalyzer.js.map

/***/ }),

/***/ "./glo/modules/semantic-analyzer/lib/SimplifyConstants.js":
/*!****************************************************************!*\
  !*** ./glo/modules/semantic-analyzer/lib/SimplifyConstants.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const AST = __importStar(__webpack_require__(/*! @glossa-glo/ast */ "./glo/modules/ast/lib/AST.js"));
const error_1 = __importDefault(__webpack_require__(/*! @glossa-glo/error */ "./glo/modules/error/lib/GLOError.js"));
const Types = __importStar(__webpack_require__(/*! @glossa-glo/data-types */ "./glo/modules/data-types/lib/index.js"));
const symbol_1 = __webpack_require__(/*! @glossa-glo/symbol */ "./glo/modules/symbol/lib/GLOSymbol.js");
class SimplifyConstants extends AST.ASTVisitor {
    constructor(ast, baseScope) {
        super();
        this.ast = ast;
        this.baseScope = baseScope;
        this.localScope = null;
    }
    withLocalScope(name, type, fn) {
        this.localScope = new symbol_1.LocalSymbolScope(name, type, this.baseScope);
        fn();
        this.localScope = null;
    }
    visitArray(node) {
        this.visit(node.componentType);
        const dimensionLength = node.dimensionLength.map(this.visit.bind(this));
        for (let i = 0; i < dimensionLength.length; i++) {
            const len = dimensionLength[i];
            if (!len) {
                throw new error_1.default(node.dimensionLength[i], `Περίμενα σταθερή έκφραση για διάσταση ${i + 1} του πίνακα`);
            }
            if (len instanceof Types.GLOInteger) {
                node.dimensionLengthNumbers.push(len.serialize());
            }
            else {
                // If we do not push anything, there will be a mismatch
                // of access parameters but pushing -1 when the argument
                // is not an integer will let TypeChecker resolve this
                node.dimensionLengthNumbers.push(-1);
            }
        }
        return null;
    }
    visitConstantDeclaration(node) {
        const value = this.visit(node.expression);
        if (value) {
            node.type = value.constructor;
            node.value = value;
        }
        else {
            throw new error_1.default(node.expression, 'Περίμενα σταθερή έκφραση στη δήλωση σταθεράς');
        }
        if (this.localScope) {
            this.localScope.insert(new symbol_1.VariableSymbol(node.variable.name, value.constructor, true));
            this.localScope.changeValue(node.variable.name, value);
        }
        return null;
    }
    visitVariable(node) {
        // We only enter constants on scopes
        if (this.localScope && this.localScope.resolveValue(node.name)) {
            return this.localScope.resolveValue(node.name);
        }
        else
            return null;
    }
    visitProgram(node) {
        this.withLocalScope(node.name, symbol_1.SymbolScopeType.Program, () => {
            node.declarations.forEach(this.visit.bind(this));
            node.statementList.forEach(this.visit.bind(this));
        });
        return null;
    }
    visitVariableDeclaration(node) {
        node.children.forEach(this.visit.bind(this));
        return null;
    }
    visitProcedureDeclaration(node) {
        this.withLocalScope(node.name.name, symbol_1.SymbolScopeType.Procedure, () => {
            node.children.forEach(this.visit.bind(this));
        });
        return null;
    }
    visitFunctionDeclaration(node) {
        this.withLocalScope(node.name.name, symbol_1.SymbolScopeType.Function, () => {
            node.children.forEach(this.visit.bind(this));
        });
        return null;
    }
    visitFunctionCall(node) {
        const args = node.args.map(arg => this.visit(arg));
        const func = this.baseScope.resolveValue(node.name);
        if (!func) {
            return null;
        }
        for (const arg of args) {
            if (arg === null) {
                return null;
            }
        }
        func.call(args, node.args);
        const returnValue = this.baseScope.resolveValue(node.name).returnValue;
        if (!returnValue) {
            return null;
        }
        return returnValue;
    }
    visitProcedureCall(node) {
        node.children.forEach(this.visit.bind(this));
        return null;
    }
    visitIntegerConstant(node) {
        return node.value;
    }
    visitRealConstant(node) {
        return node.value;
    }
    visitStringConstant(node) {
        return node.value;
    }
    visitTrue(node) {
        return new Types.GLOBoolean(true);
    }
    visitFalse(node) {
        return new Types.GLOBoolean(false);
    }
    visitUnaryPlus(node) {
        const target = this.visit(node.target);
        return target ? target.unaryPlus() : null;
    }
    visitUnaryMinus(node) {
        const target = this.visit(node.target);
        return target ? target.unaryMinus() : null;
    }
    visitAnd(node) {
        const left = this.visit(node.left);
        const right = this.visit(node.right);
        return right && left
            ? new Types.GLOBoolean(left.equals(Types.GLOBoolean.true) &&
                right.equals(Types.GLOBoolean.true))
            : null;
    }
    visitOr(node) {
        const left = this.visit(node.left);
        const right = this.visit(node.right);
        return right && left
            ? new Types.GLOBoolean(left.equals(Types.GLOBoolean.true) ||
                right.equals(Types.GLOBoolean.true))
            : null;
    }
    visitNot(node) {
        const target = this.visit(node.target);
        return target
            ? target.equals(Types.GLOBoolean.true)
                ? Types.GLOBoolean.false
                : Types.GLOBoolean.true
            : null;
    }
    visitPlus(node) {
        const left = this.visit(node.left);
        const right = this.visit(node.right);
        return left && right ? left.add(right) : null;
    }
    visitMinus(node) {
        const left = this.visit(node.left);
        const right = this.visit(node.right);
        return left && right ? left.subtract(right) : null;
    }
    visitIntegerDivision(node) {
        const left = this.visit(node.left);
        const right = this.visit(node.right);
        if (right && right.equals(new Types.GLOInteger(0))) {
            throw new error_1.default(node, 'Δεν μπορώ να διαιρέσω με το μηδέν');
        }
        return right && left ? left.integerDivide(right) : null;
    }
    visitRealDivision(node) {
        const left = this.visit(node.left);
        const right = this.visit(node.right);
        if (right &&
            (right.equals(new Types.GLOInteger(0)) ||
                right.equals(new Types.GLOReal(0)))) {
            throw new error_1.default(node, 'Δεν μπορώ να διαιρέσω με το μηδέν');
        }
        return left && right ? left.divide(right) : null;
    }
    visitMultiplication(node) {
        const left = this.visit(node.left);
        const right = this.visit(node.right);
        return left && right ? left.multiply(right) : null;
    }
    visitExponentiation(node) {
        const left = this.visit(node.left);
        const right = this.visit(node.right);
        return left && right ? left.exponent(right) : null;
    }
    visitMod(node) {
        const left = this.visit(node.left);
        const right = this.visit(node.right);
        if (right &&
            (right.equals(new Types.GLOInteger(0)) ||
                right.equals(new Types.GLOReal(0)))) {
            throw new error_1.default(node, 'Δεν μπορώ να κάνω mod με το μηδέν');
        }
        return left && right ? left.mod(right) : null;
    }
    visitEquals(node) {
        const left = this.visit(node.left);
        const right = this.visit(node.right);
        return left && right ? new Types.GLOBoolean(left.equals(right)) : null;
    }
    visitNotEquals(node) {
        const left = this.visit(node.left);
        const right = this.visit(node.right);
        return left && right ? new Types.GLOBoolean(left.notEquals(right)) : null;
    }
    visitGreaterThan(node) {
        const left = this.visit(node.left);
        const right = this.visit(node.right);
        return left && right ? new Types.GLOBoolean(left.greaterThan(right)) : null;
    }
    visitLessThan(node) {
        const left = this.visit(node.left);
        const right = this.visit(node.right);
        return left && right ? new Types.GLOBoolean(left.lessThan(right)) : null;
    }
    visitGreaterEquals(node) {
        const left = this.visit(node.left);
        const right = this.visit(node.right);
        return left && right
            ? new Types.GLOBoolean(left.greaterEqualsThan(right))
            : null;
    }
    visitLessEquals(node) {
        const left = this.visit(node.left);
        const right = this.visit(node.right);
        return left && right
            ? new Types.GLOBoolean(left.lessEqualsThan(right))
            : null;
    }
    visitAssignment(node) {
        node.children.forEach(this.visit.bind(this));
        return null;
    }
    visitEmpty(node) {
        node.children.forEach(this.visit.bind(this));
        return null;
    }
    visitInteger(node) {
        node.children.forEach(this.visit.bind(this));
        return null;
    }
    visitReal(node) {
        node.children.forEach(this.visit.bind(this));
        return null;
    }
    visitType(node) {
        node.children.forEach(this.visit.bind(this));
        return null;
    }
    visitBoolean(node) {
        node.children.forEach(this.visit.bind(this));
        return null;
    }
    visitIf(node) {
        node.children.forEach(this.visit.bind(this));
        return null;
    }
    visitString(node) {
        node.children.forEach(this.visit.bind(this));
        return null;
    }
    visitFor(node) {
        node.children.forEach(this.visit.bind(this));
        return null;
    }
    visitWhile(node) {
        node.children.forEach(this.visit.bind(this));
        return null;
    }
    visitRepeat(node) {
        node.children.forEach(this.visit.bind(this));
        return null;
    }
    visitSubrange(node) {
        node.children.forEach(this.visit.bind(this));
        return null;
    }
    visitArrayAccess(node) {
        node.children.forEach(this.visit.bind(this));
        return null;
    }
    visitRead(node) {
        node.children.forEach(this.visit.bind(this));
        return null;
    }
    visitWrite(node) {
        node.children.forEach(this.visit.bind(this));
        return null;
    }
    run() {
        return this.visit(this.ast);
    }
}
exports.default = SimplifyConstants;
//# sourceMappingURL=SimplifyConstants.js.map

/***/ }),

/***/ "./glo/modules/semantic-analyzer/lib/SymbolBuilder.js":
/*!************************************************************!*\
  !*** ./glo/modules/semantic-analyzer/lib/SymbolBuilder.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const AST = __importStar(__webpack_require__(/*! @glossa-glo/ast */ "./glo/modules/ast/lib/AST.js"));
const symbol_1 = __webpack_require__(/*! @glossa-glo/symbol */ "./glo/modules/symbol/lib/GLOSymbol.js");
const GLOSymbol = __importStar(__webpack_require__(/*! @glossa-glo/symbol */ "./glo/modules/symbol/lib/GLOSymbol.js"));
const error_1 = __importDefault(__webpack_require__(/*! @glossa-glo/error */ "./glo/modules/error/lib/GLOError.js"));
const ast_1 = __webpack_require__(/*! @glossa-glo/ast */ "./glo/modules/ast/lib/AST.js");
class SymbolBuilder extends AST.ASTVisitor {
    constructor(ast, baseScope) {
        super();
        this.ast = ast;
        this.insideFunction = false;
        this.currentScope = baseScope;
    }
    visitVariable(node, assignee = false) {
        const variableValue = this.currentScope.resolve(node.name);
        if (variableValue instanceof GLOSymbol.VariableSymbol) {
            return variableValue;
        }
        else if (variableValue instanceof GLOSymbol.FunctionSymbol &&
            this.currentScope.type === symbol_1.SymbolScopeType.Function && // Is inside function
            this.currentScope.nameEquals(node.name) && // Variable name matches function name
            assignee // Variable the left side of an assignment expression
        ) {
            return variableValue;
        }
        else if (variableValue) {
            throw new error_1.default(node, `Το αναγνωριστικό '${node.name}' τύπου ${variableValue.print()} δεν μπορεί να χρησιμοποιηθεί μέσα σε έκφραση`);
        }
        else {
            throw new error_1.default(node, `Η μεταβλητή ${node.name} χρησιμοποιήθηκε χωρίς πρώτα να έχει οριστεί`);
        }
    }
    visitProgram(node) {
        this.currentScope = new symbol_1.LocalSymbolScope(node.name, symbol_1.SymbolScopeType.Program, this.currentScope);
        this.currentScope.insert(new symbol_1.ProgramSymbol(node.name));
        node.declarations.forEach(this.visit.bind(this));
        node.statementList.forEach(this.visit.bind(this));
        this.currentScope = this.currentScope.getParent();
    }
    visitVariableDeclaration(node) {
        let symbol;
        if (node.type.dataType) {
            symbol = new GLOSymbol.VariableSymbol(node.variable.name, node.type.dataType, false, node.type instanceof AST.ArrayAST
                ? node.type.dimensionLength
                : undefined).inheritPositionFrom(node.variable);
        }
        else
            throw new error_1.default(node.type, `Program error: Unknown data type ${node.type.constructor.name}`);
        this.currentScope.insert(symbol);
        return symbol;
    }
    visitConstantDeclaration(node) {
        const symbol = new GLOSymbol.VariableSymbol(node.variable.name, node.type, // Guaranteed by SimplifyConstants
        true).inheritPositionFrom(node.variable);
        this.currentScope.insert(symbol);
        this.currentScope.changeValue(node.variable.name, node.value);
        return symbol;
    }
    visitProcedureDeclaration(node) {
        this.currentScope = new symbol_1.LocalSymbolScope(node.name.name, symbol_1.SymbolScopeType.Procedure, this.currentScope);
        const procedureVariables = [
            ...node.variableDeclarations.map(arg => this.visitVariableDeclaration(arg)),
            ...node.constantDeclarations.map(arg => this.visitConstantDeclaration(arg)),
        ];
        const procedureVariableNames = procedureVariables
            .filter(v => !v.isConstant)
            .map(v => v.name);
        node.args.forEach(arg => {
            if (!procedureVariableNames.includes(arg.name)) {
                throw new error_1.default(arg, `Η παράμετρος ${arg.name} δεν ορίζεται στο τμήμα δηλώσεων της διαδικασίας`);
            }
        });
        const argNames = node.args.map(arg => arg.name);
        const argSymbols = procedureVariables.filter(symbol => argNames.includes(symbol.name));
        this.currentScope
            .getParent()
            .insert(new GLOSymbol.ProcedureSymbol(node.name.name, argSymbols).inheritPositionFrom(node.name));
        node.statementList.forEach(this.visit.bind(this));
        this.currentScope = this.currentScope.getParent();
    }
    visitFunctionDeclaration(node) {
        this.currentScope = new symbol_1.LocalSymbolScope(node.name.name, symbol_1.SymbolScopeType.Function, this.currentScope);
        const functionVariables = [
            ...node.variableDeclarations.map(arg => this.visitVariableDeclaration(arg)),
            ...node.constantDeclarations.map(arg => this.visitConstantDeclaration(arg)),
        ];
        const functionVariableNames = functionVariables
            .filter(v => !v.isConstant)
            .map(v => v.name);
        node.args.forEach(arg => {
            if (!functionVariableNames.includes(arg.name)) {
                throw new error_1.default(arg, `Η παράμετρος ${arg.name} δεν ορίζεται στο τμήμα δηλώσεων της συνάρτησης`);
            }
        });
        const argNames = node.args.map(arg => arg.name);
        const argSymbols = functionVariables.filter(symbol => argNames.includes(symbol.name));
        this.currentScope
            .getParent()
            .insert(new GLOSymbol.FunctionSymbol(node.name.name, argSymbols, node.returnType.dataType).inheritPositionFrom(node.name));
        this.insideFunction = true;
        node.statementList.forEach(this.visit.bind(this));
        this.insideFunction = false;
        this.currentScope = this.currentScope.getParent();
    }
    visitFunctionCall(node) {
        node.args.forEach(this.visit.bind(this));
        const symbol = this.currentScope.resolve(node.name);
        if (!symbol) {
            throw new error_1.default(node, `Δεν έχει οριστεί συνάρτηση με όνομα ${node.name}`);
        }
        else if (symbol instanceof GLOSymbol.ProcedureSymbol) {
            throw new error_1.default(node, `Η διαδικασία '${node.name}' μπορεί να καλεστεί μόνο με την εντολή ΚΑΛΕΣΕ και όχι μεσα σε μια έκφραση`);
        }
        else if (symbol instanceof GLOSymbol.VariableSymbol) {
            throw new error_1.default(node, `Δεν μπορώ να καλέσω την μεταβλητή '${node.name}'`);
        }
        else if (!(symbol instanceof GLOSymbol.FunctionSymbol)) {
            throw new error_1.default(node, `Δεν μπορώ να καλέσω το αναγνωριστικό '${node.name}' τύπου ${symbol.print()} μέσα σε έκφραση`);
        }
        else if (node.args.length != symbol.args.length) {
            throw new error_1.default(node, `Περίμενα ${symbol.args.length} ${symbol.args.length === 1 ? 'παράμετρο' : 'παραμέτρους'} συνάρτησης αλλά έλαβα ${node.args.length}`);
        }
    }
    visitProcedureCall(node) {
        if (this.insideFunction) {
            throw new error_1.default(node, 'Δεν επιτρέπεται κάλεσμα διαδικασίας μέσα σε συνάρτηση');
        }
        node.args.forEach(this.visit.bind(this));
        const symbol = this.currentScope.resolve(node.name);
        if (!symbol) {
            throw new error_1.default(node, `Δεν έχει οριστεί διαδικασία με όνομα ${node.name}`);
        }
        else if (!(symbol instanceof GLOSymbol.ProcedureSymbol)) {
            throw new error_1.default(node, `Η εντολή ΚΑΛΕΣΕ μπορεί να χρησιμοποιηθεί μόνο με παράμετρο μια διαδικασία, αλλά έλαβα παράμετρο '${node.name}' τύπου ${symbol.print()}`);
        }
        else if (node.args.length != symbol.args.length) {
            throw new error_1.default(node, `Περίμενα ${symbol.args.length} ${symbol.args.length === 1 ? 'παράμετρο' : 'παραμέτρους'} διαδικασίας αλλά έλαβα ${node.args.length}`);
        }
    }
    visitAssignment(node) {
        if (node.left instanceof ast_1.VariableAST) {
            const symbol = this.visitVariable(node.left, true);
            if (symbol instanceof symbol_1.VariableSymbol && symbol.isConstant) {
                throw new error_1.default(node.left, 'Δεν μπορώ να αναθέσω τιμή σε σταθερά');
            }
        }
        else {
            this.visit(node.left);
        }
        this.visit(node.right);
    }
    visitEmpty(node) {
        node.children.forEach(this.visit.bind(this));
    }
    visitInteger(node) {
        node.children.forEach(this.visit.bind(this));
    }
    visitIntegerConstant(node) {
        node.children.forEach(this.visit.bind(this));
    }
    visitIntegerDivision(node) {
        node.children.forEach(this.visit.bind(this));
    }
    visitMinus(node) {
        node.children.forEach(this.visit.bind(this));
    }
    visitMultiplication(node) {
        node.children.forEach(this.visit.bind(this));
    }
    visitPlus(node) {
        node.children.forEach(this.visit.bind(this));
    }
    visitReal(node) {
        node.children.forEach(this.visit.bind(this));
    }
    visitRealConstant(node) {
        node.children.forEach(this.visit.bind(this));
    }
    visitRealDivision(node) {
        node.children.forEach(this.visit.bind(this));
    }
    visitType(node) {
        node.children.forEach(this.visit.bind(this));
    }
    visitUnaryMinus(node) {
        node.children.forEach(this.visit.bind(this));
    }
    visitUnaryPlus(node) {
        node.children.forEach(this.visit.bind(this));
    }
    visitMod(node) {
        node.children.forEach(this.visit.bind(this));
    }
    visitBoolean(node) {
        node.children.forEach(this.visit.bind(this));
    }
    visitTrue(node) {
        node.children.forEach(this.visit.bind(this));
    }
    visitFalse(node) {
        node.children.forEach(this.visit.bind(this));
    }
    visitEquals(node) {
        node.children.forEach(this.visit.bind(this));
    }
    visitNotEquals(node) {
        node.children.forEach(this.visit.bind(this));
    }
    visitGreaterThan(node) {
        node.children.forEach(this.visit.bind(this));
    }
    visitLessThan(node) {
        node.children.forEach(this.visit.bind(this));
    }
    visitGreaterEquals(node) {
        node.children.forEach(this.visit.bind(this));
    }
    visitLessEquals(node) {
        node.children.forEach(this.visit.bind(this));
    }
    visitIf(node) {
        node.children.forEach(this.visit.bind(this));
    }
    visitExponentiation(node) {
        node.children.forEach(this.visit.bind(this));
    }
    visitString(node) {
        node.children.forEach(this.visit.bind(this));
    }
    visitStringConstant(node) {
        node.children.forEach(this.visit.bind(this));
    }
    visitAnd(node) {
        node.children.forEach(this.visit.bind(this));
    }
    visitOr(node) {
        node.children.forEach(this.visit.bind(this));
    }
    visitNot(node) {
        node.children.forEach(this.visit.bind(this));
    }
    visitFor(node) {
        node.children.forEach(this.visit.bind(this));
    }
    visitWhile(node) {
        node.children.forEach(this.visit.bind(this));
    }
    visitRepeat(node) {
        node.children.forEach(this.visit.bind(this));
    }
    visitSubrange(node) {
        node.children.forEach(this.visit.bind(this));
    }
    visitArray(node) {
        node.children.forEach(this.visit.bind(this));
    }
    visitArrayAccess(node) {
        node.children.forEach(this.visit.bind(this));
    }
    visitRead(node) {
        node.children.forEach(child => {
            const symbol = this.visit(child);
            if (symbol instanceof symbol_1.VariableSymbol && symbol.isConstant) {
                throw new error_1.default(child, 'Δεν μπορώ να διαβάσω σταθερή τιμή');
            }
        });
    }
    visitWrite(node) {
        node.children.forEach(this.visit.bind(this));
    }
    run() {
        return this.visit(this.ast);
    }
}
exports.default = SymbolBuilder;
//# sourceMappingURL=SymbolBuilder.js.map

/***/ }),

/***/ "./glo/modules/semantic-analyzer/lib/TypeChecker.js":
/*!**********************************************************!*\
  !*** ./glo/modules/semantic-analyzer/lib/TypeChecker.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
// TODO: This module does more than type checking, split it
const AST = __importStar(__webpack_require__(/*! @glossa-glo/ast */ "./glo/modules/ast/lib/AST.js"));
const Types = __importStar(__webpack_require__(/*! @glossa-glo/data-types */ "./glo/modules/data-types/lib/index.js"));
const data_types_1 = __webpack_require__(/*! @glossa-glo/data-types */ "./glo/modules/data-types/lib/index.js");
const symbol_1 = __webpack_require__(/*! @glossa-glo/symbol */ "./glo/modules/symbol/lib/GLOSymbol.js");
const error_1 = __importStar(__webpack_require__(/*! @glossa-glo/error */ "./glo/modules/error/lib/GLOError.js"));
class TypeChecker extends AST.ASTVisitor {
    constructor(ast, baseScope) {
        super();
        this.ast = ast;
        this.throwOnIOVisit = false;
        this.throwOnIOVisitErrorMessageSuffix = '';
        this.currentScope = baseScope;
    }
    visitIntegerConstant(node) {
        return Types.GLOInteger;
    }
    visitRealConstant(node) {
        return Types.GLOReal;
    }
    visitStringConstant(node) {
        return Types.GLOString;
    }
    visitTrue(node) {
        return Types.GLOBoolean;
    }
    visitFalse(node) {
        return Types.GLOBoolean;
    }
    visitVariable(node, assignee = false) {
        const symbol = this.currentScope.resolve(node.name);
        if (symbol instanceof symbol_1.VariableSymbol) {
            return symbol.type;
        }
        else if (symbol instanceof symbol_1.FunctionSymbol &&
            this.currentScope.type === symbol_1.SymbolScopeType.Function && // Is inside function
            this.currentScope.nameEquals(node.name) && // Variable name matches function name
            assignee // Variable the left side of an assignment expression
        ) {
            return symbol.returnType;
        }
        else
            throw new error_1.default(node, 'Program error: Attempted to type check non variable or function');
    }
    visitAssignment(node) {
        const left = node.left instanceof AST.VariableAST
            ? this.visitVariable(node.left, true)
            : this.visit(node.left);
        const right = this.visit(node.right);
        data_types_1.assertTypeEquality({ node, left, right, allowPromoteLeft: false });
        return left;
    }
    visitIntegerDivision(node) {
        let left = this.visit(node.left);
        let right = this.visit(node.right);
        const { promoteLeft, promoteRight } = data_types_1.assertTypeEquality({
            node,
            left,
            right,
        });
        if (promoteLeft && left !== promoteLeft) {
            left = promoteLeft;
            node.left = node.left.promote.get(promoteLeft)();
        }
        if (promoteRight && right !== promoteRight) {
            right = promoteRight;
            node.right = node.right.promote.get(promoteRight)();
        }
        error_1.assert(node, left.prototype.integerDivide, `Δεν μπορώ να πραγματοποιήσω την πράξη με τελεστέους τύπου ${Types.printType(left)}`);
        return Types.GLOInteger;
    }
    visitRealDivision(node) {
        let left = this.visit(node.left);
        let right = this.visit(node.right);
        const { promoteLeft, promoteRight } = data_types_1.assertTypeEquality({
            node,
            left,
            right,
        });
        if (promoteLeft && left !== promoteLeft) {
            left = promoteLeft;
            node.left = node.left.promote.get(promoteLeft)();
        }
        if (promoteRight && right !== promoteRight) {
            right = promoteRight;
            node.right = node.right.promote.get(promoteRight)();
        }
        error_1.assert(node, left.prototype.divide, `Δεν μπορώ να πραγματοποιήσω την πράξη με τελεστέους τύπου ${Types.printType(left)}`);
        return Types.GLOReal;
    }
    visitMinus(node) {
        let left = this.visit(node.left);
        let right = this.visit(node.right);
        const { promoteLeft, promoteRight } = data_types_1.assertTypeEquality({
            node,
            left,
            right,
        });
        if (promoteLeft && left !== promoteLeft) {
            left = promoteLeft;
            node.left = node.left.promote.get(promoteLeft)();
        }
        if (promoteRight && right !== promoteRight) {
            right = promoteRight;
            node.right = node.right.promote.get(promoteRight)();
        }
        error_1.assert(node, left.prototype.subtract, `Δεν μπορώ να πραγματοποιήσω την πράξη με τελεστέους τύπου ${Types.printType(left)}`);
        return left;
    }
    visitMultiplication(node) {
        let left = this.visit(node.left);
        let right = this.visit(node.right);
        const { promoteLeft, promoteRight } = data_types_1.assertTypeEquality({
            node,
            left,
            right,
        });
        if (promoteLeft && left !== promoteLeft) {
            left = promoteLeft;
            node.left = node.left.promote.get(promoteLeft)();
        }
        if (promoteRight && right !== promoteRight) {
            right = promoteRight;
            node.right = node.right.promote.get(promoteRight)();
        }
        error_1.assert(node, left.prototype.multiply, `Δεν μπορώ να πραγματοποιήσω την πράξη με τελεστέους τύπου ${Types.printType(left)}`);
        return left;
    }
    visitExponentiation(node) {
        let left = this.visit(node.left);
        let right = this.visit(node.right);
        const { promoteLeft, promoteRight } = data_types_1.assertTypeEquality({
            node,
            left,
            right,
        });
        if (promoteLeft && left !== promoteLeft) {
            left = promoteLeft;
            node.left = node.left.promote.get(promoteLeft)();
        }
        if (promoteRight && right !== promoteRight) {
            right = promoteRight;
            node.right = node.right.promote.get(promoteRight)();
        }
        error_1.assert(node, left.prototype.multiply, `Δεν μπορώ να πραγματοποιήσω την πράξη με τελεστέους τύπου ${Types.printType(left)}`);
        return left;
    }
    visitMod(node) {
        let left = this.visit(node.left);
        let right = this.visit(node.right);
        const { promoteLeft, promoteRight } = data_types_1.assertTypeEquality({
            node,
            left,
            right,
        });
        if (promoteLeft && left !== promoteLeft) {
            left = promoteLeft;
            node.left = node.left.promote.get(promoteLeft)();
        }
        if (promoteRight && right !== promoteRight) {
            right = promoteRight;
            node.right = node.right.promote.get(promoteRight)();
        }
        error_1.assert(node, left.prototype.mod, `Δεν μπορώ να πραγματοποιήσω την πράξη με τελεστέους τύπου ${Types.printType(left)}`);
        return left;
    }
    visitPlus(node) {
        let left = this.visit(node.left);
        let right = this.visit(node.right);
        const { promoteLeft, promoteRight } = data_types_1.assertTypeEquality({
            node,
            left,
            right,
        });
        if (node.left.promote && promoteLeft && left !== promoteLeft) {
            left = promoteLeft;
            node.left = node.left.promote.get(promoteLeft)();
        }
        if (node.right.promote && promoteRight && right !== promoteRight) {
            right = promoteRight;
            node.right = node.right.promote.get(promoteRight)();
        }
        error_1.assert(node, left.prototype.add, `Δεν μπορώ να πραγματοποιήσω την πράξη με τελεστέους τύπου ${Types.printType(left)}`);
        return left;
    }
    visitEquals(node) {
        let left = this.visit(node.left);
        let right = this.visit(node.right);
        const { promoteLeft, promoteRight } = data_types_1.assertTypeEquality({
            node,
            left,
            right,
        });
        if (promoteLeft && left !== promoteLeft) {
            left = promoteLeft;
            node.left = node.left.promote.get(promoteLeft)();
        }
        if (promoteRight && right !== promoteRight) {
            right = promoteRight;
            node.right = node.right.promote.get(promoteRight)();
        }
        error_1.assert(node, left.prototype.equals, `Δεν μπορώ να πραγματοποιήσω την πράξη με τελεστέους τύπου ${Types.printType(left)}`);
        return Types.GLOBoolean;
    }
    visitNotEquals(node) {
        let left = this.visit(node.left);
        let right = this.visit(node.right);
        const { promoteLeft, promoteRight } = data_types_1.assertTypeEquality({
            node,
            left,
            right,
        });
        if (promoteLeft && left !== promoteLeft) {
            left = promoteLeft;
            node.left = node.left.promote.get(promoteLeft)();
        }
        if (promoteRight && right !== promoteRight) {
            right = promoteRight;
            node.right = node.right.promote.get(promoteRight)();
        }
        error_1.assert(node, left.prototype.notEquals, `Δεν μπορώ να πραγματοποιήσω την πράξη με τελεστέους τύπου ${Types.printType(left)}`);
        return Types.GLOBoolean;
    }
    visitGreaterThan(node) {
        let left = this.visit(node.left);
        let right = this.visit(node.right);
        const { promoteLeft, promoteRight } = data_types_1.assertTypeEquality({
            node,
            left,
            right,
        });
        if (promoteLeft && left !== promoteLeft) {
            left = promoteLeft;
            node.left = node.left.promote.get(promoteLeft)();
        }
        if (promoteRight && right !== promoteRight) {
            right = promoteRight;
            node.right = node.right.promote.get(promoteRight)();
        }
        error_1.assert(node, left.prototype.greaterThan, `Δεν μπορώ να πραγματοποιήσω την πράξη με τελεστέους τύπου ${Types.printType(left)}`);
        return Types.GLOBoolean;
    }
    visitLessThan(node) {
        let left = this.visit(node.left);
        let right = this.visit(node.right);
        const { promoteLeft, promoteRight } = data_types_1.assertTypeEquality({
            node,
            left,
            right,
        });
        if (promoteLeft && left !== promoteLeft) {
            left = promoteLeft;
            node.left = node.left.promote.get(promoteLeft)();
        }
        if (promoteRight && right !== promoteRight) {
            right = promoteRight;
            node.right = node.right.promote.get(promoteRight)();
        }
        error_1.assert(node, left.prototype.lessThan, `Δεν μπορώ να πραγματοποιήσω την πράξη με τελεστέους τύπου ${Types.printType(left)}`);
        return Types.GLOBoolean;
    }
    visitGreaterEquals(node) {
        let left = this.visit(node.left);
        let right = this.visit(node.right);
        const { promoteLeft, promoteRight } = data_types_1.assertTypeEquality({
            node,
            left,
            right,
        });
        if (promoteLeft && left !== promoteLeft) {
            left = promoteLeft;
            node.left = node.left.promote.get(promoteLeft)();
        }
        if (promoteRight && right !== promoteRight) {
            right = promoteRight;
            node.right = node.right.promote.get(promoteRight)();
        }
        error_1.assert(node, left.prototype.greaterEqualsThan, `Δεν μπορώ να πραγματοποιήσω την πράξη με τελεστέους τύπου ${Types.printType(left)}`);
        return Types.GLOBoolean;
    }
    visitLessEquals(node) {
        let left = this.visit(node.left);
        let right = this.visit(node.right);
        const { promoteLeft, promoteRight } = data_types_1.assertTypeEquality({
            node,
            left,
            right,
        });
        if (promoteLeft && left !== promoteLeft) {
            left = promoteLeft;
            node.left = node.left.promote.get(promoteLeft)();
        }
        if (promoteRight && right !== promoteRight) {
            right = promoteRight;
            node.right = node.right.promote.get(promoteRight)();
        }
        error_1.assert(node, left.prototype.lessEqualsThan, `Δεν μπορώ να πραγματοποιήσω την πράξη με τελεστέους τύπου ${Types.printType(left)}`);
        return Types.GLOBoolean;
    }
    visitAnd(node) {
        const left = this.visit(node.left);
        const right = this.visit(node.right);
        error_1.assertEquality(node, left, Types.GLOBoolean, `Περίμενα τον αριστερό τελεστέο να είναι τύπου ${Types.printType(Types.GLOBoolean)}, αλλά έλαβα μη συμβατό τύπο ${Types.printType(left)}`);
        error_1.assertEquality(node, right, Types.GLOBoolean, `Περίμενα τον δεξιό τελεστέο να είναι τύπου ${Types.printType(Types.GLOBoolean)}, αλλά έλαβα μη συμβατό τύπο ${Types.printType(left)}`);
        return Types.GLOBoolean;
    }
    visitOr(node) {
        const left = this.visit(node.left);
        const right = this.visit(node.right);
        error_1.assertEquality(node, left, Types.GLOBoolean, `Περίμενα τον αριστερό τελεστέο να είναι τύπου ${Types.printType(Types.GLOBoolean)}, αλλά έλαβα μη συμβατό τύπο ${Types.printType(left)}`);
        error_1.assertEquality(node, right, Types.GLOBoolean, `Περίμενα τον δεξιό τελεστέο να είναι τύπου ${Types.printType(Types.GLOBoolean)}, αλλά έλαβα μη συμβατό τύπο ${Types.printType(left)}`);
        return Types.GLOBoolean;
    }
    visitNot(node) {
        const target = this.visit(node.target);
        error_1.assertEquality(node, target, Types.GLOBoolean, `Περίμενα τον τελεστέο να είναι τύπου ${Types.printType(Types.GLOBoolean)}, αλλά έλαβα μη συμβατό τύπο ${Types.printType(target)}`);
        return Types.GLOBoolean;
    }
    visitUnaryMinus(node) {
        const target = this.visit(node.target);
        error_1.assert(node, target.prototype.unaryMinus, `Δεν μπορώ να πραγματοποιήσω την πράξη με τελεστέο τύπου ${Types.printType(target)}`);
        return this.visit(node.target);
    }
    visitUnaryPlus(node) {
        const target = this.visit(node.target);
        error_1.assert(node, target.prototype.unaryPlus(), `Δεν μπορώ να πραγματοποιήσω την πράξη με τελεστέο τύπου ${Types.printType(target)}`);
        return this.visit(node.target);
    }
    visitProgram(node) {
        this.currentScope = this.currentScope.children.get(node.name);
        node.declarations.forEach(this.visit.bind(this));
        node.statementList.forEach(this.visit.bind(this));
        this.currentScope = this.currentScope.getParent();
        return Types.GLOVoid;
    }
    visitProcedureDeclaration(node) {
        this.currentScope = this.currentScope.children.get(node.name.name);
        node.constantDeclarations.forEach(this.visit.bind(this));
        node.variableDeclarations.forEach(this.visit.bind(this));
        node.statementList.forEach(this.visit.bind(this));
        this.currentScope = this.currentScope.getParent();
        return Types.GLOVoid;
    }
    visitIf(node) {
        node.children.forEach(this.visit.bind(this));
        return Types.GLOVoid;
    }
    visitEmpty(node) {
        return Types.GLOVoid;
    }
    visitInteger(node) {
        return Types.GLOVoid;
    }
    visitReal(node) {
        return Types.GLOVoid;
    }
    visitBoolean(node) {
        return Types.GLOVoid;
    }
    visitString(node) {
        return Types.GLOVoid;
    }
    visitVariableDeclaration(node) {
        this.visit(node.variable);
        this.visit(node.type);
        return Types.GLOVoid;
    }
    visitFunctionCall(node) {
        const symbol = this.currentScope.resolve(node.name);
        const overloads = [symbol, ...symbol.overloads];
        for (let i = 0; i < node.args.length; i++) {
            const argAST = node.args[i];
            const arg = this.visit(argAST);
            const mismatches = [];
            for (const overload of overloads) {
                try {
                    data_types_1.assertTypeEquality({
                        node: argAST,
                        left: overload.args[i].type,
                        right: arg,
                        allowPromoteLeft: false,
                    });
                    break;
                }
                catch (_a) {
                    mismatches.push(overload.args[i].type);
                }
            }
            if (mismatches.length === overloads.length) {
                throw new error_1.default(argAST, `Περίμενα την παράμετρο '${overloads[0].args[i].name}' να είναι τύπου ${Types.printType(mismatches[0])}${mismatches
                    .slice(1)
                    .map(type => ` ή ${Types.printType(type)}`)
                    .join('')}, αλλά έλαβα μη συμβατό τύπο ${Types.printType(arg)}`);
            }
        }
        return symbol.returnType;
    }
    visitProcedureCall(node) {
        const symbol = this.currentScope.resolve(node.name);
        symbol.args.forEach(({ type: declarationType, name: argDeclarationName }, i) => {
            const argAST = node.args[i];
            const arg = this.visit(argAST);
            data_types_1.assertTypeEquality({
                node: argAST,
                left: declarationType,
                right: arg,
                allowPromoteLeft: false,
                message: `Περίμενα την παράμετρο '${argDeclarationName}' να είναι τύπου LEFT_TYPE, αλλά έλαβα μη συμβατό τύπο RIGHT_TYPE`,
            });
        });
        return Types.GLOVoid;
    }
    visitFor(node) {
        const counterType = this.visit(node.counter);
        error_1.assertEquality(node.counter, counterType, Types.GLOInteger, `Περίμενα τον μετρητή επανάληψης να είναι τύπου ${Types.printType(Types.GLOInteger)}, αλλά έλαβα μη συμβατό τύπο ${Types.printType(counterType)}`);
        const startValueType = this.visit(node.startValue);
        error_1.assertEquality(node.startValue, startValueType, Types.GLOInteger, `Περίμενα την αρχική τιμή επανάληψης να είναι τύπου ${Types.printType(Types.GLOInteger)}, αλλά έλαβα μη συμβατό τύπο ${Types.printType(startValueType)}`);
        const endValueType = this.visit(node.endValue);
        error_1.assertEquality(node.endValue, endValueType, Types.GLOInteger, `Περίμενα την τελική επανάληψης να είναι τύπου ${Types.printType(Types.GLOInteger)}, αλλά έλαβα μη συμβατό τύπο ${Types.printType(endValueType)}`);
        const stepType = this.visit(node.step);
        error_1.assertEquality(node.step, stepType, Types.GLOInteger, `Περίμενα το βήμα επανάληψης να είναι τύπου ${Types.printType(Types.GLOInteger)}, αλλά έλαβα μη συμβατό τύπο ${Types.printType(stepType)}`);
        node.statementList.forEach(node => this.visit(node).bind(this));
        return Types.GLOVoid;
    }
    visitWhile(node) {
        const conditionType = this.visit(node.condition);
        error_1.assertEquality(node.condition, conditionType, Types.GLOBoolean, `Περίμενα τη συνθήκη επανάληψης να είναι τύπου ${Types.printType(Types.GLOBoolean)}, αλλά έλαβα μη συμβατό τύπο ${Types.printType(conditionType)}`);
        node.statementList.forEach(node => this.visit(node).bind(this));
        return Types.GLOVoid;
    }
    visitRepeat(node) {
        const conditionType = this.visit(node.condition);
        error_1.assertEquality(node.condition, conditionType, Types.GLOBoolean, `Περίμενα τη συνθήκη επανάληψης να είναι τύπου ${Types.printType(Types.GLOBoolean)}, αλλά έλαβα μη συμβατό τύπο ${Types.printType(conditionType)}`);
        node.statementList.forEach(node => this.visit(node).bind(this));
        return Types.GLOVoid;
    }
    visitSubrange(node) {
        // assert(
        //   node,
        //   node.left.lessEqualsThan(node.right),
        //   'Περίμενα το αριστερό μέλος του εύρους να είναι μικρότερο από το δεξί',
        // );
        return Types.GLOSubrange;
    }
    visitArray(node) {
        return Types.GLOVoid;
    }
    visitArrayAccess(node) {
        const array = this.currentScope.resolve(node.array.name, symbol_1.VariableSymbol)
            .type;
        for (let i = 0; i < node.accessors.length; i++) {
            const accessor = node.accessors[i];
            data_types_1.assertTypeEquality({
                node: accessor,
                left: Types.GLOInteger,
                right: this.visit(accessor),
                message: `Περίμενα τον δείκτη του πίνακα '${node.array.name}' να είναι τύπου LEFT_TYPE αλλά έλαβα μη συμβατό τύπο RIGHT_TYPE`,
                allowPromoteLeft: false,
            });
        }
        return array.componentType;
    }
    visitFunctionDeclaration(node) {
        this.currentScope = this.currentScope.children.get(node.name.name);
        this.throwOnIOVisit = true;
        this.throwOnIOVisitErrorMessageSuffix = 'μέσα σε συνάρτηση';
        node.constantDeclarations.forEach(this.visit.bind(this));
        node.variableDeclarations.forEach(this.visit.bind(this));
        node.statementList.forEach(this.visit.bind(this));
        this.throwOnIOVisit = false;
        this.throwOnIOVisitErrorMessageSuffix = '';
        this.currentScope = this.currentScope.getParent();
        return Types.GLOVoid;
    }
    visitRead(node) {
        if (this.throwOnIOVisit) {
            throw new error_1.default(node, `Απαγορεύεται εντολή Διάβασε ${this.throwOnIOVisitErrorMessageSuffix}`);
        }
        node.args.forEach(arg => {
            const argType = this.visit(arg);
            if (!Types.canBeRead(argType)) {
                throw new error_1.default(arg, `Δεν μπορώ να διαβάσω μεταβλητή με τύπο ${Types.printType(argType)}`);
            }
        });
        return Types.GLOVoid;
    }
    visitWrite(node) {
        if (this.throwOnIOVisit) {
            throw new error_1.default(node, `Απαγορεύεται εντολή Γράψε ${this.throwOnIOVisitErrorMessageSuffix}`);
        }
        node.args.forEach(arg => {
            const argType = this.visit(arg);
            if (!Types.canBeWritten(argType)) {
                throw new error_1.default(arg, `Δεν μπορώ να γράψω μεταβλητή με τύπο ${Types.printType(argType)}`);
            }
        });
        return Types.GLOVoid;
    }
    visitConstantDeclaration(node) {
        node.children.forEach(this.visit.bind(this));
        return Types.GLOVoid;
    }
    run() {
        return this.visit(this.ast);
    }
}
exports.default = TypeChecker;
//# sourceMappingURL=TypeChecker.js.map

/***/ }),

/***/ "./glo/modules/symbol/lib/GLOSymbol.js":
/*!*********************************************!*\
  !*** ./glo/modules/symbol/lib/GLOSymbol.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(/*! ./symbol */ "./glo/modules/symbol/lib/symbol/index.js"), exports);
__exportStar(__webpack_require__(/*! ./symbol-scope */ "./glo/modules/symbol/lib/symbol-scope/index.js"), exports);
//# sourceMappingURL=GLOSymbol.js.map

/***/ }),

/***/ "./glo/modules/symbol/lib/symbol-scope/BaseSymbolScope.js":
/*!****************************************************************!*\
  !*** ./glo/modules/symbol/lib/symbol-scope/BaseSymbolScope.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const SymbolScope_1 = __importDefault(__webpack_require__(/*! ./SymbolScope */ "./glo/modules/symbol/lib/symbol-scope/SymbolScope.js"));
const SymbolScopeType_1 = __webpack_require__(/*! ./SymbolScopeType */ "./glo/modules/symbol/lib/symbol-scope/SymbolScopeType.js");
class BaseSymbolScope extends SymbolScope_1.default {
    constructor(name) {
        super(name, SymbolScopeType_1.SymbolScopeType.Root);
        this.parent = null;
    }
}
exports.default = BaseSymbolScope;
//# sourceMappingURL=BaseSymbolScope.js.map

/***/ }),

/***/ "./glo/modules/symbol/lib/symbol-scope/LocalSymbolScope.js":
/*!*****************************************************************!*\
  !*** ./glo/modules/symbol/lib/symbol-scope/LocalSymbolScope.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const SymbolScope_1 = __importDefault(__webpack_require__(/*! ./SymbolScope */ "./glo/modules/symbol/lib/symbol-scope/SymbolScope.js"));
class LocalSymbolScope extends SymbolScope_1.default {
    constructor(name, type, parent) {
        super(name, type);
        this.parent = parent;
        this.parent.children.add(this);
    }
}
exports.default = LocalSymbolScope;
//# sourceMappingURL=LocalSymbolScope.js.map

/***/ }),

/***/ "./glo/modules/symbol/lib/symbol-scope/ScopeChildren.js":
/*!**************************************************************!*\
  !*** ./glo/modules/symbol/lib/symbol-scope/ScopeChildren.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const case_insensitive_map_1 = __importDefault(__webpack_require__(/*! @glossa-glo/case-insensitive-map */ "./glo/modules/case-insensitive-map/lib/CaseInsensitiveMap.js"));
class ScopeChildren extends case_insensitive_map_1.default {
    add(scope) {
        this.set(scope.name, scope);
    }
    get(scopeName) {
        const childScope = case_insensitive_map_1.default.prototype.get.call(this, scopeName);
        if (childScope) {
            return childScope;
        }
        else {
            return null;
        }
    }
}
exports.default = ScopeChildren;
//# sourceMappingURL=ScopeChildren.js.map

/***/ }),

/***/ "./glo/modules/symbol/lib/symbol-scope/SymbolScope.js":
/*!************************************************************!*\
  !*** ./glo/modules/symbol/lib/symbol-scope/SymbolScope.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const case_insensitive_map_1 = __importStar(__webpack_require__(/*! @glossa-glo/case-insensitive-map */ "./glo/modules/case-insensitive-map/lib/CaseInsensitiveMap.js"));
const ScopeChildren_1 = __importDefault(__webpack_require__(/*! ./ScopeChildren */ "./glo/modules/symbol/lib/symbol-scope/ScopeChildren.js"));
const data_types_1 = __webpack_require__(/*! @glossa-glo/data-types */ "./glo/modules/data-types/lib/index.js");
const error_1 = __importDefault(__webpack_require__(/*! @glossa-glo/error */ "./glo/modules/error/lib/GLOError.js"));
const symbol_1 = __webpack_require__(/*! ../symbol */ "./glo/modules/symbol/lib/symbol/index.js");
class SymbolScope {
    constructor(name, type) {
        this.name = name;
        this.type = type;
        this.scope = new case_insensitive_map_1.default();
        this.value = new case_insensitive_map_1.default();
        this.children = new ScopeChildren_1.default();
    }
    nameEquals(name) {
        return (case_insensitive_map_1.toUpperCaseNormalizedGreek(this.name) === case_insensitive_map_1.toUpperCaseNormalizedGreek(name));
    }
    resolveValue(name) {
        const result = this.value.get(name);
        if (result) {
            return result;
        }
        else if (this.parent) {
            return this.parent.resolveValue(name);
        }
        else {
            return null;
        }
    }
    resolveValueThisScopeOnly(name) {
        const result = this.value.get(name);
        return result || null;
    }
    changeArrayValue(arrayName, accessors, value) {
        const scope = this.findScope(arrayName);
        const array = scope.resolveValueThisScopeOnly(arrayName);
        array.changeValue(accessors, value);
    }
    changeFunctionReturnType(name, value) {
        const scope = this.findScope(name);
        const fn = scope.resolveValueThisScopeOnly(name);
        fn.returnValue = value;
        scope.value.set(name, fn);
    }
    changeValue(name, value) {
        const scope = this.findScope(name);
        if (!scope) {
            throw new Error(`Program error: Could not find the scope containing the symbol with name ${name} (current scope: ${this.name})`);
        }
        scope.value.set(name, value);
    }
    findScope(name) {
        const result = this.scope.get(name);
        if (result) {
            return this;
        }
        else if (this.parent) {
            return this.parent.findScope(name);
        }
        else {
            return null;
        }
    }
    getParent() {
        return this.parent;
    }
    insert(symbol) {
        if (this.has(symbol)) {
            throw new error_1.default(symbol, `Το αναγνωριστικό '${symbol.name}' χρησιμοποιείται ήδη`);
        }
        this.scope.set(symbol.name, symbol);
        if (symbol instanceof symbol_1.VariableSymbol && symbol.type.defaultValue) {
            this.value.set(symbol.name, symbol.type.defaultValue);
        }
    }
    has(symbol) {
        return this.scope.has(symbol.name);
    }
    resolve(name, type) {
        const result = this.scope.get(name);
        if (result && (type ? result instanceof type : true)) {
            return result;
        }
        else if (this.parent) {
            return this.parent.resolve(name, type);
        }
        else {
            return null;
        }
    }
    // For step execution
    getVariablesAndConstants() {
        const variableOrConstantList = [];
        for (const [k, v] of this.scope) {
            if (v instanceof symbol_1.VariableSymbol) {
                const value = this.resolveValue(k);
                variableOrConstantList.push({
                    name: this.scope.originalKey.get(k),
                    type: v.type.isArrayType ? 'Πίνακας' : data_types_1.printType(v.type),
                    value: value
                        ? !v.type.isArrayType
                            ? value.print()
                            : value.arrayPrint()
                        : undefined,
                    isConstant: v.isConstant,
                    dimensionLength: v.type.isArrayType
                        ? value.dimensionLength
                        : undefined,
                });
            }
        }
        return variableOrConstantList;
    }
}
exports.default = SymbolScope;
//# sourceMappingURL=SymbolScope.js.map

/***/ }),

/***/ "./glo/modules/symbol/lib/symbol-scope/SymbolScopeType.js":
/*!****************************************************************!*\
  !*** ./glo/modules/symbol/lib/symbol-scope/SymbolScopeType.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.SymbolScopeType = void 0;
var SymbolScopeType;
(function (SymbolScopeType) {
    SymbolScopeType["Program"] = "program";
    SymbolScopeType["Procedure"] = "procedure";
    SymbolScopeType["Function"] = "function";
    SymbolScopeType["Root"] = "root";
})(SymbolScopeType = exports.SymbolScopeType || (exports.SymbolScopeType = {}));
//# sourceMappingURL=SymbolScopeType.js.map

/***/ }),

/***/ "./glo/modules/symbol/lib/symbol-scope/index.js":
/*!******************************************************!*\
  !*** ./glo/modules/symbol/lib/symbol-scope/index.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SymbolScopeType = exports.LocalSymbolScope = exports.BaseSymbolScope = exports.SymbolScope = void 0;
const BaseSymbolScope_1 = __importDefault(__webpack_require__(/*! ./BaseSymbolScope */ "./glo/modules/symbol/lib/symbol-scope/BaseSymbolScope.js"));
exports.BaseSymbolScope = BaseSymbolScope_1.default;
const LocalSymbolScope_1 = __importDefault(__webpack_require__(/*! ./LocalSymbolScope */ "./glo/modules/symbol/lib/symbol-scope/LocalSymbolScope.js"));
exports.LocalSymbolScope = LocalSymbolScope_1.default;
const SymbolScope_1 = __importDefault(__webpack_require__(/*! ./SymbolScope */ "./glo/modules/symbol/lib/symbol-scope/SymbolScope.js"));
exports.SymbolScope = SymbolScope_1.default;
const SymbolScopeType_1 = __webpack_require__(/*! ./SymbolScopeType */ "./glo/modules/symbol/lib/symbol-scope/SymbolScopeType.js");
Object.defineProperty(exports, "SymbolScopeType", { enumerable: true, get: function () { return SymbolScopeType_1.SymbolScopeType; } });
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./glo/modules/symbol/lib/symbol/FunctionSymbol.js":
/*!*********************************************************!*\
  !*** ./glo/modules/symbol/lib/symbol/FunctionSymbol.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const GLOSymbol_1 = __importDefault(__webpack_require__(/*! ./GLOSymbol */ "./glo/modules/symbol/lib/symbol/GLOSymbol.js"));
class FunctionSymbol extends GLOSymbol_1.default {
    constructor(name, args, returnType, overloads = []) {
        super(name);
        this.returnType = returnType;
        this.overloads = overloads;
        this.args = args;
        [args.length, ...overloads.map(overload => overload.args.length)].reduce((a, b, i) => {
            if (a != b) {
                throw new Error(`Overloads ${i -
                    1} and ${i} of function ${name} do not have the same number of arguments`);
            }
            return a;
        });
    }
    print() {
        return 'Συνάρτηση';
    }
}
exports.default = FunctionSymbol;
//# sourceMappingURL=FunctionSymbol.js.map

/***/ }),

/***/ "./glo/modules/symbol/lib/symbol/GLOSymbol.js":
/*!****************************************************!*\
  !*** ./glo/modules/symbol/lib/symbol/GLOSymbol.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const error_1 = __webpack_require__(/*! @glossa-glo/error */ "./glo/modules/error/lib/GLOError.js");
class GLOSymbol extends error_1.DebugInfoProvider {
    constructor(name, ..._) {
        super();
        this.name = name;
    }
    print() {
        return 'Αναγνωριστικό';
    }
}
exports.default = GLOSymbol;
//# sourceMappingURL=GLOSymbol.js.map

/***/ }),

/***/ "./glo/modules/symbol/lib/symbol/ProcedureSymbol.js":
/*!**********************************************************!*\
  !*** ./glo/modules/symbol/lib/symbol/ProcedureSymbol.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const GLOSymbol_1 = __importDefault(__webpack_require__(/*! ./GLOSymbol */ "./glo/modules/symbol/lib/symbol/GLOSymbol.js"));
class ProcedureSymbol extends GLOSymbol_1.default {
    constructor(name, args) {
        super(name);
        this.args = args;
    }
    print() {
        return 'Διαδικασία';
    }
}
exports.default = ProcedureSymbol;
//# sourceMappingURL=ProcedureSymbol.js.map

/***/ }),

/***/ "./glo/modules/symbol/lib/symbol/ProgramSymbol.js":
/*!********************************************************!*\
  !*** ./glo/modules/symbol/lib/symbol/ProgramSymbol.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const GLOSymbol_1 = __importDefault(__webpack_require__(/*! ./GLOSymbol */ "./glo/modules/symbol/lib/symbol/GLOSymbol.js"));
class ProgramSymbol extends GLOSymbol_1.default {
    constructor(name) {
        super(name);
    }
    print() {
        return 'Πρόγραμμα';
    }
}
exports.default = ProgramSymbol;
//# sourceMappingURL=ProgramSymbol.js.map

/***/ }),

/***/ "./glo/modules/symbol/lib/symbol/VariableSymbol.js":
/*!*********************************************************!*\
  !*** ./glo/modules/symbol/lib/symbol/VariableSymbol.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const GLOSymbol_1 = __importDefault(__webpack_require__(/*! ./GLOSymbol */ "./glo/modules/symbol/lib/symbol/GLOSymbol.js"));
class VariableSymbol extends GLOSymbol_1.default {
    constructor(name, type, isConstant = false, dimensionLength) {
        super(name);
        this.type = type;
        this.isConstant = isConstant;
        this.dimensionLength = dimensionLength;
    }
    print() {
        return this.dimensionLength ? 'Πίνακας' : 'Μεταβλητή';
    }
}
exports.default = VariableSymbol;
//# sourceMappingURL=VariableSymbol.js.map

/***/ }),

/***/ "./glo/modules/symbol/lib/symbol/index.js":
/*!************************************************!*\
  !*** ./glo/modules/symbol/lib/symbol/index.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FunctionSymbol = exports.ProgramSymbol = exports.ProcedureSymbol = exports.VariableSymbol = exports.GLOSymbol = void 0;
const GLOSymbol_1 = __importDefault(__webpack_require__(/*! ./GLOSymbol */ "./glo/modules/symbol/lib/symbol/GLOSymbol.js"));
exports.GLOSymbol = GLOSymbol_1.default;
const VariableSymbol_1 = __importDefault(__webpack_require__(/*! ./VariableSymbol */ "./glo/modules/symbol/lib/symbol/VariableSymbol.js"));
exports.VariableSymbol = VariableSymbol_1.default;
const ProcedureSymbol_1 = __importDefault(__webpack_require__(/*! ./ProcedureSymbol */ "./glo/modules/symbol/lib/symbol/ProcedureSymbol.js"));
exports.ProcedureSymbol = ProcedureSymbol_1.default;
const ProgramSymbol_1 = __importDefault(__webpack_require__(/*! ./ProgramSymbol */ "./glo/modules/symbol/lib/symbol/ProgramSymbol.js"));
exports.ProgramSymbol = ProgramSymbol_1.default;
const FunctionSymbol_1 = __importDefault(__webpack_require__(/*! ./FunctionSymbol */ "./glo/modules/symbol/lib/symbol/FunctionSymbol.js"));
exports.FunctionSymbol = FunctionSymbol_1.default;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./glo/modules/webapp/node_modules/base64-js/index.js":
/*!************************************************************!*\
  !*** ./glo/modules/webapp/node_modules/base64-js/index.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.byteLength = byteLength
exports.toByteArray = toByteArray
exports.fromByteArray = fromByteArray

var lookup = []
var revLookup = []
var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array

var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
for (var i = 0, len = code.length; i < len; ++i) {
  lookup[i] = code[i]
  revLookup[code.charCodeAt(i)] = i
}

// Support decoding URL-safe base64 strings, as Node.js does.
// See: https://en.wikipedia.org/wiki/Base64#URL_applications
revLookup['-'.charCodeAt(0)] = 62
revLookup['_'.charCodeAt(0)] = 63

function getLens (b64) {
  var len = b64.length

  if (len % 4 > 0) {
    throw new Error('Invalid string. Length must be a multiple of 4')
  }

  // Trim off extra bytes after placeholder bytes are found
  // See: https://github.com/beatgammit/base64-js/issues/42
  var validLen = b64.indexOf('=')
  if (validLen === -1) validLen = len

  var placeHoldersLen = validLen === len
    ? 0
    : 4 - (validLen % 4)

  return [validLen, placeHoldersLen]
}

// base64 is 4/3 + up to two characters of the original data
function byteLength (b64) {
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function _byteLength (b64, validLen, placeHoldersLen) {
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function toByteArray (b64) {
  var tmp
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]

  var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen))

  var curByte = 0

  // if there are placeholders, only get up to the last complete 4 chars
  var len = placeHoldersLen > 0
    ? validLen - 4
    : validLen

  var i
  for (i = 0; i < len; i += 4) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 18) |
      (revLookup[b64.charCodeAt(i + 1)] << 12) |
      (revLookup[b64.charCodeAt(i + 2)] << 6) |
      revLookup[b64.charCodeAt(i + 3)]
    arr[curByte++] = (tmp >> 16) & 0xFF
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 2) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 2) |
      (revLookup[b64.charCodeAt(i + 1)] >> 4)
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 1) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 10) |
      (revLookup[b64.charCodeAt(i + 1)] << 4) |
      (revLookup[b64.charCodeAt(i + 2)] >> 2)
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  return arr
}

function tripletToBase64 (num) {
  return lookup[num >> 18 & 0x3F] +
    lookup[num >> 12 & 0x3F] +
    lookup[num >> 6 & 0x3F] +
    lookup[num & 0x3F]
}

function encodeChunk (uint8, start, end) {
  var tmp
  var output = []
  for (var i = start; i < end; i += 3) {
    tmp =
      ((uint8[i] << 16) & 0xFF0000) +
      ((uint8[i + 1] << 8) & 0xFF00) +
      (uint8[i + 2] & 0xFF)
    output.push(tripletToBase64(tmp))
  }
  return output.join('')
}

function fromByteArray (uint8) {
  var tmp
  var len = uint8.length
  var extraBytes = len % 3 // if we have 1 byte left, pad 2 bytes
  var parts = []
  var maxChunkLength = 16383 // must be multiple of 3

  // go through the array every three bytes, we'll deal with trailing stuff later
  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
    parts.push(encodeChunk(uint8, i, (i + maxChunkLength) > len2 ? len2 : (i + maxChunkLength)))
  }

  // pad the end with zeros, but make sure to not forget the extra bytes
  if (extraBytes === 1) {
    tmp = uint8[len - 1]
    parts.push(
      lookup[tmp >> 2] +
      lookup[(tmp << 4) & 0x3F] +
      '=='
    )
  } else if (extraBytes === 2) {
    tmp = (uint8[len - 2] << 8) + uint8[len - 1]
    parts.push(
      lookup[tmp >> 10] +
      lookup[(tmp >> 4) & 0x3F] +
      lookup[(tmp << 2) & 0x3F] +
      '='
    )
  }

  return parts.join('')
}


/***/ }),

/***/ "./glo/modules/webapp/node_modules/ieee754/index.js":
/*!**********************************************************!*\
  !*** ./glo/modules/webapp/node_modules/ieee754/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
exports.read = function (buffer, offset, isLE, mLen, nBytes) {
  var e, m
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var nBits = -7
  var i = isLE ? (nBytes - 1) : 0
  var d = isLE ? -1 : 1
  var s = buffer[offset + i]

  i += d

  e = s & ((1 << (-nBits)) - 1)
  s >>= (-nBits)
  nBits += eLen
  for (; nBits > 0; e = (e * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  m = e & ((1 << (-nBits)) - 1)
  e >>= (-nBits)
  nBits += mLen
  for (; nBits > 0; m = (m * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  if (e === 0) {
    e = 1 - eBias
  } else if (e === eMax) {
    return m ? NaN : ((s ? -1 : 1) * Infinity)
  } else {
    m = m + Math.pow(2, mLen)
    e = e - eBias
  }
  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
}

exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0)
  var i = isLE ? 0 : (nBytes - 1)
  var d = isLE ? 1 : -1
  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0

  value = Math.abs(value)

  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0
    e = eMax
  } else {
    e = Math.floor(Math.log(value) / Math.LN2)
    if (value * (c = Math.pow(2, -e)) < 1) {
      e--
      c *= 2
    }
    if (e + eBias >= 1) {
      value += rt / c
    } else {
      value += rt * Math.pow(2, 1 - eBias)
    }
    if (value * c >= 2) {
      e++
      c /= 2
    }

    if (e + eBias >= eMax) {
      m = 0
      e = eMax
    } else if (e + eBias >= 1) {
      m = ((value * c) - 1) * Math.pow(2, mLen)
      e = e + eBias
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen)
      e = 0
    }
  }

  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

  e = (e << mLen) | m
  eLen += mLen
  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

  buffer[offset + i - d] |= s * 128
}


/***/ }),

/***/ "./glo/modules/webapp/node_modules/isarray/index.js":
/*!**********************************************************!*\
  !*** ./glo/modules/webapp/node_modules/isarray/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = Array.isArray || function (arr) {
  return toString.call(arr) == '[object Array]';
};


/***/ }),

/***/ "./glo/modules/webapp/node_modules/node-libs-browser/node_modules/buffer/index.js":
/*!****************************************************************************************!*\
  !*** ./glo/modules/webapp/node_modules/node-libs-browser/node_modules/buffer/index.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <http://feross.org>
 * @license  MIT
 */
/* eslint-disable no-proto */



var base64 = __webpack_require__(/*! base64-js */ "./glo/modules/webapp/node_modules/base64-js/index.js")
var ieee754 = __webpack_require__(/*! ieee754 */ "./glo/modules/webapp/node_modules/ieee754/index.js")
var isArray = __webpack_require__(/*! isarray */ "./glo/modules/webapp/node_modules/isarray/index.js")

exports.Buffer = Buffer
exports.SlowBuffer = SlowBuffer
exports.INSPECT_MAX_BYTES = 50

/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Use Object implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * Due to various browser bugs, sometimes the Object implementation will be used even
 * when the browser supports typed arrays.
 *
 * Note:
 *
 *   - Firefox 4-29 lacks support for adding new properties to `Uint8Array` instances,
 *     See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
 *
 *   - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
 *
 *   - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
 *     incorrect length in some situations.

 * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they
 * get the Object implementation, which is slower but behaves correctly.
 */
Buffer.TYPED_ARRAY_SUPPORT = global.TYPED_ARRAY_SUPPORT !== undefined
  ? global.TYPED_ARRAY_SUPPORT
  : typedArraySupport()

/*
 * Export kMaxLength after typed array support is determined.
 */
exports.kMaxLength = kMaxLength()

function typedArraySupport () {
  try {
    var arr = new Uint8Array(1)
    arr.__proto__ = {__proto__: Uint8Array.prototype, foo: function () { return 42 }}
    return arr.foo() === 42 && // typed array instances can be augmented
        typeof arr.subarray === 'function' && // chrome 9-10 lack `subarray`
        arr.subarray(1, 1).byteLength === 0 // ie10 has broken `subarray`
  } catch (e) {
    return false
  }
}

function kMaxLength () {
  return Buffer.TYPED_ARRAY_SUPPORT
    ? 0x7fffffff
    : 0x3fffffff
}

function createBuffer (that, length) {
  if (kMaxLength() < length) {
    throw new RangeError('Invalid typed array length')
  }
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = new Uint8Array(length)
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    if (that === null) {
      that = new Buffer(length)
    }
    that.length = length
  }

  return that
}

/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */

function Buffer (arg, encodingOrOffset, length) {
  if (!Buffer.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer)) {
    return new Buffer(arg, encodingOrOffset, length)
  }

  // Common case.
  if (typeof arg === 'number') {
    if (typeof encodingOrOffset === 'string') {
      throw new Error(
        'If encoding is specified then the first argument must be a string'
      )
    }
    return allocUnsafe(this, arg)
  }
  return from(this, arg, encodingOrOffset, length)
}

Buffer.poolSize = 8192 // not used by this implementation

// TODO: Legacy, not needed anymore. Remove in next major version.
Buffer._augment = function (arr) {
  arr.__proto__ = Buffer.prototype
  return arr
}

function from (that, value, encodingOrOffset, length) {
  if (typeof value === 'number') {
    throw new TypeError('"value" argument must not be a number')
  }

  if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {
    return fromArrayBuffer(that, value, encodingOrOffset, length)
  }

  if (typeof value === 'string') {
    return fromString(that, value, encodingOrOffset)
  }

  return fromObject(that, value)
}

/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/
Buffer.from = function (value, encodingOrOffset, length) {
  return from(null, value, encodingOrOffset, length)
}

if (Buffer.TYPED_ARRAY_SUPPORT) {
  Buffer.prototype.__proto__ = Uint8Array.prototype
  Buffer.__proto__ = Uint8Array
  if (typeof Symbol !== 'undefined' && Symbol.species &&
      Buffer[Symbol.species] === Buffer) {
    // Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97
    Object.defineProperty(Buffer, Symbol.species, {
      value: null,
      configurable: true
    })
  }
}

function assertSize (size) {
  if (typeof size !== 'number') {
    throw new TypeError('"size" argument must be a number')
  } else if (size < 0) {
    throw new RangeError('"size" argument must not be negative')
  }
}

function alloc (that, size, fill, encoding) {
  assertSize(size)
  if (size <= 0) {
    return createBuffer(that, size)
  }
  if (fill !== undefined) {
    // Only pay attention to encoding if it's a string. This
    // prevents accidentally sending in a number that would
    // be interpretted as a start offset.
    return typeof encoding === 'string'
      ? createBuffer(that, size).fill(fill, encoding)
      : createBuffer(that, size).fill(fill)
  }
  return createBuffer(that, size)
}

/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/
Buffer.alloc = function (size, fill, encoding) {
  return alloc(null, size, fill, encoding)
}

function allocUnsafe (that, size) {
  assertSize(size)
  that = createBuffer(that, size < 0 ? 0 : checked(size) | 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) {
    for (var i = 0; i < size; ++i) {
      that[i] = 0
    }
  }
  return that
}

/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */
Buffer.allocUnsafe = function (size) {
  return allocUnsafe(null, size)
}
/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */
Buffer.allocUnsafeSlow = function (size) {
  return allocUnsafe(null, size)
}

function fromString (that, string, encoding) {
  if (typeof encoding !== 'string' || encoding === '') {
    encoding = 'utf8'
  }

  if (!Buffer.isEncoding(encoding)) {
    throw new TypeError('"encoding" must be a valid string encoding')
  }

  var length = byteLength(string, encoding) | 0
  that = createBuffer(that, length)

  var actual = that.write(string, encoding)

  if (actual !== length) {
    // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    that = that.slice(0, actual)
  }

  return that
}

function fromArrayLike (that, array) {
  var length = array.length < 0 ? 0 : checked(array.length) | 0
  that = createBuffer(that, length)
  for (var i = 0; i < length; i += 1) {
    that[i] = array[i] & 255
  }
  return that
}

function fromArrayBuffer (that, array, byteOffset, length) {
  array.byteLength // this throws if `array` is not a valid ArrayBuffer

  if (byteOffset < 0 || array.byteLength < byteOffset) {
    throw new RangeError('\'offset\' is out of bounds')
  }

  if (array.byteLength < byteOffset + (length || 0)) {
    throw new RangeError('\'length\' is out of bounds')
  }

  if (byteOffset === undefined && length === undefined) {
    array = new Uint8Array(array)
  } else if (length === undefined) {
    array = new Uint8Array(array, byteOffset)
  } else {
    array = new Uint8Array(array, byteOffset, length)
  }

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = array
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    that = fromArrayLike(that, array)
  }
  return that
}

function fromObject (that, obj) {
  if (Buffer.isBuffer(obj)) {
    var len = checked(obj.length) | 0
    that = createBuffer(that, len)

    if (that.length === 0) {
      return that
    }

    obj.copy(that, 0, 0, len)
    return that
  }

  if (obj) {
    if ((typeof ArrayBuffer !== 'undefined' &&
        obj.buffer instanceof ArrayBuffer) || 'length' in obj) {
      if (typeof obj.length !== 'number' || isnan(obj.length)) {
        return createBuffer(that, 0)
      }
      return fromArrayLike(that, obj)
    }

    if (obj.type === 'Buffer' && isArray(obj.data)) {
      return fromArrayLike(that, obj.data)
    }
  }

  throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.')
}

function checked (length) {
  // Note: cannot use `length < kMaxLength()` here because that fails when
  // length is NaN (which is otherwise coerced to zero.)
  if (length >= kMaxLength()) {
    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
                         'size: 0x' + kMaxLength().toString(16) + ' bytes')
  }
  return length | 0
}

function SlowBuffer (length) {
  if (+length != length) { // eslint-disable-line eqeqeq
    length = 0
  }
  return Buffer.alloc(+length)
}

Buffer.isBuffer = function isBuffer (b) {
  return !!(b != null && b._isBuffer)
}

Buffer.compare = function compare (a, b) {
  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
    throw new TypeError('Arguments must be Buffers')
  }

  if (a === b) return 0

  var x = a.length
  var y = b.length

  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
    if (a[i] !== b[i]) {
      x = a[i]
      y = b[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

Buffer.isEncoding = function isEncoding (encoding) {
  switch (String(encoding).toLowerCase()) {
    case 'hex':
    case 'utf8':
    case 'utf-8':
    case 'ascii':
    case 'latin1':
    case 'binary':
    case 'base64':
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      return true
    default:
      return false
  }
}

Buffer.concat = function concat (list, length) {
  if (!isArray(list)) {
    throw new TypeError('"list" argument must be an Array of Buffers')
  }

  if (list.length === 0) {
    return Buffer.alloc(0)
  }

  var i
  if (length === undefined) {
    length = 0
    for (i = 0; i < list.length; ++i) {
      length += list[i].length
    }
  }

  var buffer = Buffer.allocUnsafe(length)
  var pos = 0
  for (i = 0; i < list.length; ++i) {
    var buf = list[i]
    if (!Buffer.isBuffer(buf)) {
      throw new TypeError('"list" argument must be an Array of Buffers')
    }
    buf.copy(buffer, pos)
    pos += buf.length
  }
  return buffer
}

function byteLength (string, encoding) {
  if (Buffer.isBuffer(string)) {
    return string.length
  }
  if (typeof ArrayBuffer !== 'undefined' && typeof ArrayBuffer.isView === 'function' &&
      (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {
    return string.byteLength
  }
  if (typeof string !== 'string') {
    string = '' + string
  }

  var len = string.length
  if (len === 0) return 0

  // Use a for loop to avoid recursion
  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'ascii':
      case 'latin1':
      case 'binary':
        return len
      case 'utf8':
      case 'utf-8':
      case undefined:
        return utf8ToBytes(string).length
      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return len * 2
      case 'hex':
        return len >>> 1
      case 'base64':
        return base64ToBytes(string).length
      default:
        if (loweredCase) return utf8ToBytes(string).length // assume utf8
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}
Buffer.byteLength = byteLength

function slowToString (encoding, start, end) {
  var loweredCase = false

  // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
  // property of a typed array.

  // This behaves neither like String nor Uint8Array in that we set start/end
  // to their upper/lower bounds if the value passed is out of range.
  // undefined is handled specially as per ECMA-262 6th Edition,
  // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
  if (start === undefined || start < 0) {
    start = 0
  }
  // Return early if start > this.length. Done here to prevent potential uint32
  // coercion fail below.
  if (start > this.length) {
    return ''
  }

  if (end === undefined || end > this.length) {
    end = this.length
  }

  if (end <= 0) {
    return ''
  }

  // Force coersion to uint32. This will also coerce falsey/NaN values to 0.
  end >>>= 0
  start >>>= 0

  if (end <= start) {
    return ''
  }

  if (!encoding) encoding = 'utf8'

  while (true) {
    switch (encoding) {
      case 'hex':
        return hexSlice(this, start, end)

      case 'utf8':
      case 'utf-8':
        return utf8Slice(this, start, end)

      case 'ascii':
        return asciiSlice(this, start, end)

      case 'latin1':
      case 'binary':
        return latin1Slice(this, start, end)

      case 'base64':
        return base64Slice(this, start, end)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return utf16leSlice(this, start, end)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = (encoding + '').toLowerCase()
        loweredCase = true
    }
  }
}

// The property is used by `Buffer.isBuffer` and `is-buffer` (in Safari 5-7) to detect
// Buffer instances.
Buffer.prototype._isBuffer = true

function swap (b, n, m) {
  var i = b[n]
  b[n] = b[m]
  b[m] = i
}

Buffer.prototype.swap16 = function swap16 () {
  var len = this.length
  if (len % 2 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 16-bits')
  }
  for (var i = 0; i < len; i += 2) {
    swap(this, i, i + 1)
  }
  return this
}

Buffer.prototype.swap32 = function swap32 () {
  var len = this.length
  if (len % 4 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 32-bits')
  }
  for (var i = 0; i < len; i += 4) {
    swap(this, i, i + 3)
    swap(this, i + 1, i + 2)
  }
  return this
}

Buffer.prototype.swap64 = function swap64 () {
  var len = this.length
  if (len % 8 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 64-bits')
  }
  for (var i = 0; i < len; i += 8) {
    swap(this, i, i + 7)
    swap(this, i + 1, i + 6)
    swap(this, i + 2, i + 5)
    swap(this, i + 3, i + 4)
  }
  return this
}

Buffer.prototype.toString = function toString () {
  var length = this.length | 0
  if (length === 0) return ''
  if (arguments.length === 0) return utf8Slice(this, 0, length)
  return slowToString.apply(this, arguments)
}

Buffer.prototype.equals = function equals (b) {
  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
  if (this === b) return true
  return Buffer.compare(this, b) === 0
}

Buffer.prototype.inspect = function inspect () {
  var str = ''
  var max = exports.INSPECT_MAX_BYTES
  if (this.length > 0) {
    str = this.toString('hex', 0, max).match(/.{2}/g).join(' ')
    if (this.length > max) str += ' ... '
  }
  return '<Buffer ' + str + '>'
}

Buffer.prototype.compare = function compare (target, start, end, thisStart, thisEnd) {
  if (!Buffer.isBuffer(target)) {
    throw new TypeError('Argument must be a Buffer')
  }

  if (start === undefined) {
    start = 0
  }
  if (end === undefined) {
    end = target ? target.length : 0
  }
  if (thisStart === undefined) {
    thisStart = 0
  }
  if (thisEnd === undefined) {
    thisEnd = this.length
  }

  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
    throw new RangeError('out of range index')
  }

  if (thisStart >= thisEnd && start >= end) {
    return 0
  }
  if (thisStart >= thisEnd) {
    return -1
  }
  if (start >= end) {
    return 1
  }

  start >>>= 0
  end >>>= 0
  thisStart >>>= 0
  thisEnd >>>= 0

  if (this === target) return 0

  var x = thisEnd - thisStart
  var y = end - start
  var len = Math.min(x, y)

  var thisCopy = this.slice(thisStart, thisEnd)
  var targetCopy = target.slice(start, end)

  for (var i = 0; i < len; ++i) {
    if (thisCopy[i] !== targetCopy[i]) {
      x = thisCopy[i]
      y = targetCopy[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function bidirectionalIndexOf (buffer, val, byteOffset, encoding, dir) {
  // Empty buffer means no match
  if (buffer.length === 0) return -1

  // Normalize byteOffset
  if (typeof byteOffset === 'string') {
    encoding = byteOffset
    byteOffset = 0
  } else if (byteOffset > 0x7fffffff) {
    byteOffset = 0x7fffffff
  } else if (byteOffset < -0x80000000) {
    byteOffset = -0x80000000
  }
  byteOffset = +byteOffset  // Coerce to Number.
  if (isNaN(byteOffset)) {
    // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
    byteOffset = dir ? 0 : (buffer.length - 1)
  }

  // Normalize byteOffset: negative offsets start from the end of the buffer
  if (byteOffset < 0) byteOffset = buffer.length + byteOffset
  if (byteOffset >= buffer.length) {
    if (dir) return -1
    else byteOffset = buffer.length - 1
  } else if (byteOffset < 0) {
    if (dir) byteOffset = 0
    else return -1
  }

  // Normalize val
  if (typeof val === 'string') {
    val = Buffer.from(val, encoding)
  }

  // Finally, search either indexOf (if dir is true) or lastIndexOf
  if (Buffer.isBuffer(val)) {
    // Special case: looking for empty string/buffer always fails
    if (val.length === 0) {
      return -1
    }
    return arrayIndexOf(buffer, val, byteOffset, encoding, dir)
  } else if (typeof val === 'number') {
    val = val & 0xFF // Search for a byte value [0-255]
    if (Buffer.TYPED_ARRAY_SUPPORT &&
        typeof Uint8Array.prototype.indexOf === 'function') {
      if (dir) {
        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset)
      } else {
        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset)
      }
    }
    return arrayIndexOf(buffer, [ val ], byteOffset, encoding, dir)
  }

  throw new TypeError('val must be string, number or Buffer')
}

function arrayIndexOf (arr, val, byteOffset, encoding, dir) {
  var indexSize = 1
  var arrLength = arr.length
  var valLength = val.length

  if (encoding !== undefined) {
    encoding = String(encoding).toLowerCase()
    if (encoding === 'ucs2' || encoding === 'ucs-2' ||
        encoding === 'utf16le' || encoding === 'utf-16le') {
      if (arr.length < 2 || val.length < 2) {
        return -1
      }
      indexSize = 2
      arrLength /= 2
      valLength /= 2
      byteOffset /= 2
    }
  }

  function read (buf, i) {
    if (indexSize === 1) {
      return buf[i]
    } else {
      return buf.readUInt16BE(i * indexSize)
    }
  }

  var i
  if (dir) {
    var foundIndex = -1
    for (i = byteOffset; i < arrLength; i++) {
      if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
        if (foundIndex === -1) foundIndex = i
        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize
      } else {
        if (foundIndex !== -1) i -= i - foundIndex
        foundIndex = -1
      }
    }
  } else {
    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength
    for (i = byteOffset; i >= 0; i--) {
      var found = true
      for (var j = 0; j < valLength; j++) {
        if (read(arr, i + j) !== read(val, j)) {
          found = false
          break
        }
      }
      if (found) return i
    }
  }

  return -1
}

Buffer.prototype.includes = function includes (val, byteOffset, encoding) {
  return this.indexOf(val, byteOffset, encoding) !== -1
}

Buffer.prototype.indexOf = function indexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, true)
}

Buffer.prototype.lastIndexOf = function lastIndexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, false)
}

function hexWrite (buf, string, offset, length) {
  offset = Number(offset) || 0
  var remaining = buf.length - offset
  if (!length) {
    length = remaining
  } else {
    length = Number(length)
    if (length > remaining) {
      length = remaining
    }
  }

  // must be an even number of digits
  var strLen = string.length
  if (strLen % 2 !== 0) throw new TypeError('Invalid hex string')

  if (length > strLen / 2) {
    length = strLen / 2
  }
  for (var i = 0; i < length; ++i) {
    var parsed = parseInt(string.substr(i * 2, 2), 16)
    if (isNaN(parsed)) return i
    buf[offset + i] = parsed
  }
  return i
}

function utf8Write (buf, string, offset, length) {
  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
}

function asciiWrite (buf, string, offset, length) {
  return blitBuffer(asciiToBytes(string), buf, offset, length)
}

function latin1Write (buf, string, offset, length) {
  return asciiWrite(buf, string, offset, length)
}

function base64Write (buf, string, offset, length) {
  return blitBuffer(base64ToBytes(string), buf, offset, length)
}

function ucs2Write (buf, string, offset, length) {
  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
}

Buffer.prototype.write = function write (string, offset, length, encoding) {
  // Buffer#write(string)
  if (offset === undefined) {
    encoding = 'utf8'
    length = this.length
    offset = 0
  // Buffer#write(string, encoding)
  } else if (length === undefined && typeof offset === 'string') {
    encoding = offset
    length = this.length
    offset = 0
  // Buffer#write(string, offset[, length][, encoding])
  } else if (isFinite(offset)) {
    offset = offset | 0
    if (isFinite(length)) {
      length = length | 0
      if (encoding === undefined) encoding = 'utf8'
    } else {
      encoding = length
      length = undefined
    }
  // legacy write(string, encoding, offset, length) - remove in v0.13
  } else {
    throw new Error(
      'Buffer.write(string, encoding, offset[, length]) is no longer supported'
    )
  }

  var remaining = this.length - offset
  if (length === undefined || length > remaining) length = remaining

  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
    throw new RangeError('Attempt to write outside buffer bounds')
  }

  if (!encoding) encoding = 'utf8'

  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'hex':
        return hexWrite(this, string, offset, length)

      case 'utf8':
      case 'utf-8':
        return utf8Write(this, string, offset, length)

      case 'ascii':
        return asciiWrite(this, string, offset, length)

      case 'latin1':
      case 'binary':
        return latin1Write(this, string, offset, length)

      case 'base64':
        // Warning: maxLength not taken into account in base64Write
        return base64Write(this, string, offset, length)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return ucs2Write(this, string, offset, length)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}

Buffer.prototype.toJSON = function toJSON () {
  return {
    type: 'Buffer',
    data: Array.prototype.slice.call(this._arr || this, 0)
  }
}

function base64Slice (buf, start, end) {
  if (start === 0 && end === buf.length) {
    return base64.fromByteArray(buf)
  } else {
    return base64.fromByteArray(buf.slice(start, end))
  }
}

function utf8Slice (buf, start, end) {
  end = Math.min(buf.length, end)
  var res = []

  var i = start
  while (i < end) {
    var firstByte = buf[i]
    var codePoint = null
    var bytesPerSequence = (firstByte > 0xEF) ? 4
      : (firstByte > 0xDF) ? 3
      : (firstByte > 0xBF) ? 2
      : 1

    if (i + bytesPerSequence <= end) {
      var secondByte, thirdByte, fourthByte, tempCodePoint

      switch (bytesPerSequence) {
        case 1:
          if (firstByte < 0x80) {
            codePoint = firstByte
          }
          break
        case 2:
          secondByte = buf[i + 1]
          if ((secondByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F)
            if (tempCodePoint > 0x7F) {
              codePoint = tempCodePoint
            }
          }
          break
        case 3:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F)
            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
              codePoint = tempCodePoint
            }
          }
          break
        case 4:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          fourthByte = buf[i + 3]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F)
            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
              codePoint = tempCodePoint
            }
          }
      }
    }

    if (codePoint === null) {
      // we did not generate a valid codePoint so insert a
      // replacement char (U+FFFD) and advance only 1 byte
      codePoint = 0xFFFD
      bytesPerSequence = 1
    } else if (codePoint > 0xFFFF) {
      // encode to utf16 (surrogate pair dance)
      codePoint -= 0x10000
      res.push(codePoint >>> 10 & 0x3FF | 0xD800)
      codePoint = 0xDC00 | codePoint & 0x3FF
    }

    res.push(codePoint)
    i += bytesPerSequence
  }

  return decodeCodePointsArray(res)
}

// Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety
var MAX_ARGUMENTS_LENGTH = 0x1000

function decodeCodePointsArray (codePoints) {
  var len = codePoints.length
  if (len <= MAX_ARGUMENTS_LENGTH) {
    return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
  }

  // Decode in chunks to avoid "call stack size exceeded".
  var res = ''
  var i = 0
  while (i < len) {
    res += String.fromCharCode.apply(
      String,
      codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
    )
  }
  return res
}

function asciiSlice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i] & 0x7F)
  }
  return ret
}

function latin1Slice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i])
  }
  return ret
}

function hexSlice (buf, start, end) {
  var len = buf.length

  if (!start || start < 0) start = 0
  if (!end || end < 0 || end > len) end = len

  var out = ''
  for (var i = start; i < end; ++i) {
    out += toHex(buf[i])
  }
  return out
}

function utf16leSlice (buf, start, end) {
  var bytes = buf.slice(start, end)
  var res = ''
  for (var i = 0; i < bytes.length; i += 2) {
    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256)
  }
  return res
}

Buffer.prototype.slice = function slice (start, end) {
  var len = this.length
  start = ~~start
  end = end === undefined ? len : ~~end

  if (start < 0) {
    start += len
    if (start < 0) start = 0
  } else if (start > len) {
    start = len
  }

  if (end < 0) {
    end += len
    if (end < 0) end = 0
  } else if (end > len) {
    end = len
  }

  if (end < start) end = start

  var newBuf
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    newBuf = this.subarray(start, end)
    newBuf.__proto__ = Buffer.prototype
  } else {
    var sliceLen = end - start
    newBuf = new Buffer(sliceLen, undefined)
    for (var i = 0; i < sliceLen; ++i) {
      newBuf[i] = this[i + start]
    }
  }

  return newBuf
}

/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */
function checkOffset (offset, ext, length) {
  if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
}

Buffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }

  return val
}

Buffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    checkOffset(offset, byteLength, this.length)
  }

  var val = this[offset + --byteLength]
  var mul = 1
  while (byteLength > 0 && (mul *= 0x100)) {
    val += this[offset + --byteLength] * mul
  }

  return val
}

Buffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  return this[offset]
}

Buffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return this[offset] | (this[offset + 1] << 8)
}

Buffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return (this[offset] << 8) | this[offset + 1]
}

Buffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return ((this[offset]) |
      (this[offset + 1] << 8) |
      (this[offset + 2] << 16)) +
      (this[offset + 3] * 0x1000000)
}

Buffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] * 0x1000000) +
    ((this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    this[offset + 3])
}

Buffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var i = byteLength
  var mul = 1
  var val = this[offset + --i]
  while (i > 0 && (mul *= 0x100)) {
    val += this[offset + --i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readInt8 = function readInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  if (!(this[offset] & 0x80)) return (this[offset])
  return ((0xff - this[offset] + 1) * -1)
}

Buffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset] | (this[offset + 1] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset + 1] | (this[offset] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset]) |
    (this[offset + 1] << 8) |
    (this[offset + 2] << 16) |
    (this[offset + 3] << 24)
}

Buffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] << 24) |
    (this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    (this[offset + 3])
}

Buffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, true, 23, 4)
}

Buffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, false, 23, 4)
}

Buffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, true, 52, 8)
}

Buffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, false, 52, 8)
}

function checkInt (buf, value, offset, ext, max, min) {
  if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance')
  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds')
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
}

Buffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var mul = 1
  var i = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var i = byteLength - 1
  var mul = 1
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  this[offset] = (value & 0xff)
  return offset + 1
}

function objectWriteUInt16 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; ++i) {
    buf[offset + i] = (value & (0xff << (8 * (littleEndian ? i : 1 - i)))) >>>
      (littleEndian ? i : 1 - i) * 8
  }
}

Buffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

function objectWriteUInt32 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffffffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; ++i) {
    buf[offset + i] = (value >>> (littleEndian ? i : 3 - i) * 8) & 0xff
  }
}

Buffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset + 3] = (value >>> 24)
    this[offset + 2] = (value >>> 16)
    this[offset + 1] = (value >>> 8)
    this[offset] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

Buffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = 0
  var mul = 1
  var sub = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = byteLength - 1
  var mul = 1
  var sub = 0
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  if (value < 0) value = 0xff + value + 1
  this[offset] = (value & 0xff)
  return offset + 1
}

Buffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

Buffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
    this[offset + 2] = (value >>> 16)
    this[offset + 3] = (value >>> 24)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (value < 0) value = 0xffffffff + value + 1
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

function checkIEEE754 (buf, value, offset, ext, max, min) {
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
  if (offset < 0) throw new RangeError('Index out of range')
}

function writeFloat (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38)
  }
  ieee754.write(buf, value, offset, littleEndian, 23, 4)
  return offset + 4
}

Buffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
  return writeFloat(this, value, offset, true, noAssert)
}

Buffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
  return writeFloat(this, value, offset, false, noAssert)
}

function writeDouble (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308)
  }
  ieee754.write(buf, value, offset, littleEndian, 52, 8)
  return offset + 8
}

Buffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
  return writeDouble(this, value, offset, true, noAssert)
}

Buffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
  return writeDouble(this, value, offset, false, noAssert)
}

// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function copy (target, targetStart, start, end) {
  if (!start) start = 0
  if (!end && end !== 0) end = this.length
  if (targetStart >= target.length) targetStart = target.length
  if (!targetStart) targetStart = 0
  if (end > 0 && end < start) end = start

  // Copy 0 bytes; we're done
  if (end === start) return 0
  if (target.length === 0 || this.length === 0) return 0

  // Fatal error conditions
  if (targetStart < 0) {
    throw new RangeError('targetStart out of bounds')
  }
  if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds')
  if (end < 0) throw new RangeError('sourceEnd out of bounds')

  // Are we oob?
  if (end > this.length) end = this.length
  if (target.length - targetStart < end - start) {
    end = target.length - targetStart + start
  }

  var len = end - start
  var i

  if (this === target && start < targetStart && targetStart < end) {
    // descending copy from end
    for (i = len - 1; i >= 0; --i) {
      target[i + targetStart] = this[i + start]
    }
  } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
    // ascending copy from start
    for (i = 0; i < len; ++i) {
      target[i + targetStart] = this[i + start]
    }
  } else {
    Uint8Array.prototype.set.call(
      target,
      this.subarray(start, start + len),
      targetStart
    )
  }

  return len
}

// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
Buffer.prototype.fill = function fill (val, start, end, encoding) {
  // Handle string cases:
  if (typeof val === 'string') {
    if (typeof start === 'string') {
      encoding = start
      start = 0
      end = this.length
    } else if (typeof end === 'string') {
      encoding = end
      end = this.length
    }
    if (val.length === 1) {
      var code = val.charCodeAt(0)
      if (code < 256) {
        val = code
      }
    }
    if (encoding !== undefined && typeof encoding !== 'string') {
      throw new TypeError('encoding must be a string')
    }
    if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
      throw new TypeError('Unknown encoding: ' + encoding)
    }
  } else if (typeof val === 'number') {
    val = val & 255
  }

  // Invalid ranges are not set to a default, so can range check early.
  if (start < 0 || this.length < start || this.length < end) {
    throw new RangeError('Out of range index')
  }

  if (end <= start) {
    return this
  }

  start = start >>> 0
  end = end === undefined ? this.length : end >>> 0

  if (!val) val = 0

  var i
  if (typeof val === 'number') {
    for (i = start; i < end; ++i) {
      this[i] = val
    }
  } else {
    var bytes = Buffer.isBuffer(val)
      ? val
      : utf8ToBytes(new Buffer(val, encoding).toString())
    var len = bytes.length
    for (i = 0; i < end - start; ++i) {
      this[i + start] = bytes[i % len]
    }
  }

  return this
}

// HELPER FUNCTIONS
// ================

var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g

function base64clean (str) {
  // Node strips out invalid characters like \n and \t from the string, base64-js does not
  str = stringtrim(str).replace(INVALID_BASE64_RE, '')
  // Node converts strings with length < 2 to ''
  if (str.length < 2) return ''
  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
  while (str.length % 4 !== 0) {
    str = str + '='
  }
  return str
}

function stringtrim (str) {
  if (str.trim) return str.trim()
  return str.replace(/^\s+|\s+$/g, '')
}

function toHex (n) {
  if (n < 16) return '0' + n.toString(16)
  return n.toString(16)
}

function utf8ToBytes (string, units) {
  units = units || Infinity
  var codePoint
  var length = string.length
  var leadSurrogate = null
  var bytes = []

  for (var i = 0; i < length; ++i) {
    codePoint = string.charCodeAt(i)

    // is surrogate component
    if (codePoint > 0xD7FF && codePoint < 0xE000) {
      // last char was a lead
      if (!leadSurrogate) {
        // no lead yet
        if (codePoint > 0xDBFF) {
          // unexpected trail
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        } else if (i + 1 === length) {
          // unpaired lead
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        }

        // valid lead
        leadSurrogate = codePoint

        continue
      }

      // 2 leads in a row
      if (codePoint < 0xDC00) {
        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
        leadSurrogate = codePoint
        continue
      }

      // valid surrogate pair
      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000
    } else if (leadSurrogate) {
      // valid bmp char, but last char was a lead
      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
    }

    leadSurrogate = null

    // encode utf8
    if (codePoint < 0x80) {
      if ((units -= 1) < 0) break
      bytes.push(codePoint)
    } else if (codePoint < 0x800) {
      if ((units -= 2) < 0) break
      bytes.push(
        codePoint >> 0x6 | 0xC0,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x10000) {
      if ((units -= 3) < 0) break
      bytes.push(
        codePoint >> 0xC | 0xE0,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x110000) {
      if ((units -= 4) < 0) break
      bytes.push(
        codePoint >> 0x12 | 0xF0,
        codePoint >> 0xC & 0x3F | 0x80,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else {
      throw new Error('Invalid code point')
    }
  }

  return bytes
}

function asciiToBytes (str) {
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    // Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF)
  }
  return byteArray
}

function utf16leToBytes (str, units) {
  var c, hi, lo
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    if ((units -= 2) < 0) break

    c = str.charCodeAt(i)
    hi = c >> 8
    lo = c % 256
    byteArray.push(lo)
    byteArray.push(hi)
  }

  return byteArray
}

function base64ToBytes (str) {
  return base64.toByteArray(base64clean(str))
}

function blitBuffer (src, dst, offset, length) {
  for (var i = 0; i < length; ++i) {
    if ((i + offset >= dst.length) || (i >= src.length)) break
    dst[i + offset] = src[i]
  }
  return i
}

function isnan (val) {
  return val !== val // eslint-disable-line no-self-compare
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../webpack/buildin/global.js */ "./glo/modules/webapp/node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./glo/modules/webapp/node_modules/process/browser.js":
/*!************************************************************!*\
  !*** ./glo/modules/webapp/node_modules/process/browser.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./glo/modules/webapp/node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ 0:
/*!********************************!*\
  !*** ./util.inspect (ignored) ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

/******/ });