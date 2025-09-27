
'use client';
export default function FeaturesLuxe(){
  const items=[
    ['3D Printed Veneers','Same-day smile design & fabrication.'],
    ['Same-day Implants','When suitable, placement + restoration in a day.'],
    ['Calm & Comfortable','Sedation options with a gentle approach.'],
    ['5★ Stories','Real transformations, told in their words.']
  ];
  return (<section style={{padding:'2rem 0'}}>
    <div className="container-luxury" style={{display:'grid',gridTemplateColumns:'repeat(4,1fr)',gap:'12px'}}>
      {items.map((it,i)=>(<div key={i} className="glass-tile" style={{padding:'16px'}}>
        <h3 style={{fontWeight:600}}>{it[0]}</h3>
        <p style={{opacity:.75,marginTop:'6px'}}>{it[1]}</p>
      </div>))}
    </div>
  </section>);
}
