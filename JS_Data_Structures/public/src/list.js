var testList = ["test1", "test2", "test3"];

var logList = (list) => {
    list.forEach(element => {
        console.log(element);

    });
}

var divList = (list) => {
    var body = document.getElementById('body');

    list.forEach(element => {
        let div = document.createElement("div");
        div.width = 100;
        div.height = 100;
        div.innerText = element;
        body.appendChild(div);
    })
}

logList(testList);
// divList(testList);

var loadList = () => {
    divList(testList);
    console.log(testList)
}
// module.exports = logList;