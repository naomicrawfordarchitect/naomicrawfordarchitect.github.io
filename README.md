
Canbury Architects website
--------------------------

This site uses the automatic Jekyll support in GitHub Pages.
https://help.github.com/articles/using-jekyll-with-pages/

Markdown is transformed (into `_site` directory) on push to GitHub.


Dev
---
- Install Ruby
- `gem install bundler`
- `cd /path/to/project`, `bundle install`
- `./run.sh`

Then visit `http://localhost:4000`

Estimator
---------
The estimator is built using React so dev is separate.

- `cd estimator`
- `npm i`
- `gulp`

Then visit `http://localhost:8080`

NOTE: An optimised build is available via `gulp prod`.
