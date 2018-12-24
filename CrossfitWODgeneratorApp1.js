
var crossfitWorkoutStructure = ["20min AMRAP (As many rounds as possible: Exercise.1: 20x -- Ex.2: 25x -- Ex.3: 25x -- Ex.4: 20x)",
"25min AMRAP (As many rounds as possible: Exercise.1: 15x -- Ex.2: 20x -- Ex.3: 25x -- Ex.4: 20x)",
"30min AMRAP (As many rounds as possible: Exercise.1: 15x -- Ex.2: 20x -- Ex.3: 25x -- Ex.4: 20x)",
"20-20-20-20", "EMOM 20 min (Every Minute On the Minute: Exercise.1: 3x -- Ex.2: 5X -- Ex.3: 7x -- Ex.4: 3x",
"9-15-21 reps for each exercise", "Exercise.1: 15x -- Ex.2: 20x -- Ex.3: 25x -- Ex.4: 30x WITH 10 Burpees BEFORE each exercise",
"3 Rounds for time – Exercise.1: 12x -- Ex.2: 24x -- Ex.3: 24x -- Ex.4: 12x",
"4 Rounds for time – Exercise.1: 10x -- Ex.2: 20x -- Ex.3: 20x -- Ex.4: 10x", "10-8-6-4 (Exercise.1: 10x, Ex.2: 8x, Ex.3: 6x, Ex.4: 4x) - 2 Rounds",
];

var Warmup = ["Warmup: 300 meter run", "Warmup: 50 jumping jacks", "Warmup: 500 meter row", "Warmup: 100 jump ropes",
"Warmup: 50 body weight squats", "Warmup: 50 hip dips side-to-side", "Warmup: 5 lunges (each leg)",
"Warmup: 10 spiderman step-ups (each leg)", "Warmup: 20 push-ups"];

var UpperBodyExercise1 = ["Slam ball", "Shoulder Press", "Push Press", "Bench Press",
"Push Jerk", "Turkish getups", "Pull-ups", "Renegade rows", "Man-makers", "Dumbbell Lat downs",
"snatchers", "farmer\’s carry"];

var LowerBodyExercise2 = ["Overhead squat", "front squat", "Goblet squat", "Deadlifts",
"front rack lunges", "box jumps", "dumbbell lunges"];

var AbsExercise3 = ["Dumbbell sit-ups", "Medicine ball sit-ups", "standing dumbbell side bends", "Russian twists",
"hand-to-feet ball pass", "bicycle crunch", "PVC pass throughs", "Deadbugs with dumbbell", "standing side rotation with dumbbell",
"hollow rock", "windshield wipers", "Medicine ball V-ups"];

var UpperLowerBodyExercise4 = ["Wall balls", "dumbbell Hang Power cleans", "Medicine ball power cleans",
"Sumo deadlift high pull", "Thrusters", "clean and Jerks", "kettlebell swings", "hand-to-hand kettlebell swings",
"burpees", "walking lunges", "burpee-box jumps", "burpee-lateral jumps", "dumbbell step-ups", "split jerk"];

function newCrossfitWOD () {
  var randomStructure = Math.floor(Math.random() * (crossfitWorkoutStructure.length));
  document.getElementById("CrossfitWODStructure").innerHTML = crossfitWorkoutStructure[randomStructure];
  var randomWarmup = Math.floor(Math.random() * (Warmup.length));
  document.getElementById("warmup").innerHTML = Warmup[randomWarmup];
  var randomEx1 = Math.floor(Math.random() * (UpperBodyExercise1.length));
  document.getElementById("Ex1").innerHTML = UpperBodyExercise1[randomEx1];
  var randomEx2 = Math.floor(Math.random() * (LowerBodyExercise2.length));
  document.getElementById("Ex2").innerHTML = LowerBodyExercise2[randomEx2];
  var randomEx3 = Math.floor(Math.random() * (AbsExercise3.length));
  document.getElementById("Ex3").innerHTML = AbsExercise3[randomEx3];
  var randomEx4 = Math.floor(Math.random() * (UpperLowerBodyExercise4.length));
  document.getElementById("Ex4").innerHTML = UpperLowerBodyExercise4[randomEx4];

};
