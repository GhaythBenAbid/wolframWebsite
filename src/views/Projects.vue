<template>
  <div class="text-center ">

    <v-form>
    <h1>Name</h1>
    <v-text-field v-model="name"></v-text-field>
    <h1>description</h1>
    <v-text-field v-model="description"></v-text-field>
    <input type="file" ref="file"  @change="uploadfile">
    <v-btn @click="upload"></v-btn>
    </v-form>


        <img src="../assets/FINAL.svg" width="500" alt="">

  </div>
</template>

<script>
import axios from 'axios';

export default {
  data(){
    return{
      file:'',
      name:'',
      description:'',
    }
  },


  methods:{
    uploadfile(){
      this.file = this.$refs.file.files[0];
    },


    async upload(){

      const form = new FormData();
      form.append('file' , this.file);
      form.append('name' , this.name);
      form.append('description' , this.description);
      await axios.post("http://localhost:3000/image" , form);
    }
  },


  

  
};
</script>

<style>
</style>