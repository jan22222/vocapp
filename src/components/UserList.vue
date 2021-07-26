<template>
    <div class="row">
        <div class="col-md-12">
            <table class="table table-striped">
                <thead>
                    <tr>
                        
                        <th>Deutsch</th>
                        <th>Spanisch</th>
                        <th>Anmerkung</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="Vokabel in Vokabeln" :key="Vokabel.key">
                        <td>{{ Vokabel.Deutsch }}</td>
                        <td>{{ Vokabel.Spanisch }}</td>
                        <td>{{ Vokabel.Anmerkung }}</td>
                        <td>
                            <router-link :to="{name: 'edit', params: { id: Vokabel.key }}" class="btn btn-primary">Edit
                            </router-link>
                            <button @click.prevent="deleteUser(Vokabel.key)" class="btn btn-danger">Delete</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
    import { db } from '../firebaseDb';
    
    export default {
        data() {
            return {
                Vokabeln: []
            }
        },
        mounted() {
            this.load();
           
        },
        methods: {
            deleteUser(id){
              if (window.confirm("Do you really want to delete?")) {
                db.collection("Vokabeln").doc(id).delete().then(() => {
                    console.log("Document deleted!");
                    this.load();
                })
                .catch((error) => {
                    console.error(error);
                })
              }
            },
             load()
        {
             db.collection('Vokabeln').onSnapshot((snapshotChange) => {
                this.Vokabeln = [];
                snapshotChange.forEach((doc) => {
                    this.Vokabeln.push({
                        key: doc.id,
                        Deutsch: doc.data().Deutsch,
                        Spanisch: doc.data().Spanisch,
                        Anmerkung: doc.data().Anmerkung
                    })
                });
            })
        }
        }
       
    }
</script>

<style>
    .btn-primary {
        margin-right: 12px;
    }
</style>