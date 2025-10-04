'use client'

import React, { useState, useEffect } from 'react'
import { 
  getOffresExceptionnelles, updateOffreStatus,
  getOffresSpeciales, updateOffreSpecialeStatus,
  getReservations, updateReservationStatus,
  getFacturesProforma, updateFactureProformaStatus,
  getCommandesAccessoires, updateCommandeAccessoireStatus,
  getContacts, updateContactStatus
} from '@/lib/actions/offres'

type DataItem = {
  id: string
  createdAt: Date
  status: string
  [key: string]: unknown
}

const AdminPage = () => {
  const [selectedItem, setSelectedItem] = useState('offre exceptionnelle')
  const [data, setData] = useState<DataItem[]>([])
  const [loading, setLoading] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const menuItems = [
    'Offre Exceptionnelle',
    'Offre Speciale',
    'Reservation',
    'Facture Proforma',
    'Commandes Accessoire',
    'Contact'
  ]

  const fetchData = async (menuItem: string) => {
    setLoading(true)
    let result
    switch (menuItem) {
      case 'offre exceptionnelle':
        result = await getOffresExceptionnelles()
        break
      case 'offre speciale':
        result = await getOffresSpeciales()
        break
      case 'reservation':
        result = await getReservations()
        break
      case 'facture proforma':
        result = await getFacturesProforma()
        break
      case 'commandes accessoire':
        result = await getCommandesAccessoires()
        break
      case 'contact':
        result = await getContacts()
        break
      default:
        result = { success: false }
    }
    
    if (result.success) {
      const sortedData = (result.data || []).sort((a: DataItem, b: DataItem) => {
        if (a.status === 'pending' && b.status !== 'pending') return -1
        if (a.status !== 'pending' && b.status === 'pending') return 1
        return 0
      })
      setData(sortedData)
    }
    setLoading(false)
  }

  useEffect(() => {
    fetchData(selectedItem)
  }, [selectedItem])

  const getStatusBadge = (status: string) => {
    const colors = {
      pending: 'bg-yellow-500/20 text-yellow-300 border-yellow-500/50',
      vue: 'bg-blue-500/20 text-blue-300 border-blue-500/50',
      approved: 'bg-green-500/20 text-green-300 border-green-500/50',
      rejected: 'bg-red-500/20 text-red-300 border-red-500/50'
    }
    return colors[status as keyof typeof colors] || colors.pending
  }

  const handleMarkAsVue = async (id: string, menuItem: string) => {
    let result
    switch (menuItem) {
      case 'offre exceptionnelle':
        result = await updateOffreStatus(id, 'vue')
        break
      case 'offre speciale':
        result = await updateOffreSpecialeStatus(id, 'vue')
        break
      case 'reservation':
        result = await updateReservationStatus(id, 'vue')
        break
      case 'facture proforma':
        result = await updateFactureProformaStatus(id, 'vue')
        break
      case 'commandes accessoire':
        result = await updateCommandeAccessoireStatus(id, 'vue')
        break
      case 'contact':
        result = await updateContactStatus(id, 'vue')
        break
      default:
        result = { success: false }
    }
    
    if (result.success) {
      const updatedData = data.map(item => 
        item.id === id ? { ...item, status: 'vue' } : item
      ).sort((a, b) => {
        if (a.status === 'pending' && b.status !== 'pending') return -1
        if (a.status !== 'pending' && b.status === 'pending') return 1
        return 0
      })
      setData(updatedData)
    }
  }

  const renderCard = (item: DataItem) => {
    return (
      <div 
        key={item.id} 
        className={`backdrop-blur-sm p-4 md:p-6 rounded-xl border transition-all duration-300 shadow-lg hover:shadow-xl ${
          item.status === 'vue' 
            ? 'bg-gradient-to-br from-blue-900/30 to-blue-800/20 border-blue-500/30 hover:border-blue-500/50'
            : 'bg-gradient-to-br from-white/10 to-white/5 border-white/20 hover:border-white/40'
        }`}
      >
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-2">
          <h3 className="text-xl font-semibold text-white">
            {(item.vehicule as string) || (item.voiture as string) || (item.carName as string) || (item.subject as string) || 'Entrée'}
          </h3>
          <div className="flex items-center gap-2">
            {item.status !== 'vue' && (
              <button
                onClick={() => handleMarkAsVue(item.id, selectedItem)}
                className="px-3 py-1 rounded-full text-xs font-medium bg-blue-500/20 text-blue-300 border border-blue-500/50 hover:bg-blue-500/30 transition-all"
              >
                Vue
              </button>
            )}
            <span className={`px-3 py-1 rounded-full text-xs font-medium border w-fit ${getStatusBadge(item.status)}`}>
              {item.status.toUpperCase()}
            </span>
          </div>
        </div>

        {/* Special fields for Offre Exceptionnelle */}
        {!!item.prixPromotionnel && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4 p-4 bg-white/5 rounded-lg">
            <div>
              <p className="text-gray-400 text-xs mb-1">Prix Promotionnel</p>
              <p className="text-lg font-bold text-green-400">{item.prixPromotionnel as string}</p>
            </div>
            <div>
              <p className="text-gray-400 text-xs mb-1">Remise</p>
              <p className="text-lg font-bold text-yellow-400">{item.remise as string}</p>
            </div>
          </div>
        )}

        {/* Contact Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-4">
          <div className="bg-white/5 p-3 rounded-lg">
            <p className="text-gray-400 text-xs mb-1">Nom</p>
            <p className="text-white font-medium truncate">{(item.name as string) || (item.nom as string)}</p>
          </div>
          {!!item.prenoms && (
            <div className="bg-white/5 p-3 rounded-lg">
              <p className="text-gray-400 text-xs mb-1">Prénoms</p>
              <p className="text-white font-medium truncate">{item.prenoms as string}</p>
            </div>
          )}
          {!!item.prenom && (
            <div className="bg-white/5 p-3 rounded-lg">
              <p className="text-gray-400 text-xs mb-1">Prénom</p>
              <p className="text-white font-medium truncate">{item.prenom as string}</p>
            </div>
          )}
          <div className="bg-white/5 p-3 rounded-lg">
            <p className="text-gray-400 text-xs mb-1">Email</p>
            <p className="text-white text-sm truncate">{item.email as string}</p>
          </div>
          <div className="bg-white/5 p-3 rounded-lg">
            <p className="text-gray-400 text-xs mb-1">Téléphone</p>
            <p className="text-white font-medium">{item.phone as string}</p>
          </div>
          {!!item.date && (
            <div className="bg-white/5 p-3 rounded-lg">
              <p className="text-gray-400 text-xs mb-1">Date</p>
              <p className="text-white font-medium">{item.date as string}</p>
            </div>
          )}
        </div>

        {/* Message */}
        <div className="bg-white/5 p-4 rounded-lg mb-3">
          <p className="text-gray-400 text-xs mb-2">Message</p>
          <p className="text-white text-sm leading-relaxed">{item.message as string}</p>
        </div>

        {/* Date */}
        <div className="flex items-center justify-between text-xs text-gray-500 pt-3 border-t border-white/10">
          <span>ID: {item.id.slice(0, 8)}...</span>
          <span>{new Date(item.createdAt).toLocaleString('fr-FR')}</span>
        </div>
      </div>
    )
  }

  const renderContent = () => {
    const titles = {
      'offre exceptionnelle': 'Offre Exceptionnelle',
      'offre speciale': 'Offre Speciale',
      'reservation': 'Reservation',
      'facture proforma': 'Facture Proforma',
      'commandes accessoire': 'Commandes Accessoire',
      'contact': 'Contact'
    }

    return (
      <div className="text-white">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl md:text-3xl font-bold">{titles[selectedItem as keyof typeof titles]}</h2>
          <span className="bg-white/10 px-4 py-2 rounded-full text-sm">
            {data.length} entrée{data.length !== 1 ? 's' : ''}
          </span>
        </div>
        
        {loading ? (
          <div className="flex flex-col items-center justify-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white"></div>
            <p className="mt-4 text-gray-400">Chargement...</p>
          </div>
        ) : data.length === 0 ? (
          <div className="text-center py-12 bg-white/5 rounded-lg border border-white/10">
            <p className="text-gray-400 text-lg">Aucune donnée disponible</p>
          </div>
        ) : (
          <div className="grid gap-4 md:gap-6 max-h-[calc(100vh-300px)] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-transparent">
            {data.map((item) => renderCard(item))}
          </div>
        )}
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 p-4 md:p-8">
      <div className="max-w-7xl mx-auto mt-8 md:mt-16">
        <div className="flex items-center justify-between mb-6 md:mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-white">Admin Dashboard</h1>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-white p-2 bg-white/10 rounded-lg"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        <div className="bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 flex flex-col md:flex-row min-h-[600px]">
          <nav className={`${mobileMenuOpen ? 'block' : 'hidden'} md:block w-full md:w-64 border-b md:border-b-0 md:border-r border-white/20 p-4 md:p-6`}>
            <ul className="space-y-2">
              {menuItems.map((item) => (
                <li key={item}>
                  <button
                    onClick={() => {
                      setSelectedItem(item.toLowerCase())
                      setMobileMenuOpen(false)
                    }}
                    className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-200 ${
                      selectedItem === item.toLowerCase()
                        ? 'bg-white/20 text-white font-semibold shadow-lg'
                        : 'text-gray-300 hover:bg-white/10 hover:text-white'
                    }`}
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex-1 p-4 md:p-8 overflow-hidden">
            {renderContent()}
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminPage