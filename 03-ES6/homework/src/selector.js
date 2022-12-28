var traverseDomAndCollectElements = function(matchFunc, startEl) {
  var resultSet = [];

  if (typeof startEl === "undefined") {
    startEl = document.body;
  }

  // recorre el árbol del DOM y recolecta elementos que matchien en resultSet
  // usa matchFunc para identificar elementos que matchien

  // TU CÓDIGO AQUÍ
  if(matchFunc(startEl)) resultSet.push(startEl);
  for(let i = 0; i<startEl.children.length; i++){
    var resultado = traverseDomAndCollectElements(matchFunc,startEl.children[i]);
    resultSet = [...resultSet, ...resultado];
  }
  return resultSet;
};

// Detecta y devuelve el tipo de selector
// devuelve uno de estos tipos: id, class, tag.class, tag


var selectorTypeMatcher = function(selector) {
  // tu código aquí
  if(selector[0]==='#') return 'id';
  if(selector[0]==='.') return 'class';
  separador = selector.split('.');
  if(separador.length >1) return'tag.class'
  return 'tag';
};

// NOTA SOBRE LA FUNCIÓN MATCH
// recuerda, la función matchFunction devuelta toma un elemento como un
// parametro y devuelve true/false dependiendo si el elemento
// matchea el selector.

var matchFunctionMaker = function(selector) {
  var selectorType = selectorTypeMatcher(selector);
  var matchFunction;
  if (selectorType === "id") { 
    var matchFunction = function (el) {
      return '#'+el.id === selector;
    };
  } else if (selectorType === "class") {
    var matchFunction = function (el) {
      return el.classList.contains(selector.slice(1));
    };
  } else if (selectorType === "tag.class") {
    var matchFunction = function (el){
      array = selector.split('.');
      return array[0].toLowerCase()===el.tagName.toLowerCase() && el.classList.contains(array[1])
    }
  } else if (selectorType === "tag") {
    var matchFunction = function (el) {
      return el.tagName && (el.tagName.toLowerCase() === selector.toLowerCase());
    };
  }
  return matchFunction;
};

var $ = function(selector) {
  var elements;
  var selectorMatchFunc = matchFunctionMaker(selector);
  elements = traverseDomAndCollectElements(selectorMatchFunc);
  return elements;
};
