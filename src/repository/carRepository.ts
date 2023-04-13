import prisma from "../config/database.js";
import { License } from "../../protocols.js";


async function getCars() {
  return prisma.cars.findMany();
 
}

async function getCar(id: number) {
  return prisma.cars.findMany({
    where: {id}
  });

}

async function getCarWithLicensePlate(licensePlate: string) {
  return prisma.cars.findMany({
    where: {licensePlate}
  })

}

async function createCar(job: License) {
  return prisma.cars.create({
    data: job
  });
}


async function deleteCar(id: number) {
  return prisma.cars.delete({
    where: {id}
  })

}

const carRepository = {
  getCar,
  getCarWithLicensePlate,
  getCars,
  createCar,
  deleteCar
}

export default carRepository;