import { AboutPage, ContactPage } from "@/components/LinkedPages"

type LinkedPages = "about" | "projects" | "contact" 

export default function LinkedPages({
    params: { LinkedPages },
}: { params: { LinkedPages: LinkedPages } }) {
    return LinkedPages === "about" ? <AboutPage /> :
            LinkedPages === "contact" ? <ContactPage /> :
                    null
} 