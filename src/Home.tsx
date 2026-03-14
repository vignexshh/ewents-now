import { Button } from "@/components/ui/button"
import { useNavigate } from "react-router-dom"

export function Home() {
  const navigate = useNavigate()

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="flex h-[60vh] w-[70vw] flex-col overflow-hidden rounded-4xl border md:flex-row">
        <div className="flex-2">
          <div className="h-full w-full bg-[url('src/assets/auth-page-cover-arts.jpg')] bg-cover bg-center"></div>
        </div>

        <div className="flex-1 p-4 flex flex-col justify-between">
          <div className="flex flex-col gap-4 mt-8">
            <h2 className="text-2xl font-bold">Welcome Home!</h2>
            <p className="text-muted-foreground">You have successfully logged in.</p>
            <div>
              <Button onClick={() => navigate("/")} variant="outline" size="lg">
                Log Out
              </Button>
            </div>
          </div>
          <div className="hidden h-48 w-full items-end justify-end sm:flex">
            <div className="flex items-center justify-end gap-0.5">
              <img
                src="/src/assets/tickets.png"
                alt="icon"
                className="h-8 w-8 object-contain"
              />
              <h1 className="scroll-m-20 text-left text-3xl font-semibold tracking-tight text-balance">
                ewents
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
