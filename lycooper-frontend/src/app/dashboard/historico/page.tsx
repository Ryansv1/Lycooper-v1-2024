import { Flex } from "@chakra-ui/react";
import { FormControl, FormLabel, Input, Button, Select } from "@chakra-ui/react"

export default function Historico(){
    return(
        <Flex className="min-h-screen bg-blue-900 flex justify-center items-center flex-col gap-4">
            <h1 className="text-white text-xl">Histórico de coleta</h1>
            <Flex className="bg-green-400 p-16 rounded-md ">
                    <form action="/api/lycooper/data" method="GET" className="space-y-6">
                        <FormControl isRequired>
                            <FormLabel >Data da coleta</FormLabel>
                            <Input variant="filled" type="date"/>
                        </FormControl>
                        <FormControl isRequired>
                            <FormLabel>Sensor</FormLabel>
                            <Select variant='filled'>
                                <option>pH</option>
                                <option>Temperatura</option>
                                <option>Umidade</option>
                            </Select>
                        </FormControl>
                        <Button className=""type="submit">Pesquisar!</Button>
                    </form>
            </Flex>
        </Flex>
    )
}