import { Request, Response } from "express";
import { pool } from "../db";
import { createAccessToken } from "../libs/jwt";

//Funcion para registrar
export const Register = async (req: Request, res: Response) => {
  const { name, lastname, email, password, cellphone } = req.body;

  try {
    await pool.query(
      "INSERT INTO tbl_users(name, lastname, email, password, cellphone) VALUES (?, ?, ?, ?, ?)",
      [name, lastname, email, password, cellphone]
    );

    res.json({ message: "User registered successfully" });
  } catch (error) {
    res.status(500).json({ message: "try it again" });
  }
};

//Funcion para iniciar sesion
export const Login = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  try {
    const [rows] = await pool.query(
      "SELECT * FROM tbl_users WHERE email =? and password =?",
      [email, password]
    );

    if ((rows as any[]).length === 0) {
      return res.status(400).json({ message: "Invalid credentials" });
    }
    const userId = (rows as any[])[0].idUser;
    // Creacion del token de acceso
    const token = await createAccessToken({ email });
    // Envio del token en la respuesta
    res.cookie("accessToken", token, { httpOnly: true });
    res.json({ message: "Logged successfully" });
  } catch {
    res.status(401).json({ message: "Invalid credentials" });
  }
};

//Funcion para cerrar sesión
export const logout = async (req: Request, res: Response) => {
    try {
      // Eliminacion de la cookie del token de acceso
      res.clearCookie("accessToken");
      // Respuesta de exito
      return res.status(200).json({ message: "User logged out successfully" });
    } catch (error) {
      // Respuesta de error
      return res.status(500).json({ message: "Error" });
    }
  };