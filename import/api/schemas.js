
export const Schemas = {
    SeasonSchema : new SimpleSchema({
        name: {type: String},
        startDate: {type: Date},
        endDate: {type: Date}
    }),
    TargetSchema: new SimpleSchema({
        name: {type: String},
        targetType: {type:String},
        startDate: {type: Date},
        endDate: {type: Date},
        totalPercentage:{type:Number},
        seasonId:{type:String},
        userIds: {type:[String]}
    }),
    TargetUpdates: new SimpleSchema({
        startDate: {type: Date},
        endDate: {type: Date},
        notes: {type:String},
        percentage:{type:Number},
        targetId:{type:String},
        userId:{type:String}
    })
};