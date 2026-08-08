console.log(courses);
let selectedCourse = null;

function MakeCourseCard(course){
    let card = document.createElement("article");
    card.classList.add("course-card")
    card.innerHTML =
                '<div class="course-card-body">' +
                    '<span class="category-badge">' + course.category + '</span>' +
                    '<h2 class="course-title">'  + course.title + '</h2>' +
                    '<p class="lesson-count">'  + course.lessons.length + '</p>' +
                    '<p class="course-description">' + course.description + '</p>' +
                '</div>'
    return card;
}

function buildHomeCards(){
    const grid = document.querySelector("#course-grid")
    for (const course of courses){
        const card = MakeCourseCard(course);
            card.addEventListener("click", function() {
            selectedCourse = course;
            showCourse();
        })
        grid.appendChild(card);
    }
}

function showCourse(){
    document.querySelector("#detail-category").textContent = selectedCourse.category;
    document.querySelector("#detail-title").textContent = selectedCourse.title;
    document.querySelector("#detail-description").textContent = selectedCourse.description;
    buildLessonList();
    document.querySelector("#home-view").classList.add("hidden");
    document.querySelector("#course-view").classList.remove("hidden");
}

function buildLessonList(){
    const lessonList = document.querySelector("#detail-lesson-list");
    lessonList.innerHTML = "";
    let lessonNumber = 1;
    for(const lesson of selectedCourse.lessons){
        const row = MakeLessonRow(lesson, lessonNumber);
        row.addEventListener("click", function() {
            showLessonViewer(lesson);
        })
        lessonList.appendChild(row);
        lessonNumber = lessonNumber + 1;
    }
    updateProgressBar();
}

function MakeLessonRow(lesson, lessonNumber){
    let row = document.createElement("li");
    row.innerHTML =
                '<div class="lesson-row">' +
                    '<span class="lesson-number">' + lessonNumber + '</span>' +
                    '<span class="lesson-row-title">' + lesson.title + '</span>' +
                    '<span class="lesson-duration">' + lesson.duration + '</span>' +
                '</div>'
    return row;
}

function showHome(){
    selectedCourse = null;
    document.querySelector("#course-view").classList.add("hidden");  
    document.querySelector("#home-view").classList.remove("hidden"); 
}

buildHomeCards();

const backButton = document.querySelector("#back-button");
backButton.addEventListener("click", showHome);

let selectedLesson = null;

function showLessonViewer(lesson){
selectedLesson = lesson;
document.querySelector("#lesson-title").textContent = lesson.title;
document.querySelector("#lesson-video").src = lesson.videoUrl;
document.querySelector("#lesson-description").textContent = lesson.description;
updateCompleteButton();
document.querySelector("#course-view").classList.add("hidden");
document.querySelector("#lesson-view").classList.remove("hidden");
}

function updateCompleteButton(){
    const completeButton = document.querySelector("#complete-button");
    if (selectedLesson.completed === true) {
        completeButton.textContent = "Completed";
        completeButton.classList.add("done");
    } else {
        completeButton.textContent = "Mark Complete";
        completeButton.classList.remove("done");
    }   
}

function toggleLessonComplete(){
    if(selectedLesson.completed === true){
        selectedLesson.completed = false;
    }
    else{
        selectedLesson.completed = true;
    }
    updateCompleteButton();
    updateProgressBar();
}

function countCompletedLessons(){
    let completedCount = 0;
    for(const lesson of selectedCourse.lessons){
        if(lesson.completed === true){
            completedCount = completedCount + 1;
        }
    }
    return completedCount;
}

function updateProgressBar(){
    const completedCount = countCompletedLessons();
    const totalCount = selectedCourse.lessons.length;
    const fraction = completedCount / totalCount;
    const percent = Math.round(fraction * 100);
    document.querySelector("#course-progress-fill").style.width = percent + "%";
    document.querySelector("#course-progress-text").textContent = percent + "%";
}

function showCourseFromLesson(){
    selectedLesson = null;
    document.querySelector("#lesson-video").src = "";
    document.querySelector("#lesson-view").classList.add("hidden");
    document.querySelector("#course-view").classList.remove("hidden");
}

const completeButton = document.querySelector("#complete-button");
completeButton.addEventListener("click", toggleLessonComplete);

const lessonBackButton = document.querySelector("#lesson-back-button");
lessonBackButton.addEventListener("click", showCourseFromLesson);

// Search functionality
const searchInput = document.querySelector(".search-input");
const categoryButtons = document.querySelectorAll(".category-button");
let selectedCategory = "All";

function updateHomecards(){
    const grid = document.querySelector(".course-grid");
    grid.textContent = "";
    const searchText = searchInput.value.toLowerCase();
    let shownCount = 0;

    for(const course of courses){

        //titlematches
        let titleMatches = false;
        if(course.title.toLowerCase().includes(searchText)){
            titleMatches = true;
        }

        //categorymatches
        let categoryMatches = false;
        if(selectedCategory === "All"){
            categoryMatches = true;
        } else if(selectedCategory === course.category){
            categoryMatches = true;
        }

        //display the course if it matches both title and category
        if(titleMatches === true && categoryMatches === true){
            const card = MakeCourseCard(course);
            card.addEventListener("click", function() {
                selectedCourse = course;
                showCourse();
            })
            grid.appendChild(card);
            shownCount = shownCount + 1;
        }
    }

    if(shownCount === 0){
        grid.innerHTML = "<p class='empty-message'>No results found</p>";
    }
}

function moveActiveHighlight(clickedButton){
    for(const categoryButton of categoryButtons){
        categoryButton.classList.remove("active");
    }
    clickedButton.classList.add("active");
}

searchInput.addEventListener("input", updateHomecards);

for(const categoryButton of categoryButtons){
    categoryButton.addEventListener("click", function(){
        selectedCategory = categoryButton.textContent;
        moveActiveHighlight(categoryButton);
        updateHomecards();
    })
}