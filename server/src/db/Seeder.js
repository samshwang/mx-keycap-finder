import { connection } from "../boot.js"

import SetSeeder from "./seeders/SetSeeder.js"
import KitSeeder from "./seeders/KitSeeder.js"
import ColorSeeder from "./seeders/ColorSeeder.js"
import SetColorwaySeeder from "./seeders/SetColorwaySeeder.js"
import ThemeSeeder from "./seeders/ThemeSeeder.js"
import SetThemeSeeder from "./seeders/SetThemeSeeder.js"

class Seeder {
  static async seed() {
    console.log("seeding sets...")
    await SetSeeder.seed()

    console.log("seeding kits...")
    await KitSeeder.seed()

    console.log("seeding colors...")
    await ColorSeeder.seed()

    console.log("seeding set colorways...")
    await SetColorwaySeeder.seed()

    console.log("seeding themes...")
    await ThemeSeeder.seed()

    console.log("seeding set themes...")
    await SetThemeSeeder.seed()

    console.log("Done!")
    await connection.destroy()
  }
}

export default Seeder