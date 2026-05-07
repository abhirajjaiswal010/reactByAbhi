import Card from "./components/card.jsx";

const App = () => {
  const jobs = [
    {
      id: 1,
      company: "Airbnb",
      role: "Junior SDE",
      time: "5 days ago",
      type: "Part Time",
      level: "Senior Level",
      salary: "$120/hr",
      location: "Mumbai, India",
      logo: "https://yt3.googleusercontent.com/1236ePdfsipfwgiNT9CQ9dDU9xYkpbh9PkTzrb1nrccbzAVoYvmxxmvgPvv94GPw35-1ZtvUOw=s900-c-k-c0x00ffffff-no-rj",
    },
    {
      id: 2,
      company: "Google",
      role: "Frontend Developer",
      time: "2 days ago",
      type: "Full Time",
      level: "Mid Level",
      salary: "$150/hr",
      location: "Bangalore, India",
      logo: "https://cdn.brandfetch.io/id6O2oGzv-/w/400/h/400/theme/dark/icon.jpeg?c=1dxbfHSJFAPEGdCLU4o5B",
    },
    {
      id: 3,
      company: "Amazon",
      role: "Backend Engineer",
      time: "1 week ago",
      type: "Full Time",
      level: "Senior Level",
      salary: "$180/hr",
      location: "Hyderabad, India",
      logo: "https://s3-symbol-logo.tradingview.com/amazon--600.png",
    },
    {
      id: 4,
      company: "Meta",
      role: "React Developer",
      time: "3 days ago",
      type: "Contract",
      level: "Mid Level",
      salary: "$140/hr",
      location: "Remote",
      logo: "https://cdn.brandfetch.io/idWvz5T3V7/w/400/h/400/theme/dark/icon.png?c=1bxid64Mup7aczewSAYMX&t=1691142640809",
    },
    {
      id: 5,
      company: "Netflix",
      role: "Full Stack Dev",
      time: "6 days ago",
      type: "Full Time",
      level: "Senior Level",
      salary: "$200/hr",
      location: "Pune, India",
      logo: "https://cdn.brandfetch.io/ideQwN5lBE/w/400/h/400/theme/dark/icon.jpeg?c=1bxid64Mup7aczewSAYMX&t=1741362553726",
    },
    {
      id: 6,
      company: "Microsoft",
      role: "Software Engineer",
      time: "4 days ago",
      type: "Full Time",
      level: "Entry Level",
      salary: "$130/hr",
      location: "Delhi, India",
      logo: "https://cdn.brandfetch.io/idchmboHEZ/w/400/h/400/theme/dark/icon.jpeg?c=1bxid64Mup7aczewSAYMX&t=1761184096805",
    },
    {
      id: 7,
      company: "Adobe",
      role: "UI Engineer",
      time: "2 weeks ago",
      type: "Part Time",
      level: "Mid Level",
      salary: "$110/hr",
      location: "Noida, India",
      logo: "https://pbs.twimg.com/profile_images/1982812857570836480/PpMZQXvi.jpg",
    },
    {
      id: 8,
      company: "Spotify",
      role: "Frontend Intern",
      time: "1 day ago",
      type: "Internship",
      level: "Entry Level",
      salary: "$50/hr",
      location: "Remote",
      logo: "https://static.vecteezy.com/system/resources/previews/006/057/992/non_2x/spotify-logo-on-transparent-background-free-vector.jpg",
    },
    {
      id: 9,
      company: "Zomato",
      role: "React Native Dev",
      time: "5 days ago",
      type: "Full Time",
      level: "Mid Level",
      salary: "$90/hr",
      location: "Gurgaon, India",
      logo: "https://play-lh.googleusercontent.com/Zqv3j3gWCWrxuHW1VkRKNWso3beRsrwPCj58kG_Ile6iGGSf1YfkPYhKExXKY7_L0lU=w240-h480-rw",
    },
    {
      id: 10,
      company: "Swiggy",
      role: "Frontend Engineer",
      time: "3 days ago",
      type: "Full Time",
      level: "Senior Level",
      salary: "$100/hr",
      location: "Chennai, India",
      logo: "https://play-lh.googleusercontent.com/ymXDmYihTOzgPDddKSvZRKzXkboAapBF2yoFIeQBaWSAJmC9IUpSPKgvfaAgS5yFxQ",
    },
  ];
  return (
    <div className="parent">
      {jobs.map((e, idx) => {
        return (
          <div key={idx}>
            <Card
              company={e.company}
              role={e.role}
              logo={e.logo}
              time={e.time}
              type={e.type}
              level={e.level}
              salary={e.salary}
              location={e.location}
            />
          </div>
        );
      })}
    </div>
  );
};

export default App;
