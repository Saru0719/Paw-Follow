import React, { useEffect, useState } from "react";
import MyPetsComponent from "./MyPetsComponent";
import { getAllPetsReq } from "../api/home";

interface PetData {
  id: number;
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
function PetsList() {
  const [pets, setPets] = useState<PetData[]>([]);
  const [error, setError] = useState("");
  useEffect(() => {
    // Funcion asincrona para obtener los posts
    const fetchPosts = async () => {
      try {
        // Llamada a la funcion getPosts de la API
        const res = await getAllPetsReq();
        // Asignacion de los posts obtenidos al estado posts
        console.log(res.data);
        setPets(res.data);
      } catch (err: any) {
        // Manejo de errores
        console.error("Error getting posts:", err);
        setError(
          err.response?.data?.message || "An error occurred while getting posts"
        );
      }
    };
    // Llamada a la funcion fetchPosts
    fetchPosts();
  }, []);
  return (
    <>
      {pets.map((pets) => (
        <MyPetsComponent
          id={pets.id}
          name={pets.pet_name}
          type={pets.type_of_pet}
          birth={pets.date_of_birth}
          gender={pets.gender}
          color={pets.color}
          breed={pets.breed}
          size={pets.size}
          weight={pets.weight}
          imgUrl={pets.image_url}
        />
      ))}
    </>
  );
}

export default PetsList;
