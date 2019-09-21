<template>
  <v-app id="inspire">
    <v-content>
      <v-container
        class="fill-width"
        fluid
      >
        <v-row align="center" justify="center">
          <v-col
            cols="12"
            sm="8"
            md="4"
          >
            <v-card class="elevation-12">
                <v-toolbar
                    color="primary"
                    dark
                    flat
                >

                <v-toolbar-title>Brand Suggestion</v-toolbar-title>
                <div class="flex-grow-1"></div>
                </v-toolbar>
                <v-card-text> 
                <v-form>
                        <v-text-field
                        label="Some text.."
                        name="text"
                        type="text"
                        v-model="input_text"
                        >    
                        </v-text-field>
                    </v-form>
                </v-card-text>
                <v-card-actions>
                    <div class="flex-grow-1"></div>
                    <v-btn v-on:click="fetch_data" text icon color="pink">
                        <v-icon>mdi-search</v-icon>
                    </v-btn>
					<div class="flex-grow-1"></div>
                </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
        </v-container>
        <v-container
            fluid
        >
        <v-row align="center" justify="center">
            <v-col sm="6" md="3" v-for="brand in items">
            <v-card>
                <v-img
                    max-width="300px"
                    v-bind:src="brand.img"
                >
                </v-img>
                <v-card-title>{{ brand.name }} - {{ brand.prob }}</v-card-title>
                <v-card-actions>
                    <v-btn 
                    target="_blank" 
                    text 
                    icon color="blue" 
                    v-bind:href="brand.url">
                        <v-icon>mdi-tab</v-icon>
                    </v-btn>
                </v-card-actions>
            </v-card>
            </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
  import axios from "axios";
  export default {
    props: {
      source: String,
    },
    data: () => ({
      input_text: "",
      drawer: null,
      items: [
        { 
        name: "Amazon",
        url: "https://amazon.com",
        prob: 0.87,
        img: "https://images-na.ssl-images-amazon.com/images/G/01/gc/designs/livepreview/amazon_dkblue_noto_email_v2016_us-main._CB468775337_.png"
        },
        { 
        name: "Ebay",
        url: "https://ebay.com",
        prob: 0.1,
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/EBay_logo.svg/1920px-EBay_logo.svg.png"
        },
        { 
        name: "The Guardian",
        url: "https://theguardian.co.uk",
        prob: 0.05,
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/The_Guardian_2018.svg/1920px-The_Guardian_2018.svg.png"
        }
      ],
      brands_dict: {
        "amazon": {
            url: "https://amazon.com",
            name: "Amazon",
            img: "https://images-na.ssl-images-amazon.com/images/G/01/gc/designs/livepreview/amazon_dkblue_noto_email_v2016_us-main._CB"
        },
        "ebay": {
            url: "https://ebay.com",
            name: "Ebay",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/EBay_logo.svg/1920px-EBay_logo.svg.png"
        },
        "theguardian": {
            url: "https://theguardian.co.uk",
            name: "The Guardian",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/The_Guardian_2018.svg/1920px-The_Guardian_2018.svg.png"
        },
        "walmart": {
            url: "https://www.walmart.com",
            name: "Walmart",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Walmart_logo.svg/1920px-Walmart_logo.svg.png",
        },
        "bbc": {
            url: "https://www.bbc.com",
            name: "BBC",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/BBC.svg/1920px-BBC.svg.png"
        },
        "mtv": {
            url: "https://mtv.com",
            name: "MTV",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/MTV_Logo_2010.svg/1920px-MTV_Logo_2010.svg.png"
        },
        "verizon": {
            url: "https://www.verizonwireless.com",
            name: "Verizon Wireless",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Verizon_2015_logo_-vector.svg/1920px-Verizon_2015_logo_-vector.svg.png"
        },
        "dell": {
            url: "https://www.dell.com",
            name: "Dell",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Dell_Logo.svg/1024px-Dell_Logo.svg.png"
        },
        "nike": {
            url: "https://www.nike.com",
            name: "Nike",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Logo_NIKE.svg/1920px-Logo_NIKE.svg.png"
        },
        "target": {
            url: "https://www.target.com",
            name: "Target",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Target_logo.svg/800px-Target_logo.svg.png",
        },
        "nobrand": {
            url: "https://example.com",
            name: "Probably .. nothing?",
            img: "https://images.unsplash.com/photo-1564067361310-5d4c3a5c7643?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
        }
      },
    }),
    methods: {
      fetch_data: function() {

        const vm = this
        console.log(this.input_text);
        axios
          .post(
            "https://cors-anywhere.herokuapp.com/http://34.70.152.7:5000/predict",
            { string: this.input_text}, 
            { "headers" : {"Content-Type":"application/json"}}
          )
          .then(function (response) {
            let idx = 0;
            for (let res of response.data) {
                if (idx >= 3) {
                    break;
                }
                var p = res[1];
                p = Math.floor(p * 100) / 100;
                p = p.toFixed(2); 
                vm.$set(vm.items, idx, {
                    name: vm.brands_dict[res[0]].name,
                    url: vm.brands_dict[res[0]].url,
                    img: vm.brands_dict[res[0]].img,
                    prob: p
                });
                idx += 1;
            }
          })
          .catch(function (error) {
            console.log(error)
          })
      }
    },
  }
</script>
