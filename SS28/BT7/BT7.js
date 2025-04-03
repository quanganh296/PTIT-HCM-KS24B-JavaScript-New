let  students=[

    { name: "Trần Trí Dương", scores: { math: 9, english: 8, literature : 7 } },

    { name: "Hà Bích Ngọc", scores: { math: 3, english: 2, literature : 5} },

    { name: "Bùi Thái Sơn", scores: { math: 9.5, english: 9, literature : 9 } }

   ];

   let studentAverage = {
    filterHighAchievers: function (students) {
        return students.filter(student => {
            let average = (student.scores.math + student.scores.english + student.scores.literature) / 3;
            return average >= 8; // Lọc học sinh có điểm trung bình >= 8
        });
    }
};
let highAchievers = studentAverage.filterHighAchievers(students);
highAchievers.forEach(student => {
    let average = (student.scores.math + student.scores.english + student.scores.literature) / 3;
    console.log(`${student.name} có điểm trung bình là ${average.toFixed(2)} và đạt học sinh giỏi.`);
});