"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = require("react");

function useWatch(dep, callback) {
  var prev = (0, _react.useRef)();
  var inited = (0, _react.useRef)(false);
  (0, _react.useEffect)(function () {
    if (!inited.current) {
      inited.current = true;
    } else {
      callback(dep, prev.current);
    }

    prev.current = dep;
  }, [dep]);
}

var _default = useWatch;
exports.default = _default;