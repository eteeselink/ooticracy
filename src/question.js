export class Question{
    /**
     * @param {HTMLElement} element 
     */
    constructor(element) {
        this.element = element;
        this.record = [];
    }

    

    

    render_question(array){
        var button_id;
        var rendering =  `
        question:   ${array[0]} <br>
       
        `
        for (var i = 1; i<array.length;i++){
        
        var string = `
        <input type="radio" name="question" value=${array[i]} id=${i}>
        <label for="radio1">${array[i]}</label><br>
            `
        
        rendering = rendering.concat( string);   
        
        

        }
        var button_string = `<button id="btn" class="yes">Vote!</button>`;

        rendering = rendering.concat( button_string); 

        this.element.innerHTML = rendering;

        var sbutton = document.createElement("button");
        sbutton.innerHTML = "Submit";

        this.element.appendChild(sbutton);

        sbutton.addEventListener ("click", () => {
            alert("Number of answers is " + this.record.length.toString());
            location.href = "result.html?" + encodeURIComponent(JSON.stringify(this.record));
        });

        this.element.querySelector("#btn").addEventListener("click", ev => {
            // always add `preventDefault` in an event handler. otherwise, the browser
            // will do some default action which usually means submitting the data to the server, 
            // which causes the entire page to reload.
            // since we have no server, we don't want that :-)
            ev.preventDefault();
            
            var bestPizza = this.element.querySelector("input[name=question]:checked").value;
            this.record.push([array[0],bestPizza]);
            alert("Your answer was " + this.record[this.record.length - 1]);
            // this.element.innerHTML = `<p>Indeed ${name}, Pizza ${bestPizza} is by far the best.</p><div id="pizza"></div>`;
            
            // makeAsciiArt(this.element.querySelector("#pizza"));
        })

    }


}