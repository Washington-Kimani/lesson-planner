const searchInput = document.querySelector('#search');
const resultsBody = document.querySelector('#results');

loadData('');

function loadData(query = '') {
    fetch(`/search/?query=${encodeURIComponent(query)}`)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(results => {
            let html = '';
            if (results.length > 0) {
                results.forEach((result,index) => {
                    html += `
                    <tr>
                        <td>${index+1}</td>
                        <td>${result.full_name}</td>
                        <td>${result.admission_number}</td>
                        <td>${result.guardian_or_parent_number}</td>
                        <td>${result.grade}</td>
                        <td>${result.home_address}</td>
                        <td>${result.comments}</td>
                        <td>${result.subject_one}</td>
                        <td>${result.subject_two}</td>
                        <td>
                            <form action="/delete/${result.id}" method="post">
                                <input type="hidden" name="_method" value="DELETE" />
                                <button type="submit" class="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded">Remove</button>
                            </form>
                        </td>
                    </tr>
                    `;
                });
            } else {
                html += `
                <tr>
                    <td colspan="10" class="text-center">No Data Found</td>
                </tr>
                `;
            }
            resultsBody.innerHTML = html;
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}

searchInput.addEventListener('input', function () {
    const query = searchInput.value.trim();
    loadData(query);
});
