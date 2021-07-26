<template>
    <div class="row justify-content-center">
        <div class="col-md-5">
            <h3 class="text-center">Update User</h3>
            <form @submit.prevent="onUpdateForm">
                <div class="form-group">
                    <label>Deutsch</label>
                    <input type="text" class="form-control" v-model="Vokabel.Deutsch" required>
                </div>

               <div class="form-group">
                    <label>Spanisch</label>
                    <input type="text" class="form-control" v-model="Vokabel.Spanisch" required>
                </div>

                 <div class="form-group">
                    <label>Anmerkung</label>
                    <input type="text" class="form-control" v-model="Vokabel.Anmerkung" >
                </div>

                <div class="form-group">
                    <button class="btn btn-primary btn-block">Add User</button>
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
                }
            }
        },
        created() {
            let dbRef = db.collection('Vokabeln').doc(this.$route.params.id);
            dbRef.get().then((doc) => {
                this.Vokabel = doc.data();
            }).catch((error) => {
                console.log(error)
            })
        },
        methods: {
            onUpdateForm(event) {
                event.preventDefault()
                db.collection('Vokabeln').doc(this.$route.params.id)
                .update(this.Vokabel).then(() => {
                    console.log("User successfully updated!");
                    this.$router.push('/list')
                }).catch((error) => {
                    console.log(error);
                });
            }
        }
    }
</script>