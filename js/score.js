let end_totals = {}

let table = document.getElementById("scorecard");
let end_total_label = document.getElementById("end-total-label");
let end_total_value = document.getElementById("end-total-value");

//explaination for future emily: 
// 'change' event listener is added to entire table 
// 'change' event is triggered whenever user enters input anywhere in table, which "bubbles up" to the table event listener
// 'event' is the event object that contains information about the 'change' event
// 'event.target' is the specific element that the event happened to
// I prefer to not use anonymous functions since I find it easier to read  
table.addEventListener('change', scoreEnd);
function scoreEnd (event)
{
    if(event.target.tagNaame == 'input')
    {
        const input = event.target;
        const row = input.closest('tr'); //gets closest 'tr' parent element
        const row_index = row.rowIndex; //gets row index in table, first row is 0

        //iterate through every user-entered value in this row

        //change score 
    }
}