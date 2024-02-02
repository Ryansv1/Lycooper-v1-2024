import { Button, Flex } from "@chakra-ui/react"
import Form from "@/components/form"
import Link from "next/link"
import { FormEventHandler, useState } from "react"

export default function Login(){

    return( 
        <Flex className="flex flex-col sm:flex-row gap-4 drop-shadow-md text-black text-center font-poppins">
        <Flex className="flex-col justify-center items-center bg-gradient-to-tr from-blue-500 to bg-green-300 p-12 m-4 rounded-md">
            <Form />
        </Flex>
        <Flex className="flex-col justify-center items-center gap-8 bg-gradient-to-tr from-blue-500 to bg-green-300 p-12 m-4 mb-8 sm:mb-4 rounded-md">
            <h1>Bem-vindo ao Lycooper</h1>
            <h3>Não tem uma conta? Faça seu cadastro clicando abaixo!</h3>
            <Link href="/auth/signup">
                <Button>Cadastre-se!</Button>
            </Link>
        </Flex>
    </Flex>
    )
}