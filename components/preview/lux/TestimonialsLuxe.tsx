
'use client';
export default function TestimonialsLuxe(){
  const vids=[['Emma','/videos/stories/emma.mp4','I smiled on the same day — it felt like magic.'],['Liam','/videos/stories/liam.mp4','I was so nervous, but they made it easy.']];
  return (<section style={{padding:'2rem 0'}}>
    <div className="container-luxury" style={{display:'grid',gridTemplateColumns:'repeat(2,1fr)',gap:'12px'}}>
      {vids.map((v,i)=>(<div key={i} className="glass-tile">
        <video controls preload="none" style={{width:'100%',height:'260px',objectFit:'cover'}}><source src={v[1]} type="video/mp4"/></video>
        <div style={{padding:'12px'}}><h4 style={{fontWeight:600}}>{v[0]}</h4><p style={{opacity:.75}}>“{v[2]}”</p></div>
      </div>))}
    </div>
  </section>);
}
