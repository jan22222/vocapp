<template>
  <div class="question-box-container">
  

    <b-jumbotron>
      
      <template slot="lead">
       {{currentQuestion}}
      </template>

      <hr class="my-4" v-if="shuffledAnswers.length!=0"/>

      <b-list-group  v-if="shuffledAnswers.length">
        <b-list-group-item
          v-for="(antwort, index) in shuffledAnswers"
          :key="index"
          @click.prevent="selectedIndex=index"
          :class="answerClass(index)"
        >
          {{antwort}}
        </b-list-group-item>
      </b-list-group>

      <b-button
        variant="primary"
        @click="submitAnswer()"
        :disabled="selectedIndex === null || answered"
      >
        Submit
      </b-button>
      <b-button 
      :disabled="numTotal+1>länge"
      @click="indexErhöhen()" 
  
      variant="success">
        Next
      </b-button>
    </b-jumbotron>
  </div>
</template>

<script>


export default {
  props: {
    index: Number,
    next: Function,
    increment: Function,
    currentQuestion: String,
    alleAntworten: Array,
    currentAnswer: String,
    neuMixen: Function,
    shuffledAnswers:Array,
    indexErhöhen:Function,
    correctIndex: Number,
    länge:Number,
    numTotal:Number,
    selectedIndex:Number,
    answered: Boolean
    
  },
  data: function() {
    return {
    
      
      
    }
  }
  ,
  
  methods: {
    
    selectAnswer(index) {
      this.selectedIndex = index
    },
    submitAnswer() {
      let isCorrect = false

      if (this.selectedIndex === this.correctIndex) {
        isCorrect = true
      }
      this.answered = true

      this.increment(isCorrect)
    },
    answerClass(index) {
      let answerClass = ''

      if (!this.answered && this.selectedIndex === index) {
        answerClass = 'selected'
      } else if (this.answered && this.correctIndex === index) {
        answerClass = 'correct'
      } else if (this.answered &&
        this.selectedIndex === index &&
        this.correctIndex !== index
      ) {
        answerClass = 'incorrect'
      }

      return answerClass
    }
  }
}
</script>

<style scoped>
.list-group {
  margin-bottom: 15px;
}

.list-group-item:hover {
  background: #EEE;
  cursor: pointer;
}

.btn {
  margin: 0 5px;
}

.selected {
  background-color: lightblue;
}

.correct {
  background-color: lightgreen;
}

.incorrect {
  background-color: red;
}
</style>
