### Deploy to github pages

- push to `dev`
- run `npm run build`
- checkout `master`
- delete everything except `.git`, `.cache`, `node_modules`, & `.gitignore`
- move all files in `public/` to root
- delete `public/`
- commit and push
