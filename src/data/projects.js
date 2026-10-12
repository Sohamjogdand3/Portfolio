// TODO: replace every "#" with real URLs.
export const profile={email:'sohamjogdand355@gmail.com',github:'https://github.com/Sohamjogdand3',linkedin:'https://www.linkedin.com/in/soham-jogdand-00167b323',resume:'/Soham_Jogdand_Resume.pdf'};
export const technologies=[
{category:'Programming Languages',skills:['Python','Java','JavaScript','C']},
{category:'Backend Development',skills:['Django','Django REST Framework','FastAPI','Node.js','Express.js','REST APIs','WebSockets','Django Channels','JWT Authentication']},
{category:'Databases',skills:['PostgreSQL','MySQL','MongoDB']},
{category:'AI / Machine Learning',skills:['TensorFlow','PyTorch','Scikit-learn','OpenCV','YOLO','Computer Vision','Supervised & Unsupervised Learning']},
{category:'Data Analysis & Visualization',skills:['NumPy','Pandas','Data Cleaning & Wrangling','Exploratory Data Analysis (EDA)','Matplotlib','Power BI','Tableau']},
{category:'Frontend Development',skills:['HTML','CSS','React','Responsive Web Design']},
{category:'Tools & Infrastructure',skills:['Git','GitHub','Docker','Jupyter Notebook','Visual Studio Code','Google Workspace']}
];
export const tech=technologies.flatMap(t=>t.skills);
export const projects=[
{name:'NLAMS',category:'Backend / GIS / Government Systems',description:'A government-grade Land Acquisition Management System with role-based access control, statutory workflow management, geography mapping and automated workflow validation.',tags:['Python','Django','PostgreSQL','GIS','Docker'],github:'https://github.com/Sohamjogdand3/NLAMS',demo:null},
{name:'AI Proctoring System',category:'AI / Computer Vision / Real-time Systems',description:'An AI-based examination monitoring system using computer vision, head-pose analysis and real-time WebSocket communication.',tags:['Python','Django','Django Channels','YOLOv8','OpenCV','MediaPipe','Redis'],github:'https://github.com/Sohamjogdand3/Automated-Exam-Management-System',demo:null},
{name:'Unified Grievance Intelligence & Resolution Platform',category:'AI / Backend / Full Stack / Government Tech',description:'An AI-driven civic governance platform that automates grievance intake, spam and duplicate detection, intelligent classification, escalation, and predictive risk analysis.',tags:['React','Vite','Tailwind CSS','Node.js','Express.js','MongoDB','Python','FastAPI','Scikit-learn','Google Gemini Pro'],github:'https://github.com/Sohamjogdand3/Unified-Grievance-Intelligence-Resolution-Platform',demo:null},
{name:'CivicFix AI',category:'AI / Backend / Government Tech',description:'An AI-powered grievance and road governance platform designed to streamline citizen complaints, municipal workflows and contractor accountability.',tags:['React','Node.js','Express','MongoDB','Gemini AI','Python'],github:'https://github.com/Sohamjogdand3/Unified-Grievance-Intelligence-Resolution-Platform',demo:null}];
export const achievements=[
{year:'2025',title:'Aavishkar Research Convention',org:'University of Mumbai',desc:'Finalist & Presenter (20th Edition).'},
{year:'2025',title:'Code-a-Thon',org:'Vidyalankar Institute of Technology',desc:'Finalist (Top 14 of 100 teams).'},
{year:'2026',title:'NIRMAN Hackathon',org:'Amity University Mumbai',desc:'Finalist (Top 10 of 85 teams).'},
{year:'2026',title:'Event Head — Code Royale',org:'AIML Tech Fest',desc:'Organized college tech fest for 120+ teams and led selection of top 30 finalists.'}];
