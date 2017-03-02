/**
 *
 */

import BaseComponent from "base/component";

export default BaseComponent.extend({

    name: "product-list-controls",



    /**
     * Attributes
     */

    /**
     * @property {String}
     */
    sortParameter: "default",


    /**
     * Actions
     */
    actions: {


        /**
         *
         * @param {String} parameter
         */
        setSort (parameter) {
            this.set("sortParameter", parameter);
        }

    }

});
