'use strict';

(function () {
  var CLOUD_WIDTH = 420;
  var CLOUD_HEIGHT = 270;
  var CLOUD_X = 100;
  var CLOUD_Y = 10;
  var GAP = 10;
  // HISTOGRAM
  var HISTOGRAM_WIDTH = 40;
  var HISTOGRAM_HEIGHT = 150;

  var histMarginLeft = CLOUD_X + 30;
  var HIST_GAP = 90;
  var HIST_VALUE = 90;

  var renderFill = function (ctx, x, y, width, height, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, width, height);
  };

  var addText = function (ctx, text, x, y) {
    ctx.fillStyle = '#000000';
    ctx.font = '16px PT Mono';
    ctx.textBaseline = 'hanging';
    ctx.fillText(text, x, y);
  };

  var getMaxElement = function (arr) {
    var maxElement = arr[0];

    for (var i = 0; i < arr.length; i++) {
      if (arr[i] > maxElement) {
        maxElement = arr[i];
      }
    }
    return maxElement;
  };

  var getRandomColor = function (hue, lightness) {
    var randomColor = '';
    var saturationColor = Math.floor(Math.random() * 101);
    randomColor = 'hsl(' + hue + ',' + saturationColor + '%,' + lightness + '%)';
    return randomColor;
  };

  window.renderStatistics = function (ctx, names, times) {
  // cloud
    renderFill(
        ctx,
        CLOUD_X + GAP,
        CLOUD_Y + GAP,
        CLOUD_WIDTH,
        CLOUD_HEIGHT,
        'rgba(0, 0, 0, 0.7)');

    renderFill(
        ctx,
        CLOUD_X,
        CLOUD_Y,
        CLOUD_WIDTH,
        CLOUD_HEIGHT,
        '#ffffff');

    // text message
    addText(ctx, 'Ура вы победили!', 120, 30);
    addText(ctx, 'Список результатов:', 120, 50);

    // histograms
    var maxTime = getMaxElement(times);

    for (var i = 0; i < names.length; i++) {
      if (names[i] === 'Вы') {
        ctx.fillStyle = 'red';
      } else {
        ctx.fillStyle = getRandomColor(240, 50);
      }
      var percentHeight = HISTOGRAM_HEIGHT - HISTOGRAM_HEIGHT * (times[i] / maxTime);

      renderFill(
          ctx,
          histMarginLeft + (HIST_GAP * i),
          HIST_VALUE + percentHeight,
          HISTOGRAM_WIDTH,
          HISTOGRAM_HEIGHT - percentHeight);

      addText(
          ctx,
          names[i],
          histMarginLeft + (HIST_GAP * i),
          CLOUD_HEIGHT - 20);

      addText(
          ctx,
          Math.floor(times[i]),
          histMarginLeft + (HIST_GAP * i),
          HIST_VALUE - 20 + percentHeight);
    }
  };
})();

