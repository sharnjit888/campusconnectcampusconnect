function scrollToEvents() {

    document.getElementById("events")
    .scrollIntoView({

        behavior: "smooth"

    });

}



function showEvent(eventName) {

    alert(

        "You selected: " +
        eventName +
        "\n\nRegistration for this event will open soon!"

    );

}



function openRegistration() {

    let studentName = prompt(
        "Enter your name:"
    );


    if (

        studentName !== null &&
        studentName !== ""

    ) {

        alert(

            "Thank you, " +
            studentName +
            "! Your registration request has been received."

        );

    }

}



function searchEvents() {

    let input = document
    .getElementById("searchInput")
    .value
    .toLowerCase();


    let cards = document
    .getElementsByClassName("event-card");


    for (

        let i = 0;

        i < cards.length;

        i++

    ) {

        let text = cards[i]
        .innerText
        .toLowerCase();


        if (

            text.includes(input)

        ) {

            cards[i]
            .style
            .display = "block";

        }

        else {

            cards[i]
            .style
            .display = "none";

        }

    }

      }
