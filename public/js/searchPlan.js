const searchInput = document.querySelector('#search');
const resultsBody = document.querySelector('#results');
const subjectSelect = document.querySelector('#subject');


// Event listener for search input
searchInput.addEventListener('input', function () {
    const query = searchInput.value.trim();
    const selectedSubject = subjectSelect.textContent;
    loadData(query, selectedSubject);
});

// Initial load with empty query and no specific subject filter
loadData('',subject.textContent);

function loadData(query, subject) {
    let url = `/search_plan?query=${encodeURIComponent(query)}`;
    if (subject) {
        url += `&subject=${encodeURIComponent(subject)}`;
    }

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(results => {
            let html = '';
            if (results.length > 0) {
                results.forEach((result, index) => {
                    html += `
                    <div class="border border-gray-200 rounded-lg overflow-hidden shadow-lg">
                        <div class="p-6">
                            <h2 class="text-xl flex gap-2 font-bold mb-2">
                                <p>${index + 1}.</p>
                                <p>${result.lesson_title}</p> <!-- Use result object for lesson_title -->
                            </h2>
                            <p><span class="font-semibold">Term:</span> ${result.term}</p>
                            <p><span class="font-semibold">Topic:</span> ${result.topic}</p>
                            <p><span class="font-semibold">Week:</span> ${result.week}</p>
                            <p><span class="font-semibold">Grade Level:</span> ${result.grade_level}</p>
                            <p><span class="font-semibold">Date:</span> ${result.date}</p>
                            <hr class="my-4">
                            <a href="/lesson_plan/${result.id}" class="py-1 px-2 rounded bg-yellow-400">View Lesson Plan</a>
                        </div>
                    </div>
                    `;
                });
            } else {
                html += `
                <p>No lesson plans found here.</p>
                `;
            }
            resultsBody.innerHTML = html;
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}