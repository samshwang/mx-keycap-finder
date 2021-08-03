import { connection } from "../boot.js"

import SetSeeder from "./seeders/SetSeeder.js"
import KitSeeder from "./seeders/KitSeeder.js"

class Seeder {
  static async seed() {
    console.log("seeding sets...")
    await SetSeeder.seed()

    console.log("seeding kits...")
    await KitSeeder.seed()

    console.log("Done!")
    await connection.destroy()
  }
}

export default Seeder