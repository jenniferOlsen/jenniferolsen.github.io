### Initial Setup

- Clone this repo
- Run `npm install`

### Writing blog post

- Write your blog post in markdown format under `src/posts`. Refer the existing markdown template for title and date.
- Then run `npx gatsby develop` to load the page in your local machine. Usually loads in [http://localhost:8000](http://localhost:8000)

### Deploy to github pages

- push to `dev`
- run `npm run build`
- checkout `master`
- delete everything except `.git`, `.cache`, `node_modules`, & `.gitignore`
- move all files in `public/` to root
- delete `public/`
- commit and push
