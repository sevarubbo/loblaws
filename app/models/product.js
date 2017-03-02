/**
 *
 */

import DS from "ember-data";

export default DS.Model.extend({

    name: DS.attr("string"),
    price: DS.attr("number"),
    style: DS.attr("string"),
    badge: DS.attr("string"),
    availableColors: DS.attr(),
    swatchImage: DS.attr("string"),
    thumbnails: DS.attr(),


    /**
     * Properties
     */

    /**
     * @property {String}
     * @readonly
     */
    image: function () {
        const thumbnails = this.get("thumbnails");
        return thumbnails["b1"] || thumbnails["b2"] || thumbnails["b3"] || thumbnails["b4"];
    }.property()

});
