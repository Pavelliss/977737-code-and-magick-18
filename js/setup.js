'use strict';

(function () {
  var setupBlock = document.querySelector('.setup');
  var setupSimilarBlock = document.querySelector('.setup-similar');
  var similarListElement = document.querySelector('.setup-similar-list');
  var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');

  var USER_NAMES = [
    'Иван',
    'Хуан Себастьян',
    'Мария',
    'Кристоф',
    'Виктор',
    'Юлия',
    'Люпита',
    'Вашингтон'
  ];

  var USER_LASTNAMES = [
    'да Марья',
    'Верон',
    'Мирабелла',
    'Вальц',
    'Онопко',
    'Топольницкая',
    'Нионго',
    'Ирвинг'
  ];

  var COAT_COLORS = [
    'rgb(101, 137, 164)',
    'rgb(241, 43, 107)',
    'rgb(146, 100, 161)',
    'rgb(56, 159, 117)',
    'rgb(215, 210, 55)',
    'rgb(0, 0, 0)'
  ];

  var EYES_COLORS = [
    'black',
    'red',
    'blue',
    'yellow',
    'green'
  ];

  var getRandomElement = function (array) {
    var indexElement = Math.round(-0.5 + Math.random() * array.length);
    return array[indexElement];
  };

  var renderWizard = function (wizard) {
    var wizardElement = similarWizardTemplate.cloneNode(true);

    wizardElement.querySelector('.setup-similar-label')
  .textContent = wizard.name + ' ' + wizard.lastName;

    wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

    return wizardElement;
  };

  var fragment = document.createDocumentFragment();

  var createWizards = function (count) {
    var wizards = [];
    for (var i = 0; i < count; i++) {
      var wizard = {
        name: getRandomElement(USER_NAMES),
        lastName: getRandomElement(USER_LASTNAMES),
        coatColor: getRandomElement(COAT_COLORS),
        eyesColor: getRandomElement(EYES_COLORS)
      };
      wizards.push(wizard);
      fragment.appendChild(renderWizard(wizards[i]));
    }
    return similarListElement.appendChild(fragment);
  };

  setupBlock.classList.remove('hidden');
  setupSimilarBlock.classList.remove('hidden');

  createWizards(4);
}());
