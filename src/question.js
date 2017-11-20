export class Question{
    /**
     * @param {HTMLElement} element 
     */
    constructor(element) {
        this.element = element;
    }

    

    

    render_question(array){
        var rendering =  `
        question:   ${array[0]} <br>
       
        `
        for (var i = 1; i<array.length;i++){
        
        var string = `
        <input type="radio" name=${array[i]} value=${array[i]} id="radio1">
        <label for="radio1">${array[i]}</label><br>
            `
        
        rendering = rendering.concat( string);   
            
        }


        this.element.innerHTML = rendering;

    }


}