const parent = React.createElement("div", {id:"parent"}, [
               React.createElement("div", {id:"child1"},[
               React.createElement("h1", {}, "I am an H1 tag"),
               React.createElement("h2", {}, "I am an H2 tag")]),

                React.createElement("div", {id:"child2"},[
                React.createElement("h1", {}, "I am an H1 tag"),
                React.createElement("h2", {}, "I am an H2 tag")])
            ]);

console.log(parent);

const heading = React.createElement("div", {id:"hello"}, "Hello from Aayush React");
const wrapper = React.createElement("div", {}, [heading, parent]);
// console.log(heading);

const root = ReactDOM.createRoot(document.getElementById("root"));


// root.render(heading);
root.render(wrapper);
// root.render(parent);