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
    "jerrendang": "Jerren Dang",
    "0904-mansi": "Mansi Mishra"
}

const urls = [
    "https://api.github.com/search/issues?q=org:MLH-Fellowship%20repo:prep-portfolio-22.NOV.PREP.2%20author:ciradu2204%20type:pr%20is:merged",
    "https://api.github.com/search/issues?q=org:MLH-Fellowship%20repo:prep-portfolio-22.NOV.PREP.2%20author:ShivamTyagi12345%20type:pr%20is:merged",
    "https://api.github.com/search/issues?q=org:MLH-Fellowship%20repo:prep-portfolio-22.NOV.PREP.2%20author:miador%20type:pr%20is:merged",
    "https://api.github.com/search/issues?q=org:MLH-Fellowship%20repo:prep-portfolio-22.NOV.PREP.2%20author:IvyJeptoo%20type:pr%20is:merged",
    "https://api.github.com/search/issues?q=org:MLH-Fellowship%20repo:prep-portfolio-22.NOV.PREP.2%20author:trinhcaokhoa%20type:pr%20is:merged",
    "https://api.github.com/search/issues?q=org:MLH-Fellowship%20repo:prep-portfolio-22.NOV.PREP.2%20author:ahmedemad242%20type:pr%20is:merged",
    "https://api.github.com/search/issues?q=org:MLH-Fellowship%20repo:prep-portfolio-22.NOV.PREP.2%20author:armanmoztar%20type:pr%20is:merged",
    "https://api.github.com/search/issues?q=org:MLH-Fellowship%20repo:prep-portfolio-22.NOV.PREP.2%20author:namitaarya%20type:pr%20is:merged",
    "https://api.github.com/search/issues?q=org:MLH-Fellowship%20repo:prep-portfolio-22.NOV.PREP.2%20author:kpham841%20type:pr%20is:merged",
    "https://api.github.com/search/issues?q=org:MLH-Fellowship%20repo:prep-portfolio-22.NOV.PREP.2%20author:0904-mansi%20type:pr%20is:merged"
]

Promise.all(urls.map(url => fetch(url))).then(responses => Promise.all(responses.map(res => res.json()))).then(data => {
    let sortedData = data.sort((a, b) => b.total_count - a.total_count)

    let noraObj = {
        "items": {
            "login": "norachams",
            "avatar_url": "https://avatars.githubusercontent.com/u/78521390?v=4"
        },
        "total_count": 1
    }
    sortedData.push(noraObj)

    let bhawnaObj = {
        "items": {
                "login": "Bhawna1203",
                "avatar_url": "https://avatars.githubusercontent.com/u/81790585?v=4"
        },
        "total_count": 1
    }
    sortedData.push(bhawnaObj)

    let jerrenObj = {
        "items": {
                "login": "jerrendang",
                "avatar_url": "https://avatars.githubusercontent.com/u/16262549?v=4"
        },
        "total_count": 1
    }
    sortedData.push(jerrenObj)

    let carlyObj = {
        "items": {
                "login": "carlykiang",
                "avatar_url": "https://avatars.githubusercontent.com/u/86347313?v=4"
        },
        "total_count": 0
    }
    sortedData.push(carlyObj)

    let youngObj = {
        "items": {
                "login": "youngjun827",
                "avatar_url": "https://avatars.githubusercontent.com/u/91986838?v=4"
        },
        "total_count": 0
    }
    sortedData.push(youngObj)

        let table = `<thead>
            <tr id="table-head">
                <th>Picture</th>
                <th>Name</th>
                <th>Contributions</th>
            </tr>
        </thead>`;

        // loop through the sorted data
        for (let i = 0; i < sortedData.length; i++) {
            console.log(i)
            if (i >= 10) {
                table += `<tbody>
                <tr>
                <td><img class="table-avatar" src="${sortedData[i].items.avatar_url}"></img></td>
                <td><a href="https://github.com/${sortedData[i].items.login}">${userToRealName[sortedData[i].items.login]}</a></td>
                <td>${sortedData[i].total_count}</td>
                </tr>
            </tbody>`

            }
            else {
                table += `<tbody>
                <tr>
                <td><img class="table-avatar" src="${sortedData[i].items[0].user.avatar_url}"></img></td>
                <td><a href="https://github.com/${sortedData[i].items[0].user.login}">${userToRealName[sortedData[i].items[0].user.login]}</a></td>
                <td>${sortedData[i].total_count}</td>
                </tr>
            </tbody>`
            }
        }
        document.getElementById("leaderboard-table").innerHTML = table;
    });