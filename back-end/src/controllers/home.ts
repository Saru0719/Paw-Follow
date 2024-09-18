import { Request, Response } from 'express';
import { pool } from '../db';

//Funcion para añadir mascota
export const Add_pets = async (req: Request, res: Response) => {
    const { type_of_pet, pet_name, date_of_birth, gender, color, breed, size, weight, image_url, idOwner } = req.body;

    try { 
        await pool.query("INSERT INTO tbl_pets(type_of_pet, pet_name, date_of_birth, gender, color, breed, size, weight, image_url, idOwner) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
         [type_of_pet, pet_name, date_of_birth, gender, color, breed, size, weight, image_url, idOwner ]);
         res.json({ message: 'Pet registered successfully' });
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "try it again" });
    }
};

// Función para obtener todas las mascotas
export const Get_all_pets = async (req: Request, res: Response) => {
    try {
        const [rows] = await pool.query("SELECT * FROM tbl_pets WHERE idOwner = ?", [req.params.id]);
        res.json(rows);
    } catch (error) {
        console.error(error); // Log the error for debugging
        res.status(500).json({ message: "An error occurred, please try again" });
    }
};

// Función para obtener una mascota por id
export const Get_pet_byId = async (req: Request, res: Response) => {
    try {
        const [rows] = await pool.query("SELECT * FROM tbl_pets WHERE id = ?", { id: req.params.id });
        res.json(rows);
    } catch (error) {
        console.error(error); // Log the error for debugging
        res.status(500).json({ message: "An error occurred, please try again" });
    }
}; 

//Funcion para actualizar
export const Update_pet = async (req: Request) => {
    const { type_of_pet, pet_name, date_of_birth, gender, color, breed, size, weigth, image_url } = req.body;
    const { id } = req.params; 
    
    try {
        await pool.query("UPDATE tbl_pets SET type_of_pet =?, pet_name =?, date_of_birth =?, gender =?, color =?, breed =?, size =?, weigth =?, image_url =? WHERE id =?",
            [type_of_pet, pet_name, date_of_birth, gender, color, breed, size, weigth, image_url, id]);
        return true
        
    } catch (error) {
        console.error(error); // Log the error for debugging
        return false
    }
}

//Funcion para eliminar

export const Delete_pet = async (req: Request) => {
    const { id } = req.params; 
    
    try {
        await pool.query("DELETE FROM tbl_pets WHERE id = ?", [id]);
        return true
        
    } catch (error) {
        console.error(error); // Log the error for debugging
        return false
    }
}