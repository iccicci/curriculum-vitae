import type { ReactElement } from "react";
import { useEffect } from "react";

const links = ["https://linkedin.com/in/daniele-icc", "https://github.com/iccicci", "https://stackoverflow.com/users/4690946/daniele-ricci"];

const skills: { [key: string]: string[] } = {
  /* eslint-disable perfectionist/sort-objects */
  Programming:  ["TypeScript", "JavaScript", "C/C++", "Assembly", "Python", "Java", "PHP"],
  "Full-stack": ["Node.js", "React.js", "API", "REST", "WebSocket", "HTML", "CSS"],
  Infra:        ["Linux", "bash", "Docker", "git", "CI/CD", "Infrastructure as Code (IaC)", "AWS", "High Availability", "Observability"],
  Data:         ["PostgreSQL", "MySQL", "Oracle", "Stored Procedures", "NoSQL"],
  "AI tools":   ["Cursor AI", "ChatGPT", "Claude"],
  Blockchain:   ["EVM", "Solidity", "Cardano", "UTxO", "Smart Contracts", "dApps"],
  Leadership:   ["Technical Leadership", "Team Management", "Mentoring"],
  "3D Engines": ["Source Engine", "Unreal Engine", "Unity"],
  Other:        ["Embedded Development", "Problem Solving", "Performance Optimization", "Costs Optimization"]
  /* eslint-enable perfectionist/sort-objects */
};

const experiences: { title: string; company: string; from: Date; to?: Date; bullets?: ReactElement[] }[] = [
  {
    bullets: [
      <>
        Improved the <b>React.js</b> client responsiveness for <a href="https://www.lace.io/">Lace</a>, Cardano&apos;s light wallet developed by the{" "}
        <a href="https://cardano.org/">Cardano</a> creators, deepening expertise in <b>cryptocurrencies</b> and <b>blockchain technologies</b>.
      </>,
      <>
        Maintained the <b>Node.js</b> Lace back-end with a focus on <b>high availability</b> and <b>observability</b>.
      </>,
      <>
        Led <b>PostgreSQL</b> database development and optimization, redesigning <b>indexes</b>, <b>queries</b>, query domains and orderings for
        better performance.
      </>,
      <>
        Redesigned tip-sync from REST polling every 20 seconds (more than 99% of responses were no-change) to an <b>event-driven WebSocket</b>{" "}
        architecture that pushes only client-relevant updates when new blocks are added.
      </>,
      <>
        Cut <b>AWS</b> infrastructure costs by approximately <b>80%</b> through the performance and architecture improvements above.
      </>,
      <>
        Developed and maintained <a href="https://github.com/input-output-hk/cardano-js-sdk">cardano-js-sdk</a>, distributed as an <b>open-source</b>{" "}
        project and powering the Lace back-end.
      </>
    ],
    company: "IOHK Inc",
    from:    new Date("2022-05"),
    title:   "Senior Back-end Software Engineer"
  },
  {
    bullets: [
      <>
        Led the development from specifications to production of the admin panel for a client <b>AAA video game</b>, built with <b>Node.js</b>,{" "}
        <b>React.js</b>, <b>TypeScript</b>, <b>PostgreSQL</b> and <b>Docker</b>.
      </>,
      <>
        Designed the <b>Infrastructure as Code (IaC)</b> and led the development of the internal <b>CI/CD</b> pipeline on <b>AWS</b>, covering
        provisioning, build/deploy automation and cloud infrastructure management.
      </>,
      <>
        Acted as <b>Lead Developer</b>, coordinating delivery and ensuring the stack stayed modern, maintainable and production-ready.
      </>
    ],
    company: "TlmPartners Inc",
    from:    new Date("2020-05"),
    title:   "Lead Full-stack Software Engineer",
    to:      new Date("2022-04")
  },
  {
    bullets: [
      <>
        Led the <b>online payment systems</b> team (<b>Python</b>), covering <b>credit card</b>, <b>SMS</b> and <b>PayPal</b> transactions on
        platforms <b>handling €100M+ in annual revenue</b>.
      </>,
      <>
        Later led the <b>acquisition systems</b> team (<b>Java</b> and <b>PHP</b>), owning design, development and maintenance of the product
        acquisition stack.
      </>,
      <>
        In both lead roles, owned <b>high availability</b> and <b>observability</b>, including <b>24/7 monitoring</b> for business continuity.
      </>,
      <>
        In the acquisition role, designed and led development of an internal analytics tool in <b>TypeScript</b>, <b>Node.js</b> and <b>React.js</b>{" "}
        to measure product effectiveness, with the <b>Business Intelligence</b> team as internal customer.
      </>
    ],
    company: "DOCOMO Digital (formerly Buongiorno, formerly DADA) Spa",
    from:    new Date("2004-05"),
    title:   "Lead Full-stack Software Engineer",
    to:      new Date("2019-11")
  },
  {
    bullets: [
      <>
        Contributed to <b>MEGAS</b>, the world&apos;s first ultrasound system with real-time image storage in <b>CnTI</b> format.
      </>,
      <>
        Designed and led the porting of the <b>firmware</b> for the <b>D.A.M.</b> (the communication board) to <b>Linux</b>.
      </>,
      <>
        Wrote two drivers for the custom hardware mounted on the board as <b>Linux kernel modules</b> in <b>C</b> and <b>Assembly</b>.
      </>,
      <>
        Compacted the distribution image (application + OS) onto a single <b>1.44MB floppy disk</b>, simplifying firmware upgrades on deployed
        machines.
      </>,
      <>
        Increased ultrasound frame rate from <b>25 fps</b> to <b>33 fps</b>.
      </>
    ],
    company: "Esaote Biomedica",
    from:    new Date("2001-01"),
    title:   "Embedded Software Engineer",
    to:      new Date("2003-09")
  },
  {
    bullets: [
      <>
        Served as <b>Application Lead</b> for Telecom Italia&apos;s <b>New Commercialization Platform</b>, overseeing development, porting from
        previous software and ongoing maintenance.
      </>,
      <>
        Administered <b>Sun enterprise-class systems</b> (UNIX), ensuring reliability and performance of production environments.
      </>,
      <>
        Operated as <b>Oracle DBA</b>, managing schemas, performance tuning and high-performance enterprise database architectures.
      </>
    ],
    company: "Telecom Italia Spa",
    from:    new Date("1999-09"),
    title:   "UNIX System Administrator & Oracle DBA",
    to:      new Date("2000-12")
  },
  {
    bullets: [
      <>
        Upgraded <b>banking services</b> (cash desk and teller operations) in the <b>core banking system (C++)</b> to support the{" "}
        <b>Euro currency transition</b>.
      </>,
      <>
        Took on <b>maintenance</b> and <b>code review</b> responsibilities after the successful Euro rollout.
      </>,
      <>
        Optimized critical processes with deep <b>Oracle database</b> expertise and <b>stored procedures</b>, cutting the &quot;Cash Desk
        Opening&quot; procedure from ~50 seconds to <b>2 seconds</b>.
      </>
    ],
    company: "Federation of Cooperative Credit Banks of Tuscany",
    from:    new Date("1998-04"),
    title:   "Software Engineer",
    to:      new Date("1999-08")
  }
];

const printDate = (date: Date) => date.toLocaleDateString("en-US", { month: "long", year: "numeric" });

export const CurriculumVitae = () => {
  useEffect(() => {
    document.querySelectorAll("a").forEach(link => {
      link.setAttribute("target", "_blank");
    });
  }, []);

  return <>
    <div className="page" style={{ pageBreakAfter: "always" }}>
      <span style={{ fontSize: "2.5em", fontWeight: "bold" }}>Daniele Ricci</span>
      <br />
      <br />
      <span style={{ fontSize: "1.5em", fontWeight: "bold" }}>
        {"Lead Full-Stack Engineer | TypeScript · Node.js · React.js · C/C++ · Blockchain"}
      </span>
      <br />
      <br />
      <br />
      <a href="mailto:daniele.icc@gmail.com" style={{ marginRight: 15 }}>
        {"daniele.icc@gmail.com"}
      </a>
      {links.map((link, id) => <a href={link} key={id} style={{ marginRight: 15 }}>
        {link.replace("https://", "")}
      </a>)}
      <br />
      {"Florence, Italy"}
      <br />
      <br />
      <br />
      <span className="section">Summary</span>
      <hr />
      {
        "Lead Full-Stack Engineer specializing in high-performance, scalable software systems with a strong focus on high availability and observability."
      }
      <br />
      {"Creator and maintainer of "}
      <b>rotating-file-stream</b>
      {", a widely adopted Node.js open-source module with "}
      <b>300K+ weekly npm downloads</b>
      {". Reduced "}
      <b>Lace&apos;s AWS infrastructure costs by approximately 80%</b>
      {", led the development of online payment platforms handling "}
      <b>€100M+ in annual revenue</b>
      {", and optimized a critical banking process, cutting execution time from "}
      <b>~50 seconds to 2 seconds</b>
      {"."}
      <br />
      {
        "I bring a pragmatic, cost-conscious approach to software architecture and development, with expertise in backend engineering, payments and financial systems and blockchain technologies. I leverage modern development practices and AI-powered tools to improve productivity and code quality, emphasizing simplicity, automation, continuous delivery and a "
      }
      <b>RERO (Release Early, Release Often)</b>
      {" approach to deliver working software early and refine it through rapid iteration."}
      <br />
      <br />
      <br />
      <span className="section">Skills</span>
      <hr />
      {Object.entries(skills).map(([key, value]) => <div key={key}>
        <span style={{ fontWeight: "bold" }}>{key}: </span>
        {value.join(", ")}
      </div>)}
      <br />
      <br />
      <span className="section">Education</span>
      <hr />
      <span style={{ fontSize: "1.2em" }}>Diploma di Perito Industriale Capotecnico Informatico</span>
      <br />
      <span style={{ fontSize: "1.1em" }}>(Technical High School Diploma - Industrial Informatics Specialist)</span>
      <br />
      {"1995 - I.T.I.S. Antonio Meucci - Florence, IT"}
      <br />
      {"Achieved highest grade in Computer Science."}
      <br />
      <br />
      <br />
      <span className="section">Languages</span>
      <hr />
      <ul>
        <li>
          <b>Italian</b> - Native Speaker
        </li>
        <li>
          <b>English</b> - Professional working proficiency
        </li>
      </ul>
      <br />
      <span className="section">Publications & Projects</span>
      <hr />
      <ul>
        <li>
          {"I have contributed to the open-source community of "}
          <b>Node.js</b>
          {", publishing several modules. The most notable is "}
          <a href="https://github.com/iccicci/rotating-file-stream#readme">rotating-file-stream</a>
          {", with "}
          <b>300K+ downloads per week</b>
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
          {". A "}
          <a href="https://www.youtube.com/watch?v=bX9IkGK3izY">demo video</a>
          {" is available."}
        </li>
      </ul>
      <br />
      <span className="section">Hobbies & Interests</span>
      <hr />
      {"Passionate about martial arts, role-playing games, video games, film production, and theater acting."}
      <br />
      {"I served as "}
      <b>Production Director</b>
      {" for the film "}
      <a href="https://www.imdb.com/title/tt1874387/">10 ragazze</a>
      {", gaining valuable experience in project management and team coordination also within the creative industry."}
    </div>
    <div className="page" style={{ pageBreakAfter: "always" }}>
      <span className="section">Professional Experience</span>
      <hr />
      {experiences.map(({ bullets, company, from, title, to }, id) => {
        if(! to && id !== 0) throw new Error(`Missing end date for experience: ${company}`);

        return <div key={company}>
          <span style={{ fontSize: "1.2em" }}>{title}</span>
          {" - "}
          <span style={{ fontSize: "1.1em", fontWeight: "bold" }}>{company}</span>
          <br />
          <i>{`${printDate(from)} - ${to ? printDate(to) : "Present"}`}</i>
          {bullets ? <ul>
            {bullets.map((bullet, id) => <li key={id}>{bullet}</li>)}
          </ul> : null}
          {id === experiences.length - 1 ? null : <hr style={{ borderTop: "1px dotted #808080", marginBottom: 8, marginLeft: 40, marginRight: 50, marginTop: 20 }} />}
        </div>;
      })}
    </div>
  </>;
};
