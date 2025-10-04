import { SignUp } from '@clerk/nextjs'

const SignupPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-amber-900 via-orange-900 to-yellow-900">
      <div className="max-w-md w-full mx-4">
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-2xl border border-white/20">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-white mb-2">Create Account</h1>
            <p className="text-white/80">Join us to get started</p>
          </div>
          <SignUp 
            routing="hash"
            appearance={{
              elements: {
                formButtonPrimary: 'bg-amber-600 hover:bg-amber-700 text-white',
                card: 'bg-transparent shadow-none',
                headerTitle: 'text-white',
                headerSubtitle: 'text-white/80',
                socialButtonsBlockButton: 'bg-white/10 border-white/20 text-white hover:bg-white/20',
                formFieldInput: 'bg-white/10 border-white/20 text-white placeholder-white/60',
                footerActionLink: 'text-amber-400 hover:text-amber-300',
                identityPreviewText: 'text-white/80',
                formFieldLabel: 'text-white/90'
              }
            }}
            redirectUrl="/entretien/onboarding"
          />
        </div>
      </div>
    </div>
  )
}

export default SignupPage
