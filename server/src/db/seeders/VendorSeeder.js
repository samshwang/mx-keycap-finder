import { Vendor } from "../../models/index.js"

class VendorSeeder {
  static async seed() {
    const vendors = [
      { name: "NovelKeys", url: "https://novelkeys.xyz/" }, //1
      { name: "Mechs and Co", url: "https://mechsandco.com/" },
      { name: "CannonKeys", url: "https://cannonkeys.com/" }, //3
      { name: "Omnitype", url: "https://omnitype.com/" },
      { name: "Drop", url: "https://drop.com/home" }, //5
      { name: "Kono", url: "https://kono.store/" }, //6
    ]

    for (const vendor of vendors) {
      const currentVendor = await Vendor.query().findOne({ name: vendor.name })

      if (!currentVendor) {
        await Vendor.query().insert(vendor)
      }
    }
  }
}

export default VendorSeeder