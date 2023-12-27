type LinkedPages = "about" | "projects" | "contact" | "resume"

export default function LinkedPages({
    params: { linkedPages },
}: { params: { linkedPages: LinkedPages } }) {
    return (<main>{linkedPages}</main>)
}