const grade = +prompt("please enter a grade");

switch (true) {
    case grade >= 0 && grade <= 59:
        document.write("fail");
        break;
    case grade >= 60 && grade <= 69:
        document.write("enough");
        break;
    case grade >= 70 && grade <= 79:
        document.write("almost good");
        break;
    case grade >= 80 && grade <= 89:
        document.write("good");
        break;
    case grade >= 90 && grade <= 99:
        document.write("very good");
        break;
    case grade === 100:
        document.write("perfect");
        break;
    default:
        alert("invalid grade")
}