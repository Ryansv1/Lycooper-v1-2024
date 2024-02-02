import { Poppins } from 'next/font/google'

const poppins = Poppins({
    weight: ['800'],
    variable: '--font-poppins',
    subsets: ['latin']
})

export const fonts = {
    poppins
}