
import LogoutBoton from '@/components/auth/logout-boton'
import { auth } from '@/configs/auth/auth'


export default async function AdminPage() {

  const session = await auth()
  if (!session) {
    return (
      <div className="flex items-center justify-center h-screen">
        <h1 className="text-2xl font-bold">No tienes acceso a esta página</h1>
      </div>
    )
  }

  return (
    <>
      <div className="grid auto-rows-min gap-4 md:grid-cols-3">
        <div className="bg-muted/50 aspect-video rounded-xl" />
        <div className="bg-muted/50 aspect-video rounded-xl" />
        <div className="bg-muted/50 aspect-video rounded-xl" />
      </div>
      <div>
        <pre>
          {JSON.stringify(session, null, 2)}
        </pre>
        <LogoutBoton/>
      </div>
      <div className="bg-muted/50 min-h-[100vh] flex-1 rounded-xl md:min-h-min" />
    </>
  )
}
