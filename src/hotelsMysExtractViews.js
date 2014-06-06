(function () {
    'use strict';

    exports.localized = function (multi, locale) {
        return multi.filter(function (item) {
            return item.locale === locale;
        })[0].values[0];
    };

    exports.mapHotel = function (emit, doc) {
        emit(doc._id, {
            name: doc.name,
            retingStars: doc.ratingStars,
            city: doc.city.hoteldataId
        });
    };

    exports.mapLocation = function (emit, doc) {
        if (doc.isRegion) {
            return;
        }
    };
}());
