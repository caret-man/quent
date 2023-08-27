const overall = {'period': 'sep 2, 2022 - may 26, 2023',
                'total_study_hours': '58.5'}
const topics = ['Introduction to OOP - {theory: 0:40, practice: 1:30}',
                'Class - {theory: 0:40, practice: 1:30}',
                'Class Instance - {theory: 0:40, practice: 2:00}',
                'String Formatting (%, format, f-string) - {theory: 1:00, practice: 1:30}',
                'Ceil, Floor, Round, % formatting with numbers - {theory: 0:40, practice: 1:30}',
                'Custom Truncate (class implementation) - {theory: 0:20, practice: 1:30}',
                'Class and Instance In-Depth - {theory: 0:40, practice: 2:40}',
                'Variables In-Depth - {theory: 0:40, practice: 1:30}',
                'Zip, Enumerate, Introduction to Iterators - {theory: 0:40, practice: 1:30}',
                'Introduction to Dictionaries - {theory: 0:40, practice: 1:30}',
                'Boolean Logic, and & or, Truthy & Falsy - {theory: 0:40, practice: 2:00}',
                'Loop control - {theory: 0:40, practice: 1:30}',
                'Split & Join - {theory: 0:40, practice: 1:30}',
                'Lists In-Depth - {theory: 2:30, practice: 6:00}',
                'Introduction to Recursion, Application in Python - {theory: 0:40, practice: 1:30}']

const projects = ['project name - Coffee-Maker (backend)',
                    'project difficulty - 3/10',
                    'topics knowlenge required - 40+',
                    'project work time est. - 8+ hrs',
                    'project implementation - class',
                    'project status - complete (5/5 stages)',

                    'project name - Domino (backend)',
                    'project difficulty - 5/10',
                    'topics knowlenge required - 60+',
                    'project time est. - 10+ hrs',
                    'implementation - class',
                    'status - complete (4/4 stages)'
                ]
         

let overall_dom = document.querySelector('.overall');
for (const [k, v] of Object.entries(overall)) {
  let div = document.createElement("div");
  div.classList.add("box");
  let p = document.createElement("p");
  div.append(`${k}: ${v}`, p);
  document.querySelector('.content').appendChild(div);
};


let n = 1;
let topics_dom = document.querySelector('.topics');
for (const topic of topics) {
  let div = document.createElement("div");
  div.classList.add("box");
  let p = document.createElement("p");
  div.append(`${n} - ${topic.split(' - ')[0]}: ${topic.split(' - ')[1]}`, p);
  document.querySelector('.content-1').appendChild(div);
  n++;
};

let projects_dom = document.querySelector('.projects');
n = 0;
for (const project of projects) {
  let div = document.createElement("div");
  div.classList.add("box")
  if (!(n % 6)) {
    div.classList.add("project-name-box");
  }
  
  let p = document.createElement("p");
  div.append(`${project.split(' - ')[0]}: ${project.split(' - ')[1]}`, p);
  document.querySelector('.content-2').appendChild(div);

  n++;
};
