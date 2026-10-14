// ---------- Nominees: name, department, division, title, packet pages, artifacts (of 5), LORs (of 3), note
const NOMINEES = [
["Arpit Gaind","Undergraduate Education","Undergraduate Education","Teaching Fellow",27,5,3,""],
["Ashley Hannah","Art","Arts and Architecture","Teaching Assistant",24,3,2,""],
["Brendan Russ","Chemical and Biomolecular Engineering","Engineering","Teaching Fellow",21,5,3,""],
["Charlotte Bryant","Nursing","Nursing","Teaching Associate",26,4,2,""],
["Christian Gerard Capuno","Integrative Biology and Physiology","Life Sciences","Teaching Assistant",23,5,3,""],
["Christina Toma","Education","Education & Information Studies","Teaching Associate",10,0,3,"Packet incomplete: Nominee Statement, Teaching Philosophy and all Teaching Artifacts could not be retrieved."],
["Daisy Mugodzeri","Civil and Environmental Engineering","Engineering","Teaching Assistant",24,5,3,""],
["Dominique Stumbaugh","Atmospheric and Oceanic Sciences","Physical Sciences","Teaching Fellow",20,5,3,""],
["Dzmitry Vaido","Physics and Astronomy","Physical Sciences","Teaching Fellow",25,3,3,""],
["Eilam Morag","Electrical Engineering","Engineering","Teaching Fellow",23,5,3,""],
["Elayne Stecher","Political Science","Social Sciences","Teaching Fellow",31,4,3,""],
["Gabriella Sigal","Integrative Biology and Physiology","Life Sciences","Teaching Assistant",23,4,3,""],
["Garret May","Materials Science and Engineering","Engineering","Teaching Fellow",24,5,3,""],
["Gillian Haigh","Art","Arts and Architecture","Teaching Assistant",21,4,3,""],
["Glenn Nurwono","Chemistry and Biochemistry","Physical Sciences","Teaching Fellow",24,4,3,"Teaching Artifact 1 (syllabus) is being added to the packet."],
["Gloria Hyun","Civil and Environmental Engineering","Engineering","Teaching Assistant",18,2,2,""],
["Hannah Widmaier","Philosophy","Humanities","Teaching Associate",19,5,1,""],
["Isaias Roberson","Molecular, Cell, and Developmental Biology","Life Sciences","Teaching Assistant",24,4,3,""],
["Joshua Goetz","Political Science","Social Sciences","Teaching Assistant",19,5,2,""],
["Katarina Yuan","English","Humanities","Teaching Fellow",24,1,2,""],
["Katherine Hernandez","Institute of the Environment and Sustainability","Life Sciences","Teaching Fellow",21,3,2,""],
["Katherine Smock","Sociology","Social Sciences","Teaching Assistant",19,5,3,""],
["Marianne Gutierrez","Nursing","Nursing","Teaching Fellow",18,3,2,""],
["Maryam Ghamarchehreh","Civil and Environmental Engineering","Engineering","Teaching Assistant",56,4,2,""],
["Michelle De Luna","Geography","Social Sciences","Teaching Fellow",23,5,3,""],
["Min Kyu Lee","Chemistry and Biochemistry","Physical Sciences","Teaching Assistant",23,3,2,""],
["Nallely Valenzuela","Political Science","Social Sciences","Teaching Fellow",21,4,2,""],
["Narayan Gopinathan","Institute of the Environment and Sustainability","Physical Sciences","Teaching Assistant",87,5,3,""],
["Nicholas Hu","Mathematics","Physical Sciences","Teaching Fellow",20,3,3,""],
["Parnian Hemmati","Mechanical and Aerospace Engineering","Engineering","Teaching Fellow",21,5,3,""],
["Passion Lord","Education","Education & Information Studies","Teaching Associate",25,3,3,""],
["Raquel Zandomeneghi","Spanish and Portuguese","Humanities","Teaching Fellow",23,5,3,""],
["Roshini Agarwal","Art","Arts and Architecture","Teaching Assistant",28,5,1,""],
["Salem Martinez","English","Humanities","Teaching Fellow",23,1,2,""],
["Samatha Arun","Civil and Environmental Engineering","Engineering","Teaching Fellow",20,5,2,""],
["Samuel Halim","Civil and Environmental Engineering","Engineering","Teaching Fellow",22,4,3,""],
["Sebastian Solarte-Caicedo","Institute of the Environment and Sustainability","Life Sciences","Teaching Fellow",26,4,3,""],
["Shervin Nia","Chemistry and Biochemistry","Physical Sciences","Teaching Associate",20,3,3,""],
["Thomas Lee","Mechanical and Aerospace Engineering","Engineering","Teaching Fellow",20,3,3,""],
["Tucker Allen","Chemistry and Biochemistry","Physical Sciences","Teaching Fellow",22,5,3,""],
["Wesleigh Gates","World Arts and Cultures / Dance","Arts and Architecture","Teaching Fellow",23,5,3,""],
["Yasmine Krings","Asian Languages and Cultures","Humanities","Teaching Fellow",23,5,2,""],
["Yesi Camacho Torres","Social Welfare","Public Affairs","Teaching Associate",28,3,3,""],
["Zackary Kiebach","English","Humanities","Teaching Fellow",23,1,3,""]
].map(r => ({name:r[0], dept:r[1], div:r[2], title:r[3], pages:r[4], art:r[5], lor:r[6], note:r[7],
  key:r[0].toLowerCase().replace(/[^a-z0-9]+/g,"-")}));

// ---------- Rubric, worded as on the scoring sheet
const CRITERIA = [
 {id:"c1", title:"1. Effective teaching practices", sub:"Multiple examples of effective teaching practices (e.g., student-centered learning, active learning, inclusive teaching)", guide:[
  "Use of innovative teaching methods in the classroom, programmatic innovations in curriculum, and the impact such innovations might have at the local or national level",
  "Teaching practices: How are in-class and out-of-class times utilized? What assignments, assessments, and learning activities help students learn? Are students engaged?",
  "Reflection and iterative growth: How has the instructor's teaching changed over time? How has student learning evidence informed this?",
  "Evidence should be apparent in the Statement from the nominee and the Artifacts"]},
 {id:"c2", title:"2. Learning environment", sub:"Efforts to create a learning environment in which diverse students can succeed", guide:[
  "Class climate: What sort of climate for learning does the instructor create? What are students' views of their learning experience, and how has this informed teaching?",
  "Achievement of learning outcomes: What impact do courses have on learners? What is the evidence of student learning? Are there efforts to make achievement equitable?",
  "Inclusive pedagogy and curriculum"]},
 {id:"c3", title:"3. Impact on students or peers", sub:"e.g., played a significant role in students' eventual success, helped change majors or career plans, or shaped students' lives", guide:[
  "Mentoring and advising: How has the instructor contributed to the broader teaching and learning communities, on and off campus, inside and outside the classroom?",
  "Fostering student agency: How has the instructor transformed students into co-creators of knowledge?"]},
 {id:"c4", title:"4. Efforts to improve teaching", sub:"Sought opportunities to improve their pedagogical knowledge", guide:[
  "Participates in training outside of the mandatory (495) training course"]}
];
const OVERALL = {id:"o", title:"Overall rating", sub:"Overall rating of the nominee, from 1 (lowest) to 5 (most deserving of the award)", guide:[
  "Consider the criteria above in light of the context of the discipline and department.",
  "This may include the size, number, and diversity of courses taught, the overall impact of their teaching, and the sample evidence and activities provided."]};
const STEPS = [1,2,3,4,5];
const DISAGREE = 4; // points on the /25 total that flag a nominee for discussion
