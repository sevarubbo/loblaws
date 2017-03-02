/**
 *
 */

import DS from "ember-data";

export default DS.JSONAPIAdapter.extend({

    urlForFindAll () {
        return "https://joefresh-marketing-dev.s3.amazonaws.com/developer-interview/full-list.json";
    }

});