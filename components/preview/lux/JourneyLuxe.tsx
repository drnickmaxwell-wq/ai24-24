
'use client';
export default function JourneyLuxe(){
  const steps=[['Step 1','3D Diagnostics','Digital scans & planning'],['Step 2','Guided Placement','Predictable, precise surgery'],['Step 3','Same-day Restoration','Provisional smile (when suitable)'],['Step 4','Final Smile','Refinement & review']];
  return (<section style={{padding:'2rem 0'}}>
    <div className="container-luxury" style={{display:'grid',gridTemplateColumns:'repeat(4,1fr)',gap:'12px'}}>
      {steps.map((s,i)=>(<div key={i} className="glass-tile" style={{padding:'16px'}}>
        <div style={{color:'var(--turquoise)',fontWeight:700}}>{s[0]}</div>
        <h4 style={{marginTop:'4px',fontWeight:600}}>{s[1]}</h4>
        <p style={{opacity:.75,marginTop:'6px'}}>{s[2]}</p>
      </div>))}
    </div>
  </section>);
}
