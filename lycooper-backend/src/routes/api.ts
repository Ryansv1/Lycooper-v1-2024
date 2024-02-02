import fastify, { FastifyInstance } from "fastify";
import { prismaConnection } from "../lib/prisma";

export async function apiRoutes(app: FastifyInstance){
    app.get("/collect", async (req, res) =>{
        console.log("aaaa")
    })
}