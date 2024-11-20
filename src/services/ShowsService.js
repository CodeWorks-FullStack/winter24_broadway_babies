import { dbContext } from "../db/DbContext.js"

class ShowsService {
  async getShowsByAnimalId(animalId) {
    //                                       { animalId: '6615c244650db689bde4f58e' }
    const shows = await dbContext.Shows.find({ animalId: animalId }).populate('handler', 'name picture')
    return shows
  }
  async createShow(showData) {
    const show = await dbContext.Shows.create(showData)
    // NOTE populates must be done after a create
    await show.populate('animal')
    await show.populate('handler', 'name picture')
    return show
  }
  async getAllShows() {
    const shows = await dbContext.Shows.find().populate('animal').populate('handler', 'name picture')
    return shows
  }
}


export const showsService = new ShowsService()