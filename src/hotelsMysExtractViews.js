(function () {
    'use strict';

    module.mapHotel = function (emit, doc) {
        emit(doc._id, {
            name: doc.name,
            retingStars: doc.ratingStars,
            city: doc.city.hoteldataId
        });
    };

    module.mapLocation = function (emit, doc) {
    };
}());
