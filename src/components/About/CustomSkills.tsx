import CustomSkill from "./CustomSkill";


const CustomSkills = () => {

  const CustomSkillsComponent = [
    {
    title:"Main skills",
    skills1_a:"Full Stack Web Developer,",
    skills1_b:"AI Developer,",
    skills1_c:"Tools Developer",
    skills2_a:"Frontend, UX/UI,",
    skills2_b:"Backend Integration",
    skills2_c:"REST APIs, Express.js",
    skills3_a:"JavaScript, SCSS, HTML,",
    skills3_b:"React, GSAP, TypeScript,",
    skills3_c:"NodeJs, MongoDB, Firebase",
  },
  {
    title:"Bonus skills",
    skills1_heading:"Linux / Windows",
    skills1_a:"Kali, Debian, Ubuntu",
    skills1_b:"Server Configuration",
    skills1_c:"Bash Scripting",
    skills2_heading:"Tools",
    skills2_a:"Nmap, Burp suite,",
    skills2_b:"Nessus, Wireshark",
    skills2_c:"Nikto, SqlMap",
    skills3_heading:"Hobies",
    skills3_a:"Web Penetration Testing",
    skills3_b:"Bug Bounty Hunting",
    skills3_c:"Vulnerability Assesment",
  }
  ]
  return (
    <>
      {CustomSkillsComponent.map((props) =><CustomSkill {...props}/>)}
    </>
  );
};

export default CustomSkills;
