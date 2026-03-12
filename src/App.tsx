import { Button } from "@/components/ui/button"
import { Input} from "@/components/ui/input"

export function App() {
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="flex h-[60vh] w-[70vw] overflow-hidden rounded-4xl shadow-xl">
        <div className="flex-2">
          <div className="h-full w-full bg-[url('src/assets/popmelon-summer-festival.jpg')] bg-cover bg-center"></div>
        </div>

        <div className="flex-1 p-4">
          <Input placeholder="Enter text" />
          <Button size="lg"> Create Your First Event</Button>
          <Button variant="outline" size="lg">
            Create Your First Event
          </Button>
        </div>
      </div>
    </div>
  )
}

export default App
