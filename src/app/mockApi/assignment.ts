export interface CandidatesProps {
  id: number;
  name: string;
  score: number;
  mailId: string;
  candidateImage: string;
  behavior: number;
  communication: number;
  situationHandling: number;
  About: string;
  Experience: string;
  Hobbies: string;
  introduction: string;
  videoUrl: string;
}

export interface AssignmentProps {
  id: number;
  branch: string;
  status: string;
  assignmentLink: string;
  assignmentHour: string;
  assignmentEndsAt: string;
  candidates: CandidatesProps[];
}

const candidates: CandidatesProps[] = [
  {
    id: 0,
    name: "Roshan Sharma",
    score: 80,
    mailId: "roshan@gmail.com",
    candidateImage:
      "https://imgs.search.brave.com/NEsmN62PWfJ5Sl_E9ghmCE9PLOzgW0W16Jyn-aw3esw/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9kMnFw/MHNpb3RsYTc0Ni5j/bG91ZGZyb250Lm5l/dC9pbWcvdXNlLWNh/c2VzL3Byb2ZpbGUt/cGljdHVyZS90ZW1w/bGF0ZV8wLmpwZw",
    behavior: 8,
    communication: 8,
    situationHandling: 7,
    About:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim hic id labore rerum! Reprehenderit cumque rerum impedit, sit minima consequuntur.",
    Experience:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim hic id labore rerum! Reprehenderit cumque rerum impedit, sit minima consequuntur.",
    Hobbies:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim hic id labore rerum! Reprehenderit cumque rerum impedit, sit minima consequuntur.",
    introduction:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim hic id labore rerum! Reprehenderit cumque rerum impedit, sit minima consequuntur.",
    videoUrl: "https://www.youtube.com/watch?v=X9WfTOwx05g",
  },
  {
    id: 1,
    name: "Raj Mishra",
    score: 75,
    mailId: "raj@gmail.com",
    candidateImage:
      "https://imgs.search.brave.com/NEsmN62PWfJ5Sl_E9ghmCE9PLOzgW0W16Jyn-aw3esw/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9kMnFw/MHNpb3RsYTc0Ni5j/bG91ZGZyb250Lm5l/dC9pbWcvdXNlLWNh/c2VzL3Byb2ZpbGUt/cGljdHVyZS90ZW1w/bGF0ZV8wLmpwZw",
    behavior: 6,
    communication: 8,
    situationHandling: 4,
    About:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim hic id labore rerum! Reprehenderit cumque rerum impedit, sit minima consequuntur.",
    Experience:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim hic id labore rerum! Reprehenderit cumque rerum impedit, sit minima consequuntur.",
    Hobbies:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim hic id labore rerum! Reprehenderit cumque rerum impedit, sit minima consequuntur.",
    introduction:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim hic id labore rerum! Reprehenderit cumque rerum impedit, sit minima consequuntur.",
      videoUrl: "https://www.youtube.com/watch?v=X9WfTOwx05g",
  },
  {
    id: 2,
    name: "Neha Sharma",
    score: 60,
    mailId: "neha@gmail.com",
    candidateImage:
      "https://imgs.search.brave.com/NEsmN62PWfJ5Sl_E9ghmCE9PLOzgW0W16Jyn-aw3esw/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9kMnFw/MHNpb3RsYTc0Ni5j/bG91ZGZyb250Lm5l/dC9pbWcvdXNlLWNh/c2VzL3Byb2ZpbGUt/cGljdHVyZS90ZW1w/bGF0ZV8wLmpwZw",
    behavior: 5,
    communication: 9,
    situationHandling: 9,
    About:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim hic id labore rerum! Reprehenderit cumque rerum impedit, sit minima consequuntur.",
    Experience:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim hic id labore rerum! Reprehenderit cumque rerum impedit, sit minima consequuntur.",
    Hobbies:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim hic id labore rerum! Reprehenderit cumque rerum impedit, sit minima consequuntur.",
    introduction:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim hic id labore rerum! Reprehenderit cumque rerum impedit, sit minima consequuntur.",
      videoUrl: "https://www.youtube.com/watch?v=X9WfTOwx05g",
  },
  {
    id: 3,
    name: "Mohit Pal",
    score: 50,
    mailId: "mohit@gmail.com",
    candidateImage:
      "https://imgs.search.brave.com/NEsmN62PWfJ5Sl_E9ghmCE9PLOzgW0W16Jyn-aw3esw/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9kMnFw/MHNpb3RsYTc0Ni5j/bG91ZGZyb250Lm5l/dC9pbWcvdXNlLWNh/c2VzL3Byb2ZpbGUt/cGljdHVyZS90ZW1w/bGF0ZV8wLmpwZw",
    behavior: 5,
    communication: 2,
    situationHandling: 9,
    About:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim hic id labore rerum! Reprehenderit cumque rerum impedit, sit minima consequuntur.",
    Experience:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim hic id labore rerum! Reprehenderit cumque rerum impedit, sit minima consequuntur.",
    Hobbies:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim hic id labore rerum! Reprehenderit cumque rerum impedit, sit minima consequuntur.",
    introduction:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim hic id labore rerum! Reprehenderit cumque rerum impedit, sit minima consequuntur.",
      videoUrl: "https://www.youtube.com/watch?v=X9WfTOwx05g",
  },
  {
    id: 4,
    name: "Rohit Pal",
    score: 30,
    mailId: "rohit@gmail.com",
    candidateImage:
      "https://imgs.search.brave.com/NEsmN62PWfJ5Sl_E9ghmCE9PLOzgW0W16Jyn-aw3esw/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9kMnFw/MHNpb3RsYTc0Ni5j/bG91ZGZyb250Lm5l/dC9pbWcvdXNlLWNh/c2VzL3Byb2ZpbGUt/cGljdHVyZS90ZW1w/bGF0ZV8wLmpwZw",
    behavior: 3,
    communication: 3,
    situationHandling: 3,
    About:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim hic id labore rerum! Reprehenderit cumque rerum impedit, sit minima consequuntur.",
    Experience:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim hic id labore rerum! Reprehenderit cumque rerum impedit, sit minima consequuntur.",
    Hobbies:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim hic id labore rerum! Reprehenderit cumque rerum impedit, sit minima consequuntur.",
    introduction:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim hic id labore rerum! Reprehenderit cumque rerum impedit, sit minima consequuntur.",
      videoUrl: "https://www.youtube.com/watch?v=X9WfTOwx05g",
  },
  {
    id: 5,
    name: "Aryan Jaishwal",
    score: 50,
    mailId: "aryan@gmail.com",
    candidateImage:
      "https://imgs.search.brave.com/NEsmN62PWfJ5Sl_E9ghmCE9PLOzgW0W16Jyn-aw3esw/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9kMnFw/MHNpb3RsYTc0Ni5j/bG91ZGZyb250Lm5l/dC9pbWcvdXNlLWNh/c2VzL3Byb2ZpbGUt/cGljdHVyZS90ZW1w/bGF0ZV8wLmpwZw",
    behavior: 6,
    communication: 8,
    situationHandling: 5,
    About:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim hic id labore rerum! Reprehenderit cumque rerum impedit, sit minima consequuntur.",
    Experience:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim hic id labore rerum! Reprehenderit cumque rerum impedit, sit minima consequuntur.",
    Hobbies:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim hic id labore rerum! Reprehenderit cumque rerum impedit, sit minima consequuntur.",
    introduction:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim hic id labore rerum! Reprehenderit cumque rerum impedit, sit minima consequuntur.",
      videoUrl: "https://www.youtube.com/watch?v=X9WfTOwx05g",
  },
];

export const Assignment: AssignmentProps = {
  id: 0,
  branch: "Sales BDE",
  status: "Active",
  assignmentLink: "https://files.altworld.in/assignment/AssignmentScreen.png",
  assignmentHour: "3",
  assignmentEndsAt: "11 march 2024",
  candidates,
};
