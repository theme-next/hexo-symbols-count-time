'use strict';

if (hexo.config.symbols_count_time) {

  var helper = require('./lib/helper');

  if (hexo.config.symbols_count_time.symbols) {
    hexo.extend.helper.register('symbolsCount', helper.symbolsCount);
  }

  if (hexo.config.symbols_count_time.time) {
    hexo.extend.helper.register('symbolsTime', helper.symbolsTime);
  }

  if (hexo.config.symbols_count_time.total_symbols) {
    hexo.extend.helper.register('symbolsCountTotal', helper.symbolsCountTotal);
  }

  if (hexo.config.symbols_count_time.total_time) {
    hexo.extend.helper.register('symbolsTimeTotal', helper.symbolsTimeTotal);
  }

}
