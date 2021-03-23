const classA = [{
        name: "enzo",
        grade: 1.8,
    },
    {
        name: "Andre",
        grade: 10,
    },
    {
        name: "matheus",
        grade: 2,
    },
    {
        name: "sa",
        grade: 10,
    }

]

const classB = [{
        name: "Juju",
        grade: 10
    },
    {
        name: "Bilu",
        grade: 10
    },
    {
        name: "Juqinha",
        grade: 0
    },
    {
        name: "Eder",
        grade: 5
    }
]

function calculateAverage(students) {
    let soma = 0
    for (let I = 0; I < students.length; I++) {
        soma = soma + students[I].grade
    }
    const avarage = soma / students.length
    return avarage
}

function sendmensage(classRoom, avarage) {
    if (avarage > 5) {
        console.log(`avarage da class ${classRoom} is ${avarage}. congratulations`)
    } else {
        console.log(`avarage da class ${classRoom} is < 5`)
    }
}

function markAsFlunked(student) {
    student.flunked = false

    if (student.grade < 5) {
        student.flunked = true
    }
}

function sendmensagestudentflunked(student) {
    if (student.flunked) {
        console.log(`${student.name} you are flunked`)
    }
}

function reprovastudent(students) {
    for (let student of students) {
        markAsFlunked(student)
        sendmensagestudentflunked(student)
    }
}

const avarage1 = calculateAverage(classA)
const avarage2 = calculateAverage(classB)

sendmensage(avarage1, 'classA')
sendmensage(avarage2, 'classB')

reprovastudent(classA)
reprovastudent(classB)