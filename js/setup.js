'use strict'

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

var USER_LASTNAME = [
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


var EYES_COLOR = [
  'black',
  'red',
  'blue',
  'yellow',
  'green'
];

var getRandomElement = function (array) {
  var number = Infinity;
  while (number > array.length - 1) {
    number = Math.floor(Math.random() * 10);
  }
  return array[number];
};

var wizards = [
  {
    name: getRandomElement(USER_NAMES),
    lastName: getRandomElement(USER_LASTNAME),
    coatColor: getRandomElement(COAT_COLORS),
    eyesColor: getRandomElement(EYES_COLOR)
  },
  {
    name: getRandomElement(USER_NAMES),
    lastName: getRandomElement(USER_LASTNAME),
    coatColor: getRandomElement(COAT_COLORS),
    eyesColor: getRandomElement(EYES_COLOR)
  },
  {
    name: getRandomElement(USER_NAMES),
    lastName: getRandomElement(USER_LASTNAME),
    coatColor: getRandomElement(COAT_COLORS),
    eyesColor: getRandomElement(EYES_COLOR)
  },
  {
    name: getRandomElement(USER_NAMES),
    lastName: getRandomElement(USER_LASTNAME),
    coatColor: getRandomElement(COAT_COLORS),
    eyesColor: getRandomElement(EYES_COLOR)
  }
];

setupBlock.classList.remove('hidden');
setupSimilarBlock.classList.remove('hidden');

var renderWizard = function (wizard) {
  var wizardElement =  similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label')
  .textContent = wizard.name + ' ' + wizard.lastName;

  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
};

var fragment = document.createDocumentFragment();
for (var i = 0; i < wizards.length; i++) {
  fragment.appendChild(renderWizard(wizards[i]));
};

similarListElement.appendChild(fragment);
