describe('hotelsMysExtractViews', function () {
    'use strict';

    var assert = require('assert'),
        hotelsMysExtractViews = require('../src/hotelsMysExtractViews'),
        flat = hotelsMysExtractViews.flat;

    describe('flat', function () {
        it('basically works', function () {
            assert.deepEqual(
                flat('Luzern', [
                    {locale: 'en_US', values: ['Lucerne', 'Luzern']},
                    {locale: 'de_CH', values: ['Luzern']},
                    {locale: 'es_ES', values: ['Lucerna', 'Luzern']},
                    {locale: 'fr_FR', values: ['Lucerne', 'Luzern']},
                    {locale: 'it_IT', values: ['Lucerna', 'Luzern']},
                    {locale: 'nl_NL', values: ['Luzern']}
                ]),

                ['Luzern', 'Lucerne', 'Lucerna']
            );
        });
    });
});
