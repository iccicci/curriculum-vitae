import type { ReactElement } from "react";
import { Fragment, useEffect } from "react";

const links: { favicon: string; link: string }[] = [
  { favicon: "li.ico", link: "https://www.linkedin.com/in/daniele-icc/" },
  { favicon: "https://github.com/favicon.ico", link: "https://github.com/iccicci" },
  { favicon: "https://cdn.sstatic.net/Sites/stackoverflow/img/favicon.ico", link: "https://stackoverflow.com/users/4690946/daniele-ricci" }
];

const mainSkills: string[] = [
  "TypeScript",
  "JavaScript",
  "Node.js",
  "Docker",
  "PostgreSQL",
  "React.js",
  "WebSocket",
  "cryptos",
  "bash",
  "git",
  "CI / CD",
  "Linux",
  "Embedded Development",
  "C / C++",
  "Assembly",
  "Agile",
  "Problem Solving",
  "Team Leadership"
];

const secondarySkills: string[] = [
  "EVM",
  "Solidity",
  "AWS",
  "IaC",
  "Java",
  "Perl",
  "Python",
  "PHP",
  "MySQL",
  "No SQL DBs",
  "Apache2",
  "REST",
  "TCP/IP",
  "UDP"
];

const experiences: { title: string; company: string; from: Date; to?: Date; content: ReactElement; last?: boolean }[] = [
  {
    company: "IOHK Inc",
    content: (
      <>
        Supported the development of <a href="https://github.com/input-output-hk/cardano-js-sdk">cardano-js-sdk</a>, the back-end for{" "}
        <a href="https://www.lace.io/">Lace</a>, Cardano&apos;s light wallet developed by the <a href="https://cardano.org/">Cardano</a> creators.
        This role significantly deepened my expertise in <b>cryptocurrencies</b> and <b>blockchain technologies</b>, with hands-on experience in
        implementing and optimizing key components of the system.
      </>
    ),
    from:  new Date("2022-05"),
    title: "Senior Back-end Software Engineer"
  },
  {
    company: "TlmPartners Inc",
    content: (
      <>
        Joined as <b>Lead Developer</b> for a web tool (part of a AAA video game project for a client) built with the latest technologies:{" "}
        <b>Node.js</b>, <b>React.js</b>, <b>TypeScript</b> and <b>Docker</b>. After completing the project, I took on the role of leading the
        development of <b>Infrastructure as Code (IaC)</b> and <b>CI/CD systems</b>, gaining extensive knowledge of various <b>AWS services</b> and
        cloud infrastructure management.
      </>
    ),
    from:  new Date("2020-05"),
    title: "Lead Full-stack Software Engineer",
    to:    new Date("2022-04")
  },
  {
    company: "Docomodigital (formerly Buongiorno, formerly DADA) Spa",
    content: (
      <>
        Progressed to lead the <b>online payment systems</b> team, managing <b>credit card</b>, <b>SMS</b> and <b>PayPal</b> transactions. Responsible
        for the <b>design</b>, <b>development</b>, <b>maintenance</b> and <b>high availability</b> of payment platforms{" "}
        <b>handling €100M+ in annual revenue</b>. Additionally, oversaw <b>24/7 monitoring</b> to ensure business continuity and operational
        excellence.
      </>
    ),
    from:  new Date("2004-05"),
    title: "Lead Full-stack Software Engineer",
    to:    new Date("2019-11")
  },
  {
    company: "Esaote Biomedica",
    content: (
      <>
        Contributed to the development of <b>MEGAS</b>, the world&apos;s first ultrasound system capable of real-time image storage in <b>CnTI</b>{" "}
        format. Designed and developed the <b>firmware</b> for the <b>D.A.M. board</b>, written in <b>C++</b> under for <b>Linux</b>, fitting within{" "}
        <b>a single 1.4MB floppy disk</b>. Also specialized in optimizing procedures for <b>electrocardiographs</b>, enhancing performance and
        efficiency.
      </>
    ),
    from:  new Date("2001-01"),
    title: "Embedded Software Engineer",
    to:    new Date("2003-09")
  },
  {
    company: "DADA Spa",
    content: (
      <>
        Contributed to the development of <b>information points</b> used by the <b>City of Florence</b> during the <b>Jubilee celebrations</b>.
        Additionally, collaborated on several major projects for DADA and its top clients, including <b>Supereva</b> (social network), <b>Incontri</b>{" "}
        (dating platform) and <b>La Nazione</b> (online newspaper).
      </>
    ),
    from:  new Date("2000-01"),
    title: "Full-stack Software Engineer",
    to:    new Date("2000-12")
  },
  {
    company: "Telecom Italia Spa",
    content: (
      <>
        Served as <b>Application Lead</b> for Telecom Italia&apos;s <b>New Commercialization Platform</b>, overseeing its development and maintenance.
        Worked extensively with <b>Sun enterprise-class systems</b>, gaining deep expertise in <b>Oracle databases</b> and high-performance enterprise
        architectures.
      </>
    ),
    from:  new Date("1999-09"),
    title: "UNIX System Administrator & Oracle DBA",
    to:    new Date("1999-12")
  },
  {
    company: "Federation of Cooperative Credit Banks of Tuscany",
    content: (
      <>
        Hired to <b>upgrade banking services</b> (cash desk and teller operations) within the <b>core banking system (C++)</b> to support the{" "}
        <b>Euro currency transition</b>. After the successful implementation, took on <b>maintenance</b> and <b>code review</b> responsibilities.
        Leveraged deep <b>Oracle database</b> expertise to optimize critical processes, achieving outstanding performance improvements; most notably
        reducing the &quot;Cash Desk Opening&quot; procedure from ~50 seconds to just 2 seconds.
      </>
    ),
    from:  new Date("1998-04"),
    title: "Software Engineer",
    to:    new Date("1999-08")
  },
  {
    company: "Webservices Srl",
    content: (
      <>
        Joined a <b>small ISP startup</b> (3-person team) at the dawn of the Internet in Italy, taking on dual roles as
        <b>System Administrator</b> and <b>Web Developer</b>. Gained hands-on experience with <b>internet infrastructure</b>, tackling both{" "}
        <b>software development</b> and <b>system administration</b> challenges, laying the foundation for a deep understanding of <b>networking</b>,{" "}
        <b>web technologies</b> and <b>online services</b>.
      </>
    ),
    from:  new Date("1997-08"),
    title: "Software Engineer & System Administrator",
    to:    new Date("1998-03")
  },
  {
    company: "Italian Military Service – Florence Military District",
    content: (
      <>
        Assigned to the <b>Data Processing Unit</b> as a <b>programmer</b> and <b>system administrator</b>, responsible for maintaining the entire{" "}
        <b>network infrastructure and PC systems</b> of the district. Awarded for developing a <b>personal file archiving system</b>, which
        significantly improved <b>logistics and administrative efficiency</b>.
      </>
    ),
    from:  new Date("1996-08"),
    last:  true,
    title: "Corporal",
    to:    new Date("1997-07")
  }
];

const Skills = ({ main, skills }: { main?: boolean; skills: string[] }) => <>
  <span style={{ fontSize: "1.5em", fontWeight: "bold" }}>{main ? "MAIN" : "SECONDARY"} SKILLS</span>
  <hr />
  <span style={{ fontSize: "1.2em", fontWeight: "bold", lineHeight: 1.5 }}>
    {skills.map((skill, i) => <Fragment key={i}>
      {skill}
      <br />
    </Fragment>)}
  </span>
</>;

const printDate = (date: Date) => date.toLocaleDateString("en-US", { month: "long", year: "numeric" });

export const CurriculumVitae = () => {
  useEffect(() => {
    document.querySelectorAll("a").forEach(link => {
      link.setAttribute("target", "_blank");
    });
  }, []);

  return <>
    <div className="page" style={{ pageBreakAfter: "always" }}>
      <div style={{ paddingBottom: 10 }}>
        <span style={{ fontSize: "2.5em", fontWeight: "bold" }}>CURRICULUM VITÆ Daniele Ricci</span>
        <br />
        <span style={{ fontSize: "1.5em", fontWeight: "bold" }}>Lead Full-Stack Developer | 30 Years of Experience | Crypto Enthusiast</span>
      </div>
      <div>
        <div style={{ display: "inline-block", verticalAlign: "top", width: "45%" }}>
          <img src="at.png" className="icon" />
          <a href="mailto:daniele.icc@gmail.com">daniele.icc@gmail.com</a>
          <br />
          <img src="marker.png" className="icon" />
          {"Loc. Arnetolo 9/A 50066 Reggello (FI)"}
          <br />
          <img src="empty.png" className="icon" />
          {"Florence, IT"}
        </div>
        <div style={{ display: "inline-block", verticalAlign: "top", width: "55%" }}>
          {links.map(({ favicon, link }, id) => <div key={id}>
            <img src={favicon} className="icon" />
            <a href={link}>{link}</a>
          </div>)}
        </div>
      </div>
      <br />
      <br />
      <br />
      <div>
        <div style={{ display: "inline-block", paddingRight: 20, verticalAlign: "top", width: "69%" }}>
          <span style={{ fontSize: "1.5em", fontWeight: "bold" }}>SUMMARY</span>
          <hr />
          {
            "Senior full-stack developer with 30 years of experience engineering high-performance, scalable software systems. I bring a pragmatic, cost-conscious approach to software architecture and development, with particular expertise and interest in blockchain and cryptocurrency technologies."
          }
          <br />
          {
            "I leverage modern development practices and AI-powered tools to increase productivity, shorten development cycles, and improve code quality. My engineering philosophy emphasizes simplicity, automation, continuous delivery, and "
          }
          <b>RERO (Release Early, Release Often)</b>
          {" approach to build working software early and refining it through rapid iteration."}
          <br />
          {
            "I aim to deliver solutions that are not only technically sound, but also efficient to develop, economical to operate, and maintainable for the long term."
          }
          <br />
          <br />
          <br />
          <br />
          <span style={{ fontSize: "1.5em", fontWeight: "bold" }}>EDUCATION</span>
          <hr />
          <span style={{ fontSize: "1.3em" }}>Diploma di Perito Industriale Capotecnico Informatico</span>
          <br />
          <span style={{ fontSize: "1.2em" }}>(Technical High School Diploma - Industrial Informatics Specialist)</span>
          <br />
          <span style={{ fontSize: "1.1em" }}>1995 - I.T.I.S. Antonio Meucci - Florence, IT</span>
          <br />
          {"Achieved highest grade in Computer Science."}
          <br />
          <br />
          <br />
          <br />
          <span style={{ fontSize: "1.5em", fontWeight: "bold" }}>LANGUAGES</span>
          <hr />
          <ul>
            <li>
              <b>Italian</b> - Native Speaker
            </li>
            <li>
              <b>English</b> - Advanced (technical discussions: C1/C2, general conversation: B2)
            </li>
          </ul>
          <br />
          <br />
          <br />
          <span style={{ fontSize: "1.5em", fontWeight: "bold" }}>PUBLICATIONS & PROJECTS</span>
          <hr />
          <ul>
            <li>
              {"I have contributed to the open-source community of "}
              <b>Node.js</b>
              {", publishing several modules. The most notable is "}
              <a href="https://github.com/iccicci/rotating-file-stream#readme">rotating-file-stream</a>
              {", with "}
              <b>200K+ downloads per week</b>
              {", officially recommended by "}
              <a href="https://www.npmjs.com/package/morgan#log-file-rotation">morgan</a>
              {", the logging middleware for "}
              <a href="https://expressjs.com/">Express</a>.
            </li>
            <li>
              {"My passion for video games led me to contribute to the development of "}
              <b>EsentarArena</b>
              {", a game built in "}
              <b>C++</b>
              {" with the "}
              <a href="https://developer.valvesoftware.com/wiki/Source">Source Engine</a>
              {". Although the project was never commercialized due to a lack of investors, it provided me with invaluable experience in "}
              <b>real-time network applications</b>
              {". Here is available a "}
              <a href="https://www.youtube.com/watch?v=bX9IkGK3izY">demo video</a>.
            </li>
            <li>
              {"Member of "}
              <a href="https://www.mensa.org/">Mensa International</a>.
            </li>
          </ul>
          <br />
          <br />
          <br />
          <span style={{ fontSize: "1.5em", fontWeight: "bold" }}>HOBBIES & INTERESTS</span>
          <hr />
          {"Passionate about martial arts, role-playing games, video games, film production, and theater acting."}
          <br />
          {"I served as "}
          <b>Production Director</b>
          {" for the film "}
          <a href="https://www.imdb.com/title/tt1874387/">10 ragazze</a>
          {", gaining valuable experience in project management and team coordination also within the creative industry."}
        </div>
        <div style={{ display: "inline-block", verticalAlign: "top", width: "28%" }}>
          <Skills main skills={mainSkills} />
          <br />
          <Skills skills={secondarySkills} />
        </div>
      </div>
    </div>
    <div className="page" style={{ pageBreakAfter: "always" }}>
      <span style={{ fontSize: "1.5em", fontWeight: "bold" }}>PROFESSIONAL EXPERIENCE</span>
      <hr style={{ marginRight: 20 }} />
      {experiences.map(({ company, content, from, last, title, to }, id) => {
        if(! to && id !== 0) throw new Error(`Missing end date for experience: ${company}`);

        return <div key={company}>
          <span style={{ fontSize: "1.3em" }}>{title}</span>
          {" - "}
          <span style={{ fontSize: "1.2em", fontWeight: "bold" }}>{company}</span>
          <br />
          <i>{`${printDate(from)} - ${to ? printDate(to) : "Today"}`}</i>
          <br />
          {content}
          {last ? null : <hr style={{ borderTop: "1px dotted #808080", margin: 9, marginLeft: 40, marginRight: 50 }} />}
        </div>;
      })}
    </div>
  </>;
};
