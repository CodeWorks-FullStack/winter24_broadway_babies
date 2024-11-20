import { animalsService } from "../services/AnimalsService.js";
import { showsService } from "../services/ShowsService.js";
import BaseController from "../utils/BaseController.js";

export class AnimalsController extends BaseController {
  constructor() {
    super('api/animals')
    this.router
      .get('', this.getAllAnimals)
      .put('/:animalId', this.updateAnimal)
      .get('/:animalId/shows', this.getShowsByAnimalId)
  }

  /**
* Returns all animals
* @param {import("express").Request} request
* @param {import("express").Response} response
* @param {import("express").NextFunction} next
*/
  async getAllAnimals(request, response, next) {
    try {
      const animals = await animalsService.getAllAnimals()
      response.send(animals)
    } catch (error) {
      next(error)
    }
  }

  /**
  * Updates an animal using the id from the request parameters
  * @param {import("express").Request} request
  * @param {import("express").Response} response
  * @param {import("express").NextFunction} next
  */
  async updateAnimal(request, response, next) {
    try {
      const animalId = request.params.animalId
      const animalData = request.body
      const updatedAnimal = await animalsService.updateAnimal(animalId, animalData)
      response.send(updatedAnimal)
    } catch (error) {
      next(error)
    }
  }

  /**
  * Gets all shows for an animal using id from request parameters
  * @param {import("express").Request} request
  * @param {import("express").Response} response
  * @param {import("express").NextFunction} next
  */
  async getShowsByAnimalId(request, response, next) {
    try {
      const animalId = request.params.animalId
      const shows = await showsService.getShowsByAnimalId(animalId)
      response.send(shows)
    } catch (error) {
      next(error)
    }
  }
}