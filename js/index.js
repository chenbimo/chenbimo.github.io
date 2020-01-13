"use strict";

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var vm = new Vue({
  el: '#app',
  data: {},
  mounted: function mounted() {
    this.$nextTick(
    /*#__PURE__*/
    _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee() {
      var container, scene, layer, sprite1;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              container = document.getElementById('stage');
              scene = new spritejs.Scene({
                container: container,
                width: document.body.clientWidth,
                height: document.body.clientHeight
              }); // const bgLayer = scene.layer();

              layer = scene.layer();
              layer.canvas.style.backgroundColor = '#eeeeee';
              sprite1 = new spritejs.Sprite();
              sprite1.attr({
                size: [100, 100],
                pos: [40, 25],
                bgcolor: '#CFC441',
                borderWidth: 4,
                borderColor: '#b6ab2e'
              });
              layer.append(sprite1);

            case 7:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    })));
  }
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbInZtIiwiVnVlIiwiZWwiLCJkYXRhIiwibW91bnRlZCIsIiRuZXh0VGljayIsImNvbnRhaW5lciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJzY2VuZSIsInNwcml0ZWpzIiwiU2NlbmUiLCJ3aWR0aCIsImJvZHkiLCJjbGllbnRXaWR0aCIsImhlaWdodCIsImNsaWVudEhlaWdodCIsImxheWVyIiwiY2FudmFzIiwic3R5bGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJzcHJpdGUxIiwiU3ByaXRlIiwiYXR0ciIsInNpemUiLCJwb3MiLCJiZ2NvbG9yIiwiYm9yZGVyV2lkdGgiLCJib3JkZXJDb2xvciIsImFwcGVuZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsSUFBTUEsRUFBRSxHQUFHLElBQUlDLEdBQUosQ0FBUTtBQUNmQyxFQUFBQSxFQUFFLEVBQUUsTUFEVztBQUVmQyxFQUFBQSxJQUFJLEVBQUUsRUFGUztBQUdmQyxFQUFBQSxPQUhlLHFCQUdMO0FBQ04sU0FBS0MsU0FBTDtBQUFBO0FBQUE7QUFBQTtBQUFBLDRCQUFlO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNMQyxjQUFBQSxTQURLLEdBQ09DLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixPQUF4QixDQURQO0FBRUxDLGNBQUFBLEtBRkssR0FFRyxJQUFJQyxRQUFRLENBQUNDLEtBQWIsQ0FBbUI7QUFDN0JMLGdCQUFBQSxTQUFTLEVBQVRBLFNBRDZCO0FBRTdCTSxnQkFBQUEsS0FBSyxFQUFFTCxRQUFRLENBQUNNLElBQVQsQ0FBY0MsV0FGUTtBQUc3QkMsZ0JBQUFBLE1BQU0sRUFBRVIsUUFBUSxDQUFDTSxJQUFULENBQWNHO0FBSE8sZUFBbkIsQ0FGSCxFQU9YOztBQUNNQyxjQUFBQSxLQVJLLEdBUUdSLEtBQUssQ0FBQ1EsS0FBTixFQVJIO0FBU1hBLGNBQUFBLEtBQUssQ0FBQ0MsTUFBTixDQUFhQyxLQUFiLENBQW1CQyxlQUFuQixHQUFxQyxTQUFyQztBQUNNQyxjQUFBQSxPQVZLLEdBVUssSUFBSVgsUUFBUSxDQUFDWSxNQUFiLEVBVkw7QUFXWEQsY0FBQUEsT0FBTyxDQUFDRSxJQUFSLENBQWE7QUFDVEMsZ0JBQUFBLElBQUksRUFBRSxDQUFDLEdBQUQsRUFBTSxHQUFOLENBREc7QUFFVEMsZ0JBQUFBLEdBQUcsRUFBRSxDQUFDLEVBQUQsRUFBSyxFQUFMLENBRkk7QUFHVEMsZ0JBQUFBLE9BQU8sRUFBRSxTQUhBO0FBSVRDLGdCQUFBQSxXQUFXLEVBQUUsQ0FKSjtBQUtUQyxnQkFBQUEsV0FBVyxFQUFFO0FBTEosZUFBYjtBQU9BWCxjQUFBQSxLQUFLLENBQUNZLE1BQU4sQ0FBYVIsT0FBYjs7QUFsQlc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBZjtBQW9CSDtBQXhCYyxDQUFSLENBQVgiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB2bSA9IG5ldyBWdWUoe1xyXG4gICAgZWw6ICcjYXBwJyxcclxuICAgIGRhdGE6IHt9LFxyXG4gICAgbW91bnRlZCgpIHtcclxuICAgICAgICB0aGlzLiRuZXh0VGljayhhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdGFnZScpO1xyXG4gICAgICAgICAgICBjb25zdCBzY2VuZSA9IG5ldyBzcHJpdGVqcy5TY2VuZSh7XHJcbiAgICAgICAgICAgICAgICBjb250YWluZXIsXHJcbiAgICAgICAgICAgICAgICB3aWR0aDogZG9jdW1lbnQuYm9keS5jbGllbnRXaWR0aCxcclxuICAgICAgICAgICAgICAgIGhlaWdodDogZG9jdW1lbnQuYm9keS5jbGllbnRIZWlnaHRcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIC8vIGNvbnN0IGJnTGF5ZXIgPSBzY2VuZS5sYXllcigpO1xyXG4gICAgICAgICAgICBjb25zdCBsYXllciA9IHNjZW5lLmxheWVyKCk7XHJcbiAgICAgICAgICAgIGxheWVyLmNhbnZhcy5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnI2VlZWVlZSc7XHJcbiAgICAgICAgICAgIGNvbnN0IHNwcml0ZTEgPSBuZXcgc3ByaXRlanMuU3ByaXRlKCk7XHJcbiAgICAgICAgICAgIHNwcml0ZTEuYXR0cih7XHJcbiAgICAgICAgICAgICAgICBzaXplOiBbMTAwLCAxMDBdLFxyXG4gICAgICAgICAgICAgICAgcG9zOiBbNDAsIDI1XSxcclxuICAgICAgICAgICAgICAgIGJnY29sb3I6ICcjQ0ZDNDQxJyxcclxuICAgICAgICAgICAgICAgIGJvcmRlcldpZHRoOiA0LFxyXG4gICAgICAgICAgICAgICAgYm9yZGVyQ29sb3I6ICcjYjZhYjJlJ1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgbGF5ZXIuYXBwZW5kKHNwcml0ZTEpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59KTtcclxuIl0sImZpbGUiOiJpbmRleC5qcyJ9
