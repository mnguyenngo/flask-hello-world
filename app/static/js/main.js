// get text in text box
let get_input = function() {
    let input = $("input#user-input").val()
    console.log(input)
    return input
};

// route to '/submit' called in app.py
let send_input_json = function(input) {
    console.log(input)
    $.ajax({
        url: '/submit',
        contentType: "application/json; charset=utf-8",
        type: 'POST',
        data: JSON.stringify(input),
        success: function (data) {
            display_results(data);
        }
    });
};

// replaces empty div on main.html with results from app.py
let display_results = function(results) {
    let output = $("div#show-result")
    output.html(results.output)
};

// called when submit button is pressed
$(document).ready(function() {
    $("button#submit").click(function() {
        let input = get_input();
        send_input_json(input);
    })
})