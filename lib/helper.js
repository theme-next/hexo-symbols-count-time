'use strict';

var getSymbols = function(content) {
  var util = require('hexo-util');
  var stripHTML = util.stripHTML;
  return stripHTML(content).length;
};

var getFormatTime = function(minutes) {
  var fHours = Math.floor(minutes / 60);
  var fMinutes = Math.floor(minutes - (fHours * 60));
  if (fMinutes < 1) {
    fMinutes = '01'; // 0:0 => 0:01
  } else if (fMinutes < 10) {
    fMinutes = '0' + fMinutes; // 0:9 => 0:09
  }
  return fHours + ':' + fMinutes;
};

module.exports.symbolsCount = function(content) {
  var symbolsResult = getSymbols(content);
  if (symbolsResult > 9999) {
    symbolsResult = Math.round(symbolsResult / 1000) + 'k'; // > 9999 => 11k
  } else if (symbolsResult > 999) {
    symbolsResult = Math.round(symbolsResult / 100) / 10 + 'k'; // > 999 => 1.1k
  } // < 999 => 111
  return symbolsResult;
};

module.exports.symbolsTime = function(content, awl, wpm) {
  if (!awl) { awl = '5'; }
  if (!wpm) { wpm = '200'; }
  var minutes = Math.round(getSymbols(content) / (awl * wpm));
  return getFormatTime(minutes);
};

var getSymbolsTotal = function(site) {
  var symbolsResultCount = 0;
  site.posts.forEach(function(post) {
    symbolsResultCount += getSymbols(post.content);
  });
  return symbolsResultCount;
};

module.exports.symbolsCountTotal = function(site) {
  var symbolsResultTotal = getSymbolsTotal(site);
  return symbolsResultTotal < 1000000
    ? Math.round(symbolsResultTotal / 1000) + 'k' // < 999k => 111k
    : Math.round(symbolsResultTotal / 100000) / 10 + 'm'; // > 999k => 1.1m
};

module.exports.symbolsTimeTotal = function(site, awl, wpm) {
  if (!awl) { awl = '5'; }
  if (!wpm) { wpm = '200'; }
  var minutes = Math.round(getSymbolsTotal(site) / (awl * wpm));
  return getFormatTime(minutes);
};
