
'use client'
import React, { useEffect, useState } from 'react'
import { Button } from '@/components/ui/buttons'
import type { CookieConsentProps } from '@/types/design'

export function CookieBanner({ onAccept, onDecline, onCustomize, position='bottom', theme='light' }: CookieConsentProps){
  const [isVisible,setIsVisible]=useState(false); const [showDetails,setShowDetails]=useState(false)
  const [preferences,setPreferences]=useState({necessary:true,analytics:false,marketing:false,functional:false})
  useEffect(()=>{ const c=localStorage.getItem('cookie-consent'); if(!c) setIsVisible(true)},[])
  const save=(prefs:any)=>{ localStorage.setItem('cookie-consent', JSON.stringify({...prefs,timestamp:new Date().toISOString()})); setIsVisible(false) }
  const acceptAll=()=>{ save({necessary:true,analytics:true,marketing:true,functional:true}); onAccept?.() }
  const declineAll=()=>{ save({necessary:true,analytics:false,marketing:false,functional:false}); onDecline?.() }
  const savePrefs=()=>{ save(preferences); onCustomize?.() }
  if(!isVisible) return null
  const pos = position==='top' ? 'top-0 left-0 right-0' : 'bottom-0 left-0 right-0'
  const themeCls = theme==='dark' ? 'bg-gray-900 border-gray-700 text-white' : 'bg-white border-gray-200 text-gray-900'
  return (<div className={`fixed ${pos} z-50 border-t ${themeCls} shadow-lg`}>
    <div className="container mx-auto p-6">{!showDetails?(
      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
        <div className="flex-1"><h3 className="font-semibold text-lg mb-2">We value your privacy</h3>
          <p className="text-sm opacity-90">We use cookies to enhance your experience, personalise content, and analyse traffic.</p></div>
        <div className="flex flex-wrap gap-3">
          <Button variant="outline" size="sm" onClick={()=>setShowDetails(true)}>Customize</Button>
          <Button variant="ghost" size="sm" onClick={declineAll}>Decline All</Button>
          <Button variant="primary" size="sm" onClick={acceptAll}>Accept All</Button>
        </div>
      </div>
    ):(
      <div className="max-w-2xl mx-auto">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-semibold text-lg">Cookie Preferences</h3>
          <button onClick={()=>setShowDetails(false)} className="text-2xl opacity-60 hover:opacity-100">×</button>
        </div>
        {['analytics','marketing','functional'].map(k=>(
          <div key={k} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg mb-3">
            <div><h4 className="font-medium mb-1" style={{textTransform:'capitalize'}}>{k} cookies</h4>
              <p className="text-sm opacity-75">Enable {k} cookies for improved experience.</p></div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" checked={(preferences as any)[k]}
                onChange={(e)=>setPreferences(p=>({...p, [k]: e.target.checked}))}/>
              <div className="w-11 h-6 bg-gray-200 rounded-full peer-checked:bg-primary after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:after:translate-x-full"/>
            </label>
          </div>
        ))}
        <div className="flex flex-wrap gap-3 justify-end">
          <Button variant="ghost" size="sm" onClick={declineAll}>Decline All</Button>
          <Button variant="outline" size="sm" onClick={savePrefs}>Save Preferences</Button>
          <Button variant="primary" size="sm" onClick={acceptAll}>Accept All</Button>
        </div>
      </div>
    )}</div></div>)
}
