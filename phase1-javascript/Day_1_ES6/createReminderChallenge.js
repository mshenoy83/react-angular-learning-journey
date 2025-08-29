console.log(createReminder("Madhav","JavaScript","130"))

function createReminder (personName,topic,time)
{
    const firstLine = `📚 Hello ${personName}!`;
    const secondLine = `You're currently learning: ${topic}`;
    const thirdLine = `Estimated time to study: ${timeConverter(Number(time))}`
    const lastLine = "Keep up the great work! 🚀"

    const message = `${firstLine}\n\n${secondLine}\n${thirdLine}\n\n\n${lastLine}`;

    return message;

}


function timeConverter(timeInput)
{   
    if(timeInput === 0)
    {
        return "No time allocated";
    }

    if(timeInput < 0)
    {
        return "Time Component invalid."
    }

    let quotient = Math.floor(timeInput / 60); 
    let remainder = timeInput % 60;

    let hourComponent = `${quotient} hour`;
    let minuteComponent = `${remainder} minute`;
    if(quotient > 1)
    {
        hourComponent = hourComponent + 's';
    }

    if(remainder > 1)
    {
        minuteComponent = minuteComponent + 's';
    }

    let response = "";
     
    if(quotient > 0 && remainder > 0)
    {
        response = `${hourComponent} and ${minuteComponent}`;
    }
    else
    {
        if(quotient > 0)
        {
            response = `${hourComponent}`;
        }
        else
        {
            response = `${minuteComponent}`;
        }
    }

    if(timeInput < 30)
    {
        response = response + `
        Quick review.`
    }

    if(timeInput > 120)
    {
        response = response + `
        Long study session ahead.`
    }

    return response;
}