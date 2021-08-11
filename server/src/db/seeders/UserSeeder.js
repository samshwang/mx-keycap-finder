import { User } from "../../models/index.js"

class UserSeeder {
    static async seed() {
        const users = [
            {
                email: "neo",
                password: "1",
                administrator: true
            },
            {
                email: "pleb",
                password: "2",
                administrator: false
            }
        ]

        for (const user of users) {
            const currentUser = await User.query().findOne({email: user.email})

            if (!currentUser) {
                await User.query().insert(user)
            }
        }
    }
}

export default UserSeeder