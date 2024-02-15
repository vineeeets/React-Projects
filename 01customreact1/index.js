// customRender=(reactElement,container)=>{
//     const elementDom = document.createElement(reactElement.type)
//     elementDom.innerHTML = reactElement.children
//     elementDom.setAttribute('href',reactElement.props.href)
//     elementDom.setAttribute('target',reactElement.props.target)
//     container.appendChild(elementDom)
// }

// better optimization using loop
customRender=(reactElement,container)=>{
    const domElement = document.createElement(reactElement.type);
    domElement.innerText = reactElement.children
    for(const i in reactElement.props){
        if(i === 'children') continue;
        domElement.setAttribute(i,reactElement.props[i]);
    }
    container.append(domElement);
}
const reactElement = {
    type:'a',
    props:{
        href:'https://google.com',
        target:'_blank'
    },
    children:'Click here'

}
const maincontainer = document.querySelector('#root');
customRender(reactElement,maincontainer);

