/**
 *
 */

export default Em.Route.extend({

    model () {
        return this.store.findAll("product");
    }

});