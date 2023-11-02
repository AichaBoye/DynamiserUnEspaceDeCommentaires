document.getElementById("myform").addEventListener("submit", function (e) {

    e.preventDefault();

    var erreur;
    var inputs = document.getElementsByTagName("input");

    for (var i = 0; i < inputs.length; i++) {
        if (!inputs[i].value) {
            erreur = "Tous les champs doivent être remplis"
        }
    }

    if (erreur) {
        e.preventDefault();
        document.getElementById("erreur").innerHTML = erreur;
        return false;
    } 

    const commentForm = document.getElementById("myform");
    const commentList = document.getElementById("comment-list");

    commentForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const prenom = document.getElementById("myinput").value;
        const nom = document.getElementById("myname").value;
        const commentaire = document.getElementById("message").value;
        const commentItem = document.createElement("p");
        commentItem.className = "prose prose-sm mt-4 max-w-none text-gray-500";
        commentItem.innerHTML = `<strong>${prenom} ${nom}</strong> <br> ${commentaire}`;
        commentList.appendChild(commentItem);

        commentForm.reset();
    });

});
