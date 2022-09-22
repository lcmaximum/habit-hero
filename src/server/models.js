
/* 

HabitNote
habit: String,
date: Date,
note: {type: String, max-length 140}


Habit
name: String,
frequency: String,
dateAdded: Date,
datesCompleted: [{type: Date}],
datesIncomplete: [{type: Date}],
notes: [habitNoteSchema]

dayNote
day: Date,
notes: {type: String, max-length: 500}

Day
habitsSet: Number,
habitsComplete: Number,
moods: [{type:string}],
notes: [dayNoteSchema]


*/