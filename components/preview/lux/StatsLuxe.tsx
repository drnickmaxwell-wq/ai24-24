
'use client';
export default function StatsLuxe(){
  const stats=[['3D','Printed Veneers'],['Same-day','Implants & Restorations'],['5★','Patient Reviews'],['Calm','Sedation Available']];
  return (<section style={{padding:'2rem 0'}}>
    <div className="container-luxury" style={{display:'grid',gridTemplateColumns:'repeat(4,1fr)',gap:'12px'}}>
      {stats.map((s,i)=>(<div key={i} className="glass-tile" style={{padding:'16px',textAlign:'center'}}>
        <div style={{color:'var(--turquoise)',fontWeight:700}}>{s[0]}</div><div style={{opacity:.7}}>{s[1]}</div>
      </div>))}
    </div>
  </section>);
}
