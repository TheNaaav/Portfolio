import travel from '../assets/travel.gif';
import square from '../assets/square.gif';
import thai from '../assets/thai.jpg';
import phun1 from '../assets/lotuspurple.png';
import phun2 from '../assets/lotus.jpg';
import diamond from '../assets/Diamond.png';



export const translations: { 
  [key: string]: { 
    title: string; 
    about: string; 
    skills: string; 
    projects: string; 
    contact: string;
    contactmail: string;
    contactcopy: string;
    name: string; 
    passion: string; 
    Resume: string;
    skill: string;
    contactDescription: string;
    reachOut: string
    getToKnowMe: string;
    hobbiesTitle: string;
    hobbies: string;
    howIStartedTitle: string;
    howIStarted: string | string[];
  }; 
} = {
  en: {
    title: 'Web Developer',
    about: 'About',
    skills: 'Skills',
    projects: 'Projects',
    contact: 'Contact',
    contactmail: 'Copy my email addresss',
    contactcopy: 'Copied!',
    contactDescription: 'Feel free to drop me an email for collaborations, questions, or just to say hello! I’m always open to new opportunities and interesting projects.',
    reachOut: 'I look forward to connecting with you soon!',
    name: "Turning ideas into reality",
    passion: `Hey there! I'm Naruebet Singsathon, a Full Stack Web Developer who loves tackling problems and making tech that’s easy to use and understand.
    My go-to tools are React, TypeScript, and Node.js, but I’m always on the lookout for new tech to play with and see how it can make a project even better!
    I'm also super excited about AI and all things innovation — it keeps me on my toes, sparking new ideas and creative solutions.
    For me, coding isn't just about writing lines of code — it's about building cool things that people can actually use and enjoy every day.`,
    Resume: "Download Resume",
    skill: "Skills & Technologies",
    getToKnowMe: "Get to know me better",
    hobbiesTitle: "Hobbies",
    hobbies: `I absolutely love immersing myself in different types of games – from strategy games that challenge my thinking to fast-paced and intense FPS games, expansive MMO worlds, and story-driven single-player adventures. If a game captures my interest, I’m all in! I’m particularly drawn to competitive games where I can feel the adrenaline rush and the goal is to reach the top.
Aside from gaming, fitness is a big part of my life. Right now, I’ve taken a break from the gym to focus on job hunting, but I’m looking forward to getting back on track soon. Working out gives me energy and a sense of progress that I truly value.
When I’m not busy gaming or working out, I love losing myself in the world of anime or exploring new music. Music and anime are like a journey for me – they take me to different places and emotional states, and I love how they can resonate with me in so many ways.
I’m a calm and balanced person who enjoys finding harmony in everyday life. Spending time with friends and family is important to me, but I also appreciate my alone time. That’s when I can dive into offline story-driven games that take me on an emotional journey, or simply relax with a YouTube session where I can explore everything from humor to in-depth analyses.`,
    howIStartedTitle: "How I Started",
    howIStarted: [
      "When I was around 12–13 years old, I started playing CS:GO . Back then, there were a lot of cheaters in the game, and it made me curious about how cheating actually worked. I started searching on Google and stumbled upon a forum called UnknownCheats, where there was a ton of information about how cheats were built. I tried to learn, but since my English wasn’t great at the time, I eventually gave up because it felt too overwhelming.",
      "When I turned 16–17, my interest sparked again, but this time it was more about computers in general. I built my first PC, and it was so much fun that it deepened my interest in technology and hardware. After a while, I started exploring software again and learned the basics of Lua by reading documentation and experimenting on my own.",
      "Later, I decided to focus more on school, where I studied construction and civil engineering. But when the COVID-19 pandemic hit in 2020, finding a job in the construction industry became really tough. That made me rethink my path, and I started looking into programming again. This time, I got hooked on C#. I watched a ton of YouTube videos and even took a quick course at NTI School to learn the basics.",
      "Since I needed to complete Programming 1 to apply for a vocational college, I pushed through the course and eventually got accepted into a .NET web development program. There, I learned so much about the fundamentals of programming, and it opened my eyes to all the possibilities in development. It gave me a broader perspective and tons of ideas about what I want to build in the future."
    ],
  },
  sv: {
    title: 'Webbutvecklare',
    about: 'Om mig',
    skills: 'Kunskap',
    projects: 'Projekt',
    contact: 'Kontakt',
    contactmail: 'Kopiera min e-postadress',
    contactcopy: 'Kopierad!',
    contactDescription: 'Tveka inte att skicka ett mejl för samarbeten, frågor eller bara för att säga hej! Jag är alltid öppen för nya möjligheter och intressanta projekt.',
    reachOut: 'Ser fram emot att höra från dig snart!',
    name: "Från idé till verklighet",
    passion: `Hej! Jag heter Naruebet Singsathon och är en Full Stack Webb Utvecklare som älskar att lösa problem och skapa tekniska lösningar som är lätta att använda och förstå.
    Mina favoritverktyg är React, TypeScript och Node.js, men jag är alltid på jakt efter nya teknologier för att se vad som kan göra ett projekt ännu bättre!
    Jag är också riktigt taggad på AI och innovation — det får mig att tänka utanför boxen och experimentera med nya idéer.
    För mig handlar utveckling inte bara om att skriva kod – det handlar om att bygga saker som människor faktiskt kan använda och uppskatta varje dag.`,
    Resume: "Ladda ner CV",
    skill: "Kunskap & Teknologier",
    getToKnowMe: "Lär känna mig bättre",
    hobbiesTitle: "Hobbies",
    hobbies: `Jag älskar verkligen att fördjupa mig i olika typer av spel – allt från strategispel som utmanar mitt tänkande till snabba och intensiva FPS-spel, storslagna MMO-världar och berättelsedrivna singelplayer-äventyr. Om spelet fångar mitt intresse, är jag på! Jag dras särskilt till tävlingsinriktade spel där jag kan känna adrenalinet pumpa och målet är att nå toppen.
Förutom spel är träning en stor del av mitt liv. Just nu har jag tagit en paus från gymmet för att fokusera på jobbsökande, men jag ser fram emot att snart återvända till mitt träningsspår. Det ger mig energi och en känsla av framsteg som jag verkligen värdesätter.
När jag inte är upptagen med spel eller träning, älskar jag att förlora mig i världar av anime eller utforska ny musik. Musik och anime är för mig som en resa – de tar mig till olika platser och känslolägen, och jag älskar hur de kan beröra mig på olika sätt.
Jag är en lugn och balanserad person som tycker om att hitta harmoni i vardagen. Att umgås med vänner och familj är viktigt för mig, men jag uppskattar också min egentid. Då kan jag fördjupa mig i offline-storyspel som tar med mig på en känslomässig resa, eller bara slappna av med en YouTube-session där jag kan utforska allt från humor till djupgående analyser.`,
    howIStartedTitle: "Hur jag började",
    howIStarted: [
      "När jag var runt 12–13 år började jag spela CS:GO. På den tiden var det många fuskare i spelet, och det gjorde mig nyfiken på hur fusk egentligen fungerade. Jag började söka på Google och snubblade över ett forum som heter UnknownCheats, där det fanns massor av information om hur fusk byggdes. Jag försökte lära mig, men eftersom min engelska inte var så bra vid den tiden gav jag till slut upp.",
      "När jag var runt 16–17 år väcktes mitt intresse igen, men den här gången var det mer datorer i allmänhet som fascinerade mig. Jag byggde min första dator, och det var så kul att det fördjupade mitt intresse för teknik och hårdvara. Efter ett tag började jag utforska mjukvara igen och lärde mig grunderna i Lua genom att läsa dokumentation och experimentera på egen hand.",
      "Senare valde jag att fokusera mer på skolan, där jag studerade bygg- och anläggningsteknik. Men när COVID-19-pandemin slog till 2020 blev det väldigt svårt att hitta jobb inom byggbranschen. Det fick mig att tänka om, och jag började intressera mig för programmering igen. Den här gången fastnade jag för C#. Jag kollade på massor av YouTube-videor och gick till och med en kort kurs på NTI-skolan för att lära mig grunderna.",
      "Eftersom jag behövde klara av kursen Programmering 1 för att kunna söka till en yrkeshögskola kämpade jag mig igenom den och blev till slut antagen till en .NET-webbutvecklingsutbildning. Där lärde jag mig otroligt mycket om programmeringens grunder, och det öppnade verkligen mina ögon för alla möjligheter inom utveckling. Det gav mig ett bredare perspektiv och massor av idéer om vad jag vill bygga i framtiden."
    ],
  }
};


export const socialLinks = {
  github: 'https://github.com/TheNaaav',
  linkedin: 'https://www.linkedin.com/in/naruebet-singsathon-7b8337158/',
};

export const projects = {
  projects: [
    {
      name: "Mystery-Travel",
      link: "https://mystery-travel.vercel.app/",
      image: travel,
      description: "Fun travel destination generator",
      techStack: ["React", "TypeScript", "Tailwind CSS", "Vercel", "AI API"]
    },
    {
      name: "SquareGenerator",
      link: "https://squaregenerator.vercel.app/",
      image: square,
      description: "testing square generator",
      techStack: ["React", "TypeScript", "Tailwind CSS", "Vercel"]
    },
    {
      name: "Sathon Thai Massage",
      link: "https://www.sathon-thaimassage.se/",
      image: thai,
      description: "Professional massage",
      techStack: ["React", "TypeScript", "Tailwind CSS", "Vercel","Google Maps API"]
    },
    {
      name: "Phun Thai Massage",
      link: "https://www.phun-thai-massage.se/",
      image: phun1,
      description: "Professional massage",
      techStack: ["React", "TypeScript", "Tailwind CSS", "Vercel","Google Maps API"]
    },
    {
      name: "Phun Thai Massage 2",
      link: "https://www.phun-thai-massage-2.se/",
      image: phun2,
      description: "Professional massage",
      techStack: ["React", "TypeScript", "Tailwind CSS", "Vercel","Google Maps API"]
    },
    {
      name: "Diamond Thai Massage",
      link: "https://www.diamond-thaimassage.se/",
      image: diamond,
      description: "Professional massage",
      techStack: ["React", "TypeScript", "Tailwind CSS", "Vercel","Google Maps API"]
    },
  ],
};

export const skills = [
  { name: "React" },
  { name: "Tailwind CSS" },
  { name: "TypeScript" },
  { name: "ASP.NET" },
  { name: "SQL Databases" },
  { name: "Web API" },
  { name: "C#" },
  { name: "Microservices" },
  { name: "Responsive Design" },
  { name: "REST APIs" },
  { name: "CMS" },
];