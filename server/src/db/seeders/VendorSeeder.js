import { Vendor } from "../../models/index.js"

class VendorSeeder {
  static async seed() {
    const vendors = [
      { name: "NovelKeys", url: "https://novelkeys.xyz/" },
      { name: "Mechs and Co", url: "https://mechsandco.com/" },
      { name: "CannonKeys", url: "https://cannonkeys.com/" }
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