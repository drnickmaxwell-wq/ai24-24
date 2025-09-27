
'use client';
export default function HeroLuxe(){
  return (<section className="relative" style={{padding:'3rem 0', background:'#111'}}>
    <div className="container-luxury">
      <h1 className="lux-gradient" style={{fontSize:'48px',fontWeight:800}}>Luxury dental care by the sea</h1>
      <p style={{color:'#eee',marginTop:'10px',maxWidth:'700px'}}>Advanced 3D dentistry, same-day veneers & implants, and a calm, patient-first experience.</p>
      <div style={{marginTop:'16px',display:'flex',gap:'12px'}}>
        <a className="lux-gold-sparkle" href="/contact" style={{padding:'12px 20px',borderRadius:'999px',color:'#fff',background:'linear-gradient(90deg,var(--magenta),var(--turquoise))'}}>Book a 3D assessment</a>
        <a className="lux-gold-sparkle" href="/patient-info/stories" style={{padding:'12px 20px',borderRadius:'999px',color:'#fff',background:'linear-gradient(90deg,var(--magenta),var(--turquoise))'}}>Watch patient stories</a>
      </div>
    </div>
    <div style={{height:'24px',background:'linear-gradient(to bottom, transparent, #fff)'}}/>
  </section>);
}
