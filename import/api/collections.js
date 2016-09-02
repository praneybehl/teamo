import {Mongo} from "meteor/mongo"
import { Schemas } from "./schemas";

const Seasons = new Mongo.Collection("seasons");
const Targets = new Mongo.Collection("targets");
const TargetUpdates = new Mongo.Collection("target-updates");

Seasons.attachSchema(Schemas.SeasonSchema);
Targets.attachSchema(Schemas.TargetSchema);
TargetUpdates.attachSchema(Schemas.TargetUpdates);

const isAdmin = (userId) => {
    return Roles.userIsInRole(userId, "admin");
};

Seasons.allow({
    insert: function (userId, doc) {
        return isAdmin(userId);
    },
    update: function (userId, doc, fields, modifier) {
        return isAdmin(userId);
    },
    remove: function (userId, doc) {
        return isAdmin(userId);
    }
});


Targets.allow({
    insert: function (userId, doc) {
        return isAdmin(userId);
    },
    update: function (userId, doc, fields, modifier) {
        return isAdmin(userId);
    },
    remove: function (userId, doc) {
        return isAdmin(userId);
    }
});

TargetUpdates.allow({
    insert: function (userId, doc) {
        // the user must be logged in, and the document must be owned by the user
        return (userId);
    },
    update: function (userId, doc, fields, modifier) {
        // can only change your own documents
        return doc.userId === userId || isAdmin(userId);;
    },
    remove: function (userId, doc) {
        // can only remove your own documents
        return isAdmin(userId);
    }
});


export { Seasons , Targets, TargetUpdates }