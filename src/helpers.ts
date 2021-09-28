import { User } from '../generated/schema';

/**
 * Find or Create a User entity with `id` and return it
 * @param id
 */
export function findOrCreateUser(id: string): User {
    let user = User.load(id);

    if (user == null) {
        user = new User(id);
        user.save();
    }

    return user as User;
}
