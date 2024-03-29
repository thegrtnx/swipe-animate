"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
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
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var framer_motion_1 = require("framer-motion");
var Swipe = function (_a) {
    var words = _a.words, intervalDuration = _a.intervalDuration, textSize = _a.textSize, textColors = _a.textColors;
    var _b = (0, react_1.useState)(0), activeIndex = _b[0], setActiveIndex = _b[1];
    (0, react_1.useEffect)(function () {
        var interval = setInterval(function () {
            setActiveIndex(function (prevIndex) { return (prevIndex + 1) % words.length; });
        }, intervalDuration);
        return function () { return clearInterval(interval); };
    }, [intervalDuration, words.length]);
    var textColor = textColors ? textColors[activeIndex % textColors.length] : undefined;
    return (react_1.default.createElement("div", { className: "inline-flex overflow-hidden transition-all duration-500" },
        react_1.default.createElement("span", { className: "w-[100px]s w-auto text-center ".concat(textSize, " text-").concat(textColor, " transition-all duration-500") },
            react_1.default.createElement(framer_motion_1.AnimatePresence, { mode: "wait" },
                react_1.default.createElement(framer_motion_1.motion.div, { key: activeIndex, initial: { y: "4rem" }, animate: { y: "0rem" }, exit: { y: "4rem" }, transition: { duration: 1 } },
                    react_1.default.createElement("p", null, words[activeIndex]))))));
};
exports.default = Swipe;
