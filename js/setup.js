'use strict';

(function () {
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

  var FIREBALL_COLORS = [
    '#ee4830',
    '#30a8ee',
    '#5ce6c0',
    '#e848d5',
    '#e6e848',
  ];

  var setupBlock = document.querySelector('.setup');
  // var setupSimilarBlock = document.querySelector('.setup-similar');
  var similarListElement = document.querySelector('.setup-similar-list');
  var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');

  var getRandomElement = function (array) {
    var indexElement = Math.floor(Math.random() * array.length);
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
    }
    return wizards;
  };

  var addWizardsMarkup = function (array) {
    for (var i = 0; i < array.length; i++) {
      fragment.appendChild(renderWizard(array[i]));
    }
    similarListElement.appendChild(fragment);
  };

  addWizardsMarkup(createWizards(4));

  var KEYKODE_ENTER = 13;
  var KEYKODE_ESC = 27;

  var setupOpen = document.querySelector('.setup-open');
  var setupClose = setupBlock.querySelector('.setup-close');
  var userNameInput = setupBlock.querySelector('.setup-user-name');
  var wizardCoat = setupBlock.querySelector('.wizard-coat');
  var wizardEyes = setupBlock.querySelector('.wizard-eyes');
  var wizardFireball = setupBlock.querySelector('.setup-fireball-wrap');
  var inputCoat = setupBlock.querySelector('input[name="coat-color"]');
  var inputEyes = setupBlock.querySelector('input[name="eyes-color"]');
  var inputFireball = setupBlock.querySelector('input[name="fireball-color"]');

  var closePopup = function () {
    setupBlock.classList.add('hidden');
  };

  var onPopupEscPress = function (evt) {
    if (evt.keyCode === KEYKODE_ESC) {
      closePopup();
    }
  };

  var openPopup = function () {
    setupBlock.classList.remove('hidden');
    document.addEventListener('keydown', onPopupEscPress);
  };

  setupOpen.addEventListener('click', function () {
    openPopup();
  });

  setupOpen.addEventListener('keydown', function (evt) {
    if (evt.keyCode === KEYKODE_ENTER) {
      openPopup();
    }
  });

  setupClose.addEventListener('click', function () {
    closePopup();
  });

  setupClose.addEventListener('keydown', function (evt) {
    if (evt.keyCode === KEYKODE_ENTER) {
      closePopup();
    }
  });

  userNameInput.addEventListener('invalid', function () {
    if (userNameInput.validity.tooShort) {
      userNameInput.setCustomValidity('Имя должно состоять минимум из 2-х символов');
    } else if (userNameInput.validity.tooLong) {
      userNameInput.setCustomValidity('Имя не должно превышать 25-ти символов');
    } else if (userNameInput.validity.valueMissing) {
      userNameInput.setCustomValidity('Обязательное поле');
    } else {
      userNameInput.setCustomValidity('');
    }
  });

  wizardCoat.addEventListener('click', function () {
    var coatColor = getRandomElement(COAT_COLORS);
    wizardCoat.style.fill = coatColor;
    inputCoat.value = coatColor;
  });

  wizardEyes.addEventListener('click', function () {
    var eyesColor = getRandomElement(EYES_COLORS);
    wizardEyes.style.fill = eyesColor;
    inputEyes.value = eyesColor;
  });

  wizardFireball.addEventListener('click', function () {
    var fireballColor = getRandomElement(FIREBALL_COLORS);
    wizardFireball.style.background = fireballColor;
    inputFireball.value = fireballColor;
  });
}());
