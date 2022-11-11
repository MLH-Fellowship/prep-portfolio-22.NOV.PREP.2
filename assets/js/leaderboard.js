const url = "https://api.github.com/repos/MLH-Fellowship/prep-portfolio-22.NOV.PREP.2/contributors"

const userToRealName = {
    "ciradu2204": "Cynthia Iradukunda",
    "ShivamTyagi12345": "Shivam Tyagi",
    "miador": "Yusuf Karadag",
    "IvyJeptoo": "Ivy Jeptoo",
    "trinhcaokhoa": "Khoa Trinh",
    "ahmedemad242": "Ahmed Emad",
    "carlykiang": "Carly Kiang",
    "armanmoztar": "Arman Moztarzadeh",
    "norachams": "Nora Chamseddin",
    "Bhawna1203": "Bhawna Chauhan",
    "namitaarya": "Namita Arya",
    "youngjun827": "Young Jun Joo",
    "kpham841": "Khiem Pham",
    "jerrendang": "Jerren Dang"
}

fetch(url)
  .then((response) => response.json())
  .then((data) => {
    const sorted = data.sort((a, b) => b.contributions - a.contributions);
    const newSorted = sorted.filter((user) => userToRealName[user.login]);

    let table = `<thead>
            <tr id="table-head">
                <th>Picture</th>
                <th>Name</th>
                <th>Contributions</th>
            </tr>
        </thead>`;

        newSorted.forEach((item) => {
                table += `<tbody>
                <tr>
                    <td><img class="table-avatar" src="${item.avatar_url}"></img></td>
                    <td><a href="https://github.com/${item.login}">${userToRealName[item.login]}</a></td>
                    <td>${item.contributions}</td>
                </tr>
            </tbody>`
        })
        document.getElementById("leaderboard-table").innerHTML = table;
    });