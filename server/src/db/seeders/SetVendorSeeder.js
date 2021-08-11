import { SetVendor } from "../../models/index.js"

class SetVendorSeeder {
  static async seed() {
    const setvendors = [
      { setID: 1, vendorID: 1 },
      { setID: 2, vendorID: 2 },
      { setID: 3, vendorID: 3 },
      { setID: 4, vendorID: 4 },
      { setID: 5, vendorID: 5 },
      { setID: 6, vendorID: 1 },
      { setID: 7, vendorID: 6 },
      { setID: 7, vendorID: 1 },
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