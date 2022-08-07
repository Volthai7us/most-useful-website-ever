var effectArr = document.querySelectorAll(".effect-add");
effectArr.forEach(element => {
    element.addEventListener("click", (e)=>
    {
        var ol = document.querySelector("ol");
        //if(ol.childElementCount < 12)
        {
            var newLi = document.createElement("li");
            newLi.addEventListener("click", () => {
                ol.removeChild(newLi);
            });
            var num = e.target.parentElement.id;
            var text = document.createTextNode(num);
            newLi.appendChild(text);
            ol.appendChild(newLi);
        }
        
    });
});
var onPlay = false;
var playButton = document.querySelector(".created-sound .btn");
playButton.addEventListener("click", () =>
{
    if(!onPlay)
    {
        onPlay = true;
        var childArr = document.querySelectorAll("li");
        var firstChild = childArr[0];
        var length = childArr.length;
        play(firstChild, 0, length);
    }
});

function play(child, i, length)
{
    var soundPath = "/sounds/sound-" + child.innerHTML + ".wav";
    var audio = new Audio(soundPath);
    child.classList.add("playing-effect");
    audio.play();
    audio.addEventListener("ended", () => {
        playNext(child, i, length)
    });
}

function playNext(child, i, length)
{
    if(i < length - 1)
    {
        play(child.nextSibling, i+1, length);
    }
    else
    {
        document.querySelectorAll("li").forEach(element => {
            element.classList.remove("playing-effect");
        });
        onPlay = false;
    }
    
}