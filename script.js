const overall = {'period': 'sep 2, 2022 - may 26, 2023',
                'total_study_hours': '58.5'}
const topics = ['Introduction to OOP - {theory: 0:40, practice: 1:30}',
                'Classes - {theory: 0:40, practice: 1:30}',
                'Class Instance - {theory: 0:40, practice: 2:00}',
                'String Formatting (%, format, f) - {theory: 1:00, practice: 1:30}',
                'Ceil, Floor, Round, % formatting with numbers - {theory: 0:40, practice: 1:30}',
                'Truncate function (class implementation) - {theory: 0:20, practice: 1:30}',
                'Class Instance vs Class - {theory: 0:40, practice: 2:40}',
                'Variables In-Depth - {theory: 0:40, practice: 1:30}',
                'Iterators, Zip, Enumerate - {theory: 0:40, practice: 1:30}',
                'Dictionaries - {theory: 0:40, practice: 1:30}',
                'Boolean Logic, and & or, Truthy & Falsy - {theory: 0:40, practice: 2:00}',
                'Loop control - {theory: 0:40, practice: 1:30}',
                'Split & Join - {theory: 0:40, practice: 1:30}',
                'Lists In-Depth - {theory: 2:30, practice: 6:00}',
                'Recursion, Application in Python - {theory: 0:40, practice: 1:30}']

const projects = ['project name - coffee-maker (backend)',
                    'project difficulty - 3/10',
                    'topics required to work - 40+',
                    'project work time est. - 9+ hrs',
                    'project implementation - class',
                    'project status - complete (6/6 stages)',

                    'project name - domino (backend)',
                    'project difficulty - 5/10',
                    'topics required to work - 60+',
                    'project time est. - 11+ hrs',
                    'implementation - class',
                    'status - complete (5/5 stages)'
                ]
         

let overall_dom = document.querySelector('.overall');
for (const [k, v] of Object.entries(overall)) {
  let div = document.createElement("div");
  div.classList.add("box");
  let p = document.createElement("p");
  div.append(`${k}: ${v}`, p);

  document.querySelector('.content').appendChild(div);
};


let topics_dom = document.querySelector('.topics');
for (const topic of topics) {
  let div = document.createElement("div");
  div.classList.add("box");
  let p = document.createElement("p");
  div.append(`${topic.split(' - ')[0]}: ${topic.split(' - ')[1]}`, p);
  document.querySelector('.content-1').appendChild(div);
};

let projects_dom = document.querySelector('.projects');
let n = 0;
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
