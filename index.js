'use strict';

if (hexo.config.symbols_count_time) {

  const helper = require('./lib/helper');
  const { stripHTML } = require('hexo-util');

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

  if (hexo.config.symbols_count_time.symbols || hexo.config.symbols_count_time.time || hexo.config.symbols_count_time.total_symbols || hexo.config.symbols_count_time.total_time) {
    hexo.extend.filter.register('after_post_render', function(data) {
      var content = data.content;
      if (hexo.config.symbols_count_time.exclude_codeblock) content = content.replace(/<pre>.*?<\/pre>/g, '');
      data.length = stripHTML(content).replace(/\n/g, '').length;
    }, 0);
  }

}
