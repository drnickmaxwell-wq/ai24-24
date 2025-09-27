
'use client';
export default function FooterLuxe(){
  return (<footer style={{marginTop:'2rem'}}>
    <div style={{height:'24px',background:'linear-gradient(to top, var(--ink-2), transparent)'}}/>
    <div style={{position:'relative',background:'var(--ink-2)',color:'#fff'}}>
      <div style={{position:'absolute',left:'-80px',top:'-80px',width:'340px',height:'340px',borderRadius:'9999px',filter:'blur(60px)',background:'radial-gradient(closest-side, rgba(64,196,180,.35), transparent)'}}/>
      <div style={{position:'absolute',right:'-100px',bottom:'-100px',width:'420px',height:'420px',borderRadius:'9999px',filter:'blur(70px)',background:'radial-gradient(closest-side, rgba(194,24,91,.28), transparent)'}}/>
      <div className="container-luxury" style={{position:'relative',padding:'20px 0',borderTop:'1px solid rgba(212,175,55,.25)'}}>
        <div style={{opacity:.8,fontSize:'14px'}}>© {new Date().getFullYear()} St Mary’s House Dental Care — Shoreham-by-Sea</div>
      </div>
    </div>
  </footer>);
}
