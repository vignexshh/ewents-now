import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom"
import { Home } from "@/Home"

import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field.tsx"

function Login() {
  const navigate = useNavigate()
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="flex h-[60vh] w-[70vw] flex-col overflow-hidden rounded-4xl border md:flex-row">
        <div className="flex-2">
          <div className="h-full w-full bg-[url('src/assets/auth-page-cover-arts.jpg')] bg-cover bg-center"></div>
        </div>

        <div className="flex-1 p-4">
          <div>
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="fieldgroup-name">Login</FieldLabel>
                <Input id="fieldgroup-name" placeholder="Jordan Lee" />
              </Field>
              <Field>
                <Input
                  id="fieldgroup-email"
                  type="email"
                  placeholder="name@example.com"
                />
                <FieldDescription>
                  <p className="text-sm">By logging in and using EwentsNow, you agree to our Terms of
                    Service and Privacy Policy, and confirm that you are at least
                    18 years old.</p>
                </FieldDescription>
              </Field>
              <Field orientation="horizontal">
                <Button variant="outline" size="lg">
                  Forgot password?
                </Button>
                <Button onClick={() => navigate("/home")} type="submit" size="lg">
                  Submit
                </Button>
              </Field>
            </FieldGroup>
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

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
