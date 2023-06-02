const overall = {'period': 'sep 2, 2022 - may 26, 2023 (inclusive)',
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

        //     'projects': {
        //         'coffee-machine': {
        //             'difficulty': '3/10',
        //             'topics requires': '40+',
        //             'status': 'complete - 6/6 stages',
        //             'project time avg.': '8+ hrs',
        //             'implementation': 'class'
        //         },
        //         'domino': {
        //           'difficulty': '5/10',
        //           'topics required': '60+',
        //           'status': 'in progress - 2/5 stages',
        //           'project time avg.': '10+ hrs',
        //           'implementation': 'class'
        //         }
        //     }
        // }

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
