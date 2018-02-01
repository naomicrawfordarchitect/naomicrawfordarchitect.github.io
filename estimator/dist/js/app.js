(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function (global){
'use strict';

var _react = (typeof window !== "undefined" ? window['React'] : typeof global !== "undefined" ? global['React'] : null);

var _react2 = _interopRequireDefault(_react);

var _reactDom = (typeof window !== "undefined" ? window['ReactDOM'] : typeof global !== "undefined" ? global['ReactDOM'] : null);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _Extensions = require('./modules/Extensions');

var _Extensions2 = _interopRequireDefault(_Extensions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

document.addEventListener("DOMContentLoaded", function () {
    _reactDom2.default.render(_react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_Extensions2.default, null)
    ), document.getElementById('app'));
});

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"./modules/Extensions":2}],2:[function(require,module,exports){
(function (global){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = (typeof window !== "undefined" ? window['React'] : typeof global !== "undefined" ? global['React'] : null);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Extensions = function (_React$Component) {
    _inherits(Extensions, _React$Component);

    function Extensions(props) {
        _classCallCheck(this, Extensions);

        var _this = _possibleConstructorReturn(this, (Extensions.__proto__ || Object.getPrototypeOf(Extensions)).call(this, props));

        _this.state = {
            input: "0"
        };

        _this.handleChange = function (e) {
            var target = e.currentTarget;

            _this.setState({
                input: target.value.trim()
            });
        };

        _this.addInput = function (e) {
            console.log('add');
            e.preventDefault();
        };

        return _this;
    }

    _createClass(Extensions, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement('input', {
                    type: 'text',
                    value: this.state.input,
                    onChange: this.handleChange }),
                '\xA0 square meters',
                _react2.default.createElement(
                    'div',
                    null,
                    _react2.default.createElement(
                        'a',
                        { href: '#', onClick: this.addInput },
                        'Add another area'
                    )
                )
            );
        }
    }]);

    return Extensions;
}(_react2.default.Component);

exports.default = Extensions;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvanMvYXBwLmpzIiwic3JjL2pzL21vZHVsZXMvRXh0ZW5zaW9ucy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztBQ0FBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBR0EsU0FBUyxnQkFBVCxDQUNJLGtCQURKLEVBRUksWUFBTTtBQUNGLHVCQUFTLE1BQVQsQ0FDSTtBQUFBO0FBQUE7QUFDSTtBQURKLEtBREosRUFJSSxTQUFTLGNBQVQsQ0FBd0IsS0FBeEIsQ0FKSjtBQU1ILENBVEw7Ozs7Ozs7Ozs7Ozs7O0FDTEE7Ozs7Ozs7Ozs7OztJQUdxQixVOzs7QUFNakIsd0JBQVksS0FBWixFQUFtQjtBQUFBOztBQUFBLDRIQUNULEtBRFM7O0FBQUEsY0FKbkIsS0FJbUIsR0FKWDtBQUNKLG1CQUFPO0FBREgsU0FJVzs7QUFBQSxjQUluQixZQUptQixHQUlKLGFBQUs7QUFDaEIsZ0JBQU0sU0FBUyxFQUFFLGFBQWpCOztBQUVBLGtCQUFLLFFBQUwsQ0FBYztBQUNWLHVCQUFPLE9BQU8sS0FBUCxDQUFhLElBQWI7QUFERyxhQUFkO0FBR0gsU0FWa0I7O0FBQUEsY0FZbkIsUUFabUIsR0FZUixhQUFLO0FBQ1osb0JBQVEsR0FBUixDQUFZLEtBQVo7QUFDQSxjQUFFLGNBQUY7QUFDSCxTQWZrQjs7QUFBQTtBQUVsQjs7OztpQ0FlUTtBQUNMLG1CQUNJO0FBQUE7QUFBQTtBQUNJO0FBQ0ksMEJBQUssTUFEVDtBQUVJLDJCQUFRLEtBQUssS0FBTCxDQUFXLEtBRnZCO0FBR0ksOEJBQVcsS0FBSyxZQUhwQixHQURKO0FBQUE7QUFPSTtBQUFBO0FBQUE7QUFDSTtBQUFBO0FBQUEsMEJBQUcsTUFBSyxHQUFSLEVBQVksU0FBVSxLQUFLLFFBQTNCO0FBQUE7QUFBQTtBQURKO0FBUEosYUFESjtBQWVIOzs7O0VBdkNtQyxnQkFBTSxTOztrQkFBekIsVSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgRXh0ZW5zaW9ucyBmcm9tIFwiLi9tb2R1bGVzL0V4dGVuc2lvbnNcIjtcblxuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFxuICAgIFwiRE9NQ29udGVudExvYWRlZFwiLFxuICAgICgpID0+IHtcbiAgICAgICAgUmVhY3RET00ucmVuZGVyKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8RXh0ZW5zaW9ucyAvPlxuICAgICAgICAgICAgPC9kaXY+LFxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcCcpXG4gICAgICAgICk7XG4gICAgfVxuKTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXh0ZW5zaW9ucyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgICBzdGF0ZSA9IHtcbiAgICAgICAgaW5wdXQ6IFwiMFwiXG4gICAgfTtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICB9XG5cbiAgICBoYW5kbGVDaGFuZ2UgPSBlID0+IHtcbiAgICAgICAgY29uc3QgdGFyZ2V0ID0gZS5jdXJyZW50VGFyZ2V0O1xuXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgaW5wdXQ6IHRhcmdldC52YWx1ZS50cmltKClcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgYWRkSW5wdXQgPSBlID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coJ2FkZCcpO1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17IHRoaXMuc3RhdGUuaW5wdXQgfVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17IHRoaXMuaGFuZGxlQ2hhbmdlIH0gLz5cbiAgICAgICAgICAgICAgICAgICAgJm5ic3A7IHNxdWFyZSBtZXRlcnNcblxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgb25DbGljaz17IHRoaXMuYWRkSW5wdXQgfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIEFkZCBhbm90aGVyIGFyZWFcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuIl19
