import React from "react";
import { deleteHealthReq } from "../api/healt";

interface Props {
  id: number;
  pet_name: string;
  date: string;
  description: string;
  idOwner: number;
}
function HealthCard(props: Props) {
  const { id, pet_name, date, description, idOwner } = props;
  const handleDelete = async () => {
    try {
      window.location.reload();
      await deleteHealthReq(id);
    } catch (error) {
      console.log(error)
    }
  };
  return (
    <>
      <section className="flex flex-wrap">
        <div className="flex flex-col gap-2 shadow-gray-300 shadow-md p-4 rounded-lg">
          <h1 className="text-2xl font-semibold">{pet_name}</h1>
          <p className="text-lg">{date}</p>
          <p className="text-lg">{description}</p>
          <button className="bg-red-500 py-2 rounded-lg" onClick={handleDelete}>Delete</button>
        </div>
      </section>
    </>
  );
}

export default HealthCard;
