<template>
  <div id="app">
      <header2
    :numCorrect='numCorrect'
    :numTotal='numTotal'/>
    <questionbox 
    :shuffledAnswers="shuffledAnswers" 
    :indexErhöhen="indexErhöhen"
    :correctIndex="correctIndex"
    :länge="länge"
    :numTotal="numTotal"
    :currentQuestion="currentQuestion"
    :increment="increment"
    :answered="answered"
    :selectedIndex="selectedIndex"
    />
  </div>
</template>

<script>

import _ from 'lodash'
import { db } from '../firebaseDb';
import questionbox from  './QuestionBox.vue'
import header2 from  './Header2.vue'
export default {
  name: 'app',
  components: {
    questionbox,
   header2
  },
  data() {
    return {
      answered: false,
      Vokabeln: [],
      index: 0,
      numCorrect: 0,
      numTotal:0,
      correctIndex: 0,
      currentQuestion: String,
      currentAnswer: String,
      zufallszahl:0,
      zufälligeFalscheAntworten:Array,
      zfa1: String,
      zfa2: String,
      zfa3: String,
      zfa4: String,
      zfa5: String,
      länge: Number,
      alleAntworten:[],
      shuffledAnswers:Array,
      zufallszahl1: Number,
      zufallszahl2: Number,
      zufallszahl3: Number
     ,
      zufallszahl4: Number
      ,
      zufallszahl5: Number,
      selectedIndex:Number
     
    }
  },
  methods: {
    async indexErhöhen()

     {  this.selectedIndex = await null;
        this.answered = await false; 
        await this.index++;
        await this.numTotal++
        this.currentAnswer = await this.Vokabeln[this.index].Spanisch;
        this.currentQuestion = await this.Vokabeln[this.index].Deutsch;
        await this.z1().then(this.z2()).then(this.z3()).then(this.z4()).then(this.z5());
        await this.a1();
        await this.shuffleAnswers()
     }
       ,
       async a1(){
         this.alleAntworten = await [this.currentAnswer,this.zfa1,this.zfa2,this.zfa3,this.zfa4,this.zfa5]; 
       }
      ,async z1() 
        {
           this.zufallszahl1 = await this.getRandomInt();
            this.zfa1 = await this.Vokabeln[this.zufallszahl1].Spanisch.toString();
        },async z2() 
        {
          this.zufallszahl2 = await this.getRandomInt(); 
            this.zfa2 = await this.Vokabeln[this.zufallszahl2].Spanisch.toString();
        },async z3() 
        {
           this.zufallszahl3 = await this.getRandomInt();
            this.zfa3 = await this.Vokabeln[this.zufallszahl3].Spanisch.toString();

        },async z4() 
        {
           this.zufallszahl4 = await this.getRandomInt();
            this.zfa4 = await this.Vokabeln[this.zufallszahl4].Spanisch.toString();

        },async z5() 
        {
           this.zufallszahl5 = await this.getRandomInt();
            this.zfa5 = await this.Vokabeln[this.zufallszahl5].Spanisch.toString();

        },
      increment(iscorrect){
        if (iscorrect==true){this.numCorrect++}
        this.answered = true;

      },
    async getRandomInt() 
        {
          //liefert einen zufälligen index
          return  Math.floor(Math.random() * this.länge);
            
        },
      async shuffleAnswers() {
      this.shuffledAnswers = await _.shuffle(this.alleAntworten);
      // index der richtigen antwort 0=>x
      this.correctIndex = await this.shuffledAnswers.indexOf(this.alleAntworten[0])
    }},
  async created() {
      const p1 = async () => {
           this.Vokabeln = [];
            var docRef =   db.collection('Vokabeln');
            let allVoc = await docRef.get();
            for(const doc of allVoc.docs){
                this.Vokabeln.push({
                    key: doc.id,
                    Deutsch: doc.data().Deutsch,
                    Spanisch: doc.data().Spanisch,
                    Anmerkung: doc.data().Anmerkung,
                  });
            }
        }
    
    await p1();this.länge= await this.Vokabeln.length;
    this.currentAnswer = await this.Vokabeln[this.index].Spanisch;
    this.currentQuestion = await this.Vokabeln[this.index].Deutsch;
    await this.z1().then(this.z2()).then(this.z3()).then(this.z4()).then(this.z5());
    await this.a1();
    await this.shuffleAnswers()
     
  }
  
   
}

</script>
