<template>
    <div class="row justify-content-center">
        <div class="col-md-5">
            <h3 class="text-center">Wort hinzufügen</h3>
            <form @submit.prevent="onFormSubmit">
                <div class="form-group">
                    <label>Spanisch</label>
                    <input type="text" class="form-control" v-model="Vokabel.Spanisch" required>
                </div>

                <div class="form-group">
                    <label>Deutsch</label>
                    <input type="text" class="form-control" v-model="Vokabel.Deutsch" required>
                </div>

                <div class="form-group">
                    <label>Anmerkungen</label>
                    <input type="text" class="form-control" v-model="Vokabel.Anmerkung" >
                </div>

                <div class="form-group">
                    <button class="btn btn-primary btn-block">Add Vocabulary</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
    import { db } from '../firebaseDb';

    export default {
        data() {
            return {
                Vokabel: {
                    Spanisch:"",
                    Deutsch:"",
                    Anmerkung:""
                }
            }
        },
        methods: {
            onFormSubmit(event) {
                event.preventDefault()
                db.collection('Vokabeln').add(this.Vokabel).then(() => {
                    alert("Vocabulary successfully created!");
                    this.Vokabel.Spanisch = ''
                    this.Vokabel.Deutsch = ''
                    this.Vokabel.Anmerkung = ''
                }).catch((error) => {
                    console.log(error);
                });
            }
        }
    }
</script>