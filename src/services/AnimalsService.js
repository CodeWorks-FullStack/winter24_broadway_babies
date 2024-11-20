import { dbContext } from "../db/DbContext.js"

class AnimalsService {
  async updateAnimal(animalId, animalData) {
    const animalToUpdate = await dbContext.Animals.findById(animalId)

    // NOTE you can't change the name
    // animalToUpdate.name = animalData.name
    // you can change the talent
    animalToUpdate.talent = animalData.talent

    // NOTE updates the document in the database so our changes persist
    await animalToUpdate.save()

    return animalToUpdate
  }
  async getAllAnimals() {
    const animals = await dbContext.Animals.find()
    return animals
  }
}

export const animalsService = new AnimalsService()