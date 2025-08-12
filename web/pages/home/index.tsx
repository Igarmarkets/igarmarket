import Head from 'next/head'
import { Page } from 'web/components/layout/page'
import { useUser } from 'web/hooks/use-user'
import { useSaveReferral } from 'web/hooks/use-save-referral'
import { Welcome } from 'web/components/onboarding/welcome'

export default function HomePage() {
  const user = useUser()
  useSaveReferral(user)

  return (
    <Page trackPageView={'home page'} className="lg:px-4">
      <Head>
        <title>Igarmarkets — Tu panel</title>
        <meta name="description" content="Panel de usuario de Igarmarkets" />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>

      {/* Banner temporal Igarmarkets */}
      <div className="mx-auto max-w-5xl px-4 py-6">
        <h1 className="text-2xl font-semibold">Igarmarkets</h1>
        <p className="text-gray-500">Tu panel personal</p>
      </div>

      {/* Bienvenida estándar (mantiene la lógica de onboarding existente) */}
      <Welcome />
    </Page>
  )
}
