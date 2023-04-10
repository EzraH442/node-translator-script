# Translator

A quick node script that I wrote to automatically covert a file of french words to yaml file in the form `<french word>: <english word>` that I could use to automatically generate flashcards

Instructions for use:

1. Create a free API key for [deepL](https://www.deepl.com/pro-api?cta=header-pro-api/) (gives you 500,000 free characters per month, about 2/3 of the first harry potter book)
2. create a file named .env with your API key in the following format

```
API_KEY="<api key here>"
```

3. change the variables of inFile and outFile to match whatever files you wnat
4. run `node ./src/index.js`
