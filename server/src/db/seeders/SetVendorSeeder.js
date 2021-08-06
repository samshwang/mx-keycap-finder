import { SetVendor } from "../../models/index.js"

class SetVendorSeeder {
  static async seed() {
    const setvendors = [
      { setID: 1, vendorID: 1 },
      { setID: 2, vendorID: 2 },
      { setID: 3, vendorID: 3 },
    ]

    for (const setvendor of setvendors) {
      const currentSetVendor = await SetVendor.query().findOne({ setID: setvendor.setID, vendorID: setvendor.vendorID })

      if (!currentSetVendor) {
        await SetVendor.query().insert(setvendor)
      }
    }
  }
}

export default SetVendorSeeder