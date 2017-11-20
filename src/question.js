export class Question{
    /**
     * @param {HTMLElement} element 
     */
    constructor(element) {
        this.element = element;
    }

    



    render_question(array){
        this.element.innerHTML = `
        question:   ${array[0]} <br>
       
        <input type="radio" name=${array[1]} value=${array[1]} id="radio1">
        <label for="radio1">${array[1]}</label><br>
        <input type="radio" name=${array[2]} value=${array[2]} id="radio2">
        <label for="radio1">${array[2]}</label><br>
        `;

    }


}