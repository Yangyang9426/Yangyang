import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ArrowDownRight, ArrowUpRight, Mail, MoveDownRight, Phone, Play, Plus, Sparkles } from 'lucide-react'
import './styles.css'

const projects = [
  { title: '知识 IP 直播操盘', label: '直播增长 / 2025', image: '/media/project-01.jpg', className: 'project-wide', stat: '2,000+', note: '单场自然流在线' },
  { title: '短视频内容矩阵', label: '账号孵化 / 2024', image: '/media/project-02.jpg', className: 'project-tall', stat: '30%', note: 'AI 提效增长' },
  { title: '直播间视觉搭建', label: '直播制作 / 2024', image: '/media/project-03.png', className: 'project-standard', stat: 'ROI 3.0+', note: '稳定投放回报' },
]

const skills = [
  ['01', 'IP 全案操盘', '从人设定位、内容矩阵到直播变现，搭建可复用的增长路径。'],
  ['02', '短视频增长', '选题、脚本、拍摄、剪辑与复盘，让内容持续服务于业务。'],
  ['03', '直播转化', '人、货、场系统搭建，优化节奏、话术、投放与转化。'],
  ['04', 'AI 效率化', '将 AI 数字人、文生视频、智能剪辑融入内容生产链路。'],
]

function App() {
  return <main>
    <section className="hero" id="home">
      <img className="hero-poster" src="/media/portrait.jpg" alt="" aria-hidden="true" />
      <video className="hero-video" autoPlay muted loop playsInline poster="/media/portrait.jpg">
        <source src="/media/hero-video.qt" type="video/quicktime" />
      </video>
      <div className="hero-shade" />
      <div className="shell hero-inner">
        <nav><a className="brand" href="#home">ZHAO<span>JUN</span></a><div className="nav-links"><a href="#about">关于我</a><a href="#projects">精选项目</a><a href="#strengths">个人优势</a></div><a className="nav-contact" href="#contact">联系合作 <ArrowUpRight size={17}/></a></nav>
        <div className="hero-content">
          <p className="eyebrow"><i /> IP OPERATOR · SHORT VIDEO INSTRUCTOR</p>
          <h1>把内容做成<br/><em>增长的</em>生意</h1>
          <p className="hero-desc">IP操盘手 / 短视频讲师<br/>从 0 到 1，为每一个好内容找到商业答案。</p>
          <a className="round-link" href="#projects"><span>探索作品</span><ArrowDownRight size={28}/></a>
        </div>
        <div className="hero-bottom"><span>BEIJING · CHINA</span><span>SCROLL TO EXPLORE <MoveDownRight size={16}/></span><span>©2026 ZHAO JUN</span></div>
      </div>
    </section>

    <section className="about section" id="about"><div className="shell">
      <div className="section-label">01 / ABOUT ME</div>
      <div className="about-grid">
        <div className="portrait-wrap"><img src="/media/portrait.jpg" alt="赵峻形象照"/><div className="portrait-tag">IP<br/>OPERATOR</div></div>
        <div className="about-copy"><p className="intro-kicker">你好，我是赵峻</p><h2>懂内容，也懂<br/><em>生意的增长。</em></h2><p className="body-copy">深耕抖音、视频号双平台，拥有央视综艺节目后期与教育 IP 操盘经验。擅长将人设定位、内容矩阵、直播变现串成一条完整的商业闭环。</p><p className="body-copy">我相信：好内容不止被看见，更应该带来真实的增长。</p><div className="contact-line"><a href="mailto:1254052739@qq.com"><Mail size={17}/>1254052739@qq.com</a><a href="tel:18581614953"><Phone size={17}/>185 8161 4953</a></div></div>
        <div className="data-grid"><div><b>200<span>W+</span></b><p>累计操盘全域 GMV</p></div><div><b>2,000<span>+</span></b><p>单场最高自然流在线</p></div><div><b>380<span>+</span></b><p>单场最高成交单量</p></div><div><b>3.0<span>+</span></b><p>稳定投放 ROI</p></div></div>
      </div>
    </div></section>

    <section className="projects section" id="projects"><div className="shell">
      <div className="title-row"><div><div className="section-label">02 / SELECTED WORK</div><h2>精选<span>项目</span></h2></div><p>从内容表达，到增长结果。<br/>一些正在发生的作品。</p></div>
      <div className="project-grid">{projects.map((project, index) => <article className={`project-card ${project.className}`} key={project.title}><img src={project.image} alt={project.title}/><div className="card-veil"/><div className="project-top"><span>0{index + 1}</span><span>{project.label}</span></div><div className="play"><Play size={19} fill="currentColor"/></div><div className="project-info"><h3>{project.title}</h3><div><b>{project.stat}</b><span>{project.note}</span></div></div></article>)}</div>
    </div></section>

    <section className="strengths section" id="strengths"><div className="shell"><div className="strength-head"><div><div className="section-label">03 / WHAT I DO</div><h2>我的<span>优势</span></h2></div><Sparkles size={46}/></div><div className="skill-grid">{skills.map(([number,title,text]) => <article className="skill-card" key={number}><span>{number}</span><Plus size={22}/><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>

    <section className="contact" id="contact"><div className="contact-lines"/><div className="shell contact-inner"><div className="section-label">04 / LET'S CONNECT</div><p className="contact-lead">如果你也相信内容的力量，</p><h2>一起做点<span>有结果的事。</span></h2><div className="contact-options"><a href="mailto:1254052739@qq.com"><span>EMAIL</span><strong>1254052739@qq.com</strong><ArrowUpRight size={23}/></a><a href="tel:18581614953"><span>PHONE</span><strong>185 8161 4953</strong><ArrowUpRight size={23}/></a></div><footer><a className="brand" href="#home">ZHAO<span>JUN</span></a><span>IP OPERATOR · SHORT VIDEO INSTRUCTOR</span><span>©2026</span></footer></div></section>
  </main>
}

createRoot(document.getElementById('root')).render(<StrictMode><App /></StrictMode>)
