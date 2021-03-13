courses = [];

course1 = prompt("Type your Course 1");
courses.push(course1);

course2 = prompt("Type your Course 2");
courses.push(course2);

course3 = prompt("Type your Course 3");
courses.push(course3);

course4 = prompt("Type your Course 4");
courses.push(course4);

alert("You have chosen following courses: "+ courses);

course1 = prompt("If you want to change "+course1+" course. Enter a new course name" );
courses.splice(0,0, course1);

course2 = prompt("If you want to change "+course2, " course. Enter a new course name");
courses.splice(1,1, course2);

course3 = prompt("If you want to change "+ course3+ " course. Enter a new course name" );
courses.splice(2,2, course3);

course4 = prompt("If you want to change "+ course4+ " course. Enter a new course name" );
courses.splice(3,3, course4);

alert("Your updated courses are: "+courses);

