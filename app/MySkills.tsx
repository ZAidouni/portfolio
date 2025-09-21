import React from 'react';
import Container from "@/components/Container";
import FrameworkIcons from "@/app/components/FrameworkIcons";

type Skills = {
  [key: string]: boolean;
};
const MySkills = ({data}: { data: HeroSection }) => {
  return (
      <div id="skills">
        <div
            className=" p-5 bg-background sm:p-10 w-[100vw] relative left-[50%] right-[50%] ml-[-50vw] mr-[-50vw]">
          <Container>
            <div className="items-end animate-fade-up">
              <div className="flex flex-col gap-3">
                <h2 className="tracking-tighter font-semibold sm:text-3xl text-2xl center">
                  My Skills
                </h2>
                <p className="text-muted-foreground center">
                  Technologies I&apos;ve been working with recently
                </p>
                <div className="sm:w-[23rem] flex gap-3 flex-wrap skill-card ">
                  <img src="https://techstack-generator.vercel.app/js-icon.svg" width="80" alt="JavaScript"/>
                  <img src="https://techstack-generator.vercel.app/react-icon.svg" width="70" alt="React"/>
                  <img src="https://img.icons8.com/?size=100&id=HKNzD81eiiSc&format=png&color=000000" width="80" alt="JQUERY"/>
                  <img src="https://img.icons8.com/?size=100&id=UGYn5TapNioV&format=png&color=000000" width="70" alt="PHP"/>
                  <img src="https://img.icons8.com/?size=100&id=7vdHawe2VPlT&format=png&color=000000" width="80" alt="Laravel"/>
                  <img src="https://img.icons8.com/?size=100&id=78295&format=png&color=000000" width="70" alt="Symfony"/>
                  <img src="https://img.icons8.com/?size=100&id=IYQQHplg11Ie&format=png&color=000000" width="80" alt="Flutter"/>
                  <img src="https://techstack-generator.vercel.app/mysql-icon.svg" width="70" alt="MySQL"></img>
                  <img src="https://img.icons8.com/?size=100&id=tBBf3P8HL0vR&format=png&color=000000" width="70" alt="MONGODB"/>
                  <img src="https://img.icons8.com/?size=100&id=09GEXzp8vRBT&format=png&color=000000" width="70" alt="SCSS"/>
                  <img src="https://img.icons8.com/?size=100&id=20909&format=png&color=000000" width="70" alt="HTML5"/>
                  <img src="https://img.icons8.com/?size=100&id=21278&format=png&color=000000" width="70" alt="CSS3"/>
                  <img src="https://img.icons8.com/?size=100&id=qsQZWvMuX4ad&format=png&color=000000" width="70" alt="SASS"/>
                  <img src="https://techstack-generator.vercel.app/docker-icon.svg" width="70" alt="Docker"></img>
                  <img src="https://img.icons8.com/?size=100&id=52539&format=png&color=000000" width="70" alt="Git"></img>
                  <img src="https://techstack-generator.vercel.app/restapi-icon.svg" width="80" alt="REST API"></img>
                  <img src="https://assets.streamlinehq.com/image/private/w_300,h_300,ar_1/f_auto/v1/icons/2/postman-d2xx20133bqc0d45g4553j.png/postman-h9hixn4cdtwjvfzwutqvdo.png?_a=DATAg1AAZAA0" width="70" alt="Postman"/>
                  <img src="https://img.icons8.com/?size=100&id=BOK91pTYcNyc&format=png&color=000000" width="70" alt="MAGENTO"/>
                  <img src="https://img.icons8.com/?size=100&id=8WYF248rC5Yy&format=png&color=000000" width="70" alt="Elasticsearch"/>
                  <img src="https://icon.icepanel.io/Technology/svg/RabbitMQ.svg" width="70" alt="RabbitMQ"/>
                  <img src="https://pluginicons.craft-cdn.com/mjmlWy4KnXeMLLfGxdRSOBoB9jpyCMOCijQNYGtv.svg?1544031570" width="70" alt="MJML"/>
                  <img src="https://images.seeklogo.com/logo-png/40/1/open-web-application-security-project-owasp-logo-png_seeklogo-408771.png" width="70" alt="OWASP"/>
                  <img src="https://img.icons8.com/?size=100&id=m6O2bFdG70gw&format=png&color=000000" width="70" alt="LINUX"/>
                  <img src="https://cdn-icons-png.flaticon.com/512/5968/5968875.png" width="70" alt="JIRA"/>
                  <img src="https://img.icons8.com/?size=100&id=OXVeOEj6qZqX&format=png&color=000000" width="70" alt="SLACK"/>
                </div>
              </div>
            </div>
          </Container>
        </div>
      </div>
  );
};

export default MySkills;
