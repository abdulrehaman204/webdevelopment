const students = [
    { id: 1, name: "Abdul", marks: [80, 90, 70] },
    { id: 2, name: "Aiza", marks: [60, 75, 85] },
    { id: 3, name: "Ravi", marks: [90, 95, 100] }
];

export function calculateAverage() {
    return students.map(student => {
        const average =
            student.marks.reduce((sum, mark) => sum + mark, 0) /
            student.marks.length;

        return {
            name: student.name,
            average: average.toFixed(2)
        };
    });
}

export function findTopper() {
    const averages = calculateAverage();

    return averages.reduce((topper, student) =>
        Number(student.average) > Number(topper.average)
            ? student
            : topper
    );
}