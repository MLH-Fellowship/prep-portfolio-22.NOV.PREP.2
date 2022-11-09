const url = "https://api.github.com/repos/MLH-Fellowship/prep-portfolio-22.NOV.PREP.2/contributors"

fetch(url)
  .then((response) => response.json())
  .then((data) => {
    const sorted = data.sort((a, b) => b.contributions - a.contributions);
        let table = `<thead>
            <tr id="table-head">
                <th>Rank</th>
                <th>Name</th>
                <th>Contributions</th>
            </tr>
        </thead>`

        sorted.forEach((item) => {
            // Rank 1
            if (sorted.indexOf(item) + 1 === 1) {
                table += `<tbody>
                <tr id="rank-first">
                    <td><strong>${sorted.indexOf(item) + 1}</strong></td>
                    <td><img class="table-avatar" src="${item.avatar_url}"></img>${item.login}🥇</td>
                    <td>${item.contributions}</td>
                </tr>
            </tbody>`
            }

            // Rank 2
            else if (sorted.indexOf(item) + 1 === 2) {
                table += `<tbody>
                <tr id="rank-second">
                    <td><strong>${sorted.indexOf(item) + 1}</strong></td>
                    <td><img class="table-avatar" src="${item.avatar_url}"></img>${item.login}🥈</td>
                    <td>${item.contributions}</td>
                </tr>
            </tbody>`
                
            }

            // Rank 3
            else if (sorted.indexOf(item) + 1 === 3) {
                table += `<tbody>
                <tr id="rank-third">
                    <td><strong>${sorted.indexOf(item) + 1}</strong></td>
                    <td><img class="table-avatar" src="${item.avatar_url}"></img>${item.login}🥉</td>
                    <td>${item.contributions}</td>
                </tr>
            </tbody>`
            }

            // Rank 4+
            else {
                table += `<tbody>
                <tr>
                    <td>${sorted.indexOf(item) + 1}</td>
                    <td><img class="table-avatar" src="${item.avatar_url}"></img>${item.login}</td>
                    <td>${item.contributions}</td>
                </tr>
            </tbody>`
        }
        })

        document.getElementById("leaderboard-table").innerHTML = table
    });