/**
 *
 */

import BaseComponent from "base/component";

const initialLimit = 20;

export default BaseComponent.extend({

    name: "product-list",


    /**
     * Attributes
     */

    /**
     * @property {App.Product[]}
     * @readonly
     */
    products: null,


    /**
     * @property {String}
     */
    sortParameter: "default",



    /**
     * Properties
     */

    /**
     * @property {Number}
     */
    limit: function () {
        return initialLimit;
    }.property(),


    /**
     * @property {App.Product[]}
     * @readonly
     */
    productsSortedByDefault: function () {
        return this.get("products").slice(0, this.get("limit"));
    }.property("products.[]", "limit"),


    /**
     * @property {App.Product[]}
     * @readonly
     */
    productsSortedByPrice: function () {
        return this.get("products").sortBy("price").slice(0, this.get("limit"));
    }.property("products.[]", "limit"),


    /**
     * @property {App.Product[]}
     * @readonly
     */
    productsSortedByName: function () {
        return this.get("products").sortBy("name").slice(0, this.get("limit"));
    }.property("products.[]", "limit"),


    /**
     * @property {App.Product[]}
     * @readonly
     */
    productsToDisplay: function () {

        const sortParameter = this.get("sortParameter");

        if (sortParameter === "default") {
            return this.get("productsSortedByDefault");
        } else if (sortParameter === "price") {
            return this.get("productsSortedByPrice");
        } else if (sortParameter === "name") {
            return this.get("productsSortedByName");
        }

    }.property("sortParameter", "limit"),


    /**
     * @property {Boolean}
     * @readonly
     */
    shouldHaveMoreProducts: function () {
        return this.get("products.length") > this.get("limit");
    }.property("products.length", "limit"),



    /**
     * Hooks
     */

    /**
     *
     */
    onSortParameterChange: function () {
        this.set("limit", initialLimit);
        Em.$("html, body").animate({scrollTop: 0}, 300);
    }.observes("sortParameter"),



    /**
     * Actions
     */
    actions: {

        /**
         *
         */
        getMore () {
            this.incrementProperty("limit", initialLimit);
        }

    }

});
