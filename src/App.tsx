import React, { useState } from 'react';
import './App.css';
import { ListOfWords } from './components/list-of-words/index';
import { IWordModel } from './config/word';
import { OXFORD_WORDS, IOxfordModel } from './config/oxford';
import { ANKI_WORDS } from './config/anki';
import {SwaggerDemoComponent} from "swagger-typescript-generator";

const createWords = ():IWordModel[] => {
  return ANKI_WORDS.map(ankiWord=>{
    const oxford:IOxfordModel|undefined = OXFORD_WORDS.find(f=>f.word === ankiWord.word);
    if(oxford) {
      return {
        word:oxford.word,
        src:ankiWord.src,
        meaning:ankiWord.meaning,
        examples:ankiWord.examples,

        types:oxford.types,
        original:oxford.original,
        levels:oxford.levels
  }
}
    return {
      word:ankiWord.word,
        src:ankiWord.src,
        meaning:ankiWord.meaning,
        examples:ankiWord.examples,

        types:[],
        original:'',
        levels:[]
    }
  }).filter(f=>f);
}
function App() {
  const [words] = useState<IWordModel[]>(createWords())
  return (
    <div className="App">
      <SwaggerDemoComponent apiUrls={["https://flipdish-yellow-team-qa.azurewebsites.net/swagger/docs/v1.0"]}  />
      <ListOfWords words={words} />
    </div>
  );
}

export default App;
