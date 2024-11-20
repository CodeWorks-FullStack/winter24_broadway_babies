import { showsService } from "../services/ShowsService.js";
import BaseController from "../utils/BaseController.js";

export class ShowsController extends BaseController {
  constructor() {
    super('api/shows')
    this.router
      .get('', this.getAllShows)
      .post('', this.createShow)
  }
  /**
    * Returns all shows
    * @param {import("express").Request} request
    * @param {import("express").Response} response
    * @param {import("express").NextFunction} next
    */
  async getAllShows(request, response, next) {
    try {
      const shows = await showsService.getAllShows()
      response.send(shows)
    } catch (error) {
      next(error)
    }
  }

  /**
    * Create a show for a handler and an animal
    * @param {import("express").Request} request
    * @param {import("express").Response} response
    * @param {import("express").NextFunction} next
    */
  async createShow(request, response, next) {
    try {
      const showData = request.body
      const show = await showsService.createShow(showData)
      response.send(show)
    } catch (error) {
      next(error)
    }
  }

}