document.getElementById('login').onclick = function () {
  const handle = document.getElementById('handle').value;
  const results = document.getElementById('results');
  const heading = document.getElementById('heading')

  const URL = `https://api.github.com/users/${handle}/repos?per_page=100`;

  fetch(`https://api.github.com/users/${handle}`)
    .then(res => res.json())
    .then(data => data.name ? heading.innerHTML = `Welcome, ${data.name}` : results.innerHTML = 'User not found!')
    .catch((error) => results.innerHTML = 'User not found!');

  fetch(URL)
  .then((response) => response.json()) //Converting the response to a JSON object
    .then((data) => {
      // let isLoaded = false;
      // hello to username
    results.innerHTML = '';  
    for (const result of data) {
      const child = document.createElement('a');
      child.onclick = function() {
        chrome.tabs.create({ url: result.html_url });
      }
      child.href = result.html_url;
      child.innerHTML = result.name;
      child.style.display = "block";
      results.appendChild(child);
    }
      // isLoaded = true
  })
  .catch((error) => results.innerHTML = 'User not found!');
}

// {
//     "id": 269210788,
//     "node_id": "MDEwOlJlcG9zaXRvcnkyNjkyMTA3ODg=",
//     "name": "jest_testing_review",
//     "full_name": "harlanevans/jest_testing_review",
//     "private": false,
//     "owner": {
//       "login": "harlanevans",
//       "id": 35747338,
//       "node_id": "MDQ6VXNlcjM1NzQ3MzM4",
//       "avatar_url": "https://avatars0.githubusercontent.com/u/35747338?v=4",
//       "gravatar_id": "",
//       "url": "https://api.github.com/users/harlanevans",
//       "html_url": "https://github.com/harlanevans",
//       "followers_url": "https://api.github.com/users/harlanevans/followers",
//       "following_url": "https://api.github.com/users/harlanevans/following{/other_user}",
//       "gists_url": "https://api.github.com/users/harlanevans/gists{/gist_id}",
//       "starred_url": "https://api.github.com/users/harlanevans/starred{/owner}{/repo}",
//       "subscriptions_url": "https://api.github.com/users/harlanevans/subscriptions",
//       "organizations_url": "https://api.github.com/users/harlanevans/orgs",
//       "repos_url": "https://api.github.com/users/harlanevans/repos",
//       "events_url": "https://api.github.com/users/harlanevans/events{/privacy}",
//       "received_events_url": "https://api.github.com/users/harlanevans/received_events",
//       "type": "User",
//       "site_admin": false
//     },

//     "html_url": "https://github.com/harlanevans/jest_testing_review",
//     "description": null,
//     "fork": false,
//     "url": "https://api.github.com/repos/harlanevans/jest_testing_review",
//     "forks_url": "https://api.github.com/repos/harlanevans/jest_testing_review/forks",
//     "keys_url": "https://api.github.com/repos/harlanevans/jest_testing_review/keys{/key_id}",
//     "collaborators_url": "https://api.github.com/repos/harlanevans/jest_testing_review/collaborators{/collaborator}",
//     "teams_url": "https://api.github.com/repos/harlanevans/jest_testing_review/teams",
//     "hooks_url": "https://api.github.com/repos/harlanevans/jest_testing_review/hooks",
//     "issue_events_url": "https://api.github.com/repos/harlanevans/jest_testing_review/issues/events{/number}",
//     "events_url": "https://api.github.com/repos/harlanevans/jest_testing_review/events",
//     "assignees_url": "https://api.github.com/repos/harlanevans/jest_testing_review/assignees{/user}",
//     "branches_url": "https://api.github.com/repos/harlanevans/jest_testing_review/branches{/branch}",
//     "tags_url": "https://api.github.com/repos/harlanevans/jest_testing_review/tags",
//     "blobs_url": "https://api.github.com/repos/harlanevans/jest_testing_review/git/blobs{/sha}",
//     "git_tags_url": "https://api.github.com/repos/harlanevans/jest_testing_review/git/tags{/sha}",
//     "git_refs_url": "https://api.github.com/repos/harlanevans/jest_testing_review/git/refs{/sha}",
//     "trees_url": "https://api.github.com/repos/harlanevans/jest_testing_review/git/trees{/sha}",
//     "statuses_url": "https://api.github.com/repos/harlanevans/jest_testing_review/statuses/{sha}",
//     "languages_url": "https://api.github.com/repos/harlanevans/jest_testing_review/languages",
//     "stargazers_url": "https://api.github.com/repos/harlanevans/jest_testing_review/stargazers",
//     "contributors_url": "https://api.github.com/repos/harlanevans/jest_testing_review/contributors",
//     "subscribers_url": "https://api.github.com/repos/harlanevans/jest_testing_review/subscribers",
//     "subscription_url": "https://api.github.com/repos/harlanevans/jest_testing_review/subscription",
//     "commits_url": "https://api.github.com/repos/harlanevans/jest_testing_review/commits{/sha}",
//     "git_commits_url": "https://api.github.com/repos/harlanevans/jest_testing_review/git/commits{/sha}",
//     "comments_url": "https://api.github.com/repos/harlanevans/jest_testing_review/comments{/number}",
//     "issue_comment_url": "https://api.github.com/repos/harlanevans/jest_testing_review/issues/comments{/number}",
//     "contents_url": "https://api.github.com/repos/harlanevans/jest_testing_review/contents/{+path}",
//     "compare_url": "https://api.github.com/repos/harlanevans/jest_testing_review/compare/{base}...{head}",
//     "merges_url": "https://api.github.com/repos/harlanevans/jest_testing_review/merges",
//     "archive_url": "https://api.github.com/repos/harlanevans/jest_testing_review/{archive_format}{/ref}",
//     "downloads_url": "https://api.github.com/repos/harlanevans/jest_testing_review/downloads",
//     "issues_url": "https://api.github.com/repos/harlanevans/jest_testing_review/issues{/number}",
//     "pulls_url": "https://api.github.com/repos/harlanevans/jest_testing_review/pulls{/number}",
//     "milestones_url": "https://api.github.com/repos/harlanevans/jest_testing_review/milestones{/number}",
//     "notifications_url": "https://api.github.com/repos/harlanevans/jest_testing_review/notifications{?since,all,participating}",
//     "labels_url": "https://api.github.com/repos/harlanevans/jest_testing_review/labels{/name}",
//     "releases_url": "https://api.github.com/repos/harlanevans/jest_testing_review/releases{/id}",
//     "deployments_url": "https://api.github.com/repos/harlanevans/jest_testing_review/deployments",
//     "created_at": "2020-06-03T22:49:46Z",
//     "updated_at": "2020-06-03T22:51:43Z",
//     "pushed_at": "2020-07-21T00:02:01Z",
//     "git_url": "git://github.com/harlanevans/jest_testing_review.git",
//     "ssh_url": "git@github.com:harlanevans/jest_testing_review.git",
//     "clone_url": "https://github.com/harlanevans/jest_testing_review.git",
//     "svn_url": "https://github.com/harlanevans/jest_testing_review",
//     "homepage": null,
//     "size": 159,
//     "stargazers_count": 0,
//     "watchers_count": 0,
//     "language": "JavaScript",
//     "has_issues": true,
//     "has_projects": true,
//     "has_downloads": true,
//     "has_wiki": true,
//     "has_pages": false,
//     "forks_count": 0,
//     "mirror_url": null,
//     "archived": false,
//     "disabled": false,
//     "open_issues_count": 1,
//     "license": null,
//     "forks": 0,
//     "open_issues": 1,
//     "watchers": 0,
//     "default_branch": "master"
//   },



// fetch(URL,  init:{method: 'GET', headers:{},  body})
//     .then(response => response.json())
// 		.then(data => console.log(data))
//   .catch(error => console.log(error));
    
// URL - Url of the resource
// Headers - Headers for the request( Content-Type, ...)
// Body - Request content
// Init - Contains request body and headers and other configurations such as the request method.

// "content_scripts": [{
  //   "js": ["popup.js"],
  //   "matches": ["<all_urls>"]
  // }],