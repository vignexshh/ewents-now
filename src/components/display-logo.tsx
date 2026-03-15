export function DisplayLogo(){
  return (
    <div className="hidden h-48 w-full items-end justify-end sm:flex">
      <div className="flex items-center justify-end gap-1">
        <img
          src="src/assets/ewents-logo.png"
          alt="icon"
          className="h-8 w-8 object-contain"
        />
        <h1 className="scroll-m-20 text-left text-3xl font-sans tracking-tight text-balance">
          repodrop
        </h1>
      </div>
    </div>
  )
}
