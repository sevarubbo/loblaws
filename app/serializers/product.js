/**
 *
 */

import DS from "ember-data";

export default DS.JSONAPISerializer.extend({

    normalizeArrayResponse (store, primaryModelClass, payload) {

        return {
            data: payload["results"].map(result => {
                return {
                    id: result["productId"],
                    type: "product",
                    attributes: {
                        "name": result["productName"],
                        "badge": result["productBadgeString"],
                        "availableColors": result["availableColors"],
                        "price": result["productPrice"],
                        "style": result["productStyle"],
                        "swatchImage": result["swatchImage"],
                        "thumbnails": result["thumbnails"]
                    }
                };
            })
        };

    }

});
