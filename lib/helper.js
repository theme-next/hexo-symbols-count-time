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
    fMinutes = '0' + fMinutes; // 0:1 => 0:01
  }
  return fHours + ':' + fMinutes;
};

module.exports.symbolsCount = function(content) {
  var symbolsResult = getSymbols(content);
  return symbolsResult < 1024
    ? symbolsResult // < 999 => 100
    : Math.round(((symbolsResult / 1000) * 10) / 10) + 'k'; // > 999 => 1.1k
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
  return symbolsResultTotal < 1024024
    ? Math.round(symbolsResultTotal / 1000) + 'k' // < 999k => 100k
    : Math.round(((symbolsResultTotal / 1000000 * 10)) / 10) + 'm'; // > 999k => 1.1m
};

module.exports.symbolsTimeTotal = function(site, awl, wpm) {
  if (!awl) { awl = '5'; }
  if (!wpm) { wpm = '200'; }
  var minutes = Math.round(getSymbolsTotal(site) / (awl * wpm));
  return getFormatTime(minutes);
};
