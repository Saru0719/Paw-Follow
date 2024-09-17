import axios from "./axios";

interface PetData {
    type_of_pet: string;
    pet_name: string;
    date_of_birth: string;
    gender: string;
    color: string;
    breed: string;
    size: string;
    weight: string;
    image_url: string;
  }

  export const createPetReq = (pet: PetData) => axios.post("/pets", pet);
  export const getAllPetsReq = () => axios.get("/pets");
  export const getPetByIdReq = (petId: number) => axios.get(`/pets/${petId}`);
  export const updatePetReq = (petId: string, pet: PetData) => axios.put(`/pets/${petId}`, pet);
  export const deletePetReq = (petId: number) => axios.delete(`/pets/${petId}`);
  