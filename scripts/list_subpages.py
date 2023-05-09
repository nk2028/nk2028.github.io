import requests

username = 'nk2028'

response = requests.get(f'https://api.github.com/users/{username}/repos?type=owner')
repos = response.json()

excluded_repos = 'hello-world'

for repo in repos:
    if repo['name'] not in excluded_repos and repo['has_pages']:
        assert repo['homepage'].startswith('https://nk2028.shn.hk/')
        print(repo['homepage'])
