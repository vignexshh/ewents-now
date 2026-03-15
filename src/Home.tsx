import { Button } from "@/components/ui/button"
import { useNavigate } from "react-router-dom"
import { DisplayLogo } from "@/components/display-logo"

export function Home() {
  const navigate = useNavigate()

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="flex h-[60vh] w-[70vw] flex-col overflow-hidden rounded-4xl border md:flex-row">
        <div className="flex-2">
          <div className="h-full w-full bg-[url('src/assets/auth-page-cover-arts.jpg')] bg-cover bg-center"></div>
        </div>

        <div className="flex flex-1 flex-col justify-between p-4">
          <div className="mt-8 flex flex-col gap-4">
            <h2 className="text-2xl font-bold">Welcome Home!</h2>
            <p className="text-muted-foreground">
              You have successfully logged in.
            </p>
            <div>
              <Button onClick={() => navigate("/")} variant="outline" size="lg">
                Log Out
              </Button>
            </div>
          </div>
          <DisplayLogo/>
        </div>
      </div>
    </div>
  )
}

export default Home
