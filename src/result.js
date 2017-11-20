import {makeAsciiArt} from "./art.js";

export class Result {
    /**
     * @param {HTMLElement} element; 
     */
    constructor(element) {
        this.element = element;
    }
    
    renderResult(answer, question, maxQuestions) {
        var i;
        var str = "";
        str =  `<table border="1"><tr>
                <th>Question</th>
                <th>Answer</th>
            </tr>`;
        for(i=0; i<answer.length; i++){
            str+=`<tr>
                    <td border=1> ${answer[i]} </td>
                    <td border=1> ${question[i]} </td>
                </tr>`
        }

        str += `</table>`
        this.element.innerHTML +=str;
    }



    /*
    render(answer, question) {
        var HTML = "<table border=1 width=100%><tr>";
        var i;
        for(i=0; i<answer.length; i++){
            HTML += "<td align=center>"+answer[0]+"</td>";
        }
        HTML += "</tr></table>";
        HTML +=  `Pizza is by far the best.</p><div id="pizza"></div>  `;
    }*/
}