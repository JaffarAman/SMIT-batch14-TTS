import { useState } from "react";
import TextField from "@mui/material/TextField";
import { Box, Button, Stack } from "@mui/material";

function App() {
  const [name, setName] = useState("Jaffar");

  const response = {
    ai: [
      {
        startup_name: "MentorLink",
        tagline: "Connecting Students with Inspiring Mentors.",
        one_liner:
          "MentorLink is a platform that connects students with experienced mentors for guidance and support.",
        problem:
          "Students often lack access to experienced professionals who can provide guidance on career paths, academic choices, and personal development. This lack of mentorship can lead to uncertainty, missed opportunities, and delayed career progression.",
        solution:
          "MentorLink provides a curated platform where students can easily find and connect with mentors in their field of interest. Mentors offer advice, share experiences, and provide support to help students achieve their goals.",
        target_audience:
          "University students, recent graduates, and young professionals seeking guidance and mentorship.",
        unique_value_proposition:
          "MentorLink offers a personalized matching algorithm, verified mentor profiles, and secure communication tools to ensure a valuable and safe mentorship experience.",
        elevator_pitch:
          "MentorLink connects students with experienced mentors, providing personalized guidance and support to help them navigate their academic and professional journeys. We're building the next generation of leaders, one connection at a time.",
        landing_page: {
          html_css:
            '<!DOCTYPE html>\n<html lang="en">\n<head>\n<meta charset="UTF-8">\n<meta name="viewport" content="width=device-width, initial-scale=1.0">\n<title>MentorLink - Connect with Your Future</title>\n<style>\nbody {\nfont-family: \'Arial\', sans-serif;\nmargin: 0;\npadding: 0;\nbackground-color: #f4f4f4;\ncolor: #333;\n}\n\n.container {\nwidth: 80%;\nmargin: auto;\noverflow: hidden;\n}\n\nheader {\nbackground: #333;\ncolor: #fff;\npadding-top: 30px;\nmin-height: 70px;\nborder-bottom: 3px solid #e8491d;\n}\n\nheader a {\ncolor: #fff;\ntext-decoration: none;\ntext-transform: uppercase;\nfont-size: 16px;\n}\n\nheader ul {\nmargin: 0;\npadding: 0;\n}\n\nheader li {\nfloat: left;\ndisplay: inline;\npadding: 0 20px 0 20px;\n}\n\nheader #branding {\nfloat: left;\n}\n\nheader #branding h1 {\nmargin: 0;\n}\n\nheader nav {\nfloat: right;\nmargin-top: 10px;\n}\n\n.hero {\nbackground-color: #e9e9e9;\npadding: 50px 0;\ntext-align: center;\n}\n\n.hero h1 {\nfont-size: 3em;\nmargin-bottom: 10px;\n}\n\n.hero p {\nfont-size: 1.2em;\nmargin-bottom: 30px;\n}\n\n.btn {\nbackground-color: #e8491d;\ncolor: #fff;\npadding: 10px 20px;\nborder: none;\nborder-radius: 5px;\ncursor: pointer;\ntext-decoration: none;\n}\n\n.features {\npadding: 50px 0;\nbackground-color: #fff;\n}\n\n.feature {\ntext-align: center;\npadding: 20px;\nborder: 1px solid #ddd;\nmargin-bottom: 20px;\n}\n\n.feature h3 {\nmargin-bottom: 10px;\n}\n\n.pricing-cta {\nbackground-color: #333;\ncolor: #fff;\npadding: 50px 0;\ntext-align: center;\n}\n\n.pricing-cta h2 {\nmargin-bottom: 20px;\n}\n\n.testimonials {\npadding: 50px 0;\nbackground-color: #f4f4f4;\n}\n\n.testimonial {\ntext-align: center;\nmargin-bottom: 30px;\npadding: 20px;\nborder: 1px solid #ddd;\n}\n\nfooter {\nbackground: #333;\ncolor: #fff;\ntext-align: center;\npadding: 20px;\nmargin-top: 20px;\n}\n\n/* Responsive Styles */\n@media(max-width: 768px) {\nheader #branding, header nav {\nfloat: none;\ntext-align: center;\n}\n\nheader ul {\nmargin-top: 10px;\n}\n\nheader li {\nfloat: none;\ndisplay: block;\ntext-align: center;\n}\n\n.container {\nwidth: 90%;\n}\n}\n</style>\n</head>\n<body>\n<header>\n<div class="container">\n<div id="branding">\n<h1><span class="highlight">Mentor</span>Link</h1>\n</div>\n<nav>\n<ul>\n<li><a href="#">Home</a></li>\n<li><a href="#">About</a></li>\n<li><a href="#">Mentors</a></li>\n</ul>\n</nav>\n</div>\n</header>\n\n<section class="hero">\n<div class="container">\n<h1>Find the Perfect Mentor</h1>\n<p>Connect with experienced professionals and gain valuable insights.</p>\n<a href="#" class="btn">Get Started</a>\n</div>\n</section>\n\n<section class="features">\n<div class="container">\n<div class="feature">\n<h3>Personalized Matching</h3>\n<p>Our algorithm matches you with mentors based on your interests and goals.</p>\n</div>\n<div class="feature">\n<h3>Verified Mentors</h3>\n<p>All mentors are thoroughly vetted to ensure quality and experience.</p>\n</div>\n<div class="feature">\n<h3>Secure Communication</h3>\n<p>Communicate with your mentor through our secure and private platform.</p>\n</div>\n</div>\n</section>\n\n<section class="pricing-cta">\n<div class="container">\n<h2>Ready to Transform Your Future?</h2>\n<p>Join MentorLink today and start your mentorship journey.</p>\n<a href="#" class="btn">Sign Up Now</a>\n</div>\n</section>\n\n<section class="testimonials">\n<div class="container">\n<div class="testimonial">\n<p>"MentorLink helped me connect with a mentor who completely changed my career path. I\'m so grateful!"</p>\n<p>- Sarah J., Student</p>\n</div>\n<div class="testimonial">\n<p>"As a mentor, I find it incredibly rewarding to guide and support students through MentorLink."</p>\n<p>- John S., Mentor</p>\n</div>\n</div>\n</section>\n\n<footer>\n<p>MentorLink, Copyright &copy; 2024</p>\n</footer>\n</body>\n</html>',
        },
        additional_suggestions:
          "The startup idea is good, but it's important to consider the following:\n\n*   **Monetization Strategy**: How will the platform generate revenue? (e.g., subscription fees, premium mentor access, corporate partnerships)\n*   **Mentor Vetting**: What specific criteria will be used to verify mentors' qualifications and experience?\n*   **Matching Algorithm**: How will the platform ensure accurate and relevant mentor-student matches?\n*   **Legal Considerations**: Address data privacy, user agreements, and liability concerns.\n*   **Marketing and Outreach**: How will the platform attract both students and mentors?",
      },
    ],
  };
  console.log(response.ai[0].landing_page.html_css);

  return (
    <>
      {/* <h1
        //  className='
        // bg-[#579bcf] hello flex justify-center text-white  font-bold italic      '
        className="hello flex justify-center text-white  font-bold italic "
      >
        HELLO WORLD
      </h1> */}

      {/* <TextField
        label="Enter Name"
        placeholder="enter user name"
        variant="standard"
        value={name}
        onChange={(e) => setName(e.target.value)}
        // disabled
        color="warning"
      />

      <Button variant="contained" color="warning">
        Contained
      </Button> */}

      {/* <Box
        sx={{
          color: "red",
          display: "flex",
          gap: 2,
          justifyContent: "center",
        }}
      >
        <p>PARA 1</p>
        <p>PARA 2</p>
        <p>PARA 3</p>
      </Box> */}
      {/* 
      <Stack flexDirection={"row"}  sx={{}} >
        <p>PARA 1</p>
        <p>PARA 2</p>
        <p>PARA 3</p>
      </Stack> */}

      <h1>hello</h1>

      <div
      style={{width : "50%"}}
        dangerouslySetInnerHTML={{
          __html: response.ai[0].landing_page.html_css,
        }}
      ></div>
    </>
  );
}

export default App;
