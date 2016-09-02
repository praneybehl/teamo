Meteor.startup(function () {


    if (Meteor.users.find().count() === 0) {
        console.info('No System Admin Defined!\nCreating default System Admin Now!');
        //===============================================================================
        //===============================================================================
        // USERS
        // crate an administrator
        let sysadmin = Accounts.createUser({
            email: 'admin@email.com',
            password: 'password',
            profile: {
                'firstName': 'Admin',
                'lastName': 'User'
            }
        });
        Roles.addUsersToRoles(sysadmin, 'admin', Roles.GLOBAL_GROUP);
        console.info('System Admin id: ' + sysadmin + " Created!");

        let testUser = {
            email: "user@email.com",
            password: "password",
            profile: {
                firstName: 'Demo',
                lastName: 'User'
            }
        };

        let user = Accounts.createUser(testUser);
        console.info('Test User id: ' + user + " Created!");
        Roles.addUsersToRoles(user, ["User"], 'Employee');

    }
});
