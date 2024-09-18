import { Request, Response } from "express";
import { pool } from "../db";

export const getHealth = async (req: Request, res: Response) => {
  try {
    const [rows] = await pool.query(
      "SELECT * FROM tbl_health WHERE idOwner = ?",
      req.params.id
    );
    res.json(rows);
  } catch (error) {
    console.log(error)
    res.status(404).json({ message: "Error en el servidor" });
  }
};

export const addHealth = async (req: Request, res: Response) => {
  const { pet_name, date_h, descriptions, idOwner } = req.body;
  try {
    await pool.query(
      "INSERT INTO tbl_health (pet_name, date_h, descriptions, idOwner) VALUES (?, ?, ?, ?)",
      [pet_name, date_h, descriptions, idOwner]
    );
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: error });
  }
};

export const deleteHealth = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    await pool.query("DELETE FROM tbl_health WHERE id =?", id);
  } catch (error) {
    res.status(404).json({ error: error });
  }
};
