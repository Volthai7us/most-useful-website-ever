var effectArr = document.querySelectorAll(".effect-add");
effectArr.forEach(element => {
    element.addEventListener("click", (e)=>
    {
        var ol = document.querySelector("ol");
        var newLi = document.createElement("li");
        var num = e.target.parentElement.id;
        var text = document.createTextNode(num);
        newLi.appendChild(text);
        ol.appendChild(newLi);
    });
});
var onPlay = false;
var playButton = document.querySelector(".created-sound .btn");
playButton.addEventListener("click", () =>
{
    onPlay = true;
    var childArr = document.querySelectorAll("li");
    var firstChild = childArr[0];
    var length = childArr.length;
    play(firstChild, 1, length);
});

function play(child, i, length)
{
    const selectAudio = document.getElementById('audio-' + child.innerHTML);
    let copyAudio = selectAudio.cloneNode();
    child.classList.add("playing-effect");
    copyAudio.play();
    if(i != length)
    {
        console.log("not end");
        copyAudio.addEventListener("ended", () => {
            play(child.nextSibling, i + 1, length);
        });
    }
    else
    {
        console.log("end");
        copyAudio.addEventListener("ended", () => {
            document.querySelectorAll("li").forEach(element => {
                element.classList.remove("playing-effect");
            });
            onPlay = false;
        });
    }
}