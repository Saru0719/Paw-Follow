import { Request, Response } from 'express';
import { pool } from '../db';

//Funcion para registrar
export const Register = async (req: Request, res: Response) => {
    const { name, lastname, email, password, cellphone } = req.body;

    try { 
        await pool.query("INSERT INTO tbl_users(name, lastname, email, password, cellphone) VALUES (?, ?, ?, ?, ?)",
         [name, lastname, email, password, cellphone]);
         res.json({ message: 'User registered successfully' });
    } catch (error) {
        res.status(500).json({ message: "try it again" });
    }
};

//Funcion para iniciar sesion
export const Login = async (req: Request, res: Response) => {
    const { email, password } = req.body;

    try {
        await pool.query("SELECT * FROM tbl_users WHERE email =? and password =?", [email, password]);
        res.json({ message: 'Login successful' });
    }catch{
        res.status(401).json({ message: 'Invalid credentials' });
    }
};