
'use client';
export default function FaqLuxe(){
  const faqs=[['Do you offer same-day appointments?','We do our best for urgent cases. Call 01273 453109.'],['Do you provide Spark Aligners?','Yes. We plan treatments in-house with digital scans.'],['Is there parking?','Yes, parking is available nearby on St Mary’s Road.'],['Is sedation available?','Sedation can be arranged after assessment.']];
  return (<section style={{padding:'2rem 0'}}>
    <div className="container-luxury glass-tile" style={{padding:'10px 0'}}>
      {faqs.map((f,i)=>(<details key={i} style={{padding:'10px 16px'}}><summary style={{fontWeight:600,cursor:'pointer'}}>{f[0]}</summary><p style={{opacity:.75,marginTop:'6px'}}>{f[1]}</p></details>))}
    </div>
  </section>);
}
