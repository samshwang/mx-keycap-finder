import { Vendor } from "../../models/index.js"

class VendorSeeder {
  static async seed() {
    const vendors = [
      { name: "NovelKeys", url: "https://novelkeys.xyz/" }, //1
      { name: "Mechs and Co", url: "https://mechsandco.com/" }, //2
      { name: "CannonKeys", url: "https://cannonkeys.com/" }, //3
      { name: "Omnitype", url: "https://omnitype.com/" }, //4
      { name: "Drop", url: "https://drop.com/home" }, //5
      { name: "Kono", url: "https://kono.store/" }, //6
      { name: "CandyKeys", url: "https://candykeys.com/" }, //7
      { name: "monokei", url: "https://monokei.co/" }, //8
      { name: "zFrontier", url: "https://en.zfrontier.com/" }, //9
      { name: "Deskhero", url: "https://www.deskhero.ca/" }, //10
      { name: "Mykeboard", url: "https://mykeyboard.eu/" }, //11
      { name: "Proto[Typist]", url: "https://prototypist.net/" }, //12
      { name: "Daily Clack", url: "https://dailyclack.com/" }, //13
      { name: "Fancy Customs", url: "https://fancycustoms.com/" }, //14
      { name: "iLumkb", url: "https://ilumkb.com/" }, //15
      { name: "Zion Studios", url: "https://zionstudios.ph/" }, //16
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
