/**
 *  Entity which represents a User. (exactly the same as back-end)
 *  @param id - the id of the user
 *  @param username - the username of the user
 *  @param firstName - the first name of the user
 *  @param lastName - the last name of the user 
 *  @param email - the email of the user
 *  @param password - the password of the user
 */
interface User {
    username: string;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
}

export default User;