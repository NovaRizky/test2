/**
 * Direction
 * Divide students to all of groups & students must sorted by first name
 * 
 * Expected Result
 * [
 *   [
 *     { "firstName": "Belle", "lastName": "Norton" },
 *     { "firstName": "Finnley", "lastName": "Rennie" }
 *   ],
 *   [
 *     { "firstName": "Kai", "lastName": "Lyons" },
 *     { "firstName": "Peyton", "lastName": "Gardner" }
 *   ],
 *   [{ "firstName": "Tatiana", "lastName": "Dickerson" }]
 * ]
 */
 const students = [
    { firstName: 'Kai', lastName: 'Lyons' },
    { firstName: 'Belle', lastName: 'Norton' },
    { firstName: 'Finnley', lastName: 'Rennie' },
    { firstName: 'Tatiana', lastName: 'Dickerson' },
    { firstName: 'Peyton', lastName: 'Gardner' },
  ];
  const groups = 3;
  function result(students, groups) {
    let result = {}
    for(let i = 0; i < students.length; i++ ){
        console.log(students[i]);

    }
    for( let j = 0; j < groups; j++){
        let temp = []
        temp.push([])
    }
    // your code here
  }
  
  console.log(result(students, groups));