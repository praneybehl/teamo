import {Meteor} from "meteor/meteor"
import { Seasons, Targets, TargetUpdates} from "./collections"

Meteor.methods({
    //Seasons CRUD

    "seasons/insert"(data) {
        Seasons.insert(data);
    },

    "seasons/update"(id, data) {
        Seasons.update(id, {$set: data})
    },
    "seasons/remove"(id) {
        Seasons.remove();
    },


    //Targets CRUD

    "targets/insert"(data){
        Targets.insert(data);
    },
    "targets/update"(id, data){
        Targets.update(id, {$set: data})
    },
    "targets/renmove"(id){
        Targets.remove(id);
    },

    //TargetUpdates CRUD

    "targetUpdates/insert"(data){
        TargetUpdates(data);
    },
    "tagetUpdates/update"(id, data){
        TargetUpdates.update(id, {$set: data})
    },
    "targetUpdates/remove"(id){
        TargetUpdates.remove(id);
    }
});
