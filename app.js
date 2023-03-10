const inputTag = document.querySelector("#input-box");

inputTag.addEventListener("keydown", function(event){
    if(event.code === "Enter"){
        search();
    }
});

function search(){
    const input = inputTag.value;

    window.location.href = "https://www.google.com/search?q=" + input +"&sxsrf=AJOqlzVmD0iSQPeCLyzJu3ktwoG6_PbsGg%3A1678398671780&ei=z1QKZJ76LtiOwbkPj-WXgAM&oq=epistemolog&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQARgAMgQIIxAnMgoIABCxAxCDARBDMgsIABCABBCxAxCDATILCAAQgAQQsQMQgwEyCwgAEIAEELEDEIMBMgUILhCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQ6BwgjEOoCECc6BwguEOoCECc6DQgAEI8BEOoCELQCGAE6DQguEI8BEOoCELQCGAE6BggjECcQEzoOCC4QgAQQsQMQxwEQ0QM6CAgAEIAEELEDOgQILhAnOhEILhCABBCxAxCDARDHARDRAzoLCC4QsQMQgwEQ1AI6EAguELEDEIMBEMcBENEDEEM6BAgAEEM6DQguELEDEMcBENEDEEM6DQguEMcBELEDENEDEEM6BwgAELEDEEM6DQgAEIAEELEDEIMBEAo6BwgAEIAEEAo6BwguEIAEEApKBAhBGABQzQhY0Dxg1kdoA3ABeACAAbACiAG1FZIBBzAuMi45LjGYAQCgAQGwARTAAQHaAQYIARABGAo&sclient=gws-wiz-serp";
}

console.log(input);