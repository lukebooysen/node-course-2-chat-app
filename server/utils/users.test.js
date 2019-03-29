const expect = require('expect');

const {Users} = require('./users');

describe('Users', () => {

    var users;

    beforeEach(() => {
        users = new Users();
        users.users = [{
            id: '1',
            name: 'Luke',
            room: 'Node Course'
        },
        {
            id: '2',
            name: 'Mary',
            room: 'React Course'
        },
        {
            id: '3',
            name: 'Martha',
            room: 'Node Course'
        }];
    });

    it('should add new user', () => {
        var users = new Users();
        var user = {
            id: '123',
            name: 'Luke',
            room: 'The Office Fans'
        };
        var resUser  = users.addUser(user.id, user.name, user.room);

        expect(users.users).toEqual([user]);
    });

    it('Should remove a user', () => {
        var userId = '1';
        var user   = users.removeUser(userId);

        expect(user.id).toBe(userId);
        expect(users.users.length).toBe(2);
    });

    it('Should not remove user', () => {
        var userId = '9';
        var user   = users.removeUser(userId);

        expect(user).toNotExist();
        expect(users.users.length).toBe(3);
    });

    it('Should find user', () => {
        var userId = '2';
        var user = users.getUser(userId);

        expect(user.id).toBe(userId);
    });

    it('Should not find a user', () => {
        var userId = '99';
        var user  = users.getUser(userId);

        expect(user).toNotExist();
    });

    it('Should return names for node course', () => {
        var userList = users.getUserList('Node Course');

        expect(userList).toEqual(['Luke', 'Martha']);
    });

    it('Should return names for react course', () => {
        var userList = users.getUserList('React Course');

        expect(userList).toEqual(['Mary']);
    });
});