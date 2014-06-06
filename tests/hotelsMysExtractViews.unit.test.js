describe('hotelsMysExtractViews', function () {
    'use strict';

    var assert = require('assert'),
        hotelsMysExtractViews = require('../src/hotelsMysExtractViews'),
        localized = hotelsMysExtractViews.localized;

    describe('localized', function () {
        it('basically works', function () {
            assert.strictEqual(
                localized([{
                    locale: 'en_US',
                    values: ['Lucerne']
                }, {
                    locale: 'de_CH',
                    values: ['Luzern', 'Luz']
                }], 'de_CH'),

                'Luzern'
            );
        });
    });
});
