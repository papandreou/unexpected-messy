/* global messy:true, unexpected:true */
/* exported messy, unexpected */
messy = require('messy');
unexpected = require('unexpected').clone();
unexpected.output.preferredWidth = 80;
unexpected.use(require('./lib/unexpectedMessy'));
