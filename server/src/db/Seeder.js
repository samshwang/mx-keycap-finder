import { connection } from "../boot.js"

import SetSeeder from "./seeders/SetSeeder.js"
import KitSeeder from "./seeders/KitSeeder.js"
import ColorSeeder from "./seeders/ColorSeeder.js"
import SetColorwaySeeder from "./seeders/SetColorwaySeeder.js"
import ThemeSeeder from "./seeders/ThemeSeeder.js"
import SetThemeSeeder from "./seeders/SetThemeSeeder.js"
import VendorSeeder from "./seeders/VendorSeeder.js"
import SetVendorSeeder from "./seeders/SetVendorSeeder.js"
import DesignerSeeder from "./seeders/DesignerSeeder.js"
import SetDesignerSeeder from "./seeders/SetDesignerSeeder.js"
import UserSeeder from "./seeders/UserSeeder.js"

class Seeder {
  static async seed() {
    console.log("seeding vendors...")
    await VendorSeeder.seed()
    
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

    console.log("seeding set vendors...")
    await SetVendorSeeder.seed()

    console.log("seeding designers...")
    await DesignerSeeder.seed()

    console.log("seeding set designers...")
    await SetDesignerSeeder.seed()

    console.log("seeding users...")
    await UserSeeder.seed()

    console.log("Done!")
    await connection.destroy()
  }
}

export default Seeder