'use client';

import React, {useState} from 'react';
import Container from "@/components/Container";
import {Input} from "@/components/ui/input";
import {Textarea} from "@/components/ui/textarea";
import {Button} from "@/components/ui/button";
import {RadioGroup, RadioGroupItem} from "@/components/ui/radio-group";
import {PaperPlaneIcon, ReloadIcon} from "@radix-ui/react-icons";
import {toast} from "sonner";
import {useRouter} from "next/navigation";
import me from "../../change_data/hero_section.json";
import {Label} from "@/components/ui/label";
import {
  IoLogoFacebook,
  IoLogoGithub,
  IoLogoInstagram,
  IoLogoLinkedin,
  IoLogoWhatsapp,
  IoLogoYoutube
} from "react-icons/io";
import {IoLogoBehance} from "react-icons/io5";
const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [interested, setInterested] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const router = useRouter();
  // @ts-ignore
  const handleSubmit = async (e) => {
    e.preventDefault();
console.log("process.env.GMAIL_PASSWORD");

    try {
      setSubmitted(true);
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({name, email, message, interested}),
      });

      router.refresh()
      if (response.ok) {
        toast.success(`Mr/Mis ${name.charAt(0).toUpperCase() + name.slice(1)}, We will inform ASAP :)`)
        setName('');
        setEmail('');
        setMessage('');
        setInterested('');
        setSubmitted(false);
      } else {
        toast.error('Unable to submit your message :(');
        setSubmitted(false);

      }
    } catch (error) {
      toast.error("Oops! Something went wrong.");
      setSubmitted(false);
    }
  };

  return (
      <div className="">
        <div
            className="p-5 border-t bg-muted sm:p-10 w-[100vw] relative left-[50%] right-[50%] ml-[-50vw] mr-[-50vw]">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-4">
              <div className="animate-fade-left">
                <p className="tracking-tight font-bold sm:text-3xl text-2xl sm:w-96 mr-5 font-custom">
                  They  
                  <span className="text-primary"> believed </span>
                  in my potential ❤️ 
                </p>
              <img src="/uggy.jpeg" style={{"width": "30rem", "margin-top": "30px" , "margin-bottom": "30px",
    "outline-style": "groove"}}/>
    <div className='flex' style={{"justify-content": "space-around"}}>
    <p style={{"display": "ruby","width": "10rem"}}>Maxence Joncheray | PHP / Magento Backend Developer | <a href='https://fr.linkedin.com/in/maxence-joncheray-026b82181'><IoLogoLinkedin size={24}/></a> </p>
    <p style={{"display": "ruby","width": "10rem"}}>Christophe Gourmelon | CTO chez UGGY | <a href='https://fr.linkedin.com/in/cgourmelon'><IoLogoLinkedin size={24}/> </a></p>
    </div>
              </div>
              <div className=" text-lg sm:leading-8 animate-fade-right">
              <p style={{"font-style": "italic",
    "font-family": "auto"}}>
                "To whom it may concern,

It is with great pleasure that I recommend Zakaria Aidouni. During his apprenticeship and subsequent fixed-term contract at UGGY, Zak worked under my supervision as a Full-Stack Developer (Magento / PHP).

Throughout his time with us, Zak consistently demonstrated excellent technical and interpersonal skills. He contributed to the development and maintenance of our Magento-based e-commerce platform, implemented new features in PHP and Symfony, and integrated complex front-end components. His ability to quickly understand requirements, propose solutions and deliver high-quality code made him a reliable and valuable member of the team.

Zak also showed a genuine interest in learning and improving. He was proactive in suggesting optimisations, took part in code reviews, and adhered to best practices in security and performance. Beyond his technical skills, Zak was a pleasure to work with: collaborative, adaptable and always willing to help colleagues.

I have every confidence that Zak will bring the same level of commitment, professionalism and expertise to any future role. He has my highest recommendation."
                </p>
              </div>
            </div>
          </Container>
        </div>
      </div>
      
  );
};

export default ContactForm;
