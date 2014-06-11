(function () {
    'use strict';

    exports.flat = function (hoteldataId, multi) {
        return [hoteldataId].concat(multi.reduce(function (memo, item) {
            return memo.concat(item.values);
        }, []).filter(function (synonym) {
            return synonym !== hoteldataId;
        }).reduce(function (memo, synonym) {
            if (memo.indexOf(synonym) === -1) {
                return memo.concat([synonym]);
            }

            return memo;
        }, []));
    };

    exports.mapHotel = function (emit, doc) {
        emit(doc.name, {
            name: doc.name,
            retingStars: doc.ratingStars,
            city: doc.city.hoteldataId
        });
    };

    exports.mapLocation = function (emit, doc) {
        if (doc.isRegion) {
            return;
        }

        emit(doc.hoteldataId, exports.flat(doc.hoteldataId, doc.name));
    };
}());
