import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Home } from "@/Home"
import { DisplayLogo } from "@/components/display-logo"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"
import { type FormEvent, useState } from "react"
import { Login06 } from "@/components/login-06";
function Login() {
  const [formData, setFormData] = useState({email:'', password:'' });

  const handleSubmit = async () => {
    const response = await fetch("http://127.0.0.1:8000/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
    const result = await response.json()
    alert(result)
  }

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="flex h-[60vh] w-[70vw] flex-col overflow-hidden rounded-4xl border md:flex-row">
        <div className="flex-2">
          <div className="h-full w-full bg-[url('src/assets/auth-page-cover-arts.jpg')] bg-cover bg-center" />
        </div>

        <div className="flex-1 p-4">
          <div>
            <form>
              <FieldGroup>
                <Field>
                  <FieldLabel htmlFor="email">Login</FieldLabel>
                  <Input
                    id="email"
                    placeholder="jordan@mail.com"
                    type="email"
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                  />
                </Field>

                <Field>
                  <Input
                    id="password"
                    type="password"
                    placeholder="some-password"
                    onChange={(e) =>
                      setFormData({ ...formData, password: e.target.value })
                    }
                  />
                  <FieldDescription>
                    <p className="text-sm">
                      By logging in and using EwentsNow, you agree to our Terms
                      of Service and Privacy Policy, and confirm that you are at
                      least 18 years old.
                    </p>
                  </FieldDescription>
                </Field>

                <Field orientation="horizontal">
                  <Button variant="outline" size="lg" type="button">
                    Forgot password?
                  </Button>
                  <Button
                    onClick={handleSubmit}
                    type="submit" size="lg">
                    Submit
                  </Button>
                </Field>
              </FieldGroup>
            </form>
          </div>
          <DisplayLogo />
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
