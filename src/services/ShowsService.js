import { dbContext } from "../db/DbContext.js"

class ShowsService {
  async getAllShows() {
    const shows = await dbContext.Shows.find().populate('animal')
    return shows
  }
}


export const showsService = new ShowsService()