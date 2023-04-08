document.querySelector(".add").onclick = function() {
    if(document.querySelector(".newtask #task").value.length == 0) {
        alert("Please add a task to do!");
    } 
    else {
        document.querySelector(".target").innerHTML
        += `
            <div class="targets">
                <span id="taskname">
                    ${document.querySelector(".newtask #task").value}
                </span>
                <button class="delete">
                    <i class="far fa-trash-alt"></i>
                </button
            </div>
        `;

        var current_task = document.querySelectorAll(".delete");
        for(var i = 0; i < current_task.length; i++) {
            current_task[i].onclick = function() {
                this.parentNode.remove();
            }
        }

        var targets = document.querySelector(".targets");
        for(var i = 0; i < targets.length; i++) {
            targets[i].classList.toggle("completed");
        }

        document.querySelector(".newtask #task").value = "";
    }
}