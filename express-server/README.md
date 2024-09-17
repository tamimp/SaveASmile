# React & Express Demo

## Using dotenv

1. Create a .env file in your project and add `KEY=VALUE` pairs in that file:
   Note:

-   Sometimes projects have an example .env file, like the .env.example file in this project. You can copy this and rename it to .env
-   A typical convention for env vars is the var names to be all uppercase and words separated by underscores

For Example:

```
PORT=yourport
DBNAME=yourdbname
DBUSER=yourdbuser
DBPASS=yourdbpass
APIKEY=yourapikey
```

2. Install dotenv:
   `npm install dotenv`
3. Import dotenv into the file(s) that will use the environment variables:
   `import "dotenv/config";`
4. Optional: Assign the env values to variables:
   ex) `const { PORT } = process.env;`
5. Use the env variables in your app!
   `console.log(PORT);`
