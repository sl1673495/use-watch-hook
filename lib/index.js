"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = require("react");

function useWatch(dep, callback) {
  var config = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {
    immediate: false
  };
  var immediate = config.immediate;
  var prev = (0, _react.useRef)();
  var inited = (0, _react.useRef)(false);
  var stop = (0, _react.useRef)(false);
  (0, _react.useEffect)(function () {
    var execute = function execute() {
      return callback(prev.current);
    };

    if (!stop.current) {
      if (!inited.current) {
        inited.current = true;

        if (immediate) {
          execute();
        }
      } else {
        execute();
      }

      prev.current = dep;
    }
  }, [dep]);
  return function () {
    stop.current = true;
  };
}

var _default = useWatch;
exports["default"] = _default;