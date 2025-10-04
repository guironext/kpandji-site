export default function Loading() {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-amber-900 via-orange-900 to-yellow-900">
        <div className="text-center space-y-6">
          <div className="relative">
            <div className="w-20 h-20 border-4 border-amber-400/30 rounded-full animate-spin border-t-amber-400"></div>
            <div className="absolute inset-0 w-20 h-20 border-2 border-amber-600/20 rounded-full animate-ping"></div>
          </div>
          <div className="space-y-2">
            <p className="text-amber-400 font-semibold text-lg">KPANDJI</p>
            <p className="text-gray-300">Chargement en cours...</p>
          </div>
        </div>
      </div>
    );
  }


