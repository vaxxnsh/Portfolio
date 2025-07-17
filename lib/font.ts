import { Outfit, Montserrat, Poppins, Raleway } from "next/font/google";

export const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const poppings = Poppins({
    variable : "--font-poppings",
    subsets : ['latin'],
    weight : "500"
})
export const raleway = Raleway({
    variable : "--font-raleway",
    subsets : ['latin'],
    weight : ['500']
})