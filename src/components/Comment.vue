<template>
  <a href="#demo"><font-awesome-icon icon="fa-solid fa-comment" /></a>
  <div id="demo" class="container">
    <div class="container_content">
      <div id="app">
      <!-- <input type="text" placeholder="Email" required v-model="email"> -->
      <input type="text" placeholder="Type your comment here." v-model="commentCMT" @keyup.enter="addcomment"> <br>
      <!-- <input v-model="commentCMT" @keyup.enter="addcomment" type="text" /><br /> -->
      <button @click="addcomment()" class="add">Comment</button>
    </div>
    <ul>
      <div id="option"
        v-for="comment of comments"
        :class="{ bought: comment.bought }"
        :key="comment.id"
      >
      <!-- @click="boughtcomment(comment.id)"
      @dblclick="removecomment(comment.id)" -->
        <li>
        {{ comment.CMT }}
        
      </li>
      <!-- <a class="delet" @click="removecomment(comment.id)">&times;</a> -->
        <button class="delet" @click="removecomment(comment.id)">&times;</button>
      </div>
      
    </ul>
    <a href="#" class="container_close">&times;</a>
    </div>
    
  </div>
</template>
<script>
import axios from "axios";
export default {
  CMT: "App",
  data() {
    return {
      comments: [],
      commentCMT: "",
    };
  },
  async created() {
    try {
      const res = await axios.get(`http://localhost:3000/comments`);
      this.comments = res.data;
    } catch (error) {
      console.log(error);
    }
  },
  methods: {
    // async boughtcomment(id) {
    //   await axios.patch(`http://localhost:3000/comments/${id}`, {
    //     bought: true,
    //   });
    //   this.comments = this.comments.map((comment) => {
    //     if (comment.id === id) {
    //       comment.bought = true;
    //     }
    //     return comment;
    //   });
    // },
    //on double clicking the comment, it will call removecomment(id) method
    removecomment(id) {
      axios.delete(`http://localhost:3000/comments/${id}`);
      this.comments = this.comments.filter((comment) => comment.id !== id);
    },
    //method for adding comments in the list
    async addcomment() {
      const res = await axios.post(`http://localhost:3000/comments`, {
        CMT: this.commentCMT,
      });
      this.comments = [...this.comments, res.data];
      this.commentCMT = "";
    },
  },
};
</script>

<style>
.add{
  padding: 10px;
  margin-top: 10px;
  border-radius: 5px;
  border-color: aqua;
  background: aquamarine;
}
#app {
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  justify-content: space-between;
}
li {
  list-style: none;
  
}
#option{
  border: 1px solid;
  border-color: wheat;
  border-radius: 5px;
  justify-content: space-between;
  padding: 15px;
  margin: 10px;
  background-color: wheat;
  position: relative;
  width: 500px;
  max-width: 90%;
}
/* button{
  padding: 5px;
  margin-top: 50px;
  border-radius: 30px;
  text-decoration: none ;

} */

input {
    border-radius: 4px;
    position: relative;
    width: 500px;
    max-width: 90%;
    background: white;
    padding: 1.5em 2em;
  }
.container{
  visibility: hidden;
  opacity: 0;
  position: absolute;
  top: 0; right: 0;
  bottom: 0; left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(77, 77, 77, .7);
  transition: all .4s;
}
.container:target {
  visibility: visible;
  opacity: 1;
}
.container_content {
  border-radius: 4px;
  position: relative;
  width: 500px;
  max-width: 90%;
  background: white;
  padding: 1.5em 2em;
}

.container_close {
  position: absolute;
  top: 10px;
  right: 10px;
  color: grey;
  text-decoration: none;
}
.delet{
  position: absolute;
  top: 10px;
  right: 10px;
  color: grey;
  text-decoration: none;
  background: wheat;
  border: none;
}
a {
  text-decoration: none;
  padding: 5px;
  /* background-color: wheat; */
  text-transform: uppercase;
  color: black;
}
</style>