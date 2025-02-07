document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("feedbackForm");
  const commentSection = document.getElementById("commentSection");
  const preloader = document.getElementById("preloader");

  const generateUniqueId = () => {
    return Math.floor(Math.random() * 200) + 1;
  };

  const loadComments = () => {
    const savedComments = JSON.parse(localStorage.getItem("comments")) || [];

    while (commentSection.firstChild) {
      commentSection.removeChild(commentSection.firstChild);
    }

    const randomCondition = Math.random() > 0.3;
    let filteredComments;
    if (randomCondition) {
      filteredComments = savedComments.filter(comment => comment.id <= 100);
    } else {
      filteredComments = savedComments.filter(comment => comment.id > 100);
    }

    filteredComments.forEach((comment) => {
      const newComment = document.createElement("div");
      newComment.classList.add("comment");

      const commentTitle = document.createElement("h3");
      const commentBody = document.createElement("p");
      const commentEmail = document.createElement("small");

      commentTitle.appendChild(document.createTextNode(comment.name));
      commentBody.appendChild(document.createTextNode(comment.body));
      commentEmail.appendChild(document.createTextNode(comment.email));

      newComment.appendChild(commentTitle);
      newComment.appendChild(commentBody);
      newComment.appendChild(commentEmail);

      const bodyTextLength = comment.body.length;
      let width = Math.min(Math.max(150, bodyTextLength * 10), 400);
      newComment.style.width = `${width}px`;

      commentSection.appendChild(newComment);
    });
  };

  loadComments();

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    preloader.style.display = "block";

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    fetch("https://jsonplaceholder.typicode.com/comments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        email: email,
        body: message,
      }),
    })
      .then(response => {
        if (!response.ok) {
          throw new Error("Problem sending data.");
        }
        return response.json();
      })
      .then((data) => {
        const existingComments = JSON.parse(localStorage.getItem("comments")) || [];
        const newComment = {
          id: generateUniqueId(),
          name: data.name,
          email: data.email,
          body: data.body,
        };

        existingComments.push(newComment);
        localStorage.setItem("comments", JSON.stringify(existingComments));

        const newCommentDiv = document.createElement("div");
        newCommentDiv.classList.add("comment");

        const newCommentTitle = document.createElement("h3");
        const newCommentBody = document.createElement("p");
        const newCommentEmail = document.createElement("small");

        newCommentTitle.appendChild(document.createTextNode(newComment.name));
        newCommentBody.appendChild(document.createTextNode(newComment.body));
        newCommentEmail.appendChild(document.createTextNode(newComment.email));

        newCommentDiv.appendChild(newCommentTitle);
        newCommentDiv.appendChild(newCommentBody);
        newCommentDiv.appendChild(newCommentEmail);

        const bodyTextLength = newComment.body.length;
        let width = Math.min(Math.max(150, bodyTextLength * 10), 400);
        newCommentDiv.style.width = `${width}px`;

        commentSection.prepend(newCommentDiv);
      })
      .catch(error => {
        console.error("Error sending data:", error);
        const errorMessage = document.createElement("div");
        errorMessage.classList.add("error");
        errorMessage.textContent = "⚠ Error, try again.";
        commentSection.prepend(errorMessage);
      })
      .finally(() => {
        preloader.style.display = "none";
      });

    form.reset();
  });
});
