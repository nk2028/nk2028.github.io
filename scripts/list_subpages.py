import requests
import sys

username = 'nk2028'

response = requests.get(
    f'https://api.github.com/users/{username}/repos?type=owner&per_page=100'
)
repos = response.json()

excluded_repos = 'hello-world'

for repo in repos:
    if repo['name'] not in excluded_repos and repo['has_pages']:
        if not repo['homepage'].startswith('https://nk2028.shn.hk/'):
            print(
                f'W: homepage of {repo['name']} is {repo['homepage']}', file=sys.stderr
            )
            continue
        print(repo['homepage'])
