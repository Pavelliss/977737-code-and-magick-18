'use strict';

(function () {
  var CLOUD_WIDTH = 420;
  var CLOUD_HEIGTH = 270;
  var CLOUD_X = 100;
  var CLOUD_Y = 10;
  var GAP = 10;
  // HISTOGRAM
  var HISTOGRAM_WIDTH = 40;
  var HISTOGRAM_HEIGHT = 150;

  var histMarginLeft = CLOUD_X + 30;
  var histGap = 90;
  var histValue = 90;

  var renderCloud = function (ctx, x, y, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGTH);
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

  var getRandomColor = function (ctx, hue, lightness) {
    var saturationColor = Math.floor(Math.random() * 101);
    ctx.fillStyle = 'hsl(' + hue + ',' + saturationColor + '%,' + lightness + '%)';
    return ctx.fillStyle;
  };

  window.renderStatistics = function (ctx, names, times) {
  // cloud
    renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
    renderCloud(ctx, CLOUD_X, CLOUD_Y, '#ffffff');

    // text message
    addText(ctx, 'Ура вы победили!', 120, 30);
    addText(ctx, 'Список результатов:', 120, 50);

    // histograms
    var maxTime = getMaxElement(times);

    for (var i = 0; i < names.length; i++) {
      if (names[i] === 'Вы') {
        ctx.fillStyle = 'red';
      } else {
        getRandomColor(ctx, 240, 50);
      }
      var percentHeight = HISTOGRAM_HEIGHT - HISTOGRAM_HEIGHT * (times[i] / maxTime);

      ctx.fillRect(histMarginLeft + (histGap * i), histValue + percentHeight, HISTOGRAM_WIDTH, HISTOGRAM_HEIGHT - percentHeight);

      addText(ctx, names[i], histMarginLeft + (histGap * [i]), 250);
      addText(ctx, Math.floor(times[i]), histMarginLeft + (histGap * [i]), histValue - 20 + percentHeight);
    }
  };
})();

