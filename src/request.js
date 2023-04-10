import axios from 'axios';

const url = 'https://api-free.deepl.com/v2/translate'

const options = {'source_lang': 'FR', 'target_lang': 'EN'}

const makeTranslationRequest = async (words, key) => {
  return axios.post(
    url, 
    { text: words, ...options }, 
    { headers: { 'Authorization': `DeepL-Auth-Key ${key}` }}
  ).then((res) => {
    return res.data.translations.map((row) => {
      return row.text;
    })
  }).catch((e) => {
    console.log(e)
  })
}

export default makeTranslationRequest;